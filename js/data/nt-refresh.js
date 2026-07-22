/* NT / Hellenistic morphology quick refresh — inspired by Whitacre “Sneeze Sheet”
   Single scrollable reference page; no quizzes. Not a verbatim reproduction. */
const NT_REFRESH_HTML = `
<div class="nt-refresh">
  <h2>Biblical Greek Morphology — Quick Refresh</h2>
  <p class="muted lead-nt">A one-page run-through of what this course assumes you know. Scroll freely. No questions. Homeric differences come later in the main course.</p>

  <section class="nt-block">
    <h3>1. Cases — what each one does</h3>
    <table class="nt-table">
      <thead><tr><th>Case</th><th>Core job</th><th>Quick English cue</th></tr></thead>
      <tbody>
        <tr><td><strong>Nominative</strong></td><td>Subject; predicate nominative</td><td>who/what does the verb</td></tr>
        <tr><td><strong>Genitive</strong></td><td>Possession, description, separation; object of some prepositions</td><td>of… / from…</td></tr>
        <tr><td><strong>Dative</strong></td><td>Indirect object; means, manner, place where; object of some prepositions</td><td>to/for… / with… / in…</td></tr>
        <tr><td><strong>Accusative</strong></td><td>Direct object; extent of space/time; object of many prepositions</td><td>whom/what is acted on</td></tr>
        <tr><td><strong>Vocative</strong></td><td>Direct address</td><td>O…!</td></tr>
      </tbody>
    </table>
    <p class="tip"><strong>Article:</strong> ὁ, ἡ, τό declines and matches the noun in gender, number, and case. Learn the article paradigm once — it unlocks countless noun phrases.</p>
  </section>

  <section class="nt-block">
    <h3>2. Nouns — one example per declension</h3>
    <div class="nt-grid3">
      <div class="nt-card">
        <h4>1st declension · ἡ γραφή, -ῆς, f.</h4>
        <p class="muted">“writing, Scripture”</p>
        <table class="nt-table compact">
          <tr><td></td><th>Sg.</th><th>Pl.</th></tr>
          <tr><td>N</td><td>ἡ γραφή</td><td>αἱ γραφαί</td></tr>
          <tr><td>G</td><td>τῆς γραφῆς</td><td>τῶν γραφῶν</td></tr>
          <tr><td>D</td><td>τῇ γραφῇ</td><td>ταῖς γραφαῖς</td></tr>
          <tr><td>A</td><td>τὴν γραφήν</td><td>τὰς γραφάς</td></tr>
        </table>
      </div>
      <div class="nt-card">
        <h4>2nd declension · ὁ λόγος, -ου, m.</h4>
        <p class="muted">“word, message, reason”</p>
        <table class="nt-table compact">
          <tr><td></td><th>Sg.</th><th>Pl.</th></tr>
          <tr><td>N</td><td>ὁ λόγος</td><td>οἱ λόγοι</td></tr>
          <tr><td>G</td><td>τοῦ λόγου</td><td>τῶν λόγων</td></tr>
          <tr><td>D</td><td>τῷ λόγῳ</td><td>τοῖς λόγοις</td></tr>
          <tr><td>A</td><td>τὸν λόγον</td><td>τοὺς λόγους</td></tr>
        </table>
        <p class="muted mt-1">Neuter 2nd (τὸ ἔργον): nom. = acc.; pl. -α.</p>
      </div>
      <div class="nt-card">
        <h4>3rd declension · τὸ ὄνομα, -ατος, n.</h4>
        <p class="muted">“name”</p>
        <table class="nt-table compact">
          <tr><td></td><th>Sg.</th><th>Pl.</th></tr>
          <tr><td>N/A</td><td>τὸ ὄνομα</td><td>τὰ ὀνόματα</td></tr>
          <tr><td>G</td><td>τοῦ ὀνόματος</td><td>τῶν ὀνομάτων</td></tr>
          <tr><td>D</td><td>τῷ ὀνόματι</td><td>τοῖς ὀνόμασι(ν)</td></tr>
        </table>
        <p class="muted mt-1">3rd decl. stem often shows in the genitive.</p>
      </div>
    </div>
  </section>

  <section class="nt-block">
    <h3>3. Adjectives</h3>
    <p>Adjectives agree with their noun in <strong>gender, number, and case</strong>. Many use 2-1-2 patterns like ἀγαθός, -ή, -όν (m./f./n.).</p>
    <p class="example-inline"><span class="greek">ὁ ἀγαθὸς λόγος · τῆς ἀγαθῆς γραφῆς · τὸ ἀγαθὸν ἔργον</span></p>
    <p class="muted">3rd-declension adjectives (e.g. ἀληθής, -ές) and πᾶς, πᾶσα, πᾶν are high-frequency — review their paradigms when rusty.</p>
  </section>

  <section class="nt-block">
    <h3>4. The definite article (memory anchor)</h3>
    <table class="nt-table">
      <thead>
        <tr><th></th><th>M sg</th><th>F sg</th><th>N sg</th><th>M pl</th><th>F pl</th><th>N pl</th></tr>
      </thead>
      <tbody>
        <tr><td>N</td><td>ὁ</td><td>ἡ</td><td>τό</td><td>οἱ</td><td>αἱ</td><td>τά</td></tr>
        <tr><td>G</td><td>τοῦ</td><td>τῆς</td><td>τοῦ</td><td>τῶν</td><td>τῶν</td><td>τῶν</td></tr>
        <tr><td>D</td><td>τῷ</td><td>τῇ</td><td>τῷ</td><td>τοῖς</td><td>ταῖς</td><td>τοῖς</td></tr>
        <tr><td>A</td><td>τόν</td><td>τήν</td><td>τό</td><td>τούς</td><td>τάς</td><td>τά</td></tr>
      </tbody>
    </table>
  </section>

  <section class="nt-block">
    <h3>5. Verbs — building blocks (λύω model)</h3>
    <p>Think in layers: <strong>stem + tense sign + connecting vowel + personal ending</strong>. Primary endings (present, future, perfect) vs. secondary endings (imperfect, aorist, pluperfect). Augment (ε-) on past indicatives; reduplication on perfects.</p>

    <h4>Present indicative of λύω — active · middle/passive</h4>
    <table class="nt-table">
      <thead><tr><th></th><th>Active</th><th>Middle / Passive</th></tr></thead>
      <tbody>
        <tr><td>1 sg</td><td>λύω</td><td>λύομαι</td></tr>
        <tr><td>2 sg</td><td>λύεις</td><td>λύῃ (λύει)</td></tr>
        <tr><td>3 sg</td><td>λύει</td><td>λύεται</td></tr>
        <tr><td>1 pl</td><td>λύομεν</td><td>λυόμεθα</td></tr>
        <tr><td>2 pl</td><td>λύετε</td><td>λύεσθε</td></tr>
        <tr><td>3 pl</td><td>λύουσι(ν)</td><td>λύονται</td></tr>
      </tbody>
    </table>
    <p><strong>Present infinitives:</strong> λύειν (act.) · λύεσθαι (m/p)</p>

    <h4>Imperfect indicative — endings only (with λύω forms)</h4>
    <p class="endings-line">Active: <span class="greek">ἔλυον, ἔλυες, ἔλυε(ν), ἐλύομεν, ἐλύετε, ἔλυον</span></p>
    <p class="endings-line">Middle/Pass.: <span class="greek">ἐλυόμην, ἐλύου, ἐλύετο, ἐλυόμεθα, ἐλύεσθε, ἐλύοντο</span></p>
    <p class="muted">Secondary active endings in essence: -ν, -ς, –, -μεν, -τε, -ν / -σαν · Middle: -μην, -σο/-ου, -το, -μεθα, -σθε, -ντο</p>

    <h4>Future active / middle (λύω)</h4>
    <p class="endings-line">Active: <span class="greek">λύσω, λύσεις, λύσει, λύσομεν, λύσετε, λύσουσι(ν)</span></p>
    <p class="endings-line">Middle: <span class="greek">λύσομαι, λύσῃ, λύσεται, λυσόμεθα, λύσεσθε, λύσονται</span></p>
    <p class="muted">Tense sign σ before primary endings. Liquid futures (λ μ ν ρ stems) behave specially (ε contracted).</p>

    <h4>1st aorist active (weak / sigmatic) — λύω chart</h4>
    <table class="nt-table">
      <thead><tr><th></th><th>Active</th><th>Middle</th></tr></thead>
      <tbody>
        <tr><td>1 sg</td><td>ἔλυσα</td><td>ἐλυσάμην</td></tr>
        <tr><td>2 sg</td><td>ἔλυσας</td><td>ἐλύσω</td></tr>
        <tr><td>3 sg</td><td>ἔλυσε(ν)</td><td>ἐλύσατο</td></tr>
        <tr><td>1 pl</td><td>ἐλύσαμεν</td><td>ἐλυσάμεθα</td></tr>
        <tr><td>2 pl</td><td>ἐλύσατε</td><td>ἐλύσασθε</td></tr>
        <tr><td>3 pl</td><td>ἔλυσαν</td><td>ἐλύσαντο</td></tr>
      </tbody>
    </table>
    <p><strong>Aor. act. infinitive:</strong> λῦσαι · <strong>Aor. mid. inf.:</strong> λύσασθαι</p>
    <p class="muted">Aorist passive (1st): ἐλύθην, -ης, -η, -ημεν, -ητε, -ησαν · inf. λυθῆναι</p>

    <h4>2nd aorist (strong) — different stem, present-looking endings</h4>
    <p>Example: λείπω → aor. stem λιπ- · <span class="greek">ἔλιπον, ἔλιπες, ἔλιπε(ν), ἐλίπομεν, ἐλίπετε, ἔλιπον</span></p>
    <p class="muted">Another common type: βάλλω → ἔβαλον · λαμβάνω → ἔλαβον · ἔρχομαι → ἦλθον. Learn principal parts; do not invent σ-aorists for these.</p>
  </section>

  <section class="nt-block">
    <h3>6. Personal endings (summary strip)</h3>
    <div class="nt-grid2">
      <div class="nt-card">
        <h4>Primary (pres., fut., perf.)</h4>
        <p><strong>Active:</strong> -ω/-μι, -ς, -σι(ν)/–, -μεν, -τε, -ουσι(ν)/-ασι(ν)</p>
        <p><strong>Middle/Pass.:</strong> -μαι, -σαι (-ῃ), -ται, -μεθα, -σθε, -νται</p>
      </div>
      <div class="nt-card">
        <h4>Secondary (impf., aor., plup.)</h4>
        <p><strong>Active:</strong> -ν/–, -ς, –(ν), -μεν, -τε, -ν/-σαν</p>
        <p><strong>Middle:</strong> -μην, -σο (-ου), -το, -μεθα, -σθε, -ντο</p>
      </div>
    </div>
    <p class="muted mt-1">Connecting (variable) vowels: ο before μ/ν; ε elsewhere (with familiar ει contractions in pres./fut. act. sg.).</p>
  </section>

  <section class="nt-block">
    <h3>7. Participles &amp; non-indicative moods (recognition)</h3>
    <ul>
      <li><strong>Pres./2 aor. act. pple:</strong> -ων, -ουσα, -ον (stem -οντ-)</li>
      <li><strong>1 aor. act. pple:</strong> -σας, -σασα, -σαν (-σαντ-)</li>
      <li><strong>Aor. pass. pple:</strong> -θείς, -θεῖσα, -θέν (-θεντ-)</li>
      <li><strong>Mid./pass. pple:</strong> -μενος, -η, -ον</li>
      <li><strong>Subjunctive:</strong> lengthened theme vowel ω/η · primary-style endings</li>
      <li><strong>Optative:</strong> ι before the ending (less common in NT narrative)</li>
      <li><strong>Imperative (sample):</strong> act. 2 sg. -ε / -σον · m/p 2 sg. -ου / -σαι · 3 sg. -τω / -σθω · pl. -τε / -σθε, -τωσαν / -σθωσαν</li>
    </ul>
  </section>

  <section class="nt-block">
    <h3>8. Square of stops + contraction (quick)</h3>
    <p>Labial π β φ + σ → ψ · Palatal κ γ χ + σ → ξ · Dental τ δ θ ζ + σ → ς</p>
    <p>Common contractions: αε → ᾱ · εε → ει · εο/οε/οο → ου · εα → η · οει → οι · ο + long vowel → ω (typical patterns)</p>
  </section>

  <section class="nt-block">
    <h3>9. εἰμί essentials</h3>
    <p class="endings-line">Pres.: <span class="greek">εἰμί, εἶ, ἐστί(ν), ἐσμέν, ἐστέ, εἰσί(ν)</span></p>
    <p class="endings-line">Impf.: <span class="greek">ἤμην, ἦς/ἦσθα, ἦν, ἦμεν/ἤμεθα, ἦτε, ἦσαν</span></p>
    <p class="endings-line">Fut.: <span class="greek">ἔσομαι, ἔσῃ, ἔσται, ἐσόμεθα, ἔσεσθε, ἔσονται</span></p>
    <p>Inf. εἶναι · Imv. ἴσθι, ἔστω, ἔστε, ἔστωσαν</p>
  </section>

  <section class="nt-block">
    <h3>10. Pronouns (minimal)</h3>
    <p><strong>Personal:</strong> ἐγώ / σύ · ἡμεῖς / ὑμεῖς (gen. μου/σου, dat. μοι/σοι, acc. με/σε — enclitic forms common)</p>
    <p><strong>τις, τι</strong> (indefinite) vs. <strong>τίς, τί</strong> (interrogative) — accent distinguishes them.</p>
    <p><strong>πᾶς, πᾶσα, πᾶν</strong> — “all, every”; declines with mixed 3rd/1st patterns (παντός, πάσης…).</p>
  </section>

  <section class="nt-block final-nt">
    <h3>Ready for Homer?</h3>
    <p>If the above looks mostly familiar, go on to the Homeric dialect course. If not, skim a first-year NT grammar chapter on nouns + λύω, then return. Homer will add optional augments, extra endings, κε/κεν, tmesis, and epic vocabulary — not a whole new case system.</p>
    <div class="nav-row mt-2">
      <button class="btn btn-primary" data-go="grammar-hub">Start Homeric grammar →</button>
      <button class="btn btn-soft" data-go="welcome">← Welcome</button>
    </div>
  </section>
</div>
`;
