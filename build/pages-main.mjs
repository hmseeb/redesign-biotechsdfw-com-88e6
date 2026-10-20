/* Home, About, Who We Serve, Careers */
import { BIZ, icon, BIO_SERVICES, HOARD_SERVICES } from './parts.mjs';
import { ctaBand, quickForm, careersForm, submittedBanner } from './chrome.mjs';

const BIO_URL = '/services/biohazard/';
const HOARD_URL = '/services/hoarding/';

const STEPS = [
  ['You call, we answer', 'A real member of our team takes your call at any hour. We gather the few details we need and dispatch — no call-centre queue, no waiting until morning.'],
  ['On-site assessment', 'Our technicians assess the full extent of the contamination, including what has spread beneath and behind the visible damage, then walk you through the scope and the plan.'],
  ['Containment & remediation', 'We isolate the affected area, remove unsalvageable material, and decontaminate every surface with professional-grade products and the correct dwell times.'],
  ['Odor, verification & handover', 'We treat residual odor at the source, verify the area, remove all regulated waste, and document the work so the property can be safely occupied again.']
];

const WHY = [
  ['clock', '24/7/365 response', 'We are available around the clock, every day of the year. Biohazard situations do not wait for business hours, and neither do we.'],
  ['pin', 'Two DFW offices', 'Offices in North Dallas and North Fort Worth mean shorter drive times to your property, wherever you are in the metroplex.'],
  ['award', 'BBB Accredited Business', 'We hold Better Business Bureau accreditation — a standard of conduct we are held to on every single job.'],
  ['heart', 'Compassionate & discreet', 'Many of our calls follow the worst day of someone\'s life. We work quietly, respectfully, and with care for the people involved.'],
  ['mask', 'Trained, protected technicians', 'Our crews work in proper personal protective equipment under established biohazard protocols — for your safety and theirs.'],
  ['file', 'Documented scope of work', 'You receive a clear record of what was remediated and how, which matters for landlords, insurers, estates and agencies.']
];

/* --------------------------------------------------------------- HOME */
export function home() {
  const bioCards = BIO_SERVICES.slice(0, 6).map(s => `
      <article class="card reveal">
        <span class="ico">${icon(s.icon)}</span>
        <h3>${s.name}</h3>
        <p>${s.blurb}</p>
        <a class="card-link" href="${BIO_URL}#${s.slug}">Service details ${icon('arrow')}</a>
      </article>`).join('');

  const hoardTiles = HOARD_SERVICES.map(s => `
      <a class="tile" href="${HOARD_URL}#${s.slug}"><span class="dot"></span><span><strong>${s.name}</strong><span>${s.blurb}</span></span></a>`).join('');

  const bioRest = BIO_SERVICES.slice(6).map(s => `
      <a class="tile" href="${BIO_URL}#${s.slug}"><span class="dot"></span><span><strong>${s.name}</strong><span>${s.blurb}</span></span></a>`).join('');

  const why = WHY.map(w => `
      <article class="card reveal">
        <span class="ico">${icon(w[0])}</span>
        <h3>${w[1]}</h3>
        <p>${w[2]}</p>
      </article>`).join('');

  const steps = STEPS.map(s => `
      <article class="step reveal"><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('');

  const body = `
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow on-dark">Immediate Response · Dallas–Fort Worth</span>
      <h1>Biohazard &amp; crime scene cleanup, <span class="accent">handled with care</span>.</h1>
      <p class="lead">${BIZ.name} is a Dallas–Fort Worth biohazard remediation team. We clean up after death, trauma, hazardous materials and severe hoarding — quickly, discreetly and thoroughly — so families, landlords and businesses never have to face it alone.</p>
      <div class="btn-row">
        <a class="btn btn-alert" href="tel:${BIZ.phoneDallasRaw}">${icon('phone')}Call Now · ${BIZ.phoneDallas}</a>
        <a class="btn btn-ghost-light" href="/contact-us/">Get a Quote ${icon('arrow')}</a>
      </div>
      <ul class="hero-badges">
        <li>${icon('check')}Available 24 hours a day</li>
        <li>${icon('check')}7 days a week, every day of the year</li>
        <li>${icon('check')}BBB Accredited Business</li>
        <li>${icon('check')}Dallas &amp; Fort Worth offices</li>
      </ul>
    </div>
    <div class="hero-card reveal">
      <h2>Request help now</h2>
      <p class="card-note">Tell us what has happened and we will call you straight back. For an active emergency, please call instead — we answer 24/7.</p>
      ${submittedBanner}
      ${quickForm()}
    </div>
  </div>
</section>

<div class="strip">
  <div class="wrap">
    <ul>
      <li><span class="ico">${icon('clock')}</span><span>24/7/365 emergency response</span></li>
      <li><span class="ico">${icon('pin')}</span><span>Offices in Dallas &amp; Fort Worth</span></li>
      <li><span class="ico">${icon('heart')}</span><span>Discreet &amp; respectful service</span></li>
      <li><span class="bbb"><img src="/images/source/05-bbb-accredit-business-badge.webp" width="86" height="32" alt="BBB Accredited Business badge with blue and white colors, symbolizing trust and credibility for businesses."></span></li>
    </ul>
  </div>
</div>

<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Biohazard Services</span>
      <h2>Specialist remediation for situations ordinary cleaners cannot take on</h2>
      <p>Biological and chemical contamination carries real health risk and real legal responsibility. Every service below is delivered under containment, with professional-grade disinfection and regulated waste disposal.</p>
    </div>
    <div class="grid g-3">${bioCards}</div>
    <div class="tiles reveal" style="margin-top:22px">${bioRest}</div>
    <div class="btn-row reveal" style="margin-top:30px">
      <a class="btn btn-dark" href="${BIO_URL}">All biohazard services ${icon('arrow')}</a>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Hoarding &amp; Cleanup Services</span>
      <h2>Restoring overwhelmed spaces, without judgement</h2>
      <p>Hoarding, clutter, encampment and odor work needs patience as much as equipment. We sort rather than simply discard, recover what matters to the client, and deal with the biohazard conditions underneath.</p>
    </div>
    <div class="tiles reveal">${hoardTiles}</div>
    <div class="btn-row reveal" style="margin-top:30px">
      <a class="btn btn-dark" href="${HOARD_URL}">All hoarding &amp; cleanup services ${icon('arrow')}</a>
    </div>
  </div>
</section>

<section class="section ink">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow on-dark">How It Works</span>
      <h2>From your first call to a space you can use again</h2>
      <p>A clear process, explained before we start, so you always know what is happening in your property.</p>
    </div>
    <div class="steps">${steps}</div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Why BioTechs</span>
      <h2>The reasons DFW families, landlords and agencies call us</h2>
    </div>
    <div class="grid g-3">${why}</div>
  </div>
</section>

<section class="section alt">
  <div class="wrap split">
    <div class="reveal">
      <span class="eyebrow">Service Area</span>
      <h2>Two offices covering the Dallas–Fort Worth metroplex</h2>
      <p>With locations in North Dallas and North Fort Worth, we are positioned on both sides of the metroplex — which means a faster arrival when time matters.</p>
      <ul class="checklist">
        <li>${icon('check')}<span><strong>Dallas office —</strong> ${BIZ.addrDallas}</span></li>
        <li>${icon('check')}<span><strong>Fort Worth office —</strong> ${BIZ.addrFW}</span></li>
        <li>${icon('check')}<span><strong>Residential, commercial, industrial and municipal</strong> property all within scope.</span></li>
      </ul>
      <div class="btn-row" style="margin-top:28px">
        <a class="btn btn-primary" href="/service-area/">Areas we service ${icon('arrow')}</a>
      </div>
    </div>
    <div class="stat-grid reveal">
      <div class="stat"><span class="n">24/7</span><span class="t">Always answering</span><span class="d">Every hour of every day, including holidays.</span></div>
      <div class="stat"><span class="n">2</span><span class="t">DFW offices</span><span class="d">Dallas and Fort Worth, for shorter response times.</span></div>
      <div class="stat"><span class="n">17</span><span class="t">Specialist services</span><span class="d">Biohazard, trauma, hazmat, hoarding and odor work.</span></div>
      <div class="stat"><span class="n">BBB</span><span class="t">Accredited Business</span><span class="d">Held to Better Business Bureau standards.</span></div>
    </div>
  </div>
</section>

${ctaBand()}`;

  return {
    file: 'index.html',
    title: 'BioTechs Online | Biohazard, Crime Scene & Hoarding Cleanup in Dallas–Fort Worth',
    desc: 'BioTechs Online provides 24/7 biohazard, crime scene, death, trauma and hoarding cleanup across the Dallas–Fort Worth metroplex. Call (469) 240-2020 or (817) 270-6363.',
    url: '/',
    active: 'home',
    body
  };
}

/* -------------------------------------------------------------- ABOUT */
export function about() {
  const values = [
    ['heart', 'Compassion first', 'Most people who call us are having one of the hardest days of their lives. How we treat them matters as much as how we clean.'],
    ['eye', 'Discretion', 'We keep a low profile on site. Your neighbours, tenants, customers and staff do not need to know why we are there.'],
    ['shield', 'Safety without shortcuts', 'Proper protective equipment, proper containment, proper disinfectants and proper disposal — on every job, regardless of size.'],
    ['scale', 'Straight answers', 'We tell you what the real scope is, including the parts you cannot see, before any work starts.'],
    ['bolt', 'Speed that is useful', 'Fast response is not a slogan. It limits how far contamination spreads and how much has to be removed.'],
    ['file', 'Accountable work', 'Documented scope and completion, so owners, estates, insurers and agencies have a record they can rely on.']
  ].map(v => `
      <article class="card reveal">
        <span class="ico">${icon(v[0])}</span><h3>${v[1]}</h3><p>${v[2]}</p>
      </article>`).join('');

  const body = `
<section class="page-hero">
  <div class="wrap">
    <ul class="crumbs"><li><a href="/">Home</a></li><li>About</li></ul>
    <span class="eyebrow on-dark">About Us</span>
    <h1>A DFW biohazard team built around the people who have to call one.</h1>
    <p>${BIZ.name} is a biohazard and hoarding remediation company serving the Dallas–Fort Worth metroplex from offices in North Dallas and North Fort Worth. We take the calls nobody plans to make, and we are available 24 hours a day, 7 days a week, every day of the year.</p>
    <div class="btn-row">
      <a class="btn btn-alert" href="tel:${BIZ.phoneDallasRaw}">${icon('phone')}Call Now · ${BIZ.phoneDallas}</a>
      <a class="btn btn-ghost-light" href="/contact-us/">Get a Quote ${icon('arrow')}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="reveal">
      <span class="eyebrow">What we do</span>
      <h2>Remediation, not cleaning</h2>
      <p>There is a meaningful difference between cleaning a room and remediating it. Cleaning addresses what you can see. Remediation addresses what has soaked into the subfloor, travelled through the ventilation, settled into soft furnishings or built up behind a wall cavity — and then proves the space is safe again.</p>
      <p>That is the work we do. After a death, a violent incident, an accident, a hazardous material release or years of accumulated waste, we isolate the affected area, remove what cannot be salvaged, decontaminate what can, eliminate odor at its source, and dispose of regulated waste through the proper channels.</p>
      <p>We work for homeowners and families, landlords and property managers, businesses and facilities, law enforcement and first responders, agencies and municipalities — anyone who needs a contaminated space made usable again.</p>
      <div class="btn-row" style="margin-top:26px">
        <a class="btn btn-primary" href="${BIO_URL}">Biohazard services ${icon('arrow')}</a>
        <a class="btn btn-ghost" href="${HOARD_URL}">Hoarding &amp; cleanup</a>
      </div>
    </div>
    <div class="reveal">
      <div class="card-flat" style="margin-bottom:14px">
        <h4>Available around the clock</h4>
        <p>We are available 24 hours a day, 7 days a week, every day of the year, providing fast, professional response whenever you need support restoring your space.</p>
      </div>
      <div class="card-flat" style="margin-bottom:14px">
        <h4>Two offices, one metroplex</h4>
        <p><a href="${BIZ.addrDallasMap}" target="_blank" rel="noopener">${BIZ.addrDallas}</a><br>
           <a href="${BIZ.addrFWMap}" target="_blank" rel="noopener">${BIZ.addrFW}</a></p>
      </div>
      <div class="card-flat">
        <h4>Talk to us directly</h4>
        <p><a href="tel:${BIZ.phoneDallasRaw}">${BIZ.phoneDallas}</a> (Dallas)<br>
           <a href="tel:${BIZ.phoneFWRaw}">${BIZ.phoneFW}</a> (Fort Worth)<br>
           <a href="mailto:${BIZ.email}">${BIZ.email}</a></p>
      </div>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">How we work</span>
      <h2>Six commitments we hold to on every job</h2>
    </div>
    <div class="grid g-3">${values}</div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head center reveal">
      <span class="eyebrow">Our process</span>
      <h2>Clear steps, explained before we begin</h2>
      <p>You will never be guessing what is happening inside your property.</p>
    </div>
    <div class="acc reveal">
      ${STEPS.map((s, i) => `<details${i === 0 ? ' open' : ''}>
        <summary>${String(i + 1).padStart(2, '0')} · ${s[0]}</summary>
        <div class="acc-body">${s[1]}</div>
      </details>`).join('\n      ')}
    </div>
  </div>
</section>

${ctaBand({ heading: 'Need us on site today?', text: 'We are available around the clock, every day of the year, providing fast, professional response whenever you need support restoring your space.' })}`;

  return {
    file: 'about/index.html',
    title: 'About BioTechs Online | Dallas–Fort Worth Biohazard Remediation',
    desc: 'Learn about BioTechs Online, a BBB Accredited biohazard, trauma and hoarding remediation company serving Dallas–Fort Worth 24 hours a day, 7 days a week.',
    url: '/about/',
    active: 'about',
    body
  };
}

/* ------------------------------------------------------- WHO WE SERVE */
export function whoWeServe() {
  const groups = [
    ['users', 'Homeowners &amp; families', 'After a death, suicide, accident or illness at home, families should not be handling the aftermath. We take that work on, explain it plainly, and protect belongings wherever we can.'],
    ['building', 'Landlords &amp; property managers', 'Vacancies after an unattended death, severe hoarding, drug activity or tenant abandonment need documented remediation before re-letting. We provide both the work and the record of it.'],
    ['brief', 'Businesses &amp; facilities', 'Offices, retail, restaurants, warehouses, hotels, gyms and transport operators who need a contaminated area remediated quickly and quietly, with minimal disruption to trade.'],
    ['shield', 'Law enforcement &amp; first responders', 'Once a scene is released, the cleanup is no longer an investigative task. We take over at that point, including tear gas and chemical residue remediation.'],
    ['pin', 'Municipalities &amp; agencies', 'Encampment and camp cleanup, public-property biohazard removal and recurring site maintenance, with documented visits for accountability.'],
    ['heart', 'Healthcare, senior living &amp; care homes', 'Facilities that need rapid, compliant decontamination of rooms and shared spaces, performed around resident needs and staff schedules.'],
    ['truck', 'Vehicle &amp; fleet owners', 'Cars, trucks, buses and work vehicles affected by blood, bodily fluids, waste or chemical contamination.'],
    ['file', 'Estates, executors &amp; legal professionals', 'Clear-outs and remediation for estates in probate, with recovery and documentation of valuables, documents and keepsakes found on site.']
  ].map(g => `
      <article class="card reveal">
        <span class="ico">${icon(g[0])}</span><h3>${g[1]}</h3><p>${g[2]}</p>
      </article>`).join('');

  const props = ['Single-family homes', 'Apartments &amp; condos', 'Rental &amp; vacant property', 'Commercial buildings', 'Industrial sites', 'Hotels &amp; short-term rentals', 'Healthcare &amp; care facilities', 'Schools &amp; public buildings', 'Vehicles &amp; fleet', 'Storage units &amp; garages', 'Outdoor &amp; undeveloped land', 'Municipal property']
    .map(t => `<li>${t}</li>`).join('');

  const body = `
<section class="page-hero">
  <div class="wrap">
    <ul class="crumbs"><li><a href="/">Home</a></li><li><a href="/about/">About</a></li><li>Who We Serve</li></ul>
    <span class="eyebrow on-dark">Who We Serve</span>
    <h1>Whoever is responsible for the property, we can work with you.</h1>
    <p>Biohazard situations arrive in every kind of building and land in every kind of lap — a grieving family, a property manager with a vacancy, a city with a site to clear. ${BIZ.name} works with all of them across the Dallas–Fort Worth metroplex.</p>
    <div class="btn-row">
      <a class="btn btn-alert" href="tel:${BIZ.phoneFWRaw}">${icon('phone')}Call Now · ${BIZ.phoneFW}</a>
      <a class="btn btn-ghost-light" href="/contact-us/">Get a Quote ${icon('arrow')}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Our clients</span>
      <h2>Eight groups who call us most</h2>
      <p>Each one needs something slightly different from us — pace, discretion, documentation, speed. We adjust to the situation rather than the other way around.</p>
    </div>
    <div class="grid g-3">${groups}</div>
  </div>
</section>

<section class="section alt">
  <div class="wrap split">
    <div class="reveal">
      <span class="eyebrow">Property types</span>
      <h2>Residential, commercial, industrial and municipal</h2>
      <p>If a space can be contaminated, it can be remediated. We scope each property on its own terms — construction, ventilation, occupancy and how far the contamination has travelled all change the plan.</p>
      <p>Not sure whether your situation is something we handle? Call us and describe it. If it is outside our scope we will tell you that, and point you toward who can help.</p>
      <div class="btn-row" style="margin-top:26px">
        <a class="btn btn-primary" href="/contact-us/">Ask about your situation ${icon('arrow')}</a>
      </div>
    </div>
    <div class="reveal">
      <ul class="pill-list" style="margin-top:0">${props}</ul>
    </div>
  </div>
</section>

${ctaBand({ heading: 'Tell us what you are dealing with', text: 'We are available around the clock, every day of the year, providing fast, professional response whenever you need support restoring your space.' })}`;

  return {
    file: 'who-we-help/index.html',
    title: 'Who We Serve | BioTechs Online Dallas–Fort Worth',
    desc: 'BioTechs Online serves homeowners, landlords, businesses, law enforcement, municipalities, care facilities and estates across Dallas–Fort Worth with 24/7 biohazard remediation.',
    url: '/who-we-help/',
    active: 'about',
    body
  };
}

/* ------------------------------------------------------------ CAREERS */
export function careers() {
  const looking = [
    ['A strong stomach and a steady temperament', 'This work is confronting. The people who do it well are calm, unflappable and able to leave the day behind.'],
    ['Genuine respect for people in crisis', 'You will be in homes on the worst day a family has had. How you speak and behave matters enormously.'],
    ['Reliability, especially after hours', 'We answer 24/7, which only works if people turn up when they say they will — nights, weekends and holidays included.'],
    ['Attention to the parts nobody sees', 'The job is finished when the contamination is gone, not when the room looks clean.'],
    ['Physical capability', 'Expect protective equipment, heat, heavy lifting, long days and tight spaces.'],
    ['Absolute discretion', 'What you see on a job stays on the job. Confidentiality is non-negotiable.']
  ].map(l => `<li>${icon('check')}<span><strong>${l[0]}.</strong> ${l[1]}</span></li>`).join('');

  const body = `
<section class="page-hero">
  <div class="wrap">
    <ul class="crumbs"><li><a href="/">Home</a></li><li><a href="/about/">About</a></li><li>Careers</li></ul>
    <span class="eyebrow on-dark">Careers</span>
    <h1>Work that is difficult, and genuinely matters.</h1>
    <p>Biohazard remediation is not for everyone. For the right person it is steady, skilled work with a clear purpose: taking something unbearable off someone else's shoulders. If that appeals to you, we would like to hear from you.</p>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="reveal">
      <span class="eyebrow">What the role involves</span>
      <h2>Remediation technician work, based in Dallas or Fort Worth</h2>
      <p>Technicians travel to residential, commercial and municipal properties across the Dallas–Fort Worth metroplex to contain, decontaminate and restore affected areas. The day involves protective equipment, containment setup, material removal, disinfection, odor treatment, regulated waste handling and clear communication with whoever is on site.</p>
      <p>Previous remediation, restoration, hazmat, healthcare, construction or trades experience is useful, but attitude and reliability matter more. Training is provided for the protocols and equipment we use.</p>
      <p>We are a small team covering a large metroplex from two offices, which means on-call rotation and a genuine willingness to respond when a call comes in at an inconvenient hour.</p>
      <h3 style="margin-top:30px">What we look for</h3>
      <ul class="checklist">${looking}</ul>
    </div>
    <div class="reveal">
      <div class="form-panel">
        <h2 style="font-size:1.5rem">Apply to join us</h2>
        <p class="card-note" style="margin:8px 0 0;font-size:.92rem">Tell us a little about yourself and we will be in touch about current openings.</p>
        ${submittedBanner}
        ${careersForm()}
      </div>
    </div>
  </div>
</section>

${ctaBand({ heading: 'Questions before you apply?', text: 'Call either office or send us an email and we will tell you honestly what the work is like day to day.' })}`;

  return {
    file: 'join-our-team/index.html',
    title: 'Careers | BioTechs Online Dallas–Fort Worth',
    desc: 'Join the BioTechs Online remediation team in Dallas or Fort Worth. Apply online for biohazard remediation technician work across the DFW metroplex.',
    url: '/join-our-team/',
    active: 'about',
    body
  };
}
