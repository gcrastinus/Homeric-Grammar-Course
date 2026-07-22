/* Map orientation — Odysseus’ journey on a Mediterranean outline
   Base art: assets/mediterranean-map.png (tan land / warm dark sea)
   Journey stations follow a simplified reading of the Peter Struck /
   World History Encyclopedia “ten-year journey” reconstruction (mythic geography).
*/

const MAP_IMAGE = "assets/mediterranean-map.png";

/**
 * Pins as % of mediterranean-map.png (W→E: Iberia … Italy … Greece … Anatolia)
 * side: which way the label opens so it stays readable
 */
const MAP_PINS = {
  // —— Core Greek / Anatolian (human map + nostos ends) ——
  troy:     { x: 84, y: 36, label: "Troy", gr: "Τροίη", n: 1, side: "left" },
  ismarus:  { x: 80, y: 30, label: "Ismarus", gr: "Ἴσμαρος", n: 2, side: "left" },
  malea:    { x: 70, y: 56, label: "Cape Malea", gr: "Μάλεια", n: 3, side: "left" },
  cythera:  { x: 68, y: 62, label: "Cythera", gr: "Κύθηρα", n: 4, side: "left" },
  ithaca:   { x: 64, y: 46, label: "Ithaca", gr: "Ἰθάκη", n: 17, side: "left" },
  pylos:    { x: 66, y: 54, label: "Pylos", gr: "Πύλος", side: "right" },
  sparta:   { x: 69, y: 58, label: "Sparta", gr: "Σπάρτη", side: "right" },
  olympus:  { x: 68, y: 32, label: "Olympus", gr: "Ὄλυμπος", side: "right" },
  hellas:   { x: 70, y: 42, label: "Hellas", gr: "Ἑλλάς", side: "right" },

  // —— Western / mythic wanderings (Struck-style reconstruction) ——
  lotophagi:{ x: 36, y: 78, label: "Lotophagi", gr: "Λωτοφάγοι", n: 5, side: "right" },
  cyclops:  { x: 50, y: 58, label: "Cyclopes", gr: "Κύκλωπες", n: 6, side: "right" },
  aeolia:   { x: 48, y: 50, label: "Aeolia", gr: "Αἰολίη", n: 7, side: "left" },
  lamos:    { x: 24, y: 48, label: "Lamos", gr: "Λάμος", n: 8, side: "right" },
  aeaea:    { x: 28, y: 40, label: "Aeaea", gr: "Αἰαίη", n: 9, side: "right" },
  cimmerians:{ x: 12, y: 34, label: "Cimmerians", gr: "Κιμμέριοι", n: 10, side: "right" },
  sirens:   { x: 44, y: 48, label: "Sirens", gr: "Σειρῆνες", n: 11, side: "left" },
  scylla:   { x: 52, y: 54, label: "Scylla", gr: "Σκύλλα", n: 12, side: "right" },
  charybdis:{ x: 54, y: 56, label: "Charybdis", gr: "Χάρυβδις", n: 13, side: "right" },
  thrinacia:{ x: 50, y: 64, label: "Thrinacia", gr: "Θρινακίη", n: 14, side: "right" },
  ogygia:   { x: 16, y: 56, label: "Ogygia", gr: "Ὠγυγίη", n: 15, side: "right" },
  scheria:  { x: 38, y: 32, label: "Scheria", gr: "Σχερίη", n: 16, side: "right" },

  // Generic “open sea” for wanderings language
  sea:      { x: 42, y: 70, label: "Open sea", gr: "πόντος", side: "right" }
};

/** Main nostos path order (Struck map numbers 1→17) */
const JOURNEY_PATH = [
  "troy", "ismarus", "malea", "cythera", "lotophagi", "cyclops", "aeolia",
  "lamos", "aeaea", "cimmerians", "sirens", "scylla", "charybdis", "thrinacia",
  "ogygia", "scheria", "ithaca"
];

const MAP_STEPS = [
  {
    id: "m1",
    title: "The Stage: A Wider Mediterranean",
    text: `
      <p>This map is the whole central and western Mediterranean — not only the Aegean. The <em>Odyssey</em> begins at <strong>Troy</strong> in the east and ends at <strong>Ithaca</strong>, but the poem’s wanderings also push <strong>west past Italy</strong> into mythic seas.</p>
      <p>Pins mark major stations of Odysseus’ journey (a traditional reconstruction, not a modern GPS track). Mythic places (Ogygia, Aeaea, the Underworld shore) are placed where storytellers have long imagined them — useful for reading, not archaeology.</p>
      <p class="tip"><strong>How to use this course:</strong> each card lights the relevant pins; orange dashes show the journey path when it helps.</p>
    `,
    highlight: ["troy", "ithaca"],
    path: false,
    quiz: {
      q: "On this map, Odysseus’ story moves mainly…",
      options: [
        "Only inside the Black Sea",
        "From Troy in the east toward Ithaca, with long western wanderings",
        "Only up the Nile",
        "Straight from Troy to Rome as capital"
      ],
      answer: 1,
      explain: "East start (Troy), western wanderings, home to Ithaca."
    }
  },
  {
    id: "m2",
    title: "1 · Troy — The War Ends",
    text: `
      <p><strong>Troy (Τροίη / Ἴλιος)</strong> sits in northwest Asia Minor. After the sack, Odysseus leaves with twelve ships. Everything else on this map is the long failure (and final success) of his νόστος.</p>
      <p>When the poem says “from Troy,” it means after this starting point — the decade of wandering is still ahead.</p>
    `,
    highlight: ["troy"],
    path: ["troy"],
    quiz: {
      q: "Troy is on which side of the Aegean?",
      options: ["Northwest Asia Minor (Anatolia)", "Southern Spain", "Inland Egypt", "Northern France"],
      answer: 0,
      explain: "The Troad faces the Hellespont / northeast Aegean."
    }
  },
  {
    id: "m3",
    title: "2 · Ismarus — First Disaster",
    text: `
      <p>Soon after leaving Troy, the crew raids <strong>Ismarus</strong> (land of the Cicones) in Thrace. They take plunder — and pay for it: many of Odysseus’ men are killed when the Cicones counterattack.</p>
      <p>Homeric lesson already: greed and delay cost lives. The fleet is smaller before it ever reaches home waters again.</p>
    `,
    highlight: ["troy", "ismarus"],
    path: ["troy", "ismarus"],
    quiz: {
      q: "At Ismarus the crew mainly…",
      options: ["Found Ithaca", "Raided the Cicones and suffered heavy losses", "Met Calypso", "Built the Wooden Horse"],
      answer: 1,
      explain: "Raid on the Cicones; many companions die."
    }
  },
  {
    id: "m4",
    title: "3–4 · Cape Malea & Cythera — Blown Off Course",
    text: `
      <p>Rounding the southern Peloponnese at <strong>Cape Malea</strong>, storms drive the fleet away from a straight run home. <strong>Cythera</strong> marks the south Greek waters where Odysseus is forced into the open Mediterranean.</p>
      <p>From here the journey leaves “normal” coastal geography and enters the poem’s adventure zone — still on our map, but increasingly mythic.</p>
    `,
    highlight: ["malea", "cythera", "ithaca"],
    path: ["ismarus", "malea", "cythera"],
    quiz: {
      q: "Cape Malea matters because…",
      options: [
        "It is where Odysseus blinds the Cyclops",
        "Storms there blow him off the direct route toward Ithaca",
        "It is Calypso’s island",
        "It is Troy’s harbor"
      ],
      answer: 1,
      explain: "The turn into open-sea wandering."
    }
  },
  {
    id: "m5",
    title: "5 · Lotophagi — The Lotus-Eaters",
    text: `
      <p>Far to the south (often imagined on the North African coast), the <strong>Lotophagi</strong> offer the lotus. Those who eat it forget the νόστος and want only to stay.</p>
      <p>Odysseus drags his men back to the ships. The episode is short — and unforgettable: homecoming can be lost to pleasure as well as to monsters.</p>
    `,
    highlight: ["lotophagi", "cythera"],
    path: ["cythera", "lotophagi"],
    quiz: {
      q: "The danger of the lotus is that men…",
      options: ["Turn into swine", "Forget their desire to go home", "Are eaten by Scylla", "Sink in Charybdis"],
      answer: 1,
      explain: "Forgetfulness of νόστος."
    }
  },
  {
    id: "m6",
    title: "6 · Cyclopes — Polyphemus",
    text: `
      <p>The land of the <strong>Cyclopes</strong> (often linked in later maps to Sicily / the western Greek world) is lawless and pastoral. Odysseus blinds <strong>Polyphemus</strong>, son of Poseidon — winning escape and earning the sea-god’s long anger.</p>
      <p>This is the moral and geographic hinge of much later suffering: the path home is now opposed by a god of the sea.</p>
    `,
    highlight: ["cyclops"],
    path: ["lotophagi", "cyclops"],
    quiz: {
      q: "Blinding Polyphemus especially angers…",
      options: ["Athena", "Poseidon", "Hermes", "Helios alone"],
      answer: 1,
      explain: "Poseidon is the Cyclops’ father."
    }
  },
  {
    id: "m7",
    title: "7 · Aeolia — The Bag of Winds",
    text: `
      <p>On <strong>Aeolia</strong>, Aeolus gives Odysseus a bag holding the storm winds, so only the fair west wind should carry him home. Ithaca almost comes into sight — then the crew open the bag while he sleeps, and the fleet is blown back.</p>
      <p>Geography lesson: they were close; human folly undoes divine help.</p>
    `,
    highlight: ["aeolia", "ithaca"],
    path: ["cyclops", "aeolia"],
    quiz: {
      q: "The bag of winds fails because…",
      options: ["Poseidon steals it", "The crew open it, releasing the storms", "Calypso takes it", "It never leaves Troy"],
      answer: 1,
      explain: "Companions’ curiosity / greed near home."
    }
  },
  {
    id: "m8",
    title: "8 · Lamos — Laestrygonians",
    text: `
      <p>At <strong>Lamos</strong> (Laestrygonian land), giant cannibals destroy eleven of the twelve ships. Only Odysseus’ own ship escapes.</p>
      <p>From here the journey is no longer a fleet’s story — it is one ship, then one man.</p>
    `,
    highlight: ["lamos", "aeolia"],
    path: ["aeolia", "lamos"],
    quiz: {
      q: "After the Laestrygonians…",
      options: [
        "All twelve ships still sail together",
        "Only Odysseus’ ship survives",
        "They found a new city at Troy",
        "Telemachus is born"
      ],
      answer: 1,
      explain: "Eleven ships destroyed."
    }
  },
  {
    id: "m9",
    title: "9–10 · Aeaea & the Underworld Shore",
    text: `
      <p><strong>Aeaea</strong> is Circe’s island: she turns men to swine; Odysseus, with Hermes’ help, wins her aid. She then sends him to the edge of the world — the <strong>Cimmerians</strong> and the land of the dead — to consult Teiresias.</p>
      <p>On the map these lie far west: the poem’s “edge,” not a tourist stop. For reading, remember the sequence: Circe → Nekyia (Underworld) → back toward the known sea-dangers.</p>
    `,
    highlight: ["aeaea", "cimmerians"],
    path: ["lamos", "aeaea", "cimmerians"],
    quiz: {
      q: "Circe’s island is called…",
      options: ["Ogygia", "Aeaea", "Scheria", "Thrinacia"],
      answer: 1,
      explain: "Αἰαίη — Circe."
    }
  },
  {
    id: "m10",
    title: "11–13 · Sirens, Scylla & Charybdis",
    text: `
      <p>Returning toward Sicily’s straits, Odysseus faces the <strong>Sirens</strong> (wax in the crew’s ears; he is bound to the mast), then the double threat of <strong>Scylla</strong> (who takes six men) and <strong>Charybdis</strong> (the whirlpool).</p>
      <p>These cluster on the map near the narrow waters of southern Italy / Sicily — the “hard passage” between west and east in later tradition.</p>
    `,
    highlight: ["sirens", "scylla", "charybdis"],
    path: ["cimmerians", "sirens", "scylla", "charybdis"],
    quiz: {
      q: "Scylla and Charybdis are best remembered as…",
      options: [
        "A twin harbor on Ithaca",
        "A monster and a whirlpool flanking a deadly strait",
        "Penelope’s suitors",
        "Rivers of the Underworld only"
      ],
      answer: 1,
      explain: "The classic double hazard."
    }
  },
  {
    id: "m11",
    title: "14 · Thrinacia — Cattle of the Sun",
    text: `
      <p>On <strong>Thrinacia</strong> Helios’ cattle graze. Odysseus warns the crew not to touch them; hunger wins; Zeus wrecks the ship. Odysseus alone survives, clinging to wreckage past Charybdis again.</p>
      <p>The poem’s moral geometry: companions perish by their own ἀτασθαλίαι (reckless folly) as well as by monsters.</p>
    `,
    highlight: ["thrinacia", "charybdis"],
    path: ["charybdis", "thrinacia"],
    quiz: {
      q: "The crew’s fatal act on Thrinacia is…",
      options: ["Opening Aeolus’ bag again", "Eating Helios’ cattle", "Attacking Scheria", "Blinding Poseidon"],
      answer: 1,
      explain: "Oxen of the Sun."
    }
  },
  {
    id: "m12",
    title: "15 · Ogygia — Calypso",
    text: `
      <p><strong>Ogygia</strong>, Calypso’s remote island, holds Odysseus for seven years. Hermes finally orders his release. On our map it lies far west — “the navel of the sea” in the poem’s language.</p>
      <p>Book 5 begins the escape: raft, storm, and the swim toward the next human shore.</p>
    `,
    highlight: ["ogygia"],
    path: ["thrinacia", "ogygia"],
    quiz: {
      q: "Ogygia is associated with…",
      options: ["Nestor", "Calypso holding Odysseus", "The suitors’ feast only", "The wooden horse"],
      answer: 1,
      explain: "Calypso’s island."
    }
  },
  {
    id: "m13",
    title: "16 · Scheria — The Phaeacians",
    text: `
      <p><strong>Scheria</strong>, land of the Phaeacians (Alcinous and Arete), is the last stop before home. Ideal hospitality, games, gifts — and Odysseus tells his whole story (Books 9–12). Their ship finally carries him to Ithaca.</p>
      <p>On traditional maps Scheria is often placed toward the northwest (Corfu or further west). For reading, its role matters more than the GPS point: the perfect hosts versus Cyclops and suitors.</p>
    `,
    highlight: ["scheria", "ogygia", "ithaca"],
    path: ["ogygia", "scheria", "ithaca"],
    quiz: {
      q: "The Phaeacians are crucial because they…",
      options: ["Destroy Troy", "Host Odysseus and convey him home", "Are the suitors", "Blind Polyphemus"],
      answer: 1,
      explain: "Final human escort of the νόστος."
    }
  },
  {
    id: "m14",
    title: "17 · Ithaca — Home",
    text: `
      <p><strong>Ithaca (Ἰθάκη)</strong> is the goal: rocky island home, Penelope, Telemachus, the suitors devouring the house. The journey map ends where the poem’s second half truly begins — recognition, revenge, and restoration.</p>
      <p>Nearby on the human map (not always on the sea-route): <strong>Pylos</strong> and <strong>Sparta</strong>, where Telemachus seeks news while his father still wanders.</p>
    `,
    highlight: ["ithaca", "pylos", "sparta", "scheria"],
    path: ["scheria", "ithaca"],
    quiz: {
      q: "Ithaca is…",
      options: ["Odysseus’ home and the end of the sea journey", "Circe’s island", "Troy’s other name", "The whirlpool"],
      answer: 0,
      explain: "Home and τέλος of the nostos route."
    }
  },
  {
    id: "m15",
    title: "Review — Path of the Nostos",
    text: `
      <p>Hold the skeleton in order:</p>
      <ol>
        <li><strong>Troy → Ismarus → Malea / Cythera</strong> (out of the Aegean)</li>
        <li><strong>Lotophagi → Cyclopes → Aeolia → Laestrygonians</strong></li>
        <li><strong>Circe (Aeaea) → Underworld shore → Sirens → Scylla / Charybdis → Thrinacia</strong></li>
        <li><strong>Ogygia → Scheria → Ithaca</strong></li>
      </ol>
      <p>East start, western ordeal, home. Pins light the whole path — use them when you meet these names in Greek.</p>
    `,
    highlight: JOURNEY_PATH.slice(),
    path: JOURNEY_PATH.slice(),
    quiz: {
      q: "Which sequence is correct for the end of the sea journey?",
      options: [
        "Ithaca → Troy → Ogygia",
        "Ogygia → Scheria → Ithaca",
        "Cyclopes → Troy → Sparta only",
        "Scheria → Ismarus → Troy"
      ],
      answer: 1,
      explain: "Calypso → Phaeacians → home."
    }
  }
];

/** Compatibility alias used by app.js */
function mapSVG(highlightIds, pathIds) {
  return mapBoardHTML(highlightIds, pathIds);
}

/**
 * @param {string[]} highlightIds pins to light
 * @param {string[]|false|undefined} pathIds ordered path; false = no path; undefined = auto from highlight journey subset
 */
function mapBoardHTML(highlightIds, pathIds) {
  const hl = new Set(highlightIds || []);
  const anyHl = hl.size > 0;

  // Build path polyline through journey points
  let pathPts = [];
  if (pathIds === false) {
    pathPts = [];
  } else if (Array.isArray(pathIds) && pathIds.length) {
    pathPts = pathIds.map(id => MAP_PINS[id]).filter(Boolean);
  } else if (anyHl) {
    // default: full journey segments that touch highlighted pins (show whole journey lightly)
    pathPts = JOURNEY_PATH.map(id => MAP_PINS[id]).filter(Boolean);
  }

  let routeSvg = "";
  if (pathPts.length >= 2) {
    const d = pathPts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
    routeSvg = `<path class="map-route" d="${d}" fill="none"/>`;
  }

  const pins = Object.entries(MAP_PINS).map(([id, p]) => {
    const on = hl.has(id);
    const dim = anyHl && !on;
    const side = p.side === "left" ? "pin-left" : "pin-right";
    const num = p.n != null ? `<span class="map-pin-num">${p.n}</span>` : "";
    return `
      <div class="map-pin ${on ? "is-on" : ""} ${dim ? "is-dim" : ""} ${side}"
           data-pin="${id}" style="left:${p.x}%;top:${p.y}%">
        <span class="map-pin-dot" aria-hidden="true">${num}</span>
        <span class="map-pin-label">
          <span class="map-pin-en">${p.label}</span>
          <span class="map-pin-gr">${p.gr || ""}</span>
        </span>
      </div>`;
  }).join("");

  return `
    <div class="map-board" role="img" aria-label="Mediterranean map of Odysseus’ journey">
      <img class="map-board-img" src="${MAP_IMAGE}" alt="Outline map of the Mediterranean: Spain to Asia Minor" width="712" height="280" />
      <svg class="map-routes" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${routeSvg}</svg>
      <div class="map-pins">${pins}</div>
    </div>
  `;
}
