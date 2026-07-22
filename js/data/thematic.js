/* ============================================================================
   THEMATIC VOCABULARY SCENES
   Classical vase-line drawings (ink + gold on parchment — three colours only)
   with clickable hotspots over each depicted word.

   Word shape:
     { id, lemma, parts, gloss, x, y }
       lemma  — headword as displayed large (verbs: 1st sg. pres. indic.)
       parts  — principal parts (verbs) or gen. + article (nouns)
       gloss  — one or two of the commonest meanings
       x, y   — hotspot position as % of the drawing

   Scenes may also carry `extras`: words that belong to the theme but cannot
   be drawn (particles, abstractions, adjectives). These are listed below the
   image instead of being given a marker.
   ========================================================================= */

const THEMATIC_SCENES = [
  {
    id: "sky-weather",
    title: "Sky, Weather & Light",
    blurb: "Dawn, sun, star, cloud and wind — the upper world of the epic.",
    scene: "sky",
    image: "assets/thematic/sky.jpg",
    imageW: 1248,
    imageH: 832,
    words: [
      { id: "s1", lemma: "ἠώς", parts: "ἠώς, ἠοῦς, ἡ", gloss: "dawn; daybreak", x: 44, y: 47 },
      { id: "s2", lemma: "ἠέλιος", parts: "ἠέλιος, ἠελίοιο, ὁ", gloss: "sun", x: 55, y: 41 },
      { id: "s3", lemma: "σελήνη", parts: "σελήνη, σελήνης, ἡ", gloss: "moon", x: 85, y: 15 },
      { id: "s4", lemma: "ἀστήρ", parts: "ἀστήρ, ἀστέρος, ὁ", gloss: "star", x: 15, y: 18 },
      { id: "s5", lemma: "οὐρανός", parts: "οὐρανός, οὐρανοῦ, ὁ", gloss: "sky, heaven", x: 33, y: 12 },
      { id: "s6", lemma: "νεφέλη", parts: "νεφέλη, νεφέλης, ἡ", gloss: "cloud", x: 88, y: 40 },
      { id: "s7", lemma: "ἄνεμος", parts: "ἄνεμος, ἀνέμου, ὁ", gloss: "wind", x: 80, y: 70 },
      { id: "s8", lemma: "ὄμβρος", parts: "ὄμβρος, ὄμβρου, ὁ", gloss: "rainstorm, downpour", x: 66, y: 16 },
      { id: "s9", lemma: "ὄρνις", parts: "ὄρνις, ὄρνιθος, ὁ/ἡ", gloss: "bird; omen", x: 38, y: 36 },
      { id: "s10", lemma: "φάος", parts: "φάος, φάεος, τό", gloss: "light; daylight", x: 49, y: 33 },
      { id: "s11", lemma: "ὄρος", parts: "ὄρος, ὄρεος, τό", gloss: "mountain", x: 17, y: 45 },
      { id: "s12", lemma: "σκιή", parts: "σκιή, σκιῆς, ἡ", gloss: "shadow, shade", x: 22, y: 76 }
    ],
    extras: [
      { lemma: "αἰθήρ", parts: "αἰθήρ, αἰθέρος, ὁ/ἡ", gloss: "the upper air, bright sky", why: "a region, not an object" },
      { lemma: "ἠερόεις", parts: "ἠερόεις, -εσσα, -εν", gloss: "misty, gloomy", why: "adjective" },
      { lemma: "δῖος", parts: "δῖος, -α, -ον", gloss: "bright, heavenly, divine", why: "adjective" }
    ]
  },

  {
    id: "earth-plants",
    title: "Earth, Land & Growing Things",
    blurb: "Soil, field, tree and vine — the worked and wooded world.",
    scene: "earth",
    image: "assets/thematic/earth.jpg",
    imageW: 1248,
    imageH: 832,
    words: [
      { id: "e1", lemma: "γαῖα", parts: "γαῖα, γαίης, ἡ", gloss: "earth, land", x: 63, y: 43 },
      { id: "e2", lemma: "χθών", parts: "χθών, χθονός, ἡ", gloss: "ground, soil", x: 56, y: 95 },
      { id: "e3", lemma: "ἄρουρα", parts: "ἄρουρα, ἀρούρης, ἡ", gloss: "ploughed field, tilth", x: 74, y: 78 },
      { id: "e4", lemma: "ἄροτρον", parts: "ἄροτρον, ἀρότρου, τό", gloss: "plough", x: 48, y: 56 },
      { id: "e5", lemma: "δένδρεον", parts: "δένδρεον, δενδρέου, τό", gloss: "tree", x: 24, y: 20 },
      { id: "e6", lemma: "ὕλη", parts: "ὕλη, ὕλης, ἡ", gloss: "wood, forest; timber", x: 23, y: 49 },
      { id: "e7", lemma: "καρπός", parts: "καρπός, καρποῦ, ὁ", gloss: "fruit; crop", x: 41, y: 74 },
      { id: "e8", lemma: "ἄνθος", parts: "ἄνθος, ἄνθεος, τό", gloss: "flower, bloom", x: 93, y: 80 },
      { id: "e9", lemma: "ἄμπελος", parts: "ἄμπελος, ἀμπέλου, ἡ", gloss: "vine", x: 87, y: 24 },
      { id: "e10", lemma: "σταφυλή", parts: "σταφυλή, σταφυλῆς, ἡ", gloss: "bunch of grapes", x: 87, y: 55 },
      { id: "e11", lemma: "κρήνη", parts: "κρήνη, κρήνης, ἡ", gloss: "spring, fountain", x: 30, y: 83 },
      { id: "e12", lemma: "πέτρη", parts: "πέτρη, πέτρης, ἡ", gloss: "rock, crag", x: 20, y: 63 }
    ],
    extras: [
      { lemma: "πίων", parts: "πίων, πῖον, gen. πίονος", gloss: "rich, fertile", why: "adjective" },
      { lemma: "ζείδωρος", parts: "ζείδωρος, -ον", gloss: "grain-giving (of earth)", why: "adjective" },
      { lemma: "φύω", parts: "φύω, φύσω, ἔφυσα, πέφυκα", gloss: "bring forth; (perf.) grow, be by nature", why: "a process, not a thing" }
    ]
  },

  {
    id: "sea-water",
    title: "Sea, Water & Shore",
    blurb: "The wine-dark sea, the river, the harbour and the strand.",
    scene: "sea",
    words: [
      { id: "w1", lemma: "θάλασσα", parts: "θάλασσα, θαλάσσης, ἡ", gloss: "sea", x: 31, y: 60 },
      { id: "w2", lemma: "πόντος", parts: "πόντος, πόντου, ὁ", gloss: "open sea, the deep", x: 58, y: 52 },
      { id: "w3", lemma: "ἅλς", parts: "ἅλς, ἁλός, ἡ", gloss: "the salt sea; (m.) salt", x: 73, y: 70 },
      { id: "w4", lemma: "κῦμα", parts: "κῦμα, κύματος, τό", gloss: "wave, swell", x: 45, y: 44 },
      { id: "w5", lemma: "ὕδωρ", parts: "ὕδωρ, ὕδατος, τό", gloss: "water", x: 54, y: 68 },
      { id: "w6", lemma: "ποταμός", parts: "ποταμός, ποταμοῦ, ὁ", gloss: "river", x: 11, y: 38 },
      { id: "w7", lemma: "πηγή", parts: "πηγή, πηγῆς, ἡ", gloss: "spring, source", x: 8, y: 17 },
      { id: "w8", lemma: "νῆσος", parts: "νῆσος, νήσου, ἡ", gloss: "island", x: 78, y: 30 },
      { id: "w9", lemma: "ἀκτή", parts: "ἀκτή, ἀκτῆς, ἡ", gloss: "headland, jutting shore", x: 88, y: 50 },
      { id: "w10", lemma: "ἠιών", parts: "ἠιών, ἠιόνος, ἡ", gloss: "beach, strand", x: 63, y: 87 },
      { id: "w11", lemma: "λιμήν", parts: "λιμήν, λιμένος, ὁ", gloss: "harbour, haven", x: 20, y: 80 },
      { id: "w12", lemma: "σπέος", parts: "σπέος, σπείους, τό", gloss: "cave, grotto", x: 91, y: 74 },
      { id: "w13", lemma: "ἰχθύς", parts: "ἰχθύς, ἰχθύος, ὁ", gloss: "fish", x: 40, y: 77 }
    ],
    extras: [
      { lemma: "οἶνοψ", parts: "οἶνοψ, gen. οἴνοπος", gloss: "wine-dark, wine-faced", why: "adjective (epithet of the sea)" },
      { lemma: "ἀτρύγετος", parts: "ἀτρύγετος, -ον", gloss: "unharvested, barren (of sea)", why: "adjective" },
      { lemma: "νόστος", parts: "νόστος, νόστου, ὁ", gloss: "homecoming, return", why: "an idea, not a thing" }
    ]
  },

  {
    id: "ship",
    title: "Ship & Voyage Gear",
    blurb: "Hull, mast, sail and oar — the hollow ship and her crew.",
    scene: "ship",
    words: [
      { id: "n1", lemma: "νηῦς", parts: "νηῦς, νηός, ἡ", gloss: "ship", x: 50, y: 68 },
      { id: "n2", lemma: "ἱστός", parts: "ἱστός, ἱστοῦ, ὁ", gloss: "mast; (also) loom", x: 50, y: 24 },
      { id: "n3", lemma: "ἱστίον", parts: "ἱστίον, ἱστίου, τό", gloss: "sail", x: 60, y: 39 },
      { id: "n4", lemma: "κάλως", parts: "κάλως, κάλω, ὁ", gloss: "rope, cable, brace", x: 35, y: 33 },
      { id: "n5", lemma: "ἐρετμόν", parts: "ἐρετμόν, ἐρετμοῦ, τό", gloss: "oar", x: 24, y: 76 },
      { id: "n6", lemma: "πηδάλιον", parts: "πηδάλιον, πηδαλίου, τό", gloss: "steering-oar, rudder", x: 84, y: 78 },
      { id: "n7", lemma: "πρῷρα", parts: "πρῷρα, πρῴρης, ἡ", gloss: "prow, bow", x: 13, y: 58 },
      { id: "n8", lemma: "πρύμνη", parts: "πρύμνη, πρύμνης, ἡ", gloss: "stern", x: 87, y: 58 },
      { id: "n9", lemma: "τρόπις", parts: "τρόπις, τρόπιος, ἡ", gloss: "keel", x: 50, y: 84 },
      { id: "n10", lemma: "ζυγόν", parts: "ζυγόν, ζυγοῦ, τό", gloss: "rowing-bench, thwart; yoke", x: 39, y: 63 },
      { id: "n11", lemma: "ἑταῖρος", parts: "ἑταῖρος, ἑταίρου, ὁ", gloss: "comrade, companion", x: 66, y: 56 },
      { id: "n12", lemma: "πλέω", parts: "πλέω, πλεύσομαι, ἔπλευσα, πέπλευκα", gloss: "sail, voyage", x: 72, y: 20 },
      { id: "n13", lemma: "ἐρέσσω", parts: "ἐρέσσω, ἐρέσω, ἤρεσα", gloss: "row", x: 27, y: 58 }
    ],
    extras: [
      { lemma: "γλαφυρός", parts: "γλαφυρός, -ή, -όν", gloss: "hollow, hollowed out", why: "adjective (standing epithet of ships)" },
      { lemma: "θοός", parts: "θοός, -ή, -όν", gloss: "swift, quick", why: "adjective" },
      { lemma: "οὖρος", parts: "οὖρος, οὔρου, ὁ", gloss: "fair wind (for sailing)", why: "invisible — see the wind in Sky & Weather" }
    ]
  },

  {
    id: "fighting",
    title: "Fighting, Arms & Death",
    blurb: "Bronze, spear and shield; throwing, fleeing, killing, dying.",
    scene: "fight",
    words: [
      { id: "f1", lemma: "κόρυς", parts: "κόρυς, κόρυθος, ἡ", gloss: "helmet", x: 22, y: 17 },
      { id: "f2", lemma: "θώρηξ", parts: "θώρηξ, θώρηκος, ὁ", gloss: "breastplate, corslet", x: 24, y: 37 },
      { id: "f3", lemma: "ἀσπίς", parts: "ἀσπίς, ἀσπίδος, ἡ", gloss: "shield", x: 12, y: 50 },
      { id: "f4", lemma: "ἔγχος", parts: "ἔγχος, ἔγχεος, τό", gloss: "spear", x: 37, y: 22 },
      { id: "f5", lemma: "δόρυ", parts: "δόρυ, δούρατος, τό", gloss: "spear-shaft; beam of wood", x: 44, y: 34 },
      { id: "f6", lemma: "ξίφος", parts: "ξίφος, ξίφεος, τό", gloss: "sword", x: 33, y: 56 },
      { id: "f7", lemma: "τόξον", parts: "τόξον, τόξου, τό", gloss: "bow", x: 70, y: 40 },
      { id: "f8", lemma: "ἰός", parts: "ἰός, ἰοῦ, ὁ", gloss: "arrow", x: 82, y: 34 },
      { id: "f9", lemma: "χαλκός", parts: "χαλκός, χαλκοῦ, ὁ", gloss: "bronze; a bronze weapon", x: 15, y: 62 },
      { id: "f10", lemma: "βάλλω", parts: "βάλλω, βαλέω, ἔβαλον, βέβληκα", gloss: "throw, hurl; strike with a missile", x: 46, y: 14 },
      { id: "f11", lemma: "κτείνω", parts: "κτείνω, κτενέω, ἔκτανον, ἔκτονα", gloss: "kill, slay", x: 57, y: 24 },
      { id: "f12", lemma: "θνῄσκω", parts: "θνῄσκω, θανέομαι, ἔθανον, τέθνηκα", gloss: "die; be killed", x: 60, y: 84 },
      { id: "f13", lemma: "φεύγω", parts: "φεύγω, φεύξομαι, ἔφυγον, πέφευγα", gloss: "flee, run away; escape", x: 88, y: 60 },
      { id: "f14", lemma: "θέω", parts: "θέω, θεύσομαι", gloss: "run", x: 76, y: 66 }
    ],
    extras: [
      { lemma: "βίη", parts: "βίη, βίης, ἡ", gloss: "force, might; violence", why: "an abstraction" },
      { lemma: "ἀλκή", parts: "ἀλκή, ἀλκῆς, ἡ", gloss: "prowess, defensive strength", why: "an abstraction" },
      { lemma: "κρατερός", parts: "κρατερός, -ή, -όν", gloss: "strong, mighty", why: "adjective" },
      { lemma: "ὄλλυμι", parts: "ὄλλυμι, ὀλέσω, ὤλεσα, ὄλωλα", gloss: "destroy, lose; (mid.) perish", why: "overlaps κτείνω / θνῄσκω in the picture" }
    ]
  },

  {
    id: "speaking",
    title: "Speaking, Singing & Counsel",
    blurb: "Word, voice, staff and lyre — how Homeric people talk.",
    scene: "speech",
    words: [
      { id: "p1", lemma: "ἔπος", parts: "ἔπος, ἔπεος, τό", gloss: "word; utterance", x: 40, y: 22 },
      { id: "p2", lemma: "μῦθος", parts: "μῦθος, μύθου, ὁ", gloss: "speech, formal statement; plan", x: 57, y: 18 },
      { id: "p3", lemma: "φωνή", parts: "φωνή, φωνῆς, ἡ", gloss: "voice; sound of speech", x: 31, y: 30 },
      { id: "p4", lemma: "σκῆπτρον", parts: "σκῆπτρον, σκήπτρου, τό", gloss: "staff, sceptre (held by the speaker)", x: 18, y: 44 },
      { id: "p5", lemma: "ἀγορή", parts: "ἀγορή, ἀγορῆς, ἡ", gloss: "assembly; place of assembly", x: 50, y: 86 },
      { id: "p6", lemma: "θρόνος", parts: "θρόνος, θρόνου, ὁ", gloss: "seat, chair of honour", x: 63, y: 66 },
      { id: "p7", lemma: "ἀοιδός", parts: "ἀοιδός, ἀοιδοῦ, ὁ", gloss: "singer, bard", x: 80, y: 42 },
      { id: "p8", lemma: "φόρμιγξ", parts: "φόρμιγξ, φόρμιγγος, ἡ", gloss: "lyre, phorminx", x: 88, y: 55 },
      { id: "p9", lemma: "ἀοιδή", parts: "ἀοιδή, ἀοιδῆς, ἡ", gloss: "song, singing", x: 88, y: 26 },
      { id: "p10", lemma: "φημί", parts: "φημί, φήσω, ἔφησα / ἔφην", gloss: "say, speak; assert", x: 33, y: 20 },
      { id: "p11", lemma: "ἀκούω", parts: "ἀκούω, ἀκούσομαι, ἤκουσα, ἀκήκοα", gloss: "hear; listen to", x: 12, y: 30 },
      { id: "p12", lemma: "ἀείδω", parts: "ἀείδω, ἀείσομαι, ἄεισα", gloss: "sing; sing of", x: 74, y: 30 },
      { id: "p13", lemma: "γέρων", parts: "γέρων, γέροντος, ὁ", gloss: "old man; elder", x: 24, y: 58 }
    ],
    extras: [
      { lemma: "νόος", parts: "νόος, νόου, ὁ", gloss: "mind; purpose", why: "abstract" },
      { lemma: "μῆτις", parts: "μῆτις, μήτιος, ἡ", gloss: "cunning, shrewd counsel", why: "abstract" },
      { lemma: "φρήν", parts: "φρήν, φρενός, ἡ", gloss: "mind, wits; heart", why: "abstract (though seated in the chest)" },
      { lemma: "θυμός", parts: "θυμός, θυμοῦ, ὁ", gloss: "spirit, heart; anger, desire", why: "abstract" },
      { lemma: "βουλή", parts: "βουλή, βουλῆς, ἡ", gloss: "counsel, plan; council", why: "abstract" },
      { lemma: "δόλος", parts: "δόλος, δόλου, ὁ", gloss: "trick, guile", why: "abstract" }
    ]
  },

  {
    id: "body",
    title: "The Body",
    blurb: "Head to foot in epic language.",
    scene: "body",
    words: [
      { id: "b1", lemma: "κεφαλή", parts: "κεφαλή, κεφαλῆς, ἡ", gloss: "head", x: 47, y: 8 },
      { id: "b2", lemma: "κόμη", parts: "κόμη, κόμης, ἡ", gloss: "hair; locks", x: 38, y: 10 },
      { id: "b3", lemma: "ὄμμα", parts: "ὄμμα, ὄμματος, τό", gloss: "eye; (pl.) eyes, look", x: 55, y: 12 },
      { id: "b4", lemma: "οὖς", parts: "οὖς, οὔατος, τό", gloss: "ear", x: 44, y: 14 },
      { id: "b5", lemma: "ῥίς", parts: "ῥίς, ῥινός, ἡ", gloss: "nose; (pl.) nostrils", x: 61, y: 15 },
      { id: "b6", lemma: "στόμα", parts: "στόμα, στόματος, τό", gloss: "mouth", x: 57, y: 19 },
      { id: "b7", lemma: "αὐχήν", parts: "αὐχήν, αὐχένος, ὁ", gloss: "neck, throat", x: 47, y: 24 },
      { id: "b8", lemma: "ὦμος", parts: "ὦμος, ὤμου, ὁ", gloss: "shoulder", x: 34, y: 29 },
      { id: "b9", lemma: "στῆθος", parts: "στῆθος, στήθεος, τό", gloss: "chest, breast", x: 49, y: 37 },
      { id: "b10", lemma: "νηδύς", parts: "νηδύς, νηδύος, ἡ", gloss: "belly, stomach", x: 50, y: 48 },
      { id: "b11", lemma: "χείρ", parts: "χείρ, χειρός, ἡ", gloss: "hand; arm", x: 18, y: 52 },
      { id: "b12", lemma: "δάκτυλος", parts: "δάκτυλος, δακτύλου, ὁ", gloss: "finger; toe", x: 82, y: 56 },
      { id: "b13", lemma: "γόνυ", parts: "γόνυ, γούνατος, τό", gloss: "knee", x: 42, y: 70 },
      { id: "b14", lemma: "πούς", parts: "πούς, ποδός, ὁ", gloss: "foot", x: 38, y: 93 }
    ],
    extras: [
      { lemma: "μένος", parts: "μένος, μένεος, τό", gloss: "might, life-force; fury", why: "an invisible power in the body" },
      { lemma: "ἦτορ", parts: "ἦτορ, ἤτορος, τό", gloss: "heart (as seat of feeling)", why: "abstract organ of feeling" },
      { lemma: "χρώς", parts: "χρώς, χροός, ὁ", gloss: "skin; flesh, body surface", why: "no single point to mark" },
      { lemma: "γυῖα", parts: "γυῖα, γυίων, τά", gloss: "limbs (always plural)", why: "collective — the whole set of limbs" }
    ]
  },

  {
    id: "house",
    title: "House & Hall",
    blurb: "Threshold, doorpost, hall and hearth.",
    scene: "house",
    words: [
      { id: "h1", lemma: "δόμος", parts: "δόμος, δόμου, ὁ", gloss: "house, dwelling", x: 50, y: 9 },
      { id: "h2", lemma: "ὄροφος", parts: "ὄροφος, ὀρόφου, ὁ", gloss: "roof; thatch", x: 50, y: 21 },
      { id: "h3", lemma: "τοῖχος", parts: "τοῖχος, τοίχου, ὁ", gloss: "wall (of a house)", x: 74, y: 40 },
      { id: "h4", lemma: "κίων", parts: "κίων, κίονος, ὁ/ἡ", gloss: "pillar, column", x: 32, y: 48 },
      { id: "h5", lemma: "μέγαρον", parts: "μέγαρον, μεγάρου, τό", gloss: "great hall; (pl.) the house", x: 50, y: 44 },
      { id: "h6", lemma: "θύρη", parts: "θύρη, θύρης, ἡ", gloss: "door", x: 50, y: 66 },
      { id: "h7", lemma: "σταθμός", parts: "σταθμός, σταθμοῦ, ὁ", gloss: "doorpost; steading", x: 42, y: 62 },
      { id: "h8", lemma: "οὐδός", parts: "οὐδός, οὐδοῦ, ὁ", gloss: "threshold", x: 50, y: 85 },
      { id: "h9", lemma: "θάλαμος", parts: "θάλαμος, θαλάμου, ὁ", gloss: "inner chamber, bedroom", x: 13, y: 44 },
      { id: "h10", lemma: "λέχος", parts: "λέχος, λέχεος, τό", gloss: "bed, couch", x: 13, y: 58 },
      { id: "h11", lemma: "αὐλή", parts: "αὐλή, αὐλῆς, ἡ", gloss: "courtyard, enclosure", x: 87, y: 82 },
      { id: "h12", lemma: "ἐσχάρη", parts: "ἐσχάρη, ἐσχάρης, ἡ", gloss: "hearth; fireplace", x: 66, y: 74 },
      { id: "h13", lemma: "πῦρ", parts: "πῦρ, πυρός, τό", gloss: "fire", x: 66, y: 66 }
    ],
    extras: [
      { lemma: "οἶκος", parts: "οἶκος, οἴκου, ὁ", gloss: "house; household, estate", why: "means the household as much as the building" },
      { lemma: "ὑψερεφής", parts: "ὑψερεφής, -ές", gloss: "high-roofed", why: "adjective" },
      { lemma: "ἔνδον", parts: "(adverb)", gloss: "within, inside", why: "adverb" },
      { lemma: "οἴκαδε", parts: "(adverb)", gloss: "homeward, to home", why: "adverb of direction" }
    ]
  },

  {
    id: "feast",
    title: "Feast & Hospitality",
    blurb: "Mixing-bowl, cup and roasting-spit — the guest received.",
    scene: "feast",
    words: [
      { id: "d1", lemma: "δαίς", parts: "δαίς, δαιτός, ἡ", gloss: "feast, banquet; portion", x: 50, y: 12 },
      { id: "d2", lemma: "τράπεζα", parts: "τράπεζα, τραπέζης, ἡ", gloss: "table", x: 48, y: 62 },
      { id: "d3", lemma: "κρητήρ", parts: "κρητήρ, κρητῆρος, ὁ", gloss: "mixing-bowl (for wine)", x: 22, y: 50 },
      { id: "d4", lemma: "δέπας", parts: "δέπας, δέπαος, τό", gloss: "cup, goblet", x: 62, y: 48 },
      { id: "d5", lemma: "οἶνος", parts: "οἶνος, οἴνου, ὁ", gloss: "wine", x: 30, y: 42 },
      { id: "d6", lemma: "σῖτος", parts: "σῖτος, σίτου, ὁ", gloss: "grain; bread, food", x: 42, y: 55 },
      { id: "d7", lemma: "κρέας", parts: "κρέας, κρέως, τό", gloss: "meat, flesh", x: 75, y: 62 },
      { id: "d8", lemma: "ὀβελός", parts: "ὀβελός, ὀβελοῦ, ὁ", gloss: "spit (for roasting)", x: 82, y: 68 },
      { id: "d9", lemma: "δόρπον", parts: "δόρπον, δόρπου, τό", gloss: "supper, evening meal", x: 57, y: 78 },
      { id: "d10", lemma: "ξεῖνος", parts: "ξεῖνος, ξείνου, ὁ", gloss: "guest, host; stranger", x: 87, y: 34 },
      { id: "d11", lemma: "κῆρυξ", parts: "κῆρυξ, κήρυκος, ὁ", gloss: "herald, messenger", x: 12, y: 32 },
      { id: "d12", lemma: "ἔδω", parts: "ἔδω, ἔδομαι, ἔφαγον, ἐδήδοκα", gloss: "eat, devour", x: 38, y: 26 },
      { id: "d13", lemma: "πίνω", parts: "πίνω, πίομαι, ἔπιον, πέπωκα", gloss: "drink", x: 66, y: 30 }
    ],
    extras: [
      { lemma: "φιλότης", parts: "φιλότης, φιλότητος, ἡ", gloss: "friendship, affection", why: "abstract" },
      { lemma: "θέμις", parts: "θέμις, θέμιστος, ἡ", gloss: "what is right, custom, law", why: "abstract" },
      { lemma: "ξεινήιον", parts: "ξεινήιον, ξεινηίου, τό", gloss: "guest-gift", why: "a social custom rather than one object" },
      { lemma: "ἅλις", parts: "(adverb)", gloss: "in abundance, enough", why: "adverb" }
    ]
  },

  {
    id: "gods",
    title: "Gods, Fate & Sacrifice",
    blurb: "Altar, smoke and libation; the immortals above.",
    scene: "gods",
    words: [
      { id: "g1", lemma: "θεός", parts: "θεός, θεοῦ, ὁ/ἡ", gloss: "god, goddess", x: 47, y: 15 },
      { id: "g2", lemma: "αἰγίς", parts: "αἰγίς, αἰγίδος, ἡ", gloss: "aegis (the god's storm-shield)", x: 62, y: 22 },
      { id: "g3", lemma: "βωμός", parts: "βωμός, βωμοῦ, ὁ", gloss: "altar", x: 50, y: 72 },
      { id: "g4", lemma: "πῦρ", parts: "πῦρ, πυρός, τό", gloss: "fire", x: 50, y: 60 },
      { id: "g5", lemma: "καπνός", parts: "καπνός, καπνοῦ, ὁ", gloss: "smoke", x: 50, y: 44 },
      { id: "g6", lemma: "ἑκατόμβη", parts: "ἑκατόμβη, ἑκατόμβης, ἡ", gloss: "hecatomb, great sacrifice of oxen", x: 20, y: 78 },
      { id: "g7", lemma: "βοῦς", parts: "βοῦς, βοός, ὁ/ἡ", gloss: "ox, cow", x: 20, y: 66 },
      { id: "g8", lemma: "κέρας", parts: "κέρας, κέραος, τό", gloss: "horn", x: 12, y: 55 },
      { id: "g9", lemma: "σπονδή", parts: "σπονδή, σπονδῆς, ἡ", gloss: "libation, drink-offering", x: 78, y: 62 },
      { id: "g10", lemma: "ἱερεύς", parts: "ἱερεύς, ἱερῆος, ὁ", gloss: "priest", x: 80, y: 44 },
      { id: "g11", lemma: "εὔχομαι", parts: "εὔχομαι, εὔξομαι, εὐξάμην", gloss: "pray; boast, declare", x: 86, y: 30 },
      { id: "g12", lemma: "θύω", parts: "θύω, θύσω, ἔθυσα, τέθυκα", gloss: "sacrifice, offer up", x: 32, y: 52 },
      { id: "g13", lemma: "ῥέζω", parts: "ῥέζω, ῥέξω, ἔρεξα", gloss: "do, perform; offer sacrifice", x: 66, y: 78 }
    ],
    extras: [
      { lemma: "μοῖρα", parts: "μοῖρα, μοίρης, ἡ", gloss: "fate, allotted portion", why: "abstract" },
      { lemma: "αἶσα", parts: "αἶσα, αἴσης, ἡ", gloss: "destiny, due share", why: "abstract" },
      { lemma: "κήρ", parts: "κήρ, κηρός, ἡ", gloss: "doom, death-spirit", why: "abstract" },
      { lemma: "ἀθάνατος", parts: "ἀθάνατος, -ον", gloss: "immortal, deathless", why: "adjective" },
      { lemma: "ὄλβιος", parts: "ὄλβιος, -η, -ον", gloss: "blessed, prosperous", why: "adjective" }
    ]
  },

  {
    id: "people",
    title: "Household, Kin & Rank",
    blurb: "Father, mother, son, king, servant and suitor.",
    scene: "people",
    words: [
      { id: "k1", lemma: "ἀνήρ", parts: "ἀνήρ, ἀνδρός, ὁ", gloss: "man; husband", x: 32, y: 40 },
      { id: "k2", lemma: "γυνή", parts: "γυνή, γυναικός, ἡ", gloss: "woman; wife", x: 50, y: 40 },
      { id: "k3", lemma: "παῖς", parts: "παῖς, παιδός, ὁ/ἡ", gloss: "child; son, daughter", x: 62, y: 60 },
      { id: "k4", lemma: "πατήρ", parts: "πατήρ, πατρός, ὁ", gloss: "father", x: 14, y: 38 },
      { id: "k5", lemma: "μήτηρ", parts: "μήτηρ, μητρός, ἡ", gloss: "mother", x: 50, y: 30 },
      { id: "k6", lemma: "υἱός", parts: "υἱός, υἱοῦ, ὁ", gloss: "son", x: 62, y: 40 },
      { id: "k7", lemma: "γέρων", parts: "γέρων, γέροντος, ὁ", gloss: "old man; elder", x: 14, y: 28 },
      { id: "k8", lemma: "ἄναξ", parts: "ἄναξ, ἄνακτος, ὁ", gloss: "lord, master", x: 80, y: 26 },
      { id: "k9", lemma: "βασιλεύς", parts: "βασιλεύς, βασιλῆος, ὁ", gloss: "king, chieftain", x: 80, y: 40 },
      { id: "k10", lemma: "δμωή", parts: "δμωή, δμωῆς, ἡ", gloss: "handmaid, female servant", x: 91, y: 62 },
      { id: "k11", lemma: "μνηστήρ", parts: "μνηστήρ, μνηστῆρος, ὁ", gloss: "suitor, wooer", x: 71, y: 70 },
      { id: "k12", lemma: "ἑταῖρος", parts: "ἑταῖρος, ἑταίρου, ὁ", gloss: "comrade, companion", x: 38, y: 66 },
      { id: "k13", lemma: "λαός", parts: "λαός, λαοῦ, ὁ", gloss: "people, host, war-band", x: 50, y: 84 }
    ],
    extras: [
      { lemma: "γένος", parts: "γένος, γένεος, τό", gloss: "birth, descent; race, family", why: "abstract" },
      { lemma: "κλέος", parts: "κλέος, κλέεος, τό", gloss: "fame, glory, report", why: "abstract" },
      { lemma: "αἰδώς", parts: "αἰδώς, αἰδοῦς, ἡ", gloss: "shame, respect, sense of honour", why: "abstract" },
      { lemma: "φίλος", parts: "φίλος, -η, -ον", gloss: "dear, one's own; (as noun) friend", why: "adjective" }
    ]
  },

  {
    id: "craft",
    title: "Craft, Cloth & Time",
    blurb: "Loom and axe, day and night — the work of hands.",
    scene: "craft",
    words: [
      { id: "c1", lemma: "ἱστός", parts: "ἱστός, ἱστοῦ, ὁ", gloss: "loom; (also) mast", x: 22, y: 30 },
      { id: "c2", lemma: "ὑφαίνω", parts: "ὑφαίνω, ὑφανέω, ὕφηνα", gloss: "weave; devise, contrive", x: 33, y: 22 },
      { id: "c3", lemma: "φᾶρος", parts: "φᾶρος, φάρεος, τό", gloss: "large cloth, mantle, shroud", x: 22, y: 55 },
      { id: "c4", lemma: "πέπλος", parts: "πέπλος, πέπλου, ὁ", gloss: "robe, woven garment", x: 40, y: 52 },
      { id: "c5", lemma: "ἠλακάτη", parts: "ἠλακάτη, ἠλακάτης, ἡ", gloss: "distaff; spindle", x: 10, y: 56 },
      { id: "c6", lemma: "τέκτων", parts: "τέκτων, τέκτονος, ὁ", gloss: "carpenter, craftsman", x: 61, y: 34 },
      { id: "c7", lemma: "πέλεκυς", parts: "πέλεκυς, πελέκεος, ὁ", gloss: "axe", x: 70, y: 42 },
      { id: "c8", lemma: "σκέπαρνον", parts: "σκέπαρνον, σκεπάρνου, τό", gloss: "adze", x: 78, y: 52 },
      { id: "c9", lemma: "τέρετρον", parts: "τέρετρον, τερέτρου, τό", gloss: "auger, drill", x: 85, y: 60 },
      { id: "c10", lemma: "ξύλον", parts: "ξύλον, ξύλου, τό", gloss: "wood, timber; log", x: 68, y: 70 },
      { id: "c11", lemma: "τεύχω", parts: "τεύχω, τεύξω, ἔτευξα, τέτευχα", gloss: "make, build; bring about", x: 55, y: 24 },
      { id: "c12", lemma: "ἦμαρ", parts: "ἦμαρ, ἤματος, τό", gloss: "day", x: 88, y: 12 },
      { id: "c13", lemma: "νύξ", parts: "νύξ, νυκτός, ἡ", gloss: "night", x: 10, y: 12 }
    ],
    extras: [
      { lemma: "τέχνη", parts: "τέχνη, τέχνης, ἡ", gloss: "skill, craft; cunning device", why: "abstract" },
      { lemma: "ἔργον", parts: "ἔργον, ἔργου, τό", gloss: "work, deed; task", why: "abstract" },
      { lemma: "δαίδαλος", parts: "δαίδαλος, -ον", gloss: "cunningly wrought, elaborate", why: "adjective" },
      { lemma: "ὥρη", parts: "ὥρη, ὥρης, ἡ", gloss: "season; right time", why: "abstract" }
    ]
  },

  {
    id: "particles",
    title: "Epic Glue: Particles & Connectives",
    blurb: "Nothing here can be drawn — and nothing here can be skipped. These little words carry the flow of every Homeric line.",
    scene: "meander",
    words: [],
    extras: [
      { lemma: "μέν … δέ", parts: "(postpositive particles)", gloss: "on the one hand … on the other; sets two things side by side", why: "" },
      { lemma: "τε", parts: "(enclitic)", gloss: "and; τε … τε both … and — very common in epic", why: "" },
      { lemma: "γάρ", parts: "(postpositive)", gloss: "for, since; introduces an explanation", why: "" },
      { lemma: "ἄρα / ῥα / ἄρ", parts: "(postpositive)", gloss: "then, so; marks what naturally follows", why: "" },
      { lemma: "δή", parts: "(postpositive)", gloss: "indeed, now, at last; emphasises the word before it", why: "" },
      { lemma: "αὐτάρ / ἀτάρ", parts: "(sentence-initial)", gloss: "but, however; and then", why: "" },
      { lemma: "αὖτε", parts: "(adverb)", gloss: "again, in turn; on the other hand", why: "" },
      { lemma: "ἠμέν … ἠδέ", parts: "(correlatives)", gloss: "both … and", why: "" },
      { lemma: "περ", parts: "(enclitic)", gloss: "even, indeed; although (with participles)", why: "" },
      { lemma: "τοι", parts: "(enclitic)", gloss: "surely, you know, I tell you", why: "" },
      { lemma: "κε / κεν", parts: "(modal particle)", gloss: "= Attic ἄν; marks a verb as contingent or potential", why: "" },
      { lemma: "οὐδέ / μηδέ", parts: "(conjunctions)", gloss: "and not, nor; not even", why: "" },
      { lemma: "ὡς / ὥς", parts: "(conjunction / adverb)", gloss: "as, like; (ὥς) thus, so", why: "" },
      { lemma: "ἔπειτα", parts: "(adverb)", gloss: "then, thereupon, next", why: "" },
      { lemma: "ἤδη", parts: "(adverb)", gloss: "already, by now", why: "" },
      { lemma: "αἰεί / αἰέν", parts: "(adverb)", gloss: "always, ever", why: "" },
      { lemma: "νῦν", parts: "(adverb)", gloss: "now, as things are", why: "" },
      { lemma: "ἔνθα", parts: "(adverb)", gloss: "there, thereupon; where", why: "" }
    ]
  }
];

/* Label used under the drawing and inside the popover */
function thematicWordLabel(w) {
  return w.parts || w.lemma;
}
