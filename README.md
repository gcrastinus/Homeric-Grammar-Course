# Homeric Odyssey — Crash Course

An interactive, programmed course for students who know **Biblical / NT Greek basics** and want to ramp up quickly to reading Homer’s **Odyssey** (not the Iliad).

## Open the course

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

No build step and no server-side backend are required. Progress is stored in `localStorage` on your machine.

## What’s included

1. **Welcome screen** — entry to all modules; **Master Core Homeric Vocabulary** button at top right  
2. **Grammar & dialect course** — short cards + 3 quiz variants (A/B/C) per card; jump to any section; nothing graded  
3. **Core vocab mastery** — ~200 Odyssey-focused lemmas (skipping NT staples like καί / λόγος), 5-day plan, Homeric example lines with English blanks  
4. **Thematic vocab** — sky, earth, sea, fighting, speech, body, house, ship — SVG scenes with clickable markers  
5. **Map orientation** — 15 programmed steps on one schematic Mediterranean map  
6. **20 guided sentences** — real Odyssey Greek with notes  
7. **Final reading** — Odyssey 9.105–184 (Cyclopes land), ~80 lines with grammar/vocab help  

## Audience assumptions

- Indicative (except pluperfect), basic participles, some subjunctive / imperative / infinitive  
- Core NT vocabulary  
- Scansion is **not** taught; basic poetic devices for sense **are**  

## Project layout

```
index.html
css/styles.css
js/storage.js
js/app.js
js/data/grammar.js
js/data/vocab.js
js/data/thematic.js
js/data/map.js
js/data/reading.js
```

## Note on texts

Homeric lines follow standard OCT/Allen-style teaching texts (public-domain tradition). Study translations are pedagogical, not literary. For full word-by-word parsing of entire books, pair this app with a resource such as the [Homer Reader](https://johnhboyer-sys.github.io/homer-reader/) or a Steadman facing commentary.
