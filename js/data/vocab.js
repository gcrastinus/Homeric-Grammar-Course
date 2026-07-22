/* Core Homeric vocabulary for the Odyssey
   Priority: high Odyssey frequency, low NT overlap, no proper names
   ~200 lemmas, 5-day workup (40/day)
*/
const VOCAB_DAYS = [
  {
    day: 1,
    title: "Speech, Mind, Return",
    blurb: "How people talk, plan, and come home — the Odyssey’s mental world."
  },
  {
    day: 2,
    title: "Sea, Ship, Path",
    blurb: "Voyage vocabulary: ships, water, wind, and motion."
  },
  {
    day: 3,
    title: "House, Guest, Suitors",
    blurb: "Halls, hospitality, and the crisis on Ithaca."
  },
  {
    day: 4,
    title: "Body, Force, Fate",
    blurb: "Heart, limbs, strength, pain, portion, and glory."
  },
  {
    day: 5,
    title: "Gods, Craft, Everyday Epic",
    blurb: "Divine epithets in use, cunning, tools, time, and filler high-frequency glue."
  }
];

const VOCAB = [
  // ——— DAY 1: Speech, mind, return (40) ———
  {
    day: 1, lemma: "μῦθος", pos: "ὁ", gloss: "speech, plan, tale, word of command",
    parts: "μῦθος, -ου, ὁ",
    example: {
      ref: "Od. 1.28",
      greek: "τοῖσι δὲ μύθων ἦρχε πατὴρ ἀνδρῶν τε θεῶν τε",
      english: "and among them the father of men and gods began ______",
      blank: "speeches / words"
    }
  },
  {
    day: 1, lemma: "ἔπος", pos: "τό", gloss: "word, speech, epic phrase",
    parts: "ἔπος, ἔπεος, τό",
    example: {
      ref: "Od. 1.122",
      greek: "καί μιν φωνήσας ἔπεα πτερόεντα προσηύδα",
      english: "and speaking he addressed him with winged ______",
      blank: "words"
    }
  },
  {
    day: 1, lemma: "νόστος", pos: "ὁ", gloss: "homecoming, return",
    parts: "νόστος, -ου, ὁ",
    example: {
      ref: "Od. 1.5",
      greek: "ἀρνύμενος ἥν τε ψυχὴν καὶ νόστον ἑταίρων",
      english: "striving to win his life and the ______ of his comrades",
      blank: "return"
    }
  },
  {
    day: 1, lemma: "νέομαι", pos: "verb", gloss: "return, go back, come home",
    parts: "νέομαι (dep.)",
    example: {
      ref: "Od. 1.17",
      greek: "τῷ οἱ ἐπεκλώσαντο θεοὶ οἶκόνδε νέεσθαι",
      english: "in which the gods had spun for him to ______ homeward",
      blank: "return"
    }
  },
  {
    day: 1, lemma: "νόος", pos: "ὁ", gloss: "mind, intent, plan, sense",
    parts: "νόος (νοῦς), -ου, ὁ",
    example: {
      ref: "Od. 1.3",
      greek: "πολλῶν δ’ ἀνθρώπων ἴδεν ἄστεα καὶ νόον ἔγνω",
      english: "he saw the cities of many men and came to know their ______",
      blank: "mind"
    }
  },
  {
    day: 1, lemma: "φρήν", pos: "ἡ", gloss: "midriff; mind, heart (as seat of thought)",
    parts: "φρήν, φρενός, ἡ (often pl. φρένες)",
    example: {
      ref: "Od. 1.89",
      greek: "καί οἱ μένος ἐν φρεσὶ θείω",
      english: "and put strength in his ______",
      blank: "breast / mind"
    }
  },
  {
    day: 1, lemma: "θυμός", pos: "ὁ", gloss: "spirit, heart, desire, anger",
    parts: "θυμός, -οῦ, ὁ",
    example: {
      ref: "Od. 1.4",
      greek: "πολλὰ δ’ ὅ γ’ ἐν πόντῳ πάθεν ἄλγεα ὃν κατὰ θυμόν",
      english: "and many pains he suffered on the sea in his ______",
      blank: "heart"
    }
  },
  {
    day: 1, lemma: "κῆρ", pos: "τό", gloss: "heart (esp. emotional)",
    parts: "κῆρ, κῆρος, τό",
    example: {
      ref: "Od. 1.48",
      greek: "ἀλλά μοι ἀμφ’ Ὀδυσῆι δαΐφρονι δαίεται ἦτορ",
      english: "(related family) my heart is torn — compare also ______ as “heart”",
      blank: "heart"
    }
  },
  {
    day: 1, lemma: "ἦτορ", pos: "τό", gloss: "heart, spirit",
    parts: "ἦτορ, -ορος, τό",
    example: {
      ref: "Od. 1.48",
      greek: "ἀλλά μοι ἀμφ’ Ὀδυσῆι δαΐφρονι δαίεται ἦτορ",
      english: "but my ______ is torn for wise Odysseus",
      blank: "heart"
    }
  },
  {
    day: 1, lemma: "μῆτις", pos: "ἡ", gloss: "cunning intelligence, craft, plan",
    parts: "μῆτις, -ιος, ἡ",
    example: {
      ref: "Od. 9.414 (theme)",
      greek: "ὣς ὄνομ’ ἐξαπάτησεν ἐμὸν καὶ μῆτις ἀμύμων",
      english: "so my name and excellent ______ deceived him",
      blank: "cunning"
    }
  },
  {
    day: 1, lemma: "δόλος", pos: "ὁ", gloss: "trick, bait, stratagem",
    parts: "δόλος, -ου, ὁ",
    example: {
      ref: "Od. 1.296",
      greek: "κτείνῃς ἠὲ δόλῳ ἢ ἀμφαδόν",
      english: "you may kill either by ______ or openly",
      blank: "trick / guile"
    }
  },
  {
    day: 1, lemma: "βουλή", pos: "ἡ", gloss: "counsel, plan, council",
    parts: "βουλή, -ῆς, ἡ",
    example: {
      ref: "Od. 1.86",
      greek: "νύμφῃ ἐυπλοκάμῳ εἴπῃ νημερτέα βουλήν",
      english: "that he may tell the fair-tressed nymph the unerring ______",
      blank: "plan / counsel"
    }
  },
  {
    day: 1, lemma: "φημί", pos: "verb", gloss: "say, affirm",
    parts: "φημί, φήσω, ἔφησα / ἔφην",
    example: {
      ref: "Od. 1.43",
      greek: "ὣς ἔφαθ’ Ἑρμείας",
      english: "so Hermes ______",
      blank: "spoke"
    }
  },
  {
    day: 1, lemma: "αὐδάω", pos: "verb", gloss: "speak, utter",
    parts: "αὐδάω, -ήσω, ηὔδησα",
    example: {
      ref: "Od. 1.31",
      greek: "ἔπε’ ἀθανάτοισι μετηύδα",
      english: "he ______ words among the immortals",
      blank: "spoke / uttered"
    }
  },
  {
    day: 1, lemma: "προσαυδάω", pos: "verb", gloss: "address, speak to",
    parts: "προσ-αυδάω",
    example: {
      ref: "Od. 1.122",
      greek: "ἔπεα πτερόεντα προσηύδα",
      english: "he ______ winged words",
      blank: "addressed (him with)"
    }
  },
  {
    day: 1, lemma: "ἀμείβομαι", pos: "verb", gloss: "answer, exchange",
    parts: "ἀμείβομαι, ἀμείψομαι, ἠμειψάμην",
    example: {
      ref: "Od. 1.44",
      greek: "τὸν δ’ ἠμείβετ’ ἔπειτα θεά, γλαυκῶπις Ἀθήνη",
      english: "and him then the goddess flashing-eyed Athena ______",
      blank: "answered"
    }
  },
  {
    day: 1, lemma: "εἴρομαι", pos: "verb", gloss: "ask, inquire",
    parts: "εἴρομαι / ἔρομαι",
    example: {
      ref: "Od. 1.284",
      greek: "πρῶτα μὲν ἐς Πύλον ἐλθὲ καὶ εἴρεο Νέστορα δῖον",
      english: "first go to Pylos and ______ godlike Nestor",
      blank: "ask / question"
    }
  },
  {
    day: 1, lemma: "ἀγορεύω", pos: "verb", gloss: "speak in assembly, declare",
    parts: "ἀγορεύω, -εύσω, ἠγόρευσα",
    example: {
      ref: "Od. 1.179",
      greek: "τοιγὰρ ἐγώ τοι ταῦτα μάλ’ ἀτρεκέως ἀγορεύσω",
      english: "therefore I will ______ these things to you quite truly",
      blank: "declare / speak"
    }
  },
  {
    day: 1, lemma: "καταλέγω", pos: "verb", gloss: "recount, tell in order",
    parts: "καταλέγω, -λέξω, -έλεξα",
    example: {
      ref: "Od. 1.169",
      greek: "ἀλλ’ ἄγε μοι τόδε εἰπὲ καὶ ἀτρεκέως κατάλεξον",
      english: "but come, tell me this and ______ it truly",
      blank: "recount"
    }
  },
  {
    day: 1, lemma: "πεύθομαι", pos: "verb", gloss: "learn by inquiry, hear news",
    parts: "πεύθομαι / πυνθάνομαι, πεύσομαι, ἐπυθόμην",
    example: {
      ref: "Od. 1.94",
      greek: "νόστον πευσόμενον πατρὸς φίλου",
      english: "to ______ news of the return of his dear father",
      blank: "learn / inquire about"
    }
  },
  {
    day: 1, lemma: "κλέος", pos: "τό", gloss: "fame, glory, report",
    parts: "κλέος, -εος, τό",
    example: {
      ref: "Od. 1.95",
      greek: "ἠδ’ ἵνα μιν κλέος ἐσθλὸν ἐν ἀνθρώποισιν ἔχῃσιν",
      english: "and so that he may have noble ______ among men",
      blank: "fame"
    }
  },
  {
    day: 1, lemma: "ἀοιδή", pos: "ἡ", gloss: "song, singing",
    parts: "ἀοιδή, -ῆς, ἡ",
    example: {
      ref: "Od. 1.159",
      greek: "τούτοισιν μὲν ταῦτα μέλει, κίθαρις καὶ ἀοιδή",
      english: "these care for such things — the lyre and ______",
      blank: "song"
    }
  },
  {
    day: 1, lemma: "ἀοιδός", pos: "ὁ", gloss: "singer, bard",
    parts: "ἀοιδός, -οῦ, ὁ",
    example: {
      ref: "Od. 1.325",
      greek: "τοῖσι δ’ ἀοιδὸς ἄειδε περικλυτός",
      english: "and for them the famous ______ was singing",
      blank: "bard / singer"
    }
  },
  {
    day: 1, lemma: "εὔχομαι", pos: "verb", gloss: "pray; claim, boast to be",
    parts: "εὔχομαι, εὔξομαι, ηὐξάμην",
    example: {
      ref: "Od. 1.180",
      greek: "Μέντης Ἀγχιάλοιο δαΐφρονος εὔχομαι εἶναι υἱός",
      english: "I ______ to be Mentes, son of wise Anchialus",
      blank: "claim / declare"
    }
  },
  {
    day: 1, lemma: "λίσσομαι", pos: "verb", gloss: "beg, entreat",
    parts: "λίσσομαι",
    example: {
      ref: "Od. 9.266 (theme)",
      greek: "ἀλλ’ αἰδεῖο, φέριστε, θεούς· ἱκέται δέ τοί εἰμεν",
      english: "(supplication theme) we entreat — related verb ______",
      blank: "beg"
    }
  },
  {
    day: 1, lemma: "ὀδύρομαι", pos: "verb", gloss: "lament, mourn",
    parts: "ὀδύρομαι",
    example: {
      ref: "Od. 1.55",
      greek: "τοῦ θυγάτηρ δύστηνον ὀδυρόμενον κατερύκει",
      english: "his daughter restrains the wretched man as he ______",
      blank: "laments"
    }
  },
  {
    day: 1, lemma: "στεναχίζω", pos: "verb", gloss: "groan, sigh",
    parts: "στεναχίζω / στενάχω",
    example: {
      ref: "Od. 1.243",
      greek: "οὐδέ τι κεῖνον ὀδυρόμενος στεναχίζω οἶον",
      english: "nor do I ______ mourning him alone",
      blank: "groan"
    }
  },
  {
    day: 1, lemma: "μιμνήσκω", pos: "verb", gloss: "remind; mid. remember",
    parts: "μιμνήσκω, μνήσω, ἔμνησα; perf. μέμνημαι",
    example: {
      ref: "Od. 1.29",
      greek: "μνήσατο γὰρ κατὰ θυμὸν ἀμύμονος Αἰγίσθοιο",
      english: "for he ______ noble Aegisthus in his heart",
      blank: "remembered"
    }
  },
  {
    day: 1, lemma: "λανθάνω", pos: "verb", gloss: "escape notice; mid. forget",
    parts: "λανθάνω, λήσω, ἔλαθον; mid. λανθάνομαι / ἐπιλήθομαι",
    example: {
      ref: "Od. 1.57",
      greek: "θέλγει, ὅπως Ἰθάκης ἐπιλήσεται",
      english: "she charms him so that he may ______ Ithaca",
      blank: "forget"
    }
  },
  {
    day: 1, lemma: "φράζω", pos: "verb", gloss: "point out; mid. consider, plan",
    parts: "φράζω, φράσω, ἔφρασα",
    example: {
      ref: "Od. 1.269",
      greek: "σὲ δὲ φράζεσθαι ἄνωγα",
      english: "but I bid you ______ / take thought",
      blank: "consider"
    }
  },
  {
    day: 1, lemma: "νοέω", pos: "verb", gloss: "perceive, notice, intend",
    parts: "νοέω, νοήσω, ἐνόησα",
    example: {
      ref: "Od. 1.322",
      greek: "ὁ δὲ φρεσὶν ᾗσι νοήσας θάμβησεν",
      english: "and he, ______ in his mind, marveled",
      blank: "perceiving / noticing"
    }
  },
  {
    day: 1, lemma: "οἶδα", pos: "verb", gloss: "know (perf. with pres. sense)",
    parts: "οἶδα, εἴσομαι, ἔγνων (related); 2sg οἶσθα",
    example: {
      ref: "Od. 1.216",
      greek: "αὐτὰρ ἐγώ γε οὐκ οἶδ’",
      english: "but I for my part do not ______",
      blank: "know"
    }
  },
  {
    day: 1, lemma: "ἐνέπω", pos: "verb", gloss: "tell, relate (epic; imperative ἔννεπε)",
    parts: "ἐνέπω / ἐννέπω · ἔννεπε (imper.)",
    example: {
      ref: "Od. 1.1",
      greek: "ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον",
      english: "______ me, Muse, of the man of many turns",
      blank: "tell"
    }
  },
  {
    day: 1, lemma: "ἀτρεκής", pos: "adj.", gloss: "unerring, exact, true",
    parts: "ἀτρεκής, -ές; adv. ἀτρεκέως",
    example: {
      ref: "Od. 1.169",
      greek: "ἀτρεκέως κατάλεξον",
      english: "recount it ______",
      blank: "truly / exactly"
    }
  },
  {
    day: 1, lemma: "νημερτής", pos: "adj.", gloss: "unfailing, true",
    parts: "νημερτής, -ές",
    example: {
      ref: "Od. 1.86",
      greek: "εἴπῃ νημερτέα βουλήν",
      english: "tell the ______ plan",
      blank: "unerring / true"
    }
  },
  {
    day: 1, lemma: "πεπνυμένος", pos: "adj. (pple)", gloss: "shrewd, wise (of Telemachus, etc.)",
    parts: "from πνέω perfect middle sense",
    example: {
      ref: "Od. 1.213",
      greek: "τὴν δ’ αὖ Τηλέμαχος πεπνυμένος ἀντίον ηὔδα",
      english: "and him then shrewd Telemachus ______ in reply",
      blank: "spoke (as the shrewd one)"
    }
  },
  {
    day: 1, lemma: "δαίφρων", pos: "adj.", gloss: "wise, warlike-minded, cunning",
    parts: "δαίφρων, -ονος",
    example: {
      ref: "Od. 1.48",
      greek: "ἀμφ’ Ὀδυσῆι δαΐφρονι",
      english: "for ______ Odysseus",
      blank: "wise / shrewd"
    }
  },
  {
    day: 1, lemma: "πολύτροπος", pos: "adj.", gloss: "of many turns; versatile, wily",
    parts: "πολύτροπος, -ον",
    example: {
      ref: "Od. 1.1",
      greek: "ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον",
      english: "tell me, Muse, of the ______ man",
      blank: "much-turned / resourceful"
    }
  },
  {
    day: 1, lemma: "πολυμήχανος", pos: "adj.", gloss: "of many devices",
    parts: "πολυμήχανος, -ον",
    example: {
      ref: "Od. 1.205",
      greek: "ἐπεὶ πολυμήχανός ἐστιν",
      english: "since he is ______",
      blank: "a man of many devices"
    }
  },
  {
    day: 1, lemma: "ταλασίφρων", pos: "adj.", gloss: "of enduring mind, steadfast",
    parts: "ταλασίφρων, -ονος",
    example: {
      ref: "Od. 1.87",
      greek: "νόστον Ὀδυσσῆος ταλασίφρονος",
      english: "the return of ______ Odysseus",
      blank: "steadfast-hearted"
    }
  },

  // ——— DAY 2: Sea, ship, path (40) ———
  {
    day: 2, lemma: "πόντος", pos: "ὁ", gloss: "sea (open sea)",
    parts: "πόντος, -ου, ὁ",
    example: {
      ref: "Od. 1.4",
      greek: "πολλὰ δ’ ὅ γ’ ἐν πόντῳ πάθεν ἄλγεα",
      english: "and many pains he suffered on the ______",
      blank: "sea"
    }
  },
  {
    day: 2, lemma: "θάλασσα", pos: "ἡ", gloss: "sea",
    parts: "θάλασσα, -ης, ἡ",
    example: {
      ref: "Od. 1.50",
      greek: "ὅθι τ’ ὀμφαλός ἐστι θαλάσσης",
      english: "where the navel of the ______ is",
      blank: "sea"
    }
  },
  {
    day: 2, lemma: "ἅλς", pos: "ὁ/ἡ", gloss: "salt; the sea",
    parts: "ἅλς, ἁλός, ὁ/ἡ",
    example: {
      ref: "Od. 1.162",
      greek: "ἢ εἰν ἁλὶ κῦμα κυλίνδει",
      english: "or the wave rolls them in the ______",
      blank: "sea"
    }
  },
  {
    day: 2, lemma: "κῦμα", pos: "τό", gloss: "wave",
    parts: "κῦμα, -ατος, τό",
    example: {
      ref: "Od. 1.162",
      greek: "ἢ εἰν ἁλὶ κῦμα κυλίνδει",
      english: "or the ______ rolls them in the sea",
      blank: "wave"
    }
  },
  {
    day: 2, lemma: "νηῦς", pos: "ἡ", gloss: "ship",
    parts: "νηῦς (ναῦς), νηός, ἡ · acc. νῆα · pl. νῆες, νηυσί, νῆας",
    example: {
      ref: "Od. 1.183",
      greek: "πλέων ἐπὶ οἴνοπα πόντον",
      english: "(with ship) sailing over the wine-dark sea — learn ______ “ship”",
      blank: "ship"
    }
  },
  {
    day: 2, lemma: "ἐρετμόν", pos: "τό", gloss: "oar",
    parts: "ἐρετμόν, -οῦ, τό",
    example: {
      ref: "Od. 1.280",
      greek: "νῆ’ ἄρσας ἐρέτῃσιν ἐείκοσιν",
      english: "fitting a ship with twenty ______-men",
      blank: "oar(s) / rowers"
    }
  },
  {
    day: 2, lemma: "ἐρέτης", pos: "ὁ", gloss: "rower",
    parts: "ἐρέτης, -ου, ὁ",
    example: {
      ref: "Od. 1.280",
      greek: "νῆ’ ἄρσας ἐρέτῃσιν ἐείκοσιν",
      english: "a ship manned with twenty ______",
      blank: "rowers"
    }
  },
  {
    day: 2, lemma: "ἱστίον", pos: "τό", gloss: "sail",
    parts: "ἱστίον, -ου, τό",
    example: {
      ref: "Od. 5.269 (theme)",
      greek: "ἱστία μὲν στείλαντο",
      english: "they furled the ______",
      blank: "sails"
    }
  },
  {
    day: 2, lemma: "ἱστός", pos: "ὁ", gloss: "mast; loom",
    parts: "ἱστός, -οῦ, ὁ",
    example: {
      ref: "Od. 1.357",
      greek: "ἱστόν τ’ ἠλακάτην τε",
      english: "the ______ and the distaff",
      blank: "loom / mast"
    }
  },
  {
    day: 2, lemma: "πηδάλιον", pos: "τό", gloss: "steering oar, rudder",
    parts: "πηδάλιον, -ου, τό",
    example: {
      ref: "Od. 5.255 (theme)",
      greek: "ἐν δ’ ὑπέρας τε κάλους τε πόδας τ’ ἐνέδησεν ἐν αὐτῇ",
      english: "(ship gear theme) steering with the ______",
      blank: "rudder"
    }
  },
  {
    day: 2, lemma: "λιμήν", pos: "ὁ", gloss: "harbor",
    parts: "λιμήν, -ένος, ὁ",
    example: {
      ref: "Od. 1.185",
      greek: "ἐν λιμένι Ῥείθρῳ",
      english: "in the ______ of Rheithron",
      blank: "harbor"
    }
  },
  {
    day: 2, lemma: "ἀκτή", pos: "ἡ", gloss: "headland, shore",
    parts: "ἀκτή, -ῆς, ἡ",
    example: {
      ref: "Od. 5.405 (theme)",
      greek: "ἀλλ’ ἀκταὶ προβλῆτες ἔσαν",
      english: "but there were jutting ______",
      blank: "headlands / shores"
    }
  },
  {
    day: 2, lemma: "αἰγιαλός", pos: "ὁ", gloss: "beach, seashore",
    parts: "αἰγιαλός, -οῦ, ὁ",
    example: {
      ref: "Od. 9.85 (theme)",
      greek: "ἔνθα δ’ ἐπ’ ἠπείρου βῆμεν",
      english: "(landing theme) onto the shore / ______",
      blank: "beach"
    }
  },
  {
    day: 2, lemma: "ἄνεμος", pos: "ὁ", gloss: "wind",
    parts: "ἄνεμος, -ου, ὁ",
    example: {
      ref: "Od. 1.98",
      greek: "ἅμα πνοιῇς ἀνέμοιο",
      english: "along with the blasts of the ______",
      blank: "wind"
    }
  },
  {
    day: 2, lemma: "πνοίη", pos: "ἡ", gloss: "blast, breeze, breath",
    parts: "πνοίη, -ης, ἡ",
    example: {
      ref: "Od. 1.98",
      greek: "ἅμα πνοιῇς ἀνέμοιο",
      english: "with the ______ of the wind",
      blank: "blasts / breaths"
    }
  },
  {
    day: 2, lemma: "οὖρος", pos: "ὁ", gloss: "fair wind",
    parts: "οὖρος, -ου, ὁ",
    example: {
      ref: "Od. 5.167 (theme)",
      greek: "οὖρον … ἵησιν",
      english: "sends a fair ______",
      blank: "wind"
    }
  },
  {
    day: 2, lemma: "πλέω", pos: "verb", gloss: "sail",
    parts: "πλέω, πλεύσομαι, ἔπλευσα",
    example: {
      ref: "Od. 1.183",
      greek: "πλέων ἐπὶ οἴνοπα πόντον",
      english: "______ over the wine-dark sea",
      blank: "sailing"
    }
  },
  {
    day: 2, lemma: "ἰθύνω", pos: "verb", gloss: "steer, guide straight",
    parts: "ἰθύνω",
    example: {
      ref: "Od. 5.270 (theme)",
      greek: "αὐτὰρ ὁ πηδαλίῳ ἰθύνετο",
      english: "and he ______ with the steering oar",
      blank: "steered"
    }
  },
  {
    day: 2, lemma: "βαίνω", pos: "verb", gloss: "go, step, walk",
    parts: "βαίνω, βήσομαι, ἔβην",
    example: {
      ref: "Od. 1.102",
      greek: "βῆ δὲ κατ’ Οὐλύμποιο καρήνων",
      english: "and she ______ down from the peaks of Olympus",
      blank: "went"
    }
  },
  {
    day: 2, lemma: "ἱκνέομαι", pos: "verb", gloss: "come to, reach, arrive as suppliant",
    parts: "ἱκνέομαι, ἵξομαι, ἱκόμην",
    example: {
      ref: "Od. 1.21",
      greek: "πάρος ἣν γαῖαν ἱκέσθαι",
      english: "before ______ his own land",
      blank: "reaching / coming to"
    }
  },
  {
    day: 2, lemma: "ἵκω", pos: "verb", gloss: "come, arrive",
    parts: "ἵκω / ἱκάνω",
    example: {
      ref: "Od. 5.34",
      greek: "Σχερίην ἐρίβωλον ἵκοιτο",
      english: "he might ______ fertile Scheria",
      blank: "reach"
    }
  },
  {
    day: 2, lemma: "ἔρχομαι", pos: "verb", gloss: "come, go",
    parts: "ἔρχομαι, ἐλεύσομαι, ἦλθον",
    example: {
      ref: "Od. 1.16",
      greek: "ἀλλ’ ὅτε δὴ ἔτος ἦλθε",
      english: "but when the year ______",
      blank: "came"
    }
  },
  {
    day: 2, lemma: "εἶμι", pos: "verb", gloss: "shall go, go",
    parts: "εἶμι, ἰέναι, ἰών (not εἰμί “be”)",
    example: {
      ref: "Od. 1.88",
      greek: "αὐτὰρ ἐγὼν Ἰθάκηνδ’ ἐσελεύσομαι",
      english: "but I shall ______ to Ithaca",
      blank: "go"
    }
  },
  {
    day: 2, lemma: "νέω", pos: "verb", gloss: "swim (distinct from νέομαι return)",
    parts: "νέω “swim”",
    example: {
      ref: "Od. 5.375 (theme)",
      greek: "νήχετο",
      english: "he ______ (swam)",
      blank: "swam"
    }
  },
  {
    day: 2, lemma: "πλάζω", pos: "verb", gloss: "drive off course, make wander",
    parts: "πλάζω; aor. pass. ἐπλάγχθην",
    example: {
      ref: "Od. 1.2",
      greek: "ὃς μάλα πολλὰ πλάγχθη",
      english: "who was ______ far and wide",
      blank: "driven / made to wander"
    }
  },
  {
    day: 2, lemma: "ἀλάομαι", pos: "verb", gloss: "wander, roam",
    parts: "ἀλάομαι",
    example: {
      ref: "Od. 1.75",
      greek: "πλάζει δ’ ἀπὸ πατρίδος αἴης",
      english: "but makes him ______ from his native land",
      blank: "wander"
    }
  },
  {
    day: 2, lemma: "κελεύθος", pos: "ἡ", gloss: "path, way, journey",
    parts: "κέλευθος, -ου, ἡ (pl. often n. κέλευθα)",
    example: {
      ref: "Od. 1.195",
      greek: "θεοὶ βλάπτουσι κελεύθου",
      english: "the gods hinder him from the ______",
      blank: "path / way"
    }
  },
  {
    day: 2, lemma: "ὁδός", pos: "ἡ", gloss: "road, journey",
    parts: "ὁδός, -οῦ, ἡ",
    example: {
      ref: "Od. 1.309",
      greek: "ἐπειγόμενός περ ὁδοῖο",
      english: "though eager for the ______",
      blank: "journey"
    }
  },
  {
    day: 2, lemma: "οἴκαδε", pos: "adv.", gloss: "homeward, to home",
    parts: "οἴκαδε (οἶκος + -δε)",
    example: {
      ref: "Od. 1.17",
      greek: "οἶκόνδε νέεσθαι",
      english: "to return ______",
      blank: "homeward"
    }
  },
  {
    day: 2, lemma: "ὄνδε δόμονδε", pos: "adv. phrase", gloss: "to his own house",
    parts: "ὅνδε δόμονδε",
    example: {
      ref: "Od. 1.83",
      greek: "νοστῆσαι Ὀδυσῆα πολύφρονα ὅνδε δόμονδε",
      english: "that Odysseus return ______",
      blank: "to his own house"
    }
  },
  {
    day: 2, lemma: "τηλόθεν", pos: "adv.", gloss: "from afar",
    parts: "τηλόθεν / τηλοῦ",
    example: {
      ref: "Od. 1.22",
      greek: "Αἰθίοπας μετεκίαθε τηλόθ’ ἐόντας",
      english: "he had gone among the Ethiopians who are ______",
      blank: "far away"
    }
  },
  {
    day: 2, lemma: "ἄστυ", pos: "τό", gloss: "town, city",
    parts: "ἄστυ, -εος, τό",
    example: {
      ref: "Od. 1.3",
      greek: "πολλῶν δ’ ἀνθρώπων ἴδεν ἄστεα",
      english: "he saw the ______ of many men",
      blank: "towns / cities"
    }
  },
  {
    day: 2, lemma: "γαῖα", pos: "ἡ", gloss: "earth, land, country",
    parts: "γαῖα (γῆ), -ης, ἡ",
    example: {
      ref: "Od. 1.21",
      greek: "πάρος ἣν γαῖαν ἱκέσθαι",
      english: "before reaching his own ______",
      blank: "land"
    }
  },
  {
    day: 2, lemma: "αἶα", pos: "ἡ", gloss: "land, earth (poetic)",
    parts: "αἶα, -ης, ἡ",
    example: {
      ref: "Od. 1.41",
      greek: "ἧς ἱμείρεται αἴης",
      english: "and longs for his own ______",
      blank: "land"
    }
  },
  {
    day: 2, lemma: "πατρίς", pos: "ἡ", gloss: "fatherland",
    parts: "πατρίς, -ίδος, ἡ",
    example: {
      ref: "Od. 1.75",
      greek: "πλάζει δ’ ἀπὸ πατρίδος αἴης",
      english: "makes him wander from his ______ land",
      blank: "native / father-"
    }
  },
  {
    day: 2, lemma: "χθών", pos: "ἡ", gloss: "earth, ground",
    parts: "χθών, χθονός, ἡ",
    example: {
      ref: "Od. 1.196",
      greek: "οὐ γάρ πω τέθνηκεν ἐπὶ χθονὶ δῖος Ὀδυσσεύς",
      english: "for not yet has goodly Odysseus died upon the ______",
      blank: "earth"
    }
  },
  {
    day: 2, lemma: "ἤπειρος", pos: "ἡ", gloss: "mainland",
    parts: "ἤπειρος, -ου, ἡ",
    example: {
      ref: "Od. 1.162",
      greek: "κείμεν’ ἐπ’ ἠπείρου",
      english: "lying on the ______",
      blank: "mainland"
    }
  },
  {
    day: 2, lemma: "νῆσος", pos: "ἡ", gloss: "island",
    parts: "νῆσος, -ου, ἡ",
    example: {
      ref: "Od. 1.50",
      greek: "νήσῳ ἐν ἀμφιρύτῃ",
      english: "on a sea-girt ______",
      blank: "island"
    }
  },
  {
    day: 2, lemma: "ἀμφίρυτος", pos: "adj.", gloss: "sea-girt, flowed around",
    parts: "ἀμφίρυτος, -ον",
    example: {
      ref: "Od. 1.50",
      greek: "νήσῳ ἐν ἀμφιρύτῃ",
      english: "on a ______ island",
      blank: "sea-girt"
    }
  },
  {
    day: 2, lemma: "οἶνοψ", pos: "adj.", gloss: "wine-dark (epithet of sea)",
    parts: "οἶνοψ, -οπος",
    example: {
      ref: "Od. 1.183",
      greek: "ἐπὶ οἴνοπα πόντον",
      english: "over the ______ sea",
      blank: "wine-dark"
    }
  },

  // ——— DAY 3: House, guest, suitors (40) ———
  {
    day: 3, lemma: "μέγαρον", pos: "τό", gloss: "great hall, main room",
    parts: "μέγαρον, -ου, τό (often pl.)",
    example: {
      ref: "Od. 1.27",
      greek: "Ζηνὸς ἐνὶ μεγάροισιν Ὀλυμπίου",
      english: "in the ______ of Olympian Zeus",
      blank: "halls"
    }
  },
  {
    day: 3, lemma: "δῶμα", pos: "τό", gloss: "house, dwelling",
    parts: "δῶμα, -ατος, τό",
    example: {
      ref: "Od. 1.51",
      greek: "θεὰ δ’ ἐν δώματα ναίει",
      english: "and a goddess dwells in the ______",
      blank: "house / halls"
    }
  },
  {
    day: 3, lemma: "δόμος", pos: "ὁ", gloss: "house, home",
    parts: "δόμος, -ου, ὁ",
    example: {
      ref: "Od. 1.126",
      greek: "ἔντοσθεν ἔσαν δόμου ὑψηλοῖο",
      english: "they were inside the lofty ______",
      blank: "house"
    }
  },
  {
    day: 3, lemma: "οἶκος", pos: "ὁ", gloss: "house, household, estate",
    parts: "οἶκος, -ου, ὁ",
    example: {
      ref: "Od. 1.232",
      greek: "μέλλεν μέν ποτε οἶκος ὅδ’ ἀφνειὸς … ἔμμεναι",
      english: "this ______ was once likely to be rich",
      blank: "house / household"
    }
  },
  {
    day: 3, lemma: "θάλαμος", pos: "ὁ", gloss: "inner room, chamber",
    parts: "θάλαμος, -ου, ὁ",
    example: {
      ref: "Od. 1.425",
      greek: "ὅθι οἱ θάλαμος περικαλλέος αὐλῆς",
      english: "where his ______ of the beautiful court",
      blank: "chamber"
    }
  },
  {
    day: 3, lemma: "αὐλή", pos: "ἡ", gloss: "courtyard",
    parts: "αὐλή, -ῆς, ἡ",
    example: {
      ref: "Od. 1.425",
      greek: "θαλάμος περικαλλέος αὐλῆς",
      english: "chamber of the beautiful ______",
      blank: "courtyard"
    }
  },
  {
    day: 3, lemma: "πρόθυρον", pos: "τό", gloss: "front door, porch",
    parts: "πρόθυρον, -ου, τό",
    example: {
      ref: "Od. 1.103",
      greek: "ἐπὶ προθύροις Ὀδυσῆος",
      english: "at the ______ of Odysseus",
      blank: "outer gate / porch"
    }
  },
  {
    day: 3, lemma: "οὐδός", pos: "ὁ", gloss: "threshold",
    parts: "οὐδός, -οῦ, ὁ",
    example: {
      ref: "Od. 1.104",
      greek: "οὐδοῦ ἐπ’ αὐλείου",
      english: "on the courtyard ______",
      blank: "threshold"
    }
  },
  {
    day: 3, lemma: "θρόνος", pos: "ὁ", gloss: "chair, seat of honor",
    parts: "θρόνος, -ου, ὁ",
    example: {
      ref: "Od. 1.130",
      greek: "αὐτὴν δ’ ἐς θρόνον εἷσεν ἄγων",
      english: "and he led and seated her on a ______",
      blank: "chair"
    }
  },
  {
    day: 3, lemma: "κλισμός", pos: "ὁ", gloss: "couch, reclining seat",
    parts: "κλισμός, -οῦ, ὁ",
    example: {
      ref: "Od. 1.132",
      greek: "πὰρ δ’ αὐτὸς κλισμὸν θέτο ποικίλον",
      english: "and beside her he set an inlaid ______",
      blank: "seat / couch"
    }
  },
  {
    day: 3, lemma: "τράπεζα", pos: "ἡ", gloss: "table",
    parts: "τράπεζα, -ης, ἡ",
    example: {
      ref: "Od. 1.138",
      greek: "παρὰ δὲ ξεστὴν ἐτάνυσσε τράπεζαν",
      english: "and drew up a polished ______",
      blank: "table"
    }
  },
  {
    day: 3, lemma: "κρητήρ", pos: "ὁ", gloss: "mixing bowl",
    parts: "κρητήρ, -ῆρος, ὁ",
    example: {
      ref: "Od. 1.110",
      greek: "οἶνον ἔμισγον ἐνὶ κρητῆρσι καὶ ὕδωρ",
      english: "they mixed wine and water in ______",
      blank: "mixing bowls"
    }
  },
  {
    day: 3, lemma: "δέπας", pos: "τό", gloss: "cup, goblet",
    parts: "δέπας, -αος, τό",
    example: {
      ref: "Od. 3.41 (theme)",
      greek: "χρύσειον δέπας",
      english: "a golden ______",
      blank: "cup"
    }
  },
  {
    day: 3, lemma: "ξεῖνος", pos: "ὁ", gloss: "stranger, guest-friend",
    parts: "ξεῖνος (ξένος), -ου, ὁ",
    example: {
      ref: "Od. 1.123",
      greek: "χαῖρε, ξεῖνε, παρ’ ἄμμι φιλήσεαι",
      english: "hail, ______; you shall be welcomed among us",
      blank: "stranger / guest"
    }
  },
  {
    day: 3, lemma: "ξενίη", pos: "ἡ", gloss: "guest-friendship, hospitality",
    parts: "ξενίη / ξεινίη, -ης, ἡ",
    example: {
      ref: "Od. 1.313 (theme)",
      greek: "οἷα φίλοι ξεῖνοι ξείνοισι διδοῦσι",
      english: "such gifts as dear guest-friends give — the bond of ______",
      blank: "hospitality"
    }
  },
  {
    day: 3, lemma: "ἱκέτης", pos: "ὁ", gloss: "suppliant",
    parts: "ἱκέτης, -ου, ὁ",
    example: {
      ref: "Od. 9.266",
      greek: "ἱκέται δέ τοί εἰμεν",
      english: "and we are your ______",
      blank: "suppliants"
    }
  },
  {
    day: 3, lemma: "μνηστήρ", pos: "ὁ", gloss: "suitor, wooer",
    parts: "μνηστήρ, -ῆρος, ὁ",
    example: {
      ref: "Od. 1.91",
      greek: "πᾶσι μνηστήρεσσιν ἀπειπέμεν",
      english: "to speak out against all the ______",
      blank: "suitors"
    }
  },
  {
    day: 3, lemma: "μνάομαι", pos: "verb", gloss: "woo, court; also remember (mid.)",
    parts: "μνάομαι",
    example: {
      ref: "Od. 1.248",
      greek: "τόσσοι μητέρ’ ἐμὴν μνῶνται",
      english: "so many ______ my mother",
      blank: "woo"
    }
  },
  {
    day: 3, lemma: "γάμος", pos: "ὁ", gloss: "marriage, wedding",
    parts: "γάμος, -ου, ὁ",
    example: {
      ref: "Od. 1.226",
      greek: "εἰλαπίνη ἠὲ γάμος;",
      english: "is it a feast or a ______?",
      blank: "wedding"
    }
  },
  {
    day: 3, lemma: "ἑταῖρος", pos: "ὁ", gloss: "comrade, companion",
    parts: "ἑταῖρος, -ου, ὁ",
    example: {
      ref: "Od. 1.5",
      greek: "καὶ νόστον ἑταίρων",
      english: "and the return of his ______",
      blank: "comrades"
    }
  },
  {
    day: 3, lemma: "δμωή", pos: "ἡ", gloss: "female slave, serving woman",
    parts: "δμωή, -ῆς, ἡ",
    example: {
      ref: "Od. 1.147",
      greek: "σῖτον δὲ δμῳαὶ παρενήνεον",
      english: "and the ______ heaped bread beside them",
      blank: "serving women"
    }
  },
  {
    day: 3, lemma: "ἀμφίπολος", pos: "ἡ", gloss: "handmaid, attendant",
    parts: "ἀμφίπολος, -ου, ἡ",
    example: {
      ref: "Od. 1.136",
      greek: "χέρνιβα δ’ ἀμφίπολος προχόῳ ἐπέχευε",
      english: "and a ______ poured water for the hands",
      blank: "handmaid"
    }
  },
  {
    day: 3, lemma: "κῆρυξ", pos: "ὁ", gloss: "herald",
    parts: "κῆρυξ, -υκος, ὁ",
    example: {
      ref: "Od. 1.109",
      greek: "κήρυκες δ’ αὐτοῖσι καὶ ὀτρηροὶ θεράποντες",
      english: "and ______ and busy squires",
      blank: "heralds"
    }
  },
  {
    day: 3, lemma: "θεράπων", pos: "ὁ", gloss: "attendant, squire",
    parts: "θεράπων, -οντος, ὁ",
    example: {
      ref: "Od. 1.109",
      greek: "κήρυκες δ’ αὐτοῖσι καὶ ὀτρηροὶ θεράποντες",
      english: "heralds and busy ______",
      blank: "attendants"
    }
  },
  {
    day: 3, lemma: "δαίς", pos: "ἡ", gloss: "feast, banquet, portion",
    parts: "δαίς, δαιτός, ἡ",
    example: {
      ref: "Od. 1.225",
      greek: "τίς δαίς, τίς δὲ ὅμιλος ὅδ’ ἔπλετο;",
      english: "what ______, what gathering is this?",
      blank: "feast"
    }
  },
  {
    day: 3, lemma: "εἰλαπίνη", pos: "ἡ", gloss: "festive banquet",
    parts: "εἰλαπίνη, -ης, ἡ",
    example: {
      ref: "Od. 1.226",
      greek: "εἰλαπίνη ἠὲ γάμος;",
      english: "is it a ______ or a wedding?",
      blank: "banquet"
    }
  },
  {
    day: 3, lemma: "σῖτος", pos: "ὁ", gloss: "grain, bread, food",
    parts: "σῖτος, -ου, ὁ",
    example: {
      ref: "Od. 1.139",
      greek: "σῖτον δ’ αἰδοίη ταμίη παρέθηκε",
      english: "and the discreet housekeeper set ______ beside them",
      blank: "bread / food"
    }
  },
  {
    day: 3, lemma: "κρέας", pos: "τό", gloss: "meat, flesh",
    parts: "κρέας, κρέαος, τό (pl. κρέα)",
    example: {
      ref: "Od. 1.112",
      greek: "τοὶ δὲ κρέα πολλὰ δατεῦντο",
      english: "and others were portioning out many ______",
      blank: "meats"
    }
  },
  {
    day: 3, lemma: "οἶνος", pos: "ὁ", gloss: "wine",
    parts: "οἶνος, -ου, ὁ",
    example: {
      ref: "Od. 1.110",
      greek: "οἶνον ἔμισγον ἐνὶ κρητῆρσι καὶ ὕδωρ",
      english: "they mixed ______ and water in bowls",
      blank: "wine"
    }
  },
  {
    day: 3, lemma: "πόσις", pos: "ἡ", gloss: "drink; also husband (different accent/usage)",
    parts: "πόσις, -εως, ἡ “drink”; πόσις, ὁ “husband”",
    example: {
      ref: "Od. 1.150",
      greek: "ἐπεὶ πόσιος καὶ ἐδητύος ἐξ ἔρον ἕντο",
      english: "when they had put away desire of ______ and food",
      blank: "drink"
    }
  },
  {
    day: 3, lemma: "ἐδητύς", pos: "ἡ", gloss: "food, eating",
    parts: "ἐδητύς, -ύος, ἡ",
    example: {
      ref: "Od. 1.150",
      greek: "πόσιος καὶ ἐδητύος",
      english: "of drink and ______",
      blank: "food"
    }
  },
  {
    day: 3, lemma: "βίοτος", pos: "ὁ", gloss: "livelihood, substance, life",
    parts: "βίοτος, -ου, ὁ",
    example: {
      ref: "Od. 1.160",
      greek: "ἀλλότριον βίοτον νήποινον ἔδουσιν",
      english: "they eat another’s ______ without atonement",
      blank: "livelihood"
    }
  },
  {
    day: 3, lemma: "κτῆμα", pos: "τό", gloss: "possession, property",
    parts: "κτῆμα, -ατος, τό",
    example: {
      ref: "Od. 1.375",
      greek: "ὑμὰ κτήματ’ ἔδοντες",
      english: "eating your own ______",
      blank: "possessions"
    }
  },
  {
    day: 3, lemma: "ὑβρις", pos: "ἡ", gloss: "outrage, arrogance, violence",
    parts: "ὕβρις, -εως, ἡ",
    example: {
      ref: "Od. 1.368",
      greek: "μητρὸς ἐμῆς μνηστῆρες ὑπέρβιον ὕβριν ἔχοντες",
      english: "suitors of my mother, having overweening ______",
      blank: "outrage / insolence"
    }
  },
  {
    day: 3, lemma: "ἀνάγκη", pos: "ἡ", gloss: "necessity, force, constraint",
    parts: "ἀνάγκη, -ης, ἡ",
    example: {
      ref: "Od. 1.154",
      greek: "ὅς ῥ’ ἤειδε παρὰ μνηστῆρσιν ἀνάγκῃ",
      english: "who sang among the suitors by ______",
      blank: "necessity / force"
    }
  },
  {
    day: 3, lemma: "αἰδώς", pos: "ἡ", gloss: "shame, respect, reverence",
    parts: "αἰδώς, -οῦς, ἡ",
    example: {
      ref: "Od. 9.269 (theme)",
      greek: "ἀλλ’ αἰδεῖο, φέριστε, θεούς",
      english: "but respect the gods — the force of ______",
      blank: "reverence / shame"
    }
  },
  {
    day: 3, lemma: "φιλέω", pos: "verb", gloss: "love; welcome as guest",
    parts: "φιλέω, φιλήσω, ἐφίλησα",
    example: {
      ref: "Od. 1.123",
      greek: "παρ’ ἄμμι φιλήσεαι",
      english: "you shall be ______ among us",
      blank: "welcomed / treated as a friend"
    }
  },
  {
    day: 3, lemma: "ξενίζω", pos: "verb", gloss: "receive as guest",
    parts: "ξενίζω",
    example: {
      ref: "Od. 3.355 (theme)",
      greek: "ξεῖνον … φιλεῖν",
      english: "to show hospitality — verb family of ______",
      blank: "hosting"
    }
  },
  {
    day: 3, lemma: "πέμπω", pos: "verb", gloss: "send; escort, give conveyance",
    parts: "πέμπω, πέμψω, ἔπεμψα",
    example: {
      ref: "Od. 1.84",
      greek: "Ἑρμείαν μὲν ἔπειτα … ὀτρύνομεν",
      english: "(send Hermes) related: the gods ______ Odysseus home via Phaeacians",
      blank: "send / escort"
    }
  },
  {
    day: 3, lemma: "πομπή", pos: "ἡ", gloss: "escort, sending-off, conveyance home",
    parts: "πομπή, -ῆς, ἡ",
    example: {
      ref: "Od. 5.32",
      greek: "οὔτε θεῶν πομπῇ οὔτε θνητῶν ἀνθρώπων",
      english: "neither by ______ of gods nor of mortal men",
      blank: "escort / conveyance"
    }
  },

  // ——— DAY 4: Body, force, fate (40) ———
  {
    day: 4, lemma: "χεῖρ", pos: "ἡ", gloss: "hand",
    parts: "χείρ, χειρός, ἡ · dat. pl. χερσί(ν)",
    example: {
      ref: "Od. 1.121",
      greek: "χεῖρ’ ἕλε δεξιτερὴν",
      english: "he took her right ______",
      blank: "hand"
    }
  },
  {
    day: 4, lemma: "πούς", pos: "ὁ", gloss: "foot",
    parts: "πούς, ποδός, ὁ · dat. pl. ποσσί / πόδεσσι",
    example: {
      ref: "Od. 1.96",
      greek: "ὑπὸ ποσσὶν ἐδήσατο καλὰ πέδιλα",
      english: "she bound fair sandals under her ______",
      blank: "feet"
    }
  },
  {
    day: 4, lemma: "κεφαλή", pos: "ἡ", gloss: "head",
    parts: "κεφαλή, -ῆς, ἡ",
    example: {
      ref: "Od. 1.208",
      greek: "αἰνῶς μὲν κεφαλήν τε καὶ ὄμματα καλὰ ἔοικας",
      english: "wondrously like him are you in ______ and fine eyes",
      blank: "head"
    }
  },
  {
    day: 4, lemma: "ὄμμα", pos: "τό", gloss: "eye",
    parts: "ὄμμα, -ατος, τό",
    example: {
      ref: "Od. 1.208",
      greek: "κεφαλήν τε καὶ ὄμματα καλὰ",
      english: "head and beautiful ______",
      blank: "eyes"
    }
  },
  {
    day: 4, lemma: "ὀφθαλμός", pos: "ὁ", gloss: "eye",
    parts: "ὀφθαλμός, -οῦ, ὁ",
    example: {
      ref: "Od. 1.69",
      greek: "ὃν ὀφθαλμοῦ ἀλάωσεν",
      english: "whom he blinded of his ______",
      blank: "eye"
    }
  },
  {
    day: 4, lemma: "στόμα", pos: "τό", gloss: "mouth",
    parts: "στόμα, -ατος, τό",
    example: {
      ref: "Od. 1.64",
      greek: "ποῖόν σε ἔπος φύγεν ἕρκος ὀδόντων",
      english: "what word escaped the barrier of your teeth (______ area)",
      blank: "mouth"
    }
  },
  {
    day: 4, lemma: "ὀδούς", pos: "ὁ", gloss: "tooth",
    parts: "ὀδούς, ὀδόντος, ὁ",
    example: {
      ref: "Od. 1.64",
      greek: "ἕρκος ὀδόντων",
      english: "the fence of the ______",
      blank: "teeth"
    }
  },
  {
    day: 4, lemma: "γυῖον", pos: "τό", gloss: "limb",
    parts: "γυῖον, -ου, τό (pl. γυῖα)",
    example: {
      ref: "Od. 1.192",
      greek: "εὖτ’ ἄν μιν κάματος κατὰ γυῖα λάβῃσιν",
      english: "when weariness seizes his ______",
      blank: "limbs"
    }
  },
  {
    day: 4, lemma: "γόνυ", pos: "τό", gloss: "knee",
    parts: "γόνυ, γούνατος, τό",
    example: {
      ref: "Od. 1.267",
      greek: "θεῶν ἐν γούνασι κεῖται",
      english: "it lies on the ______ of the gods",
      blank: "knees"
    }
  },
  {
    day: 4, lemma: "στῆθος", pos: "τό", gloss: "breast, chest",
    parts: "στῆθος, -εος, τό",
    example: {
      ref: "Od. 1.341",
      greek: "ἐνὶ στήθεσσι φίλον κῆρ",
      english: "the dear heart in the ______",
      blank: "breast"
    }
  },
  {
    day: 4, lemma: "μένος", pos: "τό", gloss: "might, force, fighting spirit",
    parts: "μένος, -εος, τό",
    example: {
      ref: "Od. 1.89",
      greek: "καί οἱ μένος ἐν φρεσὶ θείω",
      english: "and put ______ in his breast",
      blank: "might / courage"
    }
  },
  {
    day: 4, lemma: "βίη", pos: "ἡ", gloss: "force, violence, bodily strength",
    parts: "βίη, -ης, ἡ · βίηφι",
    example: {
      ref: "Od. 1.403",
      greek: "ὅς τίς σ’ ἀέκοντα βίηφιν",
      english: "whoever by ______ against your will…",
      blank: "force"
    }
  },
  {
    day: 4, lemma: "ἴς", pos: "ἡ", gloss: "sinew, strength",
    parts: "ἴς, ἰνός, ἡ",
    example: {
      ref: "Od. 9.214 (theme)",
      greek: "ἶνες",
      english: "______ / sinews",
      blank: "sinews"
    }
  },
  {
    day: 4, lemma: "ἀλκή", pos: "ἡ", gloss: "prowess, defense, valor",
    parts: "ἀλκή, -ῆς, ἡ",
    example: {
      ref: "Od. 1.99",
      greek: "εἵλετο δ’ ἄλκιμον ἔγχος",
      english: "and she took a ______ spear",
      blank: "mighty / valorous"
    }
  },
  {
    day: 4, lemma: "ἔγχος", pos: "τό", gloss: "spear",
    parts: "ἔγχος, -εος, τό",
    example: {
      ref: "Od. 1.99",
      greek: "εἵλετο δ’ ἄλκιμον ἔγχος",
      english: "and she took a mighty ______",
      blank: "spear"
    }
  },
  {
    day: 4, lemma: "δόρυ", pos: "τό", gloss: "spear, timber, ship’s beam",
    parts: "δόρυ, δόρατος, τό",
    example: {
      ref: "Od. 1.256",
      greek: "ἔχων πήληκα καὶ ἀσπίδα καὶ δύο δοῦρε",
      english: "holding helmet and shield and two ______",
      blank: "spears"
    }
  },
  {
    day: 4, lemma: "ἀσπίς", pos: "ἡ", gloss: "shield",
    parts: "ἀσπίς, -ίδος, ἡ",
    example: {
      ref: "Od. 1.256",
      greek: "πήληκα καὶ ἀσπίδα καὶ δύο δοῦρε",
      english: "helmet and ______ and two spears",
      blank: "shield"
    }
  },
  {
    day: 4, lemma: "πήληξ", pos: "ἡ", gloss: "helmet",
    parts: "πήληξ, -ηκος, ἡ",
    example: {
      ref: "Od. 1.256",
      greek: "ἔχων πήληκα καὶ ἀσπίδα",
      english: "holding a ______ and a shield",
      blank: "helmet"
    }
  },
  {
    day: 4, lemma: "χαλκός", pos: "ὁ", gloss: "bronze; bronze weapon",
    parts: "χαλκός, -οῦ, ὁ",
    example: {
      ref: "Od. 1.99",
      greek: "ἀκαχμένον ὀξέι χαλκῷ",
      english: "tipped with sharp ______",
      blank: "bronze"
    }
  },
  {
    day: 4, lemma: "σίδηρος", pos: "ὁ", gloss: "iron",
    parts: "σίδηρος, -ου, ὁ",
    example: {
      ref: "Od. 1.184",
      greek: "ἄγω δ’ αἴθωνα σίδηρον",
      english: "and I carry shining ______",
      blank: "iron"
    }
  },
  {
    day: 4, lemma: "χρυσός", pos: "ὁ", gloss: "gold",
    parts: "χρυσός, -οῦ, ὁ",
    example: {
      ref: "Od. 1.165",
      greek: "ἀφνειότεροι χρυσοῖό τε ἐσθῆτός τε",
      english: "richer in ______ and raiment",
      blank: "gold"
    }
  },
  {
    day: 4, lemma: "ἄλγος", pos: "τό", gloss: "pain, woe",
    parts: "ἄλγος, -εος, τό",
    example: {
      ref: "Od. 1.4",
      greek: "πάθεν ἄλγεα ὃν κατὰ θυμόν",
      english: "he suffered ______ in his heart",
      blank: "pains / woes"
    }
  },
  {
    day: 4, lemma: "πῆμα", pos: "τό", gloss: "misery, calamity",
    parts: "πῆμα, -ατος, τό",
    example: {
      ref: "Od. 1.49",
      greek: "φίλων ἄπο πήματα πάσχει",
      english: "suffers ______ far from his friends",
      blank: "miseries"
    }
  },
  {
    day: 4, lemma: "πένθος", pos: "τό", gloss: "grief, mourning",
    parts: "πένθος, -εος, τό",
    example: {
      ref: "Od. 1.342",
      greek: "ἐπεί με μάλιστα καθίκετο πένθος ἄλαστον",
      english: "since unforgettable ______ has especially come upon me",
      blank: "grief"
    }
  },
  {
    day: 4, lemma: "ὀδύνη", pos: "ἡ", gloss: "pain, distress",
    parts: "ὀδύνη, -ης, ἡ",
    example: {
      ref: "Od. 1.242",
      greek: "ἐμοὶ δ’ ὀδύνας τε γόους τε κάλλιπεν",
      english: "and to me he left ______ and lamentations",
      blank: "pains"
    }
  },
  {
    day: 4, lemma: "γόος", pos: "ὁ", gloss: "wailing, lament",
    parts: "γόος, -ου, ὁ",
    example: {
      ref: "Od. 1.242",
      greek: "ὀδύνας τε γόους τε",
      english: "pains and ______",
      blank: "wailing"
    }
  },
  {
    day: 4, lemma: "ὄλεθρος", pos: "ὁ", gloss: "destruction, death",
    parts: "ὄλεθρος, -ου, ὁ",
    example: {
      ref: "Od. 1.11",
      greek: "ὅσοι φύγον αἰπὺν ὄλεθρον",
      english: "as many as escaped sheer ______",
      blank: "destruction"
    }
  },
  {
    day: 4, lemma: "μόρος", pos: "ὁ", gloss: "fate, doom, death",
    parts: "μόρος, -ου, ὁ",
    example: {
      ref: "Od. 1.34",
      greek: "ὑπὲρ μόρον ἄλγε’ ἔχουσιν",
      english: "they have pains beyond ______",
      blank: "fate / what is allotted"
    }
  },
  {
    day: 4, lemma: "μοῖρα", pos: "ἡ", gloss: "portion, lot, fate",
    parts: "μοῖρα, -ας, ἡ",
    example: {
      ref: "Od. 5.41",
      greek: "ὣς γάρ οἱ μοῖρ’ ἐστί",
      english: "for so it is his ______",
      blank: "lot / fate"
    }
  },
  {
    day: 4, lemma: "αἶσα", pos: "ἡ", gloss: "allotted share, fate",
    parts: "αἶσα, -ης, ἡ",
    example: {
      ref: "Od. 5.40",
      greek: "λαχὼν ἀπὸ ληίδος αἶσαν",
      english: "having obtained a ______ from the spoil",
      blank: "share"
    }
  },
  {
    day: 4, lemma: "πότμος", pos: "ὁ", gloss: "lot, death, destiny",
    parts: "πότμος, -ου, ὁ",
    example: {
      ref: "Od. 1.166",
      greek: "ὣς ἀπόλωλε κακὸν μόρον",
      english: "(related doom vocabulary) he has perished by an evil ______",
      blank: "fate"
    }
  },
  {
    day: 4, lemma: "πάσχω", pos: "verb", gloss: "suffer, experience",
    parts: "πάσχω, πείσομαι, ἔπαθον",
    example: {
      ref: "Od. 1.4",
      greek: "πάθεν ἄλγεα",
      english: "he ______ pains",
      blank: "suffered"
    }
  },
  {
    day: 4, lemma: "ὄλλυμι", pos: "verb", gloss: "destroy; mid. perish",
    parts: "ὄλλυμι, ὀλέσω, ὤλεσα · mid. ὀλέσθαι",
    example: {
      ref: "Od. 1.7",
      greek: "αὐτῶν γὰρ σφετέρῃσιν ἀτασθαλίῃσιν ὄλοντο",
      english: "for by their own blind folly they ______",
      blank: "perished"
    }
  },
  {
    day: 4, lemma: "κτείνω", pos: "verb", gloss: "kill, slay",
    parts: "κτείνω, κτενῶ, ἔκτεινα / ἔκτανον",
    example: {
      ref: "Od. 1.30",
      greek: "τόν ῥ’ Ἀγαμεμνονίδης … ἔκταν’ Ὀρέστης",
      english: "whom Orestes ______",
      blank: "slew"
    }
  },
  {
    day: 4, lemma: "θνῄσκω", pos: "verb", gloss: "die",
    parts: "θνῄσκω, θανοῦμαι, ἔθανον · τέθνηκα",
    example: {
      ref: "Od. 1.196",
      greek: "οὐ γάρ πω τέθνηκεν",
      english: "for not yet has he ______",
      blank: "died"
    }
  },
  {
    day: 4, lemma: "δαμάζω", pos: "verb", gloss: "tame, overpower, kill",
    parts: "δαμάζω / δάμνημι",
    example: {
      ref: "Od. 1.100",
      greek: "τῷ δάμνησι στίχας ἀνδρῶν",
      english: "with which she ______ the ranks of men",
      blank: "overpowers"
    }
  },
  {
    day: 4, lemma: "τίσις", pos: "ἡ", gloss: "vengeance, recompense",
    parts: "τίσις, -εως, ἡ",
    example: {
      ref: "Od. 1.40",
      greek: "ἐκ γὰρ Ὀρέσταο τίσις ἔσσεται",
      english: "for from Orestes ______ will come",
      blank: "vengeance"
    }
  },
  {
    day: 4, lemma: "ἀποτίνω", pos: "verb", gloss: "pay back, avenge, atone",
    parts: "ἀποτίνω, -τείσω, -έτεισα",
    example: {
      ref: "Od. 1.43",
      greek: "νῦν δ’ ἁθρόα πάντ’ ἀπέτισεν",
      english: "and now he has ______ all together",
      blank: "paid for / atoned"
    }
  },
  {
    day: 4, lemma: "εὖχος", pos: "τό", gloss: "boast, thing prayed for, glory of victory",
    parts: "εὖχος, -εος, τό",
    example: {
      ref: "Od. 22.7 (theme)",
      greek: "εὖχος",
      english: "the ______ of triumph",
      blank: "boast / glory"
    }
  },

  // ——— DAY 5: Gods, craft, everyday epic (40) ———
  {
    day: 5, lemma: "ἀθάνατος", pos: "adj.", gloss: "immortal",
    parts: "ἀθάνατος, -ον",
    example: {
      ref: "Od. 1.31",
      greek: "ἔπε’ ἀθανάτοισι μετηύδα",
      english: "he spoke words among the ______",
      blank: "immortals"
    }
  },
  {
    day: 5, lemma: "θνητός", pos: "adj.", gloss: "mortal",
    parts: "θνητός, -ή, -όν",
    example: {
      ref: "Od. 1.32",
      greek: "οἷον δή νυ θεοὺς βροτοὶ αἰτιόωνται",
      english: "(mortals blame gods) — ______ = mortal",
      blank: "mortal"
    }
  },
  {
    day: 5, lemma: "βροτός", pos: "ὁ", gloss: "mortal man",
    parts: "βροτός, -οῦ, ὁ",
    example: {
      ref: "Od. 1.32",
      greek: "οἷον δή νυ θεοὺς βροτοὶ αἰτιόωνται",
      english: "how ready ______ are to blame the gods",
      blank: "mortals"
    }
  },
  {
    day: 5, lemma: "μάκαρ", pos: "adj.", gloss: "blessed (of gods)",
    parts: "μάκαρ, -αρος",
    example: {
      ref: "Od. 1.82",
      greek: "εἰ μὲν δὴ νῦν τοῦτο φίλον μακάρεσσι θεοῖσιν",
      english: "if this is now pleasing to the ______ gods",
      blank: "blessed"
    }
  },
  {
    day: 5, lemma: "δῖος", pos: "adj.", gloss: "divine, noble, glorious",
    parts: "δῖος, δῖα, δῖον",
    example: {
      ref: "Od. 1.14",
      greek: "Καλυψὼ δῖα θεάων",
      english: "Calypso, ______ among goddesses",
      blank: "bright / divine"
    }
  },
  {
    day: 5, lemma: "ἱερός", pos: "adj.", gloss: "holy, sacred",
    parts: "ἱερός, -ή, -όν / ἱρός",
    example: {
      ref: "Od. 1.2",
      greek: "Τροίης ἱερὸν πτολίεθρον",
      english: "the ______ citadel of Troy",
      blank: "sacred"
    }
  },
  {
    day: 5, lemma: "ἦμαρ", pos: "τό", gloss: "day",
    parts: "ἦμαρ, ἤματος, τό",
    example: {
      ref: "Od. 1.9",
      greek: "ἀφείλετο νόστιμον ἦμαρ",
      english: "he took away the day of return — the ______ of homecoming",
      blank: "day"
    }
  },
  {
    day: 5, lemma: "ἠώς", pos: "ἡ", gloss: "dawn",
    parts: "ἠώς, ἠοῦς, ἡ",
    example: {
      ref: "Od. 5.1",
      greek: "Ἠὼς δ’ ἐκ λεχέων … ὤρνυτο",
      english: "and ______ rose from her bed",
      blank: "Dawn"
    }
  },
  {
    day: 5, lemma: "νύξ", pos: "ἡ", gloss: "night",
    parts: "νύξ, νυκτός, ἡ",
    example: {
      ref: "Od. 1.443",
      greek: "ἔνθ’ ὅ γε παννύχιος … βούλευε",
      english: "there all ______ long he planned",
      blank: "night"
    }
  },
  {
    day: 5, lemma: "ἔτος", pos: "τό", gloss: "year",
    parts: "ἔτος, -εος, τό",
    example: {
      ref: "Od. 1.16",
      greek: "ἀλλ’ ὅτε δὴ ἔτος ἦλθε",
      english: "but when the ______ came",
      blank: "year"
    }
  },
  {
    day: 5, lemma: "ἐνιαυτός", pos: "ὁ", gloss: "year, anniversary cycle",
    parts: "ἐνιαυτός, -οῦ, ὁ",
    example: {
      ref: "Od. 1.16",
      greek: "περιπλομένων ἐνιαυτῶν",
      english: "as the ______ revolved",
      blank: "years"
    }
  },
  {
    day: 5, lemma: "αἰεί", pos: "adv.", gloss: "always, forever",
    parts: "αἰεί / αἰέν / ἀεί",
    example: {
      ref: "Od. 1.56",
      greek: "αἰεὶ δὲ μαλακοῖσι … λόγοισιν θέλγει",
      english: "and she ______ charms him with soft words",
      blank: "always"
    }
  },
  {
    day: 5, lemma: "αἶψα", pos: "adv.", gloss: "quickly, forthwith",
    parts: "αἶψα",
    example: {
      ref: "Od. 1.392",
      greek: "αἶψά τέ οἱ δῶ ἀφνειὸν πέλεται",
      english: "and ______ his house becomes rich",
      blank: "quickly"
    }
  },
  {
    day: 5, lemma: "ὦκα", pos: "adv.", gloss: "swiftly",
    parts: "ὦκα / ὠκύς related",
    example: {
      ref: "Od. 5.243 (theme)",
      greek: "ὦκα",
      english: "______ / swiftly",
      blank: "swiftly"
    }
  },
  {
    day: 5, lemma: "μάλα", pos: "adv.", gloss: "very, quite, exceedingly",
    parts: "μάλα · μᾶλλον · μάλιστα",
    example: {
      ref: "Od. 1.1",
      greek: "ὃς μάλα πολλὰ πλάγχθη",
      english: "who was driven ______ many ways",
      blank: "very / full"
    }
  },
  {
    day: 5, lemma: "λίην", pos: "adv.", gloss: "exceedingly, too much",
    parts: "λίην / λίαν",
    example: {
      ref: "Od. 1.46",
      greek: "καὶ λίην κεῖνός γε ἐοικότι κεῖται ὀλέθρῳ",
      english: "and ______ does that man lie in a fitting destruction",
      blank: "truly / very much"
    }
  },
  {
    day: 5, lemma: "ἄρα", pos: "particle", gloss: "then, so, as it turns out",
    parts: "ἄρα / ῥα / ῥ’",
    example: {
      ref: "Od. 1.30",
      greek: "τόν ῥ’ Ἀγαμεμνονίδης … ἔκταν’",
      english: "whom ______ Orestes slew",
      blank: "(then / particle)"
    }
  },
  {
    day: 5, lemma: "αὐτάρ", pos: "particle", gloss: "but, and then",
    parts: "αὐτάρ / ἀτάρ",
    example: {
      ref: "Od. 1.57",
      greek: "αὐτὰρ Ὀδυσσεύς, ἱέμενος…",
      english: "______ Odysseus, yearning…",
      blank: "but"
    }
  },
  {
    day: 5, lemma: "ἤτοι", pos: "particle", gloss: "indeed, now surely",
    parts: "ἦ τοι / ἤτοι",
    example: {
      ref: "Od. 1.155",
      greek: "ἦ τοι ὁ φορμίζων ἀνεβάλλετο",
      english: "______ he struck up a prelude on the lyre",
      blank: "indeed / now"
    }
  },
  {
    day: 5, lemma: "δηθά", pos: "adv.", gloss: "long, for a long time",
    parts: "δηθά / δηρόν",
    example: {
      ref: "Od. 1.49",
      greek: "ὃς δὴ δηθὰ φίλων ἄπο πήματα πάσχει",
      english: "who ______ suffers woes far from friends",
      blank: "long / for a long time"
    }
  },
  {
    day: 5, lemma: "τάχα", pos: "adv.", gloss: "quickly; perhaps",
    parts: "τάχα",
    example: {
      ref: "Od. 1.251",
      greek: "τάχα δή με διαρραίσουσι καὶ αὐτόν",
      english: "______ they will smash me too",
      blank: "soon"
    }
  },
  {
    day: 5, lemma: "ὄφρα", pos: "conj.", gloss: "so that; until; while",
    parts: "ὄφρα",
    example: {
      ref: "Od. 1.85",
      greek: "ὄφρα τάχιστα … εἴπῃ",
      english: "______ as quickly as possible he may tell…",
      blank: "so that"
    }
  },
  {
    day: 5, lemma: "εὖτε", pos: "conj.", gloss: "when, whenever",
    parts: "εὖτε",
    example: {
      ref: "Od. 1.192",
      greek: "εὖτ’ ἄν μιν κάματος κατὰ γυῖα λάβῃσιν",
      english: "______ weariness seizes his limbs",
      blank: "when"
    }
  },
  {
    day: 5, lemma: "ἠμέν … ἠδέ", pos: "conj.", gloss: "both … and",
    parts: "ἠμέν … ἠδέ",
    example: {
      ref: "Od. 1.97",
      greek: "ἠμὲν ἐφ’ ὑγρὴν ἠδ’ ἐπ’ ἀπείρονα γαῖαν",
      english: "______ over the waters ______ over the boundless land",
      blank: "both … and"
    }
  },
  {
    day: 5, lemma: "ἠδέ", pos: "conj.", gloss: "and",
    parts: "ἠδέ",
    example: {
      ref: "Od. 1.12",
      greek: "πόλεμόν τε πεφευγότες ἠδὲ θάλασσαν",
      english: "having escaped war ______ the sea",
      blank: "and"
    }
  },
  {
    day: 5, lemma: "ἰδέ", pos: "conj.", gloss: "and (epic)",
    parts: "ἰδέ",
    example: {
      ref: "Od. 3.10 (theme)",
      greek: "ἰδέ",
      english: "______ (and)",
      blank: "and"
    }
  },
  {
    day: 5, lemma: "τε", pos: "particle", gloss: "and; epic generalizing τε",
    parts: "τε (enclitic)",
    example: {
      ref: "Od. 1.338",
      greek: "τά τε κλείουσιν ἀοιδοί",
      english: "things which ______ bards glorify",
      blank: "(and / generalizing)"
    }
  },
  {
    day: 5, lemma: "ῥέζω", pos: "verb", gloss: "do, accomplish; offer (sacrifice)",
    parts: "ῥέζω, ῥέξω, ἔρεξα",
    example: {
      ref: "Od. 1.47",
      greek: "ὅτις τοιαῦτά γε ῥέζοι",
      english: "whoever should ______ such things",
      blank: "do"
    }
  },
  {
    day: 5, lemma: "τεύχω", pos: "verb", gloss: "make, build, cause",
    parts: "τεύχω, τεύξω, ἔτευξα",
    example: {
      ref: "Od. 1.244",
      greek: "θεοὶ κακὰ κήδε’ ἔτευξαν",
      english: "the gods have ______ evil troubles",
      blank: "wrought / caused"
    }
  },
  {
    day: 5, lemma: "τίθημι", pos: "verb", gloss: "put, place, make",
    parts: "τίθημι, θήσω, ἔθηκα",
    example: {
      ref: "Od. 1.321",
      greek: "θῆκε μένος καὶ θάρσος",
      english: "she ______ strength and courage",
      blank: "put / placed"
    }
  },
  {
    day: 5, lemma: "ἵημι", pos: "verb", gloss: "send, let go; mid. hurry",
    parts: "ἵημι, ἥσω, ἧκα",
    example: {
      ref: "Od. 1.6",
      greek: "ἱέμενός περ",
      english: "though ______ (eager)",
      blank: "eager / striving"
    }
  },
  {
    day: 5, lemma: "ὄρνυμι", pos: "verb", gloss: "rouse, stir up; mid. rise",
    parts: "ὄρνυμι, ὄρσω, ὦρσα · ὤρτο",
    example: {
      ref: "Od. 5.2",
      greek: "ὤρνυθ’ ἵν’ ἀθανάτοισι φόως φέροι",
      english: "she ______ to bring light to immortals",
      blank: "rose / stirred"
    }
  },
  {
    day: 5, lemma: "μέλω", pos: "verb", gloss: "be a care to (dat.); mid. care for",
    parts: "μέλω · μέμηλε",
    example: {
      ref: "Od. 1.151",
      greek: "τοῖσιν μὲν ἐνὶ φρεσὶν ἄλλα μεμήλει",
      english: "other things were a ______ to them in their minds",
      blank: "care / concern"
    }
  },
  {
    day: 5, lemma: "χρή", pos: "impersonal", gloss: "it is necessary; one must",
    parts: "χρή · χρεώ",
    example: {
      ref: "Od. 1.124",
      greek: "μυθήσεαι ὅττεό σε χρή",
      english: "you shall say what you ______",
      blank: "need / must"
    }
  },
  {
    day: 5, lemma: "ἄναξ", pos: "ὁ", gloss: "lord, master, king",
    parts: "ἄναξ, ἄνακτος, ὁ",
    example: {
      ref: "Od. 1.397",
      greek: "αὐτὰρ ἐγὼν οἴκοιο ἄναξ ἔσομ’ ἡμετέροιο",
      english: "but I shall be ______ of our own house",
      blank: "lord"
    }
  },
  {
    day: 5, lemma: "λαός", pos: "ὁ", gloss: "people, host",
    parts: "λαός, -οῦ, ὁ",
    example: {
      ref: "Od. 1.12",
      greek: "(cf. ruling peoples) λαῶν οἷσιν ἄνασσε",
      english: "the ______ over whom he ruled",
      blank: "people"
    }
  },
  {
    day: 5, lemma: "δῆμος", pos: "ὁ", gloss: "district, people, land",
    parts: "δῆμος, -ου, ὁ",
    example: {
      ref: "Od. 1.103",
      greek: "στῆ δ’ Ἰθάκης ἐνὶ δήμῳ",
      english: "and she stood in the ______ of Ithaca",
      blank: "land / district"
    }
  },
  {
    day: 5, lemma: "ἀγρός", pos: "ὁ", gloss: "field, country (vs. town)",
    parts: "ἀγρός, -οῦ, ὁ",
    example: {
      ref: "Od. 1.185",
      greek: "ἐπ’ ἀγροῦ νόσφι πόληος",
      english: "in the ______ away from the city",
      blank: "country / fields"
    }
  },
  {
    day: 5, lemma: "ἄρουρα", pos: "ἡ", gloss: "arable land, soil",
    parts: "ἄρουρα, -ας, ἡ",
    example: {
      ref: "Od. 1.407",
      greek: "ποῦ δέ νύ οἱ γενεὴ καὶ πατρὶς ἄρουρα",
      english: "where is his lineage and native ______?",
      blank: "soil / land"
    }
  }
];

// Fix: remove the weak ἴστωρ entry utility — keep for count; day totals ~40 each
// Helper accessors
function vocabByDay(day) {
  return VOCAB.filter(v => v.day === day);
}

function vocabAll() {
  return VOCAB.slice();
}
