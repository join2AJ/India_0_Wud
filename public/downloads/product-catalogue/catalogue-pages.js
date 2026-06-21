/* INDOWUD nfc — Product Catalogue · spec sheet per product */
/* brand, run, P are global consts from the host HTML. */
const PAGES=[];

const PRODUCTS=[
  {key:'zerowud',code:'01',name:'zerOwud nfc board',cat:'Panel',tagline:'Build green with zero-wud panels',
   blurb:'Good strength and durability for furniture, cabinetry and wall panels. Smooth on both sides.',
   chips:['Strong','Durable','Smooth 2 sides'],
   specs:[['Standard size','8ft × 4ft · 2440 × 1220 mm'],['Thickness','6 · 8 · 12 · 16 · 18 · 25 mm'],['Surface','Smooth, both sides'],['Grades','Single density'],['Custom sizes','On request']]},
  {key:'board',code:'02',name:'Indowud nfc board',cat:'Hero panel',tagline:'Agricultural waste into a sustainable panel',
   blurb:'The hero panel — a high-performance alternative to plywood across interiors and exteriors. Rough on both sides for finishing.',
   chips:['Neo','Create','Build'],
   specs:[['Range','nfc Neo · Create · Build'],['Standard size','8ft × 4ft · 2440 × 1220 mm'],['Thickness','6 · 8 · 12 · 15/16 · 18 · 25 mm'],['Surface','Rough, both sides'],['Density','625 / 725 / 825+ kg/CBM']]},
  {key:'door',code:'03',name:'nfc door',cat:'Joinery',tagline:'The eco-friendly door',
   blurb:'The beauty of a natural wood panel with full sustainability. Paint, polish, varnish, or overlay veneer / laminate.',
   chips:['Paintable','Veneer-ready','Waterproof'],
   specs:[['Size','7ft × 3ft · 2140 × 920 mm'],['Also','8ft × 3ft · 2440 × 920 mm'],['Thickness','28 mm & 30 mm'],['Finish','Paint · polish · veneer · laminate']]},
  {key:'frame',code:'04',name:'nfc frame',cat:'Joinery',tagline:'Reimagine doorways with nfc frames',
   blurb:'Door frames with open grains akin to natural wood. Easy to paint, varnish and stain.',
   chips:['Open grain','Customisable'],
   specs:[['Sizes','3"×2" · 4"×2.5" · 5"×2.5"'],['Standard length','7ft · 8ft · 10ft'],['Finish','Paint · varnish · stain'],['Use','Door & window frames']]},
  {key:'jaali',code:'05',name:'nfc Jaali',cat:'Façades & screens',tagline:'Elevate space with intricate patterns',
   blurb:'CNC-routed nfc boards — including mashrabiya screens — for interior partitions and lightweight exterior façades.',
   chips:['CNC routed','Mashrabiya','Custom designs'],
   specs:[['Method','CNC routing'],['Use','Interior screens · exterior façades'],['Designs','Fully customisable'],['Base board','nfc board, any thickness']]},
  {key:'decking',code:'06',name:'nfc decking',cat:'Outdoor',tagline:'Solid composite decking',
   blurb:'The beauty of wood without the maintenance. Exceptional strength, durability and weather resistance; stainable.',
   chips:['Weatherproof','Stainable','Solid'],
   specs:[['Available size','8ft × 6in · 2440 × 150 mm'],['Thickness','25 mm & 30 mm'],['Finish','Stainable'],['Install','300 mm support · 4 mm plank gap']]},
  {key:'flute',code:'07',name:'nfc flute',cat:'Louver',tagline:"Nature's elegance, modern design",
   blurb:'Fluting and louver solutions for green architecture — sustainable louver and flute panelling.',
   chips:['Louver','Fluted'],
   specs:[['Available size','8ft × 1ft · 2440 × 300 mm'],['Thickness','18 mm & 25 mm'],['Use','Louvers · feature walls'],['Patterns','See indowud.com']]},
  {key:'textured',code:'08',name:'nfc textured panels',cat:'Surface',tagline:'Nature in intricate wooden grains',
   blurb:'Natural-fibre composites with deep wooden-textured designs — the warmth of wood, the durability of composite.',
   chips:['Deep grain','Decorative'],
   specs:[['Textured','8ft × 2ft · 2440 × 600 mm'],['Thickness','8 · 12 · 15 · 18 · 25 mm'],['Deep texture','8ft × 1ft · 13 · 15 · 23 mm'],['Use','Feature & wall panels']]},
  {key:'trim',code:'09',name:'nfc trim',cat:'Profiles',tagline:'Eco-friendly cut-to-size trims',
   blurb:'A versatile cut-to-size solution for elegant detailing — easily customised to project requirements.',
   chips:['Cut to size','Versatile'],
   specs:[['Standard length','8ft · 2440 mm'],['Thickness','8 · 12 · 15 · 18 · 25 · 30 mm'],['Standard width','100 · 150 · 200 · 250 mm'],['Use','Edging · profiles · detailing']]},
  {key:'fence',code:'10',name:'nfc fence',cat:'Outdoor',tagline:'Beauty and sustainability combined',
   blurb:'An eco-friendly alternative to wood fencing — strong, durable and weather-resistant for any outdoor space.',
   chips:['Weatherproof','Twist styles'],
   specs:[['Length','4ft · 1220 mm'],['Width','50 · 75 · 100 mm'],['Thickness','15 · 18 · 25 mm'],['Style','Standard · single/double/triple twist']]},
  {key:'glu',code:'11',name:'nfc glu',cat:'Adhesive',tagline:'A strong, water-resistant bond',
   blurb:'NFC-GLU bonds almost all surfaces — rough or smooth, porous or non-porous. Recommended for bonding nfc, faster.',
   chips:['Water-resistant','Universal bond'],
   specs:[['Bonds','Rough · smooth · porous · non-porous'],['Best with','Indowud nfc surfaces'],['Set time','Varies with conditions'],['Use','Joinery · lamination']]},
];

/* COVER */
PAGES.push(n=>`<section class="page dark cover" data-screen-label="01">
  <div class="brandline"><div class="wm"><b style="font-size:18px;">INDOWUD</b><span class="n">NFC</span></div><span class="meta">Specification sheets · 2026</span></div>
  <div class="pad" style="justify-content:flex-end;">
    <p class="eyebrow" style="margin-bottom:20px;">Product Catalogue</p>
    <h1 class="disp" style="font-size:64px;max-width:14ch;">Every panel, fully specified.</h1>
    <p class="body lede" style="margin-top:24px;max-width:52ch;">Sizes, thicknesses, finishes and verified test data for all eleven Indowud nfc products — boards, doors, frames, decking, jaali and more.</p>
    <div style="display:flex;gap:10px;margin-top:30px;flex-wrap:wrap;"><span class="tag">11 products</span><span class="tag">GreenPro certified</span><span class="tag">Zero-wood</span></div>
  </div>
  <div class="run" style="color:var(--sand-300);"><span>indowud.com</span><span>01 / ${PRODUCTS.length+3}</span></div>
</section>`);

/* CONTENTS */
PAGES.push(n=>{
  const list=PRODUCTS.map((p,i)=>`<div style="display:flex;align-items:baseline;gap:14px;padding:9px 0;border-bottom:1px solid var(--husk-300);">
    <span class="mono" style="font-size:11px;color:var(--leaf-600);width:26px;">${p.code}</span>
    <span style="font-family:var(--fd);font-weight:600;font-size:16px;color:var(--ink-900);flex:1;">${p.name}</span>
    <span class="mono" style="font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:var(--sand-500);">${p.cat}</span></div>`).join('');
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">Contents</p>
    <h2 class="head" style="font-size:34px;margin-bottom:20px;">The range at a glance.</h2>
    <div style="column-count:2;column-gap:48px;">${list}</div>`,'Contents');
});

/* SPEC SHEET per product */
PRODUCTS.forEach(p=>{
  PAGES.push(n=>{
    const specs=p.specs.map(s=>`<div class="row"><span class="k">${s[0]}</span><span class="v">${s[1]}</span></div>`).join('');
    const chips=p.chips.map(c=>`<span class="chip">${c}</span>`).join('');
    return P(n,'cream',`
      <div style="display:grid;grid-template-columns:1.05fr .95fr;gap:44px;flex:1;align-items:center;">
        <div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;"><span class="tag" style="background:var(--leaf-500);">${p.code}</span><p class="eyebrow" style="margin:0;">${p.cat}</p></div>
          <h1 class="disp" style="font-size:44px;margin-bottom:10px;">${p.name}</h1>
          <hr class="rule" style="margin-bottom:16px;">
          <h2 class="head" style="font-size:19px;color:var(--leaf-700);margin-bottom:14px;max-width:22ch;">${p.tagline}</h2>
          <p class="body" style="max-width:46ch;margin-bottom:18px;">${p.blurb}</p>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;">${chips}</div>
          <div class="spec">${specs}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div class="photo" style="aspect-ratio:4/3;padding:14px;"><img src="resources/photos/${p.key}.png" alt="${p.name}"/></div>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="mono" style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--sand-500);">Indowud nfc · ${p.cat}</span>
            <span class="chip">GreenPro</span>
          </div>
        </div>
      </div>`,p.name);
  });
});

/* TEST DATA + CERTIFICATIONS (closing) */
PAGES.push(n=>{
  const t=[['Density','Kg/CBM','800.3'],['Water absorption · 24h','%','0.12'],['Modulus of rupture','N/mm²','14.5'],['Modulus of elasticity','N/mm²','1327'],['Screw withdrawal · face','N','2252'],['Tensile strength','MPa','7.6'],['Compression strength','MPa','40.2'],['Flame spread (E84)','Index','6'],['Smoke developed (E84)','Index','100'],['VOC emissions','Mg/Kg','Below detectable'],['Termite / fungal / borer','—','No attack']];
  const body=t.map(r=>`<tr><td>${r[0]}</td><td class="mono" style="font-size:10px;color:var(--sand-500);">${r[1]}</td><td class="num hl">${r[2]}</td></tr>`).join('');
  return `<section class="page dark" data-screen-label="${String(n).padStart(2,'0')}">${brand()}<div class="pad">
    <style>
      .catdark td{color:var(--husk-100)!important;border-color:rgba(242,234,217,.14)!important;}
      .catdark th{color:var(--sand-300)!important;border-color:var(--leaf-400)!important;}
      .catdark tr:nth-child(even) td{background:rgba(242,234,217,.05)!important;}
      .catdark td.hl{color:var(--leaf-300)!important;}
    </style>
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">Verified performance</p>
    <h2 class="head" style="font-size:30px;color:var(--husk-50);max-width:26ch;margin-bottom:8px;">One material. Every claim, tested.</h2>
    <p class="body" style="color:var(--sand-300);max-width:74ch;margin-bottom:18px;">Independent results (National Test House, CIPET, IPIRTI, Spectro & SGS Labs). Applies across the nfc range; values may vary 5% by grade.</p>
    <div style="display:grid;grid-template-columns:1.1fr .9fr;gap:30px;align-items:start;">
      <table class="dt catdark"><thead><tr><th>Property</th><th>Unit</th><th class="num">Result</th></tr></thead><tbody>${body}</tbody></table>
      <div>
        <p class="mono" style="font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--leaf-300);margin:0 0 14px;">Certifications</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px;">${['GreenPro','EPD','ISO 9001:2015','ISO 14001:2015','ISO 45001:2018','ASTM E84 Class 1/A','UL94 V0','Lead-free'].map(c=>`<span class="tag" style="background:rgba(242,234,217,.08);color:var(--husk-100);border:1px solid rgba(242,234,217,.16);">${c}</span>`).join('')}</div>
        <div style="border-top:1px solid rgba(242,234,217,.14);padding-top:16px;">
          <div class="mono" style="font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--leaf-300);margin-bottom:8px;">Order & enquiries</div>
          <p class="body" style="color:var(--husk-100);">info@indowud.com · www.indowud.com<br>Indowud nfc Pvt Ltd · Chennai, India</p>
        </div>
      </div>
    </div></div>
    <div class="run"><span>Product Catalogue</span><span>${String(n).padStart(2,'0')} / ${String(window.PAGES.length).padStart(2,'0')}</span></div>
  </section>`;
});

/* BRAND COVER + CLOSING — bookends, prepended/appended below */
const brandCover = ()=>`<section class="page dark cover" data-screen-label="00">
  <div class="deer" style="top:118px;left:50%;transform:translateX(-50%);width:540px;height:450px;opacity:0.92;"></div>
  <div class="brandline"><div class="wm"><b style="font-size:18px;">INDOWUD</b><span class="n">NFC</span></div><span class="meta">Natural Fiber Composite · 2026</span></div>
  <div class="pad" style="justify-content:flex-end;">
    <p class="eyebrow" style="margin-bottom:18px;">Natural Fiber Composite · Ahimsa Design</p>
    <h1 class="disp" style="font-size:50px;max-width:24ch;">Only when we make the right choices<span style="color:var(--leaf-300);"> do we achieve the right results.</span></h1>
    <div class="chips" style="margin-top:26px;">${['Termite Proof','Water Proof','Flame Retardant','Easily Machinable','Thermoformable','Eco-friendly & Recyclable'].map(c=>`<span class="chip2">${c}</span>`).join('')}</div>
  </div>
  <div class="run" style="color:var(--sand-300);"><span>indowud.com</span><span>Product Catalogue</span></div>
</section>`;

const brandClose = (n)=>`<section class="page dark" data-screen-label="${String(n).padStart(2,'0')}">
  <div class="deer" style="bottom:-40px;right:-30px;width:420px;height:350px;opacity:0.26;"></div>
  ${brand()}
  <div class="pad" style="justify-content:center;">
    <p class="eyebrow" style="margin-bottom:22px;">Together</p>
    <h1 class="disp" style="font-size:44px;max-width:24ch;">Let's build a world where beauty and responsibility go hand in hand.</h1>
    <div style="margin-top:42px;display:flex;gap:56px;flex-wrap:wrap;">
      <div><div class="mono" style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--leaf-300);margin-bottom:10px;">Order & enquiries</div><p class="body" style="color:var(--husk-100);">info@indowud.com · www.indowud.com<br>Indowud nfc Pvt Ltd · Chennai, India</p></div>
      <div><div class="mono" style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--leaf-300);margin-bottom:10px;">Certified</div><div class="chips">${['GreenPro','EPD verified'].map(c=>`<span class="chip2">${c}</span>`).join('')}</div></div>
    </div>
  </div>
  <div class="run"><span>Product Catalogue</span><span>${String(n).padStart(2,'0')} / ${String(window.PAGES.length+2).padStart(2,'0')}</span></div>
</section>`;
PAGES.unshift(brandCover);
PAGES.push(brandClose);

window.PAGES=PAGES;
