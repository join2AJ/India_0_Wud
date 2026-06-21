/* INDOWUD nfc — Technical Guidelines · fabricator & site-team doc */
/* ICON, brand, run, P are global consts declared in the host HTML. */
const PAGES=[];
const IMG=k=>`<img src="resources/photos/${k}.png" alt="${k}"/>`;
const applies=list=>`<span class="applies"><b>Applies to</b> ${list}</span>`;

/* 00 — BRAND COVER */
PAGES.push(n=>`<section class="page dark cover" data-screen-label="00">
  <div class="deer" style="top:116px;left:50%;transform:translateX(-50%);width:520px;height:430px;opacity:.9;"></div>
  <div class="brandline"><div class="wm"><b style="font-size:18px;">INDOWUD</b><span class="n">NFC</span></div><span class="meta">Natural Fiber Composite · 2026</span></div>
  <div class="pad" style="justify-content:flex-end;">
    <p class="eyebrow" style="margin-bottom:18px;">Natural Fiber Composite · Ahimsa Design</p>
    <h1 class="disp" style="font-size:48px;max-width:24ch;">Only when we make the right choices<span style="color:var(--leaf-300);"> do we achieve the right results.</span></h1>
    <div style="display:flex;gap:9px;margin-top:26px;flex-wrap:wrap;">${['Termite Proof','Water Proof','Flame Retardant','Easily Machinable','Thermoformable','Eco-friendly & Recyclable'].map(c=>`<span class="chip2">${c}</span>`).join('')}</div>
  </div>
  <div class="run" style="color:var(--sand-300);"><span>indowud.com</span><span>Technical Guidelines</span></div>
</section>`);

/* 01 — TITLE COVER */
PAGES.push(n=>`<section class="page dark cover" data-screen-label="01">
  <div class="brandline"><div class="wm"><b style="font-size:18px;">INDOWUD</b><span class="n">NFC</span></div><span class="meta">For fabricators & site teams</span></div>
  <div class="pad">
    <div style="display:grid;grid-template-columns:1.15fr .85fr;gap:44px;flex:1;align-items:center;">
      <div>
        <p class="eyebrow" style="margin-bottom:18px;">Technical Guidelines · Revision 2026</p>
        <h1 class="disp" style="font-size:58px;max-width:14ch;">Working with Indowud nfc.</h1>
        <p class="body lede" style="margin-top:22px;max-width:46ch;">Framing, fastening, edge protection, thermoforming and gluing — everything a workshop or site team needs to install nfc panels correctly, indoors and out.</p>
        <div style="display:flex;gap:10px;margin-top:26px;flex-wrap:wrap;">
          <span class="tag">Framing & support</span><span class="tag">Fastening</span><span class="tag">Edge sealing</span><span class="tag">Thermoforming</span><span class="tag">Gluing</span>
        </div>
      </div>
      <div style="display:grid;grid-template-rows:1.4fr 1fr;gap:12px;height:440px;">
        <div class="tphoto">${IMG('board')}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div class="tphoto">${IMG('jaali')}</div><div class="tphoto">${IMG('decking')}</div></div>
      </div>
    </div>
  </div>
  <div class="run" style="color:var(--sand-300);"><span>indowud.com</span><span>01 / ${String(PAGES.length+9).padStart(2,'0')}</span></div>
</section>`);

function cellRow(items){return items.map(c=>`<div class="cell"><div class="icn">${ICON[c.i]}</div><h4>${c.t}</h4><p>${c.d}</p></div>`).join('');}

/* 02 — STEP 1 · GENERAL PRINCIPLES */
PAGES.push(n=>P(n,'',`
  <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">Step 1 · Before you start</p>
  <h2 class="head" style="font-size:34px;max-width:24ch;margin-bottom:8px;">A few principles that apply everywhere.</h2>
  <p class="body lede" style="max-width:64ch;margin-bottom:14px;">Indowud nfc machines like premium hardwood — but it is a homogeneous composite. Respect breathing gaps, seal cut edges, and support spans, and every install will last.</p>
  <div style="margin-bottom:22px;">${applies('All nfc products')}</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
    ${cellRow([
      {i:'ruler',t:'Acclimatise & plan',d:'Store flat on a level surface. Plan framing and fixings before cutting — nfc rewards a measured approach.'},
      {i:'drop',t:'Always seal cut edges',d:'Close micro-pores on every cut edge and the face with sealant, primer, laminate or edge-banding before exposure to water.'},
      {i:'grid',t:'Leave breathing gaps',d:'12 mm to walls, 5 mm at ceiling/floor, 3 mm between boards/trims, 4 mm between deck planks — for thermal movement.'},
    ])}
  </div>
  <div class="callout" style="margin-top:22px;">
    <p class="body" style="color:var(--leaf-700);"><strong>Golden rule:</strong> never pour water on a raw board before its surface and edge micro-pores are closed. Do not use NC putty — use epoxy / solvent putty, primer or sealant.</p>
  </div>`));

/* 03 — STEP 2 · FRAMING & SUPPORT SPANS */
PAGES.push(n=>{
  const rows=[[6,150,200,250],[8,200,250,350],[12,250,300,450],['15/16',300,350,550],[18,350,400,600],[20,400,450,650],[25,500,550,750]];
  const body=rows.map(r=>`<tr><td class="num hl">${r[0]} mm</td><td class="num">${r[1]}</td><td class="num">${r[2]}</td><td class="num">${r[3]}</td></tr>`).join('');
  return P(n,'',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">Step 2 · Framing & support</p>
    <h2 class="head" style="font-size:30px;max-width:32ch;margin-bottom:8px;">Maximum support distances.</h2>
    <p class="body" style="max-width:78ch;margin-bottom:12px;">Indowud nfc is homogeneous in structure. For larger areas, provide constructive support / framing per the maximum support distances below (all values in mm). Higher-density grades span further.</p>
    <div style="margin-bottom:18px;">${applies('Boards (Neo / Create / Build) · decking · jaali · textured panels')}</div>
    <table class="dt"><thead><tr><th>Board thickness</th><th class="num">Neo · 625+ kg/CBM</th><th class="num">Create · 725+ kg/CBM</th><th class="num">Build · 825+ kg/CBM</th></tr></thead><tbody>${body}</tbody></table>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px;">
      <div class="callout"><p class="body" style="color:var(--leaf-700);"><strong>Ceilings:</strong> use 12 mm+ board on a grid support of 300 mm (Create/Build) or 200 mm (Neo).</p></div>
      <div class="callout"><p class="body" style="color:var(--leaf-700);"><strong>Decking:</strong> use 25 mm+ on 300 mm support; leave a 4 mm gap between deck planks.</p></div>
    </div>
    <p class="body" style="font-size:11.5px;color:var(--sand-500);margin-top:12px;">Suggested distances may increase or decrease depending on application and load.</p>`);
});

/* 04 — STEP 3 · SHUTTERS, DOORS & CABINETRY (with photo) */
PAGES.push(n=>{
  const notes=[
    'Fix a magnetic ball catch at the top and bottom of wardrobe / cabinet shutters. A straightener / stiffener is recommended.',
    'Use box-type hinges at a span of every 300 mm.',
    'Fix shutters only after overlaying laminate, veneer, edge-band / lipping — or applying epoxy / solvent putty, primer or sealant all around to close micro-pores and avoid bowing.',
    'Ensure framing on all four sides with stiffeners for sliding doors / shutters.',
    'For tall shutters, balance the finish on both faces to keep the panel flat.',
  ];
  const list=notes.map((t,i)=>`<div class="note"><span class="ix">${String(i+1).padStart(2,'0')}</span><span class="body">${t}</span></div>`).join('');
  return P(n,'',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">Step 3 · Shutters, doors & cabinetry</p>
    <h2 class="head" style="font-size:30px;max-width:26ch;margin-bottom:8px;">Keep panels flat and balanced.</h2>
    <p class="body lede" style="max-width:62ch;margin-bottom:12px;">Bowing comes from unbalanced finishing and unsealed pores. Seal first, balance both faces, and support the spans.</p>
    <div style="margin-bottom:18px;">${applies('nfc board · nfc door · nfc frame')}</div>
    <div style="display:grid;grid-template-columns:1.25fr .75fr;gap:30px;flex:1;align-items:center;">
      <div>${list}</div>
      <div class="tphoto" style="height:300px;">${IMG('door')}</div>
    </div>`);
});

/* 05 — STEP 4 · FASTENING */
PAGES.push(n=>P(n,'',`
  <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">Step 4 · Fastening</p>
  <h2 class="head" style="font-size:30px;max-width:28ch;margin-bottom:8px;">Excellent screw & nail holding.</h2>
  <p class="body lede" style="max-width:64ch;margin-bottom:12px;">High natural-fibre content gives nfc holding power that ordinary panels can't match. Choose the right fastener and it stays put.</p>
  <div style="margin-bottom:20px;">${applies('All boards · decking · fence · trims · frames')}</div>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:18px;">
    <div class="cell"><div class="icn">${ICON.cnc}</div><h4>Choose the right screw</h4><p>Use countersunk, wide-head, fully-threaded screws. Pilot-drill near edges. Gluing the edge before screwing adds joinery strength.</p></div>
    <div class="cell"><div class="icn">${ICON.shield}</div><h4>Outdoor fixings</h4><p>Use stainless-steel screws for all exterior applications to avoid corrosion staining. Keep fixings back from the edge.</p></div>
    <div class="cell"><div class="icn">${ICON.hammer}</div><h4>Nailing</h4><p>nfc accepts nails like timber. For structural joints prefer screws + adhesive; reserve nails for trims and light fixing.</p></div>
    <div class="cell"><div class="icn">${ICON.check}</div><h4>Conventional tools</h4><p>Cut, drill, rout and sand with standard woodworking tools and carbide tips — no special equipment required.</p></div>
  </div>`));

/* 06 — STEP 5 · EDGE PROTECTION & SEALING (with photo) */
PAGES.push(n=>P(n,'',`
  <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">Step 5 · Edge protection & sealing</p>
  <h2 class="head" style="font-size:30px;max-width:30ch;margin-bottom:8px;">Close the pores, lock out water.</h2>
  <p class="body lede" style="max-width:66ch;margin-bottom:12px;">nfc is waterproof through its body, but freshly cut edges expose micro-pores. Sealing them is the single most important finishing step — especially outdoors.</p>
  <div style="margin-bottom:18px;">${applies('Every cut product — especially exterior: decking · fence · jaali')}</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:stretch;flex:1;">
    <div style="display:flex;flex-direction:column;gap:16px;">
      <table class="dt"><thead><tr><th>Method</th><th>Best for</th></tr></thead><tbody>
        <tr><td class="hl">Edge-banding / lipping</td><td>Visible furniture & shutter edges</td></tr>
        <tr><td class="hl">Laminate / veneer wrap</td><td>Decorative interior panels</td></tr>
        <tr><td class="hl">Epoxy / solvent putty</td><td>Filling, levelling, sealing pre-paint</td></tr>
        <tr><td class="hl">Primer + sealant</td><td>Paint-grade and exterior surfaces</td></tr>
      </tbody></table>
      <div class="callout warn"><p class="body" style="color:var(--ink-700);"><strong>Do not</strong> use NC putty. <strong>Do not</strong> expose raw, unsealed edges to standing water. Seal all four edges and both faces before exterior installation.</p></div>
    </div>
    <div class="tphoto">${IMG('decking')}</div>
  </div>`));

/* 07 — STEP 6 · THERMOFORMING (with photo) */
PAGES.push(n=>{
  const rows=[['Heating temperature','140 – 160 °C'],['Heating time','1–2 min per mm of thickness (e.g. 18–36 min for 18 mm)'],['Locking time','5–20 min, by thickness & conditions'],['Cooling time','1–2 min per mm of thickness']];
  const spec=rows.map(r=>`<tr><td class="hl" style="white-space:nowrap;">${r[0]}</td><td>${r[1]}</td></tr>`).join('');
  return P(n,'',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">Step 6 · Thermoforming</p>
    <h2 class="head" style="font-size:30px;max-width:26ch;margin-bottom:8px;">Shape it without compromise.</h2>
    <p class="body lede" style="max-width:66ch;margin-bottom:12px;">Thermoform nfc with a thermoforming machine, heat oven, heat gun or infrared heater. High natural-fibre content keeps density and dimensional stability uncompromised after forming.</p>
    <div style="margin-bottom:18px;">${applies('nfc board (Neo / Create) · textured panels')}</div>
    <div style="display:grid;grid-template-columns:1.05fr .95fr;gap:24px;align-items:stretch;flex:1;">
      <div style="display:flex;flex-direction:column;gap:16px;">
        <table class="dt"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>${spec}</tbody></table>
        <div class="callout warn"><p class="body" style="color:var(--ink-700);"><strong>Note:</strong> the panel may shrink as it is shaped. Do all cutting and finishing <em>after</em> the board takes its final form. Prepare a mould for even, repeatable shaping.</p></div>
      </div>
      <div class="tphoto">${IMG('textured')}</div>
    </div>`);
});

/* 08 — STEP 7 · PRINTING & FINISHING */
PAGES.push(n=>P(n,'',`
  <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">Step 7 · Printing & finishing</p>
  <h2 class="head" style="font-size:30px;max-width:28ch;margin-bottom:8px;">Finish it any way you like.</h2>
  <p class="body lede" style="max-width:64ch;margin-bottom:12px;">nfc takes print, paint, laminate and veneer as readily as fine wood.</p>
  <div style="margin-bottom:20px;">${applies('Boards · doors · textured panels · trims')}</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;">
    <div class="cell"><div class="icn">${ICON.print}</div><h4>Printing</h4><p>Any pattern prints via flatbed digital printer. Ensure the board is dust-free first. Protect the print with a transparent sealant or varnish against abrasion.</p></div>
    <div class="cell"><div class="icn">${ICON.paint}</div><h4>Paint & polish</h4><p>Paint, polish, stain or varnish directly once pores are sealed and primed. Balance the finish on both faces of unsupported panels.</p></div>
    <div class="cell"><div class="icn">${ICON.layers}</div><h4>Laminate & veneer</h4><p>Overlay laminate or veneer with PUR or recommended adhesives. Seal the opposite face to keep the panel flat.</p></div>
  </div>`));

/* 09 — STEP 8 · GLUING (with photo) */
PAGES.push(n=>P(n,'',`
  <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">Step 8 · Gluing</p>
  <h2 class="head" style="font-size:30px;max-width:26ch;margin-bottom:8px;">A strong, water-resistant bond.</h2>
  <p class="body lede" style="max-width:66ch;margin-bottom:12px;">We strongly recommend <strong>NFC-GLU</strong> with Indowud nfc — it bonds almost all surfaces, rough or smooth, porous or non-porous, faster.</p>
  <div style="margin-bottom:18px;">${applies('All products · NFC-GLU')}</div>
  <div style="display:grid;grid-template-columns:1fr 1fr .8fr;gap:24px;align-items:start;flex:1;">
    <div>
      <p class="mono" style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--sand-500);margin:0 0 12px;">Recommended adhesives</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${['NFC-GLU','PUR','HeatX','Wp1','Probond','Plastilok','Relam'].map(g=>`<span class="tag" style="background:var(--leaf-500);">${g}</span>`).join('')}
      </div>
      <p class="body" style="margin-top:18px;">Drying / locking time varies with temperature, humidity and surface. Clamp or weight the joint until set. Glued edges also improve screw-joinery strength.</p>
    </div>
    <div class="callout"><p class="body" style="color:var(--leaf-700);"><strong>Tip:</strong> for structural joints, combine adhesive with countersunk screws. Seal the glued edge afterward for exterior use.</p></div>
    <div class="tphoto" style="height:260px;">${IMG('glu')}</div>
  </div>`));

/* 10 — QUICK REFERENCE */
PAGES.push(n=>`<section class="page dark" data-screen-label="10">
  ${brand()}
  <div class="pad">
    <p class="eyebrow" style="margin-top:6px;margin-bottom:14px;">Quick reference</p>
    <h2 class="head" style="font-size:30px;color:var(--husk-50);max-width:24ch;margin-bottom:24px;">Keep this card on site.</h2>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px 40px;">
      ${[
        ['Breathing gaps','12 mm to walls · 5 mm ceiling/floor · 3 mm between boards · 4 mm between deck planks'],
        ['Hinges','Box-type every 300 mm; ball catch top & bottom of shutters'],
        ['Ceilings','12 mm+ board · 300 mm grid (Create/Build) · 200 mm (Neo)'],
        ['Decking','25 mm+ board · 300 mm support · 4 mm plank gap'],
        ['Edge sealing','Always seal cut edges before water exposure; never use NC putty'],
        ['Thermoforming','140–160 °C · cut & finish after final shape'],
      ].map(r=>`<div style="border-top:1px solid rgba(242,234,217,.14);padding-top:12px;"><div style="font-family:var(--fd);font-weight:700;font-size:15px;color:var(--husk-50);margin-bottom:4px;">${r[0]}</div><div class="body" style="color:var(--sand-300);font-size:12.5px;">${r[1]}</div></div>`).join('')}
    </div>
    <div style="margin-top:auto;display:flex;justify-content:space-between;align-items:flex-end;border-top:1px solid rgba(242,234,217,.14);padding-top:18px;">
      <div><div class="mono" style="font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--leaf-300);margin-bottom:8px;">Technical support</div><p class="body" style="color:var(--husk-100);">info@indowud.com · www.indowud.com</p></div>
      <p class="mono" style="font-size:10px;color:var(--sand-400);">Always test on a sample before full production.</p>
    </div>
  </div>
  ${run(n)}
</section>`);

/* 11 — CLOSING */
PAGES.push(n=>`<section class="page dark" data-screen-label="11">
  <div class="deer" style="bottom:-40px;right:-30px;width:420px;height:350px;opacity:.26;"></div>
  ${brand()}
  <div class="pad" style="justify-content:center;">
    <p class="eyebrow" style="margin-bottom:22px;">Together</p>
    <h1 class="disp" style="font-size:44px;max-width:24ch;">Let's build a world where beauty and responsibility go hand in hand.</h1>
    <div style="margin-top:42px;display:flex;gap:56px;flex-wrap:wrap;">
      <div><div class="mono" style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--leaf-300);margin-bottom:10px;">Technical support</div><p class="body" style="color:var(--husk-100);">info@indowud.com · www.indowud.com<br>Indowud nfc Pvt Ltd · Chennai, India</p></div>
      <div><div class="mono" style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--leaf-300);margin-bottom:10px;">Certified</div><div style="display:flex;gap:8px;">${['GreenPro','EPD verified'].map(c=>`<span class="chip2">${c}</span>`).join('')}</div></div>
    </div>
  </div>
  ${run(n)}
</section>`);

window.PAGES=PAGES;
