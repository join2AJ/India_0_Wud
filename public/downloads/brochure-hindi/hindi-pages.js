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
  <div class="brandline"><div class="wm"><b style="font-size:18px;">INDOWUD</b><span class="n">NFC</span></div><span class="meta">ई-ब्रोशर · 2026</span></div>
  <div class="pad" style="justify-content:flex-end;">
    <p class="eyebrow" style="margin-bottom:20px;">नैचुरल फाइबर कम्पोज़िट · अहिंसा डिज़ाइन</p>
    <h1 class="disp" style="font-size:50px;max-width:24ch;">सही चुनाव करने पर ही<span style="color:var(--leaf-300);"> हमें सही परिणाम मिलते हैं।</span></h1>
    <div class="chips" style="margin-top:28px;">
      ${['दीमक-रोधी','जल-रोधी','अग्नि-रोधी','आसानी से मशीनिंग','थर्मोफॉर्मेबल','पर्यावरण-अनुकूल व पुनर्चक्रणीय'].map(c=>chip(c,'')).join('')}
    </div>
  </div>
  ${run(1)}
</section>`);

/* 02 — MANTRA */
PAGES.push(n=>P(n,'dark',`
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;">
    <p class="eyebrow" style="margin-bottom:30px;">असली डिज़ाइन मंत्र</p>
    <h1 class="disp" style="font-size:52px;line-height:1.06;max-width:22ch;">
      डिज़ाइन के लिए हम <span style="color:var(--leaf-300);">विनाश</span> नहीं करते।<br>
      सृजन के लिए हम <span style="color:var(--leaf-300);">हत्या</span> नहीं करते।<br>
      निर्माण के लिए हम पेड़ <span style="color:var(--leaf-300);">नहीं काटते</span>।</h1>
    <p class="body lede" style="margin-top:34px;max-width:40ch;">यदि आप किसी से प्रेम करते हैं तो उसे मुक्त कर दें — और वह फिर भी काम करेगा। यही है <strong style="color:var(--husk-50);">Ahimsa</strong>.</p>
  </div>`));

/* 03 — CHAIRMAN LETTER */
PAGES.push(n=>P(n,'cream',`
  <div style="display:grid;grid-template-columns:0.82fr 1.18fr;gap:52px;flex:1;margin-top:10px;">
    <div style="display:flex;flex-direction:column;">
      <p class="eyebrow" style="margin-bottom:18px;">चेयरमैन की ओर से</p>
      <h2 class="head" style="font-size:30px;">"एक समय में एक nfc बोर्ड — एक टिकाऊ भविष्य की ओर।"</h2>
      <div style="margin-top:auto;">
        <img src="resources/photos/bengani.png" alt="B. L. Bengani" style="width:96px;height:96px;border-radius:50%;object-fit:cover;margin-bottom:14px;box-shadow:0 6px 18px rgba(40,32,20,0.18);" />
        <img src="resources/photos/signature.png" alt="signature" style="height:46px;width:auto;display:block;margin-bottom:6px;" />
        <div style="font-family:var(--fd);font-weight:800;font-size:20px;color:var(--ink-900);">B. L. Bengani</div>
        <div class="mono" style="font-size:11px;letter-spacing:0.08em;color:var(--sand-500);text-transform:uppercase;margin-top:4px;">चेयरमैन, Indowud nfc</div>
        <p class="body" style="font-size:12.5px;color:var(--sand-500);margin-top:12px;max-width:30ch;">प्लाई उद्योग में 30 वर्षों से अधिक के अनुभव के साथ, श्री बेंगानी — Uniply के संस्थापक — भारत और विश्व में नैचुरल-फाइबर कम्पोज़िट वुड के अग्रणी हैं।</p>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;justify-content:center;">
      <p class="body" style="margin-bottom:14px;">बढ़ते जलवायु संकट से जूझती दुनिया में, हर ज़िम्मेदार नागरिक और व्यापार-प्रमुख को सक्रिय रूप से समाधान खोजने चाहिए। Indowud nfc में हम मानते हैं कि नवाचार और स्थिरता केवल शब्द नहीं, बल्कि एक बेहतर कल की नींव हैं।</p>
      <p class="body" style="margin-bottom:14px;">अत्यंत गर्व के साथ मैं हमारे टिकाऊ उत्पादों की उल्लेखनीय श्रृंखला प्रस्तुत करता हूँ। प्रकृति में प्रचुर एवं नवीकरणीय संसाधन से बने, ये उत्कृष्ट गुणों वाले पर्यावरण-अनुकूल उत्पाद हैं — गृहस्वामियों, आर्किटेक्ट्स, डिज़ाइनरों, बिल्डरों और ठेकेदारों के लिए आदर्श विकल्प।</p>
      <p class="body" style="margin-bottom:14px;">हमारी सूक्ष्म निर्माण-प्रक्रिया ऐसे उत्पाद सुनिश्चित करती है जो दीमक-रोधी, जल-रोधी, और अग्नि-रोधी + धुआँ-रोधी हैं — आंतरिक एवं बाहरी अनुप्रयोगों की विस्तृत श्रृंखला के लिए उपयुक्त।</p>
      <p class="body">हमारे nfc उत्पादों को चुनकर आप इस यात्रा में हमारे साथ जुड़ते हैं — भविष्य को, स्थिरता को अपनाते हुए। आइए, मिलकर एक ऐसी दुनिया बनाएँ जहाँ सौंदर्य और ज़िम्मेदारी साथ-साथ चलें।</p>
    </div>
  </div>`));

/* 04 — PIONEERING WOOD */
PAGES.push(n=>P(n,'dark',`
  <div style="display:grid;grid-template-columns:1.1fr 0.9fr;gap:48px;flex:1;align-items:center;">
    <div>
      <p class="eyebrow" style="margin-bottom:20px;">एक अग्रणी लकड़ी</p>
      <h1 class="disp" style="font-size:46px;max-width:18ch;">जो देश को खुलकर साँस लेने देती है।</h1>
      <p class="body lede" style="margin-top:24px;max-width:48ch;">Indowud nfc अपनी तरह की पहली कृषि-भूसी से बनी लकड़ी है। यह भूसी अक्सर फेंक दी जाती या जला दी जाती है — जिससे भारत और विश्व भर में चिंताजनक वायु प्रदूषण होता है।</p>
      <p class="body" style="margin-top:14px;max-width:48ch;">इसका पुनः उपयोग राष्ट्रीय स्वास्थ्य और स्वच्छ वायु के लिए अत्यंत मूल्यवान है। अत्याधुनिक तकनीक से यह भूसी ऐसे बोर्ड बनती है जो लकड़ी के हर गुण की बराबरी करते हैं — भारत में और संभवतः विश्व में अद्वितीय।</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:18px;">
      <div style="display:flex;gap:18px;align-items:baseline;"><div class="bignum" style="font-size:70px;"><span class="g">0</span></div><div class="mono" style="font-size:13px;color:var(--sand-300);max-width:14ch;text-transform:uppercase;letter-spacing:0.08em;">पेड़ कभी नहीं काटे</div></div>
      <hr class="hair">
      <div style="display:flex;gap:18px;align-items:baseline;"><div class="bignum" style="font-size:70px;">1<span class="g">st</span></div><div class="mono" style="font-size:13px;color:var(--sand-300);max-width:16ch;text-transform:uppercase;letter-spacing:0.08em;">अपनी तरह की कृषि-भूसी लकड़ी</div></div>
      <hr class="hair">
      <div style="display:flex;gap:18px;align-items:baseline;"><div class="bignum" style="font-size:70px;"><span class="g">100</span>%</div><div class="mono" style="font-size:13px;color:var(--sand-300);max-width:16ch;text-transform:uppercase;letter-spacing:0.08em;">लकड़ी के गुण, बिना किसी कटाई के</div></div>
    </div>
  </div>`));

/* 05 — AHIMSA PHILOSOPHY */
PAGES.push(n=>{
  const A=[
    ['A','कुल्हाड़ी पर रोक','अब कोई पेड़ नहीं कटेगा — एक भी नहीं।','leaf'],
    ['H','स्वस्थ घर','जीवाणु-रोधी सुरक्षात्मक गुण।','wind'],
    ['I','बर्फ, वर्षा व जल-रोधी','शून्य फूलाव। शून्य परत-विघटन।','droplet'],
    ['M','ढलने योग्य','थर्मोफॉर्मेबल और डिज़ाइन में आसान।','waves'],
    ['S','सुरक्षित','दीमक और कृन्तकों दोनों से।','bug'],
    ['A','कृषि-भूसी से निर्मित','भूसी जलाने से होने वाले वायु प्रदूषण को रोकता है।','recycle'],
  ];
  const rows=A.map(r=>`<div style="display:flex;align-items:center;gap:20px;padding:13px 0;border-bottom:1px solid var(--husk-300);">
    <div style="font-family:var(--fd);font-weight:800;font-size:34px;color:var(--leaf-500);width:42px;text-align:center;flex:none;">${r[0]}</div>
    <div style="width:34px;height:34px;border-radius:8px;background:var(--leaf-100);color:var(--leaf-700);display:grid;place-items:center;flex:none;">${ICON[r[3]]}</div>
    <div><div style="font-family:var(--fd);font-weight:700;font-size:17px;color:var(--ink-900);">${r[1]}</div><div class="body" style="font-size:13px;color:var(--ink-600);">${r[2]}</div></div>
  </div>`).join('');
  return P(n,'cream',`
    <div style="display:grid;grid-template-columns:0.8fr 1.2fr;gap:50px;flex:1;align-items:center;">
      <div>
        <p class="eyebrow" style="margin-bottom:18px;">दर्शन</p>
        <h1 class="disp" style="font-size:44px;">अहिंसा डिज़ाइन दर्शन</h1>
        <p class="body lede" style="margin-top:22px;max-width:34ch;">Indowud nfc बनाने में कोई पेड़ नहीं काटा जाता। भारत में दीमक की गंभीर समस्या है — पर nfc उन्हें खाने को कुछ नहीं देता। आपको एक भी दीमक मारने की ज़रूरत नहीं।</p>
      </div>
      <div>${rows}</div>
    </div>`);
});

/* 06 — HEALTHY HOMES + GREENPRO */
PAGES.push(n=>P(n,'cream',`
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;flex:1;align-items:center;">
    <div>
      <p class="eyebrow" style="margin-bottom:16px;">टिकाऊ व स्वस्थ घरों का निर्माण</p>
      <h2 class="head" style="font-size:32px;max-width:18ch;margin-bottom:18px;">एक सुरक्षात्मक कवच, निर्माण में ही समाहित।</h2>
      <p class="body" style="max-width:46ch;margin-bottom:14px;">निर्माण के दौरान गैर-हानिकारक एडिटिव्स एक जीवाणु-रोधी कवच बनाते हैं। Indowud nfc गैर-विषैला है, कोई VOC उत्सर्जित नहीं करता, और जीवाणुओं को दूर रखने के लिए अभिकल्पित है।</p>
      <p class="body" style="max-width:46ch;">हमारा घर ही एकमात्र शरणस्थली है — आइए इसे सुरक्षित, संरक्षित और स्वस्थ बनाएँ।</p>
      <div class="chips" style="margin-top:22px;">${chip('गैर-विषैला','leaf','shield')}${chip('शून्य VOC','leaf','wind')}${chip('जीवाणु-रोधी','leaf','check')}${chip('सीसा-रहित','leaf','check')}</div>
    </div>
    <div class="cell" style="padding:28px;">
      <div style="width:54px;height:54px;border-radius:12px;background:var(--leaf-500);color:#fff;display:grid;place-items:center;margin-bottom:18px;">${ICON.badge}</div>
      <h3 style="font-family:var(--fd);font-weight:700;font-size:21px;color:var(--ink-900);margin:0 0 10px;">GreenPro इकोलेबल</h3>
      <p class="body" style="font-size:13.5px;margin-bottom:14px;">CII ने Indowud nfc को टिकाऊ ग्रीन उत्पाद के रूप में प्रमाणित कर GreenPro इकोलेबल प्रदान किया है — जो GENICES के माध्यम से ग्लोबल इकोलेबलिंग नेटवर्क (GEN) से मान्यता प्राप्त है।</p>
      <p class="body" style="font-size:13.5px;margin-bottom:18px;">GreenPro युक्त उत्पादों का पर्यावरणीय प्रभाव कम होता है और वे ग्रीन बिल्डिंग्स व ग्रीन कंपनियों के प्रदर्शन को बढ़ाते हैं।</p>
      <hr class="hair" style="margin-bottom:16px;">
      <div class="chips">${['ISO 9001:2015','ISO 14001:2015','ISO 45001:2018','GreenPro','सीसा-रहित'].map(c=>chip(c,'')).join('')}</div>
    </div>
  </div>`));

/* 07 — WHY NFC · 18 reasons */
PAGES.push(n=>{
  const R=[
    ['दीमक-रोधी','bug'],['जल-रोधी','droplet'],['अग्नि-रोधी','flame'],['आसानी से मशीनिंग','cut'],['न किरचना न दरारें','shield'],['टिकाऊ','layers'],
    ['कृन्तक-रोधी','bug'],['बेहतरीन स्क्रू पकड़','cnc'],['फफूंद, शैवाल व मोल्ड रोधी','leaf'],['जीवाणु-रोधी','shield'],['UV-रोधी','spark'],['थर्मोफॉर्मेबल','thermo'],
    ['धुआँ-रोधी','wind'],['100% पुनर्चक्रणीय','recycle'],['कोई हानिकारक तत्व नहीं','check'],['ध्वनि अवशोषक','volume'],['100% पर्यावरण-अनुकूल','leaf'],['फॉर्मेल्डिहाइड उत्सर्जन नहीं','drop2'],
  ];
  const cells=R.map(r=>`<div class="cell" style="text-align:center;padding:18px 10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:11px;">
    <div class="icn" style="margin:0;width:38px;height:38px;">${ICON[r[1]]||ICON.check}</div>
    <span style="font-family:var(--fd);font-weight:600;font-size:12.5px;color:var(--ink-900);line-height:1.25;">${r[0]}</span></div>`).join('');
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:10px;">अठारह कारण, एक सामग्री</p>
    <h2 class="head" style="font-size:36px;margin-bottom:8px;">प्लाईवुड के हर वादे —<br>बिना किसी समझौते के।</h2>
    <p class="body" style="max-width:62ch;margin-bottom:22px;">एक ही अभियांत्रिकीय सामग्री जो संरचना, सुरक्षा, स्वास्थ्य और पृथ्वी — सबका एक साथ उत्तर देती है।</p>
    <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:13px;flex:1;align-content:center;">${cells}</div>`);
});

/* 08 — PRODUCTS OVERVIEW (all in one) */
PAGES.push(n=>{
  const prods=[
    ['zerowud','zerOwud nfc board','पैनल'],['board','Indowud nfc board','मुख्य पैनल'],['door','nfc door','जॉइनरी'],['frame','nfc frame','जॉइनरी'],
    ['jaali','nfc Jaali','अग्रभाग'],['decking','nfc decking','बाहरी'],['flute','nfc flute','लूवर'],['textured','nfc textured panel','सतह'],
    ['trim','nfc trim','प्रोफाइल'],['fence','nfc fence','बाहरी'],['glu','nfc glu','चिपकने वाला'],
  ];
  const cards=prods.map(p=>`<div style="background:#fff;border:1px solid var(--husk-300);border-radius:10px;overflow:hidden;box-shadow:0 3px 10px rgba(40,32,20,0.06);display:flex;flex-direction:column;">
    <div style="aspect-ratio:5/3;display:flex;align-items:center;justify-content:center;padding:10px;background:#fff;"><img src="resources/photos/${p[0]}.png" alt="${p[1]}" style="max-width:100%;max-height:100%;object-fit:contain;"/></div>
    <div style="padding:9px 12px;border-top:1px solid var(--husk-200);display:flex;align-items:center;justify-content:space-between;gap:8px;">
      <span style="font-family:var(--fd);font-weight:700;font-size:12.5px;color:var(--ink-900);">${p[1]}</span>
      <span class="mono" style="font-size:8px;letter-spacing:0.08em;text-transform:uppercase;color:var(--leaf-600);white-space:nowrap;">${p[2]}</span>
    </div></div>`).join('');
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:10px;">श्रृंखला</p>
    <h2 class="head" style="font-size:36px;margin-bottom:6px;">ग्यारह उत्पाद। एक ज़ीरो-वुड प्रणाली।</h2>
    <p class="body" style="max-width:64ch;margin-bottom:20px;">एक स्वस्थ पृथ्वी के लिए पर्यावरण-अनुकूल उत्पाद — हर सतह, आंतरिक एवं बाहरी। आगे प्रत्येक के लिए एक पृष्ठ है।</p>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;flex:1;align-content:center;">${cards}</div>`);
});

/* 08 — zerOwud */
PAGES.push(n=>product(n,{eyebrow:'01 · zerOwud nfc',name:'zerOwud nfc board',tagline:'ज़ीरो-वुड पैनलों के साथ हरित निर्माण',
  blurb:'zerOwud बेहतरीन मज़बूती और टिकाऊपन प्रदान करता है — फर्नीचर और कैबिनेटरी से लेकर वॉल पैनल तक सबके लिए आदर्श। अधिक जानकारी के लिए zerOwud.com देखें।',
  tone:'zerowud',swatchLabel:'zerOwud · smooth both sides',thumbs:['zerowud','board','husk'],
  chips:[['मज़बूत','check'],['टिकाऊ','shield']],
  specs:[{k:'मानक आकार',v:'8ft × 4ft · 2440 × 1220 mm'},{k:'मोटाई',v:'6 · 8 · 12 · 16 · 18 · 25 mm'},{k:'सतह',v:'दोनों ओर चिकना'}],
  foot:'कस्टम आकारों के लिए हमसे संपर्क करें।'}));

/* 09 — Indowud nfc Board */
PAGES.push(n=>product(n,{eyebrow:'02 · Indowud nfc',name:'Indowud nfc board',tagline:'कृषि अपशिष्ट को एक टिकाऊ पैनल में बदलना',
  blurb:'पारंपरिक लकड़ी का एक टिकाऊ, उच्च-प्रदर्शन विकल्प। टिकाऊ और बहुउपयोगी — आंतरिक एवं बाहरी हर जगह आदर्श।',
  tone:'board',swatchLabel:'nfc board · rough both sides',thumbs:['board','husk','textured'],
  chips:[['Neo','layers'],['Create','layers'],['Build','layers']],
  specs:[{k:'श्रेणी',v:'nfc Neo · Create · Build'},{k:'उपलब्ध आकार',v:'8ft × 4ft · 2440 × 1220 mm'},{k:'मोटाई',v:'6 · 8 · 12 · 15/16 · 18 · 25 mm'},{k:'सतह',v:'दोनों ओर खुरदरा'}],
  foot:'कस्टम आकारों के लिए हमसे संपर्क करें।'}));

/* 10 — INTERIOR (neo & create) */
PAGES.push(n=>appsPage(n,{eyebrow:'अनुप्रयोग एवं प्रेरणा · आंतरिक',title:'डिज़ाइन के लिए बना। ढलने योग्य, फिर भी मज़बूत।',
  sub:'कई मायनों में लकड़ी का श्रेष्ठ विकल्प — दिखने, छूने और काम करने में भी लकड़ी जैसा।',
  apps:[{i:'layers',t:'ऑफिस फर्नीचर'},{i:'door',t:'कैबिनेट व अलमारी'},{i:'droplet',t:'नम क्षेत्र व बाथरूम'},{i:'grid',t:'छतें'},{i:'cnc',t:'सीढ़ियाँ'},{i:'mortar',t:'रसोई व भोजन'}]}));

/* 11 — IMAGINATION TO REALITY */
PAGES.push(n=>statement(n,{eyebrow:'अनुप्रयोग एवं प्रेरणा · शीर्ष आर्किटेक्ट्स द्वारा',title:'कल्पना को वास्तविकता में बदलना।',size:54,mw:18,
  body:'तराशे गए झूलों से लेकर निर्बाध आंतरिक सज्जा तक — Indowud nfc आर्किटेक्ट की दृष्टि के अनुसार ढलता है, बिना स्थिरता के नियम तोड़े।',
  chips:['झूले','आंतरिक सज्जा','कस्टम जॉइनरी','घुमावदार रूप']}));

/* 12 — BUILD · all weather exterior */
PAGES.push(n=>appsPage(n,{eyebrow:'अनुप्रयोग एवं प्रेरणा · बाहरी',title:'कठोर मौसम के लिए बना। किसी भी लकड़ी-आधारित पैनल से कहीं श्रेष्ठ।',
  sub:'सभी बाहरी एवं आंतरिक स्थानों में इसका मुक्त उपयोग करें।',
  apps:[{i:'waves',t:'पूल डेक'},{i:'layers',t:'बेंच'},{i:'spark',t:'झूले'},{i:'door',t:'दरवाज़े'},{i:'fence',t:'बाड़'},{i:'grid',t:'बाहरी फर्नीचर'}]}));

/* 13 — BEAUTIFUL EXTERIORS (montage) */
PAGES.push(n=>P(n,'dark',`
  <p class="eyebrow" style="margin-top:6px;margin-bottom:14px;">अनुप्रयोग एवं प्रेरणा · वास्तविक परियोजनाएँ</p>
  <h2 class="head" style="font-size:34px;max-width:22ch;margin-bottom:24px;">सुंदर बाहरी संरचनाओं का निर्माण।</h2>
  <div style="display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:1fr 1fr;gap:14px;flex:1;">
    ${swatch('deck','Pool deck',{onDark:true,style:'grid-row:span 2;'})}
    ${swatch('jaali','Jaali screen',{onDark:true})}
    ${swatch('board','Facade',{onDark:true})}
    ${swatch('fence','Fence',{onDark:true})}
    ${swatch('flute','लूवरs',{onDark:true})}
  </div>`));

/* 14 — nfc door */
PAGES.push(n=>product(n,{eyebrow:'03 · nfc door',name:'nfc door',tagline:'पर्यावरण-अनुकूल दरवाज़ा',
  blurb:'प्राकृतिक लकड़ी के पैनल की कालातीत सुंदरता को स्थिरता के साथ जोड़ें। आसानी से पेंट, पॉलिश, वार्निश करें या विनियर / लैमिनेट चढ़ाएँ।',
  tone:'door',swatchLabel:'nfc door · paintable',thumbs:['door','board','textured'],
  specs:[{k:'आकार',v:'7ft × 3ft · 2140 × 920 mm'},{k:'साथ ही',v:'8ft × 3ft · 2440 × 920 mm'},{k:'मोटाई',v:'28 mm & 30 mm'}]}));

/* 15 — nfc frame */
PAGES.push(n=>product(n,{eyebrow:'04 · nfc frame',name:'nfc frame',tagline:'nfc फ्रेम के साथ द्वारों की पुनर्कल्पना',
  blurb:'प्राकृतिक लकड़ी जैसे खुले ग्रेन वाले दरवाज़े के फ्रेम। आसानी से अनुकूलित करें — पेंट, वार्निश और स्टेन में सरल — सौंदर्य और स्थिरता का सहज मेल।',
  tone:'frame',swatchLabel:'nfc frame · open grain',thumbs:['frame','board','husk'],
  specs:[{k:'आकार',v:'3"×2" · 4"×2.5" · 5"×2.5"'},{k:'मानक लंबाई',v:'7ft · 8ft · 10ft'},{k:'फ़िनिश',v:'पेंट · वार्निश · स्टेन'}],
  foot:'nfc-frame ब्रोशर indowud.com/downloads/ से डाउनलोड करें'}));

/* 16 — nfc Jaali */
PAGES.push(n=>product(n,{eyebrow:'05 · nfc Jaali',name:'nfc Jaali',tagline:'जटिल पैटर्न से अपने स्थान को निखारें',
  blurb:'कला, स्थिरता और मज़बूती का संगम। CNC-राउटेड nfc बोर्ड — शानदार मशरबिया स्क्रीन सहित — आंतरिक सज्जा को निखारते हैं और इमारत के अग्रभाग का भार घटाते हैं।',
  tone:'jaali',swatchLabel:'nfc Jaali · CNC routed',thumbs:['jaali','jaali','board'],
  chips:[['CNC राउटेड','cnc'],['मशरबिया','grid']],
  specs:[{k:'विधि',v:'CNC राउटिंग'},{k:'उपयोग',v:'आंतरिक स्क्रीन · बाहरी अग्रभाग'},{k:'डिज़ाइन',v:'पूर्णतः अनुकूलनीय'}],
  foot:'डिज़ाइन अनुकूलन के लिए हमसे संपर्क करें।'}));

/* 17 — nfc decking */
PAGES.push(n=>product(n,{eyebrow:'06 · nfc decking',name:'nfc decking',tagline:'ठोस कम्पोज़िट डेकिंग के साथ बाहरी जीवन को निखारें',
  blurb:'रखरखाव की परेशानी के बिना लकड़ी की प्राकृतिक सुंदरता। ठोस nfc डेकिंग असाधारण मज़बूती, टिकाऊपन और मौसम-प्रतिरोध देती है — अपनी पसंद के रंग में आसानी से स्टेन करें।',
  tone:'deck',swatchLabel:'nfc decking · solid',thumbs:['deck','deck','board'],
  specs:[{k:'उपलब्ध आकार',v:'8ft × 6in · 2440 × 150 mm'},{k:'मोटाई',v:'25 mm & 30 mm'},{k:'फ़िनिश',v:'स्टेन योग्य'}],
  foot:'पैटर्न देखें: indowud.com/products/nfc-decking/'}));

/* 18 — nfc flute */
PAGES.push(n=>product(n,{eyebrow:'07 · nfc flute',name:'nfc flute',tagline:"प्रकृति की शोभा, आधुनिक डिज़ाइन के साथ",
  blurb:'हरित वास्तुकला के लिए फ्लूटिंग और लूवर समाधान — मानव आवास और प्रकृति के बीच सामंजस्य को बढ़ावा देते हुए, अधिक टिकाऊ लूवर और फ्लूट पैनलिंग के लिए।',
  tone:'flute',swatchLabel:'nfc flute · louver',thumbs:['flute','flute','board'],
  specs:[{k:'उपलब्ध आकार',v:'8ft × 1ft · 2440 × 300 mm'},{k:'मोटाई',v:'18 mm & 25 mm'}],
  foot:'पैटर्न देखें: indowud.com/products/nfcFlute/'}));

/* 19 — nfc textured panels */
PAGES.push(n=>product(n,{eyebrow:'08 · nfc textured panel',name:'nfc textured panels',tagline:'जटिल लकड़ी के ग्रेन में प्रकृति का जादू',
  blurb:'नैचुरल-फाइबर कम्पोज़िट की एक क्रांतिकारी श्रृंखला, शानदार लकड़ी-बनावट वाले डिज़ाइनों के साथ — लकड़ी की गर्माहट और शोभा, आधुनिक कम्पोज़िट के टिकाऊपन और बहुउपयोगिता के साथ।',
  tone:'textured',swatchLabel:'textured · deep grain',thumbs:['textured','textured','board'],
  specs:[{k:'टेक्सचर्ड',v:'8ft × 2ft · 2440 × 600 mm'},{k:'मोटाई',v:'8 · 12 · 15 · 18 · 25 mm'},{k:'गहरी बनावट',v:'8ft × 1ft · 13 · 15 · 23 mm'}],
  foot:'डिज़ाइन देखें: indowud.com/products/nfctexturedpanels/'}));

/* 20 — nfc trim */
PAGES.push(n=>product(n,{eyebrow:'09 · nfc trim',name:'nfc trim',tagline:'पर्यावरण-अनुकूल ट्रिम्स के लिए स्वाभाविक विकल्प',
  blurb:'कट-टू-साइज़ ज़रूरतों के लिए एक टिकाऊ, बहुउपयोगी समाधान — किसी भी परियोजना में शोभा जोड़ने के लिए उत्तम। आपकी विशिष्ट आवश्यकताओं के अनुसार आसानी से अनुकूलित।',
  tone:'trim',swatchLabel:'nfc trim · cut to size',thumbs:['trim','board','husk'],
  specs:[{k:'मानक लंबाई',v:'8ft · 2440 mm'},{k:'मोटाई',v:'8 · 12 · 15 · 18 · 25 · 30 mm'},{k:'मानक चौड़ाई',v:'100 · 150 · 200 · 250 mm'}]}));

/* 21 — nfc fence */
PAGES.push(n=>product(n,{eyebrow:'10 · nfc fence',name:'nfc fence',tagline:'सौंदर्य और स्थिरता का संगम',
  blurb:'पारंपरिक लकड़ी की बाड़ का एक सुंदर, पर्यावरण-अनुकूल विकल्प — मज़बूत, टिकाऊ और मौसम-रोधी। किसी भी बाहरी स्थान के लिए उत्तम।',
  tone:'fence',swatchLabel:'nfc fence · twist styles',thumbs:['fence','fence','board'],
  specs:[{k:'लंबाई',v:'4ft · 1220 mm'},{k:'चौड़ाई',v:'50 · 75 · 100 mm'},{k:'मोटाई',v:'15 · 18 · 25 mm'},{k:'शैली',v:'मानक · सिंगल/डबल/ट्रिपल ट्विस्ट'}],
  foot:'डिज़ाइन देखें: indowud.com/products/nfcfence/'}));

/* 22 — nfc glu */
PAGES.push(n=>product(n,{eyebrow:'11 · nfc glu',name:'nfc glu',tagline:'एक मज़बूत, जल-रोधी जोड़',
  blurb:'NFC-GLU लगभग सभी सतहों को जोड़ता है — खुरदरी या चिकनी, छिद्रित या अछिद्रित। हम विभिन्न सतहों को तेज़ी से जोड़ने के लिए Indowud nfc के साथ NFC-GLU की पुरज़ोर अनुशंसा करते हैं।',
  tone:'glu',swatchLabel:'NFC-GLU',thumbs:['glu','board','husk'],
  chips:[['जल-रोधी','droplet'],['सार्वत्रिक जोड़','check']],
  specs:[{k:'जोड़ता है',v:'खुरदरा · चिकना · छिद्रित · अछिद्रित'},{k:'सर्वोत्तम',v:'Indowud nfc सतहें'}],
  foot:'*उपलब्धता के अधीन।'}));

/* 23 — AHIMSA FACILITY */
PAGES.push(n=>statement(n,{eyebrow:'अहिंसा डिज़ाइन दर्शन के साथ निर्मित',title:'पर्यावरण की रक्षा हेतु अभिकल्पित।',size:46,mw:20,
  body:'टिकाऊ कृषि-भूसी से बना Indowud nfc, चेन्नई, भारत की विश्व-स्तरीय डिज़ाइन, अनुसंधान एवं निर्माण इकाई में तैयार किया जाता है।',
  chips:['चेन्नई, भारत','विश्व-स्तरीय इकाई','आंतरिक अनुसंधान']}));

/* 24 — MANUFACTURING */
PAGES.push(n=>{
  const steps=[
    ['कच्चे माल का चयन','हम जापान और दक्षिण कोरिया से बेहतरीन वर्जिन PVC रेज़िन प्राप्त करते हैं, और प्राकृतिक रेशों की निर्बाध आपूर्ति हेतु स्थानीय किसान समुदायों के साथ साझेदारी करते हैं।','layers'],
    ['मैट्रिक्स संरचना','पॉलिमर और रेशों को खनिजों, कपलिंग एजेंट, ताप-स्थायीकारकों और एडिटिव्स के साथ नियंत्रित तापमान व दबाव में मिलाकर एक समरूप बंधन मैट्रिक्स बनाया जाता है।','mortar'],
    ['इंटरफ़ेस मज़बूती','जोड़ और घनत्व हर बोर्ड की इंटरफेसियल मज़बूती तय करते हैं — बेहतर प्रभाव-प्रतिरोध और आंतरिक मज़बूती हेतु रेशा-वितरण की गणितीय परिशुद्धता से प्राप्त।','shield'],
    ['Manufacturing','कंपाउंड को नियंत्रित तापमान में कैलिब्रेशन पैड्स से एक्सट्रूड किया जाता है, फिर ठंडा कर के अनुप्रस्थ-कटाई, ट्रिमिंग और सतह-प्रसंस्करण किया जाता है।','factory'],
  ];
  const cells=steps.map((s,i)=>`<div class="cell"><div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;"><span class="mono" style="font-size:12px;color:var(--leaf-600);">0${i+1}</span><div class="icn" style="margin:0;">${ICON[s[2]]}</div></div><h4>${s[0]}</h4><p>${s[1]}</p></div>`).join('');
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">प्रक्रिया</p>
    <h2 class="head" style="font-size:34px;max-width:30ch;margin-bottom:22px;">एक क्रांतिकारी उत्पाद का निर्माण जो सर्वोत्तम वैश्विक मानकों से आगे है।</h2>
    <div class="grid" style="grid-template-columns:repeat(2,1fr);gap:16px;flex:1;align-content:center;">${cells}</div>
    <div style="display:flex;margin-top:22px;border-top:2px solid var(--ink-900);padding-top:16px;">
      <div style="flex:1;"><div class="bignum" style="font-size:30px;">625<span style="font-size:14px;color:var(--sand-500);"> kg/CBM</span></div><div class="mono" style="font-size:10.5px;letter-spacing:0.1em;text-transform:uppercase;color:var(--sand-500);margin-top:4px;">Neo घनत्व</div></div>
      <div style="flex:1;"><div class="bignum" style="font-size:30px;">725<span style="font-size:14px;color:var(--sand-500);"> kg/CBM</span></div><div class="mono" style="font-size:10.5px;letter-spacing:0.1em;text-transform:uppercase;color:var(--sand-500);margin-top:4px;">Create घनत्व</div></div>
      <div style="flex:1;"><div class="bignum" style="font-size:30px;">825<span style="font-size:14px;color:var(--sand-500);"> kg/CBM</span></div><div class="mono" style="font-size:10.5px;letter-spacing:0.1em;text-transform:uppercase;color:var(--sand-500);margin-top:4px;">Build घनत्व</div></div>
    </div>`);
});

/* 25 — HIGH PERFORMANCE statement */
PAGES.push(n=>statement(n,{center:true,eyebrow:'टिकाऊपन हेतु सुदृढ़',title:'Indowud nfc एक उच्च-प्रदर्शन लकड़ी है।',size:56,mw:16,
  body:'टिकाऊपन हेतु सुदृढ़ — परीक्षित, प्रमाणित, और उन परिस्थितियों को झेलने हेतु बना जो सामान्य लकड़ी को हरा देती हैं।'}));

/* 26 — HANDLING */
PAGES.push(n=>{
  const caps=[['स्क्रू','cnc'],['कील','hammer'],['कटाई','cut'],['पेंट','paint'],['थर्मोफॉर्म','thermo'],['लैमिनेट चढ़ाना','layers'],['प्रिंट','print'],['CNC राउटिंग','cnc']];
  const cells=caps.map(c=>`<div class="cell" style="text-align:center;padding:24px 14px;min-height:132px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;"><div class="icn" style="margin:0;">${ICON[c[1]]}</div><h4 style="font-size:14px;">${c[0]}</h4></div>`).join('');
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">हैंडलिंग</p>
    <h2 class="head" style="font-size:32px;max-width:26ch;margin-bottom:8px;">समझदारी से डिज़ाइन करें, तेज़ी से बनाएँ।</h2>
    <p class="body lede" style="max-width:62ch;margin-bottom:26px;">Indowud nfc को संभालना सामान्य लकड़ी जितना आसान है — काटें, कील ठोकें, स्क्रू लगाएँ, ड्रिल करें, लैमिनेट व विनियर चढ़ाएँ, प्रिंट करें, पेंट या वार्निश करें।</p>
    <div class="grid" style="grid-template-columns:repeat(4,1fr);gap:14px;flex:1;align-content:center;">${cells}</div>`);
});

/* 27 — SUPPORT & SUGGESTIONS table */
PAGES.push(n=>{
  const rows=[[6,150,200,250],[8,200,250,350],[12,250,300,450],['15/16',300,350,550],[18,350,400,600],[20,400,450,650],[25,500,550,750]];
  const body=rows.map(r=>`<tr><td class="num hl">${r[0]} mm</td><td class="num">${r[1]}</td><td class="num">${r[2]}</td><td class="num">${r[3]}</td></tr>`).join('');
  const table=`<table class="dt"><thead><tr><th>बोर्ड मोटाई</th><th class="num">Neo · 625+ kg/CBM</th><th class="num">Create · 725+ kg/CBM</th><th class="num">Build · 825+ kg/CBM</th></tr></thead><tbody>${body}</tbody></table>`;
  return tablePage(n,{eyebrow:'सहारा एवं सुझाव',title:'छोटे, सरल कदमों से दुनिया बदलना।',
    sub:'Indowud nfc बोर्ड संरचना में समरूप हैं। बड़े क्षेत्रों के लिए, नीचे दी गई अधिकतम सहारा दूरियों के अनुसार रचनात्मक सहारा / फ्रेमिंग आवश्यक है (सभी मान मिमी में)।',
    table,note:'सुझाई गई दूरियाँ अनुप्रयोग के अनुसार बढ़ या घट सकती हैं।'});
});

/* 28 — NOTES */
PAGES.push(n=>{
  const notes=[
    'सुझाई गई दूरियाँ अनुप्रयोग के अनुसार बदल सकती हैं।',
    'अलमारी/कैबिनेट शटर के ऊपर और नीचे चुंबकीय बॉल कैच लगाएँ। एक स्ट्रेटनर/स्टिफ़नर की अनुशंसा की जाती है।',
    'हर 300 मिमी पर बॉक्स-टाइप कब्ज़े का उपयोग करें।',
    'शटर तभी लगाएँ जब लैमिनेट, विनियर, एज-बैंड / लिपिंग चढ़ा दी जाए या चारों ओर एपॉक्सी/सॉल्वेंट पुट्टी / प्राइमर / सीलेंट लगाकर सूक्ष्म-छिद्र बंद कर दिए जाएँ, ताकि मुड़ाव न हो।',
    'स्लाइडिंग दरवाज़ों / शटर के लिए चारों ओर स्टिफ़नर के साथ फ्रेमिंग सुनिश्चित करें।',
    'सुझाया गया गोंद: NFC-GLU, PUR, HeatX, Wp1, Probond, Plastilok, Relam. सूखने का समय परिस्थितियों पर निर्भर करता है।',
    'छत के लिए, 12 मिमी+ बोर्ड का उपयोग 300 मिमी (Create/Build) या 200 मिमी (Neo) के ग्रिड सहारे के साथ करें।',
    'डेकिंग के लिए, 25 मिमी+ का उपयोग 300 मिमी सहारे के साथ करें; डेक पैनलों के बीच 4 मिमी अंतर छोड़ें।',
    'सतह और किनारे के सूक्ष्म-छिद्र बंद किए बिना कच्चे बोर्ड पर पानी न डालें। NC पुट्टी का उपयोग न करें।',
    'दीवार से 12 मिमी, छत/फर्श पर 5 मिमी, और बोर्ड/ट्रिम के बीच 3 मिमी अंतर छोड़ें ताकि साँस और विस्तार हो सके।',
  ];
  const list=notes.map((t,i)=>`<div style="display:flex;gap:12px;padding:9px 0;break-inside:avoid;"><span class="mono" style="font-size:11px;color:var(--leaf-600);flex:none;width:22px;">${String(i+1).padStart(2,'0')}</span><span class="body" style="font-size:13px;">${t}</span></div>`).join('');
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">इंस्टॉलेशन निर्देश</p>
    <h2 class="head" style="font-size:30px;margin-bottom:20px;">बारीकियों को सही रखें।</h2>
    <div style="column-count:2;column-gap:48px;">${list}</div>`);
});

/* 29 — THERMOFORMING */
PAGES.push(n=>{
  const rows=[['तापन तापमान','140 – 160 °C'],['तापन समय','1–2 min / mm of thickness (e.g. 18–36 min for 18 mm)'],['लॉकिंग समय','5–20 min, by thickness & conditions'],['शीतलन समय','1–2 min / mm of thickness']];
  const spec=rows.map(r=>`<div class="row"><span class="k">${r[0]}</span><span class="v" style="max-width:30ch;">${r[1]}</span></div>`).join('');
  return P(n,'cream',`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:50px;flex:1;align-items:center;">
      <div>
        <p class="eyebrow" style="margin-bottom:14px;">थर्मोफॉर्मing</p>
        <h2 class="head" style="font-size:32px;max-width:18ch;margin-bottom:16px;">बिना समझौते के आकार दें।</h2>
        <p class="body" style="max-width:46ch;">Indowud nfc को थर्मोफॉर्मिंग मशीन, हीट ओवन, हीट गन या इन्फ्रारेड हीटर से थर्मोफॉर्म करें। उच्च नैचुरल-फाइबर मात्रा आकार देने के बाद भी घनत्व और आयामी स्थिरता बनाए रखती है।</p>
        <p class="body" style="max-width:46ch;margin-top:14px;color:var(--sand-600);"><strong>Note:</strong> the panel may shrink when shaped — do any cutting or work after the board takes its final shape. Prepare a mould for even shaping.</p>
      </div>
      <div class="cell" style="padding:26px;"><div class="spec">${spec}</div></div>
    </div>`);
});

/* 30 — PRINTING + SCREWING */
PAGES.push(n=>P(n,'cream',`
  <p class="eyebrow" style="margin-top:6px;margin-bottom:10px;">फ़िनिशिंग</p>
  <h2 class="head" style="font-size:32px;max-width:28ch;margin-bottom:6px;">जैसे चाहें वैसी फ़िनिश दें।</h2>
  <p class="body lede" style="max-width:64ch;margin-bottom:24px;">Indowud nfc प्रिंट, पेंट, लैमिनेट, विनियर और फास्टनर को बढ़िया लकड़ी जितनी आसानी से स्वीकार करता है — ऐसी पकड़ के साथ जिसकी लकड़ी बराबरी नहीं कर सकती।</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;flex:1;align-items:stretch;">
    <div class="cell" style="padding:28px;display:flex;flex-direction:column;">
      <div class="icn">${ICON.print}</div>
      <h3 style="font-family:var(--fd);font-weight:700;font-size:22px;color:var(--ink-900);margin:0 0 12px;">प्रिंटिंग</h3>
      <p class="body">फ्लैटबेड डिजिटल प्रिंटर से Indowud nfc पर कोई भी पैटर्न या डिज़ाइन प्रिंट किया जा सकता है। प्रिंट से पहले बोर्ड को धूल-रहित रखें। प्रिंटेड क्षेत्र को घिसाव और धूल से बचाने हेतु पारदर्शी सीलेंट या वार्निश की अनुशंसा की जाती है।</p>
    </div>
    <div class="cell" style="padding:28px;display:flex;flex-direction:column;">
      <div class="icn">${ICON.cnc}</div>
      <h3 style="font-family:var(--fd);font-weight:700;font-size:22px;color:var(--ink-900);margin:0 0 12px;">स्क्रूइंग व नेलिंग</h3>
      <p class="body">उच्च नैचुरल-फाइबर मात्रा बेहतरीन स्क्रू/कील पकड़ देती है। काउंटरसंक, चौड़े-सिर, पूर्ण-थ्रेडेड फास्टनर चुनें। किनारे पर गोंद लगाने से जॉइनरी मज़बूत होती है। बाहरी अनुप्रयोगों के लिए स्टेनलेस-स्टील स्क्रू आदर्श हैं।</p>
    </div>
    <div class="cell" style="padding:28px;display:flex;flex-direction:column;">
      <div class="icn">${ICON.layers}</div>
      <h3 style="font-family:var(--fd);font-weight:700;font-size:22px;color:var(--ink-900);margin:0 0 12px;">लैमिनेट, विनियर व पेंट</h3>
      <p class="body">लैमिनेट या विनियर चढ़ाएँ, या सीधे पेंट, पॉलिश, स्टेन और वार्निश करें। सतह और किनारों को सील करने से सूक्ष्म-छिद्र बंद होते हैं, जिससे भीतर या बाहर एक निर्दोष, टिकाऊ फ़िनिश मिलती है।</p>
    </div>
  </div>`));

/* 31 — GREEN RATING */
PAGES.push(n=>{
  const rows=[['FSC प्रमाणन और/या शीघ्र नवीकरणीय लकड़ी-आधारित सामग्री','3 अंक'],['स्थानीय सामग्री','3 अंक'],['प्रमाणित ग्रीन बिल्डिंग सामग्री का उपयोग','3 अंक'],['यूरिया फॉर्मेल्डिहाइड रहित कम्पोज़िट वुड','1 अंक'],['पुनर्चक्रित सामग्री युक्त उत्पाद','1 अंक']];
  const body=rows.map(r=>`<tr><td>${r[0]}</td><td class="num hl">${r[1]}</td></tr>`).join('');
  const table=`<table class="dt"><thead><tr><th>Indowud के साथ अधिकतम अंक · मॉड्यूल अनुपालन</th><th class="num">क्रेडिट</th></tr></thead><tbody>${body}</tbody></table>`;
  return tablePage(n,{eyebrow:'ग्रीन रेटिंग',title:'ग्रीन रेटिंग वाली परियोजनाओं में योगदान देता है।',
    sub:'Indowud nfc एक GreenPro प्रमाणित उत्पाद (अक्टूबर 2021) है जो ग्रीन-बिल्डिंग प्रमाणन हेतु मान्यता-प्राप्त क्रेडिट में योगदान देता है।',
    table,note:'अधिक जानकारी हेतु संपर्क करें · indowud.com/sustainability-green-rating'});
});

/* 32 — COMPARATIVE STUDY */
PAGES.push(n=>{
  const props=[
    ['Density (kg/CBM)','650–800','400–600','650–750','600–700'],
    ['कच्चा माल','प्राकृतिक रेशे + थर्मोप्लास्टिक','PVC व फिलर','मध्यम/मुलायम लकड़ी, यूरिया, फॉर्मेल्डिहाइड','मध्यम/मुलायम लकड़ी, यूरिया/फिनॉल'],
    ['दीमक-रोधी','हाँ','हाँ','नहीं','नहीं'],
    ['जल-रोधी','हाँ','हाँ','नहीं','नहीं'],
    ['अग्नि-रोधी','Yes','हमेशा नहीं','No','No'],
    ['स्क्रू पकड़','औसत से बेहतर','औसत से बेहतर','औसत से कम','औसत से कम'],
    ['सामान्य औज़ार','Yes','Yes','Yes','Yes'],
    ['लैमिनेट/विनियर चढ़ाना','Yes','हमेशा नहीं','Yes','Yes'],
    ['भीतर व बाहर','दोनों','प्राथमिकता भीतर','केवल भीतर','भीतर'],
    ['मौसम व उम्र-रोधी','औसत से बेहतर','कुछ समय तक','No','No'],
    ['पर्यावरण-अनुकूल','Yes','हानिकारक','No','No'],
  ];
  const body=props.map(r=>`<tr><td>${r[0]}</td><td class="hl">${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join('');
  const table=`<table class="dt" style="font-size:11.5px;"><thead><tr><th>गुण</th><th>nfc</th><th>PVC / WPC foam</th><th>प्लाईवुड</th><th>MDF</th></tr></thead><tbody>${body}</tbody></table>`;
  return tablePage(n,{eyebrow:'अन्य के साथ nfc का तुलनात्मक अध्ययन',title:'गुणवत्ता जिसे दुनिया और समय परख सकें।',
    sub:'8\'×4\' में 6–25 मिमी और 7\'×3\' में 28/30 मिमी उपलब्ध; कस्टम आकार उपलब्ध। घनत्व 5% तक भिन्न हो सकता है।',
    table});
});

/* 33 — TEST RESULTS */
PAGES.push(n=>{
  const t=[
    ['Density','Kg/CBM','ASTM D792','800.349'],['Water absorption · 2 hrs','%','IS 2380','0.02'],['Water absorption · 24 hrs','%','IS 2380','0.12'],
    ['Thickness swelling · 2 hrs','%','IS 2380','0.06'],['Modulus of rupture · avg','N/mm²','IS 2380','14.5'],['Modulus of rupture · min','N/mm²','IS 2380','14.4'],
    ['Modulus of elasticity · avg','N/mm²','IS 2380','1327'],['Modulus of elasticity · min','N/mm²','IS 2380','1290'],['स्क्रू withdrawal · face','N','IS 2380','2252'],
    ['स्क्रू withdrawal · edge','N','IS 2380','1409'],['Tensile strength','MPa','ASTM D638','7.6'],['Compression strength','MPa','ASTM D695','40.2'],
    ['Elongation @ break','%','ASTM D638','2.0'],['Charpy impact strength','KJ/m²','ASTM D6110','6.25'],['Heat deflection @ 0.45 MPa','°C','ASTM D648','64.45'],
    ['Softening temp @ 1 kg','°C','ASTM D1525','72.5'],['VOC emissions','Mg/Kg','EPA 5035A','पता न लगने योग्य'],
    ['Termite resistance','—','IS 4833','कोई प्रभाव नहीं'],['Fungal resistance','—','IS 4873','कोई प्रभाव नहीं'],['Borer resistance','—','IS 4873','कोई प्रभाव नहीं'],
  ];
  const body=t.map(r=>`<tr><td>${r[0]}</td><td class="mono" style="font-size:10.5px;color:var(--sand-500);">${r[1]}</td><td class="mono" style="font-size:10.5px;color:var(--sand-500);">${r[2]}</td><td class="num hl">${r[3]}</td></tr>`).join('');
  const half=Math.ceil(t.length/2);
  const mk=(rows)=>`<table class="dt" style="font-size:11px;"><thead><tr><th>परीक्षण</th><th>इकाई</th><th>विधि</th><th class="num">परिणाम</th></tr></thead><tbody>${rows}</tbody></table>`;
  const rowsHtml=t.map(r=>`<tr><td>${r[0]}</td><td class="mono" style="font-size:10.5px;color:var(--sand-500);">${r[1]}</td><td class="mono" style="font-size:10.5px;color:var(--sand-500);">${r[2]}</td><td class="num hl">${r[3]}</td></tr>`);
  const table=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start;">${mk(rowsHtml.slice(0,half).join(''))}${mk(rowsHtml.slice(half).join(''))}</div>`;
  return tablePage(n,{eyebrow:'उच्च रेशा-मात्रा वाले nfc बोर्ड',title:'स्वतंत्र रूप से परीक्षित।',
    sub:'Indowud nfc नमूनों पर परीक्षण National परीक्षण House, CIPET, IPIRTI, Spectro Labs और SGS Labs द्वारा किए गए।',
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
  const table=`<table class="dt" style="font-size:11px;"><thead><tr><th>आवृत्ति (Hz)</th>${head}</tr></thead><tbody>
    <tr><td>ध्वनि अवशोषण गुणांक</td>${r1}</tr>
    <tr><td>संचरण-हानि (dB)</td>${r2}</tr></tbody></table>`;
  return P(n,'cream',`
    <p class="eyebrow" style="margin-top:6px;margin-bottom:12px;">ध्वनिकी</p>
    <h2 class="head" style="font-size:30px;max-width:30ch;margin-bottom:8px;">संरचना से ही शांत।</h2>
    <p class="body" style="max-width:74ch;margin-bottom:22px;">ध्वनि अवशोषण IS 10420:1982 के अनुसार और संचरण-हानि ISO 10534-2:1998 के अनुसार।</p>
    ${table}
    <div style="display:flex;gap:40px;margin-top:30px;align-items:center;">
      <div><div class="bignum" style="font-size:56px;">40.12</div><div class="mono" style="font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:var(--sand-500);margin-top:4px;">साउंड ट्रांसमिशन क्लास (औसत)</div></div>
      <hr style="width:1px;height:60px;background:var(--husk-300);border:0;">
      <div><div class="bignum" style="font-size:56px;"><span class="g">0.10</span></div><div class="mono" style="font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:var(--sand-500);margin-top:4px;">शिखर अवशोषण @ 4000 Hz</div></div>
    </div>`);
});

/* 35 — FIRE TEST */
PAGES.push(n=>{
  const rows=[
    ['अग्नि-प्रतिरोध','Appendix 11 of UIC 564.2','क्लास A','क्लास 1 या A'],
    ['ज्वलनशीलता','UL94','V0 रेटिंग','V0 रेटिंग'],
    ['फ्लेम-स्प्रेड सूचकांक','ASTM E84:2020','0 – 25','6'],
    ['स्मोक-डेवलप्ड सूचकांक','ASTM E84:2020','≤ 450','100'],
  ];
  const body=rows.map(r=>`<tr><td>${r[0]}</td><td class="mono" style="font-size:11px;color:var(--sand-500);">${r[1]}</td><td>${r[2]}</td><td class="num hl">${r[3]}</td></tr>`).join('');
  const table=`<table class="dt"><thead><tr><th>परीक्षण</th><th>विधि</th><th>सीमा</th><th class="num">परिणाम</th></tr></thead><tbody>${body}</tbody></table>`;
  return tablePage(n,{eyebrow:'अग्नि परीक्षण',title:'अग्नि-रोधी व धुआँ-रोधी।',
    sub:'UIC 564-2 (परिशिष्ट 11) रेलवे वाहनों में अग्नि-सुरक्षा को नियंत्रित करता है। UL94 V0 का अर्थ है जलना 10 सेकंड में रुक जाता है। ASTM E84 सतह-दहन का मूल्यांकन करता है — फ्लेम-स्प्रेड और स्मोक-डेवलप्ड सूचकांक।',
    table,note:'अंतरराष्ट्रीय मानकों पर परीक्षित · अधिक: indowud.com/Fire-test/'});
});

/* 36 — CONTACT / CLOSING */
PAGES.push(n=>`<section class="page dark" data-screen-label="37">
  <div class="deer" style="bottom:-40px;right:-30px;width:430px;height:360px;opacity:0.28;"></div>
  <div class="brandline"><div class="wm"><b style="font-size:18px;">INDOWUD</b><span class="n">NFC</span></div><span class="meta">नैचुरल फाइबर कम्पोज़िट</span></div>
  <div class="pad" style="justify-content:center;">
    <p class="eyebrow" style="margin-bottom:24px;">साथ मिलकर</p>
    <h1 class="disp" style="font-size:44px;max-width:24ch;">आइए एक ऐसी दुनिया बनाएँ जहाँ सौंदर्य और ज़िम्मेदारी साथ-साथ चलें।</h1>
    <div style="margin-top:46px;display:flex;gap:60px;flex-wrap:wrap;">
      <div>
        <div class="mono" style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:var(--leaf-300);margin-bottom:10px;">पंजीकृत कार्यालय</div>
        <p class="body" style="color:var(--husk-100);max-width:34ch;">Indowud nfc प्राइवेट लिमिटेड<br>प्रथम तल, नया नं. 30 (पुराना नं. 43), फर्स्ट मेन रोड, ईस्ट शेनॉय नगर, चेन्नई 600 030</p>
      </div>
      <div>
        <div class="mono" style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:var(--leaf-300);margin-bottom:10px;">संपर्क</div>
        <p class="body" style="color:var(--husk-100);">info@indowud.com<br>www.indowud.com</p>
        <div class="chips" style="margin-top:16px;">${chip('GreenPro','leaf','badge')}${chip('EPD सत्यापित','leaf','check')}</div>
      </div>
    </div>
  </div>
  ${run(n)}
</section>`);

window.PAGES = PAGES;
