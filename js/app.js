/* Homeric Odyssey Crash Course — main app */
(() => {
  const app = document.getElementById("app");
  let state = HGStorage.load();

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.darkMode ? "dark" : "light");
  }
  applyTheme();

  function saveRoute(route) {
    state = HGStorage.update(s => { s.lastRoute = route; });
  }

  function go(route) {
    saveRoute(route);
    render(route);
    window.scrollTo(0, 0);
  }

  /** Full lexical line: ὁ λόγος, -ου, m. · verbs show principal parts */
  function formatLexical(w) {
    if (w.lexical) return w.lexical;
    const lemma = w.lemma || "";
    const pos = (w.pos || "").trim();
    const parts = (w.parts || "").trim();
    const artMap = { "ὁ": "m.", "ἡ": "f.", "τό": "n.", "ὁ/ἡ": "m./f." };

    if (artMap[pos]) {
      let gen = "";
      // Prefer abbreviated genitive (-ου, -ης, -εος…) if present anywhere
      const abbr = parts.match(/(-[^\s,;·)]{1,12})/);
      if (abbr) {
        gen = abbr[1];
      } else {
        // Else second comma-field: φρήν, φρενός, ἡ  or  νηῦς (ναῦς), νηός, ἡ
        const bits = parts.split(",").map(s => s.trim());
        if (bits.length >= 2) {
          const g = bits[1].replace(/\s*[\(·].*$/, "").trim();
          if (g && g !== lemma && !/^[ὁἡτό]$/.test(g)) gen = g;
        }
      }
      gen = (gen || "").trim();
      return `${pos} ${lemma}${gen ? ", " + gen : ""}, ${artMap[pos]}`;
    }

    if (pos === "verb" || /^verb/i.test(pos)) {
      return parts ? `${lemma} · ${parts}` : `${lemma} (verb)`;
    }
    if (/adj/i.test(pos)) {
      const rest = parts.replace(new RegExp("^" + lemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ",?\\s*"), "");
      return rest ? `${lemma}, ${rest}` : `${lemma} (adj.)`;
    }
    if (/^adv/i.test(pos)) return `${lemma}, adv.`;
    if (/particle|conj|impersonal|phrase/i.test(pos)) {
      return parts && parts !== lemma ? `${lemma} · ${parts}` : `${lemma} (${pos})`;
    }
    if (parts && parts.length > lemma.length) return parts;
    return pos ? `${lemma} (${pos})` : lemma;
  }

  // Underline the inflected form of `lemma` inside a Greek example line,
  // matching by longest de-accented stem prefix.
  function underlineTarget(line, lemma) {
    if (!line || !lemma) return line || "";
    const strip = s => s.normalize("NFD")
      .replace(/[̀-ͯ]/g, "")   // drop accents/breathings
      .replace(/ς/g, "σ")
      .toLowerCase()
      .replace(/[^α-ωϊϋ]/g, "");         // keep Greek letters only
    const nl = strip(lemma);
    if (nl.length < 2) return line;
    const lcp = (a, b) => { let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++; return i; };
    const lcs = (a, b) => {               // longest common substring length
      let best = 0, prev = new Array(b.length + 1).fill(0);
      for (let i = 1; i <= a.length; i++) {
        const cur = new Array(b.length + 1).fill(0);
        for (let j = 1; j <= b.length; j++) {
          if (a[i - 1] === b[j - 1]) { cur[j] = prev[j - 1] + 1; if (cur[j] > best) best = cur[j]; }
        }
        prev = cur;
      }
      return best;
    };
    const tokens = line.split(/(\s+)/);   // keep whitespace tokens
    const norm = tokens.map(t => /^\s+$/.test(t) ? null : strip(t));
    const mark = idx => { tokens[idx] = `<u class="tgt">${tokens[idx]}</u>`; return tokens.join(""); };

    // Pass 1 — shared stem prefix (strongest signal)
    const pl = norm.map(c => c ? lcp(nl, c) : -1);
    const maxP = Math.max(...pl);
    if (maxP >= 3) return mark(pl.indexOf(maxP));
    if (maxP === 2 && pl.filter(l => l === 2).length === 1) return mark(pl.indexOf(2));

    // Pass 2 — longest shared substring (catches augmented / inflected forms)
    const sl = norm.map(c => c ? lcs(nl, c) : -1);
    const maxS = Math.max(...sl);
    if (maxS >= 4 && sl.filter(l => l === maxS).length === 1) return mark(sl.indexOf(maxS));

    return line; // no confident match — underline nothing
  }

  // ——— Shell helpers ———
  function topbar(opts = {}) {
    const showVocab = opts.vocabBtn !== false;
    const moon = state.darkMode ? "☀" : "☾";
    const themeTitle = state.darkMode ? "Switch to light mode" : "Switch to dark mode";
    return `
      <header class="topbar">
        <div class="topbar-brand" data-go="welcome" role="button" tabindex="0">ΟΔΥΣΣΕΙΑ · Homeric Crash Course</div>
        <div class="topbar-actions">
          <button type="button" class="theme-toggle" id="theme-toggle" title="${themeTitle}" aria-label="${themeTitle}">${moon}</button>
          ${opts.extra || ""}
          ${showVocab ? `<button class="btn btn-accent btn-sm" data-go="vocab">Master Core Vocab</button>` : ""}
          <button class="btn btn-ghost btn-sm" data-go="welcome">Home</button>
        </div>
      </header>
    `;
  }

  function shell(content, opts) {
    return `<div class="app-shell flash">${topbar(opts)}${content}</div>`;
  }

  // ——— Welcome ———
  function viewWelcome() {
    const gDone = Object.keys(state.grammarDone || {}).length;
    const gTotal = GRAMMAR_SECTIONS.length;
    const vDone = Object.keys(state.vocabMastered || {}).length;
    const vTotal = VOCAB.length;
    return shell(`
      <div class="welcome">
        <div class="welcome-header">
          <div class="welcome-title-block">
            <h1>Homeric Greek<br/>for <em>The Odyssey</em></h1>
            <div class="subtitle">A programmed crash course for readers of Biblical Greek</div>
          </div>
          <button class="btn btn-accent" data-go="vocab" title="Core Homeric vocabulary mastery">
            Master Core Homeric Vocabulary
          </button>
        </div>

        <div class="welcome-epigraph">
          <span class="greek">ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον…</span>
          <span class="trans">Tell me, Muse, of the man of many turns…</span>
        </div>

        <figure class="welcome-art">
          <img src="assets/welcome-scene.png" alt="Classical line drawing: young men stand before a seated elder with a staff, in a columned hall" width="1574" height="1330" />
        </figure>

        <div class="welcome-intro">
          <p>You already know New Testament Greek essentials. This app adds only what you need to ramp up quickly into Homeric morphology, dialect, and Odyssey vocabulary — short cards, immediate questions, no grades.</p>
          <p>Work the grammar path, drill core vocab (five-day plan), orient yourself on the map, then read real Odyssey lines with help.</p>
        </div>

        <div class="module-grid">
          <button class="module-card featured" data-go="grammar-hub">
            <div class="mod-greek">γραμματική</div>
            <h3>Grammar & Dialect Course</h3>
            <p>Homeric forms, particles, tmesis, speech frames, and poetic devices — programmed cards with three quiz variants each. Jump to any section.</p>
            <span class="progress-pill">${gDone} / ${gTotal} sections visited</span>
          </button>

          <button class="module-card" data-go="reading-sentences">
            <div class="mod-greek">στίχοι</div>
            <h3>20 Guided Sentences</h3>
            <p>Real Odyssey Greek line by line — walkthrough notes, glosses, then reveal translation.</p>
            <span class="progress-pill is-spacer" aria-hidden="true">·</span>
          </button>

          <button class="module-card" data-go="reading-passages">
            <div class="mod-greek">χωρία</div>
            <h3>10 Guided Passages</h3>
            <p>Short 2–4 line stretches with grammar, vocab, and basic poetic notes — a bridge toward continuous reading.</p>
            <span class="progress-pill is-spacer" aria-hidden="true">·</span>
          </button>

          <button class="module-card featured-sub" data-go="reading-long">
            <div class="mod-greek">ἀνάγνωσις</div>
            <h3>Final Reading · Od. 9.105–184</h3>
            <p>Land of the Cyclopes — ~80 lines with grammar and vocab help.</p>
            <span class="progress-pill is-spacer" aria-hidden="true">·</span>
          </button>
        </div>

        <h3 class="home-section-label">Core Homeric vocabulary mastery</h3>
        <div class="module-grid">
          <button class="module-card" data-go="vocab">
            <div class="mod-greek">λέξεις</div>
            <h3>Core Homeric Vocabulary</h3>
            <p>≈${vTotal} high-value Odyssey words (not NT staples). Five-day mastery + example lines with blanks.</p>
            <span class="progress-pill">${vDone} marked mastered</span>
          </button>

          <button class="module-card" data-go="thematic">
            <div class="mod-greek">εἴδη</div>
            <h3>Vocab by Theme</h3>
            <p>Sky, sea, earth, fighting, speech, body, house, ship — draw your own vase-painting scene for each theme.</p>
            <span class="progress-pill is-spacer" aria-hidden="true">·</span>
          </button>
        </div>

        <h3 class="home-section-label home-section-label--odyssey">Homer’s Odyssey</h3>
        <div class="module-grid">
          <a class="module-card module-card--link" href="https://johnhboyer-sys.github.io/homer-reader/odyssey/book/1/" target="_blank" rel="noopener noreferrer">
            <div class="mod-greek">Ὀδύσσεια</div>
            <h3>Read Homer’s <em>Odyssey</em></h3>
            <p>Open the Odyssey reader: parallel English and Greek, with every Greek word clickable for forms and vocabulary (new tab).</p>
            <span class="progress-pill">Homer Reader →</span>
          </a>
        </div>

        <h3 class="home-section-label">The Journey of Odysseus</h3>
        <div class="module-grid">
          <a class="module-card module-card--link module-card--nostos" href="https://the-odyssey-journey.com/en/map" target="_blank" rel="noopener noreferrer">
            <div class="mod-greek mod-greek--solo">νόστος</div>
            <p>Interactive map of Odysseus’s journey (opens in a new tab).</p>
            <span class="progress-pill">External →</span>
          </a>
        </div>

        <div class="assumptions">
          <h4>Assumed prior knowledge</h4>
          <ul>
            <li>Indicative system (except pluperfect), basic participles of regular verbs</li>
            <li>Some subjunctive, a few imperatives and infinitives</li>
            <li>Core New Testament vocabulary (we will not re-teach καί, λόγος, etc.)</li>
          </ul>
          <p class="mt-1">We skip poetic scansion. We do cover basic poetic devices needed for sense.</p>
          <p class="mt-1 muted">Sources for study design: Homeric text & translations (e.g. Homer Reader / Allen OCT), Steadman-style facing commentary habits. Nothing here is graded.</p>
          <p class="mt-2">
            <button class="btn btn-primary" data-go="nt-refresh">Biblical Greek morphology refresh</button>
          </p>
          <p class="muted" style="font-size:0.85rem;margin-top:0.35rem">A single scrollable page of cases, declensions, and λύω — if you want a quick NT review first.</p>
          <p class="mt-1"><button class="btn btn-soft btn-sm" id="reset-progress">Reset local progress</button></p>
        </div>
      </div>
    `, { vocabBtn: false });
  }

  // ——— Grammar hub ———
  function viewGrammarHub() {
    const items = GRAMMAR_SECTIONS.map((sec, i) => {
      const done = state.grammarDone && state.grammarDone[sec.id];
      return `
        <button class="section-item ${done ? "done" : ""}" data-go="grammar/${sec.id}">
          <span class="section-num">${i + 1}</span>
          <div>
            <h3>${sec.title}</h3>
            <p>${sec.short}</p>
          </div>
        </button>
      `;
    }).join("");

    return shell(`
      <div class="section-hub">
        <h2>Grammar & Dialect</h2>
        <p class="lead">Choose any section. Each card has short teaching text and three quiz variants (A/B/C) so you can re-run with fresh questions.</p>
        <div class="section-list">${items}</div>
      </div>
    `);
  }

  function viewGrammarCard(sectionId) {
    const idx = GRAMMAR_SECTIONS.findIndex(s => s.id === sectionId);
    if (idx < 0) return viewGrammarHub();
    const sec = GRAMMAR_SECTIONS[idx];
    const variant = (state.grammarQuizVariant && state.grammarQuizVariant[sec.id]) || 0;
    const quiz = (sec.quizzes && (sec.quizzes[variant] || sec.quizzes[0])) || [];
    const hasQuiz = quiz.length > 0;
    const dots = GRAMMAR_SECTIONS.map((_, i) =>
      `<span class="progress-dot ${i < idx ? "done" : ""} ${i === idx ? "current" : ""}"></span>`
    ).join("");

    const questions = quiz.map((q, qi) => `
      <div class="quiz-q" data-qi="${qi}">
        <div class="q-text">${q.q}</div>
        <div class="options">
          ${q.options.map((opt, oi) => `
            <button class="option-btn" data-qi="${qi}" data-oi="${oi}">${opt}</button>
          `).join("")}
        </div>
        <div class="feedback" data-fb="${qi}"></div>
      </div>
    `).join("");

    const prev = idx > 0 ? GRAMMAR_SECTIONS[idx - 1].id : null;
    const next = idx < GRAMMAR_SECTIONS.length - 1 ? GRAMMAR_SECTIONS[idx + 1].id : null;

    return shell(`
      <div class="progress-strip" aria-hidden="true">${dots}</div>
      <div class="lesson-meta">
        <span class="badge badge-sea">Section ${idx + 1} of ${GRAMMAR_SECTIONS.length}</span>
        ${hasQuiz ? `<span class="badge badge-gold">Quiz set ${String.fromCharCode(65 + variant)}</span>` : ""}
        <button class="btn btn-soft btn-sm" data-go="grammar-hub">All sections</button>
      </div>
      <article class="lesson-card">
        <h2>${sec.title}</h2>
        <div class="lesson-body">${sec.body}</div>
      </article>
      ${hasQuiz ? `
      <div class="quiz-block" data-section="${sec.id}" data-variant="${variant}">
        <h3>Check yourself</h3>
        <p class="quiz-variant-hint">Immediate feedback. No grade. Next visit can rotate to another quiz set.</p>
        ${questions}
      </div>` : ""}
      <div class="nav-row">
        <button class="btn btn-soft" ${prev ? `data-go="grammar/${prev}"` : "disabled"}>← Previous</button>
        ${hasQuiz ? `<button class="btn btn-ghost" id="rotate-quiz" data-section="${sec.id}">Other quiz set</button>` : ""}
        <button class="btn btn-primary" ${next ? `data-go="grammar/${next}"` : `data-go="grammar-hub"`}>
          ${next ? "Next section →" : "Back to sections"}
        </button>
      </div>
    `);
  }

  function bindGrammarQuiz() {
    const block = app.querySelector(".quiz-block");
    if (!block) return;
    const sectionId = block.dataset.section;
    const variant = +block.dataset.variant;
    const sec = GRAMMAR_SECTIONS.find(s => s.id === sectionId);
    if (!sec) return;
    const quiz = sec.quizzes[variant];

    block.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const qi = +btn.dataset.qi;
        const oi = +btn.dataset.oi;
        const q = quiz[qi];
        const fb = block.querySelector(`[data-fb="${qi}"]`);
        const siblings = block.querySelectorAll(`.option-btn[data-qi="${qi}"]`);
        siblings.forEach(s => { s.disabled = true; });
        if (oi === q.answer) {
          btn.classList.add("correct");
          fb.className = "feedback show ok";
          fb.textContent = "✓ " + q.explain;
        } else {
          btn.classList.add("wrong");
          siblings[q.answer].classList.add("correct");
          fb.className = "feedback show no";
          fb.textContent = "→ " + q.explain;
        }
        state = HGStorage.update(s => { s.grammarDone[sectionId] = true; });
      });
    });

    const rot = app.querySelector("#rotate-quiz");
    if (rot) {
      rot.addEventListener("click", () => {
        state = HGStorage.update(s => {
          const cur = (s.grammarQuizVariant[sectionId] || 0);
          s.grammarQuizVariant[sectionId] = (cur + 1) % 3;
        });
        go(`grammar/${sectionId}`);
      });
    }
  }

  // ——— Vocab ———
  function masteryStats() {
    const mastered = state.vocabMastered || {};
    const n = Object.keys(mastered).filter(k => mastered[k]).length;
    return { n, total: VOCAB.length, pct: Math.round((n / VOCAB.length) * 100) };
  }

  function viewVocabHome() {
    const { n, total, pct } = masteryStats();
    const days = VOCAB_DAYS.map(d => {
      const words = vocabByDay(d.day);
      const m = words.filter(w => state.vocabMastered && state.vocabMastered[w.lemma]).length;
      return `
        <button class="day-card" data-go="vocab-day/${d.day}">
          <div class="day-label">Day ${d.day}</div>
          <div class="day-count">${d.title}</div>
          <div class="day-count">${words.length} words</div>
          <div class="day-mastered">${m} mastered</div>
        </button>
      `;
    }).join("");

    return shell(`
      <div class="vocab-home">
        <h2>Core Homeric Vocabulary</h2>
        <p class="muted">Focused on high-frequency Odyssey words that NT readers usually have <em>not</em> drilled (no καί, no λόγος). Lexical form on the card; Homeric line may show an inflected form. English line blanks the target sense.</p>
        <div class="mastery-bar-wrap">
          <div class="mastery-bar-label">
            <span>Five-day mastery progress</span>
            <span>${n} / ${total} (${pct}%)</span>
          </div>
          <div class="mastery-bar"><div class="mastery-bar-fill" style="width:${pct}%"></div></div>
        </div>
        <div class="day-grid">${days}</div>
        <div class="nav-row">
          <button class="btn btn-primary" data-go="vocab-quiz">Quiz path (mixed)</button>
          <button class="btn btn-ghost" data-go="thematic">Thematic scenes →</button>
          <button class="btn btn-soft" data-go="vocab-browse">Browse all cards</button>
        </div>
        <p class="mt-2 muted">Ideal pace: one day-list per study day, then mixed quiz. Mark “Got it” only when you can supply the gloss from the Greek lemma alone.</p>
      </div>
    `, { vocabBtn: false });
  }

  function renderVocabCard(word, opts = {}) {
    const mastered = state.vocabMastered && state.vocabMastered[word.lemma];
    const ex = word.example || {};
    const answer = (ex.blank || word.gloss || "").replace(/"/g, "&quot;");
    const eng = (ex.english || "").replace("______",
      `<span class="blank" data-blank data-answer="${answer}">______</span>`);
    const grk = underlineTarget(ex.greek || "", word.lemma);
    const lexical = formatLexical(word);
    return `
      <div class="vocab-card" data-lemma="${word.lemma}">
        <div class="lemma greek">${word.lemma}</div>
        <div class="lexical-entry">${lexical}</div>
        <div class="gloss" style="${opts.hideGloss ? "filter:blur(5px)" : ""}" data-gloss>${word.gloss} <span class="gloss-day">(from Day ${word.day})</span></div>
        <div class="example-line">
          <div class="cite">${ex.ref || ""}</div>
          <div class="grk">${grk}</div>
          <div class="eng">${eng}</div>
        </div>
        <div class="nav-row mt-2">
          ${opts.hideGloss ? `<button class="btn btn-soft btn-sm" data-show-gloss>Reveal gloss</button>` : ""}
          <button class="btn btn-soft btn-sm" data-show-blank>Show blank answer</button>
          <button class="btn btn-primary btn-sm" data-master="${word.lemma}">${mastered ? "Unmark" : "Got it"}</button>
        </div>
      </div>
    `;
  }

  function bindVocabCardActions() {
    app.querySelectorAll("[data-show-gloss]").forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".vocab-card");
        const g = card.querySelector("[data-gloss]");
        g.style.filter = "none";
        btn.remove();
      });
    });
    app.querySelectorAll("[data-show-blank]").forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".vocab-card");
        const blank = card.querySelector("[data-blank]");
        if (!blank) return;
        const nowShown = blank.classList.toggle("filled");
        if (nowShown) {
          blank.textContent = blank.dataset.answer;
          btn.textContent = "Hide blank answer";
        } else {
          blank.textContent = "______";
          btn.textContent = "Show blank answer";
        }
      });
    });
    app.querySelectorAll("[data-master]").forEach(btn => {
      btn.addEventListener("click", () => {
        const lemma = btn.dataset.master;
        state = HGStorage.update(s => {
          s.vocabMastered[lemma] = !s.vocabMastered[lemma];
        });
        // soft refresh current route
        const r = state.lastRoute || "vocab";
        go(r);
      });
    });
  }

  function viewVocabDay(day) {
    day = +day;
    const meta = VOCAB_DAYS.find(d => d.day === day);
    const words = vocabByDay(day);
    // study one at a time via index in hash query — use simple carousel with local index in route vocab-day/1/0
    return shell(`
      <div class="lesson-meta">
        <span class="badge badge-sea">Day ${day}</span>
        <span class="badge">${meta ? meta.title : ""}</span>
        <button class="btn btn-soft btn-sm" data-go="vocab">All days</button>
      </div>
      <p class="muted mb-2">${meta ? meta.blurb : ""} · ${words.length} words</p>
      <div id="day-carousel" data-day="${day}" data-i="0">
        ${renderVocabCard(words[0], { hideGloss: true })}
        <div class="nav-row">
          <button class="btn btn-soft" id="vprev" disabled>← Prev</button>
          <span class="muted" id="vpos">1 / ${words.length}</span>
          <button class="btn btn-primary" id="vnext">Next →</button>
        </div>
      </div>
    `, { vocabBtn: false });
  }

  function bindVocabDayCarousel() {
    const root = app.querySelector("#day-carousel");
    if (!root) return;
    const day = +root.dataset.day;
    const words = vocabByDay(day);
    let i = 0;

    function paint() {
      const cardHost = root.querySelector(".vocab-card").parentNode === root
        ? null : null;
      // replace card
      const old = root.querySelector(".vocab-card");
      const wrap = document.createElement("div");
      wrap.innerHTML = renderVocabCard(words[i], { hideGloss: true });
      old.replaceWith(wrap.firstElementChild);
      app.querySelector("#vpos").textContent = `${i + 1} / ${words.length}`;
      app.querySelector("#vprev").disabled = i === 0;
      app.querySelector("#vnext").textContent = i === words.length - 1 ? "Done" : "Next →";
      bindVocabCardActions();
      // re-bind master to not full-page reload ideally — bindVocabCardActions calls go() which is fine
    }

    app.querySelector("#vprev").addEventListener("click", () => {
      if (i > 0) { i--; paint(); }
    });
    app.querySelector("#vnext").addEventListener("click", () => {
      if (i < words.length - 1) { i++; paint(); }
      else go("vocab");
    });
    bindVocabCardActions();
  }

  function viewVocabBrowse() {
    const cards = VOCAB.map(w => renderVocabCard(w)).join("");
    return shell(`
      <div class="lesson-meta">
        <h2 style="font-family:var(--font-display);font-size:1.5rem;margin:0">All core words</h2>
        <button class="btn btn-soft btn-sm" data-go="vocab">Back</button>
      </div>
      ${cards}
    `, { vocabBtn: false });
  }

  function viewVocabQuiz() {
    // pick up to 8 unmastered (or any) for MC gloss quiz
    const pool = VOCAB.slice().sort(() => Math.random() - 0.5);
    const items = pool.slice(0, 8);
    const qs = items.map((w, qi) => {
      const wrongs = VOCAB.filter(x => x.lemma !== w.lemma)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(x => x.gloss);
      const opts = [w.gloss, ...wrongs].sort(() => Math.random() - 0.5);
      const answer = opts.indexOf(w.gloss);
      return { w, opts, answer, qi };
    });

    // store on window for bind
    window.__vq = qs;

    return shell(`
      <div class="lesson-meta">
        <span class="badge badge-terra">Mixed quiz</span>
        <button class="btn btn-soft btn-sm" data-go="vocab">Back</button>
      </div>
      <div class="quiz-block" id="vocab-quiz-block">
        <h3>What does this mean?</h3>
        <p class="quiz-variant-hint">Greek lemma → English gloss. Immediate feedback.</p>
        ${qs.map(q => `
          <div class="quiz-q">
            <div class="q-text"><span class="greek">${q.w.lemma}</span><br/><span class="muted" style="font-weight:500;font-size:0.9rem">${formatLexical(q.w)}</span></div>
            <div class="options">
              ${q.opts.map((o, oi) => `
                <button class="option-btn vq-opt" data-qi="${q.qi}" data-oi="${oi}" data-ans="${q.answer}">${o}</button>
              `).join("")}
            </div>
            <div class="feedback" id="vq-fb-${q.qi}"></div>
          </div>
        `).join("")}
      </div>
      <div class="nav-row">
        <button class="btn btn-primary" data-go="vocab-quiz">New set</button>
        <button class="btn btn-ghost" data-go="vocab">Vocab home</button>
      </div>
    `, { vocabBtn: false });
  }

  function bindVocabQuiz() {
    app.querySelectorAll(".vq-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        const qi = +btn.dataset.qi;
        const oi = +btn.dataset.oi;
        const ans = +btn.dataset.ans;
        const q = window.__vq[qi];
        const fb = app.querySelector(`#vq-fb-${qi}`);
        const siblings = app.querySelectorAll(`.vq-opt[data-qi="${qi}"]`);
        siblings.forEach(s => s.disabled = true);
        if (oi === ans) {
          btn.classList.add("correct");
          fb.className = "feedback show ok";
          fb.textContent = `✓ ${q.w.lemma}: ${q.w.gloss}`;
          state = HGStorage.update(s => { s.vocabMastered[q.w.lemma] = true; });
        } else {
          btn.classList.add("wrong");
          siblings[ans].classList.add("correct");
          fb.className = "feedback show no";
          fb.textContent = `→ ${q.w.lemma}: ${q.w.gloss}`;
        }
      });
    });
  }

  // ——— Thematic + reusable vase drawing board ———
  // Board / eraser: light–medium cream (not pure white)
  const VASE_CREAM = "#e6d5b5";
  const VASE_CREAM_DARK = "#4a4030";
  const VASE_COLORS = {
    black: "#1a1a1a",
    white: "#f5f2ea",
    blue: "#7eb6d4",
    erase: null
  };
  function vaseBoardBg() {
    return state.darkMode ? VASE_CREAM_DARK : VASE_CREAM;
  }

  /** Faint geometric “lexical context” guides — viewBox 900×560 */
  /**
   * Faint shaped backgrounds only — terrain, space, architecture as place to draw against.
   * No stick figures, weapons, suns, faces, tools, or other “answer” objects.
   */
  function vaseGuideSVG(sceneType) {
    const ink = "currentColor";
    const s = `fill="none" stroke="${ink}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`;
    let g = "";
    switch (sceneType) {
      case "sky":
        // Open sky over soft rolling hills — room to draw sun, stars, weather
        g = `
          <path ${s} d="M0 420 C120 360, 220 450, 360 390 C500 330, 580 440, 720 380 C800 350, 860 400, 900 370"/>
          <path ${s} d="M0 470 C140 430, 280 500, 440 450 C600 400, 740 490, 900 440"/>
          <line ${s} x1="40" y1="200" x2="860" y2="200" stroke-dasharray="2 18" opacity="0.7"/>
        `;
        break;
      case "earth":
        // Ground plane + distant ridge + open field bands (not trees/plows)
        g = `
          <path ${s} d="M0 380 C180 300, 320 340, 480 280 C640 220, 760 300, 900 250"/>
          <path ${s} d="M0 460 C200 420, 400 490, 600 440 C750 400, 850 470, 900 450"/>
          <line ${s} x1="60" y1="500" x2="840" y2="500"/>
          <path ${s} d="M80 500 C200 470, 320 510, 450 480 C580 450, 700 505, 820 475" opacity="0.75"/>
        `;
        break;
      case "sea":
        // Shore arc + gentle water bands (not a boat)
        g = `
          <path ${s} d="M0 200 C200 160, 400 240, 600 180 C750 140, 850 200, 900 170"/>
          <path ${s} d="M0 280 C180 250, 360 310, 540 270 C700 240, 820 300, 900 280"/>
          <path ${s} d="M0 360 C200 330, 400 390, 620 350 C760 320, 850 380, 900 360"/>
          <path ${s} d="M0 440 C220 410, 450 470, 700 430 C800 410, 860 450, 900 440"/>
          <path ${s} d="M40 160 C80 220, 60 300, 100 380" opacity="0.65"/>
        `;
        break;
      case "ship":
        // Open water bands + faint harbor crescent — room for hull/mast
        g = `
          <path ${s} d="M0 300 C150 270, 300 330, 450 300 C600 270, 750 320, 900 290"/>
          <path ${s} d="M0 360 C180 340, 360 390, 540 360 C700 340, 820 385, 900 365"/>
          <path ${s} d="M0 420 C200 400, 400 450, 620 420 C760 400, 850 445, 900 430"/>
          <path ${s} d="M120 480 Q450 420 780 480" opacity="0.7"/>
          <path ${s} d="M80 200 C100 280, 90 360, 120 440" opacity="0.55"/>
        `;
        break;
      case "fight":
        // Open ground + low ridge — stage for combat, not weapons/figures
        g = `
          <path ${s} d="M0 400 C200 340, 400 420, 600 360 C750 320, 850 390, 900 370"/>
          <path ${s} d="M0 480 C250 450, 500 510, 750 470 C830 450, 880 490, 900 480"/>
          <line ${s} x1="100" y1="200" x2="800" y2="200" stroke-dasharray="4 22" opacity="0.55"/>
        `;
        break;
      case "speech":
        // Megaron-like empty hall frame: floor + side walls + open middle
        g = `
          <line ${s} x1="80" y1="480" x2="820" y2="480"/>
          <line ${s} x1="120" y1="120" x2="120" y2="480"/>
          <line ${s} x1="780" y1="120" x2="780" y2="480"/>
          <line ${s} x1="120" y1="120" x2="780" y2="120"/>
          <line ${s} x1="200" y1="480" x2="200" y2="200" opacity="0.6"/>
          <line ${s} x1="700" y1="480" x2="700" y2="200" opacity="0.6"/>
          <path ${s} d="M300 480 Q450 420 600 480" opacity="0.5"/>
        `;
        break;
      case "body":
        // Soft oval “field” — a blank panel shape, not a person
        g = `
          <ellipse ${s} cx="450" cy="280" rx="200" ry="200"/>
          <ellipse ${s} cx="450" cy="280" rx="140" ry="160" opacity="0.65"/>
          <line ${s} x1="250" y1="480" x2="650" y2="480" opacity="0.5"/>
        `;
        break;
      case "house":
        // Simple temple / megaron silhouette as architectural space only
        g = `
          <path ${s} d="M150 260 L450 90 L750 260"/>
          <line ${s} x1="170" y1="260" x2="170" y2="470"/>
          <line ${s} x1="730" y1="260" x2="730" y2="470"/>
          <line ${s} x1="170" y1="470" x2="730" y2="470"/>
          <line ${s} x1="300" y1="260" x2="300" y2="470" opacity="0.55"/>
          <line ${s} x1="450" y1="260" x2="450" y2="470" opacity="0.55"/>
          <line ${s} x1="600" y1="260" x2="600" y2="470" opacity="0.55"/>
          <rect ${s} x="400" y="360" width="100" height="110" opacity="0.7"/>
        `;
        break;
      case "feast":
        // Long empty table plane + hall walls — no cups or food
        g = `
          <line ${s} x1="100" y1="140" x2="100" y2="480"/>
          <line ${s} x1="800" y1="140" x2="800" y2="480"/>
          <line ${s} x1="100" y1="140" x2="800" y2="140"/>
          <line ${s} x1="100" y1="480" x2="800" y2="480"/>
          <rect ${s} x="180" y="300" width="540" height="28"/>
          <line ${s} x1="220" y1="328" x2="220" y2="420" opacity="0.6"/>
          <line ${s} x1="680" y1="328" x2="680" y2="420" opacity="0.6"/>
        `;
        break;
      case "gods":
        // Mountain mass + high sky band — Olympus-like terrain, no altars/figures
        g = `
          <path ${s} d="M0 480 C100 400, 200 420, 300 300 C380 200, 420 160, 450 140 C480 160, 520 200, 600 300 C700 420, 800 400, 900 480"/>
          <path ${s} d="M0 500 C200 460, 400 520, 600 470 C750 430, 850 500, 900 490"/>
          <line ${s} x1="60" y1="100" x2="840" y2="100" stroke-dasharray="3 20" opacity="0.55"/>
        `;
        break;
      case "people":
        // Open courtyard / agora: ground + colonnade as empty space
        g = `
          <line ${s} x1="60" y1="460" x2="840" y2="460"/>
          <line ${s} x1="100" y1="200" x2="100" y2="460"/>
          <line ${s} x1="200" y1="200" x2="200" y2="460"/>
          <line ${s} x1="700" y1="200" x2="700" y2="460"/>
          <line ${s} x1="800" y1="200" x2="800" y2="460"/>
          <line ${s} x1="100" y1="200" x2="200" y2="200"/>
          <line ${s} x1="700" y1="200" x2="800" y2="200"/>
          <path ${s} d="M250 460 Q450 400 650 460" opacity="0.55"/>
        `;
        break;
      case "craft":
        // Workshop interior: walls + bench plane — no loom/anvil drawn in
        g = `
          <line ${s} x1="80" y1="100" x2="80" y2="480"/>
          <line ${s} x1="820" y1="100" x2="820" y2="480"/>
          <line ${s} x1="80" y1="100" x2="820" y2="100"/>
          <line ${s} x1="80" y1="480" x2="820" y2="480"/>
          <line ${s} x1="80" y1="360" x2="820" y2="360"/>
          <rect ${s} x="140" y="280" width="280" height="80" opacity="0.75"/>
          <rect ${s} x="480" y="300" width="260" height="60" opacity="0.65"/>
        `;
        break;
      default:
        // Soft nested frame only
        g = `
          <rect ${s} x="70" y="70" width="760" height="420" rx="6"/>
          <rect ${s} x="140" y="130" width="620" height="300" rx="4" opacity="0.6"/>
        `;
        break;
    }
    return `<svg class="vase-guide-svg" viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet">${g}</svg>`;
  }

  function vaseDrawingHTML(scene) {
    const themeId = scene.id;
    const words = scene.words || [];
    const guideOn = state.vaseGuideOn && state.vaseGuideOn[themeId] === false ? false : true;
    const sceneType = scene.scene || "meander";
    const numberChips = words.map((w, i) => {
      const n = i + 1;
      return `<button type="button" class="vase-num" data-num="${n}" data-lemma="${w.lemma}" data-word-id="${w.id || n}" title="${w.lemma}">${n}</button>`;
    }).join("");

    return `
      <div class="vase-studio" data-theme-id="${themeId}" data-scene-type="${sceneType}">
        <p class="vase-prompt">Make the vocabulary for this theme your own by drawing your own Greek vase-painting scene.</p>
        <div class="vase-toolbar" role="toolbar" aria-label="Drawing tools">
          <button type="button" class="vase-tool is-active" data-tool="black" title="Black">
            <span class="vase-swatch" style="background:#1a1a1a"></span> Black
          </button>
          <button type="button" class="vase-tool" data-tool="white" title="White">
            <span class="vase-swatch vase-swatch--white"></span> White
          </button>
          <button type="button" class="vase-tool" data-tool="blue" title="Light blue">
            <span class="vase-swatch" style="background:#7eb6d4"></span> Light blue
          </button>
          <button type="button" class="vase-tool" data-tool="erase" title="Eraser">
            <span class="vase-swatch vase-swatch--erase"></span> Eraser
          </button>
          <button type="button" class="vase-tool" data-tool="hotspot" title="Place vocabulary numbers on your drawing">
            <span class="vase-swatch vase-swatch--pin">#</span> Hotspot
          </button>
          <label class="vase-guide-toggle" title="Show a faint geometric sketch for this theme">
            <input type="checkbox" id="vase-guide-check" ${guideOn ? "checked" : ""}/>
            <span>Lexical context</span>
          </label>
          <button type="button" class="vase-reset btn btn-soft btn-sm" id="vase-reset">Reset</button>
        </div>
        <p class="vase-howto muted">
          Draw with black, white, or light blue. <strong>Hotspot:</strong> choose a number, then click your drawing to place it.
          <strong>To remove a pin:</strong> with Hotspot selected, click the number on the drawing again.
          <strong>Lexical context:</strong> faint geometric guide (on by default; uncheck to hide).
          Paintings, pins, and guide preference are saved on this device.
        </p>
        <div class="vase-num-row" id="vase-num-row" hidden>
          <span class="vase-num-label">Pin number:</span>
          ${numberChips || "<span class='muted'>No numbered words</span>"}
          <span class="vase-hotspot-status muted" id="vase-hotspot-status"></span>
        </div>
        <div class="vase-board-wrap">
          <div class="vase-guide-layer ${guideOn ? "is-on" : ""}" id="vase-guide-layer">
            ${vaseGuideSVG(sceneType)}
          </div>
          <canvas class="vase-canvas" id="vase-canvas" width="900" height="560" aria-label="Vase painting drawing board"></canvas>
          <div class="vase-pin-layer" id="vase-pin-layer" aria-hidden="true"></div>
        </div>
        <p class="vase-save-hint muted">Your painting and number pins are saved automatically on this device.</p>
      </div>
    `;
  }

  function bindVaseCanvas(scene) {
    const studio = app.querySelector(".vase-studio");
    const canvas = app.querySelector("#vase-canvas");
    if (!studio || !canvas) return;

    const themeId = studio.dataset.themeId;
    const words = (scene && scene.words) || [];
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const pinLayer = app.querySelector("#vase-pin-layer");
    const guideLayer = app.querySelector("#vase-guide-layer");
    const numRow = app.querySelector("#vase-num-row");
    const statusEl = app.querySelector("#vase-hotspot-status");
    const guideCheck = app.querySelector("#vase-guide-check");

    let tool = "black";
    let selectedNum = null;
    let drawing = false;
    let lastX = 0, lastY = 0;
    let hotspots = Object.assign({}, (state.vaseHotspots && state.vaseHotspots[themeId]) || {});

    function fillBoard() {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = vaseBoardBg();
      ctx.fillRect(0, 0, W, H);
    }

    function renderPins() {
      if (!pinLayer) return;
      pinLayer.innerHTML = Object.keys(hotspots).map(n => {
        const h = hotspots[n];
        if (!h) return "";
        const label = h.lemma ? `${n}: ${h.lemma}` : String(n);
        return `<button type="button" class="vase-pin" data-num="${n}" style="left:${h.x}%;top:${h.y}%" title="${label} — click to remove">${n}</button>`;
      }).join("");
      pinLayer.classList.toggle("is-interactive", tool === "hotspot");
    }

    function removeHotspot(n) {
      const key = String(n);
      if (!hotspots[key]) return;
      const lemma = hotspots[key].lemma || "";
      delete hotspots[key];
      renderPins();
      persistHotspots();
      if (statusEl) {
        statusEl.textContent = `Removed pin ${key}${lemma ? " (" + lemma + ")" : ""}.`;
      }
    }

    function persistHotspots() {
      state = HGStorage.update(s => {
        if (!s.vaseHotspots) s.vaseHotspots = {};
        s.vaseHotspots[themeId] = { ...hotspots };
      });
    }

    function loadSavedDrawing() {
      fillBoard();
      const dataUrl = (state.vaseDrawings && state.vaseDrawings[themeId]) || null;
      if (!dataUrl) return;
      const img = new Image();
      img.onload = () => { ctx.drawImage(img, 0, 0, W, H); };
      img.src = dataUrl;
    }

    let saveTimer = null;
    function persistDrawing() {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        try {
          const dataUrl = canvas.toDataURL("image/png");
          state = HGStorage.update(s => {
            if (!s.vaseDrawings) s.vaseDrawings = {};
            s.vaseDrawings[themeId] = dataUrl;
          });
        } catch (e) { /* ignore */ }
      }, 250);
    }

    loadSavedDrawing();
    renderPins();

    function setTool(next) {
      tool = next;
      studio.querySelectorAll(".vase-tool").forEach(b => {
        b.classList.toggle("is-active", b.dataset.tool === tool);
      });
      if (numRow) numRow.hidden = tool !== "hotspot";
      canvas.classList.toggle("is-hotspot-mode", tool === "hotspot");
      if (pinLayer) pinLayer.classList.toggle("is-interactive", tool === "hotspot");
      updateHotspotStatus();
    }

    function updateHotspotStatus() {
      if (!statusEl) return;
      if (tool !== "hotspot") {
        statusEl.textContent = "";
        return;
      }
      if (selectedNum == null) {
        statusEl.textContent = "Choose a number to place, or click an existing pin to remove it.";
      } else {
        const w = words[selectedNum - 1];
        statusEl.textContent = `Selected ${selectedNum}${w ? " · " + w.lemma : ""} — click drawing to place/move, or click a pin to remove it.`;
      }
    }

    if (pinLayer) {
      pinLayer.addEventListener("click", (e) => {
        const pin = e.target.closest(".vase-pin");
        if (!pin) return;
        e.preventDefault();
        e.stopPropagation();
        if (tool !== "hotspot") setTool("hotspot");
        removeHotspot(pin.dataset.num);
      });
    }

    function selectNum(n) {
      selectedNum = n;
      studio.querySelectorAll(".vase-num").forEach(b => {
        b.classList.toggle("is-selected", +b.dataset.num === n);
      });
      app.querySelectorAll(".word-list [data-pin-num]").forEach(li => {
        li.classList.toggle("is-pin-selected", +li.dataset.pinNum === n);
      });
      updateHotspotStatus();
    }

    studio.querySelectorAll(".vase-tool").forEach(btn => {
      btn.addEventListener("click", () => setTool(btn.dataset.tool));
    });

    studio.querySelectorAll(".vase-num").forEach(btn => {
      btn.addEventListener("click", () => {
        if (tool !== "hotspot") setTool("hotspot");
        selectNum(+btn.dataset.num);
      });
    });

    // Word list numbers also selectable for pinning
    app.querySelectorAll(".word-list [data-pin-num]").forEach(li => {
      li.addEventListener("click", (e) => {
        // only when in hotspot mode or when clicking the number badge
        if (tool !== "hotspot" && !e.target.closest(".pin-badge")) return;
        if (tool !== "hotspot") setTool("hotspot");
        selectNum(+li.dataset.pinNum);
      });
    });

    if (guideCheck && guideLayer) {
      guideCheck.addEventListener("change", () => {
        const on = guideCheck.checked;
        guideLayer.classList.toggle("is-on", on);
        state = HGStorage.update(s => {
          if (!s.vaseGuideOn) s.vaseGuideOn = {};
          s.vaseGuideOn[themeId] = on;
        });
      });
    }

    const resetBtn = studio.querySelector("#vase-reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (!confirm("Clear this vase painting and all number pins? This cannot be undone.")) return;
        fillBoard();
        hotspots = {};
        renderPins();
        state = HGStorage.update(s => {
          if (!s.vaseDrawings) s.vaseDrawings = {};
          if (!s.vaseHotspots) s.vaseHotspots = {};
          delete s.vaseDrawings[themeId];
          delete s.vaseHotspots[themeId];
        });
      });
    }

    function posFromEvent(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      const src = e.touches && e.touches[0] ? e.touches[0] : e;
      return {
        x: (src.clientX - rect.left) * scaleX,
        y: (src.clientY - rect.top) * scaleY
      };
    }

    function placeHotspot(p) {
      if (selectedNum == null) {
        updateHotspotStatus();
        if (statusEl) statusEl.textContent = "First choose a number above (or in the word list).";
        return;
      }
      const w = words[selectedNum - 1] || {};
      const xPct = Math.max(2, Math.min(98, (p.x / W) * 100));
      const yPct = Math.max(3, Math.min(97, (p.y / H) * 100));
      hotspots[String(selectedNum)] = {
        x: +xPct.toFixed(2),
        y: +yPct.toFixed(2),
        lemma: w.lemma || "",
        wordId: w.id || String(selectedNum)
      };
      renderPins();
      persistHotspots();
      if (statusEl) statusEl.textContent = `Placed ${selectedNum}${w.lemma ? " (" + w.lemma + ")" : ""} — pick another number or keep drawing.`;
    }

    function startDraw(e) {
      e.preventDefault();
      const p = posFromEvent(e);
      if (tool === "hotspot") {
        placeHotspot(p);
        return;
      }
      drawing = true;
      lastX = p.x;
      lastY = p.y;
      strokeTo(p.x, p.y, true);
    }

    function strokeTo(x, y, isDot) {
      ctx.globalCompositeOperation = "source-over";
      if (tool === "erase") {
        ctx.strokeStyle = vaseBoardBg();
        ctx.lineWidth = 22;
      } else {
        ctx.strokeStyle = VASE_COLORS[tool] || VASE_COLORS.black;
        ctx.lineWidth = tool === "white" ? 4.5 : 3.2;
      }
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      if (isDot) {
        ctx.moveTo(x, y);
        ctx.lineTo(x + 0.01, y + 0.01);
      } else {
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      lastX = x;
      lastY = y;
    }

    function moveDraw(e) {
      if (!drawing || tool === "hotspot") return;
      e.preventDefault();
      const p = posFromEvent(e);
      strokeTo(p.x, p.y, false);
    }

    function endDraw() {
      if (!drawing) return;
      drawing = false;
      persistDrawing();
    }

    canvas.style.touchAction = "none";
    canvas.addEventListener("pointerdown", (e) => {
      try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
      startDraw(e);
    });
    canvas.addEventListener("pointermove", moveDraw);
    canvas.addEventListener("pointerup", endDraw);
    canvas.addEventListener("pointercancel", endDraw);
  }

  function viewThematicHome() {
    const cards = THEMATIC_SCENES.map(s => `
      <button class="theme-card" data-go="theme/${s.id}">
        <h3>${s.title}</h3>
        <p>${s.blurb}</p>
        <p class="muted">${(s.words || []).length + (s.extras || []).length} words${s.id === "particles" ? " · list only" : " · draw &amp; pin"}</p>
      </button>
    `).join("");
    return shell(`
      <div class="thematic-home">
        <h2 class="thematic-home-title">Vocabulary by Theme</h2>
        <figure class="theme-art">
          <img src="assets/themes-ship.png" alt="Classical line drawing of a Greek ship under sail on the sea" width="1608" height="396" />
        </figure>
        <p class="muted thematic-home-lead">Draw a vase-painting scene for each theme, pin vocabulary numbers onto your drawing, and use the faint lexical-context guide if you like. Everything saves on this device.</p>
        <p class="muted thematic-home-lead">Use this tool to draw your own vase painting. Students always learn better when they make a word their own by writing it and drawing it.</p>
        <div class="theme-grid">${cards}</div>
        <button class="btn btn-soft mt-2" data-go="vocab">← Vocab home</button>
      </div>
    `);
  }

  function viewTheme(id) {
    const scene = THEMATIC_SCENES.find(s => s.id === id);
    if (!scene) return viewThematicHome();
    const words = scene.words || [];
    const extras = scene.extras || [];
    // Particles / pure-list themes: no drawing board
    const noDrawing = scene.id === "particles" || scene.scene === "meander" || (words.length === 0 && extras.length > 0 && scene.id === "particles");

    const wordList = words.length ? `
        <div class="mt-2">
          <p class="list-head">Words for this theme</p>
          <p class="muted" style="font-size:0.85rem;margin-bottom:0.5rem">In Hotspot mode, click a number (or the word row) then click your drawing to pin it.</p>
          <ol class="word-list word-list--pinnable">
            ${words.map((w, i) => `
              <li data-pin-num="${i + 1}" class="pinnable-word">
                <button type="button" class="pin-badge" data-num="${i + 1}" aria-label="Select number ${i + 1}">${i + 1}</button>
                <span class="wl-lemma">${w.lemma}</span>
                <span class="wl-parts">${w.parts || (typeof thematicWordLabel === "function" ? thematicWordLabel(w) : "")}</span>
                <span class="wl-gloss">${w.gloss}</span>
              </li>`).join("")}
          </ol>
        </div>` : "";

    const extraBlock = extras.length ? `
        <div class="mt-2 extra-block">
          <p class="list-head">${noDrawing || !words.length ? "Words in this theme" : "Also in this theme"}</p>
          ${!noDrawing && words.length ? `<p class="muted extra-why">Particles, abstractions, and adjectives that are harder to stage as a scene.</p>` : ""}
          ${noDrawing ? `<p class="muted extra-why">These little words cannot be drawn as a vase scene — learn them by reading and hearing them in context.</p>` : ""}
          <ul class="word-list word-list--extra">
            ${extras.map(w => `
              <li>
                <span class="wl-lemma">${w.lemma}</span>
                <span class="wl-parts">${w.parts || ""}</span>
                <span class="wl-gloss">${w.gloss}</span>
                ${w.why ? `<span class="wl-why">${w.why}</span>` : ""}
              </li>`).join("")}
          </ul>
        </div>` : "";

    return shell(`
      <div class="scene-wrap">
        <div class="lesson-meta">
          <button class="btn btn-soft btn-sm" data-go="thematic">All themes</button>
        </div>
        <h2>${scene.title}</h2>
        <p class="muted">${scene.blurb}</p>
        ${noDrawing ? "" : vaseDrawingHTML(scene)}
        ${wordList}
        ${extraBlock}
      </div>
    `);
  }

  function bindThematic() {
    const studio = app.querySelector(".vase-studio");
    if (!studio) return;
    const themeId = studio.dataset.themeId;
    const scene = THEMATIC_SCENES.find(s => s.id === themeId);
    bindVaseCanvas(scene);
  }

  // ——— Map ———
  function viewMap(stepIndex) {
    const i = Math.max(0, Math.min(MAP_STEPS.length - 1, stepIndex || 0));
    const step = MAP_STEPS[i];
    const pathOpt = step.path === false ? false : (step.path || undefined);
    const svg = mapSVG(step.highlight, pathOpt);
    const q = step.quiz;

    return shell(`
      <div class="lesson-meta">
        <span class="badge badge-sea">Map ${i + 1} / ${MAP_STEPS.length}</span>
        <button class="btn btn-soft btn-sm" data-go="welcome">Home</button>
      </div>
      <div class="map-stage">
        <div class="map-svg-wrap map-board-host">${svg}</div>
        <div class="map-lesson">
          <h2>${step.title}</h2>
          ${step.text}
        </div>
      </div>
      <div class="quiz-block" id="map-quiz" data-step="${step.id}" data-i="${i}">
        <h3>Quick check</h3>
        <div class="quiz-q">
          <div class="q-text">${q.q}</div>
          <div class="options">
            ${q.options.map((o, oi) => `
              <button class="option-btn map-opt" data-oi="${oi}" data-ans="${q.answer}">${o}</button>
            `).join("")}
          </div>
          <div class="feedback" id="map-fb"></div>
        </div>
      </div>
      <div class="nav-row">
        <button class="btn btn-soft" ${i > 0 ? `data-go="map/${i - 1}"` : "disabled"}>← Back</button>
        <button class="btn btn-primary" data-go="map/${i < MAP_STEPS.length - 1 ? i + 1 : "done"}">
          ${i < MAP_STEPS.length - 1 ? "Continue →" : "Finish map"}
        </button>
      </div>
    `);
  }

  function bindMapQuiz() {
    const block = app.querySelector("#map-quiz");
    if (!block) return;
    const stepId = block.dataset.step;
    const explain = MAP_STEPS.find(s => s.id === stepId).quiz.explain;
    app.querySelectorAll(".map-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        const oi = +btn.dataset.oi;
        const ans = +btn.dataset.ans;
        const fb = app.querySelector("#map-fb");
        app.querySelectorAll(".map-opt").forEach(s => s.disabled = true);
        if (oi === ans) {
          btn.classList.add("correct");
          fb.className = "feedback show ok";
          fb.textContent = "✓ " + explain;
        } else {
          btn.classList.add("wrong");
          app.querySelectorAll(".map-opt")[ans].classList.add("correct");
          fb.className = "feedback show no";
          fb.textContent = "→ " + explain;
        }
        state = HGStorage.update(s => { s.mapDone[stepId] = true; });
      });
    });
  }

  function viewMapDone() {
    return shell(`
      <div class="lesson-card">
        <h2>Map orientation complete</h2>
        <div class="lesson-body">
          <p>You can revisit any step from the beginning. Next: guided sentences, then the Cyclopes reading.</p>
        </div>
      </div>
      <div class="nav-row">
        <button class="btn btn-soft" data-go="map/0">Review map</button>
        <button class="btn btn-primary" data-go="reading-sentences">20 sentences →</button>
        <button class="btn btn-ghost" data-go="welcome">Home</button>
      </div>
    `);
  }

  // ——— Reading ———
  function viewReadingSentences(index) {
    const i = Math.max(0, Math.min(READING_SENTENCES.length - 1, index || 0));
    const s = READING_SENTENCES[i];
    return shell(`
      <div class="lesson-meta">
        <span class="badge badge-sea">Sentence ${i + 1} / ${READING_SENTENCES.length}</span>
        <span class="badge badge-gold">${s.ref}</span>
        <button class="btn btn-soft btn-sm" data-go="welcome">Home</button>
      </div>
      <div class="reading-line">
        <div class="line-ref">${s.ref}</div>
        <div class="grk-block">${s.greek}</div>
        <button class="help-toggle" data-toggle-help>Collapse / expand notes</button>
        <div class="help-panel is-open open" id="sent-help">
          <div class="gloss-row">
            ${s.words.map(w => `
              <span class="gloss-item"><span class="g">${w.g}</span> — ${w.gloss}</span>
            `).join("")}
          </div>
          <div class="notes"><strong>Notes:</strong> ${s.notes}</div>
        </div>
        <button class="help-toggle mt-1" data-toggle-tr>Reveal English translation</button>
        <div class="translation" id="sent-tr">${s.translation}</div>
      </div>
      <div class="nav-row">
        <button class="btn btn-soft" ${i > 0 ? `data-go="reading-sentences/${i - 1}"` : "disabled"}>← Prev</button>
        <button class="btn btn-primary" data-go="reading-sentences/${i < READING_SENTENCES.length - 1 ? i + 1 : "done"}">
          ${i < READING_SENTENCES.length - 1 ? "Next sentence →" : "Finish →"}
        </button>
      </div>
    `);
  }

  function bindReadingSentence() {
    const help = app.querySelector("#sent-help");
    const tr = app.querySelector("#sent-tr");
    app.querySelector("[data-toggle-help]")?.addEventListener("click", () => {
      help.classList.toggle("open");
      help.classList.toggle("is-open");
    });
    app.querySelector("[data-toggle-tr]")?.addEventListener("click", () => {
      tr.classList.toggle("show");
      const id = READING_SENTENCES[parseInt((state.lastRoute || "").split("/")[1], 10) || 0]?.id;
      if (id) state = HGStorage.update(s => { s.readingDone[id] = true; });
    });
  }

  function viewReadingSentencesDone() {
    return shell(`
      <div class="lesson-card">
        <h2>Twenty sentences complete</h2>
        <div class="lesson-body">
          <p>You have walked through core Odyssey lines with Homeric morphology in context. Next: short multi-line passages, then the continuous Cyclopes stretch.</p>
        </div>
      </div>
      <div class="nav-row">
        <button class="btn btn-soft" data-go="reading-sentences/0">Review sentences</button>
        <button class="btn btn-primary" data-go="reading-passages">10 guided passages →</button>
      </div>
    `);
  }

  function viewReadingPassages(index) {
    const list = typeof READING_PASSAGES !== "undefined" ? READING_PASSAGES : [];
    if (!list.length) {
      return shell(`<p class="muted">Passages not loaded.</p><button class="btn btn-soft" data-go="welcome">Home</button>`);
    }
    const i = Math.max(0, Math.min(list.length - 1, index || 0));
    const s = list[i];
    return shell(`
      <div class="lesson-meta">
        <span class="badge badge-sea">Passage ${i + 1} / ${list.length}</span>
        <span class="badge badge-gold">${s.ref}</span>
        <button class="btn btn-soft btn-sm" data-go="welcome">Home</button>
      </div>
      <div class="reading-line">
        <div class="line-ref">${s.ref}</div>
        <div class="grk-block grk-block--passage">${s.greek}</div>
        <button class="help-toggle" data-toggle-help>Collapse / expand notes</button>
        <div class="help-panel is-open open" id="pass-help">
          <div class="gloss-row">
            ${s.words.map(w => `
              <span class="gloss-item"><span class="g">${w.g}</span> — ${w.gloss}</span>
            `).join("")}
          </div>
          <div class="notes"><strong>Grammar &amp; vocab:</strong> ${s.notes}</div>
          ${s.poetic ? `<div class="notes poetic-notes"><strong>Poetic / style:</strong> ${s.poetic}</div>` : ""}
        </div>
        <button class="help-toggle mt-1" data-toggle-tr>Reveal English translation</button>
        <div class="translation" id="pass-tr">${s.translation}</div>
      </div>
      <div class="nav-row">
        <button class="btn btn-soft" ${i > 0 ? `data-go="reading-passages/${i - 1}"` : "disabled"}>← Prev</button>
        <button class="btn btn-primary" data-go="reading-passages/${i < list.length - 1 ? i + 1 : "done"}">
          ${i < list.length - 1 ? "Next passage →" : "Finish →"}
        </button>
      </div>
    `);
  }

  function bindReadingPassage() {
    const help = app.querySelector("#pass-help");
    const tr = app.querySelector("#pass-tr");
    if (!help && !tr) return;
    app.querySelector("[data-toggle-help]")?.addEventListener("click", () => {
      help?.classList.toggle("open");
      help?.classList.toggle("is-open");
    });
    app.querySelector("[data-toggle-tr]")?.addEventListener("click", () => {
      tr?.classList.toggle("show");
      const list = typeof READING_PASSAGES !== "undefined" ? READING_PASSAGES : [];
      const id = list[parseInt((state.lastRoute || "").split("/")[1], 10) || 0]?.id;
      if (id) state = HGStorage.update(s => { s.readingDone[id] = true; });
    });
  }

  function viewReadingPassagesDone() {
    return shell(`
      <div class="lesson-card">
        <h2>Ten passages complete</h2>
        <div class="lesson-body">
          <p>You have practiced short continuous stretches with grammar, vocab, and basic poetic notes. The final module is a longer continuous narrative: the land of the Cyclopes.</p>
        </div>
      </div>
      <div class="nav-row">
        <button class="btn btn-soft" data-go="reading-passages/0">Review passages</button>
        <button class="btn btn-primary" data-go="reading-long">Od. 9.105–184 →</button>
      </div>
    `);
  }

  /** Group Od. 9 lines into short semantic units (~4–6 lines each) */
  function buildLongUnits() {
    const lines = READING_LONG.lines || [];
    // Prefer natural breaks; fall back to packs of 5
    const breaks = [105, 111, 116, 121, 126, 131, 136, 141, 148, 153, 160, 165, 169, 176, 180, 185];
    const units = [];
    let bi = 0;
    let buf = [];
    for (const L of lines) {
      const nextBreak = breaks[bi + 1];
      buf.push(L);
      if (nextBreak != null && L.n + 1 >= nextBreak) {
        units.push(buf);
        buf = [];
        bi++;
      } else if (buf.length >= 6) {
        units.push(buf);
        buf = [];
      }
    }
    if (buf.length) units.push(buf);
    return units;
  }

  function viewReadingLong(pageIndex) {
    const units = buildLongUnits();
    const UNITS_PER_PAGE = 2; // two short passages per screen — Greek first, helps on demand
    const totalPages = Math.max(1, Math.ceil(units.length / UNITS_PER_PAGE));
    const page = Math.max(0, Math.min(totalPages - 1, pageIndex || 0));
    const slice = units.slice(page * UNITS_PER_PAGE, page * UNITS_PER_PAGE + UNITS_PER_PAGE);

    const blocks = slice.map((unit, ui) => {
      const n0 = unit[0].n;
      const n1 = unit[unit.length - 1].n;
      const uid = `u${n0}-${n1}`;
      const greek = unit.map(L => L.greek).join("\n");
      const glosses = [];
      const seen = new Set();
      unit.forEach(L => {
        (L.glosses || []).forEach(g => {
          const key = g.g + "|" + g.d;
          if (seen.has(key)) return;
          seen.add(key);
          glosses.push(g);
        });
      });
      const notes = unit.map(L => L.notes).filter(Boolean).join(" ");
      const tr = unit.map(L => L.tr).filter(Boolean).join(" ");
      return `
        <div class="reading-line reading-line--unit" data-uid="${uid}">
          <div class="line-ref">Od. 9.${n0}–${n1}</div>
          <div class="grk-block grk-block--passage">${greek}</div>
          <button class="help-toggle" data-help="${uid}">Hide grammar &amp; vocab notes</button>
          <div class="help-panel is-open open" id="help-${uid}">
            <div class="gloss-row">
              ${glosses.map(g => `
                <span class="gloss-item"><span class="g">${g.g}</span> — ${g.d}</span>
              `).join("")}
            </div>
            <div class="notes">${notes || ""}</div>
          </div>
          <button class="help-toggle mt-1" data-tr="${uid}">Reveal English translation</button>
          <div class="translation" id="tr-${uid}">${tr}</div>
        </div>
      `;
    }).join("");

    const firstN = slice[0] ? slice[0][0].n : "";
    const lastUnit = slice[slice.length - 1];
    const lastN = lastUnit ? lastUnit[lastUnit.length - 1].n : "";

    return shell(`
      <div class="lesson-meta">
        <span class="badge badge-terra">Final reading</span>
        <span class="badge badge-sea">Screen ${page + 1} / ${totalPages}${firstN ? ` · Od. 9.${firstN}–${lastN}` : ""}</span>
        <button class="btn btn-soft btn-sm" data-go="welcome">Home</button>
      </div>
      ${page === 0 ? `
      <div class="lesson-card mb-2">
        <h2>${READING_LONG.title}</h2>
        <div class="lesson-body">
          ${READING_LONG.intro}
          <p class="muted mt-1">Each screen shows two short stretches of Greek. Vocabulary and grammar notes are open by default; collapse them if you want a cleaner page. English stays hidden until you reveal it.</p>
        </div>
      </div>` : ""}
      ${blocks}
      <div class="nav-row">
        <button class="btn btn-soft" ${page > 0 ? `data-go="reading-long/${page - 1}"` : "disabled"}>← Prev</button>
        <span class="muted">${page + 1} / ${totalPages}</span>
        <button class="btn btn-primary" data-go="${page + 1 >= totalPages ? "reading-long-done" : `reading-long/${page + 1}`}">
          ${page + 1 >= totalPages ? "Finish reading" : "Next →"}
        </button>
      </div>
    `);
  }

  function bindReadingLong() {
    app.querySelectorAll("[data-help]").forEach(btn => {
      btn.addEventListener("click", () => {
        const el = app.querySelector(`#help-${btn.dataset.help}`);
        if (!el) return;
        el.classList.toggle("open");
        el.classList.toggle("is-open");
        btn.textContent = el.classList.contains("open")
          ? "Hide grammar & vocab notes"
          : "Show grammar & vocab notes";
      });
    });
    app.querySelectorAll("[data-tr]").forEach(btn => {
      btn.addEventListener("click", () => {
        const el = app.querySelector(`#tr-${btn.dataset.tr}`);
        el?.classList.toggle("show");
        if (el) {
          btn.textContent = el.classList.contains("show")
            ? "Hide English translation"
            : "Reveal English translation";
        }
      });
    });
  }

  function viewNtRefresh() {
    return shell(`
      <div class="lesson-meta">
        <span class="badge badge-sea">NT review</span>
        <button class="btn btn-soft btn-sm" data-go="welcome">Home</button>
      </div>
      ${typeof NT_REFRESH_HTML !== "undefined" ? NT_REFRESH_HTML : "<p>Morphology refresh unavailable.</p>"}
    `);
  }

  function viewReadingLongDone() {
    return shell(`
      <div class="lesson-card">
        <h2>Well done</h2>
        <div class="lesson-body">
          <p>You have finished the programmed path: dialect grammar, core vocab, guided sentences and passages, and a continuous Odyssey narrative.</p>
          <p>Keep cycling quiz sets, thematic scenes, and Day 1–5 vocab. When ready, continue Odyssey 9 from the cave — and use a facing text (e.g. Steadman or the Homer Reader) for every word parse.</p>
          <div class="example-box">
            <div class="greek-line">ἦε φιλόξεινοι, καί σφιν νόος ἐστὶ θεουδής;</div>
            <div class="eng-line">…or guest-loving, and their mind is god-fearing?</div>
          </div>
          <p>That question is the moral hinge of the Cyclops episode — and of much of the Odyssey.</p>
        </div>
      </div>
      <div class="nav-row">
        <button class="btn btn-soft" data-go="reading-long/0">Re-read Od. 9 segment</button>
        <button class="btn btn-accent" data-go="vocab">Vocab mastery</button>
        <button class="btn btn-primary" data-go="welcome">Home</button>
      </div>
    `);
  }

  // ——— Router ———
  function render(route) {
    route = route || "welcome";
    let html = "";

    if (route === "welcome") html = viewWelcome();
    else if (route === "grammar-hub") html = viewGrammarHub();
    else if (route.startsWith("grammar/")) html = viewGrammarCard(route.slice(8));
    else if (route === "vocab") html = viewVocabHome();
    else if (route.startsWith("vocab-day/")) html = viewVocabDay(route.split("/")[1]);
    else if (route === "vocab-browse") html = viewVocabBrowse();
    else if (route === "vocab-quiz") html = viewVocabQuiz();
    else if (route === "thematic") html = viewThematicHome();
    else if (route.startsWith("theme/")) html = viewTheme(route.slice(6));
    else if (route === "map" || route === "map/done" || route.startsWith("map/")) {
      // Internal map course removed — open external journey map once, stay on welcome
      window.open("https://the-odyssey-journey.com/en/map", "_blank", "noopener,noreferrer");
      state = HGStorage.update(s => { s.lastRoute = "welcome"; });
      html = viewWelcome();
      route = "welcome";
    }
    else if (route === "reading-sentences" || route === "reading-sentences/0") html = viewReadingSentences(0);
    else if (route === "reading-sentences/done") html = viewReadingSentencesDone();
    else if (route.startsWith("reading-sentences/")) html = viewReadingSentences(parseInt(route.split("/")[1], 10) || 0);
    else if (route === "reading-passages" || route === "reading-passages/0") html = viewReadingPassages(0);
    else if (route === "reading-passages/done") html = viewReadingPassagesDone();
    else if (route.startsWith("reading-passages/")) html = viewReadingPassages(parseInt(route.split("/")[1], 10) || 0);
    else if (route === "reading-long" || route === "reading-long/0") html = viewReadingLong(0);
    else if (route === "reading-long-done") html = viewReadingLongDone();
    else if (route.startsWith("reading-long/")) html = viewReadingLong(parseInt(route.split("/")[1], 10) || 0);
    else if (route === "nt-refresh") html = viewNtRefresh();
    else html = viewWelcome();

    app.innerHTML = html;
    bindGlobal();
    bindGrammarQuiz();
    bindVocabCardActions();
    bindVocabDayCarousel();
    bindVocabQuiz();
    bindThematic();
    bindMapQuiz();
    bindReadingSentence();
    bindReadingPassage();
    bindReadingLong();
  }

  function bindGlobal() {
    app.querySelectorAll("[data-go]").forEach(el => {
      el.addEventListener("click", e => {
        e.preventDefault();
        go(el.getAttribute("data-go"));
      });
      if (el.classList.contains("topbar-brand")) {
        el.addEventListener("keydown", e => {
          if (e.key === "Enter") go("welcome");
        });
      }
    });
    const themeBtn = app.querySelector("#theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        state = HGStorage.update(s => { s.darkMode = !s.darkMode; });
        applyTheme();
        // re-render current route so icon updates
        render(state.lastRoute || "welcome");
      });
    }
    const reset = app.querySelector("#reset-progress");
    if (reset) {
      reset.addEventListener("click", () => {
        if (confirm("Reset all local progress?")) {
          const dark = state.darkMode;
          HGStorage.reset();
          state = HGStorage.load();
          state = HGStorage.update(s => { s.darkMode = dark; });
          applyTheme();
          go("welcome");
        }
      });
    }
  }

  // boot
  render(state.lastRoute || "welcome");
})();
