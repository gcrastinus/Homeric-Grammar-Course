/* ============================================================================
   THEMATIC SCENE ART  —  Attic BLACK-FIGURE style
   Palette: three colours only
     ink    #26201a   solid silhouette fill
     gold   #b3892f   sparing accent (fillets, flames, rims)
     parch  #f2e7cf   ground + reserved "incision" detail inside silhouettes
   Technique: figures and objects are filled ink silhouettes; interior
   anatomy / drapery / ornament is drawn as thin PARCH lines ("incision"),
   exactly as on a black-figure vase. No shading, no gradients.
   Canvas 480×340; the app overlays numbered hotspots afterwards.
   ========================================================================= */

(function () {
  const W = 480, H = 340;
  const INK = "#26201a";
  const GOLD = "#b3892f";
  const PARCH = "#f2e7cf";

  // ---- primitives ---------------------------------------------------------
  const fill = (d, c = INK) => `<path d="${d}" fill="${c}"/>`;
  const inc = (d, w = 1.8, c = PARCH) =>
    `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const line = (x1, y1, x2, y2, o = {}) =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.s || INK}" stroke-width="${o.w || 2}" stroke-linecap="${o.cap || "round"}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ""}${o.op ? ` opacity="${o.op}"` : ""}/>`;
  const disc = (cx, cy, r, c = INK) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/>`;
  const ring = (cx, cy, r, w = 2, c = INK) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${c}" stroke-width="${w}"/>`;
  const rdot = (cx, cy, r = 2.2, c = PARCH) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/>`;

  // Greek-key border band
  function meander(x, y, w, unit, color) {
    const c = color || GOLD;
    let d = "";
    const n = Math.floor(w / unit);
    for (let i = 0; i < n; i++) {
      const ox = x + i * unit;
      d += `M${ox} ${y + unit} h${unit * 0.7} v${-unit * 0.7} h${-unit * 0.45} v${unit * 0.4} h${unit * 0.2} `;
    }
    return `<path d="${d}" fill="none" stroke="${c}" stroke-width="1.5" opacity="0.9"/>`;
  }

  // ---- celestial ----------------------------------------------------------
  function sun(cx, cy, r) {
    let rays = "";
    const n = 12;
    for (let i = 0; i < n; i++) {
      const a = (i * 360 / n) * Math.PI / 180;
      const tip = [cx + Math.cos(a) * (r + 12), cy + Math.sin(a) * (r + 12)];
      const b1 = [cx + Math.cos(a - 0.14) * r, cy + Math.sin(a - 0.14) * r];
      const b2 = [cx + Math.cos(a + 0.14) * r, cy + Math.sin(a + 0.14) * r];
      rays += fill(`M${b1[0].toFixed(1)} ${b1[1].toFixed(1)} L${tip[0].toFixed(1)} ${tip[1].toFixed(1)} L${b2[0].toFixed(1)} ${b2[1].toFixed(1)} Z`);
    }
    // clean disc with a few reserved rosette dots (vase convention)
    let rosette = "";
    for (let i = 0; i < 6; i++) {
      const a = i * 60 * Math.PI / 180;
      rosette += rdot(cx + Math.cos(a) * r * 0.5, cy + Math.sin(a) * r * 0.5, 1.6, PARCH);
    }
    return rays + disc(cx, cy, r) + rosette + rdot(cx, cy, 2, PARCH);
  }
  const moon = (cx, cy, r) =>
    fill(`M${cx + r * 0.5} ${cy - r} A${r} ${r} 0 1 0 ${cx + r * 0.5} ${cy + r} A${r * 0.78} ${r * 0.78} 0 1 1 ${cx + r * 0.5} ${cy - r} Z`);
  function star(cx, cy, r) {
    let p = "";
    for (let i = 0; i < 4; i++) {
      const a = i * 90 * Math.PI / 180;
      const bx = cx + Math.cos(a + 0.785) * r * 0.4, by = cy + Math.sin(a + 0.785) * r * 0.4;
      const tx = cx + Math.cos(a) * r, ty = cy + Math.sin(a) * r;
      p += `${i ? "L" : "M"}${bx} ${by} L${tx} ${ty} `;
    }
    return fill(p + "Z");
  }
  const cloud = (cx, cy, s = 1) =>
    fill(`M${cx - 34 * s} ${cy + 8 * s} q${-14 * s} ${-2 * s} ${-10 * s} ${-16 * s} q${4 * s} ${-14 * s} ${20 * s} ${-9 * s}
        q${6 * s} ${-16 * s} ${26 * s} ${-8 * s} q${16 * s} ${-10 * s} ${26 * s} ${6 * s}
        q${18 * s} ${-2 * s} ${12 * s} ${16 * s} q${-2 * s} ${11 * s} ${-16 * s} ${9 * s} Z`);
  const bird = (cx, cy, s = 1) =>
    fill(`M${cx} ${cy} q${-11 * s} ${-13 * s} ${-24 * s} ${-8 * s} q${16 * s} ${-1 * s} ${24 * s} ${8 * s}
        q${8 * s} ${-9 * s} ${24 * s} ${-8 * s} q${-13 * s} ${-5 * s} ${-24 * s} ${8 * s} Z`);

  // ---- landscape ----------------------------------------------------------
  const mountain = (cx, baseY, w, h) => {
    const hw = w / 2;
    return fill(`M${cx - hw} ${baseY} L${cx - hw * 0.15} ${baseY - h * 0.75} L${cx} ${baseY - h} L${cx + hw * 0.2} ${baseY - h * 0.7} L${cx + hw} ${baseY} Z`)
      + inc(`M${cx} ${baseY - h} L${cx - hw * 0.15} ${baseY - h * 0.55} M${cx} ${baseY - h} L${cx + hw * 0.2} ${baseY - h * 0.5}`, 1.6);
  };
  function tree(cx, baseY, s = 1) {
    const th = 60 * s, r = 34 * s;
    const cy = baseY - th - r + 8 * s;
    return fill(`M${cx - 4 * s} ${baseY} L${cx - 4 * s} ${cy} L${cx + 4 * s} ${cy} L${cx + 4 * s} ${baseY} Z`)
      + fill(`M${cx} ${cy - r} q${r} ${-r * 0.2} ${r} ${r * 0.55} q${r * 0.3} ${r * 0.7} ${-r * 0.5} ${r * 0.85}
          q${-r * 0.2} ${r * 0.5} ${-r * 0.5} ${r * 0.3} q${-r * 0.4} ${r * 0.35} ${-r * 0.75} ${-r * 0.05}
          q${-r * 0.8} ${-r * 0.05} ${-r * 0.55} ${-r * 0.7} q${-r * 0.5} ${-r * 0.4} ${r * 0.15} ${-r * 0.75}
          q${r * 0.1} ${-r * 0.55} ${r * 0.65} ${-r * 0.35} Z`)
      + [[-14, -8], [10, -14], [-4, 6], [16, 2], [-18, 4]].map(o => rdot(cx + o[0] * s, cy + o[1] * s, 2.4 * s, PARCH)).join("");
  }
  function grapes(cx, cy, s = 1) {
    let d = "";
    const rows = [[0], [-8, 8], [-14, 0, 14], [-8, 8], [0]];
    rows.forEach((row, r) => row.forEach(dx => { d += disc(cx + dx * s, cy + r * 11 * s, 5 * s); }));
    return d + fill(`M${cx - 3 * s} ${cy - 12 * s} q${3 * s} ${-6 * s} ${10 * s} ${-6 * s}`, GOLD);
  }
  function fish(cx, cy, s = 1) {
    return fill(`M${cx - 20 * s} ${cy} q${14 * s} ${-11 * s} ${34 * s} ${0} q${-6 * s} ${4 * s} ${-14 * s} ${4 * s}
        q${8 * s} ${2 * s} ${14 * s} ${0} q${-20 * s} ${11 * s} ${-34 * s} ${0}
        L${cx - 30 * s} ${cy + 8 * s} L${cx - 24 * s} ${cy} L${cx - 30 * s} ${cy - 8 * s} Z`)
      + rdot(cx + 8 * s, cy - 2 * s, 1.8, PARCH);
  }

  // sea band with reserved running-wave scrolls along the top
  function seaBand(topY) {
    let scroll = "";
    for (let x = 0; x <= W; x += 40) {
      scroll += inc(`M${x} ${topY + 8} q10 -12 20 0 q10 12 20 0`, 2);
    }
    return fill(`M0 ${topY} L${W} ${topY} L${W} ${H} L0 ${H} Z`) + scroll
      + inc(`M0 ${topY + 30} q40 -10 80 0 t80 0 t80 0 t80 0 t80 0 t80 0`, 1.6)
      + inc(`M0 ${topY + 52} q40 -10 80 0 t80 0 t80 0 t80 0 t80 0 t80 0`, 1.4);
  }

  // ---- draped human figure (black-figure, profile) ------------------------
  // opts: facing(1/-1), s(scale), female(bool), veil(bool), arm('staff'|'raise'|'offer'|'down'|'carry')
  function figure(cx, feetY, s, o = {}) {
    const f = o.facing === -1 ? -1 : 1;
    const headR = 8.5 * s;
    const headY = feetY - 108 * s;
    const shY = feetY - 90 * s;
    const hemY = feetY - (o.female ? 2 * s : 4 * s);
    const halfSh = 12 * s, halfHem = (o.female ? 22 : 24) * s;
    const parts = [];

    // robe silhouette (bell)
    parts.push(fill(`M${cx - halfSh} ${shY}
      C${cx - halfSh - 5 * s} ${shY + 34 * s} ${cx - halfHem} ${hemY - 30 * s} ${cx - halfHem} ${hemY}
      L${cx + halfHem} ${hemY}
      C${cx + halfHem} ${hemY - 30 * s} ${cx + halfSh + 5 * s} ${shY + 34 * s} ${cx + halfSh} ${shY}
      Q${cx} ${shY - 7 * s} ${cx - halfSh} ${shY} Z`));

    // neck
    parts.push(fill(`M${cx - 4 * s} ${headY + headR - 2} L${cx + 4 * s} ${headY + headR - 2} L${cx + 4 * s} ${shY - 2} L${cx - 4 * s} ${shY - 2} Z`));

    // head with profile nose + chin
    parts.push(fill(`M${cx} ${headY - headR}
      a${headR} ${headR} 0 1 0 0.1 0
      Z`));
    parts.push(fill(`M${cx + f * (headR - 1)} ${headY - 3 * s} q${f * 5 * s} ${1 * s} ${f * 4 * s} ${5 * s} q${-f * 1 * s} ${3 * s} ${-f * 5 * s} ${3 * s} Z`)); // nose

    // hair mass at back
    parts.push(fill(`M${cx - f * (headR - 1)} ${headY - headR * 0.7}
      q${-f * 7 * s} ${2 * s} ${-f * 6 * s} ${10 * s} q${-f * 1 * s} ${8 * s} ${f * 3 * s} ${12 * s}
      q${-f * 6 * s} ${-6 * s} ${-f * 3 * s} ${-14 * s} q${-f * 2 * s} ${-6 * s} ${f * 6 * s} ${-8 * s} Z`));
    if (o.female || o.veil) {
      // veil / mantle over head down the back
      parts.push(fill(`M${cx - headR} ${headY - headR + 2}
        q${-10 * s} ${4 * s} ${-9 * s} ${16 * s} L${cx - halfHem + 3 * s} ${hemY - 24 * s}
        q${-2 * s} ${-30 * s} ${9 * s} ${-46 * s} Z`));
    }
    // reserved eye + fillet
    parts.push(rdot(cx + f * 2 * s, headY - 3 * s, 1.6 * s));
    parts.push(inc(`M${cx - headR * 0.7} ${headY - headR + 3 * s} q${headR} ${-3 * s} ${headR * 1.5} ${1 * s}`, 1.6, GOLD));

    // drapery fold incisions
    parts.push(inc(`M${cx - 8 * s} ${shY + 12 * s} L${cx - 12 * s} ${hemY - 6 * s}
                    M${cx} ${shY + 14 * s} L${cx} ${hemY - 4 * s}
                    M${cx + 8 * s} ${shY + 12 * s} L${cx + 12 * s} ${hemY - 6 * s}`, 1.5));
    parts.push(inc(`M${cx - halfSh + 2 * s} ${shY + 24 * s} q${halfSh} ${6 * s} ${halfSh * 2 - 4 * s} 0`, 1.4));

    // arm
    const armY = shY + 8 * s;
    if (o.arm === "staff") {
      parts.push(fill(`M${cx + f * 6 * s} ${armY} q${f * 16 * s} ${2 * s} ${f * 18 * s} ${14 * s} l${-f * 5 * s} ${3 * s} q${-f * 4 * s} ${-9 * s} ${-f * 15 * s} ${-9 * s} Z`));
    } else if (o.arm === "raise") {
      parts.push(fill(`M${cx + f * 6 * s} ${armY} q${f * 14 * s} ${-2 * s} ${f * 16 * s} ${-18 * s} l${-f * 5 * s} ${-1 * s} q${-f * 3 * s} ${13 * s} ${-f * 13 * s} ${13 * s} Z`));
    } else if (o.arm === "offer" || o.arm === "carry") {
      parts.push(fill(`M${cx + f * 6 * s} ${armY} q${f * 18 * s} ${0} ${f * 22 * s} ${8 * s} l${-f * 4 * s} ${4 * s} q${-f * 6 * s} ${-6 * s} ${-f * 18 * s} ${-4 * s} Z`));
    } else {
      parts.push(fill(`M${cx + f * 5 * s} ${armY} q${f * 12 * s} ${4 * s} ${f * 12 * s} ${22 * s} l${-f * 5 * s} 0 q${0} ${-15 * s} ${-f * 11 * s} ${-17 * s} Z`));
    }

    // feet (peek out under robe for men)
    if (!o.female) {
      parts.push(fill(`M${cx - 12 * s} ${feetY - 2 * s} l${10 * s} 0 l${3 * s} ${5 * s} l${-15 * s} 0 Z`));
      parts.push(fill(`M${cx + 3 * s} ${feetY - 2 * s} l${10 * s} 0 l${3 * s} ${5 * s} l${-15 * s} 0 Z`));
    }
    return parts.join("");
  }

  // seated figure playing a lyre (bard)
  function bard(cx, feetY, s) {
    const parts = [];
    const seatY = feetY - 34 * s, hipY = seatY - 4 * s, headY = feetY - 96 * s;
    // stool
    parts.push(fill(`M${cx - 26 * s} ${seatY} l${52 * s} 0 l0 ${5 * s} l${-52 * s} 0 Z`));
    parts.push(fill(`M${cx - 22 * s} ${seatY + 5 * s} l${5 * s} 0 l${2 * s} ${28 * s} l${-6 * s} 0 Z`));
    parts.push(fill(`M${cx + 17 * s} ${seatY + 5 * s} l${5 * s} 0 l${2 * s} ${28 * s} l${-6 * s} 0 Z`));
    // thigh (seated) + lower leg
    parts.push(fill(`M${cx - 20 * s} ${hipY} q${34 * s} ${-6 * s} ${44 * s} ${2 * s} l0 ${8 * s} q${-20 * s} ${-4 * s} ${-44 * s} ${2 * s} Z`));
    parts.push(fill(`M${cx + 20 * s} ${hipY + 2 * s} l${7 * s} 0 l${2 * s} ${30 * s} l${-8 * s} 0 Z`));
    // torso leaning
    parts.push(fill(`M${cx - 14 * s} ${hipY - 2 * s} q${-4 * s} ${-30 * s} ${8 * s} ${-44 * s} l${14 * s} ${2 * s} q${8 * s} ${18 * s} ${2 * s} ${42 * s} Z`));
    // head
    parts.push(fill(`M${cx + 6 * s} ${headY} a${8 * s} ${8 * s} 0 1 0 0.1 0 Z`));
    parts.push(fill(`M${cx + 14 * s} ${headY + 2 * s} q${5 * s} 0 ${5 * s} ${5 * s} q${-3 * s} ${2 * s} ${-6 * s} ${1 * s} Z`)); // nose
    parts.push(rdot(cx + 8 * s, headY + 2 * s, 1.6));
    // arms to the lyre
    parts.push(fill(`M${cx + 2 * s} ${hipY - 34 * s} q${20 * s} ${6 * s} ${26 * s} ${20 * s} l${-5 * s} ${4 * s} q${-8 * s} ${-13 * s} ${-24 * s} ${-18 * s} Z`));
    // lyre (phorminx) — reserved strings
    parts.push(fill(`M${cx + 30 * s} ${hipY - 20 * s}
      q${18 * s} ${-4 * s} ${20 * s} ${16 * s} q${2 * s} ${20 * s} ${-14 * s} ${24 * s}
      q${10 * s} ${-8 * s} ${8 * s} ${-24 * s} q${-2 * s} ${-14 * s} ${-14 * s} ${-12 * s} Z`));
    for (let i = 0; i < 4; i++) parts.push(line(cx + 34 * s + i * 3 * s, hipY - 16 * s, cx + 32 * s + i * 3 * s, hipY + 14 * s, { s: PARCH, w: 1 }));
    return parts.join("");
  }

  // striding warrior (hoplite) — reused/ improved from the style test
  function warrior(cx, feetY, s, o = {}) {
    const f = o.facing === -1 ? -1 : 1;
    const T = (d) => d; // paths authored facing right; we translate/scale via g
    const inner = [
      fill("M150 44 Q120 30 96 46 Q120 40 138 54 Q118 52 104 66 Q128 60 146 70 L156 58 Z"),
      fill("M150 60 L164 58 L168 44 L154 42 Z"),
      fill("M150 66 Q182 66 186 96 Q188 112 176 120 L176 128 Q170 124 168 116 Q160 120 154 116 L150 128 Q140 118 146 104 Q140 92 150 66 Z"),
      fill("M156 126 L172 126 L170 142 L156 142 Z"),
      fill("M138 140 Q164 132 190 142 Q196 170 190 196 L150 198 Q140 196 138 190 Q132 165 138 140 Z"),
      fill("M186 148 Q210 150 214 128 L206 92 L214 92 L226 130 Q224 160 190 164 Z"),
      fill("M210 40 L216 40 L200 210 L194 210 Z"),
      fill("M213 34 L221 52 L205 52 Z"),
      fill("M150 196 L146 250 L134 300 L146 302 L162 252 L166 200 Z"),
      fill("M170 198 L182 246 L204 292 L192 298 L166 252 L156 200 Z"),
      fill("M132 300 L150 300 L150 308 L128 308 Z"),
      fill("M192 292 L212 300 L210 308 L188 300 Z"),
      disc(104, 196, 60),
      ring(104, 196, 54, 3, PARCH),
      ring(104, 196, 44, 2, PARCH),
      fill("M104 166 Q122 196 104 226 Q86 196 104 166 Z", PARCH),
      disc(104, 196, 5, PARCH),
      inc("M162 96 L173 96", 3),
      inc("M150 168 Q166 160 188 168", 2),
      inc("M146 150 L186 149", 1.6),
    ].join("");
    // authored on a ~230-wide box; normalise around x=150 then place
    return `<g transform="translate(${cx},${feetY}) scale(${(f * s).toFixed(3)},${s}) translate(${-150},${-308})">${inner}</g>`;
  }

  // small running / fleeing / fallen figures (silhouette)
  function runner(cx, feetY, s, o = {}) {
    const f = o.facing === -1 ? -1 : 1;
    const inner = [
      fill("M150 18 a12 12 0 1 0 0.1 0 Z"),
      fill("M160 20 q6 0 6 6 q-3 3 -7 1 Z"),
      fill("M144 30 Q168 26 176 40 Q186 60 176 96 L160 96 Q166 64 156 48 Q150 44 140 46 Z"),
      // trailing arm
      fill("M150 50 Q120 54 112 40 l4 -7 q8 10 34 8 Z"),
      // leading arm
      fill("M170 52 Q198 58 206 78 l-7 3 q-8 -16 -30 -20 Z"),
      // back leg
      fill("M158 92 Q150 120 128 138 l7 8 q26 -18 34 -46 Z"),
      // front leg
      fill("M170 94 Q184 118 210 128 l-2 9 q-30 -10 -46 -34 Z"),
      inc("M155 24 L166 24", 2),
    ].join("");
    return `<g transform="translate(${cx},${feetY}) scale(${(f * s).toFixed(3)},${s}) translate(${-160},${-150})">${inner}</g>`;
  }
  function fallen(cx, cy, s) {
    const inner = [
      fill("M40 40 a11 11 0 1 0 0.1 0 Z"),
      fill("M50 44 Q120 30 190 46 Q200 50 198 58 Q120 74 52 60 Z"),
      fill("M120 52 Q140 70 128 92 l-9 -3 q9 -18 1 -34 Z"),
      fill("M150 50 Q176 60 172 84 l-9 -2 q4 -20 -18 -26 Z"),
      inc("M48 40 L60 40", 2),
    ].join("");
    return `<g transform="translate(${cx},${cy}) scale(${s}) translate(${-120},${-60})">${inner}</g>`;
  }

  // ox (bovine silhouette, profile)
  function ox(cx, feetY, s) {
    const inner = [
      fill("M30 60 Q30 30 60 28 L150 28 Q176 28 178 54 L178 96 L162 96 L162 60 L60 60 Q48 60 48 74 L48 96 L34 96 Z"),
      fill("M96 60 L96 96 L82 96 L82 60 Z"),
      fill("M150 60 L150 96 L136 96 L136 60 Z"),
      // head + horns
      fill("M178 40 Q206 34 210 54 Q212 70 196 74 L178 66 Z"),
      fill("M198 40 Q206 24 216 22 Q210 34 208 46 Z"),
      fill("M204 44 Q216 34 226 38 Q214 42 208 52 Z"),
      // tail
      fill("M30 60 Q18 70 22 90 l5 0 q-2 -16 8 -24 Z"),
      inc("M60 60 Q100 52 150 60", 1.6),
      rdot(200, 52, 1.8),
    ].join("");
    return `<g transform="translate(${cx},${feetY}) scale(${s}) translate(${-120},${-96})">${inner}</g>`;
  }

  // ---- vessels (black-figure pottery) ------------------------------------
  function krater(cx, baseY, s) {
    const parts = [];
    parts.push(fill(`M${cx - 34 * s} ${baseY - 66 * s}
      Q${cx - 40 * s} ${baseY - 24 * s} ${cx - 14 * s} ${baseY - 16 * s}
      L${cx + 14 * s} ${baseY - 16 * s}
      Q${cx + 40 * s} ${baseY - 24 * s} ${cx + 34 * s} ${baseY - 66 * s}
      Q${cx} ${baseY - 56 * s} ${cx - 34 * s} ${baseY - 66 * s} Z`));
    parts.push(fill(`M${cx - 42 * s} ${baseY - 66 * s} q${8 * s} ${0} ${8 * s} ${0} l${68 * s} 0 q${8 * s} 0 ${8 * s} 0 l0 ${4 * s} l${-84 * s} 0 Z`)); // rim
    parts.push(fill(`M${cx - 12 * s} ${baseY - 16 * s} l${24 * s} 0 l0 ${6 * s} l${-24 * s} 0 Z`)); // stem
    parts.push(fill(`M${cx - 16 * s} ${baseY - 10 * s} l${32 * s} 0 l${4 * s} ${8 * s} l${-40 * s} 0 Z`)); // foot
    // volute handles
    parts.push(inc(`M${cx - 34 * s} ${baseY - 60 * s} q${-16 * s} ${4 * s} ${-8 * s} ${-14 * s} q${4 * s} ${-6 * s} ${8 * s} ${-2 * s}`, 2.4));
    parts.push(inc(`M${cx + 34 * s} ${baseY - 60 * s} q${16 * s} ${4 * s} ${8 * s} ${-14 * s} q${-4 * s} ${-6 * s} ${-8 * s} ${-2 * s}`, 2.4));
    // reserved band with a figure-of-eight ornament
    parts.push(inc(`M${cx - 24 * s} ${baseY - 40 * s} q${24 * s} ${8 * s} ${48 * s} 0`, 1.6, GOLD));
    parts.push(inc(`M${cx - 20 * s} ${baseY - 32 * s} h${40 * s}`, 1.4));
    return parts.join("");
  }
  function cup(cx, baseY, s) {
    return fill(`M${cx - 20 * s} ${baseY - 34 * s} Q${cx - 22 * s} ${baseY - 16 * s} ${cx} ${baseY - 14 * s}
        Q${cx + 22 * s} ${baseY - 16 * s} ${cx + 20 * s} ${baseY - 34 * s} Z`)
      + fill(`M${cx - 24 * s} ${baseY - 34 * s} l${48 * s} 0 l0 ${3 * s} l${-48 * s} 0 Z`)
      + fill(`M${cx - 3 * s} ${baseY - 14 * s} l${6 * s} 0 l0 ${12 * s} l${-3 * s} 0 Z`)
      + fill(`M${cx - 12 * s} ${baseY - 2 * s} l${24 * s} 0 l${3 * s} ${4 * s} l${-30 * s} 0 Z`)
      + inc(`M${cx + 20 * s} ${baseY - 30 * s} q${12 * s} ${2 * s} ${6 * s} ${14 * s}`, 2.2)
      + inc(`M${cx - 14 * s} ${baseY - 26 * s} h${28 * s}`, 1.4, GOLD);
  }
  function amphora(cx, baseY, s) {
    return fill(`M${cx - 16 * s} ${baseY - 70 * s} Q${cx - 30 * s} ${baseY - 44 * s} ${cx - 18 * s} ${baseY - 16 * s}
        L${cx + 18 * s} ${baseY - 16 * s} Q${cx + 30 * s} ${baseY - 44 * s} ${cx + 16 * s} ${baseY - 70 * s} Z`)
      + fill(`M${cx - 12 * s} ${baseY - 82 * s} l${24 * s} 0 l0 ${14 * s} l${-24 * s} 0 Z`)
      + fill(`M${cx - 16 * s} ${baseY - 84 * s} l${32 * s} 0 l0 ${4 * s} l${-32 * s} 0 Z`)
      + fill(`M${cx - 10 * s} ${baseY - 16 * s} l${20 * s} 0 l${4 * s} ${8 * s} l${-28 * s} 0 Z`)
      + inc(`M${cx - 16 * s} ${baseY - 74 * s} q${-14 * s} ${6 * s} ${-2 * s} ${18 * s}`, 2.4)
      + inc(`M${cx + 16 * s} ${baseY - 74 * s} q${14 * s} ${6 * s} ${2 * s} ${18 * s}`, 2.4)
      + inc(`M${cx - 14 * s} ${baseY - 44 * s} q${14 * s} ${6 * s} ${28 * s} 0`, 1.6, GOLD);
  }

  // fire / flame (gold-tipped ink)
  const flame = (cx, cy, s = 1) =>
    fill(`M${cx} ${cy} q${8 * s} ${-14 * s} ${2 * s} ${-26 * s} q${10 * s} ${8 * s} ${6 * s} ${20 * s}
        q${6 * s} ${-6 * s} ${5 * s} ${-16 * s} q${9 * s} ${12 * s} ${1 * s} ${28 * s} Z`, GOLD)
    + fill(`M${cx - 12 * s} ${cy + 2 * s} q${12 * s} ${-8 * s} ${24 * s} 0 Z`);

  // ---- scene builders -----------------------------------------------------
  const scenes = {};

  scenes.sky = () => [
    meander(20, 14, 440, 15),
    sun(232, 60, 22),
    moon(360, 44, 15),
    star(140, 40, 7), star(96, 58, 6), star(176, 48, 5),
    cloud(150, 96, 1.05),
    bird(196, 132, 1.1),
    // wind: a puffing head with streaming gusts (vase convention for Boreas)
    disc(420, 116, 16),
    fill("M420 116 q18 -2 30 -12 q-6 12 -20 16 Z", GOLD),
    fill("M404 122 q-30 2 -44 -6 q40 -2 44 -2 Z", GOLD),
    fill("M404 132 q-26 4 -40 -2 q34 -4 40 -4 Z", GOLD),
    rdot(414, 112, 1.8, PARCH),
    fill("M420 100 q4 -10 -2 -18 q10 4 8 16 Z", GOLD),
    // rain from a small cloud
    cloud(404, 150, 0.5),
    line(396, 168, 390, 190, { s: GOLD, w: 2 }), line(408, 168, 402, 192, { s: GOLD, w: 2 }), line(420, 168, 414, 190, { s: GOLD, w: 2 }),
    mountain(96, 262, 150, 70),
    fill("M0 262 Q240 250 480 264 L480 268 Q240 254 0 266 Z"),
    // cast shadow
    fill("M120 300 q40 -10 84 0 q-40 10 -84 0 Z", GOLD),
  ].join("");

  // ---- EARTH scene: three-colour (orange / black / light-blue) --------------
  // A ploughing landscape after the reference: olive tree, timber, spring-rock,
  // wheat, ploughman & ox, and a laden grapevine.
  scenes.earth = () => {
    const ORG = "#d59a63";   // sunlit ground / sky
    const FIELD = "#5d4029"; // dark tilled soil
    const FUR = "#815838";   // furrow lines
    const BLK = "#1d150e";   // silhouettes
    const VEIN = "#d59a63";  // orange incision on black
    const BLU = "#accbdb";   // spring water
    const BLUD = "#7ba3ba";  // water shadow
    const WHEAT = "#c9a066"; // grain
    const p = [];
    const F = (d, c = BLK) => `<path d="${d}" fill="${c}"/>`;
    const S = (d, w, c) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;

    // background wash + rolling land
    p.push(`<rect x="0" y="0" width="480" height="340" fill="${ORG}"/>`);
    for (let i = 0; i < 5; i++) { const y = 96 + i * 11; p.push(S(`M250 ${y} Q360 ${y - 7} 480 ${y - 1}`, 1.2, "#c78a52")); }
    // dark tilled field with furrows
    p.push(F("M0 168 C120 150 250 150 340 168 C400 180 442 196 480 214 L480 340 L0 340 Z", FIELD));
    for (let i = 0; i < 11; i++) { const o = i * 15; p.push(S(`M0 ${182 + o} C120 ${164 + o} 250 ${164 + o} 340 ${182 + o} C402 ${194 + o} 442 ${210 + o} 480 ${228 + o}`, 1.3, FUR)); }

    // ---- olive tree (left) ----
    p.push(F("M70 208 Q60 202 57 208 Q52 176 66 140 Q73 116 82 98 L94 102 Q86 128 82 152 Q79 182 86 208 Q78 213 70 208 Z"));
    ["M86 100 Q58 82 32 88", "M86 100 Q68 68 58 44", "M86 100 Q104 72 134 70", "M88 98 Q96 58 96 36", "M88 106 Q114 92 152 98", "M84 108 Q60 106 40 120"]
      .forEach(d => p.push(S(d, 3.4, BLK)));
    const leaf = (cx, cy, rot) => `<g transform="rotate(${rot} ${cx} ${cy})"><ellipse cx="${cx}" cy="${cy}" rx="3.1" ry="7.6" fill="${BLK}"/><line x1="${cx}" y1="${cy - 6}" x2="${cx}" y2="${cy + 6}" stroke="${VEIN}" stroke-width="0.7"/></g>`;
    [[32, 88], [44, 74], [58, 44], [50, 60], [96, 36], [106, 50], [134, 70], [122, 60], [152, 98], [140, 84], [86, 58], [72, 64], [112, 82], [40, 118], [58, 108], [128, 92], [96, 72], [80, 42], [116, 42], [148, 86], [34, 100], [66, 90], [104, 100], [140, 108]]
      .forEach((q, i) => p.push(leaf(q[0], q[1], (i * 53) % 170 - 85)));
    p.push(disc(74, 66, 3, ORG)); p.push(disc(112, 96, 3, ORG)); // olives

    // ---- timber: stacked cut logs ----
    const log = (x, y, len) => F(`M${x} ${y} l${len} 0 a7 7 0 0 1 0 14 l${-len} 0 a7 7 0 0 1 0 -14 Z`)
      + `<ellipse cx="${x + len}" cy="${y + 7}" rx="4.6" ry="7" fill="${ORG}"/><ellipse cx="${x + len}" cy="${y + 7}" rx="2.4" ry="4" fill="none" stroke="${BLK}" stroke-width="0.8"/>`;
    p.push(log(98, 180, 44)); p.push(log(104, 168, 46)); p.push(log(114, 157, 40));

    // ---- spring-rock with light-blue water ----
    p.push(F("M70 250 L86 208 L108 212 L122 236 L130 266 L106 280 L78 274 Z"));
    ["M84 224 L110 232", "M78 244 L118 252", "M92 258 L120 266", "M96 218 L100 244"].forEach(d => p.push(S(d, 1.1, VEIN)));
    p.push(F("M104 256 Q108 286 124 300 L150 300 Q140 282 130 256 Z", BLU));
    p.push(S("M112 262 Q116 284 128 298 M122 260 Q126 282 138 298", 1.2, BLUD));
    p.push(`<ellipse cx="150" cy="316" rx="56" ry="14" fill="${BLU}"/>`);
    ["M108 316 Q150 306 192 316", "M120 322 Q150 315 182 322"].forEach(d => p.push(S(d, 1.2, BLUD)));

    // ---- wheat / crop ----
    const stalk = (x, baseY, h) => {
      const ty = baseY - h; let g = S(`M${x} ${baseY} L${x} ${ty + 5}`, 1.6, WHEAT);
      for (let i = 0; i < 5; i++) { const yy = ty + i * 5; g += S(`M${x} ${yy + 6} q6 -3 5 -8 M${x} ${yy + 6} q-6 -3 -5 -8`, 1.2, WHEAT); }
      g += S(`M${x} ${ty} L${x - 4} ${ty - 8} M${x} ${ty} L${x + 4} ${ty - 8} M${x} ${ty} L${x} ${ty - 9}`, 1, WHEAT);
      return g;
    };
    [[186, 280, 48], [196, 284, 56], [206, 280, 52], [216, 285, 58], [226, 281, 50], [176, 283, 42]].forEach(s => p.push(stalk(s[0], s[1], s[2])));

    // ---- ploughman ----
    p.push((function () {
      const inner = [
        F("M52 8 a9 9 0 1 0 0.1 0 Z"),
        F("M60 10 q6 1 6 7 q-3 3 -8 1 Z"),
        F("M44 20 Q35 34 33 54 L48 58 Q52 36 58 22 Z"),
        F("M33 50 L58 55 L63 76 L27 71 Z"),
        F("M40 71 L25 106 l8 3 L52 75 Z"),
        F("M52 73 L71 102 l-8 4 L46 77 Z"),
        F("M47 26 Q71 32 94 53 l-4 6 Q67 41 45 34 Z"),
        `<line x1="54" y1="12" x2="64" y2="12" stroke="${VEIN}" stroke-width="1.6"/>`,
      ].join("");
      return `<g transform="translate(215,175) scale(1.02) translate(-48,-106)">${inner}</g>`;
    })());
    // plough (share, handle, beam to the ox)
    p.push(F("M232 176 L262 190 L268 186 L242 170 Z"));
    p.push(F("M242 170 L231 148 l5 -2 L249 168 Z"));
    p.push(S("M262 188 L322 180", 4, BLK));

    // ---- ox (profile, facing right, pulling) ----
    p.push(F("M300 152 Q356 141 404 154 Q416 158 416 172 L416 178 Q400 184 356 184 Q316 184 305 177 Q297 168 300 152 Z")); // barrel
    p.push(F("M410 160 Q438 159 444 178 Q446 191 430 192 L412 184 Q405 173 407 163 Z"));                                    // head/muzzle
    p.push(F("M416 162 Q421 142 436 137 Q428 150 427 165 Z"));                                                              // horn back
    p.push(F("M422 164 Q435 151 449 153 Q436 159 431 172 Z"));                                                              // horn front
    p.push(rdot(432, 173, 1.8, VEIN));                                                                                       // eye
    p.push(F("M300 152 Q290 166 295 188 l5 -1 q-4 -18 6 -30 Z"));                                                            // tail
    p.push(F("M394 182 L392 216 L399 216 L401 182 Z")); p.push(F("M407 180 L409 214 L416 214 L414 180 Z"));                  // front legs
    p.push(F("M311 180 L307 215 L314 215 L318 180 Z")); p.push(F("M327 182 L325 217 L332 217 L335 182 Z"));                  // back legs
    p.push(S("M312 172 Q358 178 406 170", 1.2, VEIN));                                                                       // belly line
    p.push(S("M262 188 Q292 182 306 174", 4, BLK));                                                                          // plough beam/trace to ox

    // ---- grapevine (right) ----
    p.push(F("M427 302 l6 0 l0 -184 l-6 0 Z", BLK));                 // stake
    p.push(S("M430 300 q-14 -30 4 -60 q14 -26 -2 -54 q-12 -22 4 -46", 3, BLK)); // twining stem
    const vleaf = (cx, cy, s, rot) => `<g transform="translate(${cx} ${cy}) rotate(${rot}) scale(${s})"><path d="M0 9 C-11 7 -15 -2 -11 -7 C-13 -13 -6 -15 -3 -11 C-2 -17 4 -17 5 -11 C11 -15 16 -8 12 -4 C17 -2 15 7 4 9 C4 13 0 13 0 9 Z" fill="${BLK}"/><path d="M0 9 L0 -7 M0 1 L-8 -5 M0 1 L9 -4" stroke="${VEIN}" stroke-width="0.8" fill="none"/></g>`;
    [[418, 100, 1.5, -18], [446, 128, 1.3, 22], [410, 138, 1.2, -6], [440, 162, 1.15, 30], [420, 176, 1.0, -24]].forEach(v => p.push(vleaf(v[0], v[1], v[2], v[3])));
    ["M418 108 q16 -8 10 -20", "M446 140 q14 6 8 18", "M412 150 q-12 6 -6 16"].forEach(d => p.push(S(d, 1, VEIN))); // tendrils
    // grape cluster
    p.push((function () { let g = ""; const rows = [[0], [-9, 9], [-15, 0, 15], [-9, 9], [0]]; rows.forEach((row, r) => row.forEach(dx => { g += `<circle cx="${413 + dx}" cy="${178 + r * 11}" r="6" fill="${BLK}"/>`; g += `<circle cx="${411 + dx}" cy="${176 + r * 11}" r="1.6" fill="${VEIN}"/>`; })); return g; })());
    // flowers at the vine's foot
    const flower = (cx, cy) => `<g>${[...Array(6)].map((_, i) => { const a = i * 60 * Math.PI / 180; const fx = cx + Math.cos(a) * 6, fy = cy + Math.sin(a) * 6; return `<ellipse cx="${fx.toFixed(1)}" cy="${fy.toFixed(1)}" rx="2.8" ry="5" fill="${BLK}" transform="rotate(${i * 60} ${fx.toFixed(1)} ${fy.toFixed(1)})"/>`; }).join("")}<circle cx="${cx}" cy="${cy}" r="2.8" fill="${ORG}"/></g>`;
    p.push(S("M432 296 L430 274", 1.4, BLK)); p.push(flower(432, 270));
    p.push(S("M452 298 L451 280", 1.4, BLK)); p.push(flower(451, 276));

    return p.join("");
  };

  scenes.sea = () => [
    meander(20, 12, 440, 14),
    // spring high-left feeding a river ribbon
    fill("M20 54 q16 -12 32 -2 q-2 14 -16 12 q-14 2 -16 -10 Z"),
    fill("M30 66 Q46 120 40 180 l10 0 Q56 120 40 66 Z"),
    // island (two humps) upper-right
    fill("M330 118 q22 -30 52 -10 q26 -14 46 6 q-14 12 -50 12 q-38 4 -48 -8 Z"),
    inc("M352 108 q10 -12 20 -2 M392 110 q10 -10 18 -2", 1.6, PARCH),
    // headland promontory right
    fill("M440 214 L474 188 L480 214 Z"),
    seaBand(196),
    fish(190, 258, 1.1),
    // harbour crescent lower-left (reserved)
    inc("M40 300 q46 -24 96 -2", 2.4, PARCH),
    // cave mouth in the sea-cliff lower-right (reserved arch)
    fill("M420 300 q0 -30 28 -30 q28 0 28 30 Z"),
    fill("M432 300 q0 -18 16 -18 q16 0 16 18 Z", PARCH),
  ].join("");

  scenes.ship = () => {
    const p = [];
    p.push(meander(20, 10, 440, 14));
    p.push(inc("M0 214 q40 -10 80 0 t80 0 t80 0 t80 0 t80 0 t80 0", 1.8, GOLD));
    // hull
    p.push(fill("M70 210 Q240 262 410 206 Q392 244 320 252 L160 252 Q108 246 70 210 Z"));
    p.push(inc("M96 216 Q240 252 386 212", 1.6));
    for (const x of [140, 176, 212, 268, 304, 340]) p.push(rdot(x, 230, 3));
    // stem + stern posts
    p.push(fill("M70 210 Q48 186 64 164 Q78 176 78 200 Z"));
    p.push(fill("M410 206 Q432 180 418 156 Q402 170 402 196 Z"));
    // steering oar
    p.push(fill("M412 214 L452 260 L458 254 L420 208 Z"));
    p.push(fill("M448 254 l16 6 l-6 12 Z"));
    // mast + yard
    p.push(fill("M236 224 l8 0 l0 -158 l-8 0 Z"));
    p.push(fill("M172 90 l136 0 l0 5 l-136 0 Z"));
    // sail (reserved, ink outline + gold band)
    p.push(fill("M180 92 Q240 108 300 92 L294 178 Q240 192 186 178 Z"));
    p.push(fill("M186 96 Q240 110 294 96 L290 172 Q240 184 190 172 Z", PARCH));
    for (const x of [214, 240, 266]) p.push(line(x, 100, x, 176, { s: GOLD, w: 1.4, op: 0.8 }));
    p.push(line(240, 70, 74, 198, { s: INK, w: 1.4 }));
    p.push(line(240, 70, 406, 196, { s: INK, w: 1.4 }));
    // oars
    for (const o of [[150, 236], [186, 240], [222, 244]]) p.push(fill(`M${o[0]} ${o[1]} l6 3 l-40 52 l-6 -3 Z`));
    for (const o of [[300, 244], [336, 240]]) p.push(fill(`M${o[0]} ${o[1]} l-6 3 l40 52 l6 -3 Z`));
    // a rower's head
    p.push(disc(258, 200, 8));
    p.push(rdot(261, 199, 1.6));
    return p.join("");
  };

  scenes.fight = () => {
    const p = [];
    p.push(meander(20, 10, 440, 14));
    p.push(warrior(150, 306, 0.92));
    // bow + arrow (right)
    p.push(fill("M330 92 Q372 150 338 208 l-6 -2 Q364 150 324 94 Z"));
    p.push(line(330, 96, 330, 204, { s: GOLD, w: 1.6 }));
    p.push(fill("M330 150 L408 136 L400 132 L326 146 Z"));
    p.push(fill("M408 136 l-14 -4 l4 10 Z"));
    // sword lying (lower left, near bronze)
    p.push(fill("M60 244 l70 -8 l0 6 l-70 8 Z"));
    p.push(fill("M126 234 l16 -2 l2 8 l-16 2 Z"));
    // fleeing figure (far right)
    p.push(runner(408, 300, 0.62, { facing: 1 }));
    // fallen figure (lower centre)
    p.push(fallen(250, 300, 0.62));
    p.push(fill("M226 316 q40 -8 74 0 q-40 8 -74 0 Z", GOLD));
    return p.join("");
  };

  scenes.speech = () => [
    meander(20, 10, 440, 14),
    // elder speaking with staff, left
    figure(150, 292, 1.15, { facing: 1, arm: "raise" }),
    fill("M96 96 l5 0 l3 176 l-5 0 Z"),      // staff
    disc(98, 90, 6, GOLD),
    // seated bard with lyre, right
    bard(320, 288, 1.1),
    // "winged words" rising between them (reserved chevrons on ink marks)
    fill("M206 96 q12 -8 24 0 q-12 -2 -24 0 Z"),
    fill("M214 116 q14 -8 28 0 q-14 -2 -28 0 Z"),
    fill("M206 136 q12 -8 24 0 q-12 -2 -24 0 Z"),
    // assembly ground + pebbles
    line(40, 300, 440, 300, { w: 2 }),
    [70, 110, 360, 400, 430].map(x => `<ellipse cx="${x}" cy="308" rx="8" ry="4" fill="${INK}"/>`).join(""),
  ].join("");

  scenes.body = () => {
    // one large nude black-figure youth, frontal-ish, arms out
    const p = [];
    p.push(meander(20, 10, 440, 13));
    const cx = 226;
    // head
    p.push(fill(`M${cx} 20 a22 26 0 1 0 0.1 0 Z`));
    p.push(fill(`M${cx + 20} 40 q8 2 6 12 q-4 3 -8 0 Z`)); // nose (profile-ish)
    // hair cap
    p.push(fill(`M${cx - 22} 40 Q${cx} 6 ${cx + 22} 40 Q${cx} 26 ${cx - 22} 40 Z`));
    p.push(rdot(cx + 8, 42, 2.2)); p.push(rdot(cx - 6, 42, 2.2));
    p.push(inc(`M${cx - 8} 60 h16`, 1.8)); // mouth
    p.push(fill(`M${cx - 20} 46 q-6 4 0 12 l4 -2 q-4 -4 0 -8 Z`)); // ear
    // neck
    p.push(fill(`M${cx - 6} 66 l12 0 l0 20 l-12 0 Z`));
    // torso
    p.push(fill(`M${cx - 40} 92 Q${cx} 78 ${cx + 40} 92 Q${cx + 34} 132 ${cx + 30} 150 Q${cx + 20} 182 ${cx + 18} 186 L${cx - 18} 186 Q${cx - 20} 182 ${cx - 30} 150 Q${cx - 34} 132 ${cx - 40} 92 Z`));
    p.push(inc(`M${cx - 24} 116 q24 12 48 0`, 1.8)); // pectoral
    p.push(inc(`M${cx} 120 L${cx} 182`, 1.5)); p.push(inc(`M${cx - 16} 150 q16 8 32 0`, 1.5));
    // arms out
    p.push(fill(`M${cx - 38} 96 Q${cx - 74} 122 ${cx - 100} 176 l-8 20 l8 3 l8 -19 Q${cx - 60} 128 ${cx - 30} 108 Z`));
    p.push(fill(`M${cx + 38} 96 Q${cx + 74} 122 ${cx + 100} 176 l8 20 l-8 3 l-8 -19 Q${cx + 60} 128 ${cx + 30} 108 Z`));
    // hands
    p.push(fill(`M${cx - 112} 196 q-10 2 -10 12 q0 8 8 10 l10 -2 q-4 -6 -2 -12 Z`));
    p.push(fill(`M${cx + 112} 196 q10 2 10 12 q0 8 -8 10 l-10 -2 q4 -6 2 -12 Z`));
    p.push([...Array(3)].map((_, i) => line(cx - 118 + i * 3, 214, cx - 119 + i * 3, 222, { w: 1.3 })).join(""));
    // legs
    p.push(fill(`M${cx - 18} 186 Q${cx - 26} 240 ${cx - 22} 252 L${cx - 26} 306 l10 0 L${cx - 12} 252 Q${cx - 8} 220 ${cx - 2} 186 Z`));
    p.push(fill(`M${cx + 18} 186 Q${cx + 26} 240 ${cx + 22} 252 L${cx + 26} 306 l-10 0 L${cx + 12} 252 Q${cx + 8} 220 ${cx + 2} 186 Z`));
    p.push(inc(`M${cx - 21} 246 h8`, 1.5, GOLD)); p.push(inc(`M${cx + 13} 246 h8`, 1.5, GOLD)); // knees
    // feet
    p.push(fill(`M${cx - 26} 306 l-16 4 l0 6 l22 0 l0 -10 Z`));
    p.push(fill(`M${cx + 26} 306 l16 4 l0 6 l-22 0 l0 -10 Z`));
    return p.join("");
  };

  scenes.house = () => {
    const p = [];
    p.push(meander(20, 8, 440, 13));
    // pediment
    p.push(fill("M96 108 L240 44 L384 108 Z"));
    p.push(fill("M108 106 L240 48 L372 106 Z", PARCH));
    // entablature
    p.push(fill("M92 108 l296 0 l0 18 l-296 0 Z"));
    for (const x of [120, 160, 200, 280, 320, 360]) p.push(rdot(x, 117, 2, GOLD));
    // columns (ink) with reserved flutes
    for (const x of [122, 300]) {
      p.push(fill(`M${x} 126 l22 0 l-3 146 l-16 0 Z`));
      p.push(inc(`M${x + 5} 132 l-2 134 M${x + 11} 132 l0 134 M${x + 17} 132 l2 134`, 1.2));
    }
    p.push(fill("M170 126 l20 0 l-2 146 l-16 0 Z"));
    p.push(inc("M175 132 l-1 134 M181 132 l0 134", 1.2));
    p.push(fill("M354 126 l20 0 l2 146 l-16 0 Z"));
    // inner wall + doorway (reserved)
    p.push(fill("M206 126 l68 0 l0 146 l-68 0 Z"));
    p.push(fill("M216 156 l48 0 l0 116 l-48 0 Z", PARCH));
    p.push(fill("M236 156 l8 0 l0 116 l-8 0 Z"));   // door leaf division
    p.push(inc("M240 156 l0 116", 1.4, GOLD));
    // threshold slab (gold)
    p.push(fill("M196 272 l88 0 l4 12 l-96 0 Z", GOLD));
    // side chamber + couch (left)
    p.push(fill("M50 150 l6 0 l0 122 l64 0 l0 6 l-70 0 Z"));
    p.push(fill("M62 234 l44 0 l0 6 l-44 0 Z"));
    p.push(fill("M64 240 l5 0 l0 26 l-5 0 Z M100 240 l5 0 l0 26 l-5 0 Z"));
    p.push(fill("M62 234 q-2 -12 10 -12 l8 0 l0 4 l-8 0 q-6 0 -6 8 Z"));
    // courtyard enclosure (right, reserved dashed)
    p.push(inc("M396 200 l66 0 l0 84 l-66 0", 2, PARCH));
    p.push(fill("M416 256 l28 0 l-4 -16 l-20 0 Z"));
    // hearth + fire
    p.push(fill("M292 286 q0 -14 26 -14 q26 0 26 14 Z"));
    p.push(flame(316, 280, 0.8));
    p.push(line(30, 300, 470, 300, { w: 2 }));
    return p.join("");
  };

  scenes.feast = () => [
    meander(20, 12, 440, 14),
    krater(94, 178, 1.0),
    cup(304, 150, 1.05),
    // table with loaves
    fill("M188 210 L300 204 L300 216 L188 222 Z"),
    fill("M198 222 l6 0 l-4 46 l-8 0 Z M290 216 l6 0 l6 52 l-8 0 Z M242 220 l6 0 l0 50 l-6 0 Z"),
    (function () { return `<ellipse cx="214" cy="206" rx="13" ry="6" fill="${INK}"/>` + `<ellipse cx="240" cy="204" rx="10" ry="5" fill="${INK}"/>` + inc("M204 206 q10 -5 20 0 M232 204 q8 -4 16 0", 1.5, GOLD); })(),
    // spit with meat over fire (right)
    line(370, 176, 456, 176, { s: GOLD, w: 3 }),
    [388, 408, 428].map(x => `<ellipse cx="${x}" cy="176" rx="9" ry="12" fill="${INK}"/>` + rdot(x + 2, 174, 1.4, PARCH)).join(""),
    flame(412, 250, 0.85),
    fill("M388 252 q0 -12 24 -12 q24 0 24 12 Z"),
    // herald standing left with staff
    figure(56, 300, 0.95, { facing: 1, arm: "staff" }),
    fill("M40 232 l5 0 l3 74 l-5 0 Z", GOLD),
    // seated guest right (simple)
    figure(430, 300, 0.9, { facing: -1, arm: "offer" }),
    line(30, 300, 470, 300, { w: 2 }),
  ].join("");

  scenes.gods = () => [
    meander(20, 12, 440, 14),
    // enthroned god on a cloud
    cloud(200, 88, 1.15),
    figure(210, 130, 1.0, { facing: -1, arm: "raise", veil: true }),
    // aegis: fringed storm-shield beside the god (disc with reserved gorgon + tassels)
    disc(296, 78, 17),
    ring(296, 78, 12, 2, PARCH),
    rdot(296, 78, 3.5, PARCH),
    (function () { let d = ""; for (let i = 0; i < 10; i++) { const a = i * 36 * Math.PI / 180; d += fill(`M${(296 + Math.cos(a) * 17).toFixed(1)} ${(78 + Math.sin(a) * 17).toFixed(1)} L${(296 + Math.cos(a) * 23).toFixed(1)} ${(78 + Math.sin(a) * 23).toFixed(1)} l2 2 Z`, GOLD); } return d; })(),
    // rising smoke
    inc("M240 196 q-14 -18 4 -30 q-16 -16 2 -30 q-12 -14 4 -24", 2.4, GOLD),
    // altar (stepped)
    fill("M196 236 L284 236 L276 210 L204 210 Z"),
    fill("M204 210 L276 210 L272 196 L208 196 Z"),
    fill("M206 208 L274 208 L271 198 L209 198 Z", PARCH),
    flame(240, 196, 0.75),
    // priest praying, right
    figure(384, 260, 1.0, { facing: -1, arm: "raise" }),
    // libation trickle
    line(360, 176, 356, 200, { s: GOLD, w: 1.6, dash: "3 4" }),
    // ox lower-left
    ox(96, 300, 0.62),
    line(30, 300, 470, 300, { w: 2 }),
  ].join("");

  scenes.people = () => [
    meander(20, 12, 440, 14),
    // father with staff (left)
    figure(72, 296, 1.05, { facing: 1, arm: "staff" }),
    fill("M46 116 l5 0 l3 176 l-5 0 Z", GOLD),
    // veiled mother (centre-left)
    figure(178, 296, 1.05, { facing: -1, female: true, veil: true, arm: "offer" }),
    // child (small)
    figure(250, 296, 0.62, { facing: -1, arm: "down" }),
    // king enthroned with sceptre (right)
    (function () {
      const p = [];
      // throne
      p.push(fill("M338 250 l72 0 l0 6 l-72 0 Z"));
      p.push(fill("M340 176 l6 0 l0 78 l-6 0 Z M404 176 l6 0 l0 78 l-6 0 Z"));
      p.push(fill("M340 176 l70 0 l0 8 l-70 0 Z"));
      return p.join("");
    })(),
    figure(376, 250, 1.0, { facing: -1, arm: "down" }),
    fill("M360 100 l32 0 l0 6 l-32 0 Z", GOLD), // diadem bar
    fill("M404 132 l5 0 l3 120 l-5 0 Z", GOLD), // sceptre
    disc(404, 128, 6, GOLD),
    // handmaid with jug (far right)
    figure(452, 296, 0.66, { facing: -1, arm: "carry" }),
    amphora(470, 240, 0.32),
    line(30, 300, 470, 300, { w: 2 }),
  ].join("");

  scenes.craft = () => {
    const p = [];
    p.push(meander(20, 12, 440, 14));
    // warp-weighted loom (left)
    p.push(fill("M56 64 l6 0 l0 188 l-6 0 Z M146 64 l6 0 l0 188 l-6 0 Z"));
    p.push(fill("M50 70 l108 0 l0 6 l-108 0 Z"));       // top beam
    p.push(fill("M56 94 l96 0 l0 4 l-96 0 Z"));         // cloth beam
    // finished cloth with reserved meander
    p.push(fill("M66 98 l76 0 l0 78 l-76 0 Z"));
    p.push(meander(70, 108, 66, 11, PARCH));
    // warp threads below
    for (let i = 0; i < 8; i++) p.push(line(70 + i * 10, 176, 70 + i * 10, 196, { w: 1.2 }));
    // loom weights
    for (const x of [70, 88, 106, 124, 142]) p.push(fill(`M${x - 4} 196 l8 0 l-2 14 l-4 0 Z`));
    // distaff leaning
    p.push(fill("M28 118 l5 3 l-6 130 l-5 0 Z", GOLD));
    p.push(fill("M24 112 q-8 -8 4 -14 q12 4 6 14 Z", GOLD));
    // carpenter's bench + squared timber (right)
    p.push(fill("M300 210 l146 0 l0 12 l-146 0 Z"));
    p.push(fill("M310 222 l6 0 l-4 48 l-8 0 Z M436 222 l6 0 l6 48 l-8 0 Z"));
    p.push(fill("M320 200 l100 -6 l4 12 l-100 6 Z"));
    // axe
    p.push(fill("M330 196 l6 0 l-6 -44 l-6 0 Z"));
    p.push(fill("M324 152 q-16 -8 -20 6 q12 12 22 6 Z"));
    // adze (bent handle + cross blade)
    p.push(fill("M366 196 q-6 -30 -24 -34 l0 6 q14 4 18 30 Z"));
    p.push(fill("M344 160 l-16 -6 l4 14 Z", GOLD));
    // auger
    p.push(fill("M406 196 l5 0 l0 -38 l-5 0 Z"));
    p.push(fill("M396 156 l24 0 l0 5 l-24 0 Z"));
    // day sun + night moon markers
    p.push(sun(430, 58, 14));
    p.push(moon(52, 48, 15));
    p.push(star(76, 40, 5));
    return p.join("");
  };

  // Particles: decorative meander field only
  scenes.meander = () => [
    `<rect x="0" y="0" width="${W}" height="${H}" fill="${PARCH}"/>`,
    [40, 96, 152, 208, 264].map(y => meander(30, y, 420, 20)).join(""),
    line(30, 34, 450, 34, { s: INK, w: 2, op: 0.5 }),
    line(30, 312, 450, 312, { s: INK, w: 2, op: 0.5 }),
    `<text x="240" y="176" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-size="34" fill="${INK}" opacity="0.4" font-style="italic">μέν … δέ</text>`,
  ].join("");

  // hotspot marker group, positioned in a viewBox of width vw × height vh
  function hotspots(words, vw, vh) {
    return (words || []).map((w, i) => {
      const cx = (w.x / 100) * vw, cy = (w.y / 100) * vh;
      const n = i + 1;
      const label = (typeof thematicWordLabel === "function" ? thematicWordLabel(w) : w.lemma).replace(/"/g, "&quot;");
      return `
        <g class="hotspot" data-id="${w.id}" data-lemma="${w.lemma}"
           data-parts="${(w.parts || "").replace(/"/g, "&quot;")}"
           data-gloss="${(w.gloss || "").replace(/"/g, "&quot;")}"
           data-label="${label}" data-x="${w.x}" data-y="${w.y}"
           transform="translate(${cx.toFixed(1)},${cy.toFixed(1)})">
          <circle class="hs-ring" r="13"/>
          <text class="hotspot-label" text-anchor="middle" dy="4.5">${n}</text>
        </g>`;
    }).join("");
  }

  /** Build the full scene SVG. Pass the scene object (or sceneType, words).
   *  A scene carrying an `image` is rendered as that picture with the
   *  numbered hotspots overlaid; otherwise the vector art is drawn. */
  function thematicSVG(scene, words) {
    // support both thematicSVG(scene) and legacy thematicSVG(type, words)
    const sc = (typeof scene === "object" && scene) ? scene : { scene: scene, words: words };
    const type = sc.scene;
    const ws = sc.words || words || [];

    if (sc.image) {
      const vw = 480;
      const vh = Math.round(vw * (sc.imageH || 320) / (sc.imageW || 480));
      const esc = String(sc.title || "vocabulary scene").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      return `<svg viewBox="0 0 ${vw} ${vh}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" aria-label="${esc}">`
        + `<image href="${sc.image}" xlink:href="${sc.image}" x="0" y="0" width="${vw}" height="${vh}" preserveAspectRatio="xMidYMid slice"/>`
        + hotspots(ws, vw, vh) + `</svg>`;
    }

    const body = (scenes[type] || scenes.meander)();
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${type} vocabulary scene"><rect width="${W}" height="${H}" fill="${PARCH}"/>${body}${hotspots(ws, W, H)}</svg>`;
  }

  window.thematicSVG = thematicSVG;
})();
