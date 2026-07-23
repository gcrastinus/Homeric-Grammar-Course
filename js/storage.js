/* Progress persistence */
const HGStorage = (() => {
  const KEY = "homeric-odyssey-progress-v1";

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      return { ...defaultState(), ...JSON.parse(raw) };
    } catch {
      return defaultState();
    }
  }

  function defaultState() {
    return {
      grammarDone: {},       // sectionId -> true
      grammarQuizVariant: {}, // sectionId -> 0|1|2
      vocabMastered: {},     // lemma -> true
      vocabSeen: {},         // lemma -> true
      // Directed two-week vocab mastery track (thematic section is separate)
      vocabTrack: {
        started: false,
        cursor: 0,              // next new word index in VOCAB
        weak: {},               // lemma -> true (needs review)
        lastDate: null,         // YYYY-MM-DD of last track activity
        newDoneToday: 0,        // new cards completed on lastDate
        reviewClearedToday: false,
        // mid-session resume
        phase: "idle",          // idle | review | new | keep-going | day-done | end-quiz
        queue: [],              // current session card descriptors { lemma, kind: "new"|"review" }
        queueIndex: 0,
        keepGoingStreak: 0      // new cards since last injected review in keep-going
      },
      mapDone: {},           // step id -> true
      readingDone: {},       // id -> true
      darkMode: false,
      vaseDrawings: {},      // themeId -> dataURL (png of freehand only)
      vaseHotspots: {},      // themeId -> { [num]: { x, y, lemma, wordId } } x/y in % of board
      vaseGuideOn: {},       // themeId -> boolean; missing means true (default on)
      lastRoute: null
    };
  }

  function save(state) {
    localStorage.setItem(KEY, JSON.stringify(state));
  }

  function update(fn) {
    const s = load();
    fn(s);
    save(s);
    return s;
  }

  function reset() {
    localStorage.removeItem(KEY);
  }

  return { load, save, update, reset, defaultState };
})();
