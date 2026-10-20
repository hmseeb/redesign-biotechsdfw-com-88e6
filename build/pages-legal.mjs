/* Terms of Service, Privacy Policy, Accessibility Statement, 404 */
import { BIZ, icon } from './parts.mjs';
import { ctaBand } from './chrome.mjs';

function legalHero(crumb, eyebrow, h1, intro) {
  return `
<section class="page-hero">
  <div class="wrap wrap-narrow">
    <ul class="crumbs"><li><a href="/">Home</a></li><li>${crumb}</li></ul>
    <span class="eyebrow on-dark">${eyebrow}</span>
    <h1>${h1}</h1>
    <p>${intro}</p>
  </div>
</section>`;
}

const CONTACT_BLOCK = `
<h2>How to contact us</h2>
<p>If you have a question about this page, contact ${BIZ.name}:</p>
<ul>
  <li>Email: <a href="mailto:${BIZ.email}">${BIZ.email}</a></li>
  <li>Dallas: <a href="tel:${BIZ.phoneDallasRaw}">${BIZ.phoneDallas}</a> — ${BIZ.addrDallas}</li>
  <li>Fort Worth: <a href="tel:${BIZ.phoneFWRaw}">${BIZ.phoneFW}</a> — ${BIZ.addrFW}</li>
</ul>`;

/* ----------------------------------------------------------- TERMS */
export function terms() {
  const body = legalHero('Terms of Service', 'Legal', 'Terms of Service',
    'These terms explain how this website may be used and the basis on which information here is provided.') + `
<section class="section">
  <div class="wrap wrap-narrow prose">
    <span class="updated">Last updated: January 2026</span>

    <h2>1. About these terms</h2>
    <p>This website is operated by ${BIZ.name}. By accessing or using the site you agree to these Terms of Service. If you do not agree with them, please do not use the site.</p>

    <h2>2. Information on this site</h2>
    <p>The content on this website describes the biohazard, trauma and hoarding remediation services we offer across the Dallas–Fort Worth metroplex. It is provided for general information only. It is not health, safety, legal, insurance or engineering advice, and it should not be relied on as a substitute for an on-site assessment by a qualified technician.</p>
    <p>Because every property and every incident is different, the scope, duration and cost of any work can only be confirmed after we have assessed the site. Descriptions of our services on this website are not an offer, a quotation or a guarantee of a particular outcome.</p>

    <h2>3. Emergencies</h2>
    <p>This website is not a monitored emergency channel. If there is a threat to life, an active crime in progress, a fire, or a hazardous material release that is still spreading, call 911 first. For our own services, call <a href="tel:${BIZ.phoneDallasRaw}">${BIZ.phoneDallas}</a> or <a href="tel:${BIZ.phoneFWRaw}">${BIZ.phoneFW}</a> — we answer 24 hours a day — rather than relying on a web form.</p>

    <h2>4. Requests and enquiries you send us</h2>
    <p>When you submit a form on this website you confirm that the information you provide is accurate to the best of your knowledge and that you are authorised to request service for the property concerned, or are acting with the permission of the person who is. Submitting a form does not create a contract between us; work begins only once scope and terms have been agreed directly.</p>
    <p>Please do not send sensitive personal, medical or law-enforcement material through our web forms. If information of that kind is relevant, tell us and we will arrange an appropriate way to discuss it.</p>

    <h2>5. Acceptable use</h2>
    <p>You agree not to use this website to:</p>
    <ul>
      <li>submit false, misleading, abusive or unlawful content, or requests for service you have no intention of proceeding with;</li>
      <li>attempt to gain unauthorised access to the site, its hosting infrastructure or any connected system;</li>
      <li>interfere with the operation or availability of the site, including through automated scraping that places an unreasonable load on it;</li>
      <li>copy, republish or commercially reuse substantial parts of the site's content without our written permission.</li>
    </ul>

    <h2>6. Intellectual property</h2>
    <p>The ${BIZ.short} name, logo, site design, text and graphics are owned by ${BIZ.name} or used under licence, and are protected by applicable intellectual property law. You may view, download and print pages from this site for your own non-commercial use in evaluating or arranging our services.</p>

    <h2>7. External links</h2>
    <p>This site links to third-party destinations such as mapping, review and social media platforms. We do not control those sites and are not responsible for their content, availability or privacy practices. Following an external link is at your own discretion.</p>

    <h2>8. Limitation of liability</h2>
    <p>This website is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, ${BIZ.name} is not liable for any indirect, incidental or consequential loss arising from your use of, or inability to use, this website, or from reliance on information published here without an on-site assessment. Nothing in these terms excludes any liability that cannot lawfully be excluded.</p>
    <p>Our obligations in relation to remediation work we actually perform are governed by the separate service agreement for that work, not by these website terms.</p>

    <h2>9. Changes to these terms</h2>
    <p>We may update these terms from time to time. The version published on this page is the version that applies, and the date above shows when it was last revised.</p>

    <h2>10. Governing law</h2>
    <p>These terms are governed by the laws of the State of Texas, and any dispute relating to this website will be subject to the exclusive jurisdiction of the courts of the State of Texas.</p>

    ${CONTACT_BLOCK}
  </div>
</section>` + ctaBand({ heading: 'Need help right now?', text: 'We are available around the clock, every day of the year, providing fast, professional response whenever you need support restoring your space.' });

  return {
    file: 'terms-of-service/index.html',
    title: 'Terms of Service | BioTechs Online',
    desc: 'Terms of Service for the BioTechs Online website, covering acceptable use, information accuracy, enquiries, intellectual property and limitation of liability.',
    url: '/terms-of-service/',
    active: '',
    body
  };
}

/* --------------------------------------------------------- PRIVACY */
export function privacy() {
  const body = legalHero('Privacy Policy', 'Legal', 'Privacy Policy',
    'What we collect when you contact us, why we collect it, and what we do and do not do with it.') + `
<section class="section">
  <div class="wrap wrap-narrow prose">
    <span class="updated">Last updated: January 2026</span>

    <h2>Our position in one paragraph</h2>
    <p>Many of our clients contact us at the worst moment of their lives. We treat everything they tell us as confidential. We collect only what we need in order to respond and perform the work, we do not sell personal information, and we do not share details of a job beyond the people who need them to deliver it.</p>

    <h2>Information we collect</h2>
    <p>When you submit a form on this website or contact us by phone or email, we collect the information you choose to give us. That typically includes:</p>
    <ul>
      <li>your name, phone number and email address;</li>
      <li>the city or address of the property concerned;</li>
      <li>the service you are asking about, your urgency and any preferred date;</li>
      <li>the description of the situation you provide so we can scope the work;</li>
      <li>the page of this site you submitted the form from, so we can respond in context.</li>
    </ul>
    <p>Our web forms are processed by our forms provider on our behalf and the submission is delivered to ${BIZ.name}. Each form also includes a hidden anti-spam field that automated submitters tend to complete and people never do; submissions that complete it may be discarded.</p>
    <p>We do not operate file upload fields on this website, and we ask that you do not send photographs, medical records or law-enforcement material through a web form.</p>

    <h2>Information collected automatically</h2>
    <p>Our hosting infrastructure records standard technical information such as IP address, browser type, requested page and timestamp in server logs. This is used for security, troubleshooting and basic traffic measurement. This website does not set advertising or cross-site tracking cookies of its own.</p>
    <p>Where a page embeds or links to a third-party service — mapping, video, review or social platforms — that provider may collect information under its own privacy policy once you interact with it.</p>

    <h2>Why we use your information</h2>
    <ul>
      <li>to respond to your enquiry and arrange an assessment or quotation;</li>
      <li>to dispatch technicians and perform the remediation work you request;</li>
      <li>to keep a record of work performed, which may be needed by owners, estates, insurers or agencies;</li>
      <li>to follow up after a job, and to answer any later question about it;</li>
      <li>to meet legal, health-and-safety and regulated-waste record-keeping obligations;</li>
      <li>to protect the security and integrity of this website.</li>
    </ul>

    <h2>What we do not do</h2>
    <ul>
      <li>We do not sell or rent your personal information.</li>
      <li>We do not share the details of a job for marketing purposes.</li>
      <li>We do not publish client names, addresses or photographs identifying a property or incident without explicit permission.</li>
      <li>We do not send marketing messages to people who contacted us about an emergency unless they ask us to.</li>
    </ul>

    <h2>When we share information</h2>
    <p>We share personal information only where it is necessary: with our own technicians and staff working on your job; with service providers who operate our website, forms and communications systems on our behalf; with regulated waste carriers and disposal facilities to the limited extent required; with your insurer, landlord, property manager, executor or agency where you have asked us to or authorised it; and where disclosure is required by law, court order or a lawful request from a public authority.</p>

    <h2>How long we keep it</h2>
    <p>Enquiries that do not become jobs are kept only as long as needed to answer them and to maintain a short record of contact. Records relating to work we performed are kept for as long as required for business, insurance, warranty and legal record-keeping purposes, and then deleted or anonymised.</p>

    <h2>Security</h2>
    <p>Our website is served over an encrypted connection, form submissions are transmitted securely, and access to enquiry and job records is limited to the people who need it. No system is perfectly secure, so please contact us by phone if a matter is exceptionally sensitive.</p>

    <h2>Your choices</h2>
    <p>You can ask us to confirm what personal information we hold about you, to correct it if it is wrong, or to delete it where we are not required to keep it. You can ask us to stop contacting you at any time. Contact us using the details below and we will respond. We will not discriminate against anyone for exercising these choices.</p>

    <h2>Children</h2>
    <p>This website is intended for adults arranging remediation services and is not directed at children. We do not knowingly collect personal information from children. If you believe a child has sent us information, contact us and we will delete it.</p>

    <h2>Changes to this policy</h2>
    <p>If we change this policy we will update the page and the date shown above. Material changes will be reflected here rather than communicated individually.</p>

    ${CONTACT_BLOCK}
  </div>
</section>` + ctaBand({ heading: 'Prefer to talk instead?', text: 'Call either office directly and speak to a member of our team. We answer 24 hours a day, 7 days a week.' });

  return {
    file: 'privacy-policy/index.html',
    title: 'Privacy Policy | BioTechs Online',
    desc: 'How BioTechs Online collects, uses, shares and protects the personal information you provide when you contact us about biohazard or hoarding remediation.',
    url: '/privacy-policy/',
    active: '',
    body
  };
}

/* --------------------------------------------------- ACCESSIBILITY */
export function accessibility() {
  const body = legalHero('Accessibility', 'Legal', 'Accessibility Statement',
    'People often reach this website under enormous stress. It needs to work for everybody, on any device, with any assistive technology.') + `
<section class="section">
  <div class="wrap wrap-narrow prose">
    <span class="updated">Last updated: January 2026</span>

    <h2>Our commitment</h2>
    <p>${BIZ.name} is committed to making this website usable by as many people as possible, including those who use screen readers, keyboard-only navigation, screen magnification, speech input or reduced-motion settings. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA as our working standard.</p>

    <h2>What we have done</h2>
    <ul>
      <li><strong>Semantic structure.</strong> Pages use landmark regions, a single main heading and a logical heading order so assistive technology can navigate them.</li>
      <li><strong>Keyboard access.</strong> All navigation, menus, accordions and forms can be operated with a keyboard, and a visible focus indicator shows where you are. A "Skip to content" link is the first item on every page.</li>
      <li><strong>Colour and contrast.</strong> Text and interface colours were chosen to maintain readable contrast against their backgrounds, and colour alone is never the only way information is conveyed.</li>
      <li><strong>Text alternatives.</strong> Meaningful images carry descriptive alternative text; decorative icons are hidden from assistive technology so they do not add noise.</li>
      <li><strong>Forms.</strong> Every field has a visible, programmatically associated label, required fields are marked in text as well as visually, and confirmation and error messages are announced to screen readers.</li>
      <li><strong>Responsive and zoomable.</strong> Layouts reflow on small screens and remain usable when text is enlarged, without horizontal scrolling.</li>
      <li><strong>Reduced motion.</strong> Animations and transitions are disabled automatically for visitors whose system requests reduced motion.</li>
      <li><strong>No JavaScript dependency.</strong> Content is readable and forms can still be submitted if JavaScript is unavailable.</li>
    </ul>

    <h2>Known limitations</h2>
    <p>Some parts of this site are outside our direct control. Third-party destinations we link to — mapping, review and social media platforms — have their own accessibility standards, and we cannot guarantee them. If a third-party service prevents you from reaching us, please call instead and we will handle your request by phone.</p>

    <h2>If something does not work for you</h2>
    <p>If any part of this website creates a barrier for you, we want to know, and we will fix it. Just as importantly, we will make sure the barrier does not stop you getting help: tell us what you need and we will take the details over the phone or by email and arrange service that way.</p>
    <ul>
      <li>Email: <a href="mailto:${BIZ.email}">${BIZ.email}</a></li>
      <li>Dallas: <a href="tel:${BIZ.phoneDallasRaw}">${BIZ.phoneDallas}</a></li>
      <li>Fort Worth: <a href="tel:${BIZ.phoneFWRaw}">${BIZ.phoneFW}</a></li>
    </ul>
    <p>Please tell us the page address, what you were trying to do, and the assistive technology or browser you were using. We aim to respond to accessibility reports promptly and to resolve confirmed issues as quickly as we reasonably can.</p>

    <h2>Alternative ways to reach us</h2>
    <p>You never have to use this website to get our help. We answer the phone 24 hours a day, 7 days a week, every day of the year, and you are welcome to email us or visit either office in Dallas or Fort Worth.</p>

    <h2>Ongoing work</h2>
    <p>Accessibility is not a one-off project. We review this site as we change it, and feedback from visitors is the most useful input we get. This statement will be updated as that work continues.</p>
  </div>
</section>` + ctaBand({ heading: 'We will take your details however suits you', text: 'Phone, email or in person at either office — whatever is easiest. We answer 24 hours a day, 7 days a week.' });

  return {
    file: 'accessibility-statement/index.html',
    title: 'Accessibility Statement | BioTechs Online',
    desc: 'The BioTechs Online accessibility statement: our WCAG 2.1 AA commitment, the measures in place on this website, known limitations and how to report a barrier.',
    url: '/accessibility-statement/',
    active: '',
    body
  };
}

/* ------------------------------------------------------------- 404 */
export function notFound() {
  const body = `
<section class="nf">
  <div class="wrap wrap-narrow">
    <span class="code">404</span>
    <h1 style="margin-top:12px">The page can't be found.</h1>
    <p>It looks like nothing was found at this location. The page may have moved, or the link you followed may be out of date.</p>
    <div class="btn-row">
      <a class="btn btn-primary" href="/">Back to home ${icon('arrow')}</a>
      <a class="btn btn-ghost" href="/contact-us/">Contact us</a>
      <a class="btn btn-alert" href="tel:${BIZ.phoneDallasRaw}">${icon('phone')}${BIZ.phoneDallas}</a>
    </div>
  </div>
</section>

<section class="section alt" style="padding-top:0">
  <div class="wrap">
    <div class="section-head center reveal">
      <span class="eyebrow">Popular pages</span>
      <h2>Where you were probably heading</h2>
    </div>
    <div class="tiles reveal">
      <a class="tile" href="/biohazard-services/"><span class="dot"></span><span><strong>Biohazard Services</strong><span>Blood, crime scene, death, decomposition, hazmat and drug remediation.</span></span></a>
      <a class="tile" href="/hoarding-cleanup-services/"><span class="dot"></span><span><strong>Hoarding &amp; Cleanup Services</strong><span>Hoarding, clutter, encampment, tear gas and odor treatment.</span></span></a>
      <a class="tile" href="/areas-we-service/"><span class="dot"></span><span><strong>Areas We Service</strong><span>Our Dallas and Fort Worth offices and metroplex coverage.</span></span></a>
      <a class="tile" href="/about/"><span class="dot"></span><span><strong>About Us</strong><span>Who we are and how we approach this work.</span></span></a>
      <a class="tile" href="/about/who-we-serve/"><span class="dot"></span><span><strong>Who We Serve</strong><span>Families, landlords, businesses, agencies and first responders.</span></span></a>
      <a class="tile" href="/contact-us/"><span class="dot"></span><span><strong>Contact Us</strong><span>Reach us 24 hours a day, 7 days a week.</span></span></a>
    </div>
  </div>
</section>

${ctaBand()}`;

  return {
    file: '404.html',
    title: 'Page Not Found | BioTechs Online',
    desc: 'The page you requested could not be found. Browse our biohazard and hoarding cleanup services or contact BioTechs Online 24/7 in Dallas–Fort Worth.',
    url: '/404.html',
    active: '',
    body
  };
}
