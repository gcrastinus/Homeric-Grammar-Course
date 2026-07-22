/* Homeric dialect grammar course — Odyssey focus
   Audience: students with NT/Biblical Greek basics
   Each card has 3 quiz variants (A/B/C) for re-runs
*/
const GRAMMAR_SECTIONS = [
  {
    id: "welcome-course",
    title: "How This Overview Works",
    short: "What you already know, and what we will add",
    body: `
      <p>You already read the New Testament in Greek. That means you know the alphabet, the article, the present/future/aorist/perfect indicative (except pluperfect), basic participles, a little subjunctive, some imperatives and infinitives, and a large core of common vocabulary.</p>
      <p>Homeric Greek is <strong>not</strong> a different language — it is an older, mixed poetic dialect (Ionic with Aeolic and archaic layers). Most of what you know still works. What changes is:</p>
      <ul>
        <li><strong>Morphology:</strong> extra endings, uncontracted forms, dual number, optional augment</li>
        <li><strong>Particles and syntax:</strong> κε/κεν for ἄν, tmesis, freer word order</li>
        <li><strong>Vocabulary:</strong> many high-frequency epic words rare or absent in the NT (μῦθος, νόστος, μέγαρον…)</li>
        <li><strong>Style:</strong> formulae, epithets, and a few poetic devices that affect sense</li>
      </ul>
      <p class="tip"><strong>Programmed path:</strong> most cards give a short teaching text and then three quick questions with immediate feedback. Nothing is graded. Jump to any section from the table of contents, and re-run a card later for a different quiz set (A, B, or C).</p>
      <p>This course aims at the <em>Odyssey</em> only — return, hospitality, sea voyage, speech, and cunning — not the battle-heavy Iliad.</p>
    `,
    quizzes: []
  },
  {
    id: "sounds-spelling",
    title: "Sounds & Spelling You Will Notice",
    short: "η for long ā; uncontracted vowels; movable ν; -φι",
    body: `
      <p>Homer’s text looks “Ionic.” The biggest spelling habit for Attic/NT readers:</p>
      <ul>
        <li><strong>η often where Attic has long α</strong> after ε, ι, ρ: Attic <span class="greek">χώρα</span> ~ Homeric <span class="greek">χώρη</span>; Attic <span class="greek">πρᾶγμα</span> area shows as η-forms in many Ionic words.</li>
        <li><strong>Uncontracted vowels stay open:</strong> <span class="greek">νόος</span> (not νοῦς), <span class="greek">ὀστέα</span> (not ὀστᾶ), <span class="greek">ποιέει</span> beside ποιεῖ.</li>
        <li><strong>Movable ν</strong> is frequent before consonants and vowels: <span class="greek">ἔστιν</span>, <span class="greek">εἶπεν</span>.</li>
        <li><strong>Digamma (ϝ)</strong> is lost in our spelling but explains odd hiatus and some forms (e.g. related to <span class="greek">οἶκος</span>, <span class="greek">οἶνος</span>, <span class="greek">ἔργον</span> historically). You need not write it — just know “missing letter” effects exist.</li>
        <li><strong>Instrumental/locative -φι(ν):</strong> <span class="greek">βίηφι</span> “by force,” <span class="greek">ὄρεσφι</span> “in the mountains.” Treat as dat./abl. sense.</li>
      </ul>
      <div class="example-box">
        <div class="greek-line">νόον ἔγνω · ὀστέα πύθεται</div>
        <div class="eng-line">he came to know the mind · the bones rot</div>
      </div>
      <p class="tip"><strong>Reading habit:</strong> when two vowels sit next to each other where NT would contract, read them as separate syllables in sense — morphology is often clearer uncontracted.</p>
    `,
    quizzes: [
      [
        {
          q: "Homeric <span class=\"greek\">νόος</span> corresponds to Attic/NT…",
          options: ["νοῦς", "νόμος", "νῦν", "ναός"],
          answer: 0,
          explain: "Uncontracted νόος = contracted νοῦς “mind.”"
        },
        {
          q: "The ending <span class=\"greek\">-φι(ν)</span> most often functions like…",
          options: ["A vocative plural", "An instrumental/locative (dat./abl. sense)", "A future tense marker", "A negative particle"],
          answer: 1,
          explain: "βίηφι “by force,” etc."
        },
        {
          q: "Why care about the lost digamma?",
          options: [
            "You must write ϝ in every answer",
            "It explains some hiatus and related word families",
            "It replaces the article",
            "It marks the dual only"
          ],
          answer: 1,
          explain: "Digamma is not printed, but it underlies some Homeric irregularities."
        }
      ],
      [
        {
          q: "Compared with Attic, Ionic Homer often shows…",
          options: ["η where Attic has long α (in many stems)", "Only short vowels", "Latin endings", "No datives"],
          answer: 0,
          explain: "Ionic η for long α is a hallmark spelling difference."
        },
        {
          q: "<span class=\"greek\">ὀστέα</span> (not ὀστᾶ) illustrates…",
          options: ["Tmesis", "Uncontracted vowels", "Dual of εἰμί", "Augment"],
          answer: 1,
          explain: "Open vowel sequence instead of contraction."
        },
        {
          q: "Movable ν in Homer…",
          options: ["Never appears", "Is common (ἔστιν, εἶπεν…)", "Only appears on nouns", "Means “and”"],
          answer: 1,
          explain: "Expect movable nu freely."
        }
      ],
      [
        {
          q: "Best first reaction to <span class=\"greek\">ποιέει</span>?",
          options: [
            "Parse as if it were Latin",
            "See uncontracted ποιέω form ≈ ποιεῖ",
            "Assume it is aorist passive",
            "Ignore it as a scribal error always"
          ],
          answer: 1,
          explain: "Uncontracted present forms of contract verbs are normal."
        },
        {
          q: "<span class=\"greek\">βίηφι</span> roughly means…",
          options: ["Without force", "By force / with force", "I will force", "Force (vocative)"],
          answer: 1,
          explain: "-φι instrumental sense."
        },
        {
          q: "True or false: Homer’s dialect is pure classical Attic.",
          options: ["True", "False"],
          answer: 1,
          explain: "It is a mixed epic Kunstsprache, chiefly Ionic-looking."
        }
      ]
    ]
  },
  {
    id: "article-pronouns",
    title: "Article, Pronouns, and “Him”",
    short: "ὁ/ἡ/τό as demonstrative; μιν, ἑ, σφε; κεῖνος",
    body: `
      <p>In Homer the forms you know as the <strong>article</strong> often still feel <strong>demonstrative</strong> or weakly deictic: <span class="greek">ὁ δέ</span> “and he…,” <span class="greek">τὸν δέ</span> “and him….” Sometimes they behave more like NT article; do not force “the” every time.</p>
      <p><strong>Third-person pronouns you need immediately:</strong></p>
      <table>
        <tr><th>Form</th><th>Sense</th></tr>
        <tr><td><span class="greek">μιν</span></td><td>him/her/it (enclitic, very common)</td></tr>
        <tr><td><span class="greek">ἑ / ἕ / οἷ / ἕο</span> (etc.)</td><td>him/her (reflexive / anaphoric 3rd)</td></tr>
        <tr><td><span class="greek">σφε / σφί / σφέας</span></td><td>them (3rd pl.)</td></tr>
        <tr><td><span class="greek">ἑός, ἑή, ἑόν</span></td><td>his/her own</td></tr>
        <tr><td><span class="greek">ὅς, ἥ, ὅν</span> (possessive)</td><td>his/her (distinct from relative carefully by context)</td></tr>
      </table>
      <p><span class="greek">κεῖνος / ἐκεῖνος</span> “that one” is frequent. Relative <span class="greek">ὅς, ἥ, ὅ</span> works as in NT, but watch epic <span class="greek">ὅς τε</span> (generalizing τε).</p>
      <div class="example-box">
        <div class="greek-line">τὸν δ’ ἠμείβετ’ ἔπειτα θεά …</div>
        <div class="eng-line">And him then the goddess answered…</div>
      </div>
      <p class="tip"><strong>μιν</strong> is almost never in the NT. Train your eye: unaccented <span class="greek">μιν</span> after a verb or preposition is “him/her.”</p>
    `,
    quizzes: [
      [
        {
          q: "In <span class=\"greek\">ὁ δέ</span> at the start of a clause, ὁ often means…",
          options: ["“the” only, always", "“and he / but he” (demonstrative-ish)", "“if”", "“not”"],
          answer: 1,
          explain: "Article forms frequently pick up a known subject: “and he…”."
        },
        {
          q: "<span class=\"greek\">μιν</span> means…",
          options: ["we", "him/her/it", "never", "with"],
          answer: 1,
          explain: "Enclitic 3rd person object pronoun."
        },
        {
          q: "<span class=\"greek\">ἑός</span> is best glossed…",
          options: ["one (number)", "his/her own", "you (pl.)", "ship"],
          answer: 1,
          explain: "Possessive of the 3rd person reflexive family."
        }
      ],
      [
        {
          q: "Which is the common Homeric “them” object form?",
          options: ["<span class=\"greek\">σφε / σφέας</span>", "<span class=\"greek\">ἡμεῖς</span>", "<span class=\"greek\">σύ</span>", "<span class=\"greek\">τις</span>"],
          answer: 0,
          explain: "σφε- forms for 3rd plural."
        },
        {
          q: "<span class=\"greek\">τὸν δέ</span> after speech often introduces…",
          options: ["A new landscape only", "The next speaker/addressee as object (“and him… answered”)", "Always a genitive absolute", "A purpose clause only"],
          answer: 1,
          explain: "Formula: τὸν δ’ ἠμείβετο… “and him X answered.”"
        },
        {
          q: "Is Homeric ὁ/ἡ/τό always identical to NT “the”?",
          options: ["Yes, 100%", "No — often demonstrative or resumptive"],
          answer: 1,
          explain: "More flexible deixis than in the NT."
        }
      ],
      [
        {
          q: "In Odyssey formula <span class=\"greek\">τὴν δ’ ἀπαμειβόμενος προσέφη…</span>, τήν is…",
          options: ["Feminine article-as-object “her”", "A conjunction", "An infinitive", "Always meaning “the (abstract)”"],
          answer: 0,
          explain: "Her (Athena, etc.) he answered and addressed…"
        },
        {
          q: "Possessive <span class=\"greek\">ὅν</span> (e.g. <span class=\"greek\">ὃν κατὰ θυμόν</span>) means…",
          options: ["whom only", "his (own) …", "our", "your (pl.)"],
          answer: 1,
          explain: "3rd person possessive; context separates it from relative."
        },
        {
          q: "Which form is least at home in the NT but constant in Homer?",
          options: ["καί", "μιν", "θεός", "λόγος"],
          answer: 1,
          explain: "μιν is a Homeric staple for NT readers."
        }
      ]
    ]
  },
  {
    id: "noun-endings",
    title: "Noun Endings That Shock NT Readers",
    short: "Gen. -οιο / -άων; dat. -εσσι / -οισι; dual; -θεν / -δε",
    body: `
      <p>First- and second-declension forms you already know still dominate. Add these high-frequency epic alternatives:</p>
      <table>
        <tr><th>Case / number</th><th>Epic form</th><th>≈ NT/Attic</th></tr>
        <tr><td>Gen. sg. 2nd</td><td><span class="greek">-οιο</span> (θεοῖο)</td><td><span class="greek">-ου</span></td></tr>
        <tr><td>Gen. pl. 1st</td><td><span class="greek">-άων / -έων</span></td><td><span class="greek">-ῶν</span></td></tr>
        <tr><td>Dat. pl.</td><td><span class="greek">-οισι / -ῃσι / -εσσι</span></td><td><span class="greek">-οις / -αις / -σι</span></td></tr>
        <tr><td>Dual nom/acc</td><td><span class="greek">-ω</span> (often)</td><td>(rare in NT)</td></tr>
        <tr><td>Dual gen/dat</td><td><span class="greek">-οιν / -ῃιν</span></td><td>—</td></tr>
      </table>
      <p><strong>Place suffixes:</strong></p>
      <ul>
        <li><span class="greek">-δε</span> “to(ward)”: <span class="greek">οἴκαδε</span> homeward, <span class="greek">ἀγορήνδε</span> to the assembly</li>
        <li><span class="greek">-θεν</span> “from”: <span class="greek">οἴκοθεν</span>, <span class="greek">Τροίηθεν</span></li>
        <li><span class="greek">-θι</span> “at/in”: <span class="greek">οἴκοθι</span></li>
      </ul>
      <div class="example-box">
        <div class="greek-line">οἴκαδε νισόμενον · ἐνὶ μεγάροισι</div>
        <div class="eng-line">going homeward · in the halls</div>
      </div>
      <p class="tip"><strong>ναῦς</strong> is irregular and constant in the Odyssey: <span class="greek">νηῦς / νηός / νηί / νῆα</span>, pl. <span class="greek">νῆες, νεῶν, νηυσί, νῆας</span>. Drill it early.</p>
    `,
    quizzes: [
      [
        {
          q: "<span class=\"greek\">θεοῖο</span> is…",
          options: ["Nom. pl.", "Gen. sg. (= θεοῦ)", "Acc. dual", "Voc. sg."],
          answer: 1,
          explain: "-οιο = genitive singular 2nd declension."
        },
        {
          q: "<span class=\"greek\">οἴκαδε</span> means…",
          options: ["from home", "homeward / to home", "at home always", "without a house"],
          answer: 1,
          explain: "-δε marks motion toward."
        },
        {
          q: "Dat. pl. <span class=\"greek\">μεγάροισι</span> ≈",
          options: ["μεγάρων", "μεγάροις (in the halls)", "μέγαρον (nom. only)", "a verb"],
          answer: 1,
          explain: "-οισι is epic dative plural."
        }
      ],
      [
        {
          q: "<span class=\"greek\">-θεν</span> on a place word usually means…",
          options: ["toward", "from", "future tense", "plural only"],
          answer: 1,
          explain: "Ablatival “from.”"
        },
        {
          q: "The dual number in Homer…",
          options: ["Never occurs", "Occurs for natural pairs (eyes, two people, etc.)", "Replaces all plurals", "Is only for gods’ names"],
          answer: 1,
          explain: "Dual is alive in epic for pairs."
        },
        {
          q: "Gen. pl. <span class=\"greek\">θεάων</span> is…",
          options: ["of the goddesses", "to the goddess", "O goddess!", "by the goddess (dat. sg.)"],
          answer: 0,
          explain: "Epic genitive plural of 1st declension."
        }
      ],
      [
        {
          q: "Which is a correct Odyssey-style form of “ship” (acc. sg.)?",
          options: ["<span class=\"greek\">νῆα</span>", "<span class=\"greek\">ναύτην</span> only", "<span class=\"greek\">πλοῖον</span> only ever", "<span class=\"greek\">νηυσί</span> (that’s acc. sg.)"],
          answer: 0,
          explain: "νῆα is acc. sg.; νηυσί is dat. pl."
        },
        {
          q: "<span class=\"greek\">ἀγορήνδε</span> =",
          options: ["from the assembly", "to the assembly", "without assembly", "assemblies (nom. pl.)"],
          answer: 1,
          explain: "-δε allative."
        },
        {
          q: "When you see <span class=\"greek\">-εσσι</span> on a 3rd-declension stem…",
          options: ["Think gen. sg.", "Think dat. pl. epic", "Think aorist imperative", "Think article"],
          answer: 1,
          explain: "Epic dative plural: ποσσί / πόδεσσι, etc."
        }
      ]
    ]
  },
  {
    id: "verb-basics",
    title: "Verb Habits: Augment, Endings, Uncontracted",
    short: "Optional augment; -σθα; aorists; mid. -μην",
    body: `
      <p>Your NT principal-parts thinking still applies. Epic add-ons:</p>
      <ul>
        <li><strong>Augment is optional</strong> in the aorist and imperfect: <span class="greek">βῆ</span> = ἔβη, <span class="greek">φάτο</span> = ἔφατο. Context and stem tell tense, not only the ε-.</li>
        <li><strong>2sg endings:</strong> <span class="greek">-σθα</span> (ἐσσι, ἦσθα, οἶσθα). Mid./pass. 2sg often <span class="greek">-εο / -ευ</span>.</li>
        <li><strong>Infinitives:</strong> thematic <span class="greek">-έμεν / -έμεναι</span>, athematic <span class="greek">-μεν / -μεναι</span> beside -ειν / -ναι. Example: <span class="greek">ἰδέειν</span>, <span class="greek">ἔμμεναι</span> (= εἶναι).</li>
        <li><strong>Aorist without σ:</strong> root aorists (<span class="greek">ἔστη, ἔβη, ἔγνω</span>) and thematic aorists you partly know.</li>
        <li><strong>Iteratives:</strong> <span class="greek">-σκ-</span> “kept doing”: <span class="greek">εἴπεσκε</span> “would say.”</li>
      </ul>
      <div class="example-box">
        <div class="greek-line">ὣς ἔφατ’ · βῆ δὲ κατ’ Οὐλύμποιο καρήνων</div>
        <div class="eng-line">so he/she spoke · and she went down from the peaks of Olympus</div>
      </div>
      <p class="tip"><strong>φῆμι family:</strong> <span class="greek">ἔφη / ἔφατο / φάτο</span> “said”; participle <span class="greek">φάντες</span>. Speech formulas will fill half your page — love them.</p>
    `,
    quizzes: [
      [
        {
          q: "Unaugmented <span class=\"greek\">βῆ</span> is typically…",
          options: ["Present infinitive", "Aorist (≈ ἔβη) “went/stepped”", "Future of βαίνω", "Genitive of βία"],
          answer: 1,
          explain: "Optional augment: βῆ = ἔβη."
        },
        {
          q: "<span class=\"greek\">ἔμμεναι</span> ≈",
          options: ["εἶναι (to be)", "ἔπεμψα", "μένω only", "we go"],
          answer: 0,
          explain: "Epic infinitive of εἰμί."
        },
        {
          q: "The suffix <span class=\"greek\">-σκ-</span> in <span class=\"greek\">εἴπεσκε</span> suggests…",
          options: ["Aorist passive", "Iterative / habitual past", "Optative plural", "Dual only"],
          answer: 1,
          explain: "Homeric iterative."
        }
      ],
      [
        {
          q: "Is a missing augment proof that a form is present tense?",
          options: ["Yes always", "No — aorist/impf. may lack augment"],
          answer: 1,
          explain: "Look at stem and endings, not only ε-."
        },
        {
          q: "<span class=\"greek\">ἰδέειν</span> is…",
          options: ["Aor. inf. of ὁράω/εἶδον “to see”", "Present of εἰμί", "Gen. of ἰδέα", "Imperative of ἵημι"],
          answer: 0,
          explain: "Uncontracted aorist infinitive."
        },
        {
          q: "2sg <span class=\"greek\">οἶσθα</span> means…",
          options: ["I know", "you know", "he knew (aor.)", "to know"],
          answer: 1,
          explain: "οἶδα, 2sg οἶσθα."
        }
      ],
      [
        {
          q: "In narrative, <span class=\"greek\">ὣς φάτο</span> is best taken as…",
          options: ["“so that he may speak”", "“so he/she spoke” (aor. mid. of φημί)", "“as if speaking forever”", "A future condition"],
          answer: 1,
          explain: "Closing formula of a speech."
        },
        {
          q: "Contract verbs in Homer often appear…",
          options: ["Only as aorist passives", "Uncontracted (ὁράω, ποιέει…)", "Without person endings", "In Latin script"],
          answer: 1,
          explain: "Open forms are normal."
        },
        {
          q: "Which pair is correctly matched?",
          options: [
            "ἔμμεναι = to send",
            "βῆ = went",
            "φάτο = will speak tomorrow only",
            "-σκ- = perfect marker"
          ],
          answer: 1,
          explain: "βῆ ≈ ἔβη “went.”"
        }
      ]
    ]
  },
  {
    id: "eimi-epic",
    title: "εἰμί and Key Irregulars in Epic",
    short: "ἐσσι, ἦεν, ἔσαν, ἔσσεται; εἶμι “shall go”",
    body: `
      <p><strong>εἰμί “be”</strong> — learn these by sight:</p>
      <table>
        <tr><th>Form</th><th>Person</th><th>Note</th></tr>
        <tr><td><span class="greek">ἐσσι / εἰς</span></td><td>2sg</td><td>you are</td></tr>
        <tr><td><span class="greek">ἐστί(ν)</span></td><td>3sg</td><td>as in NT</td></tr>
        <tr><td><span class="greek">εἰσί / ἔασι</span></td><td>3pl</td><td>they are</td></tr>
        <tr><td><span class="greek">ἦν / ἦεν / ἔην</span></td><td>3sg impf.</td><td>was</td></tr>
        <tr><td><span class="greek">ἔσαν / ἦσαν</span></td><td>3pl impf.</td><td>were</td></tr>
        <tr><td><span class="greek">ἔσσεται / ἔσται</span></td><td>3sg fut.</td><td>will be</td></tr>
        <tr><td><span class="greek">ἔμμεναι / ἔμεναι / εἶναι</span></td><td>inf.</td><td>to be</td></tr>
        <tr><td><span class="greek">ἐών, ἐοῦσα, ἐόν</span></td><td>pple</td><td>being (≈ ὤν)</td></tr>
      </table>
      <p><strong>εἶμι “go”</strong> is still future-leaning in sense (“I shall go”), forms like <span class="greek">εἶσι, ἴμεν, ἰέναι, ἰών</span>. Do not confuse with εἰμί.</p>
      <p>Other high-frequency irregulars: <span class="greek">οἶδα</span> (perf. with present sense), <span class="greek">φημί</span>, <span class="greek">ἧμαι</span> “sit,” <span class="greek">κεῖμαι</span> “lie,” <span class="greek">ἧμαι/ἥμενος</span>.</p>
      <div class="example-box">
        <div class="greek-line">πολυμήχανός ἐσσι · οἴκοι ἔσαν</div>
        <div class="eng-line">you are a man of many devices · they were at home</div>
      </div>
    `,
    quizzes: [
      [
        {
          q: "<span class=\"greek\">ἐσσι</span> =",
          options: ["I am", "you are", "he was", "to be"],
          answer: 1,
          explain: "2sg of εἰμί."
        },
        {
          q: "<span class=\"greek\">ἦεν</span> is…",
          options: ["Future of εἶμι", "Imperfect 3sg of εἰμί “was”", "Aorist of ἵημι", "Gen. of ἠώς"],
          answer: 1,
          explain: "Epic imperfect of “be.”"
        },
        {
          q: "<span class=\"greek\">ἐών</span> is…",
          options: ["Participle of εἰμί (being)", "Aorist of ἔρχομαι", "Dat. pl. of ἔαρ", "Imperative of ἐάω only"],
          answer: 0,
          explain: "≈ ὤν."
        }
      ],
      [
        {
          q: "Do not confuse <span class=\"greek\">εἶμι</span> with <span class=\"greek\">εἰμί</span>. εἶμι means…",
          options: ["I am", "I (shall) go", "I said", "I know"],
          answer: 1,
          explain: "εἶμι = go; εἰμί = be."
        },
        {
          q: "<span class=\"greek\">ἔσσεται</span> ≈",
          options: ["was", "will be", "had been", "be! (imperative)"],
          answer: 1,
          explain: "Future of εἰμί."
        },
        {
          q: "<span class=\"greek\">ἔσαν</span> =",
          options: ["they were", "you (sg.) are", "I shall go", "having been (pple)"],
          answer: 0,
          explain: "3pl imperfect."
        }
      ],
      [
        {
          q: "In <span class=\"greek\">πολυμήχανός ἐσσι</span>, the verb is…",
          options: ["2sg “you are”", "3pl “they are”", "inf. “to be”", "aor. “you were”"],
          answer: 0,
          explain: "Address to Odysseus: “you are many-device-ful.”"
        },
        {
          q: "<span class=\"greek\">κεῖμαι</span> in Homer often means…",
          options: ["I run", "I lie / am laid", "I sail only", "I sing"],
          answer: 1,
          explain: "Common for bodies, treasures, situations “lying”."
        },
        {
          q: "Which form is an infinitive “to be”?",
          options: ["ἦεν", "ἔμμεναι", "ἐσσι", "ἔσαν"],
          answer: 1,
          explain: "Epic inf. of εἰμί."
        }
      ]
    ]
  },
  {
    id: "particles-ke",
    title: "Particles: κε/κεν, ἄρα, περ, τοι, αὐτάρ",
    short: "Modal κε = ἄν; discourse glue of epic",
    body: `
      <p>Particles are half of reading fluency. Essentials:</p>
      <ul>
        <li><strong><span class="greek">κε / κεν / κ’</span></strong> ≈ Attic/NT <span class="greek">ἄν</span>. With subjunctive: “whenever / so that (prospective).” With optative: potential (“would/could”). With past indicative: contrary-to-fact (as with ἄν).</li>
        <li><strong><span class="greek">ἄρα / ῥα / ῥ’</span></strong> “so then / as it turns out” — light inference or narrative pivot; often nearly untranslatable.</li>
        <li><strong><span class="greek">περ</span></strong> intensive or concessive: “even,” “although” (with participles: <span class="greek">ἱέμενός περ</span> “though eager”).</li>
        <li><strong><span class="greek">τοι / τοιγάρ</span></strong> “surely / I tell you / therefore.”</li>
        <li><strong><span class="greek">ἦ</span></strong> “truly / indeed” (affirmative); also imperfect of ἡμί “said” in <span class="greek">ἦ ῥα</span>.</li>
        <li><strong><span class="greek">αὐτάρ / ἀτάρ</span></strong> “but / and next” — strong narrative turn.</li>
        <li><strong><span class="greek">δέ / μέν … δέ</span></strong> still structure paragraphs; <span class="greek">ἠδέ / ἠμέν … ἠδέ</span> “and / both…and.”</li>
        <li><strong><span class="greek">γε</span></strong> focuses: “at least / precisely.”</li>
      </ul>
      <div class="example-box">
        <div class="greek-line">ὥς κε νέηται · ἱέμενός περ · αὐτὰρ Ὀδυσσεύς</div>
        <div class="eng-line">so that he may return · though eager · but Odysseus…</div>
      </div>
      <p class="tip"><strong>Translate particles lightly.</strong> Over-translating ἄρα as “therefore!!” every time will make English absurd. Feel them as rhythm and logic, not as heavy adverbs.</p>
    `,
    quizzes: [
      [
        {
          q: "Homeric <span class=\"greek\">κε / κεν</span> roughly equals Attic…",
          options: ["οὐ", "ἄν", "τε", "εἰς"],
          answer: 1,
          explain: "Modal particle ≈ ἄν."
        },
        {
          q: "In <span class=\"greek\">ἱέμενός περ</span>, περ is…",
          options: ["“although / even though”", "“never”", "Aorist augment", "Article"],
          answer: 0,
          explain: "Concessive with participle."
        },
        {
          q: "<span class=\"greek\">αὐτάρ</span> typically signals…",
          options: ["Purpose only", "A narrative contrast or turn (“but / then”)", "Genitive absolute", "Passive voice"],
          answer: 1,
          explain: "Stronger “but/and next” than plain δέ."
        }
      ],
      [
        {
          q: "<span class=\"greek\">ὥς κε + subjunctive</span> often expresses…",
          options: ["Past contrary-to-fact only", "Purpose / prospective “so that / how he may…”", "Prohibition with μή only", "Vocative"],
          answer: 1,
          explain: "Common purpose/prospective construction."
        },
        {
          q: "ἄρα / ῥα is best handled as…",
          options: ["Always “never”", "A light “so / then / as it happens”", "The main verb “to see”", "A dual ending"],
          answer: 1,
          explain: "Discourse particle; translate sparingly."
        },
        {
          q: "<span class=\"greek\">ἠδέ</span> means…",
          options: ["but not", "and", "if not", "because"],
          answer: 1,
          explain: "Epic “and.”"
        }
      ],
      [
        {
          q: "Potential optative with κε (e.g. “could send”) is like NT…",
          options: ["ἄν + optative", "ἵνα + indicative only", "Genitive of comparison", "Articular infinitive only"],
          answer: 0,
          explain: "κε ≈ ἄν in potential sense."
        },
        {
          q: "Focus particle <span class=\"greek\">γε</span> adds…",
          options: ["Future time", "Emphasis (“at least / for one”)", "Plural number", "Augment"],
          answer: 1,
          explain: "Scales or focuses a word."
        },
        {
          q: "In <span class=\"greek\">ἦ ῥα καί…</span> introducing action after speech, ἦ is often…",
          options: ["“or”", "“he/she said” (from ἡμί) + particle ῥα", "Relative pronoun", "Negation"],
          answer: 1,
          explain: "Common speech-to-action hinge."
        }
      ]
    ]
  },
  {
    id: "tmesis",
    title: "Tmesis: When the Preverb Walks Away",
    short: "ἐν δ’ ἔβαλεν = ἐνέβαλεν; read the compound",
    body: `
      <p><strong>Tmesis</strong> (“cutting”) is when a preverb separates from its verb:</p>
      <div class="example-box">
        <div class="greek-line">ἐν δέ οἱ ἧπαρ οὖτασε</div>
        <div class="eng-line">≈ ἐν-οὐτάω: he struck into the liver…</div>
      </div>
      <p>Also: <span class="greek">κατὰ βοῦς … ἤσθιον</span> ≈ “they ate up the cattle”; <span class="greek">ἀπὸ … ἕλε</span> “took away.”</p>
      <p><strong>How to read it:</strong></p>
      <ol>
        <li>Spot a “preposition” floating with no clear object of its own.</li>
        <li>Look ahead (or back) for a verb that wants that preverb.</li>
        <li>Gloss as one compound: meaning often intensive or directional.</li>
      </ol>
      <p>True prepositional phrases still exist! Distinguish:</p>
      <ul>
        <li><strong>Tmesis:</strong> preverb + verb sense; object is of the whole verb</li>
        <li><strong>Preposition:</strong> governs a noun in a clear case phrase</li>
      </ul>
      <p class="tip">If translating word-by-word fails, reassemble the compound. Homer loves this; the NT almost never does it this way.</p>
    `,
    quizzes: [
      [
        {
          q: "Tmesis means…",
          options: [
            "Deleting the verb",
            "Separation of preverb from verb",
            "Always a genitive absolute",
            "A type of aorist passive"
          ],
          answer: 1,
          explain: "The preverb is “cut” away from the verb."
        },
        {
          q: "In sense, <span class=\"greek\">κατὰ … ἤσθιον</span> with “cattle” as object is like…",
          options: ["they sang about cattle", "they ate the cattle up", "they sat under cattle", "they sailed from cattle"],
          answer: 1,
          explain: "κατα- + ἐσθίω intensive/completive."
        },
        {
          q: "First diagnostic question when you see a lone ἐν / κατά / ἀπό…",
          options: [
            "Ignore it always",
            "Ask: preposition with noun, or preverb looking for its verb?",
            "Assume it is a relative pronoun",
            "Treat it as a conjunction only"
          ],
          answer: 1,
          explain: "Disambiguate PP vs tmesis."
        }
      ],
      [
        {
          q: "Is tmesis common in NT narrative?",
          options: ["Yes, every verse", "No — it is a Homeric hallmark for you"],
          answer: 1,
          explain: "NT readers must learn to reassemble compounds."
        },
        {
          q: "Reassembling <span class=\"greek\">ἐν δ’ ἔ thrε…</span> type phrases means…",
          options: ["Translating δέ twice", "Reading as a compound verb + object", "Skipping the verb", "Making it passive always"],
          answer: 1,
          explain: "Preverb + verb = one idea."
        },
        {
          q: "Which is more likely tmesis?",
          options: [
            "ἐν τῇ οἰκίᾳ (clear place PP)",
            "κατὰ μῆλα … κτεῖνον with no simple “down the sheep” place sense",
            "εἰς τὴν πόλιν",
            "σὺν αὐτῷ"
          ],
          answer: 1,
          explain: "Floating preverb with verbal object."
        }
      ],
      [
        {
          q: "Tmesis primarily affects…",
          options: ["Word order / compound sense", "The alphabet", "Hebrew loanwords", "Accent of the article only"],
          answer: 0,
          explain: "It is a syntactic/morphological reading issue."
        },
        {
          q: "True or false: every preposition in Homer is tmesis.",
          options: ["True", "False"],
          answer: 1,
          explain: "Ordinary prepositional phrases are still everywhere."
        },
        {
          q: "Best student strategy?",
          options: [
            "Memorize scansion first",
            "Train the eye to reunite preverb + verb when the PP reading fails",
            "Never read particles",
            "Skip all compound verbs"
          ],
          answer: 1,
          explain: "Practical reading skill."
        }
      ]
    ]
  },
  {
    id: "syntax-patterns",
    title: "Syntax Patterns of Epic Narrative",
    short: "μέν…δέ; speech frames; purpose ὄφρα/ὡς κε; genitives",
    body: `
      <p>Beyond forms, Homer’s <strong>clause habits</strong> are learnable patterns:</p>
      <p><strong>1. Speech frames</strong></p>
      <ul>
        <li>Open: <span class="greek">τὸν δ’ ἠμείβετ’ ἔπειτα…</span> / <span class="greek">καί μιν φωνήσας ἔπεα πτερόεντα προσηύδα</span></li>
        <li>Close: <span class="greek">ὣς ἔφατ’</span> / <span class="greek">ὣς εἰπών</span> then action</li>
      </ul>
      <p><strong>2. Purpose / prospective</strong></p>
      <ul>
        <li><span class="greek">ὄφρα</span> + subj./opt. “so that / until”</li>
        <li><span class="greek">ὡς / ὥς κε</span> + subj. “so that”</li>
        <li><span class="greek">ἵνα</span> appears but is less dominant than in NT</li>
      </ul>
      <p><strong>3. Genitive absolute</strong> works as in NT (you know it from advanced NT). Epic also loves genitives of separation, source, and quality.</p>
      <p><strong>4. Accusative of respect</strong> and free adverbial accusatives: <span class="greek">πόδας ὠκύς</span> “swift with respect to feet.”</p>
      <p><strong>5. Parataxis:</strong> many short clauses joined by δέ rather than heavy subordination. Follow the particles like stepping stones.</p>
      <div class="example-box">
        <div class="greek-line">ὄφρα οἱ εἴπῃ νημερτέα βουλήν, νόστον Ὀδυσσῆος…</div>
        <div class="eng-line">so that he may tell her the unerring plan — the return of Odysseus…</div>
      </div>
    `,
    quizzes: [
      [
        {
          q: "<span class=\"greek\">ὣς ἔφατ’</span> usually…",
          options: ["Opens a speech", "Closes a speech (“so he/she spoke”)", "Means “so that he may speak”", "Is a genitive absolute"],
          answer: 1,
          explain: "Standard closing formula."
        },
        {
          q: "<span class=\"greek\">ὄφρα</span> commonly introduces…",
          options: ["A purpose or “until” clause", "A genitive of price", "Only names of cities", "Negation of the article"],
          answer: 0,
          explain: "Purpose / temporal limit."
        },
        {
          q: "ἔπεα πτερόεντα are…",
          options: ["“winged words” (speech formula)", "“heavy shields”", "“swift ships” only", "A type of participle ending"],
          answer: 0,
          explain: "Formula for spoken lines."
        }
      ],
      [
        {
          q: "Compared with NT Greek, Homer often prefers…",
          options: ["Only ἵνα clauses", "Parataxis with δέ and clear speech frames", "No finite verbs", "Hebrew infinitive absolute only"],
          answer: 1,
          explain: "Narrative style is more additive."
        },
        {
          q: "Accusative of respect in <span class=\"greek\">πόδας ὠκύς</span> means…",
          options: ["He ate feet", "Swift as to his feet", "Toward the feet (motion)", "Genitive dual"],
          answer: 1,
          explain: "Classic epic epithet syntax."
        },
        {
          q: "Purpose with <span class=\"greek\">ὥς κε + subjunctive</span> is closest to NT…",
          options: ["ἵνα / ὅπως + subj.", "Articular infinitive only", "μέν…δέ only", "Genitive absolute only"],
          answer: 0,
          explain: "Modal purpose clause."
        }
      ],
      [
        {
          q: "When two characters speak, expect…",
          options: [
            "No verbs of speaking",
            "Alternating frames: answered / addressed / so spoke",
            "Only asyndeton without names",
            "Latin speech tags"
          ],
          answer: 1,
          explain: "Formulaic speech architecture."
        },
        {
          q: "True or false: every purpose clause in Homer must use ἵνα.",
          options: ["True", "False"],
          answer: 1,
          explain: "ὄφρα and ὡς κε are very common."
        },
        {
          q: "Best way to track who acts after a speech?",
          options: [
            "Ignore ὣς ἔφατο",
            "Read the closing formula, then the next finite verb’s subject",
            "Always assume Zeus",
            "Skip three lines"
          ],
          answer: 1,
          explain: "Formula → next action is a reliable pattern."
        }
      ]
    ]
  },
  {
    id: "poetic-devices",
    title: "Poetic Devices (No Scansion)",
    short: "Epithets, formulae, enjambment, litotes, ring composition",
    body: `
      <p>We skip meter drill. You still need these <strong>sense devices</strong>:</p>
      <p><strong>Formulae & epithets.</strong> Stock phrases fill the hexameter and cue meaning: <span class="greek">πολύτροπος</span>, <span class="greek">γλαυκῶπις Ἀθήνη</span>, <span class="greek">νεφεληγερέτα Ζεύς</span>, <span class="greek">ἔπεα πτερόεντα</span>. Epithets are not random fluff — they tag identity and tone (cunning, sea-craft, divine authority).</p>
      <p><strong>Enjambment.</strong> A thought runs past the line end. Do not stop sense at the line break; read to the clause end.</p>
      <p><strong>Litotes & understatement.</strong> <span class="greek">οὐδέ τι</span> “not at all,” double negatives for emphasis.</p>
      <p><strong>Simile seeds.</strong> Even short comparisons (<span class="greek">ὡς…</span>) orient emotion and scene — especially sea, wind, animals.</p>
      <p><strong>Ring / scene echo.</strong> Arrival → hospitality → speech → sleep recurs (type-scenes). Once you know the “guest” script, half the Odyssey is easier.</p>
      <p><strong>Apposition & expansion.</strong> A name is followed by expanding phrases: who he is, where from, what he suffered. Keep the main verb and reattach modifiers.</p>
      <div class="example-box">
        <div class="greek-line">ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον, ὃς μάλα πολλὰ / πλάγχθη…</div>
        <div class="eng-line">Tell me the man, Muse — the much-turned one — who was driven far…</div>
      </div>
      <p class="tip">When a line feels “extra,” ask: epithet, relative expansion, or formulaic speech tag? Rarely is it nonsense.</p>
    `,
    quizzes: [
      [
        {
          q: "An epithet like <span class=\"greek\">γλαυκῶπις</span> primarily…",
          options: ["Changes the aorist stem", "Tags Athena with a traditional description", "Marks the dual", "Negates the verb"],
          answer: 1,
          explain: "Traditional epithet of Athena."
        },
        {
          q: "Enjambment means…",
          options: [
            "You must end the sentence at the line end",
            "Sense continues across the line break",
            "Only particles may cross lines",
            "A type of augment"
          ],
          answer: 1,
          explain: "Read by clause, not by line alone."
        },
        {
          q: "Hospitality sequences (welcome, wash, meal, questions) are…",
          options: ["Random each time", "Type-scenes you can predict", "Only in the Iliad", "NT liturgy only"],
          answer: 1,
          explain: "Recognizing type-scenes speeds reading."
        }
      ],
      [
        {
          q: "<span class=\"greek\">πολύτροπος</span> in the proem characterizes Odysseus as…",
          options: ["Many-turned / adaptable / resourceful", "Only a farmer", "Mute", "A river"],
          answer: 0,
          explain: "Core epithet of the hero."
        },
        {
          q: "Why keep epithets in translation study even if English feels redundant?",
          options: [
            "They only mark meter, never sense",
            "They carry traditional meaning and tone",
            "They replace verbs",
            "They are always ironic"
          ],
          answer: 1,
          explain: "Sense + tradition, not pure filler."
        },
        {
          q: "Appositional expansion after a name should be read by…",
          options: [
            "Ignoring relative clauses",
            "Holding the main verb and attaching descriptions",
            "Reading only the last word",
            "Treating all nouns as subjects of new verbs"
          ],
          answer: 1,
          explain: "Classic epic information packing."
        }
      ],
      [
        {
          q: "Litotes in epic often looks like…",
          options: ["οὐ + soft word for strong denial/emphasis", "Only future passives", "Dual endings", "Missing digamma written out"],
          answer: 0,
          explain: "Understatement via negation."
        },
        {
          q: "Formulae help the reader because they…",
          options: [
            "Are never repeated",
            "Cue speech, arrival, and divine action quickly",
            "Erase morphology",
            "Only appear in prose"
          ],
          answer: 1,
          explain: "Recognition reduces parsing load."
        },
        {
          q: "We are skipping scansion. Still study poetic devices?",
          options: ["No", "Yes — for sense and structure while reading"],
          answer: 1,
          explain: "Devices without meter drill."
        }
      ]
    ]
  },
  {
    id: "vocab-bridge",
    title: "Vocabulary Bridge: NT → Odyssey",
    short: "What transfers; what is new; false friends",
    body: `
      <p><strong>Transfers cleanly</strong> (you already own these): <span class="greek">καί, δέ, ἀλλά, γάρ, οὐ/μή, εἰ, ὡς, ἐν, εἰς, ἐκ, ἐπί, πρός, ἀπό, διά, μέν…δέ, αὐτός, τις, πᾶς, πολύς, μέγας, καλός, ἀγαθός, ἄνθρωπος, ἀνήρ, γυνή, θεός, υἱός, πατήρ, μήτηρ, οἶκος, ἡμέρα, νύξ, λόγος</span> (less central than μῦθος in Homer), many verbs like <span class="greek">λέγω, ἔχω, ἔρχομαι, δίδωμι, ποιέω, ὁράω, οἶδα, εἰμί</span>.</p>
      <p><strong>High-frequency Odyssey words rare in NT</strong> — prioritize these in the vocab tool: <span class="greek">μῦθος, νόστος, ἑταῖρος, μνηστήρ, μέγαρον, νηῦς, πόντος, ἅλς, θάλαττα/θάλασσα, γαῖα, δῶμα, φρήν, θυμός, κλέος, δόλος, ξεῖνος, ἱκνέομαι, βαίνω, ὄρνυμι, πάσχω ἄλγεα, ἐρετμόν</span>, etc.</p>
      <p><strong>False-friend / shift notes:</strong></p>
      <ul>
        <li><span class="greek">μῦθος</span> — speech, plan, tale (not “myth” first)</li>
        <li><span class="greek">ξεῖνος</span> — guest-friend / stranger (hospitality axis)</li>
        <li><span class="greek">ἀρετή</span> — excellence / prowess (not only moral “virtue”)</li>
        <li><span class="greek">τιμή</span> — honor/status (and sometimes price)</li>
        <li><span class="greek">νόος / νόος</span> — mind, intent, plan</li>
      </ul>
      <p class="tip">The vocab mastery module deliberately skips καί and λόγος-level NT staples and drills the Odyssey-critical remainder across five days.</p>
    `,
    quizzes: [
      [
        {
          q: "In Homer, <span class=\"greek\">μῦθος</span> most often means…",
          options: ["A false story only", "Speech / plan / authoritative talk", "A small insect", "The NT “word” as λόγος always"],
          answer: 1,
          explain: "Primary epic sense is speech/plan."
        },
        {
          q: "Which set is most “new drill” for an NT reader?",
          options: [
            "καί, δέ, γάρ",
            "νόστος, μνηστήρ, μέγαρον, ἑταῖρος",
            "θεός, υἱός only",
            "εἰμί present forms only"
          ],
          answer: 1,
          explain: "Odyssey-core, NT-rare cluster."
        },
        {
          q: "<span class=\"greek\">ξεῖνος</span> sits at the heart of…",
          options: ["Naval architecture only", "Guest-friendship / stranger hospitality", "Agricultural taxation", "Meter names"],
          answer: 1,
          explain: "Central cultural keyword."
        }
      ],
      [
        {
          q: "Why might λόγος be deprioritized in our core list?",
          options: [
            "It never occurs in Greek",
            "NT readers already know it well; μῦθος needs more epic drill",
            "It is not Greek",
            "It only appears in the Iliad"
          ],
          answer: 1,
          explain: "List design: high Odyssey value + low NT overlap."
        },
        {
          q: "<span class=\"greek\">νόστος</span> means…",
          options: ["disease", "homecoming / return", "ship’s mast", "bronze"],
          answer: 1,
          explain: "The Odyssey’s thematic noun."
        },
        {
          q: "<span class=\"greek\">ἀρετή</span> in epic is closer to…",
          options: ["Only humility", "Excellence / prowess / effectiveness", "A particle meaning “but”", "A city in Sicily"],
          answer: 1,
          explain: "Not limited to later moral “virtue.”"
        }
      ],
      [
        {
          q: "μνηστῆρες are…",
          options: ["sailors only", "the suitors", "oars", "dawn goddesses"],
          answer: 1,
          explain: "Key Odyssey social problem on Ithaca."
        },
        {
          q: "Which transfers from NT with least drama?",
          options: ["The particle system κε vs ἄν", "Basic καί / δέ / οὐ and core verbs like ἔχω, δίδωμι", "Tmesis everywhere", "Dual of all nouns"],
          answer: 1,
          explain: "Many function words and verbs carry over."
        },
        {
          q: "Best use of the vocab tool?",
          options: [
            "Only on day 5",
            "Five-day mastery path + thematic scenes in parallel",
            "Replace all grammar study",
            "Memorize names of every Phaeacian"
          ],
          answer: 1,
          explain: "As designed in the app."
        }
      ]
    ]
  },
  {
    id: "odyssey-world",
    title: "Odyssey World: Themes in the Grammar",
    short: "νόστος, δόλος, ξενία, μνηστῆρες — words that structure the plot",
    body: `
      <p>Grammar is for reading a story. Keep these thematic poles in view:</p>
      <ul>
        <li><strong>νόστος</strong> — homecoming (and its failure: companions lose <span class="greek">νόστιμον ἦμαρ</span>)</li>
        <li><strong>δόλος / μῆτις</strong> — cunning, craft, disguise (Odysseus’ way of fighting)</li>
        <li><strong>ξενία</strong> — guest-friendship: how strangers are treated (Phaeacians vs. Cyclops vs. suitors)</li>
        <li><strong>μνηστῆρες</strong> — suitors devouring the house; social and moral crisis on Ithaca</li>
        <li><strong>θεοί</strong> — Athena helping, Poseidon hindering; divine assemblies frame human action</li>
      </ul>
      <p>Grammatically, expect endless speech (persuasion), travel verbs (<span class="greek">βαίνω, ἱκνέομαι, πλέω, νέομαι</span>), house vocabulary (<span class="greek">δῶμα, μέγαρον, θάλαμος</span>), and sea vocabulary.</p>
      <p class="tip">When a form is hard, ask: is this speech, voyage, hospitality, or recognition? Genre of scene predicts vocabulary.</p>
    `,
    quizzes: [
      [
        {
          q: "The poem’s central movement is toward…",
          options: ["Founding Rome", "Odysseus’ νόστος to Ithaca", "The fall of Thebes", "Athenian democracy"],
          answer: 1,
          explain: "Homecoming structure."
        },
        {
          q: "Odysseus’ characteristic excellence is often…",
          options: ["Only raw size", "μῆτις / δόλος (cunning)", "Silence only", "Farming manuals"],
          answer: 1,
          explain: "Cunning over pure force."
        },
        {
          q: "ξενία is tested when…",
          options: [
            "A stranger arrives and is treated well or badly",
            "Ships are counted only",
            "Meter is scanned",
            "Duals are optional"
          ],
          answer: 0,
          explain: "Hospitality ethics."
        }
      ],
      [
        {
          q: "The suitors primarily threaten…",
          options: ["Troy’s walls", "Odysseus’ household and son’s inheritance", "Poseidon’s trident inventory", "The alphabet"],
          answer: 1,
          explain: "Ithacan crisis."
        },
        {
          q: "Which god most often aids Odysseus in the early poem?",
          options: ["Poseidon", "Athena", "Ares only", "Hades only"],
          answer: 1,
          explain: "Athena as helper; Poseidon as antagonist."
        },
        {
          q: "νόστιμον ἦμαρ is…",
          options: ["the day of return", "a type of ship", "a particle", "a dual ending"],
          answer: 0,
          explain: "“The day of homecoming.”"
        }
      ],
      [
        {
          q: "Scene type “arrival of stranger” predicts vocab of…",
          options: ["Only battle spears", "doorways, seating, washing, food, questions of identity", "Only agricultural taxes", "Only catalogue of ships"],
          answer: 1,
          explain: "Hospitality type-scene."
        },
        {
          q: "Why mention themes in a grammar course?",
          options: [
            "To replace morphology",
            "Because predicted content makes parsing faster",
            "Because scansion requires it",
            "Because NT Greek lacks verbs"
          ],
          answer: 1,
          explain: "Top-down expectations help bottom-up parsing."
        },
        {
          q: "δόλος is closest to…",
          options: ["open gift only", "trick / craft / stratagem", "harbor", "dawn"],
          answer: 1,
          explain: "Cunning stratagem."
        }
      ]
    ]
  },
  {
    id: "iterative-sk",
    title: "Peculiar Constructions I: Iterative -σκ- and the Gnomic Aorist",
    short: "“used-to” past forms in -σκε/-σκον; aorist for timeless truths",
    body: `
      <p>Two verb habits look strange to NT readers because Koine has nothing quite like them.</p>
      <p><strong>1. Iterative (frequentative) -σκ-.</strong> Homer builds a special past of <em>repeated or customary</em> action by adding <span class="greek">-σκ-</span> to the present or aorist stem, with secondary endings and — typically — <strong>no augment</strong>. Translate “used to / would / kept —ing.”</p>
      <ul>
        <li><span class="greek">ἔσκε</span> “he used to be” (from <span class="greek">εἰμί</span>)</li>
        <li><span class="greek">φάσκε</span> “kept saying,” <span class="greek">ἔχεσκε</span> “would hold”</li>
        <li><span class="greek">φεύγεσκε</span> “used to flee,” <span class="greek">στάσκε</span> “would stand”</li>
      </ul>
      <p><strong>2. Gnomic aorist.</strong> An aorist indicative can state a <em>timeless general truth</em> — in proverbs and, above all, in <strong>similes</strong>. English renders it with the <strong>present</strong>: “as when a lion <span class="greek">ὤρουσεν</span> (springs) on the flock….”</p>
      <div class="example-box">
        <div class="greek-line">ἔνθα πάρος κοιμᾶτο … ἀλλ’ ὅτε δή ῥα … στάσκεν</div>
        <div class="eng-line">there he used to sleep … but whenever … he would stand</div>
      </div>
      <p class="tip"><strong>Cue:</strong> an unaugmented past in <span class="greek">-σκε/-σκον</span> = “used to.” A bare aorist inside a simile = English present.</p>
    `,
    quizzes: [
      [
        {
          q: "<span class=\"greek\">ἔσκε</span> is best translated…",
          options: ["he will be", "he used to be / would be", "let him be", "he has been once"],
          answer: 1,
          explain: "Iterative of εἰμί: habitual/repeated past, “used to be.”"
        },
        {
          q: "The suffix <span class=\"greek\">-σκε / -σκον</span> marks a verb as…",
          options: ["future", "iterative/frequentative past (repeated action)", "passive", "subjunctive"],
          answer: 1,
          explain: "It expresses customary or repeated action in past time."
        },
        {
          q: "Iterative -σκ- forms usually…",
          options: ["take a double augment", "lack the augment", "are always deponent", "are vocatives"],
          answer: 1,
          explain: "They are typically unaugmented."
        }
      ],
      [
        {
          q: "A gnomic aorist is best rendered in English as a…",
          options: ["past perfect", "present-tense general truth", "future", "command"],
          answer: 1,
          explain: "Gnomic aorists state timeless truths; English uses the present."
        },
        {
          q: "Gnomic aorists cluster especially in…",
          options: ["genealogies", "similes and proverbs", "ship catalogues", "vocatives"],
          answer: 1,
          explain: "Similes and maxims are their natural home."
        }
      ],
      [
        {
          q: "<span class=\"greek\">φεύγεσκε</span> most likely means…",
          options: ["he fled once", "he used to flee / would keep fleeing", "he will flee", "flee!"],
          answer: 1,
          explain: "Iterative: repeated/customary fleeing."
        },
        {
          q: "You meet a bare aorist inside an extended simile. First instinct?",
          options: ["Translate as simple past", "Read it as a general present (gnomic)", "Assume a scribal error", "Treat it as pluperfect"],
          answer: 1,
          explain: "Inside similes the aorist is typically gnomic → English present."
        }
      ]
    ]
  },
  {
    id: "mood-syntax-purpose",
    title: "Mood Syntax I: Purpose after Past Time (ἵνα / ὄφρα + Optative)",
    short: "Secondary sequence: past main verb → optative in purpose clauses",
    body: `
      <p>You already know NT purpose with <span class="greek">ἵνα</span> + <strong>subjunctive</strong>. Homer still uses that — but after a <strong>past</strong> main verb he often puts the purpose verb in the <strong>optative</strong> (secondary sequence). Translate the same way: “so that / in order that….”</p>
      <table>
        <tr><th>Main clause time</th><th>Purpose mood (typical)</th><th>English</th></tr>
        <tr><td>Present / future</td><td>subjunctive (or κε + subj.)</td><td>“so that he <em>may</em>…”</td></tr>
        <tr><td>Past (impf./aor./etc.)</td><td><strong>optative</strong> (often)</td><td>“so that he <em>might</em>…”</td></tr>
      </table>
      <p><strong>Markers:</strong> <span class="greek">ἵνα</span>, <span class="greek">ὄφρα</span>, sometimes <span class="greek">ὡς / ὥς κε</span>. Do not panic when you see an optative after Dawn “rose” or Athena “spoke” — check for purpose.</p>
      <div class="example-box">
        <div class="greek-line">Ἠὼς … ὤρνυτο, ἵν’ ἀθανάτοισι φόως φέροι ἠδὲ βροτοῖσιν</div>
        <div class="eng-line">Dawn rose … so that she might bring light to immortals and to mortals</div>
      </div>
      <p><span class="greek">ὄφρα</span> can mean “so that” <em>or</em> “until.” Context decides. With κε + subjunctive after a verb of waiting/remaining, prefer “until.”</p>
      <div class="example-box">
        <div class="greek-line">μεῖναι χρόνον εἰς ὅ κε … ἐποτρύνῃ</div>
        <div class="eng-line">to wait a while until … urges on</div>
      </div>
      <p class="tip"><strong>Sight rule:</strong> past tense in the main clause + ἵνα/ὄφρα + optative → purpose (“might”). Past + εἰς ὅ κε / ὄφρα + subjunctive → often “until.”</p>
      <p class="muted">The old whole-and-part / accusative of respect material is less urgent for Odyssey narrative; come back to it when you read battle scenes.</p>
    `,
    quizzes: [
      [
        {
          q: "After a past main verb, Homeric purpose with ἵνα often takes…",
          options: ["only the indicative", "the optative (secondary sequence)", "the dual only", "no verb"],
          answer: 1,
          explain: "Secondary sequence: past main → purpose optative."
        },
        {
          q: "In <span class=\"greek\">ὤρνυτο, ἵνα … φέροι</span>, φέροι is…",
          options: ["aorist indicative", "optative of purpose (“might bring”)", "imperative", "genitive singular"],
          answer: 1,
          explain: "Purpose optative after past ὤρνυτο."
        },
        {
          q: "<span class=\"greek\">εἰς ὅ κε + subjunctive</span> after “wait” is best first read as…",
          options: ["“because never”", "“until …”", "a vocative", "perfect passive"],
          answer: 1,
          explain: "Prospective “until” with κε + subjunctive."
        }
      ],
      [
        {
          q: "NT readers most often expect ἵνα + …",
          options: ["optative only", "subjunctive", "genitive absolute", "dual"],
          answer: 1,
          explain: "NT purpose is typically ἵνα + subjunctive; Homer adds past-sequence optative."
        },
        {
          q: "ὄφρα can mean…",
          options: ["only “never”", "“so that” and/or “until”", "only a particle meaning “but”", "“ship”"],
          answer: 1,
          explain: "Both purpose and temporal “until,” by context."
        },
        {
          q: "Secondary sequence is about…",
          options: ["meter only", "matching purpose mood to past vs. non-past main verbs", "always using future", "deleting the article"],
          answer: 1,
          explain: "Mood follows the time of the governing verb."
        }
      ],
      [
        {
          q: "Best English for past + ἵνα + optative?",
          options: ["“so that he might …”", "“because he will never …”", "“O gods!”", "leave the verb untranslated"],
          answer: 0,
          explain: "Purpose sense with “might.”"
        },
        {
          q: "Which pair is correctly matched?",
          options: [
            "present main + purpose optative only (always)",
            "past main + purpose optative (common in Homer)",
            "κε never appears with subjunctive",
            "ἵνα never means purpose"
          ],
          answer: 1,
          explain: "Past governing verb commonly takes purpose optative."
        },
        {
          q: "In the harbor scene, waiting <span class=\"greek\">εἰς ὅ κε</span> the wind blows is…",
          options: ["a genitive of price", "a prospective temporal clause (“until”)", "a dual of εἰμί", "tmesis of βαίνω"],
          answer: 1,
          explain: "Until the spirit urges / the winds blow."
        }
      ]
    ]
  },
  {
    id: "mood-syntax-potential",
    title: "Mood Syntax II: Potential Optative, “Would,” and πάρα / ἔνι",
    short: "κε + optative “could/would”; πάρα/ἔνι = there are; πρίν + infinitive",
    body: `
      <p><strong>1. Potential optative with κε/κεν.</strong> You met this under particles. In real narrative — especially Od. 9’s empty island — Homer stacks it for <em>what would / could be</em> if people farmed or built ships:</p>
      <div class="example-box">
        <div class="greek-line">οἵ κε κάμοιεν νῆας · μάλα κ’ … εἶεν · εἰς ὥρας ἀμῷεν</div>
        <div class="eng-line">who could build ships · they would be … · they would reap in season</div>
      </div>
      <p>Translate with English “would / could / might.” This is <em>not</em> purpose; there is no ἵνα. It is a modal “soft future in the past” of possibility.</p>
      <p><strong>2. Sight idiom: <span class="greek">πάρα</span> / <span class="greek">ἔνι</span> = “there is / are.”</strong> Often anastrophe-looking: <span class="greek">οὐ πάρα νῆες</span> “there are no ships at hand” (≈ πάρεισι), <span class="greek">οὐδ’ ἔνι τέκτονες</span> “nor are there shipwrights among them” (≈ ἔνεισι). The “verb to be” is inside the adverb.</p>
      <div class="example-box">
        <div class="greek-line">οὐ γάρ οἱ πάρα νῆες ἐπήρετμοι καὶ ἑταῖροι</div>
        <div class="eng-line">for he has no oared ships at hand, nor comrades</div>
      </div>
      <p><strong>3. <span class="greek">πρίν</span> + infinitive.</strong> “Before doing X.” Common in narrative: <span class="greek">πρὶν νῆας … ἐπικέλσαι</span> “before beaching the ships.” You do not need a finite verb after πρίν here.</p>
      <p class="tip"><strong>Three sight tests for Od. 5–9:</strong> (1) κε + optative without ἵνα → “would/could.” (2) πάρα / ἔνι → “there is/are.” (3) πρίν + infinitive → “before …ing.”</p>
    `,
    quizzes: [
      [
        {
          q: "In <span class=\"greek\">οἵ κε κάμοιεν νῆας</span>, the mood is best taken as…",
          options: ["imperative", "potential optative (“who could build”)", "genitive absolute", "vocative"],
          answer: 1,
          explain: "κε + optative = potential “could/would.”"
        },
        {
          q: "<span class=\"greek\">οὐ πάρα νῆες</span> means roughly…",
          options: ["“ships are not from”", "“there are no ships at hand”", "“do not send ships”", "“ship!” (vocative)"],
          answer: 1,
          explain: "πάρα ≈ πάρεισι, existential “there are.”"
        },
        {
          q: "<span class=\"greek\">πρὶν … ἐπικέλσαι</span> is…",
          options: ["πρίν + infinitive “before beaching”", "a purpose optative", "a dual of κεῖμαι", "an aorist passive indicative"],
          answer: 0,
          explain: "πρίν + infinitive = before doing X."
        }
      ],
      [
        {
          q: "Potential optative with κε is closest to NT…",
          options: ["ἵνα + subjunctive only", "ἄν + optative (“would/could”)", "genitive of comparison", "articular infinitive of purpose only"],
          answer: 1,
          explain: "Same modal force as Attic ἄν + optative."
        },
        {
          q: "<span class=\"greek\">ἔνι</span> in <span class=\"greek\">οὐδ’ ἔνι τέκτονες</span> is best read as…",
          options: ["“in” as a stranded preposition only", "“there are among them” (≈ ἔνεισι)", "a relative pronoun", "a form of εἶμι “I go”"],
          answer: 1,
          explain: "Existential “there are in/among.”"
        },
        {
          q: "A long stretch of κε + optatives describing an empty fertile island usually means…",
          options: ["commands to the crew", "what would be true if men farmed/built there", "past narrative of what did happen", "vocatives of gods"],
          answer: 1,
          explain: "Modal description of potential prosperity."
        }
      ],
      [
        {
          q: "Which is purpose, not potential?",
          options: [
            "ἵνα … φέροι after past ὤρνυτο",
            "οἵ κε κάμοιεν with no ἵνα",
            "μάλα κ’ … εἶεν",
            "φέροι δέ κεν ὥρια"
          ],
          answer: 0,
          explain: "ἵνα marks purpose; the others are potential “would/could.”"
        },
        {
          q: "Best first parse of <span class=\"greek\">οὐ γάρ οἱ πάρα νῆες</span>?",
          options: [
            "οἱ is the article with νῆες only",
            "“for there are no ships at hand for him”",
            "πάρα is always tmesis of πείρω",
            "νῆες is accusative"
          ],
          answer: 1,
          explain: "Dat. οἱ of interest + πάρα existential + nom. νῆες."
        },
        {
          q: "πρίν + infinitive does <em>not</em> require…",
          options: ["a finite verb after πρίν in that construction", "an idea of “before”", "an infinitive", "context of sequence"],
          answer: 0,
          explain: "The infinitive is the complement; no second finite verb is needed there."
        }
      ]
    ]
  },
  {
    id: "epic-te-article",
    title: "Peculiar Constructions II: Epic τε and the Pronominal Article",
    short: "generalizing τε (not “and”); ὁ ἡ τό as demonstrative/pronoun",
    body: `
      <p><strong>Epic (generalizing) τε.</strong> Beyond the ordinary connective “and,” Homer has a distinct <span class="greek">τε</span> that is <em>not</em> translated “and.” It clings to relatives and appears in similes and general statements to mark a <strong>permanent or typical truth</strong>: <span class="greek">ὅς τε</span>, <span class="greek">οἷός τε</span>, <span class="greek">ὥς τε</span> “such as characteristically….” Best left untranslated (or “as is always the case”).</p>
      <p><strong>The article as pronoun.</strong> The forms you learned as the article — <span class="greek">ὁ, ἡ, τό</span> — are in Homer mostly a <strong>demonstrative / 3rd-person pronoun</strong>. The true “the” is still developing.</p>
      <ul>
        <li><span class="greek">ὁ δέ</span> “and he,” <span class="greek">τὸν δέ</span> “and him / that man”</li>
        <li><span class="greek">οἱ δέ / τοὶ δέ</span> “and they,” <span class="greek">τὸ δέ</span> “and this”</li>
      </ul>
      <p>Relative <span class="greek">ὅς, ἥ, ὅ</span> works as in the NT — but by context <span class="greek">ὅς</span> can also be possessive (“his/her own”), and <span class="greek">ὅ τε</span> opens generalizing relative clauses.</p>
      <div class="example-box">
        <div class="greek-line">τὸν δ’ ἠμείβετ’ ἔπειτα … · θεοί, οἵ τε …</div>
        <div class="eng-line">and him then he answered … · the gods, who (characteristically) …</div>
      </div>
      <p class="tip"><strong>Cue:</strong> <span class="greek">τε</span> after a relative or in a simile ≠ “and.” <span class="greek">τὸν δέ</span> at the head of a line usually = “and him,” not “the.”</p>
    `,
    quizzes: [
      [
        {
          q: "Epic <span class=\"greek\">τε</span> in <span class=\"greek\">ὅς τε</span> normally…",
          options: ["means “and”", "marks a general/typical truth and is left untranslated", "negates the clause", "makes a question"],
          answer: 1,
          explain: "The generalizing τε is not the connective “and.”"
        },
        {
          q: "In <span class=\"greek\">τὸν δ’ ἠμείβετο</span>, <span class=\"greek\">τόν</span> is best taken as…",
          options: ["the article “the”", "a demonstrative/pronoun “him / that one”", "a relative pronoun", "a preposition"],
          answer: 1,
          explain: "Homer’s ὁ/ἡ/τό is chiefly demonstrative here: “and him.”"
        },
        {
          q: "<span class=\"greek\">οἷός τε</span> in a simile signals…",
          options: ["a one-time event", "a characteristic / general comparison", "a command", "a future"],
          answer: 1,
          explain: "The τε marks the typical, ever-true quality."
        }
      ],
      [
        {
          q: "In Homer, <span class=\"greek\">ὁ, ἡ, τό</span> most often behaves as…",
          options: ["a strict definite article", "a demonstrative / personal pronoun", "a conjunction", "an interjection"],
          answer: 1,
          explain: "The full article use is still emerging; pronoun sense dominates."
        },
        {
          q: "Best default rendering of <span class=\"greek\">τοὶ δέ / οἱ δέ</span>?",
          options: ["“the ones”", "“and they”", "“if they”", "“the same”"],
          answer: 1,
          explain: "Demonstrative plural: “and they.”"
        }
      ],
      [
        {
          q: "<span class=\"greek\">ὅς</span> in Homer can be a relative or…",
          options: ["a number", "a possessive (“his/her own”)", "an augment", "a vocative particle"],
          answer: 1,
          explain: "By context ὅς may be possessive, like ἑός."
        },
        {
          q: "You see <span class=\"greek\">τε</span> attached to a relative pronoun. First instinct?",
          options: ["Translate “and”", "Recognize generalizing τε; do not translate “and”", "Assume a typo", "Make it a question"],
          answer: 1,
          explain: "Epic τε with relatives marks general truths, not “and.”"
        }
      ]
    ]
  },
  {
    id: "parataxis-anastrophe",
    title: "Peculiar Constructions III: Parataxis, Anastrophe and Hysteron Proteron",
    short: "clauses strung with δέ/καί; prepositions after the noun; reversed order",
    body: `
      <p>Three word-order habits shape the <em>feel</em> of epic syntax.</p>
      <p><strong>1. Parataxis.</strong> Homer prefers to <em>coordinate</em> clauses — stringing them with <span class="greek">δέ, καί, αὐτάρ / ἀτάρ, ἠδέ</span> — where later prose would <em>subordinate</em>. The logical link (“when… then,” “because”) is often left for you to supply.</p>
      <p><strong>2. Anastrophe.</strong> A <em>disyllabic</em> preposition placed <strong>after</strong> its noun throws its accent back onto the first syllable: <span class="greek">ἀπό → ἄπο</span>, <span class="greek">ἐπί → ἔπι</span>, <span class="greek">παρά → πάρα</span>. So <span class="greek">θεῶν ἄπο</span> = “from the gods,” <span class="greek">ᾧ ἔπι</span> = “upon which.” The retracted accent is your signal.</p>
      <p><strong>3. Hysteron proteron</strong> (“later–earlier”): the more urgent or logically <em>later</em> item is named <strong>first</strong>. Translate in natural order. A famous type: “let us <em>die</em> and be <em>killed</em>.”</p>
      <div class="example-box">
        <div class="greek-line">θεῶν ἄπο … αὐτὰρ ὁ … καὶ …</div>
        <div class="eng-line">from the gods … but he … and …</div>
      </div>
      <p class="tip"><strong>Cue:</strong> a preposition with its accent on the first syllable, sitting <em>after</em> a noun, is anastrophe — read it as governing that noun.</p>
    `,
    quizzes: [
      [
        {
          q: "Parataxis means Homer tends to…",
          options: ["subordinate everything with “because/when”", "coordinate clauses (“and … and …”)", "omit all verbs", "use only questions"],
          answer: 1,
          explain: "Coordination with δέ/καί/αὐτάρ rather than subordination."
        },
        {
          q: "In <span class=\"greek\">θεῶν ἄπο</span>, the accent on <span class=\"greek\">ἄπο</span> signals…",
          options: ["a new sentence", "anastrophe: the preposition follows its noun", "a vocative", "a contraction"],
          answer: 1,
          explain: "ἀπό → ἄπο when placed after the noun (anastrophe)."
        },
        {
          q: "A hallmark connective of Homeric parataxis is…",
          options: ["ὅτι", "αὐτάρ / δέ / καί", "ἵνα", "μή"],
          answer: 1,
          explain: "Epic strings clauses with αὐτάρ, δέ, καί."
        }
      ],
      [
        {
          q: "Anastrophe affects which prepositions?",
          options: ["monosyllabic only", "disyllabic ones placed after their noun", "none — it is about verbs", "only ἐν"],
          answer: 1,
          explain: "A disyllabic preposition after its noun retracts its accent."
        },
        {
          q: "Hysteron proteron is…",
          options: ["naming the later/urgent item first, reversing order", "a type of augment", "a dual ending", "a simile marker"],
          answer: 0,
          explain: "“Later–earlier”: the logically later thing comes first."
        }
      ],
      [
        {
          q: "You meet <span class=\"greek\">ἔπι</span> (accent on the first syllable) right after a dative noun. Read it as…",
          options: ["the verb “to be”", "ἐπί governing that noun, in anastrophe (“upon”)", "an enclitic “and”", "a scribal slip"],
          answer: 1,
          explain: "Accent-retracted ἔπι after its noun = ἐπί in anastrophe."
        },
        {
          q: "Why does parataxis matter for translation?",
          options: [
            "It never matters",
            "You often must supply the logical link (when/because) yourself",
            "It removes all particles",
            "It forces future tense"
          ],
          answer: 1,
          explain: "Coordinated clauses leave subordination implicit; you infer it."
        }
      ]
    ]
  },
  {
    id: "reading-ready",
    title: "You Are Ready to Read",
    short: "Checklist before the 20 sentences and 80-line stretch",
    body: `
      <p>Before the guided reading modules, confirm you can do the following (revisit cards as needed):</p>
      <ol>
        <li>Recognize <span class="greek">μιν, ἑός, κε/κεν, αὐτάρ, ῥα, περ</span> without panic.</li>
        <li>Map <span class="greek">-οιο, -οισι, -εσσι, -άων, -δε, -θεν</span> to case/place sense.</li>
        <li>Accept unaugmented aorists (<span class="greek">βῆ, φάτο</span>) and epic infinitives (<span class="greek">ἔμμεναι, ἰδέειν</span>).</li>
        <li>Handle mood syntax: past + ἵνα/ὄφρα + optative (purpose); κε + optative (“would/could”); πάρα/ἔνι “there are.”</li>
        <li>Reassemble tmesis when a preverb floats.</li>
        <li>Use speech frames to track speakers.</li>
        <li>Know ~a few dozen core Odyssey words (start Vocab Days 1–2 if not).</li>
      </ol>
      <p>Next in the program:</p>
      <ul>
        <li><strong>Twenty sentences</strong> — real Odyssey Greek, stepped translation</li>
        <li><strong>Ten passages</strong> — short multi-line stretches with poetic notes</li>
        <li><strong>Od. 9 segment</strong> — Cyclopes land, with helps</li>
      </ul>
      <p class="tip">Nothing is graded. Speed comes from repetition of forms in real lines, not from perfect first-pass translation.</p>
    `,
    quizzes: [
      [
        {
          q: "Which is a good “ready to read” test?",
          options: [
            "I can recite all Iliad catalogues",
            "I recognize κε ≈ ἄν and μιν = him/her",
            "I have memorized every scholion",
            "I only know καί"
          ],
          answer: 1,
          explain: "High-leverage recognitions."
        },
        {
          q: "Unaugmented <span class=\"greek\">φάτο</span> should not make you…",
          options: ["Think “spoke”", "Assume it cannot be aorist", "Look at the speech frame", "Move to the next action"],
          answer: 1,
          explain: "It is a normal aorist middle without augment."
        },
        {
          q: "Recommended order after this card?",
          options: [
            "Skip to 80 lines cold",
            "Map → 20 sentences → 80-line segment (and vocab in parallel)",
            "Only thematic images forever",
            "Switch to Latin"
          ],
          answer: 1,
          explain: "As the app’s endgame is designed."
        }
      ],
      [
        {
          q: "If tmesis still confuses you…",
          options: ["Revisit the tmesis card and reassemble compounds in practice lines", "Give up particles", "Ignore all prepositions forever", "Only read English"],
          answer: 0,
          explain: "Targeted review."
        },
        {
          q: "Core vocab should emphasize…",
          options: ["Only NT overlaps like καί", "Odyssey-common words less drilled in NT", "Only modern Greek", "Only particles"],
          answer: 1,
          explain: "List philosophy of this app."
        },
        {
          q: "Speech frames help you…",
          options: ["Scan meter", "Know who speaks and when speech ends", "Decline ναῦς only", "Find Troy on a map"],
          answer: 1,
          explain: "Discourse tracking."
        }
      ],
      [
        {
          q: "True or false: you must master all 200 vocab words before any reading.",
          options: ["True", "False — read with helps while vocab builds"],
          answer: 1,
          explain: "Parallel tracks are intended."
        },
        {
          q: "The final long reading is drawn from…",
          options: ["Iliad 1 only", "Odyssey 9 (Cyclopes), with grammar/vocab helps", "Random Byzantine verse", "NT Acts"],
          answer: 1,
          explain: "App design: simplest substantial narrative stretch in Od. 9."
        },
        {
          q: "Best mindset?",
          options: [
            "Perfection on first sight",
            "Short loops: form → quiz → real line → again",
            "Avoid Greek script",
            "Only listen to English audiobooks"
          ],
          answer: 1,
          explain: "Programmed instruction style."
        }
      ]
    ]
  }
];
