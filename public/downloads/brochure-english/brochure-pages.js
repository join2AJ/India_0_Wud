/* ===========================================================================
   INDOWUD nfc — redesigned eBrochure · page renderers
   36 landscape A4 pages. Light/cream premium with dark covers & dividers.
   Each entry in PAGES is (n) => html for one .page.
   =========================================================================== */
/* ICON, swatch, chip, brand, run, SW are global consts declared in the host HTML. */

/* ---------- generic frames ---------- */
function P(n, cls, inner, opts={}){
  return `<section class="page ${cls||''}" data-screen-label="${String(n).padStart(2,'0')}">
    ${opts.noBrand?'':brand()}
    <div class="pad">${inner}</div>
    ${opts.noRun?'':run(n)}
  </section>`;
}

/* ---------- product page template ---------- */
function product(n, o){
  const specs = (o.specs||[]).map(s=>`<div class="row"><span class="k">${s.k}</span><span class="v">${s.v}</span></div>`).join('');
  const thumbs = (o.thumbs||[]).map(t=>swatch(t,'',{style:'flex:1;aspect-ratio:1/1;'})).join('');
  return P(n,'cream',`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;flex:1;align-items:center;margin-top:14px;">
      <div>
        <p class="eyebrow" style="margin-bottom:16px;">${o.eyebrow||'Product'}</p>
        <h1 class="disp" style="font-size:46px;margin-bottom:12px;">${o.name}</h1>
        <hr class="rule" style="margin-bottom:18px;">
        <h2 class="head" style="font-size:21px;color:var(--leaf-700);margin-bottom:16px;max-width:20ch;">${o.tagline}</h2>
        <p class="body" style="max-width:46ch;margin-bottom:22px;">${o.blurb}</p>
        ${o.chips?`<div class="chips" style="margin-bottom:22px;">${o.chips.map(c=>chip(c[0],'leaf',c[1])).join('')}</div>`:''}
        <div class="spec">${specs}</div>
        ${o.foot?`<p class="body" style="font-size:12px;color:var(--sand-500);margin-top:16px;">${o.foot}</p>`:''}
      </div>
      <div>
        <div style="background:#fff;border:1px solid var(--husk-300);border-radius:12px;box-shadow:0 8px 26px rgba(40,32,20,0.10);padding:18px;position:relative;">
          <div style="aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;overflow:hidden;">
            <img src="resources/photos/${({deck:'decking'}[o.tone]||o.tone)}.png" alt="${o.name}" style="max-width:100%;max-height:100%;object-fit:contain;" />
          </div>
          <span class="mono" style="position:absolute;left:18px;bottom:14px;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--sand-500);background:rgba(251,248,241,0.9);padding:4px 8px;border-radius:4px;border:1px solid var(--husk-300);">${o.swatchLabel||o.name}</span>
        </div>
      </div>
    </div>`);
}

/* ---------- applications grid page ---------- */
function appsPage(n,o){
  const cells=o.apps.map(a=>`<div class="cell"><div class="icn">${ICON[a.i]||ICON.layers}</div><h4>${a.t}</h4>${a.d?`<p>${a.d}</p>`:''}</div>`).join('');
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:14px;">${o.eyebrow}</p>
    <h2 class="head" style="font-size:34px;max-width:24ch;margin-bottom:8px;">${o.title}</h2>
    <p class="body lede" style="max-width:60ch;margin-bottom:26px;">${o.sub}</p>
    <div class="grid" style="grid-template-columns:repeat(3,1fr);">${cells}</div>`);
}

/* ---------- dark statement / divider ---------- */
function statement(n,o){
  return P(n,'dark',`
    <div style="flex:1;display:flex;flex-direction:column;justify-content:center;${o.center?'align-items:center;text-align:center;':''}">
      <p class="eyebrow" style="margin-bottom:22px;">${o.eyebrow||''}</p>
      <h1 class="disp" style="font-size:${o.size||58}px;max-width:${o.mw||20}ch;${o.center?'margin:0 auto;':''}">${o.title}</h1>
      ${o.body?`<p class="body lede" style="max-width:54ch;margin-top:26px;${o.center?'margin-left:auto;margin-right:auto;':''}">${o.body}</p>`:''}
      ${o.chips?`<div class="chips" style="margin-top:30px;${o.center?'justify-content:center;':''}">${o.chips.map(c=>chip(c,'')).join('')}</div>`:''}
    </div>`, o.deer?{}:{});
}

/* ---------- table page ---------- */
function tablePage(n,o){
  return P(n, o.dark?'dark':'cream', `
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">${o.eyebrow}</p>
    <h2 class="head" style="font-size:30px;max-width:30ch;margin-bottom:6px;">${o.title}</h2>
    ${o.sub?`<p class="body" style="max-width:74ch;margin-bottom:20px;">${o.sub}</p>`:'<div style="height:18px"></div>'}
    ${o.table}
    ${o.note?`<p class="body" style="font-size:11.5px;color:var(--sand-500);margin-top:16px;max-width:88ch;">${o.note}</p>`:''}`);
}

/* =====================================================================
   THE 36 PAGES
   ===================================================================== */
const PAGES = [];

/* 01 — COVER */
PAGES.push(n=>`<section class="page dark" data-screen-label="01">
  <div class="deer" style="top:120px;left:50%;transform:translateX(-50%);width:560px;height:470px;opacity:0.92;"></div>
  <div class="brandline"><div class="wm"><b style="font-size:18px;">INDOWUD</b><span class="n">NFC</span></div><span class="meta">eBrochure · 2026</span></div>
  <div class="pad" style="justify-content:flex-end;">
    <p class="eyebrow" style="margin-bottom:20px;">Natural Fiber Composite · Ahimsa Design</p>
    <h1 class="disp" style="font-size:50px;max-width:24ch;">Only when we make the right choices<span style="color:var(--leaf-300);"> do we achieve the right results.</span></h1>
    <div class="chips" style="margin-top:28px;">
      ${['Termite Proof','Water Proof','Flame Retardant','Easily Machinable','Thermoformable','Eco-friendly & Recyclable'].map(c=>chip(c,'')).join('')}
    </div>
  </div>
  ${run(1)}
</section>`);

/* 02 — MANTRA */
PAGES.push(n=>P(n,'dark',`
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;">
    <p class="eyebrow" style="margin-bottom:30px;">The real design mantra</p>
    <h1 class="disp" style="font-size:52px;line-height:1.06;max-width:22ch;">
      We don't <span style="color:var(--leaf-300);">destroy</span> to design.<br>
      We don't <span style="color:var(--leaf-300);">kill</span> to create.<br>
      We don't <span style="color:var(--leaf-300);">cut down</span> to build.</h1>
    <p class="body lede" style="margin-top:34px;max-width:40ch;">If you love something, set it free — and it will still work. That's <strong style="color:var(--husk-50);">Ahimsa</strong>.</p>
  </div>`));

/* 03 — CHAIRMAN LETTER */
PAGES.push(n=>P(n,'cream',`
  <div style="display:grid;grid-template-columns:0.82fr 1.18fr;gap:52px;flex:1;margin-top:10px;">
    <div style="display:flex;flex-direction:column;">
      <p class="eyebrow" style="margin-bottom:18px;">From the Chairman</p>
      <h2 class="head" style="font-size:30px;">"Embracing a sustainable future, one nfc board at a time."</h2>
      <div style="margin-top:auto;">
        <img src="resources/photos/bengani.png" alt="B. L. Bengani" style="width:96px;height:96px;border-radius:50%;object-fit:cover;margin-bottom:14px;box-shadow:0 6px 18px rgba(40,32,20,0.18);" />
        <img src="resources/photos/signature.png" alt="signature" style="height:46px;width:auto;display:block;margin-bottom:6px;" />
        <div style="font-family:var(--fd);font-weight:800;font-size:20px;color:var(--ink-900);">B. L. Bengani</div>
        <div class="mono" style="font-size:11px;letter-spacing:0.08em;color:var(--sand-500);text-transform:uppercase;margin-top:4px;">Chairman, Indowud nfc</div>
        <p class="body" style="font-size:12.5px;color:var(--sand-500);margin-top:12px;max-width:30ch;">With over 30 years in the ply industry, Mr. Bengani — founder of Uniply — is pioneering natural-fibre composite wood in India and the world.</p>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;justify-content:center;">
      <p class="body" style="margin-bottom:14px;">In a world grappling with the escalating climate crisis, every responsible citizen and business leader must actively seek solutions. At Indowud nfc, we believe innovation and sustainability are not buzzwords, but the cornerstones of building a better tomorrow.</p>
      <p class="body" style="margin-bottom:14px;">It is with immense honour that I present our remarkable range of sustainable products. Crafted from a naturally abundant and renewable resource, they are eco-friendly with superior qualities — the ideal choice for home owners, architects, designers, builders and contractors.</p>
      <p class="body" style="margin-bottom:14px;">Our meticulous manufacturing ensures products that are termite-proof, water-proof, and even flame-retardant + smoke-suppressant — suitable for a wide range of interior and exterior applications.</p>
      <p class="body">By choosing our nfc products, you join us on this journey — embracing the future, embracing sustainability. Together, let's build a world where beauty and responsibility go hand in hand.</p>
    </div>
  </div>`));

/* 04 — PIONEERING WOOD */
PAGES.push(n=>P(n,'dark',`
  <div style="display:grid;grid-template-columns:1.1fr 0.9fr;gap:48px;flex:1;align-items:center;">
    <div>
      <p class="eyebrow" style="margin-bottom:20px;">A pioneering wood</p>
      <h1 class="disp" style="font-size:46px;max-width:18ch;">That lets the nation breathe freely.</h1>
      <p class="body lede" style="margin-top:24px;max-width:48ch;">Indowud nfc is the first-of-its-kind agricultural-husk wood. This husk is often thrown away or burnt — causing alarming air pollution across India and the world.</p>
      <p class="body" style="margin-top:14px;max-width:48ch;">Reusing it is of great value to national health and breathable air. With state-of-the-art technology these husks become boards that mimic every value of wood — unmatched in India and, probably, the world.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:18px;">
      <div style="display:flex;gap:18px;align-items:baseline;"><div class="bignum" style="font-size:70px;"><span class="g">0</span></div><div class="mono" style="font-size:13px;color:var(--sand-300);max-width:14ch;text-transform:uppercase;letter-spacing:0.08em;">trees cut, ever</div></div>
      <hr class="hair">
      <div style="display:flex;gap:18px;align-items:baseline;"><div class="bignum" style="font-size:70px;">1<span class="g">st</span></div><div class="mono" style="font-size:13px;color:var(--sand-300);max-width:16ch;text-transform:uppercase;letter-spacing:0.08em;">agricultural-husk wood of its kind</div></div>
      <hr class="hair">
      <div style="display:flex;gap:18px;align-items:baseline;"><div class="bignum" style="font-size:70px;"><span class="g">100</span>%</div><div class="mono" style="font-size:13px;color:var(--sand-300);max-width:16ch;text-transform:uppercase;letter-spacing:0.08em;">of the wood values, none of the felling</div></div>
    </div>
  </div>`));

/* 05 — AHIMSA PHILOSOPHY */
PAGES.push(n=>{
  const A=[
    ['A','Axe the axe','No more trees cut — not one.','leaf'],
    ['H','Healthy homes','Anti-bacterial protective properties.','wind'],
    ['I','Ice, rain & water proof','Zero swelling. Zero delamination.','droplet'],
    ['M','Mouldable','Thermoformable and easy to design with.','waves'],
    ['S','Secure','Against termites and rodents alike.','bug'],
    ['A','Agricultural-husk made','Preventing air pollution from husk burning.','recycle'],
  ];
  const rows=A.map(r=>`<div style="display:flex;align-items:center;gap:20px;padding:13px 0;border-bottom:1px solid var(--husk-300);">
    <div style="font-family:var(--fd);font-weight:800;font-size:34px;color:var(--leaf-500);width:42px;text-align:center;flex:none;">${r[0]}</div>
    <div style="width:34px;height:34px;border-radius:8px;background:var(--leaf-100);color:var(--leaf-700);display:grid;place-items:center;flex:none;">${ICON[r[3]]}</div>
    <div><div style="font-family:var(--fd);font-weight:700;font-size:17px;color:var(--ink-900);">${r[1]}</div><div class="body" style="font-size:13px;color:var(--ink-600);">${r[2]}</div></div>
  </div>`).join('');
  return P(n,'cream',`
    <div style="display:grid;grid-template-columns:0.8fr 1.2fr;gap:50px;flex:1;align-items:center;">
      <div>
        <p class="eyebrow" style="margin-bottom:18px;">The philosophy</p>
        <h1 class="disp" style="font-size:44px;">Ahimsa Design Philosophy</h1>
        <p class="body lede" style="margin-top:22px;max-width:34ch;">No trees are cut when making Indowud nfc. India has one of the worst termite problems — but nfc gives them nothing to eat. You don't even need to kill a single termite.</p>
      </div>
      <div>${rows}</div>
    </div>`);
});

/* 06 — HEALTHY HOMES + GREENPRO */
PAGES.push(n=>P(n,'cream',`
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;flex:1;align-items:center;">
    <div>
      <p class="eyebrow" style="margin-bottom:16px;">Building sustainable & healthy homes</p>
      <h2 class="head" style="font-size:32px;max-width:18ch;margin-bottom:18px;">A protective shield, engineered in.</h2>
      <p class="body" style="max-width:46ch;margin-bottom:14px;">Non-hazardous additives create an anti-bacterial shield during manufacturing. Indowud nfc is non-toxic, emits no VOCs, and is engineered to keep bacteria away.</p>
      <p class="body" style="max-width:46ch;">Our home is the only sanctuary we retreat to — let us make it safe, secure and healthy.</p>
      <div class="chips" style="margin-top:22px;">${chip('Non-toxic','leaf','shield')}${chip('Zero VOC','leaf','wind')}${chip('Anti-bacterial','leaf','check')}${chip('Lead-free','leaf','check')}</div>
    </div>
    <div class="cell" style="padding:28px;">
      <div style="width:54px;height:54px;border-radius:12px;background:var(--leaf-500);color:#fff;display:grid;place-items:center;margin-bottom:18px;">${ICON.badge}</div>
      <h3 style="font-family:var(--fd);font-weight:700;font-size:21px;color:var(--ink-900);margin:0 0 10px;">GreenPro Ecolabel</h3>
      <p class="body" style="font-size:13.5px;margin-bottom:14px;">CII has certified Indowud nfc as a Sustainable Green Product and awarded the GreenPro ecolabel — accredited by the Global Ecolabelling Network (GEN) through GENICES.</p>
      <p class="body" style="font-size:13.5px;margin-bottom:18px;">Products bearing GreenPro have lower environmental impact and enhance the performance of Green Buildings and Green Companies.</p>
      <hr class="hair" style="margin-bottom:16px;">
      <div class="chips">${['ISO 9001:2015','ISO 14001:2015','ISO 45001:2018','GreenPro','Lead-free'].map(c=>chip(c,'')).join('')}</div>
    </div>
  </div>`));

/* 07 — WHY NFC · 18 reasons */
PAGES.push(n=>{
  const R=[
    ['Termite proof','bug'],['Water proof','droplet'],['Flame retardant','flame'],['Easily machinable','cut'],['No splintering or cracking','shield'],['Durable','layers'],
    ['Anti-rodent','bug'],['Good screw holding','cnc'],['Fungus, algae & mould resistant','leaf'],['Anti-bacterial','shield'],['UV resistant','spark'],['Thermoformable','thermo'],
    ['Smoke suppressant','wind'],['100% recyclable','recycle'],['No harmful ingredients','check'],['Absorbs sound','volume'],['100% eco-friendly','leaf'],['No formaldehyde emission','drop2'],
  ];
  const cells=R.map(r=>`<div class="cell" style="text-align:center;padding:18px 10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:11px;">
    <div class="icn" style="margin:0;width:38px;height:38px;">${ICON[r[1]]||ICON.check}</div>
    <span style="font-family:var(--fd);font-weight:600;font-size:12.5px;color:var(--ink-900);line-height:1.25;">${r[0]}</span></div>`).join('');
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:10px;">Eighteen reasons, one material</p>
    <h2 class="head" style="font-size:36px;margin-bottom:8px;">Everything plywood promises —<br>without the compromises.</h2>
    <p class="body" style="max-width:62ch;margin-bottom:22px;">A single engineered material that answers for structure, safety, health and the planet at once.</p>
    <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:13px;flex:1;align-content:center;">${cells}</div>`);
});

/* 08 — PRODUCTS OVERVIEW (all in one) */
PAGES.push(n=>{
  const prods=[
    ['zerowud','zerOwud nfc board','Panel'],['board','Indowud nfc board','Hero panel'],['door','nfc door','Joinery'],['frame','nfc frame','Joinery'],
    ['jaali','nfc Jaali','Façades'],['decking','nfc decking','Outdoor'],['flute','nfc flute','Louver'],['textured','nfc textured panel','Surface'],
    ['trim','nfc trim','Profiles'],['fence','nfc fence','Outdoor'],['glu','nfc glu','Adhesive'],
  ];
  const cards=prods.map(p=>`<div style="background:#fff;border:1px solid var(--husk-300);border-radius:10px;overflow:hidden;box-shadow:0 3px 10px rgba(40,32,20,0.06);display:flex;flex-direction:column;">
    <div style="aspect-ratio:5/3;display:flex;align-items:center;justify-content:center;padding:10px;background:#fff;"><img src="resources/photos/${p[0]}.png" alt="${p[1]}" style="max-width:100%;max-height:100%;object-fit:contain;"/></div>
    <div style="padding:9px 12px;border-top:1px solid var(--husk-200);display:flex;align-items:center;justify-content:space-between;gap:8px;">
      <span style="font-family:var(--fd);font-weight:700;font-size:12.5px;color:var(--ink-900);">${p[1]}</span>
      <span class="mono" style="font-size:8px;letter-spacing:0.08em;text-transform:uppercase;color:var(--leaf-600);white-space:nowrap;">${p[2]}</span>
    </div></div>`).join('');
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:10px;">The range</p>
    <h2 class="head" style="font-size:36px;margin-bottom:6px;">Eleven products. One zero-wood system.</h2>
    <p class="body" style="max-width:64ch;margin-bottom:20px;">Eco-friendly products for a healthier planet — across every surface, interior and exterior. A page for each follows.</p>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;flex:1;align-content:center;">${cards}</div>`);
});

/* 08 — zerOwud */
PAGES.push(n=>product(n,{eyebrow:'01 · zerOwud nfc',name:'zerOwud nfc board',tagline:'Build green with zero-wud panels',
  blurb:'ZerOwud boasts good strength &amp; durability — ideal for everything from furniture and cabinetry to wall panels. For more, visit zerOwud.com.',
  tone:'zerowud',swatchLabel:'zerOwud · smooth both sides',thumbs:['zerowud','board','husk'],
  chips:[['Strong','check'],['Durable','shield']],
  specs:[{k:'Standard size',v:'8ft × 4ft · 2440 × 1220 mm'},{k:'Thickness',v:'6 · 8 · 12 · 16 · 18 · 25 mm'},{k:'Surface',v:'Smooth, both sides'}],
  foot:'Contact us for custom sizes.'}));

/* 09 — Indowud nfc Board */
PAGES.push(n=>product(n,{eyebrow:'02 · Indowud nfc',name:'Indowud nfc board',tagline:'Transforming agricultural waste into a sustainable panel',
  blurb:'A sustainable, high-performing alternative to traditional wood. Durable and versatile — ideal across interiors and exteriors.',
  tone:'board',swatchLabel:'nfc board · rough both sides',thumbs:['board','husk','textured'],
  chips:[['Neo','layers'],['Create','layers'],['Build','layers']],
  specs:[{k:'Range',v:'nfc Neo · Create · Build'},{k:'Available size',v:'8ft × 4ft · 2440 × 1220 mm'},{k:'Thickness',v:'6 · 8 · 12 · 15/16 · 18 · 25 mm'},{k:'Surface',v:'Rough, both sides'}],
  foot:'Contact us for custom sizes.'}));

/* 10 — INTERIOR (neo & create) */
PAGES.push(n=>appsPage(n,{eyebrow:'Applications & Inspiration · Interiors',title:'Created for design. Mouldable, yet sturdy.',
  sub:'A superior alternative to wood in many ways — it looks, feels and works like wood too.',
  apps:[{i:'layers',t:'Office furniture'},{i:'door',t:'Cabinets & wardrobes'},{i:'droplet',t:'Moist areas & bathroom'},{i:'grid',t:'Roofs'},{i:'cnc',t:'Stairs'},{i:'mortar',t:'Kitchen & dining'}]}));

/* 11 — IMAGINATION TO REALITY */
PAGES.push(n=>statement(n,{eyebrow:'Applications & Inspiration · Designed by top architects',title:'Converting imagination to reality.',size:54,mw:18,
  body:'From sculpted swings to seamless interiors — Indowud nfc bends to the architect\'s vision without bending the rules of sustainability.',
  chips:['Swings','Interiors','Bespoke joinery','Curved forms']}));

/* 12 — BUILD · all weather exterior */
PAGES.push(n=>appsPage(n,{eyebrow:'Applications & Inspiration · Exteriors',title:'Built for extreme weather. Far superior to any wood-based panel.',
  sub:'Use it freely across all exteriors and interiors.',
  apps:[{i:'waves',t:'Pool decks'},{i:'layers',t:'Benches'},{i:'spark',t:'Swings'},{i:'door',t:'Doors'},{i:'fence',t:'Fencing'},{i:'grid',t:'Outdoor furniture'}]}));

/* 13 — BEAUTIFUL EXTERIORS (montage) */
PAGES.push(n=>P(n,'dark',`
  <p class="eyebrow" style="margin-top:6px;margin-bottom:14px;">Applications & Inspiration · Real projects</p>
  <h2 class="head" style="font-size:34px;max-width:22ch;margin-bottom:24px;">Building beautiful exteriors.</h2>
  <div style="display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:1fr 1fr;gap:14px;flex:1;">
    ${swatch('deck','Pool deck',{onDark:true,style:'grid-row:span 2;'})}
    ${swatch('jaali','Jaali screen',{onDark:true})}
    ${swatch('board','Facade',{onDark:true})}
    ${swatch('fence','Fence',{onDark:true})}
    ${swatch('flute','Louvers',{onDark:true})}
  </div>`));

/* 14 — nfc door */
PAGES.push(n=>product(n,{eyebrow:'03 · nfc door',name:'nfc door',tagline:'The eco-friendly door',
  blurb:'Combine the timeless beauty of a natural wood panel with sustainability. Easily paint, polish, varnish, or overlay veneer / laminate.',
  tone:'door',swatchLabel:'nfc door · paintable',thumbs:['door','board','textured'],
  specs:[{k:'Size',v:'7ft × 3ft · 2140 × 920 mm'},{k:'Also',v:'8ft × 3ft · 2440 × 920 mm'},{k:'Thickness',v:'28 mm & 30 mm'}]}));

/* 15 — nfc frame */
PAGES.push(n=>product(n,{eyebrow:'04 · nfc frame',name:'nfc frame',tagline:'Reimagine doorways with nfc frames',
  blurb:'Door frames with open grains akin to natural wood. Customise with ease — easy to paint, varnish and stain — effortlessly merging beauty and sustainability.',
  tone:'frame',swatchLabel:'nfc frame · open grain',thumbs:['frame','board','husk'],
  specs:[{k:'Sizes',v:'3"×2" · 4"×2.5" · 5"×2.5"'},{k:'Standard length',v:'7ft · 8ft · 10ft'},{k:'Finish',v:'Paint · varnish · stain'}],
  foot:'Download the nfc-frame brochure at indowud.com/downloads/'}));

/* 16 — nfc Jaali */
PAGES.push(n=>product(n,{eyebrow:'05 · nfc Jaali',name:'nfc Jaali',tagline:'Elevate your space with intricate patterns',
  blurb:'A fusion of art, sustainability and strength. CNC-routed nfc boards — including stunning mashrabiya screens — enhance interiors and lighten the weight of building exteriors.',
  tone:'jaali',swatchLabel:'nfc Jaali · CNC routed',thumbs:['jaali','jaali','board'],
  chips:[['CNC routed','cnc'],['Mashrabiya','grid']],
  specs:[{k:'Method',v:'CNC routing'},{k:'Use',v:'Interior screens · exterior facades'},{k:'Designs',v:'Fully customisable'}],
  foot:'Contact us for customisation of designs.'}));

/* 17 — nfc decking */
PAGES.push(n=>product(n,{eyebrow:'06 · nfc decking',name:'nfc decking',tagline:'Elevate outdoor living with solid composite decking',
  blurb:'The natural beauty of wood without the maintenance hassle. Solid nfc decking offers exceptional strength, durability and weather resistance — easy to stain to your desired colour.',
  tone:'deck',swatchLabel:'nfc decking · solid',thumbs:['deck','deck','board'],
  specs:[{k:'Available size',v:'8ft × 6in · 2440 × 150 mm'},{k:'Thickness',v:'25 mm & 30 mm'},{k:'Finish',v:'Stainable'}],
  foot:'View patterns at indowud.com/products/nfc-decking/'}));

/* 18 — nfc flute */
PAGES.push(n=>product(n,{eyebrow:'07 · nfc flute',name:'nfc flute',tagline:"Nature's elegance meets modern design",
  blurb:'Fluting and louver solutions for green architecture — fostering a harmonious relationship between human habitation and nature, for more sustainable louver and flute panelling.',
  tone:'flute',swatchLabel:'nfc flute · louver',thumbs:['flute','flute','board'],
  specs:[{k:'Available size',v:'8ft × 1ft · 2440 × 300 mm'},{k:'Thickness',v:'18 mm & 25 mm'}],
  foot:'View patterns at indowud.com/products/nfcFlute/'}));

/* 19 — nfc textured panels */
PAGES.push(n=>product(n,{eyebrow:'08 · nfc textured panel',name:'nfc textured panels',tagline:'The magic of nature in intricate wooden grains',
  blurb:'A revolutionary line of natural-fibre composites with stunning wooden-textured designs — the warmth and elegance of wood with the durability and versatility of modern composites.',
  tone:'textured',swatchLabel:'textured · deep grain',thumbs:['textured','textured','board'],
  specs:[{k:'Textured',v:'8ft × 2ft · 2440 × 600 mm'},{k:'Thickness',v:'8 · 12 · 15 · 18 · 25 mm'},{k:'Deep texture',v:'8ft × 1ft · 13 · 15 · 23 mm'}],
  foot:'View designs at indowud.com/products/nfctexturedpanels/'}));

/* 20 — nfc trim */
PAGES.push(n=>product(n,{eyebrow:'09 · nfc trim',name:'nfc trim',tagline:'Natural choice for eco-friendly trims',
  blurb:'A sustainable, versatile solution for cut-to-size needs — perfect for adding a touch of elegance to any project. Easily customised to fit your specific requirements.',
  tone:'trim',swatchLabel:'nfc trim · cut to size',thumbs:['trim','board','husk'],
  specs:[{k:'Standard length',v:'8ft · 2440 mm'},{k:'Thickness',v:'8 · 12 · 15 · 18 · 25 · 30 mm'},{k:'Standard width',v:'100 · 150 · 200 · 250 mm'}]}));

/* 21 — nfc fence */
PAGES.push(n=>product(n,{eyebrow:'10 · nfc fence',name:'nfc fence',tagline:'Beauty and sustainability combined',
  blurb:'A beautiful, eco-friendly alternative to traditional wood fencing — strong, durable and weather-resistant. Perfect for any outdoor space.',
  tone:'fence',swatchLabel:'nfc fence · twist styles',thumbs:['fence','fence','board'],
  specs:[{k:'Length',v:'4ft · 1220 mm'},{k:'Width',v:'50 · 75 · 100 mm'},{k:'Thickness',v:'15 · 18 · 25 mm'},{k:'Style',v:'Standard · single/double/triple twist'}],
  foot:'View designs at indowud.com/products/nfcfence/'}));

/* 22 — nfc glu */
PAGES.push(n=>product(n,{eyebrow:'11 · nfc glu',name:'nfc glu',tagline:'A strong, water-resistant bond',
  blurb:'NFC-GLU bonds almost all surfaces — rough or smooth, porous or non-porous. We strongly recommend using NFC-GLU with Indowud nfc to bond different surfaces together, faster.',
  tone:'glu',swatchLabel:'NFC-GLU',thumbs:['glu','board','husk'],
  chips:[['Water-resistant','droplet'],['Universal bond','check']],
  specs:[{k:'Bonds',v:'Rough · smooth · porous · non-porous'},{k:'Best with',v:'Indowud nfc surfaces'}],
  foot:'*Subject to availability.'}));

/* 23 — AHIMSA FACILITY */
PAGES.push(n=>statement(n,{eyebrow:'Made with the Ahimsa design philosophy',title:'Engineered to safeguard the environment.',size:46,mw:20,
  body:'Made with sustainable agricultural-husk, Indowud nfc is crafted in a world-standard design, research and manufacturing facility in Chennai, India.',
  chips:['Chennai, India','World-standard facility','In-house R&D']}));

/* 24 — MANUFACTURING */
PAGES.push(n=>{
  const steps=[
    ['Selection of raw material','We acquire the finest virgin PVC resin from Japan and South Korea, and partner with local farming communities for an uninterrupted supply of natural fibres.','layers'],
    ['Matrix formulation','Polymers and fibres are mixed with minerals, coupling agents, heat stabilisers and additives under monitored temperature and pressure to form a homogeneous bonding matrix.','mortar'],
    ['Interface strength','Bonds and density decide each board\'s interfacial strength — achieved with mathematical accuracy of fibre dispersion for better impact resistance and internal strength.','shield'],
    ['Manufacturing','The compound is extruded under controlled temperature through calibration pads, cooled, then transverse-cut, trimmed and surface-processed.','factory'],
  ];
  const cells=steps.map((s,i)=>`<div class="cell"><div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;"><span class="mono" style="font-size:12px;color:var(--leaf-600);">0${i+1}</span><div class="icn" style="margin:0;">${ICON[s[2]]}</div></div><h4>${s[0]}</h4><p>${s[1]}</p></div>`).join('');
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">The process</p>
    <h2 class="head" style="font-size:34px;max-width:30ch;margin-bottom:22px;">Engineering a revolutionary product that surpasses the best global practices.</h2>
    <div class="grid" style="grid-template-columns:repeat(2,1fr);gap:16px;flex:1;align-content:center;">${cells}</div>
    <div style="display:flex;margin-top:22px;border-top:2px solid var(--ink-900);padding-top:16px;">
      <div style="flex:1;"><div class="bignum" style="font-size:30px;">625<span style="font-size:14px;color:var(--sand-500);"> kg/CBM</span></div><div class="mono" style="font-size:10.5px;letter-spacing:0.1em;text-transform:uppercase;color:var(--sand-500);margin-top:4px;">Neo density</div></div>
      <div style="flex:1;"><div class="bignum" style="font-size:30px;">725<span style="font-size:14px;color:var(--sand-500);"> kg/CBM</span></div><div class="mono" style="font-size:10.5px;letter-spacing:0.1em;text-transform:uppercase;color:var(--sand-500);margin-top:4px;">Create density</div></div>
      <div style="flex:1;"><div class="bignum" style="font-size:30px;">825<span style="font-size:14px;color:var(--sand-500);"> kg/CBM</span></div><div class="mono" style="font-size:10.5px;letter-spacing:0.1em;text-transform:uppercase;color:var(--sand-500);margin-top:4px;">Build density</div></div>
    </div>`);
});

/* 25 — HIGH PERFORMANCE statement */
PAGES.push(n=>statement(n,{center:true,eyebrow:'Fortified for durability',title:'Indowud nfc is a high-performance wood.',size:56,mw:16,
  body:'Fortified for durability — tested, certified, and built to outlast the conditions that defeat ordinary wood.'}));

/* 26 — HANDLING */
PAGES.push(n=>{
  const caps=[['Screw','cnc'],['Nail','hammer'],['Cut','cut'],['Paint','paint'],['Thermoform','thermo'],['Overlay laminate','layers'],['Print','print'],['CNC routing','cnc']];
  const cells=caps.map(c=>`<div class="cell" style="text-align:center;padding:24px 14px;min-height:132px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;"><div class="icn" style="margin:0;">${ICON[c[1]]}</div><h4 style="font-size:14px;">${c[0]}</h4></div>`).join('');
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">Handling</p>
    <h2 class="head" style="font-size:32px;max-width:26ch;margin-bottom:8px;">Design smarter, create faster.</h2>
    <p class="body lede" style="max-width:62ch;margin-bottom:26px;">Handling Indowud nfc is as easy as conventional wood — cut, nail, screw, drill, overlay laminate &amp; veneers, print, paint or varnish.</p>
    <div class="grid" style="grid-template-columns:repeat(4,1fr);gap:14px;flex:1;align-content:center;">${cells}</div>`);
});

/* 27 — SUPPORT & SUGGESTIONS table */
PAGES.push(n=>{
  const rows=[[6,150,200,250],[8,200,250,350],[12,250,300,450],['15/16',300,350,550],[18,350,400,600],[20,400,450,650],[25,500,550,750]];
  const body=rows.map(r=>`<tr><td class="num hl">${r[0]} mm</td><td class="num">${r[1]}</td><td class="num">${r[2]}</td><td class="num">${r[3]}</td></tr>`).join('');
  const table=`<table class="dt"><thead><tr><th>Board thickness</th><th class="num">Neo · 625+ kg/CBM</th><th class="num">Create · 725+ kg/CBM</th><th class="num">Build · 825+ kg/CBM</th></tr></thead><tbody>${body}</tbody></table>`;
  return tablePage(n,{eyebrow:'Support & suggestions',title:'Changing the world with small, simple steps.',
    sub:'Indowud nfc boards are homogeneous in structure. For larger areas, constructive support / framing is required as per the maximum support distances below (all values in mm).',
    table,note:'Suggested distances may increase or decrease depending on application.'});
});

/* 28 — NOTES */
PAGES.push(n=>{
  const notes=[
    'Suggested distances may vary with application.',
    'Fix a magnetic ball catch at the top and bottom of wardrobe/cabinet shutters. A straightener/stiffener is recommended.',
    'Use box-type hinges at a span of every 300 mm.',
    'Fix shutters only after overlaying laminate, veneer, edge-band / lipping or applying epoxy/solvent putty / primer / sealant all around to close micro-pores and avoid bowing.',
    'Ensure framing on all four sides with stiffeners for sliding doors / shutters.',
    'Suggested glue: NFC-GLU, PUR, HeatX, Wp1, Probond, Plastilok, Relam. Drying time varies with conditions.',
    'For ceilings, use 12 mm+ board with a grid support of 300 mm (Create/Build) or 200 mm (Neo).',
    'For decking, use 25 mm+ with 300 mm support; leave a 4 mm gap between deck panels.',
    'Do not pour water on raw boards before closing surface and edge micro-pores. Do not use NC putty.',
    'Leave a 12 mm gap to the wall, 5 mm at ceiling/floor, and 3 mm between boards/trims for breathing and expansion.',
  ];
  const list=notes.map((t,i)=>`<div style="display:flex;gap:12px;padding:9px 0;break-inside:avoid;"><span class="mono" style="font-size:11px;color:var(--leaf-600);flex:none;width:22px;">${String(i+1).padStart(2,'0')}</span><span class="body" style="font-size:13px;">${t}</span></div>`).join('');
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">Installation notes</p>
    <h2 class="head" style="font-size:30px;margin-bottom:20px;">Get the details right.</h2>
    <div style="column-count:2;column-gap:48px;">${list}</div>`);
});

/* 29 — THERMOFORMING */
PAGES.push(n=>{
  const rows=[['Heating temperature','140 – 160 °C'],['Heating time','1–2 min / mm of thickness (e.g. 18–36 min for 18 mm)'],['Locking time','5–20 min, by thickness & conditions'],['Cooling time','1–2 min / mm of thickness']];
  const spec=rows.map(r=>`<div class="row"><span class="k">${r[0]}</span><span class="v" style="max-width:30ch;">${r[1]}</span></div>`).join('');
  return P(n,'cream',`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:50px;flex:1;align-items:center;">
      <div>
        <p class="eyebrow" style="margin-bottom:14px;">Thermoforming</p>
        <h2 class="head" style="font-size:32px;max-width:18ch;margin-bottom:16px;">Shape it without compromise.</h2>
        <p class="body" style="max-width:46ch;">Thermoform Indowud nfc with a thermoforming machine, heat oven, heat gun or infrared heater. High natural-fibre content keeps density and dimensional stability uncompromised post-forming.</p>
        <p class="body" style="max-width:46ch;margin-top:14px;color:var(--sand-600);"><strong>Note:</strong> the panel may shrink when shaped — do any cutting or work after the board takes its final shape. Prepare a mould for even shaping.</p>
      </div>
      <div class="cell" style="padding:26px;"><div class="spec">${spec}</div></div>
    </div>`);
});

/* 30 — PRINTING + SCREWING */
PAGES.push(n=>P(n,'cream',`
  <p class="eyebrow" style="margin-top:6px;margin-bottom:10px;">Finishing</p>
  <h2 class="head" style="font-size:32px;max-width:28ch;margin-bottom:6px;">Finish it any way you like.</h2>
  <p class="body lede" style="max-width:64ch;margin-bottom:24px;">Indowud nfc takes print, paint, laminate, veneer and fasteners as readily as fine wood — with holding power wood can't match.</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;flex:1;align-items:stretch;">
    <div class="cell" style="padding:28px;display:flex;flex-direction:column;">
      <div class="icn">${ICON.print}</div>
      <h3 style="font-family:var(--fd);font-weight:700;font-size:22px;color:var(--ink-900);margin:0 0 12px;">Printing</h3>
      <p class="body">Any pattern or design can be printed on Indowud nfc with a flatbed digital printer. Ensure the board is dust-free before printing. We recommend a transparent sealant or coat of varnish to protect the printed area from abrasion and dust.</p>
    </div>
    <div class="cell" style="padding:28px;display:flex;flex-direction:column;">
      <div class="icn">${ICON.cnc}</div>
      <h3 style="font-family:var(--fd);font-weight:700;font-size:22px;color:var(--ink-900);margin:0 0 12px;">Screwing & nailing</h3>
      <p class="body">High natural-fibre content enables excellent screw/nail holding. Choose countersunk, wide-head, fully-threaded fasteners. Gluing the edge adds joinery strength. Stainless-steel screws are ideal for outdoor applications.</p>
    </div>
    <div class="cell" style="padding:28px;display:flex;flex-direction:column;">
      <div class="icn">${ICON.layers}</div>
      <h3 style="font-family:var(--fd);font-weight:700;font-size:22px;color:var(--ink-900);margin:0 0 12px;">Laminate, veneer & paint</h3>
      <p class="body">Overlay laminate or veneer, or paint, polish, stain and varnish directly. Sealing the surface and edges closes micro-pores for a flawless, lasting finish indoors or out.</p>
    </div>
  </div>`));

/* 31 — GREEN RATING */
PAGES.push(n=>{
  const rows=[['Wood-based material with FSC certification and/or rapidly renewable','3 Points'],['Local materials','3 Points'],['Use of certified green building materials','3 Points'],['Composite wood with no urea formaldehyde','1 Point'],['Materials with recycled content','1 Point']];
  const body=rows.map(r=>`<tr><td>${r[0]}</td><td class="num hl">${r[1]}</td></tr>`).join('');
  const table=`<table class="dt"><thead><tr><th>Maximum points with Indowud · module compliance</th><th class="num">Credit</th></tr></thead><tbody>${body}</tbody></table>`;
  return tablePage(n,{eyebrow:'Green rating',title:'Adds merit to projects with Green Rating.',
    sub:'Indowud nfc is a GreenPro certified product (Oct 2021) contributing recognised credits toward green-building certification.',
    table,note:'Contact us for more details · indowud.com/sustainability-green-rating'});
});

/* 32 — COMPARATIVE STUDY */
PAGES.push(n=>{
  const props=[
    ['Density (kg/CBM)','650–800','400–600','650–750','600–700'],
    ['Raw materials','Natural fibres + thermoplastics','PVC & fillers','Medium/soft wood, urea, formaldehyde','Medium/soft wood, urea/phenol'],
    ['Termite proof','Yes','Yes','No','No'],
    ['Water proof','Yes','Yes','No','No'],
    ['Flame resistant','Yes','Not always','No','No'],
    ['Screw holding','Above par','Above par','Below par','Below par'],
    ['Conventional tools','Yes','Yes','Yes','Yes'],
    ['Overlay laminate/veneer','Yes','Not always','Yes','Yes'],
    ['Indoor & outdoor','Both','Preferably indoor','Only indoor','Indoor'],
    ['Weather & ageing resistant','Above par','For some time','No','No'],
    ['Eco-friendly','Yes','Hazardous','No','No'],
  ];
  const body=props.map(r=>`<tr><td>${r[0]}</td><td class="hl">${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join('');
  const table=`<table class="dt" style="font-size:11.5px;"><thead><tr><th>Property</th><th>nfc</th><th>PVC / WPC foam</th><th>Plywood</th><th>MDF</th></tr></thead><tbody>${body}</tbody></table>`;
  return tablePage(n,{eyebrow:'Comparative study of nfc with others',title:'Quality the world and time can test.',
    sub:'Available 8\'×4\' in 6–25 mm and 7\'×3\' in 28/30 mm; custom sizes available. Density may vary by 5%.',
    table});
});

/* 33 — TEST RESULTS */
PAGES.push(n=>{
  const t=[
    ['Density','Kg/CBM','ASTM D792','800.349'],['Water absorption · 2 hrs','%','IS 2380','0.02'],['Water absorption · 24 hrs','%','IS 2380','0.12'],
    ['Thickness swelling · 2 hrs','%','IS 2380','0.06'],['Modulus of rupture · avg','N/mm²','IS 2380','14.5'],['Modulus of rupture · min','N/mm²','IS 2380','14.4'],
    ['Modulus of elasticity · avg','N/mm²','IS 2380','1327'],['Modulus of elasticity · min','N/mm²','IS 2380','1290'],['Screw withdrawal · face','N','IS 2380','2252'],
    ['Screw withdrawal · edge','N','IS 2380','1409'],['Tensile strength','MPa','ASTM D638','7.6'],['Compression strength','MPa','ASTM D695','40.2'],
    ['Elongation @ break','%','ASTM D638','2.0'],['Charpy impact strength','KJ/m²','ASTM D6110','6.25'],['Heat deflection @ 0.45 MPa','°C','ASTM D648','64.45'],
    ['Softening temp @ 1 kg','°C','ASTM D1525','72.5'],['VOC emissions','Mg/Kg','EPA 5035A','Below detectable'],
    ['Termite resistance','—','IS 4833','No attack'],['Fungal resistance','—','IS 4873','No attack'],['Borer resistance','—','IS 4873','No attack'],
  ];
  const body=t.map(r=>`<tr><td>${r[0]}</td><td class="mono" style="font-size:10.5px;color:var(--sand-500);">${r[1]}</td><td class="mono" style="font-size:10.5px;color:var(--sand-500);">${r[2]}</td><td class="num hl">${r[3]}</td></tr>`).join('');
  const half=Math.ceil(t.length/2);
  const mk=(rows)=>`<table class="dt" style="font-size:11px;"><thead><tr><th>Test</th><th>Unit</th><th>Method</th><th class="num">Result</th></tr></thead><tbody>${rows}</tbody></table>`;
  const rowsHtml=t.map(r=>`<tr><td>${r[0]}</td><td class="mono" style="font-size:10.5px;color:var(--sand-500);">${r[1]}</td><td class="mono" style="font-size:10.5px;color:var(--sand-500);">${r[2]}</td><td class="num hl">${r[3]}</td></tr>`);
  const table=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start;">${mk(rowsHtml.slice(0,half).join(''))}${mk(rowsHtml.slice(half).join(''))}</div>`;
  return tablePage(n,{eyebrow:'nfc boards with high fibre content',title:'Tested, independently.',
    sub:'Tests carried out on Indowud nfc samples by the National Test House, CIPET, IPIRTI, Spectro Labs and SGS Labs.',
    table});
});

/* 34 — SOUND */
PAGES.push(n=>{
  const f=[125,250,500,1000,1500,2000,2500,3000,3500,4000];
  const abs=[0.02,0.03,0.04,0.06,0.06,0.05,0.05,0.06,0.08,0.10];
  const loss=[26.19,22.53,32.85,40.20,44.50,47.33,45.61,47.83,46.6,47.56];
  const head=f.map(x=>`<th class="num">${x}</th>`).join('');
  const r1=abs.map(x=>`<td class="num">${x.toFixed(2)}</td>`).join('');
  const r2=loss.map(x=>`<td class="num">${x}</td>`).join('');
  const table=`<table class="dt" style="font-size:11px;"><thead><tr><th>Frequency (Hz)</th>${head}</tr></thead><tbody>
    <tr><td>Sound absorption co-eff.</td>${r1}</tr>
    <tr><td>Transmission loss (dB)</td>${r2}</tr></tbody></table>`;
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">Acoustics</p>
    <h2 class="head" style="font-size:30px;max-width:30ch;margin-bottom:8px;">Quiet, by construction.</h2>
    <p class="body" style="max-width:74ch;margin-bottom:22px;">Sound absorption per IS 10420:1982 and transmission loss per ISO 10534-2:1998.</p>
    ${table}
    <div style="display:flex;gap:40px;margin-top:30px;align-items:center;">
      <div><div class="bignum" style="font-size:56px;">40.12</div><div class="mono" style="font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:var(--sand-500);margin-top:4px;">Sound Transmission Class (avg)</div></div>
      <hr style="width:1px;height:60px;background:var(--husk-300);border:0;">
      <div><div class="bignum" style="font-size:56px;"><span class="g">0.10</span></div><div class="mono" style="font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:var(--sand-500);margin-top:4px;">Peak absorption @ 4000 Hz</div></div>
    </div>`);
});

/* 35 — FIRE TEST */
PAGES.push(n=>{
  const rows=[
    ['Fire resistance','Appendix 11 of UIC 564.2','Class A','Class 1 or A'],
    ['Flammability','UL94','V0 rating','V0 Rating'],
    ['Flame spread index','ASTM E84:2020','0 – 25','6'],
    ['Smoke developed index','ASTM E84:2020','≤ 450','100'],
  ];
  const body=rows.map(r=>`<tr><td>${r[0]}</td><td class="mono" style="font-size:11px;color:var(--sand-500);">${r[1]}</td><td>${r[2]}</td><td class="num hl">${r[3]}</td></tr>`).join('');
  const table=`<table class="dt"><thead><tr><th>Test</th><th>Method</th><th>Limit</th><th class="num">Result</th></tr></thead><tbody>${body}</tbody></table>`;
  return tablePage(n,{eyebrow:'Fire test',title:'Flame-retardant & smoke-suppressant.',
    sub:'UIC 564-2 (Appendix 11) governs fire protection in railway vehicles. UL94 V0 means burning stops within 10 seconds. ASTM E84 assesses surface burning — flame spread and smoke developed indices.',
    table,note:'Tested to international standards · more at indowud.com/Fire-test/'});
});

/* 36 — CONTACT / CLOSING */
PAGES.push(n=>`<section class="page dark" data-screen-label="37">
  <div class="deer" style="bottom:-40px;right:-30px;width:430px;height:360px;opacity:0.28;"></div>
  <div class="brandline"><div class="wm"><b style="font-size:18px;">INDOWUD</b><span class="n">NFC</span></div><span class="meta">Natural Fiber Composite</span></div>
  <div class="pad" style="justify-content:center;">
    <p class="eyebrow" style="margin-bottom:24px;">Together</p>
    <h1 class="disp" style="font-size:44px;max-width:24ch;">Let's build a world where beauty and responsibility go hand in hand.</h1>
    <div style="margin-top:46px;display:flex;gap:60px;flex-wrap:wrap;">
      <div>
        <div class="mono" style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:var(--leaf-300);margin-bottom:10px;">Regd. Office</div>
        <p class="body" style="color:var(--husk-100);max-width:34ch;">Indowud nfc Private Limited<br>First Floor, New No. 30 (Old No. 43), First Main Road, East Shenoy Nagar, Chennai 600 030</p>
      </div>
      <div>
        <div class="mono" style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:var(--leaf-300);margin-bottom:10px;">Contact</div>
        <p class="body" style="color:var(--husk-100);">info@indowud.com<br>www.indowud.com</p>
        <div class="chips" style="margin-top:16px;">${chip('GreenPro','leaf','badge')}${chip('EPD verified','leaf','check')}</div>
      </div>
    </div>
  </div>
  ${run(n)}
</section>`);

window.PAGES = PAGES;
