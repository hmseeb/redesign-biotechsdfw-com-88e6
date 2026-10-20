/* Biohazard services, Hoarding & cleanup services, Areas we service, Contact */
import { BIZ, icon, BIO_SERVICES, HOARD_SERVICES } from './parts.mjs';
import { ctaBand, contactForm, submittedBanner } from './chrome.mjs';

function svcBlocks(list, base) {
  return list.map(s => `
  <article class="svc-block reveal" id="${s.slug}">
    <div class="svc-top">
      <span class="ico">${icon(s.icon)}</span>
      <h3>${s.name}</h3>
    </div>
    <p>${s.blurb}</p>
    <p>${s.body}</p>
    <ul class="pill-list">${s.points.map(p => `<li>${p}</li>`).join('')}</ul>
    <div class="btn-row" style="margin-top:22px">
      <a class="btn btn-primary btn-sm" href="tel:${BIZ.phoneDallasRaw}">${icon('phone')}Call about ${s.name.toLowerCase()}</a>
      <a class="btn btn-ghost btn-sm" href="/contact-us/?service=${s.slug}">Request a quote</a>
    </div>
  </article>`).join('');
}

function jumpList(list, base) {
  return `<ul class="jump">${list.map(s => `<li><a href="#${s.slug}">${s.name}</a></li>`).join('')}</ul>`;
}

/* ------------------------------------------------- BIOHAZARD SERVICES */
export function biohazard() {
  const body = `
<section class="page-hero">
  <div class="wrap">
    <ul class="crumbs"><li><a href="/">Home</a></li><li>Biohazard Services</li></ul>
    <span class="eyebrow on-dark">Biohazard Services</span>
    <h1>Biohazard, trauma &amp; hazmat remediation across Dallas–Fort Worth</h1>
    <p>Ten specialist services covering blood, death, decomposition, chemical and drug contamination. Every job is performed under containment with professional-grade disinfection and regulated waste disposal — 24 hours a day, 7 days a week.</p>
    <div class="btn-row">
      <a class="btn btn-alert" href="tel:${BIZ.phoneDallasRaw}">${icon('phone')}Call Now · ${BIZ.phoneDallas}</a>
      <a class="btn btn-ghost-light" href="/contact-us/">Get a Quote ${icon('arrow')}</a>
    </div>
    ${jumpList(BIO_SERVICES)}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">What makes this different</span>
      <h2>Why biohazard work cannot be handled by a cleaning service</h2>
      <p>Blood-borne pathogens, decomposition fluids, chemical agents and accumulated waste all present exposure risk, and much of the contamination is invisible by the time anyone notices it. The work requires protective equipment, containment, the right products with the right dwell times, and a compliant disposal chain — not a mop and a bottle of bleach.</p>
    </div>
    ${svcBlocks(BIO_SERVICES)}
  </div>
</section>

${ctaBand({ heading: 'Not sure which service you need?', text: 'Call either office and describe the situation. We will tell you what the scope is likely to be, what it will involve, and how quickly we can be there.' })}`;

  return {
    file: 'services/biohazard/index.html',
    title: 'Biohazard Services | Blood, Crime Scene & Death Cleanup Dallas–Fort Worth',
    desc: 'Biohazard cleanup, blood cleanup, crime scene cleanup, death and suicide cleanup, decomposition, hazmat, bodily fluids, feces/urine and drug remediation across Dallas–Fort Worth. 24/7.',
    url: '/services/biohazard/',
    active: 'bio',
    body
  };
}

/* --------------------------------------------- HOARDING & CLEANUP */
export function hoarding() {
  const body = `
<section class="page-hero">
  <div class="wrap">
    <ul class="crumbs"><li><a href="/">Home</a></li><li>Hoarding &amp; Cleanup Services</li></ul>
    <span class="eyebrow on-dark">Hoarding &amp; Cleanup Services</span>
    <h1>Hoarding, clutter, encampment &amp; odor remediation</h1>
    <p>Seven services for spaces that have become unmanageable — handled patiently, discreetly and without judgement, including the biohazard conditions that are almost always underneath.</p>
    <div class="btn-row">
      <a class="btn btn-alert" href="tel:${BIZ.phoneFWRaw}">${icon('phone')}Call Now · ${BIZ.phoneFW}</a>
      <a class="btn btn-ghost-light" href="/contact-us/">Get a Quote ${icon('arrow')}</a>
    </div>
    ${jumpList(HOARD_SERVICES)}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Our approach</span>
      <h2>Sorting, not stripping</h2>
      <p>Hoarding and clutter cleanups go wrong when a crew arrives and starts throwing things in a skip. We work at a pace the client can tolerate, sort as we go, recover valuables, documents and keepsakes, and deal with the pest activity, waste and structural damage hidden beneath the volume. Where a property manager or agency is the client, we document each stage so there is a clear record of the work.</p>
    </div>
    ${svcBlocks(HOARD_SERVICES)}
  </div>
</section>

${ctaBand({ heading: 'Helping someone else make this call?', text: 'Many hoarding enquiries come from a family member, neighbour or case worker. Call us and we will talk through how to approach it without making things harder.' })}`;

  return {
    file: 'services/hoarding/index.html',
    title: 'Hoarding & Cleanup Services | Clutter, Encampment & Odor Removal DFW',
    desc: 'Hoarding cleanup, clutter cleanup, homeless encampment and camp cleanup, tear gas cleanup, odor treatment and disinfection services across Dallas–Fort Worth. Available 24/7.',
    url: '/services/hoarding/',
    active: 'hoard',
    body
  };
}

/* ---------------------------------------------------- AREAS WE SERVICE */
export function areas() {
  const offices = `
    <article class="card reveal">
      <span class="ico">${icon('pin')}</span>
      <h3>Dallas office</h3>
      <p><a href="${BIZ.addrDallasMap}" target="_blank" rel="noopener">${BIZ.addrDallas}</a></p>
      <p style="margin-top:10px"><a href="tel:${BIZ.phoneDallasRaw}"><strong>${BIZ.phoneDallas}</strong></a></p>
      <a class="card-link" href="${BIZ.addrDallasMap}" target="_blank" rel="noopener">Open in Google Maps ${icon('arrow')}</a>
    </article>
    <article class="card reveal">
      <span class="ico">${icon('pin')}</span>
      <h3>Fort Worth office</h3>
      <p><a href="${BIZ.addrFWMap}" target="_blank" rel="noopener">${BIZ.addrFW}</a></p>
      <p style="margin-top:10px"><a href="tel:${BIZ.phoneFWRaw}"><strong>${BIZ.phoneFW}</strong></a></p>
      <a class="card-link" href="${BIZ.addrFWMap}" target="_blank" rel="noopener">Open in Google Maps ${icon('arrow')}</a>
    </article>`;

  const body = `
<section class="page-hero">
  <div class="wrap">
    <ul class="crumbs"><li><a href="/">Home</a></li><li>Areas We Service</li></ul>
    <span class="eyebrow on-dark">Service Area</span>
    <h1>Serving the Dallas–Fort Worth metroplex, around the clock</h1>
    <p>We operate from two offices — one in North Dallas and one in North Fort Worth — so we can reach either side of the metroplex quickly. If you are not certain whether your property is within range, call us and ask; we will give you a straight answer.</p>
    <div class="btn-row">
      <a class="btn btn-alert" href="tel:${BIZ.phoneDallasRaw}">${icon('phone')}Dallas · ${BIZ.phoneDallas}</a>
      <a class="btn btn-ghost-light" href="tel:${BIZ.phoneFWRaw}">${icon('phone')}Fort Worth · ${BIZ.phoneFW}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Our locations</span>
      <h2>Two offices covering east and west DFW</h2>
      <p>Response time matters in biohazard work: the longer contamination sits, the further it travels and the more that has to be removed. Two bases shorten that window.</p>
    </div>
    <div class="grid g-2">${offices}</div>
  </div>
</section>

<section class="section alt">
  <div class="wrap split">
    <div class="reveal">
      <span class="eyebrow">Coverage</span>
      <h2>What we cover, and how to check</h2>
      <p>Our service area is the Dallas–Fort Worth metroplex and the communities immediately surrounding it, reached from our Dallas and Fort Worth offices. That includes residential property, commercial and industrial sites, vehicles, municipal land and public buildings.</p>
      <p>Rather than publish a list that might not match your address, we would rather you simply told us where the property is. Call either number or send the address through our contact form and we will confirm coverage and an arrival window.</p>
      <div class="btn-row" style="margin-top:26px">
        <a class="btn btn-primary" href="/contact-us/">Check my address ${icon('arrow')}</a>
      </div>
    </div>
    <div class="reveal">
      <div class="card-flat" style="margin-bottom:14px">
        <h4>${icon('clock')} Available 24/7/365</h4>
        <p>We are available around the clock, every day of the year, providing fast, professional response whenever you need support restoring your space.</p>
      </div>
      <div class="card-flat" style="margin-bottom:14px">
        <h4>${icon('truck')} Mobile across the metroplex</h4>
        <p>Our crews travel with the containment, protective and treatment equipment needed to begin work on arrival.</p>
      </div>
      <div class="card-flat">
        <h4>${icon('building')} Every property type</h4>
        <p>Homes, apartments, rentals, commercial buildings, industrial sites, vehicles, storage units, outdoor land and municipal property.</p>
      </div>
    </div>
  </div>
</section>

${ctaBand({ heading: 'Tell us where the property is', text: 'Call the office nearest you and we will confirm coverage and dispatch immediately.' })}`;

  return {
    file: 'service-area/index.html',
    title: 'Areas We Service | BioTechs Online Dallas–Fort Worth Metroplex',
    desc: 'BioTechs Online serves the Dallas–Fort Worth metroplex from offices at 13355 Noel Road, Dallas and 9500 Ray White Road, Fort Worth. Available 24 hours a day, 7 days a week.',
    url: '/service-area/',
    active: 'areas',
    body
  };
}

/* ------------------------------------------------------------ CONTACT */
export function contact() {
  const body = `
<section class="page-hero">
  <div class="wrap">
    <ul class="crumbs"><li><a href="/">Home</a></li><li>Contact Us</li></ul>
    <span class="eyebrow on-dark">Contact Us</span>
    <h1>Get help now — we answer 24 hours a day</h1>
    <p>Call either office for an immediate response, or send us the details below and we will call you straight back. Nothing you tell us goes any further than our team.</p>
    <div class="btn-row">
      <a class="btn btn-alert" href="tel:${BIZ.phoneDallasRaw}">${icon('phone')}Dallas · ${BIZ.phoneDallas}</a>
      <a class="btn btn-ghost-light" href="tel:${BIZ.phoneFWRaw}">${icon('phone')}Fort Worth · ${BIZ.phoneFW}</a>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    ${submittedBanner}
    <div class="contact-grid">
      <div class="reveal">
        <span class="eyebrow">Direct contact</span>
        <h2 style="margin-bottom:20px">Reach us immediately</h2>
        <ul class="contact-list">
          <li>
            <span class="ico">${icon('phone')}</span>
            <span><span class="k">Dallas — 24/7</span><a class="v" href="tel:${BIZ.phoneDallasRaw}">${BIZ.phoneDallas}</a></span>
          </li>
          <li>
            <span class="ico">${icon('phone')}</span>
            <span><span class="k">Fort Worth — 24/7</span><a class="v" href="tel:${BIZ.phoneFWRaw}">${BIZ.phoneFW}</a></span>
          </li>
          <li>
            <span class="ico">${icon('mail')}</span>
            <span><span class="k">Email</span><a class="v" href="mailto:${BIZ.email}">${BIZ.email}</a></span>
          </li>
          <li>
            <span class="ico">${icon('pin')}</span>
            <span><span class="k">Dallas office</span><a class="v" href="${BIZ.addrDallasMap}" target="_blank" rel="noopener">${BIZ.addrDallas}<small>Open in Google Maps</small></a></span>
          </li>
          <li>
            <span class="ico">${icon('pin')}</span>
            <span><span class="k">Fort Worth office</span><a class="v" href="${BIZ.addrFWMap}" target="_blank" rel="noopener">${BIZ.addrFW}<small>Open in Google Maps</small></a></span>
          </li>
          <li>
            <span class="ico">${icon('clock')}</span>
            <span><span class="k">Hours</span><span class="v">24 hours a day, 7 days a week<small>Every day of the year, including holidays.</small></span></span>
          </li>
        </ul>

        <div class="review-cta">
          <div>
            <span class="stars">${icon('star')}${icon('star')}${icon('star')}${icon('star')}${icon('star')}</span>
            <h3>Already worked with us?</h3>
            <p>Sharing your experience helps other DFW families and property managers find help quickly.</p>
          </div>
          <a class="btn btn-primary btn-sm" href="/review">${icon('star')}Leave us a review</a>
        </div>
      </div>

      <div class="form-panel reveal">
        <span class="eyebrow">Request a quote</span>
        <h2 style="margin-bottom:8px">Send us the details</h2>
        <p style="font-size:.95rem">The more you can tell us, the more accurately we can scope the job before we arrive. Fields marked * are required.</p>
        ${contactForm()}
      </div>
    </div>
  </div>
</section>

${ctaBand()}`;

  return {
    file: 'contact-us/index.html',
    title: 'Contact BioTechs Online | 24/7 Biohazard Cleanup Dallas–Fort Worth',
    desc: 'Contact BioTechs Online 24 hours a day for biohazard, crime scene and hoarding cleanup in Dallas–Fort Worth. Call (469) 240-2020, (817) 270-6363 or email jesse@biotechsdfw.com.',
    url: '/contact-us/',
    active: 'contact',
    body
  };
}
