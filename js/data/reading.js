/* Guided reading: ~20 Odyssey sentences + Od. 9.105–184 (~80 lines) */

const READING_SENTENCES = [
  {
    id: "s1",
    ref: "Od. 1.1",
    greek: "ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον",
    words: [
      { g: "ἄνδρα", gloss: "man (acc.) — Odysseus" },
      { g: "μοι", gloss: "to me (ethical dat.)" },
      { g: "ἔννεπε", gloss: "tell! (imperative of ἐνέπω)" },
      { g: "μοῦσα", gloss: "Muse (voc.)" },
      { g: "πολύτροπον", gloss: "of many turns, resourceful (acc. adj.)" }
    ],
    notes: "Proem opening. Accusative ἄνδρα is object of ἔννεπε. πολύτροπον is the key epithet.",
    translation: "Tell me, Muse, of the man of many turns…"
  },
  {
    id: "s2",
    ref: "Od. 1.1–2",
    greek: "ὃς μάλα πολλὰ πλάγχθη, ἐπεὶ Τροίης ἱερὸν πτολίεθρον ἔπερσεν",
    words: [
      { g: "ὃς", gloss: "who (rel.)" },
      { g: "πλάγχθη", gloss: "was driven / made to wander (aor. pass. πλάζω)" },
      { g: "Τροίης", gloss: "of Troy (gen.)" },
      { g: "πτολίεθρον", gloss: "citadel" },
      { g: "ἔπερσεν", gloss: "sacked (aor. πέρθω)" }
    ],
    notes: "Relative clause expands ἄνδρα. Unaugmented sense is clear from aorist stem; here augment is present on ἔπερσεν.",
    translation: "who was driven far and wide, after he sacked Troy’s sacred citadel."
  },
  {
    id: "s3",
    ref: "Od. 1.3",
    greek: "πολλῶν δ’ ἀνθρώπων ἴδεν ἄστεα καὶ νόον ἔγνω",
    words: [
      { g: "ἴδεν", gloss: "saw (aor. of ὁράω / εἶδον; unaugmented possible type)" },
      { g: "ἄστεα", gloss: "cities (acc. pl. of ἄστυ; uncontracted)" },
      { g: "νόον", gloss: "mind (uncontracted νόος)" },
      { g: "ἔγνω", gloss: "came to know (aor. γιγνώσκω)" }
    ],
    notes: "Parallel aorists ἴδεν … ἔγνω. νόον = Attic νοῦν.",
    translation: "He saw the cities of many men and came to know their mind."
  },
  {
    id: "s4",
    ref: "Od. 1.4–5",
    greek: "πολλὰ δ’ ὅ γ’ ἐν πόντῳ πάθεν ἄλγεα ὃν κατὰ θυμόν, ἀρνύμενος ἥν τε ψυχὴν καὶ νόστον ἑταίρων",
    words: [
      { g: "πόντῳ", gloss: "on the sea (dat.)" },
      { g: "πάθεν", gloss: "suffered (aor. πάσχω)" },
      { g: "ἄλγεα", gloss: "pains (acc. pl.)" },
      { g: "θυμόν", gloss: "heart/spirit" },
      { g: "ἀρνύμενος", gloss: "striving to win (pple ἀρνυμαι)" },
      { g: "νόστον", gloss: "return (acc.)" },
      { g: "ἑταίρων", gloss: "of comrades (gen. pl.)" }
    ],
    notes: "Core Odyssey program: sea-suffering for life + comrades’ νόστος. ὃν = his (possessive).",
    translation: "Many pains he suffered in his heart at sea, striving for his life and his comrades’ return."
  },
  {
    id: "s5",
    ref: "Od. 1.6–7",
    greek: "ἀλλ’ οὐδ’ ὣς ἑτάρους ἐρρύσατο, ἱέμενός περ· αὐτῶν γὰρ σφετέρῃσιν ἀτασθαλίῃσιν ὄλοντο",
    words: [
      { g: "ὣς", gloss: "so, thus" },
      { g: "ἐρρύσατο", gloss: "saved (aor. mid. ἐρύω/ῥύομαι)" },
      { g: "ἱέμενός περ", gloss: "though eager (περ concessive)" },
      { g: "ἀτασθαλίῃσιν", gloss: "by blind follies (dat. pl. epic)" },
      { g: "ὄλοντο", gloss: "they perished (aor. mid. ὄλλυμι)" }
    ],
    notes: "περ with participle = although. Dat. pl. -ῃσιν is epic.",
    translation: "Yet even so he did not save his comrades, though he wanted to; for they perished by their own blind folly."
  },
  {
    id: "s6",
    ref: "Od. 1.11–12",
    greek: "ἔνθ’ ἄλλοι μὲν πάντες, ὅσοι φύγον αἰπὺν ὄλεθρον, οἴκοι ἔσαν",
    words: [
      { g: "ἔνθ(α)", gloss: "then / there" },
      { g: "φύγον", gloss: "escaped (aor. φεύγω)" },
      { g: "ὄλεθρον", gloss: "destruction" },
      { g: "οἴκοι", gloss: "at home (locative adv.)" },
      { g: "ἔσαν", gloss: "were (impf. εἰμί)" }
    ],
    notes: "Contrast setup: others home vs. Odysseus not. ἔσαν = ἦσαν.",
    translation: "Then all the others who escaped sheer destruction were at home."
  },
  {
    id: "s7",
    ref: "Od. 1.13–15",
    greek: "τὸν δ’ οἶον νόστου κεχρημένον ἠδὲ γυναικὸς νύμφη πότνι’ ἔρυκε Καλυψώ",
    words: [
      { g: "τὸν δ(έ)", gloss: "but him (Odysseus)" },
      { g: "οἶον", gloss: "alone" },
      { g: "κεχρημένον", gloss: "longing for (+ gen.)" },
      { g: "ἠδέ", gloss: "and" },
      { g: "ἔρυκε", gloss: "was restraining (impf.)" },
      { g: "πότνια", gloss: "queenly, revered lady" }
    ],
    notes: "Article-as-demonstrative τόν. κεχρημένον + genitive “in need of / yearning for.”",
    translation: "But him alone, longing for return and for his wife, the queenly nymph Calypso was restraining."
  },
  {
    id: "s8",
    ref: "Od. 1.64",
    greek: "τέκνον ἐμόν, ποῖόν σε ἔπος φύγεν ἕρκος ὀδόντων",
    words: [
      { g: "ποῖον … ἔπος", gloss: "what sort of word" },
      { g: "φύγεν", gloss: "escaped (aor. φεύγω)" },
      { g: "ἕρκος ὀδόντων", gloss: "the fence of the teeth (formula)" }
    ],
    notes: "Famous formula of surprise/rebuke. Unaugmented φύγεν.",
    translation: "My child, what sort of word has escaped the barrier of your teeth?"
  },
  {
    id: "s9",
    ref: "Od. 1.96–98",
    greek: "ὑπὸ ποσσὶν ἐδήσατο καλὰ πέδιλα, ἀμβρόσια χρύσεια, τά μιν φέρον ἠμὲν ἐφ’ ὑγρὴν ἠδ’ ἐπ’ ἀπείρονα γαῖαν",
    words: [
      { g: "ποσσίν", gloss: "feet (dat. pl. epic of πούς)" },
      { g: "ἐδήσατο", gloss: "bound (aor. mid. δέω)" },
      { g: "πέδιλα", gloss: "sandals" },
      { g: "μιν", gloss: "her (acc.)" },
      { g: "ἠμὲν … ἠδέ", gloss: "both … and" },
      { g: "ὑγρήν", gloss: "the watery (sea), fem. subst." }
    ],
    notes: "Athena’s sandals. μιν = her. ἠμέν…ἠδέ correlation.",
    translation: "Under her feet she bound fair sandals, immortal, golden, which bore her both over the sea and over the boundless earth."
  },
  {
    id: "s10",
    ref: "Od. 1.102–103",
    greek: "βῆ δὲ κατ’ Οὐλύμποιο καρήνων ἀίξασα, στῆ δ’ Ἰθάκης ἐνὶ δήμῳ",
    words: [
      { g: "βῆ", gloss: "went (aor. βαίνω, unaugmented)" },
      { g: "Οὐλύμποιο", gloss: "of Olympus (gen. -οιο)" },
      { g: "καρήνων", gloss: "peaks (gen. pl.)" },
      { g: "ἀίξασα", gloss: "darting (aor. pple)" },
      { g: "στῆ", gloss: "stood / took her stand (aor. ἵστημι)" },
      { g: "ἐνὶ δήμῳ", gloss: "in the land/district (ἐνί = ἐν)" }
    ],
    notes: "βῆ and στῆ without augment. -οιο genitive.",
    translation: "She went darting down from Olympus’ peaks, and stood in the land of Ithaca."
  },
  {
    id: "s11",
    ref: "Od. 1.119–120",
    greek: "βῆ δ’ ἰθὺς προθύροιο, νεμεσσήθη δ’ ἐνὶ θυμῷ ξεῖνον δηθὰ θύρῃσιν ἐφεστάμεν",
    words: [
      { g: "ἰθύς", gloss: "straight toward (+ gen.)" },
      { g: "προθύροιο", gloss: "front door (gen. -οιο)" },
      { g: "νεμεσσήθη", gloss: "felt shame/indignation (aor. pass.)" },
      { g: "ξεῖνον", gloss: "stranger/guest (acc.)" },
      { g: "δηθά", gloss: "long" },
      { g: "ἐφεστάμεν", gloss: "to stand at (epic inf. ἐφίστημι)" }
    ],
    notes: "Telemachus’ hospitality instinct. Epic infinitive -μεν.",
    translation: "He went straight to the porch, and in his heart thought it shame that a stranger stand long at the doors."
  },
  {
    id: "s12",
    ref: "Od. 1.122–124",
    greek: "καί μιν φωνήσας ἔπεα πτερόεντα προσηύδα· χαῖρε, ξεῖνε, παρ’ ἄμμι φιλήσεαι",
    words: [
      { g: "μιν", gloss: "him/her" },
      { g: "ἔπεα πτερόεντα", gloss: "winged words" },
      { g: "προσηύδα", gloss: "addressed (impf./aor. sense of προσαυδάω)" },
      { g: "ἄμμι", gloss: "us (Aeolic/dat. ἡμῖν)" },
      { g: "φιλήσεαι", gloss: "you will be welcomed (fut. mid. φιλέω)" }
    ],
    notes: "Speech-open formula + guest welcome. ἄμμι = ἡμῖν.",
    translation: "And speaking he addressed her with winged words: “Hail, stranger; among us you shall be welcomed.”"
  },
  {
    id: "s13",
    ref: "Od. 1.158–160",
    greek: "τούτοισιν μὲν ταῦτα μέλει, κίθαρις καὶ ἀοιδή, ῥεῖ’, ἐπεὶ ἀλλότριον βίοτον νήποινον ἔδουσιν",
    words: [
      { g: "μέλει", gloss: "is a care (impers. + dat.)" },
      { g: "ἀοιδή", gloss: "song" },
      { g: "βίοτον", gloss: "livelihood" },
      { g: "νήποινον", gloss: "without paying the price" },
      { g: "ἔδουσιν", gloss: "they eat (ἐσθίω)" }
    ],
    notes: "Suitors’ crime in one line: consuming another’s βίοτος free of charge.",
    translation: "These men care for lyre and song, easily, since they eat another’s livelihood without atonement."
  },
  {
    id: "s14",
    ref: "Od. 1.169–170",
    greek: "ἀλλ’ ἄγε μοι τόδε εἰπὲ καὶ ἀτρεκέως κατάλεξον· τίς πόθεν εἰς ἀνδρῶν;",
    words: [
      { g: "ἀτρεκέως", gloss: "truly, exactly" },
      { g: "κατάλεξον", gloss: "recount! (aor. imper.)" },
      { g: "τίς πόθεν", gloss: "who and from where" },
      { g: "εἰς", gloss: "you are (2sg εἰμί; = εἶ)" },
      { g: "ἀνδρῶν", gloss: "of men (partitive)" }
    ],
    notes: "Identity-question formula of epic hospitality. εἰς = εἶ.",
    translation: "But come, tell me this and recount it truly: who are you among men, and from where?"
  },
  {
    id: "s15",
    ref: "Od. 1.205",
    greek: "φράσσεται ὥς κε νέηται, ἐπεὶ πολυμήχανός ἐστιν",
    words: [
      { g: "φράσσεται", gloss: "he will contrive / take thought (fut. mid.)" },
      { g: "ὥς κε", gloss: "how / so that (κε ≈ ἄν)" },
      { g: "νέηται", gloss: "he may return (subj. νέομαι)" },
      { g: "πολυμήχανος", gloss: "of many devices" },
      { g: "ἐστιν", gloss: "he is" }
    ],
    notes: "κε + subjunctive in prospective/purpose sense. Epithet πολυμήχανος.",
    translation: "He will contrive how he may return, since he is a man of many devices."
  },
  {
    id: "s16",
    ref: "Od. 1.247–248",
    greek: "τόσσοι μητέρ’ ἐμὴν μνῶνται, τρύχουσι δὲ οἶκον",
    words: [
      { g: "τόσσοι", gloss: "so many (correlative)" },
      { g: "μνῶνται", gloss: "woo (μνάομαι)" },
      { g: "τρύχουσι", gloss: "wear out, waste" },
      { g: "οἶκον", gloss: "house/household" }
    ],
    notes: "Ithaca’s crisis in eight words.",
    translation: "So many woo my mother and wear out the house."
  },
  {
    id: "s17",
    ref: "Od. 5.1–2",
    greek: "Ἠὼς δ’ ἐκ λεχέων παρ’ ἀγαυοῦ Τιθωνοῖο ὤρνυθ’, ἵν’ ἀθανάτοισι φόως φέροι ἠδὲ βροτοῖσιν",
    words: [
      { g: "Ἠώς", gloss: "Dawn" },
      { g: "λεχέων", gloss: "from bed (gen. pl.)" },
      { g: "Τιθωνοῖο", gloss: "of Tithonus (gen. -οιο)" },
      { g: "ὤρνυτο", gloss: "rose (impf./aor. mid. ὄρνυμι)" },
      { g: "ἵνα … φέροι", gloss: "so that she might bring (opt. purpose, secondary seq.)" },
      { g: "βροτοῖσιν", gloss: "for mortals (dat. pl. epic)" }
    ],
    notes: "Book 5 dawn formula. Purpose with optative after secondary tense.",
    translation: "Dawn rose from her bed by noble Tithonus, to bring light to immortals and to mortals."
  },
  {
    id: "s18",
    ref: "Od. 5.13–15",
    greek: "ἀλλ’ ὁ μὲν ἐν νήσῳ κεῖται κρατέρ’ ἄλγεα πάσχων νύμφης ἐν μεγάροισι Καλυψοῦς, ἥ μιν ἀνάγκῃ ἴσχει",
    words: [
      { g: "κεῖται", gloss: "lies" },
      { g: "πάσχων", gloss: "suffering (pple)" },
      { g: "μεγάροισι", gloss: "in the halls (dat. pl. epic)" },
      { g: "μιν", gloss: "him" },
      { g: "ἀνάγκῃ", gloss: "by necessity/force (dat.)" },
      { g: "ἴσχει", gloss: "holds back (ἴσχω)" }
    ],
    notes: "Athena’s summary of Odysseus’ plight. μιν again.",
    translation: "But he lies on an island suffering strong pains in the halls of the nymph Calypso, who holds him by force."
  },
  {
    id: "s19",
    ref: "Od. 5.41–42",
    greek: "ὣς γάρ οἱ μοῖρ’ ἐστὶ φίλους τ’ ἰδέειν καὶ ἱκέσθαι οἶκον ἐς ὑψόροφον καὶ ἑὴν ἐς πατρίδα γαῖαν",
    words: [
      { g: "οἱ", gloss: "for him (dat.)" },
      { g: "μοῖρα", gloss: "lot, fate" },
      { g: "ἰδέειν", gloss: "to see (aor. inf. uncontracted)" },
      { g: "ἱκέσθαι", gloss: "to reach (aor. inf. ἱκνέομαι)" },
      { g: "ἑήν", gloss: "his own (poss. ἑός)" },
      { g: "πατρίδα γαῖαν", gloss: "native land" }
    ],
    notes: "Fate-as-homecoming. Infinitives as content of μοῖρα ἐστί.",
    translation: "For so it is his lot to see his dear ones and to reach his high-roofed house and his own native land."
  },
  {
    id: "s20",
    ref: "Od. 9.105–107",
    greek: "Κυκλώπων δ’ ἐς γαῖαν ὑπερφιάλων ἀθεμίστων ἱκόμεθ’, οἵ ῥα θεοῖσι πεποιθότες ἀθανάτοισιν οὔτε φυτεύουσιν χερσὶν φυτὸν οὔτ’ ἀρόωσιν",
    words: [
      { g: "Κυκλώπων", gloss: "of the Cyclopes (gen.)" },
      { g: "ὑπερφιάλων", gloss: "overweening" },
      { g: "ἀθεμίστων", gloss: "lawless" },
      { g: "ἱκόμεθα", gloss: "we arrived" },
      { g: "πεποιθότες", gloss: "trusting (perf. pple πείθω)" },
      { g: "φυτεύουσιν / ἀρόωσιν", gloss: "plant / plow" }
    ],
    notes: "Bridge into the long reading: lawless Cyclopes vs. civilized agriculture and assemblies.",
    translation: "We came to the land of the overweening, lawless Cyclopes, who, trusting the immortal gods, neither plant with their hands nor plow."
  }
];

/* Odyssey 9.105–184 — Cyclopes land & approach to Polyphemus’ cave
   Greek: Allen OCT tradition (public domain via Perseus/Steadman-style teaching use)
   Helps: glosses for non-NT / high-value words
*/
const READING_LONG = {
  id: "od9-cyclopes",
  title: "Odyssey 9.105–184 — Land of the Cyclopes",
  intro: `
    <p>This stretch is among the most readable continuous narrative stretches for learners: clear motion, vivid nouns, and the moral map of <strong>ξενία</strong> (hospitality) about to be violated. Use the helps. Nothing is graded.</p>
    <p class="muted">Greek text follows the standard Allen/OCT lineation used in teaching editions. English is a study gloss, not a literary translation.</p>
  `,
  lines: [
    {
      n: 105,
      greek: "Κυκλώπων δ’ ἐς γαῖαν ὑπερφιάλων ἀθεμίστων",
      glosses: [
        { g: "Κυκλώπων", d: "of the Cyclopes" },
        { g: "ὑπερφιάλων", d: "overweening, arrogant" },
        { g: "ἀθεμίστων", d: "lawless, without θέμις" }
      ],
      notes: "Heading: arrival at a people defined by excess and lawlessness.",
      tr: "And to the land of the Cyclopes, overweening and lawless,"
    },
    {
      n: 106,
      greek: "ἱκόμεθ’, οἵ ῥα θεοῖσι πεποιθότες ἀθανάτοισιν",
      glosses: [
        { g: "ἱκόμεθα", d: "we came/arrived" },
        { g: "ῥα", d: "particle (ἄρα)" },
        { g: "πεποιθότες", d: "trusting (perf. pple)" }
      ],
      notes: "οἵ opens relative characterization.",
      tr: "we came — who, trusting in the immortal gods,"
    },
    {
      n: 107,
      greek: "οὔτε φυτεύουσιν χερσὶν φυτὸν οὔτ’ ἀρόωσιν,",
      glosses: [
        { g: "φυτεύουσιν", d: "plant" },
        { g: "φυτόν", d: "plant, crop" },
        { g: "ἀρόωσιν", d: "plow" }
      ],
      notes: "No agriculture — anti-civilization marker.",
      tr: "neither plant crops with their hands nor plow,"
    },
    {
      n: 108,
      greek: "ἀλλὰ τά γ’ ἄσπαρτα καὶ ἀνήροτα πάντα φύονται,",
      glosses: [
        { g: "ἄσπαρτα", d: "unsown" },
        { g: "ἀνήροτα", d: "unplowed" },
        { g: "φύονται", d: "grow (of themselves)" }
      ],
      notes: "Spontaneous fertility without work.",
      tr: "but these things all grow unsown and unplowed —"
    },
    {
      n: 109,
      greek: "πυροὶ καὶ κριθαὶ ἠδ’ ἄμπελοι, αἵ τε φέρουσιν",
      glosses: [
        { g: "πυροί", d: "wheat" },
        { g: "κριθαί", d: "barley" },
        { g: "ἄμπελοι", d: "vines" }
      ],
      notes: "ἠδέ = and. τε generalizing with relative.",
      tr: "wheat and barley and vines, which bear"
    },
    {
      n: 110,
      greek: "οἶνον ἐριστάφυλον, καί σφιν Διὸς ὄμβρος ἀέξει.",
      glosses: [
        { g: "ἐριστάφυλον", d: "of fine clusters" },
        { g: "σφιν", d: "for them (dat. pl.)" },
        { g: "ὄμβρος", d: "rain" },
        { g: "ἀέξει", d: "makes grow, increases" }
      ],
      notes: "σφιν = σφίσι. Zeus’s rain does the farming.",
      tr: "wine of rich clusters, and the rain of Zeus makes them grow for them."
    },
    {
      n: 111,
      greek: "τοῖσιν δ’ οὔτ’ ἀγοραὶ βουληφόροι οὔτε θέμιστες,",
      glosses: [
        { g: "ἀγοραί", d: "assemblies" },
        { g: "βουληφόροι", d: "counsel-bearing" },
        { g: "θέμιστες", d: "laws / judgments" }
      ],
      notes: "No politics — contrast with Achaean ἀγορή.",
      tr: "For them there are neither counsel-bearing assemblies nor laws,"
    },
    {
      n: 112,
      greek: "ἀλλ’ οἵ γ’ ὑψηλῶν ὀρέων ναίουσι κάρηνα",
      glosses: [
        { g: "ὀρέων", d: "of mountains (gen. pl.)" },
        { g: "ναίουσι", d: "they dwell" },
        { g: "κάρηνα", d: "peaks, heads" }
      ],
      notes: "Isolated mountain living.",
      tr: "but they dwell on the peaks of lofty mountains"
    },
    {
      n: 113,
      greek: "ἐν σπέσσι γλαφυροῖσι, θεμιστεύει δὲ ἕκαστος",
      glosses: [
        { g: "σπέσσι", d: "in caves (dat. pl. σπέος)" },
        { g: "γλαφυροῖσι", d: "hollow" },
        { g: "θεμιστεύει", d: "gives law / rules" },
        { g: "ἕκαστος", d: "each one" }
      ],
      notes: "Each is his own law — no community θέμις.",
      tr: "in hollow caves, and each one gives law"
    },
    {
      n: 114,
      greek: "παίδων ἠδ’ ἀλόχων, οὐδ’ ἀλλήλων ἀλέγουσιν.",
      glosses: [
        { g: "ἀλόχων", d: "of wives" },
        { g: "ἀλέγουσιν", d: "they care for / regard" }
      ],
      notes: "No mutual care between households.",
      tr: "over his children and wives, and they pay no mind to one another."
    },
    {
      n: 115,
      greek: "νῆσος ἔπειτα λάχεια παρεκτετάνυσται ἔξω",
      glosses: [
        { g: "λάχεια", d: "fertile / tilled (?); or “small” in some readings — here: low-lying fertile isle" },
        { g: "παρεκτετάνυσται", d: "stretches out alongside" }
      ],
      notes: "Goat island opposite the Cyclopes’ shore.",
      tr: "Now a fertile island stretches out alongside, outside"
    },
    {
      n: 116,
      greek: "λιμένος Κυκλώπων, οὔτε σχεδὸν οὔτ’ ἀποτηλοῦ,",
      glosses: [
        { g: "λιμένος", d: "of the harbor (gen.)" },
        { g: "σχεδόν", d: "near" },
        { g: "ἀποτηλοῦ", d: "far off" }
      ],
      notes: "Neither very near nor far — reachable.",
      tr: "the Cyclopes’ harbor, neither close nor far,"
    },
    {
      n: 117,
      greek: "ὑλήεσσ’· ἐν δ’ αἶγες ἀπειρέσιαι γεγάασιν",
      glosses: [
        { g: "ὑλήεσσα", d: "wooded" },
        { g: "αἶγες", d: "goats" },
        { g: "ἀπειρέσιαι", d: "countless" },
        { g: "γεγάασιν", d: "are / have been born (pf. γίγνομαι)" }
      ],
      notes: "Wild goats — hunting resource for the crew.",
      tr: "wooded; and on it countless goats have come to be,"
    },
    {
      n: 118,
      greek: "ἄγριαι· οὐ μὲν γὰρ πάτος ἀνθρώπων ἀπερύκει,",
      glosses: [
        { g: "ἄγριαι", d: "wild" },
        { g: "πάτος", d: "tread, traffic, path of men" },
        { g: "ἀπερύκει", d: "keeps away, wards off" }
      ],
      notes: "No human traffic scares them off.",
      tr: "wild ones; for no tread of men keeps them away,"
    },
    {
      n: 119,
      greek: "οὐδέ μιν εἰσοιχνεῦσι κυνηγέται, οἵ τε καθ’ ὕλην",
      glosses: [
        { g: "μιν", d: "it (the island)" },
        { g: "εἰσοιχνεῦσι", d: "go into" },
        { g: "κυνηγέται", d: "hunters" },
        { g: "ὕλην", d: "wood, forest" }
      ],
      notes: "μιν for the island.",
      tr: "nor do hunters go into it, who in the woods"
    },
    {
      n: 120,
      greek: "ἄλγεα πάσχουσιν κορυφὰς ὀρέων ἐφέποντες·",
      glosses: [
        { g: "κορυφάς", d: "peaks (acc.)" },
        { g: "ἐφέποντες", d: "ranging over, pursuing over" }
      ],
      notes: "Hunters elsewhere suffer ranging the peaks — not here.",
      tr: "suffer toils as they range the mountain peaks;"
    },
    {
      n: 121,
      greek: "οὔτ’ ἄρα ποίμνῃσιν καταίσχεται οὔτ’ ἀρότοισιν,",
      glosses: [
        { g: "ποίμνῃσιν", d: "with flocks (dat. pl.)" },
        { g: "καταίσχεται", d: "is occupied / held" },
        { g: "ἀρότοισιν", d: "with plowings / fields" }
      ],
      notes: "Island unused for flocks or plow.",
      tr: "nor is it occupied with flocks or plow-land,"
    },
    {
      n: 122,
      greek: "ἀλλ’ ἥ γ’ ἄσπαρτος καὶ ἀνήροτος ἤματα πάντα",
      glosses: [
        { g: "ἤματα πάντα", d: "all days / forever" }
      ],
      notes: "Echo of 108 — empty potential.",
      tr: "but it lies unsown and unplowed all its days,"
    },
    {
      n: 123,
      greek: "ἀνδρῶν χηρεύει, βόσκει δέ τε μηκάδας αἶγας.",
      glosses: [
        { g: "χηρεύει", d: "is empty / bereft (of men)" },
        { g: "βόσκει", d: "feeds, pastures" },
        { g: "μηκάδας", d: "bleating (epithet of goats)" }
      ],
      notes: "Only goats, no men.",
      tr: "empty of men, and it pastures bleating goats."
    },
    {
      n: 124,
      greek: "οὐ γὰρ Κυκλώπεσσι νέες πάρα μιλτοπάρῃοι,",
      glosses: [
        { g: "νέες", d: "ships (nom. pl. νηῦς)" },
        { g: "πάρα", d: "are at hand (≈ πάρεισι)" },
        { g: "μιλτοπάρῃοι", d: "red-cheeked (prow paint)" }
      ],
      notes: "No ships — cannot reach the island. πάρα = πάρεισι.",
      tr: "For the Cyclopes have no red-prowed ships at hand,"
    },
    {
      n: 125,
      greek: "οὐδ’ ἄνδρες νηῶν ἔνι τέκτονες, οἵ κε κάμοιεν",
      glosses: [
        { g: "ἔνι", d: "there are among them (ἔνι = ἔνεισι)" },
        { g: "τέκτονες", d: "builders, carpenters" },
        { g: "κάμοιεν", d: "could build (opt. + κε)" }
      ],
      notes: "κε + optative = potential.",
      tr: "nor are there shipwrights among them who could build"
    },
    {
      n: 126,
      greek: "νῆας ἐυσσέλμους, αἵ κεν τελέοιεν ἕκαστα",
      glosses: [
        { g: "ἐυσσέλμους", d: "well-benched" },
        { g: "τελέοιεν", d: "could accomplish" },
        { g: "ἕκαστα", d: "each thing / all the tasks" }
      ],
      notes: "Ships as tools of civilization and trade.",
      tr: "well-benched ships that could accomplish all the tasks"
    },
    {
      n: 127,
      greek: "ἄστε’ ἐπ’ ἀνθρώπων ἱκνεύμεναι, οἷά τε πολλὰ",
      glosses: [
        { g: "ἄστεα", d: "cities" },
        { g: "ἱκνεύμεναι", d: "coming to (fem. pple mid.)" },
        { g: "οἷά τε πολλά", d: "such things as often…" }
      ],
      notes: "Cities of men — the normal Greek world.",
      tr: "as they come to the cities of men — such things as often"
    },
    {
      n: 128,
      greek: "ἄνδρες ἐπ’ ἀλλήλους νηυσὶν περόωσιν θάλασσαν·",
      glosses: [
        { g: "περόωσιν", d: "cross (uncontracted περάω)" },
        { g: "θάλασσαν", d: "sea (acc. of extent/space)" }
      ],
      notes: "Uncontracted περόωσιν.",
      tr: "men cross the sea to one another in ships;"
    },
    {
      n: 129,
      greek: "οἵ κέ σφιν καὶ νῆσον ἐυκτιμένην ἐκάμοντο.",
      glosses: [
        { g: "σφιν", d: "for them" },
        { g: "ἐυκτιμένην", d: "well-settled" },
        { g: "ἐκάμοντο", d: "would have built/worked (aor. mid. κάμνω)" }
      ],
      notes: "Contrary potential: they could have developed the island.",
      tr: "and these would have made even this island well settled for them."
    },
    {
      n: 130,
      greek: "οὐ μὲν γάρ τι κακή γε, φέροι δέ κεν ὥρια πάντα·",
      glosses: [
        { g: "κακή", d: "bad, poor (of land)" },
        { g: "ὥρια", d: "seasonal fruits / produce in season" }
      ],
      notes: "The land is good — culture is missing.",
      tr: "For it is not at all a poor land, and it would bear all things in season;"
    },
    {
      n: 131,
      greek: "ἐν μὲν γὰρ λειμῶνες ἁλὸς πολιοῖο παρ’ ὄχθας",
      glosses: [
        { g: "λειμῶνες", d: "meadows" },
        { g: "ἁλός", d: "of the sea" },
        { g: "πολιοῖο", d: "gray (gen. -οιο)" },
        { g: "ὄχθας", d: "banks, shores" }
      ],
      notes: "Gen. -οιο on πολιοῖο.",
      tr: "for there are meadows by the banks of the gray sea,"
    },
    {
      n: 132,
      greek: "ὑδρηλοὶ μαλακοί· μάλα κ’ ἄφθιτοι ἄμπελοι εἶεν.",
      glosses: [
        { g: "ὑδρηλοί", d: "watery, well-watered" },
        { g: "ἄφθιτοι", d: "unfailing, undying" }
      ],
      notes: "κε + opt. εἶεν potential.",
      tr: "well-watered, soft; and vines would be unfailing."
    },
    {
      n: 133,
      greek: "ἐν δ’ ἄροσις λείη· μάλα κεν βαθὺ λήιον αἰεὶ",
      glosses: [
        { g: "ἄροσις", d: "plow-land, tilth" },
        { g: "λείη", d: "smooth, level" },
        { g: "λήιον", d: "standing crop, cornfield" }
      ],
      notes: "Deep crops always — counterfactual prosperity.",
      tr: "And there is level plow-land; a deep crop would always"
    },
    {
      n: 134,
      greek: "εἰς ὥρας ἀμῷεν, ἐπεὶ μάλα πῖαρ ὑπ’ οὖδας.",
      glosses: [
        { g: "εἰς ὥρας", d: "in season" },
        { g: "ἀμῷεν", d: "they would reap (opt.)" },
        { g: "πῖαρ", d: "richness, fatness (of soil)" },
        { g: "οὖδας", d: "ground, soil" }
      ],
      notes: "Rich soil under the surface.",
      tr: "be reaped in season, since there is very rich fatness under the soil."
    },
    {
      n: 135,
      greek: "ἐν δὲ λιμὴν εὔορμος, ἵν’ οὐ χρεὼ πείσματός ἐστιν,",
      glosses: [
        { g: "εὔορμος", d: "with good mooring" },
        { g: "χρεώ", d: "need" },
        { g: "πείσματος", d: "of a cable / mooring rope" }
      ],
      notes: "Natural harbor — no need for ropes.",
      tr: "And there is a harbor with good mooring, where there is no need of a cable,"
    },
    {
      n: 136,
      greek: "οὔτ’ εὐνὰς βαλέειν οὔτε πρυμνήσι’ ἀνάψαι,",
      glosses: [
        { g: "εὐνάς", d: "anchor-stones / mooring weights" },
        { g: "βαλέειν", d: "to throw (inf. uncontracted)" },
        { g: "πρυμνήσια", d: "stern-cables" },
        { g: "ἀνάψαι", d: "to make fast" }
      ],
      notes: "Ship vocabulary: anchors and stern lines.",
      tr: "neither to throw anchor-stones nor to make fast stern-cables,"
    },
    {
      n: 137,
      greek: "ἀλλ’ ἐπικέλσαντας μεῖναι χρόνον εἰς ὅ κε ναυτῶν",
      glosses: [
        { g: "ἐπικέλσαντας", d: "having beached (aor. pple)" },
        { g: "μεῖναι", d: "to remain" },
        { g: "εἰς ὅ κε", d: "until (κε + subj.)" },
        { g: "ναυτῶν", d: "of the sailors" }
      ],
      notes: "Beach the ship and wait on the wind.",
      tr: "but only to beach and wait a while, until the sailors’"
    },
    {
      n: 138,
      greek: "θυμὸς ἐποτρύνῃ καὶ ἐπιπνεύσωσιν ἀῆται.",
      glosses: [
        { g: "ἐποτρύνῃ", d: "urges on (subj.)" },
        { g: "ἐπιπνεύσωσιν", d: "blow upon (subj. aor.)" },
        { g: "ἀῆται", d: "winds, blasts" }
      ],
      notes: "Purpose/temporal subjunctives with κε.",
      tr: "spirit urges them and the winds blow fair."
    },
    {
      n: 139,
      greek: "αὐτὰρ ἐπὶ κρατὸς λιμένος ῥέει ἀγλαὸν ὕδωρ,",
      glosses: [
        { g: "κρατός", d: "head, end (gen. of κράς/κάρα)" },
        { g: "ῥέει", d: "flows (uncontracted)" },
        { g: "ἀγλαόν", d: "bright, splendid" }
      ],
      notes: "Fresh water at the harbor head — gift for sailors.",
      tr: "And at the head of the harbor flows bright water,"
    },
    {
      n: 140,
      greek: "κρήνη ὑπὸ σπείους· περὶ δ’ αἴγειροι πεφύασιν.",
      glosses: [
        { g: "κρήνη", d: "spring" },
        { g: "σπείους", d: "of a cave (gen. σπέος)" },
        { g: "αἴγειροι", d: "black poplars" },
        { g: "πεφύασιν", d: "have grown (pf.)" }
      ],
      notes: "Spring under a cave, poplars around — locus amoenus.",
      tr: "a spring under a cave; and poplars have grown around it."
    },
    {
      n: 141,
      greek: "ἔνθα κατεπλέομεν, καί τις θεὸς ἡγεμόνευεν",
      glosses: [
        { g: "κατεπλέομεν", d: "we sailed in / put in" },
        { g: "ἡγεμόνευεν", d: "was guiding" }
      ],
      notes: "Divine guidance implied for safe landing.",
      tr: "There we sailed in, and some god guided us"
    },
    {
      n: 142,
      greek: "νύκτα δι’ ὀρφναίην, οὐδὲ προυφαίνετ’ ἰδέσθαι·",
      glosses: [
        { g: "ὀρφναίην", d: "dark, murky" },
        { g: "προυφαίνετο", d: "showed forth" },
        { g: "ἰδέσθαι", d: "to be seen / for seeing" }
      ],
      notes: "Night landing — cannot see.",
      tr: "through the dark night, and it did not show clear to be seen;"
    },
    {
      n: 143,
      greek: "ἀὴρ γὰρ περὶ νηυσὶ βαθεῖ’ ἦν, οὐδὲ σελήνη",
      glosses: [
        { g: "ἀήρ", d: "mist, air" },
        { g: "βαθεῖα", d: "deep, thick" },
        { g: "σελήνη", d: "moon" }
      ],
      notes: "Thick mist; no moon.",
      tr: "for a deep mist was about the ships, and the moon"
    },
    {
      n: 144,
      greek: "οὐρανόθεν προύφαινε, κατείχετο δὲ νεφέεσσιν.",
      glosses: [
        { g: "οὐρανόθεν", d: "from heaven (-θεν)" },
        { g: "κατείχετο", d: "was held / covered" },
        { g: "νεφέεσσιν", d: "by clouds (dat. pl. epic)" }
      ],
      notes: "-θεν ablatival; -εσσιν dat. pl.",
      tr: "did not shine from heaven, but was held by clouds."
    },
    {
      n: 145,
      greek: "ἔνθ’ οὔ τις τὴν νῆσον ἐσέδρακεν ὀφθαλμοῖσιν·",
      glosses: [
        { g: "ἐσέδρακεν", d: "caught sight of (aor. δέρκομαι compound)" },
        { g: "ὀφθαλμοῖσιν", d: "with eyes (dat. pl.)" }
      ],
      notes: "No one saw the island with his eyes.",
      tr: "Then no one caught sight of the island with his eyes;"
    },
    {
      n: 146,
      greek: "οὐδ’ οὖν κύματα μακρὰ κυλινδόμενα προτὶ χέρσον",
      glosses: [
        { g: "κυλινδόμενα", d: "rolling" },
        { g: "προτί", d: "toward (πρός)" },
        { g: "χέρσον", d: "dry land" }
      ],
      notes: "Nor long waves rolling toward land — calm harbor.",
      tr: "nor did we see long waves rolling toward the land"
    },
    {
      n: 147,
      greek: "εἰσίδομεν, πρὶν νῆας ἐυσσέλμους ἐπικέλσαι.",
      glosses: [
        { g: "εἰσίδομεν", d: "we saw" },
        { g: "πρίν", d: "before (+ inf.)" },
        { g: "ἐπικέλσαι", d: "to beach" }
      ],
      notes: "πρίν + infinitive.",
      tr: "before we beached the well-benched ships."
    },
    {
      n: 148,
      greek: "κελσάσῃσι δὲ νηυσὶ καθείλομεν ἱστία πάντα,",
      glosses: [
        { g: "κελσάσῃσι", d: "having been beached (dat. pl. pple)" },
        { g: "καθείλομεν", d: "we took down" },
        { g: "ἱστία", d: "sails" }
      ],
      notes: "Ship routine after landing.",
      tr: "And when the ships were beached we took down all the sails,"
    },
    {
      n: 149,
      greek: "ἐκ δὲ καὶ αὐτοὶ βῆμεν ἐπὶ ῥηγμῖνι θαλάσσης·",
      glosses: [
        { g: "βῆμεν", d: "we stepped / went (aor. βαίνω)" },
        { g: "ῥηγμῖνι", d: "on the surf-line, breakers" }
      ],
      notes: "ἐκ … βῆμεν can be felt as tmesis-like ἐκβαίνω.",
      tr: "and we ourselves stepped out onto the shore of the sea;"
    },
    {
      n: 150,
      greek: "ἔνθα δ’ ἀποβρίξαντες ἐμείναμεν Ἠῶ δῖαν.",
      glosses: [
        { g: "ἀποβρίξαντες", d: "having fallen asleep (aor. pple)" },
        { g: "Ἠῶ δῖαν", d: "bright Dawn (acc.)" }
      ],
      notes: "Wait for Dawn — epic day structure.",
      tr: "there, falling asleep, we waited for bright Dawn."
    },
    {
      n: 151,
      greek: "ἦμος δ’ ἠριγένεια φάνη ῥοδοδάκτυλος Ἠώς,",
      glosses: [
        { g: "ἦμος", d: "when" },
        { g: "ἠριγένεια", d: "early-born" },
        { g: "ῥοδοδάκτυλος", d: "rosy-fingered" }
      ],
      notes: "Classic dawn formula — learn as a block.",
      tr: "But when early-born rosy-fingered Dawn appeared,"
    },
    {
      n: 152,
      greek: "νῆσον θαυμάζοντες ἐδινεόμεσθα κατ’ αὐτήν.",
      glosses: [
        { g: "θαυμάζοντες", d: "marveling at" },
        { g: "ἐδινεόμεσθα", d: "we went about, ranged (impf.)" }
      ],
      notes: "Exploration of the island.",
      tr: "we ranged over the island, marveling at it."
    },
    {
      n: 153,
      greek: "ὦρσαν δὲ νύμφαι, κοῦραι Διὸς αἰγιόχοιο,",
      glosses: [
        { g: "ὦρσαν", d: "started up, roused (aor. ὄρνυμι)" },
        { g: "νύμφαι", d: "nymphs" },
        { g: "αἰγιόχοιο", d: "aegis-bearing (gen. -οιο)" }
      ],
      notes: "Divine aid: nymphs start the game for the hunters.",
      tr: "And the nymphs, daughters of aegis-bearing Zeus, started up"
    },
    {
      n: 154,
      greek: "αἶγας ὀρεσκῴους, ἵνα δειπνήσειαν ἑταῖροι.",
      glosses: [
        { g: "ὀρεσκῴους", d: "mountain-dwelling" },
        { g: "δειπνήσειαν", d: "might dine (opt. purpose)" },
        { g: "ἑταῖροι", d: "comrades" }
      ],
      notes: "Purpose optative after secondary narrative.",
      tr: "the mountain goats, so that our comrades might dine."
    },
    {
      n: 155,
      greek: "αὐτίκα καμπύλα τόξα καὶ αἰγανέας δολιχαύλους",
      glosses: [
        { g: "καμπύλα τόξα", d: "curved bows" },
        { g: "αἰγανέας", d: "hunting spears" },
        { g: "δολιχαύλους", d: "long-socketed" }
      ],
      notes: "Weapons for the hunt taken at once.",
      tr: "At once curved bows and long-socketed hunting-spears"
    },
    {
      n: 156,
      greek: "εἱλόμεθ’ ἐκ νηῶν, διὰ δὲ τρίχα κοσμηθέντες",
      glosses: [
        { g: "εἱλόμεθα", d: "we took (aor. mid. αἱρέω)" },
        { g: "διὰ τρίχα", d: "in three groups" },
        { g: "κοσμηθέντες", d: "having been arranged" }
      ],
      notes: "Crew divides into three hunting parties.",
      tr: "we took from the ships, and arranged in three groups"
    },
    {
      n: 157,
      greek: "βάλλομεν· αἶψα δ’ ἔδωκε θεὸς μενοεικέα θήρην.",
      glosses: [
        { g: "βάλλομεν", d: "we shot / struck" },
        { g: "μενοεικέα", d: "heart-cheering, abundant" },
        { g: "θήρην", d: "hunt, game" }
      ],
      notes: "God grants abundant game.",
      tr: "we shot; and at once the god gave heart-cheering game."
    },
    {
      n: 158,
      greek: "νῆες μέν μοι ἕποντο δυώδεκα, ἐς δὲ ἑκάστην",
      glosses: [
        { g: "ἕποντο", d: "followed" },
        { g: "δυώδεκα", d: "twelve" }
      ],
      notes: "Fleet size: 12 ships.",
      tr: "Twelve ships followed me, and to each"
    },
    {
      n: 159,
      greek: "ἐννέα λάγχανον αἶγες· ἐμοὶ δὲ δέκ’ ἔξελον οἴῳ.",
      glosses: [
        { g: "λάγχανον", d: "fell by lot / were allotted" },
        { g: "ἔξελον", d: "they set aside (aor. ἐξαιρέω)" },
        { g: "οἴῳ", d: "for me alone" }
      ],
      notes: "Nine goats per ship; ten for Odysseus.",
      tr: "nine goats were allotted; but for me alone they chose out ten."
    },
    {
      n: 160,
      greek: "ὣς τότε μὲν πρόπαν ἦμαρ ἐς ἠέλιον καταδύντα",
      glosses: [
        { g: "πρόπαν ἦμαρ", d: "the whole day" },
        { g: "καταδύντα", d: "setting (acc. pple)" }
      ],
      notes: "Full day feast formula.",
      tr: "So then all day long until the sun set"
    },
    {
      n: 161,
      greek: "ἥμεθα δαινύμενοι κρέα τ’ ἄσπετα καὶ μέθυ ἡδύ·",
      glosses: [
        { g: "ἥμεθα", d: "we sat (impf. ἧμαι)" },
        { g: "δαινύμενοι", d: "feasting" },
        { g: "ἄσπετα", d: "countless" },
        { g: "μέθυ", d: "wine" }
      ],
      notes: "κρέα uncontracted pl. of κρέας.",
      tr: "we sat feasting on endless meat and sweet wine;"
    },
    {
      n: 162,
      greek: "οὐ γάρ πω νηῶν ἐξέφθιτο οἶνος ἐρυθρός,",
      glosses: [
        { g: "ἐξέφθιτο", d: "was exhausted, used up" },
        { g: "ἐρυθρός", d: "red" }
      ],
      notes: "Ship stores still have red wine.",
      tr: "for not yet was the red wine exhausted from the ships,"
    },
    {
      n: 163,
      greek: "ἀλλ’ ἐνέην· πολλὸν γὰρ ἐν ἀμφιφορεῦσιν ἕκαστοι",
      glosses: [
        { g: "ἐνέην", d: "there was in them (ἔνι + ἦν)" },
        { g: "ἀμφιφορεῦσιν", d: "in amphorae (dat. pl.)" }
      ],
      notes: "Wine in jars from Ismarus (Cicones) earlier in Book 9.",
      tr: "but there was still some; for much in amphorae each crew"
    },
    {
      n: 164,
      greek: "ἠφύσαμεν Κικόνων ἱερὸν πτολίεθρον ἑλόντες.",
      glosses: [
        { g: "ἠφύσαμεν", d: "we had drawn off" },
        { g: "Κικόνων", d: "of the Cicones" },
        { g: "ἑλόντες", d: "having taken/sacked" }
      ],
      notes: "Flashback to earlier sack — wine’s origin.",
      tr: "had drawn when we took the Cicones’ sacred citadel."
    },
    {
      n: 165,
      greek: "Κυκλώπων δ’ ἐς γαῖαν ἐλεύσσομεν ἐγγὺς ἐόντων,",
      glosses: [
        { g: "ἐλεύσσομεν", d: "we looked / spied" },
        { g: "ἐγγύς", d: "near" }
      ],
      notes: "From the island they can see the Cyclopes’ land.",
      tr: "And we looked toward the land of the Cyclopes, who were near,"
    },
    {
      n: 166,
      greek: "καπνόν τ’ αὐτῶν τε φθογγὴν ὀίων τε καὶ αἰγῶν.",
      glosses: [
        { g: "καπνόν", d: "smoke" },
        { g: "φθογγήν", d: "voice, sound, cry" },
        { g: "ὀίων", d: "of sheep" }
      ],
      notes: "Smoke + animal sounds = inhabited pastoral land.",
      tr: "and saw their smoke and heard the voices of themselves and of sheep and goats."
    },
    {
      n: 167,
      greek: "ἦμος δ’ ἠέλιος κατέδυ καὶ ἐπὶ κνέφας ἦλθε,",
      glosses: [
        { g: "κατέδυ", d: "set" },
        { g: "κνέφας", d: "darkness" }
      ],
      notes: "Nightfall formula.",
      tr: "But when the sun set and darkness came on,"
    },
    {
      n: 168,
      greek: "δὴ τότε κοιμήθημεν ἐπὶ ῥηγμῖνι θαλάσσης.",
      glosses: [
        { g: "κοιμήθημεν", d: "we lay down to sleep" }
      ],
      notes: "Sleep on the shore.",
      tr: "then we lay down to sleep on the shore of the sea."
    },
    {
      n: 169,
      greek: "ἦμος δ’ ἠριγένεια φάνη ῥοδοδάκτυλος Ἠώς,",
      glosses: [
        { g: "ἠριγένεια", d: "early-born" }
      ],
      notes: "Dawn formula repeated — new day of decision.",
      tr: "But when early-born rosy-fingered Dawn appeared,"
    },
    {
      n: 170,
      greek: "καὶ τότ’ ἐγὼν ἀγορὴν θέμενος μετὰ πᾶσιν ἔειπον·",
      glosses: [
        { g: "ἀγορήν θέμενος", d: "having called an assembly" },
        { g: "ἔειπον", d: "I spoke (aor. εἶπον with augment variety)" }
      ],
      notes: "Odysseus as leader calls ἀγορή — Greek civic habit vs. Cyclopes.",
      tr: "then I, calling an assembly, spoke among them all:"
    },
    {
      n: 171,
      greek: "ἄλλοι μὲν νῦν μίμνετ’, ἐμοὶ ἐρίηρες ἑταῖροι·",
      glosses: [
        { g: "μίμνετε", d: "remain! (imper.)" },
        { g: "ἐρίηρες", d: "faithful, trusty" }
      ],
      notes: "Most stay; he will reconnoiter.",
      tr: "“You others stay here now, my trusty comrades;"
    },
    {
      n: 172,
      greek: "αὐτὰρ ἐγὼ σὺν νηί τ’ ἐμῇ καὶ ἐμοῖς ἑτάροισιν",
      glosses: [
        { g: "αὐτάρ", d: "but" },
        { g: "ἑτάροισιν", d: "comrades (dat. pl. epic)" }
      ],
      notes: "αὐτάρ contrast; one ship goes.",
      tr: "but I with my own ship and my own comrades"
    },
    {
      n: 173,
      greek: "ἐλθὼν τῶνδ’ ἀνδρῶν πειρήσομαι, οἵ τινές εἰσίν,",
      glosses: [
        { g: "πειρήσομαι", d: "I will test / try to learn" },
        { g: "οἵ τινες", d: "who (indefinite relative)" }
      ],
      notes: "Classic epic reconnaissance: who are these people?",
      tr: "will go and test these men, who they are —"
    },
    {
      n: 174,
      greek: "ἤ ῥ’ οἵ γ’ ὑβρισταί τε καὶ ἄγριοι οὐδὲ δίκαιοι,",
      glosses: [
        { g: "ὑβρισταί", d: "violent, insolent men" },
        { g: "ἄγριοι", d: "wild, savage" },
        { g: "δίκαιοι", d: "just" }
      ],
      notes: "Moral binary: ὕβρις vs. justice — hospitality test coming.",
      tr: "whether they are insolent and wild and not just,"
    },
    {
      n: 175,
      greek: "ἦε φιλόξεινοι, καί σφιν νόος ἐστὶ θεουδής.",
      glosses: [
        { g: "φιλόξεινοι", d: "guest-loving, hospitable" },
        { g: "νόος", d: "mind" },
        { g: "θεουδής", d: "god-fearing" }
      ],
      notes: "φιλόξεινος — keyword of ξενία. End of speech program.",
      tr: "or guest-loving, and their mind is god-fearing.”"
    },
    {
      n: 176,
      greek: "ὣς εἰπὼν ἀνὰ νηὸς ἔβην, ἐκέλευσα δ’ ἑταίρους",
      glosses: [
        { g: "ὣς εἰπών", d: "so saying (speech close + pple)" },
        { g: "ἀνὰ νηός", d: "up onto the ship" },
        { g: "ἔβην", d: "I went" },
        { g: "ἐκέλευσα", d: "I ordered" }
      ],
      notes: "Speech frame close → action.",
      tr: "So saying I went aboard the ship and ordered the comrades"
    },
    {
      n: 177,
      greek: "αὐτούς τ’ ἀμβαίνειν ἀνά τε πρυμνήσια λῦσαι·",
      glosses: [
        { g: "ἀμβαίνειν", d: "to embark (ἀνα-βαίνω, tmesis-friendly)" },
        { g: "πρυμνήσια λῦσαι", d: "to loose the stern-cables" }
      ],
      notes: "Casting off sequence.",
      tr: "themselves to embark and to loose the stern-cables;"
    },
    {
      n: 178,
      greek: "οἱ δ’ αἶψ’ εἴσβαινον καὶ ἐπὶ κληῖσι καθῖζον.",
      glosses: [
        { g: "εἴσβαινον", d: "went on board" },
        { g: "κληῖσι", d: "at the thwarts / oar-benches" },
        { g: "καθῖζον", d: "sat down" }
      ],
      notes: "Crew at benches.",
      tr: "and they at once went aboard and sat down at the benches."
    },
    {
      n: 179,
      greek: "ἑξῆς δ’ ἑζόμενοι πολιὴν ἅλα τύπτον ἐρετμοῖς.",
      glosses: [
        { g: "ἑξῆς", d: "in order, in a row" },
        { g: "πολιήν ἅλα", d: "the gray salt sea" },
        { g: "τύπτον", d: "they struck" },
        { g: "ἐρετμοῖς", d: "with oars" }
      ],
      notes: "Formula of rowing: strike the gray sea with oars.",
      tr: "And sitting in order they struck the gray sea with their oars."
    },
    {
      n: 180,
      greek: "ἀλλ’ ὅτε δὴ τὸν χῶρον ἀφικόμεθ’ ἐγγὺς ἐόντα,",
      glosses: [
        { g: "χῶρον", d: "place, spot" },
        { g: "ἀφικόμεθα", d: "we arrived" }
      ],
      notes: "Near the Cyclopes’ shore.",
      tr: "But when we had reached the place that was near,"
    },
    {
      n: 181,
      greek: "ἔνθα δ’ ἐπ’ ἐσχατιῇ σπέος εἴδομεν ἄγχι θαλάσσης,",
      glosses: [
        { g: "ἐσχατιῇ", d: "at the edge, border" },
        { g: "σπέος", d: "cave" },
        { g: "ἄγχι", d: "near" }
      ],
      notes: "Polyphemus’ cave sighted.",
      tr: "there at the edge we saw a cave near the sea,"
    },
    {
      n: 182,
      greek: "ὑψηλόν, δάφνῃσι κατηρεφές. ἔνθα δὲ πολλὰ",
      glosses: [
        { g: "δάφνῃσι", d: "with laurels (dat. pl.)" },
        { g: "κατηρεφές", d: "roofed over, covered" }
      ],
      notes: "High cave roofed with laurels.",
      tr: "high, roofed over with laurels. And there many"
    },
    {
      n: 183,
      greek: "μῆλ’, ὄιές τε καὶ αἶγες, ἰαύεσκον· περὶ δ’ αὐλὴ",
      glosses: [
        { g: "μῆλα", d: "flocks (sheep/goats)" },
        { g: "ἰαύεσκον", d: "used to sleep (iterative -σκ-)" },
        { g: "αὐλή", d: "courtyard, fold" }
      ],
      notes: "Iterative -σκ- : habitual lodging of flocks.",
      tr: "flocks, sheep and goats, used to sleep; and around it a courtyard"
    },
    {
      n: 184,
      greek: "ὑψηλὴ δέδμητο κατωρυχέεσσι λίθοισι",
      glosses: [
        { g: "δέδμητο", d: "had been built (plpf. pass. δέμω)" },
        { g: "κατωρυχέεσσι", d: "deep-set, dug-in" },
        { g: "λίθοισι", d: "with stones (dat. pl.)" }
      ],
      notes: "Built fold — end of this segment; Polyphemus soon enters the story.",
      tr: "high had been built with deep-set stones…"
    }
  ]
};

/* 10 short passages (2–4 lines) — bridge between single sentences and Od. 9 stretch */
const READING_PASSAGES = [
  {
    id: "p1",
    ref: "Od. 1.1–4",
    greek: `ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον, ὃς μάλα πολλὰ
πλάγχθη, ἐπεὶ Τροίης ἱερὸν πτολίεθρον ἔπερσεν·
πολλῶν δ’ ἀνθρώπων ἴδεν ἄστεα καὶ νόον ἔγνω,
πολλὰ δ’ ὅ γ’ ἐν πόντῳ πάθεν ἄλγεα ὃν κατὰ θυμόν,`,
    words: [
      { g: "ἄνδρα … πολύτροπον", gloss: "the much-turned man (acc. + epithet)" },
      { g: "ἔννεπε", gloss: "tell! (imper. ἐνέπω)" },
      { g: "πλάγχθη", gloss: "was driven / wandered (aor. pass. πλάζω)" },
      { g: "ἄστεα", gloss: "cities (uncontracted)" },
      { g: "νόον", gloss: "mind (νόος uncontracted)" },
      { g: "πόντῳ", gloss: "on the sea" },
      { g: "ἄλγεα", gloss: "pains, woes" },
      { g: "θυμόν", gloss: "heart / spirit" }
    ],
    notes: "Object-first proem: ἄνδρα is the theme of the whole poem. Relative ὃς expands the epithet. Parallel aorists ἴδεν … ἔγνω … πάθεν stack the hero’s experience.",
    poetic: "Epithet πολύτροπος tags Odysseus’ character at once. Enjambment: sense runs past the line end (πολλὰ / πλάγχθη). Formulaic program of epic: man, Muse, wandering, cities, mind, sea-pains.",
    translation: "Tell me, Muse, of the man of many turns, who was driven far and wide after he sacked Troy’s sacred citadel; he saw the cities of many men and came to know their mind, and many pains he suffered in his heart at sea…"
  },
  {
    id: "p2",
    ref: "Od. 1.5–9",
    greek: `ἀρνύμενος ἥν τε ψυχὴν καὶ νόστον ἑταίρων.
ἀλλ’ οὐδ’ ὣς ἑτάρους ἐρρύσατο, ἱέμενός περ·
αὐτῶν γὰρ σφετέρῃσιν ἀτασθαλίῃσιν ὄλοντο,
νήπιοι, οἳ κατὰ βοῦς Ὑπερίονος Ἠελίοιο
ἤσθιον· αὐτὰρ ὁ τοῖσιν ἀφείλετο νόστιμον ἦμαρ.`,
    words: [
      { g: "ἀρνύμενος", gloss: "striving to win (pple)" },
      { g: "νόστον", gloss: "return (acc.)" },
      { g: "ἑταίρων", gloss: "of comrades" },
      { g: "ἱέμενός περ", gloss: "though eager (περ concessive)" },
      { g: "ἀτασθαλίῃσιν", gloss: "by their own blind follies (dat. pl. epic)" },
      { g: "ὄλοντο", gloss: "they perished" },
      { g: "νήπιοι", gloss: "fools (nom.)" },
      { g: "νόστιμον ἦμαρ", gloss: "the day of homecoming" },
      { g: "αὐτάρ", gloss: "but / and then" }
    ],
    notes: "Purpose of suffering: life + comrades’ νόστος. ἱέμενός περ = although. Epic dat. pl. -ῃσιν. Helios’ cattle preview the Thrinacia disaster (map & Book 9).",
    poetic: "Moral geometry of the proem: companions die by their own ἀτασθαλίαι. Litotes-like intensity in οὐδ’ ὣς … ἐρρύσατο. Epithet-style nήπιοι brands them before the relative explains.",
    translation: "…striving for his own life and his comrades’ return. Yet even so he did not save his comrades, though eager; for through their own blind folly they perished — fools, who ate the cattle of Helios Hyperion; and he took from them the day of their returning."
  },
  {
    id: "p3",
    ref: "Od. 1.11–15",
    greek: `ἔνθ’ ἄλλοι μὲν πάντες, ὅσοι φύγον αἰπὺν ὄλεθρον,
οἴκοι ἔσαν, πόλεμόν τε πεφευγότες ἠδὲ θάλασσαν·
τὸν δ’ οἶον νόστου κεχρημένον ἠδὲ γυναικὸς
νύμφη πότνι’ ἔρυκε Καλυψὼ δῖα θεάων
ἐν σπέσσι γλαφυροῖσι, λιλαιομένη πόσιν εἶναι.`,
    words: [
      { g: "μέν … δέ", gloss: "contrast structure (others … but him)" },
      { g: "οἴκοι ἔσαν", gloss: "they were at home (ἔσαν = ἦσαν)" },
      { g: "τὸν δ’", gloss: "but him (article as demonstrative)" },
      { g: "οἶον", gloss: "alone" },
      { g: "κεχρημένον", gloss: "longing for (+ gen.)" },
      { g: "ἠδέ", gloss: "and" },
      { g: "ἔρυκε", gloss: "was restraining" },
      { g: "δῖα θεάων", gloss: "bright among goddesses" },
      { g: "σπέσσι", gloss: "in caves (dat. pl. epic)" }
    ],
    notes: "Classic μέν…δέ: all others home vs. Odysseus alone. Article τόν resumes the hero. κεχρημένον + genitive. Calypso = Ogygia (map station 15).",
    poetic: "μέν…δέ paragraph architecture. Epithet δῖα θεάων. Type-scene seed of ‘held by a goddess’ vs. human οἶκος.",
    translation: "Then all the others who escaped sheer destruction were at home, safe from war and sea; but him alone, longing for return and wife, the queenly nymph Calypso, bright among goddesses, was restraining in hollow caves, yearning that he be her husband."
  },
  {
    id: "p4",
    ref: "Od. 1.32–34",
    greek: `ὢ πόποι, οἷον δή νυ θεοὺς βροτοὶ αἰτιόωνται·
ἐξ ἡμέων γάρ φασι κάκ’ ἔμμεναι, οἱ δὲ καὶ αὐτοὶ
σφῇσιν ἀτασθαλίῃσιν ὑπὲρ μόρον ἄλγε’ ἔχουσιν,`,
    words: [
      { g: "ὢ πόποι", gloss: "alas! / look you now (exclamation)" },
      { g: "βροτοί", gloss: "mortals" },
      { g: "αἰτιόωνται", gloss: "blame (mid.)" },
      { g: "φασι", gloss: "they say" },
      { g: "ἔμμεναι", gloss: "to be (epic inf. = εἶναι)" },
      { g: "ἀτασθαλίῃσιν", gloss: "by blind follies" },
      { g: "ὑπὲρ μόρον", gloss: "beyond their allotted fate" },
      { g: "ἄλγεα", gloss: "pains" }
    ],
    notes: "Zeus’s speech opens the divine assembly. ἔμμεναι = εἶναι. Same moral word ἀτασθαλίαι as the proem — gods are not the sole cause.",
    poetic: "Divine speech frame (council scene). Ring with the proem’s moral: human folly beyond μόρος. Direct speech energy with ὢ πόποι.",
    translation: "Look you now, how ready mortals are to blame the gods. For they say evils come from us, but they themselves also, through their own blind folly, have sorrows beyond what is ordained…"
  },
  {
    id: "p5",
    ref: "Od. 1.96–99",
    greek: `ὣς εἰποῦσ’ ὑπὸ ποσσὶν ἐδήσατο καλὰ πέδιλα,
ἀμβρόσια χρύσεια, τά μιν φέρον ἠμὲν ἐφ’ ὑγρὴν
ἠδ’ ἐπ’ ἀπείρονα γαῖαν ἅμα πνοιῇς ἀνέμοιο·
εἵλετο δ’ ἄλκιμον ἔγχος, ἀκαχμένον ὀξέι χαλκῷ,`,
    words: [
      { g: "ὣς εἰποῦσα", gloss: "so speaking (aor. pple φημί)" },
      { g: "ποσσίν", gloss: "feet (dat. pl.)" },
      { g: "πέδιλα", gloss: "sandals" },
      { g: "μιν", gloss: "her" },
      { g: "ἠμὲν … ἠδέ", gloss: "both … and" },
      { g: "ὑγρήν", gloss: "the watery (sea)" },
      { g: "πνοιῇς ἀνέμοιο", gloss: "with blasts of wind" },
      { g: "ἔγχος", gloss: "spear" },
      { g: "χαλκῷ", gloss: "with bronze (dat.)" }
    ],
    notes: "Speech close ὣς εἰποῦσα → action. μιν = Athena. Uncontracted / epic forms. Travel kit: sandals + spear (divine descent type-scene).",
    poetic: "Formulaic dressing for divine journey. Relative τά resumes the sandals. Pair ἠμέν…ἠδέ balances sea and land — whole world under her feet.",
    translation: "So speaking she bound fair sandals under her feet, immortal, golden, which bore her both over the sea and over the boundless earth with the blasts of the wind; and she took her mighty spear, tipped with sharp bronze…"
  },
  {
    id: "p6",
    ref: "Od. 1.119–124",
    greek: `βῆ δ’ ἰθὺς προθύροιο, νεμεσσήθη δ’ ἐνὶ θυμῷ
ξεῖνον δηθὰ θύρῃσιν ἐφεστάμεν· ἐγγύθι δὲ στὰς
χεῖρ’ ἕλε δεξιτερὴν καὶ ἐδέξατο χάλκεον ἔγχος,
καί μιν φωνήσας ἔπεα πτερόεντα προσηύδα·
χαῖρε, ξεῖνε, παρ’ ἄμμι φιλήσεαι·`,
    words: [
      { g: "βῆ", gloss: "went (unaugmented aor.)" },
      { g: "προθύροιο", gloss: "of the porch (gen. -οιο)" },
      { g: "νεμεσσήθη", gloss: "felt shame / indignation" },
      { g: "ξεῖνον", gloss: "stranger / guest" },
      { g: "ἐφεστάμεν", gloss: "to stand at (epic inf.)" },
      { g: "ἔπεα πτερόεντα", gloss: "winged words" },
      { g: "ἄμμι", gloss: "us (= ἡμῖν)" },
      { g: "φιλήσεαι", gloss: "you will be welcomed" }
    ],
    notes: "Hospitality type-scene: see stranger → shame at delay → take spear → speech formula → welcome. ξεῖνος is core Odyssey vocab (Day 3).",
    poetic: "Type-scene of guest-reception. Speech formula ἔπεα πτερόεντα. ξενία ethics in action before any long speech.",
    translation: "He went straight to the porch, and in his heart thought it shame that a stranger stand long at the doors; and drawing near he took her right hand and received the bronze spear, and speaking addressed her with winged words: “Hail, stranger; among us you shall be welcomed…”"
  },
  {
    id: "p7",
    ref: "Od. 5.1–4",
    greek: `Ἠὼς δ’ ἐκ λεχέων παρ’ ἀγαυοῦ Τιθωνοῖο
ὤρνυθ’, ἵν’ ἀθανάτοισι φόως φέροι ἠδὲ βροτοῖσιν·
οἱ δὲ θεοὶ θῶκόνδε καθίζανον, ἐν δ’ ἄρα τοῖσι
Ζεὺς ὑψιβρεμέτης, οὗ τε κράτος ἐστὶ μέγιστον.`,
    words: [
      { g: "Ἠώς", gloss: "Dawn" },
      { g: "λεχέων", gloss: "from bed (gen. pl.)" },
      { g: "Τιθωνοῖο", gloss: "of Tithonus (gen. -οιο)" },
      { g: "ὤρνυτο", gloss: "rose (impf./aor. mid. ὄρνυμι)" },
      { g: "ἵνα … φέροι", gloss: "so that she might bring (opt. purpose)" },
      { g: "βροτοῖσιν", gloss: "for mortals (dat. pl.)" },
      { g: "θῶκόνδε", gloss: "to the seat of council (-δε allative)" },
      { g: "ἄρα / ῥα", gloss: "then / as it turns out (light particle)" },
      { g: "ὑψιβρεμέτης", gloss: "high-thundering (epithet of Zeus)" }
    ],
    notes: "Book 5 dawn + council. Purpose ἵνα + optative after secondary tense. -οιο genitive; -δε ‘to’. Epic τε with general truth (οὗ τε).",
    poetic: "Dawn formula opens the book (type-scene of a new day). Divine assembly frame. Epithet ὑψιβρεμέτης. Pair immortals / mortals balances the world Dawn lights.",
    translation: "Dawn rose from her bed by noble Tithonus, to bring light to immortals and to mortals; and the gods were sitting down to council, and among them Zeus the high-thunderer, whose power is greatest."
  },
  {
    id: "p8",
    ref: "Od. 5.13–17",
    greek: `ἀλλ’ ὁ μὲν ἐν νήσῳ κεῖται κρατέρ’ ἄλγεα πάσχων
νύμφης ἐν μεγάροισι Καλυψοῦς, ἥ μιν ἀνάγκῃ
ἴσχει· ὁ δ’ οὐ δύναται ἣν πατρίδα γαῖαν ἱκέσθαι·
οὐ γάρ οἱ πάρα νῆες ἐπήρετμοι καὶ ἑταῖροι,
οἵ κέν μιν πέμποιεν ἐπ’ εὐρέα νῶτα θαλάσσης.`,
    words: [
      { g: "ὁ μέν … ὁ δέ", gloss: "he (Odysseus) … and he" },
      { g: "κεῖται", gloss: "lies" },
      { g: "ἄλγεα πάσχων", gloss: "suffering pains" },
      { g: "μεγάροισι", gloss: "in the halls (dat. pl. epic)" },
      { g: "μιν", gloss: "him" },
      { g: "ἀνάγκῃ", gloss: "by necessity / force" },
      { g: "ἱκέσθαι", gloss: "to reach (aor. inf.)" },
      { g: "πάρα", gloss: "are at hand (≈ πάρεισι)" },
      { g: "ἑταῖροι", gloss: "comrades" },
      { g: "κέν … πέμποιεν", gloss: "who would send (potential opt. + κε)" }
    ],
    notes: "Athena’s summary of the plight. μέν…δέ within the speech. κε + optative = potential. πάρα = πάρεισι. Core vocab: νῆσος, μέγαρον, ἑταῖρος, θάλασσα, γαῖα.",
    poetic: "Contrast structure pins Odysseus as the one man still ‘lying’ in pain. Image εὐρέα νῶτα θαλάσσης (‘broad back of the sea’) — sea as living surface to cross.",
    translation: "But he lies on an island suffering strong pains in the halls of the nymph Calypso, who holds him by force; and he cannot reach his native land, for he has no oared ships at hand and no comrades who would convey him over the broad back of the sea."
  },
  {
    id: "p9",
    ref: "Od. 9.105–110",
    greek: `Κυκλώπων δ’ ἐς γαῖαν ὑπερφιάλων ἀθεμίστων
ἱκόμεθ’, οἵ ῥα θεοῖσι πεποιθότες ἀθανάτοισιν
οὔτε φυτεύουσιν χερσὶν φυτὸν οὔτ’ ἀρόωσιν,
ἀλλὰ τά γ’ ἄσπαρτα καὶ ἀνήροτα πάντα φύονται,
πυροὶ καὶ κριθαὶ ἠδ’ ἄμπελοι, αἵ τε φέρουσιν
οἶνον ἐριστάφυλον, καί σφιν Διὸς ὄμβρος ἀέξει.`,
    words: [
      { g: "ὑπερφιάλων", gloss: "overweening" },
      { g: "ἀθεμίστων", gloss: "lawless (without θέμις)" },
      { g: "ἱκόμεθα", gloss: "we came" },
      { g: "ῥα", gloss: "particle (ἄρα)" },
      { g: "πεποιθότες", gloss: "trusting (perf. pple)" },
      { g: "φυτεύουσιν / ἀρόωσιν", gloss: "plant / plow" },
      { g: "ἄσπαρτα … ἀνήροτα", gloss: "unsown … unplowed" },
      { g: "σφιν", gloss: "for them (dat. pl.)" },
      { g: "ὄμβρος", gloss: "rain" }
    ],
    notes: "Bridge into the long Od. 9 reading. Negative civilization markers: no planting, no plowing. Zeus’s rain does the work. Aligns with map station Cyclopes.",
    poetic: "Ethnographic catalogue by negation (οὔτε…οὔτε…ἀλλά). Paradox image: abundance without culture. Sets the Cyclopes as anti-polis before Polyphemus appears.",
    translation: "We came to the land of the overweening, lawless Cyclopes, who, trusting the immortal gods, neither plant crops with their hands nor plow, but all these things grow unsown and unplowed — wheat and barley and vines that bear wine of rich clusters, and the rain of Zeus makes them grow for them."
  },
  {
    id: "p10",
    ref: "Od. 9.112–115",
    greek: `τοῖσιν δ’ οὔτ’ ἀγοραὶ βουληφόροι οὔτε θέμιστες,
ἀλλ’ οἵ γ’ ὑψηλῶν ὀρέων ναίουσι κάρηνα
ἐν σπέσσι γλαφυροῖσι, θεμιστεύει δὲ ἕκαστος
παίδων ἠδ’ ἀλόχων, οὐδ’ ἀλλήλων ἀλέγουσιν.`,
    words: [
      { g: "ἀγοραί", gloss: "assemblies" },
      { g: "βουληφόροι", gloss: "counsel-bearing" },
      { g: "θέμιστες", gloss: "laws / judgments" },
      { g: "ναίουσι", gloss: "they dwell" },
      { g: "κάρηνα", gloss: "peaks" },
      { g: "σπέσσι γλαφυροῖσι", gloss: "in hollow caves" },
      { g: "θεμιστεύει", gloss: "gives law / rules" },
      { g: "ἕκαστος", gloss: "each one" },
      { g: "ἀλλήλων", gloss: "of one another" },
      { g: "ἀλέγουσιν", gloss: "they care / take heed" }
    ],
    notes: "No ἀγορή, no shared θέμις — each household is its own law. Contrast with Achaean assemblies and Phaeacian order (map / ξενία themes).",
    poetic: "Civilization defined by absence: no counsel-bearing assemblies. Isolation image (mountain peaks, caves). Each-man autarchy vs. Homeric community ethics.",
    translation: "They have neither counsel-bearing assemblies nor laws, but they dwell on the peaks of lofty mountains in hollow caves, and each one gives law to his children and wives, and they pay no mind to one another."
  }
];
