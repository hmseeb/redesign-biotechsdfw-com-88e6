/* Page shell: head, top bar, header/nav, footer, reusable blocks. */
import { BIZ, LOGO_SRCSET, LOGO_ALT, BBB_ALT, icon, BIO_SERVICES, HOARD_SERVICES } from './parts.mjs';

const BIO_URL = '/biohazard-services/';
const HOARD_URL = '/hoarding-cleanup-services/';

/* ------------------------------------------------------------------ head */
function head(p) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${p.title}</title>
<meta name="description" content="${p.desc}">
<link rel="canonical" href="${p.url}">
<meta name="theme-color" content="#070d18">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${BIZ.name}">
<meta property="og:title" content="${p.title}">
<meta property="og:description" content="${p.desc}">
<meta property="og:url" content="${p.url}">
<meta property="og:image" content="/images/source/00-biotechs-logo-1024x225-png.webp">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${p.title}">
<meta name="twitter:description" content="${p.desc}">
<meta name="twitter:image" content="/images/source/00-biotechs-logo-1024x225-png.webp">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/favicon.svg">
<link rel="manifest" href="/site.webmanifest">
<link rel="stylesheet" href="/css/styles.css">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "BioTechs Online",
  "description": "Biohazard, crime scene, death and hoarding cleanup across the Dallas-Fort Worth metroplex. Available 24 hours a day, 7 days a week.",
  "email": "jesse@biotechsdfw.com",
  "telephone": "+14692402020",
  "image": "/images/source/00-biotechs-logo-1024x225-png.webp",
  "areaServed": "Dallas-Fort Worth Metroplex, Texas",
  "openingHours": "Mo-Su 00:00-23:59",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "13355 Noel Road, Suite 1100",
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "postalCode": "75240",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "9500 Ray White Road, Suite 200",
      "addressLocality": "Fort Worth",
      "addressRegion": "TX",
      "postalCode": "76244",
      "addressCountry": "US"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/biotechsdfw",
    "https://www.youtube.com/channel/UCbZPOLAiQCIJ4dVJfCCXYgQ",
    "https://www.linkedin.com/company/biotechsdfwcrime/",
    "https://www.tumblr.com/crime-scene-cleanup-dallas",
    "https://www.flickr.com/people/190534095@N06/"
  ]
}
</script>
</head>
<body>
<a class="skip-link" href="#content">Skip to content</a>`;
}

/* --------------------------------------------------------------- top bar */
function topbar() {
  return `
<div class="topbar">
  <div class="wrap">
    <ul>
      <li><a href="${BIZ.addrDallasMap}" target="_blank" rel="noopener">${icon('pin')}${BIZ.addrDallas}</a></li>
      <li><a href="${BIZ.addrFWMap}" target="_blank" rel="noopener">${icon('pin')}${BIZ.addrFW}</a></li>
      <li><a href="mailto:${BIZ.email}">${icon('mail')}${BIZ.email}</a></li>
      <li><a href="tel:${BIZ.phoneDallasRaw}">${icon('phone')}${BIZ.phoneDallas}</a></li>
      <li><a href="tel:${BIZ.phoneFWRaw}">${icon('phone')}${BIZ.phoneFW}</a></li>
    </ul>
    <span class="badge-247"><span class="pulse"></span>24/7 Support</span>
  </div>
</div>`;
}

/* ---------------------------------------------------------------- header */
function subLinks(list, base) {
  return list.map(s => `<li><a href="${base}#${s.slug}">${s.name}</a></li>`).join('\n          ');
}

function header(active) {
  const cur = k => (active === k ? ' aria-current="page"' : '');
  return `
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="/" aria-label="${BIZ.name} — home">
      <img src="/images/source/00-biotechs-logo-1024x225-png.webp"
           srcset="${LOGO_SRCSET}" sizes="196px" width="1024" height="225"
           alt="${LOGO_ALT}">
    </a>

    <nav class="nav" id="site-nav" aria-label="Primary">
      <ul>
        <li><a class="nav-link"${cur('home')} href="/">Home</a></li>
        <li class="has-sub">
          <button type="button" class="nav-link" aria-expanded="false">About ${icon('chev', 'chev')}</button>
          <ul class="sub">
            <li><a href="/about/">About Us</a></li>
            <li><a href="/about/who-we-serve/">Who We Serve</a></li>
            <li><a href="/careers/">Careers</a></li>
          </ul>
        </li>
        <li class="has-sub">
          <button type="button" class="nav-link" aria-expanded="false">Biohazard Services ${icon('chev', 'chev')}</button>
          <ul class="sub">
            <li class="sub-head">All biohazard services</li>
            <li><a href="${BIO_URL}">Biohazard Services Overview</a></li>
            ${subLinks(BIO_SERVICES, BIO_URL)}
          </ul>
        </li>
        <li class="has-sub">
          <button type="button" class="nav-link" aria-expanded="false">Hoarding &amp; Cleanup ${icon('chev', 'chev')}</button>
          <ul class="sub">
            <li class="sub-head">Hoarding &amp; cleanup services</li>
            <li><a href="${HOARD_URL}">Hoarding &amp; Cleanup Overview</a></li>
            ${subLinks(HOARD_SERVICES, HOARD_URL)}
          </ul>
        </li>
        <li><a class="nav-link"${cur('areas')} href="/areas-we-service/">Service Area</a></li>
        <li><a class="nav-link"${cur('contact')} href="/contact-us/">Contact Us</a></li>
      </ul>
      <div class="nav-mobile-cta">
        <a class="btn btn-alert btn-block" href="tel:${BIZ.phoneDallasRaw}">${icon('phone')}${BIZ.phoneDallas}</a>
        <a class="btn btn-ghost btn-block" href="tel:${BIZ.phoneFWRaw}">${icon('phone')}${BIZ.phoneFW}</a>
      </div>
    </nav>

    <div class="header-cta">
      <a class="btn btn-ghost btn-sm btn-head" href="/contact-us/">Get Help Now</a>
      <a class="btn btn-alert btn-sm" href="tel:${BIZ.phoneDallasRaw}">${icon('phone')}<span class="sr-only">Call BioTechs Dallas </span>${BIZ.phoneDallas}</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu"><span></span></button>
    </div>
  </div>
</header>
<div class="nav-scrim"></div>`;
}

/* ---------------------------------------------------------------- footer */
function social(name, label, path) {
  return `<li><a href="${BIZ.social[name]}" target="_blank" rel="noopener" aria-label="${label}">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">${path}</svg></a></li>`;
}

function footer() {
  const fb = '<path d="M14 9h3V5.5h-3c-2.5 0-4.3 1.8-4.3 4.3V12H7v3.5h2.7V22h3.6v-6.5H16l.6-3.5h-3.3v-2c0-.6.4-1 .7-1z"/>';
  const yt = '<path d="M21.6 7.6a2.6 2.6 0 0 0-1.8-1.8C18.2 5.3 12 5.3 12 5.3s-6.2 0-7.8.5A2.6 2.6 0 0 0 2.4 7.6C2 9.2 2 12 2 12s0 2.8.4 4.4a2.6 2.6 0 0 0 1.8 1.8c1.6.5 7.8.5 7.8.5s6.2 0 7.8-.5a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-4.4.4-4.4s0-2.8-.4-4.4zM10 15.2V8.8L15.5 12 10 15.2z"/>';
  const li = '<path d="M4.6 3.5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2zM2.8 9.2h3.6V21H2.8zM9.2 9.2h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3 0 4 1.9 4 4.9V21h-3.6v-6c0-1.5-.5-2.5-1.8-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V21H9.2z"/>';
  const tu = '<path d="M14.9 21c-3 0-5.2-1.5-5.2-5.1v-5H7.1V8c2.8-.7 4-3.1 4.2-5h2.6v4.6h3.1v3.3h-3.1v4.3c0 1.3.6 1.8 1.7 1.8h1.5V21z"/>';
  const fl = '<circle cx="7.3" cy="12" r="4.3"/><circle cx="16.7" cy="12" r="4.3"/>';

  const col = (title, items) =>
    `<div class="footer-col"><h4>${title}</h4><ul>${items.map(i => `<li><a href="${i[1]}">${i[0]}</a></li>`).join('')}</ul></div>`;

  return `
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">
        <img class="logo" src="/images/source/00-biotechs-logo-1024x225-png.webp"
             srcset="${LOGO_SRCSET}" sizes="200px" width="1024" height="225" alt="${LOGO_ALT}">
        <p>Biohazard, crime scene, death and hoarding remediation across the Dallas–Fort Worth metroplex — available 24 hours a day, 7 days a week, every day of the year.</p>
        <ul class="footer-contact">
          <li>${icon('pin')}<a href="${BIZ.addrDallasMap}" target="_blank" rel="noopener">${BIZ.addrDallas}</a></li>
          <li>${icon('pin')}<a href="${BIZ.addrFWMap}" target="_blank" rel="noopener">${BIZ.addrFW}</a></li>
          <li>${icon('mail')}<a href="mailto:${BIZ.email}">${BIZ.email}</a></li>
          <li>${icon('phone')}<a href="tel:${BIZ.phoneDallasRaw}">${BIZ.phoneDallas}</a> <span>(Dallas)</span></li>
          <li>${icon('phone')}<a href="tel:${BIZ.phoneFWRaw}">${BIZ.phoneFW}</a> <span>(Fort Worth)</span></li>
        </ul>
        <span class="footer-bbb"><img src="/images/source/05-bbb-accredit-business-badge.webp" width="104" height="39" alt="${BBB_ALT}"></span>
        <ul class="socials">
          ${social('facebook', 'BioTechs on Facebook', fb)}
          ${social('youtube', 'BioTechs on YouTube', yt)}
          ${social('linkedin', 'BioTechs on LinkedIn', li)}
          ${social('tumblr', 'BioTechs on Tumblr', tu)}
          ${social('flickr', 'BioTechs on Flickr', fl)}
        </ul>
      </div>

      ${col('Navigation', [
        ['Home', '/'],
        ['About', '/about/'],
        ['Who We Serve', '/about/who-we-serve/'],
        ['Biohazard Services', BIO_URL],
        ['Hoarding &amp; Cleanup Services', HOARD_URL],
        ['Areas We Service', '/areas-we-service/'],
        ['Careers', '/careers/'],
        ['Contact Us', '/contact-us/'],
        ['Leave us a review', '/review']
      ])}

      ${col('Biohazard Services', BIO_SERVICES.map(s => [s.name, BIO_URL + '#' + s.slug]))}

      ${col('Hoarding &amp; Cleanup', HOARD_SERVICES.map(s => [s.name, HOARD_URL + '#' + s.slug]))}
    </div>

    <div class="footer-review">
      <div>
        <strong>Were we there when you needed us?</strong>
        <span>Your feedback helps other DFW families and property managers find help fast.</span>
      </div>
      <a class="review-link" href="/review">${icon('star')}Leave us a review</a>
    </div>

    <div class="footer-bottom">
      <p>Copyright © <span data-year>2026</span> – ${BIZ.name} – All rights reserved</p>
      <ul>
        <li><a href="/terms-of-service/">Terms of Service</a></li>
        <li><a href="/privacy-policy/">Privacy Policy</a></li>
        <li><a href="/accessibility-statement/">Accessibility</a></li>
      </ul>
    </div>
  </div>
</footer>
<script src="/js/main.js" defer></script>
</body>
</html>`;
}

/* ------------------------------------------------------------- CTA band */
export function ctaBand(opts) {
  const o = opts || {};
  return `
<section class="cta-band">
  <div class="wrap cta-inner">
    <div class="reveal">
      <span class="eyebrow on-dark">Immediate Response</span>
      <h2>${o.heading || '24 Hours a Day,<br>7 Days a Week'}</h2>
      <p>${o.text || 'We are available around the clock, every day of the year, providing fast, professional response whenever you need support restoring your space.'}</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/contact-us/">Get Help Now ${icon('arrow')}</a>
        <a class="btn btn-ghost-light" href="/about/">Learn More</a>
      </div>
    </div>
    <div class="cta-phones reveal">
      <a href="tel:${BIZ.phoneDallasRaw}">${icon('phone')}<span><span class="k">Dallas</span><span class="v">${BIZ.phoneDallas}</span></span></a>
      <a href="tel:${BIZ.phoneFWRaw}">${icon('phone')}<span><span class="k">Fort Worth</span><span class="v">${BIZ.phoneFW}</span></span></a>
      <a href="mailto:${BIZ.email}">${icon('mail')}<span><span class="k">Email</span><span class="v">${BIZ.email}</span></span></a>
    </div>
  </div>
</section>`;
}

/* ----------------------------------------------------------------- forms */
const HIDDEN = name => `
      <input type="hidden" name="_form" value="${name}">
      <input type="hidden" name="_page" value="">
      <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" style="display:none" aria-hidden="true">`;

const SERVICE_OPTIONS = BIO_SERVICES.concat(HOARD_SERVICES)
  .map(s => `<option>${s.name}</option>`).join('\n            ');

/** Compact form used in the home-page hero card. */
export function quickForm() {
  return `
<form class="form" data-leadr method="POST" action="${BIZ.form}">
  ${HIDDEN('Urgent request')}
  <div class="form-status" role="status" aria-live="polite"></div>
  <div class="field">
    <label for="q-name">Your name <span class="req" aria-hidden="true">*</span></label>
    <input id="q-name" name="name" type="text" autocomplete="name" required>
  </div>
  <div class="form-row">
    <div class="field">
      <label for="q-phone">Phone <span class="req" aria-hidden="true">*</span></label>
      <input id="q-phone" name="phone" type="tel" autocomplete="tel" required>
    </div>
    <div class="field">
      <label for="q-email">Email</label>
      <input id="q-email" name="email" type="email" autocomplete="email">
    </div>
  </div>
  <div class="field">
    <label for="q-service">Service needed</label>
    <select id="q-service" name="Service needed">
      <option value="">I'm not sure — please advise</option>
      ${SERVICE_OPTIONS}
    </select>
  </div>
  <div class="field">
    <label for="q-details">Briefly, what has happened?</label>
    <textarea id="q-details" name="Situation details" rows="3" style="min-height:92px"></textarea>
  </div>
  <button class="btn btn-primary btn-block" type="submit">Request Help Now ${icon('arrow')}</button>
  <p class="form-note">Or call ${BIZ.phoneDallas} / ${BIZ.phoneFW} for an immediate response.</p>
</form>`;
}

/** Full contact form. */
export function contactForm() {
  return `
<form class="form" data-leadr method="POST" action="${BIZ.form}">
  ${HIDDEN('Contact')}
  <div class="form-status" role="status" aria-live="polite"></div>
  <div class="form-row">
    <div class="field">
      <label for="c-name">Full name <span class="req" aria-hidden="true">*</span></label>
      <input id="c-name" name="name" type="text" autocomplete="name" required>
    </div>
    <div class="field">
      <label for="c-phone">Phone number <span class="req" aria-hidden="true">*</span></label>
      <input id="c-phone" name="phone" type="tel" autocomplete="tel" required>
    </div>
  </div>
  <div class="form-row">
    <div class="field">
      <label for="c-email">Email address <span class="req" aria-hidden="true">*</span></label>
      <input id="c-email" name="email" type="email" autocomplete="email" required>
    </div>
    <div class="field">
      <label for="c-role">I am a…</label>
      <select id="c-role" name="Contact type">
        <option>Homeowner or family member</option>
        <option>Tenant</option>
        <option>Landlord or property manager</option>
        <option>Business or facility manager</option>
        <option>Law enforcement or first responder</option>
        <option>Municipality or agency</option>
        <option>Insurance or legal professional</option>
        <option>Other</option>
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="field">
      <label for="c-service">Service needed</label>
      <select id="c-service" name="Service needed">
        <option value="">I'm not sure — please advise</option>
        ${SERVICE_OPTIONS}
      </select>
    </div>
    <div class="field">
      <label for="c-urgency">How soon do you need us?</label>
      <select id="c-urgency" name="Urgency">
        <option>Emergency — right now</option>
        <option>Today</option>
        <option>Within 2–3 days</option>
        <option>This week</option>
        <option>Planning ahead / requesting a quote</option>
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="field">
      <label for="c-city">Property city</label>
      <input id="c-city" name="Property city" type="text" placeholder="Dallas, Fort Worth, Plano…">
    </div>
    <div class="field">
      <label for="c-date">Preferred date</label>
      <input id="c-date" name="Preferred date" type="date">
    </div>
  </div>
  <div class="field">
    <label for="c-message">How can we help? <span class="req" aria-hidden="true">*</span></label>
    <textarea id="c-message" name="Message" required placeholder="Tell us what happened, the type of property, and anything we should know before we arrive."></textarea>
    <span class="hint">If this is an active emergency, please call us instead — we answer 24/7.</span>
  </div>
  <label class="consent">
    <input type="checkbox" name="Consent to be contacted" value="Yes" required>
    <span>I agree that ${BIZ.name} may contact me by phone, text or email about my request.</span>
  </label>
  <button class="btn btn-primary" type="submit">Send My Request ${icon('arrow')}</button>
  <p class="form-note">We respond to every message. For an immediate response call
    <a href="tel:${BIZ.phoneDallasRaw}">${BIZ.phoneDallas}</a> or
    <a href="tel:${BIZ.phoneFWRaw}">${BIZ.phoneFW}</a>.</p>
</form>`;
}

/** Careers form. */
export function careersForm() {
  return `
<form class="form" data-leadr method="POST" action="${BIZ.form}">
  ${HIDDEN('Careers')}
  <div class="form-status" role="status" aria-live="polite"></div>
  <div class="form-row">
    <div class="field">
      <label for="j-name">Full name <span class="req" aria-hidden="true">*</span></label>
      <input id="j-name" name="name" type="text" autocomplete="name" required>
    </div>
    <div class="field">
      <label for="j-phone">Phone number <span class="req" aria-hidden="true">*</span></label>
      <input id="j-phone" name="phone" type="tel" autocomplete="tel" required>
    </div>
  </div>
  <div class="form-row">
    <div class="field">
      <label for="j-email">Email address <span class="req" aria-hidden="true">*</span></label>
      <input id="j-email" name="email" type="email" autocomplete="email" required>
    </div>
    <div class="field">
      <label for="j-location">Preferred location</label>
      <select id="j-location" name="Preferred location">
        <option>Dallas</option>
        <option>Fort Worth</option>
        <option>Either location</option>
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="field">
      <label for="j-avail">Availability</label>
      <select id="j-avail" name="Availability">
        <option>Full time</option>
        <option>Part time</option>
        <option>On-call / after hours</option>
      </select>
    </div>
    <div class="field">
      <label for="j-oncall">Able to work on-call nights &amp; weekends?</label>
      <select id="j-oncall" name="On-call availability">
        <option>Yes</option>
        <option>Sometimes</option>
        <option>No</option>
      </select>
    </div>
  </div>
  <div class="field">
    <label for="j-exp">Relevant experience <span class="req" aria-hidden="true">*</span></label>
    <textarea id="j-exp" name="Relevant experience" required placeholder="Tell us about any remediation, restoration, hazmat, healthcare, construction or trades experience — and why this work interests you."></textarea>
    <span class="hint">Please do not attach files here. If we would like to see a résumé we will ask for it by email.</span>
  </div>
  <button class="btn btn-primary" type="submit">Submit Application ${icon('arrow')}</button>
  <p class="form-note">Questions about openings? Email <a href="mailto:${BIZ.email}">${BIZ.email}</a>.</p>
</form>`;
}

/* ------------------------------------------------------- submitted banner */
export const submittedBanner =
  `<div class="alert-banner" data-submitted-banner role="status" aria-live="polite" style="display:none"></div>`;

/* ------------------------------------------------------------ page layout */
export function layout(p) {
  return head(p) + topbar() + header(p.active) +
    `\n<main id="content">\n${p.body}\n</main>\n` + footer();
}
