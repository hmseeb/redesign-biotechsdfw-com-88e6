/* Shared data + chrome fragments for the BioTechs Online static site build. */

export const BIZ = {
  name: 'BioTechs Online',
  short: 'BioTechs',
  tagline: 'Biohazard, Crime Scene & Hoarding Remediation in Dallas–Fort Worth',
  email: 'jesse@biotechsdfw.com',
  phoneDallas: '(469) 240-2020',
  phoneDallasRaw: '+14692402020',
  phoneFW: '(817) 270-6363',
  phoneFWRaw: '+18172706363',
  addrDallas: '13355 Noel Road, Suite 1100 Dallas, TX 75240',
  addrDallasMap: 'https://maps.app.goo.gl/K51b7zrCyugf8hHr6',
  addrFW: '9500 Ray White Road, Suite 200 Fort Worth, TX 76244',
  addrFWMap: 'https://maps.app.goo.gl/574pvaTT7n1JZKF98',
  form: 'https://vision.leadrai.com/api/forms/50824f6a035f15fdb77112dc3f016185',
  social: {
    facebook: 'https://www.facebook.com/biotechsdfw',
    youtube: 'https://www.youtube.com/channel/UCbZPOLAiQCIJ4dVJfCCXYgQ',
    linkedin: 'https://www.linkedin.com/company/biotechsdfwcrime/',
    tumblr: 'https://www.tumblr.com/crime-scene-cleanup-dallas',
    flickr: 'https://www.flickr.com/people/190534095@N06/'
  }
};

export const LOGO_SRCSET =
  '/images/source/01-biotechs-logo-300x66-png.webp 300w, ' +
  '/images/source/02-biotechs-logo-768x169-png.webp 768w, ' +
  '/images/source/00-biotechs-logo-1024x225-png.webp 1024w, ' +
  '/images/source/03-biotechs-logo-1536x338-png.webp 1536w, ' +
  '/images/source/04-biotechs-logo-2048x451-png.webp 2048w';

export const LOGO_ALT =
  'BioTechs Logo featuring stylized green and blue elements symbolizing biotechnology innovation and growth.';
export const BBB_ALT =
  'BBB Accredited Business badge with blue and white colors, symbolizing trust and credibility for businesses.';

/* ------------------------------------------------------------------ icons */
const P = {
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2.5 6.5 9.5 7 9.5-7"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  shield: '<path d="M12 22s8-3.5 8-10V5.5L12 2.5 4 5.5V12c0 6.5 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.3 2.3 4.7-4.8"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  chev: '<path d="m6 9 6 6 6-6"/>',
  star: '<path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9z" fill="currentColor" stroke="none"/>',
  drop: '<path d="M12 2.7s6 6.3 6 10.3a6 6 0 0 1-12 0c0-4 6-10.3 6-10.3z"/>',
  biohazard: '<circle cx="12" cy="9" r="3"/><circle cx="6.9" cy="16.5" r="3"/><circle cx="17.1" cy="16.5" r="3"/><path d="M12 12v3m-.9-4.5L8.7 14.7m4.2-4.2 2.4 4.2"/>',
  broom: '<path d="M14 3 9 8m6.5-1.5L20 11m-9.5-.5 4 4M4 20l5.5-5.5m-1-5 7 7M3.5 20.5h6"/>',
  spray: '<rect x="7" y="9" width="8" height="12" rx="2"/><path d="M11 9V5h4M18 6h.01M20 9h.01M18 12h.01"/>',
  wind: '<path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h8a2.5 2.5 0 1 1-2.5 2.5"/>',
  tent: '<path d="M12 3 3.5 20h17L12 3z"/><path d="M12 9v11"/>',
  box: '<path d="m12 2.8 8.5 4.4v9.6L12 21.2 3.5 16.8V7.2z"/><path d="M3.8 7.4 12 11.8l8.2-4.4M12 11.8v9.4"/>',
  pill: '<rect x="2.8" y="9" width="18.4" height="6" rx="3" transform="rotate(-45 12 12)"/><path d="M8.5 8.5 15.5 15.5"/>',
  users: '<circle cx="9" cy="8" r="3.4"/><path d="M2.8 20a6.2 6.2 0 0 1 12.4 0M16.5 5.3a3.4 3.4 0 0 1 0 6.6M18 20h3.2a5.6 5.6 0 0 0-3.4-5.2"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 7h2m3 0h2M9 11h2m3 0h2M9 15h6v6"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14.2-1.3 7 4.8-2.6 4.8 2.6-1.3-7"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  heart: '<path d="M12 20.4S3.5 15.3 3.5 9.6A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8.5 2.6c0 5.7-8.5 10.8-8.5 10.8z"/>',
  brief: '<rect x="2.8" y="7.5" width="18.4" height="12.7" rx="2"/><path d="M8.5 7.5V5.8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.7M2.8 12.5h18.4"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6m-6 4h4"/>',
  truck: '<path d="M2.8 6.5h10.7v10H2.8zM13.5 10h3.8l2.9 3v3.5h-6.7z"/><circle cx="7" cy="18.5" r="1.8"/><circle cx="17" cy="18.5" r="1.8"/>',
  bolt: '<path d="M13.5 2.5 4.8 13.8h5.4l-1.1 7.7 8.7-11.3h-5.4z"/>',
  eye: '<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  mask: '<path d="M3.5 9.5c0-2 2-3 4-2.6 1.6.3 3 .6 4.5.6s2.9-.3 4.5-.6c2-.4 4 .6 4 2.6 0 4-3 8-8.5 8S3.5 13.5 3.5 9.5z"/><path d="M8 11h8"/>',
  scale: '<path d="M12 3.5v17M6 7l-3 7h6zM18 7l-3 7h6zM7 20.5h10"/>',
  refresh: '<path d="M20.5 12a8.5 8.5 0 1 1-2.5-6m2.5-2.5V7h-3.5"/>'
};

export function icon(name, cls) {
  const d = P[name] || P.check;
  const extra = cls ? ' class="' + cls + '"' : '';
  return '<svg' + extra + ' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + d + '</svg>';
}

/* ---------------------------------------------------------------- services */
export const BIO_SERVICES = [
  {
    slug: 'biohazard-cleanup', name: 'Biohazard Cleanup', icon: 'biohazard',
    blurb: 'Full-scope cleanup, disinfection and safe disposal of biological hazards in homes, vehicles and commercial property.',
    body: 'Biological contamination is not a cleaning problem — it is a containment problem. Our technicians isolate the affected area, remove porous materials that cannot be salvaged, treat every surface with hospital-grade disinfectants, and package all contaminated material for regulated disposal. We document the scope from start to finish so property owners, landlords and insurers have a clear record of what was remediated.',
    points: ['Containment & air control', 'Hospital-grade disinfection', 'Regulated waste disposal', 'Verification & documentation']
  },
  {
    slug: 'blood-cleanup', name: 'Blood Cleanup', icon: 'drop',
    blurb: 'Safe removal and decontamination of blood and blood-borne pathogens after an accident, injury or violent incident.',
    body: 'Blood carries pathogens that stay infectious long after a surface looks dry. We treat every blood incident as potentially infectious, working in full personal protective equipment to remove the visible contamination and then the invisible residue beneath it — subfloor, drywall cavities, grout lines and upholstery included.',
    points: ['Blood-borne pathogen protocols', 'Sub-surface inspection', 'Porous material removal', 'Final disinfection']
  },
  {
    slug: 'crime-scene-cleanup', name: 'Crime Scene Cleanup', icon: 'shield',
    blurb: 'Discreet remediation of a property after law enforcement releases the scene, returning the space to a safe condition.',
    body: 'Once investigators release a scene, the cleanup becomes the property owner\'s responsibility. We step in at that point. Our crews arrive in a low-profile manner, coordinate access with whoever is managing the property, and restore the affected area — including fingerprint powder, chemical residue and biological material — so the space can be occupied again.',
    points: ['Post-release scene remediation', 'Discreet, low-profile response', 'Fingerprint & chemical residue', 'Odor neutralisation']
  },
  {
    slug: 'death-cleanup', name: 'Death Cleanup', icon: 'heart',
    blurb: 'Compassionate cleanup after a death at home or at a place of business, handled with care for the family involved.',
    body: 'When someone dies at home, the family should not be the ones cleaning up. We handle that work, and we handle it gently. Our technicians explain what will happen before they begin, protect belongings wherever possible, and remediate the affected area completely so the home is safe for the people who have to return to it.',
    points: ['Family-first communication', 'Belongings protected where possible', 'Complete affected-area remediation', 'Available 24/7']
  },
  {
    slug: 'suicide-cleanup', name: 'Suicide Cleanup', icon: 'heart',
    blurb: 'Sensitive, thorough remediation after a suicide, so loved ones never have to confront the aftermath themselves.',
    body: 'There is no routine version of this call. We respond quickly and quietly, keep communication with the family to the minimum they want, and take care of everything from biological decontamination to removing and replacing unsalvageable materials. Our priority is that nobody in the family ever has to see or handle the aftermath.',
    points: ['Rapid, private response', 'Full biological decontamination', 'Material removal & disposal', 'Odor and residue treatment']
  },
  {
    slug: 'decomposition-cleanup', name: 'Decomposition Cleanup', icon: 'wind',
    blurb: 'Remediation of unattended death and decomposition, including deep structural contamination and lingering odor.',
    body: 'An unattended death produces contamination that travels far past the visible stain — into subflooring, joists, HVAC runs and the air itself. We trace the full extent of the migration, remove what cannot be decontaminated, treat what can be, and then run odor abatement until the structure is genuinely clear rather than merely masked.',
    points: ['Full contamination mapping', 'Subfloor & structural work', 'HVAC consideration', 'Industrial odor abatement']
  },
  {
    slug: 'hazmat-cleanup', name: 'Hazmat Cleanup', icon: 'mask',
    blurb: 'Identification, containment and disposal of hazardous materials and chemical contamination on your property.',
    body: 'Hazardous material incidents demand the right protective equipment, the right neutralising agents and the right disposal chain. Our hazmat crews assess the material involved, contain the affected area to stop the spread, decontaminate surfaces and structures, and transfer waste into a compliant disposal stream.',
    points: ['Material identification', 'Containment & neutralisation', 'Compliant disposal chain', 'Clearance documentation']
  },
  {
    slug: 'bodily-fluids-cleanup', name: 'Bodily Fluids Cleanup', icon: 'drop',
    blurb: 'Decontamination of vomit, urine, blood and other bodily fluids in residential, commercial and vehicle settings.',
    body: 'Bodily fluids soak into whatever they touch and keep producing bacteria and odor until they are fully removed. We extract the contamination, pull back flooring and fixtures where the fluid has penetrated, disinfect to the full depth of the spill, and treat the air and surfaces so the space is genuinely sanitary.',
    points: ['Depth-of-penetration removal', 'Antimicrobial treatment', 'Flooring & fixture work', 'Odor elimination']
  },
  {
    slug: 'feces-urine-cleanup', name: 'Feces / Urine Cleanup', icon: 'spray',
    blurb: 'Cleanup of human and animal waste accumulation, including sewage backups and severe pet contamination.',
    body: 'Accumulated waste is one of the highest-risk cleanups we perform: ammonia vapour, airborne pathogens and insect activity all build quickly. Our technicians work in respiratory protection to remove the waste and all saturated material, disinfect the structure underneath, and run air and odor treatment until the property is habitable again.',
    points: ['Respiratory-protected crews', 'Saturated material removal', 'Structural disinfection', 'Ammonia odor treatment']
  },
  {
    slug: 'drug-remediation', name: 'Drug Remediation', icon: 'pill',
    blurb: 'Decontamination of properties affected by drug use, drug manufacturing residue and related chemical hazards.',
    body: 'Drug activity leaves chemical residue on walls, ceilings, ventilation and belongings long after the activity stops. We assess how far the residue has spread, remove contaminated materials, and clean and treat the remaining surfaces and systems so landlords, property managers and new occupants are not inheriting an exposure risk.',
    points: ['Residue spread assessment', 'Surface & HVAC treatment', 'Sharps and paraphernalia removal', 'Landlord documentation']
  }
];

export const HOARD_SERVICES = [
  {
    slug: 'hoarding-cleanup', name: 'Hoarding Cleanup', icon: 'box',
    blurb: 'Patient, judgement-free hoarding remediation that works with the client rather than simply hauling everything away.',
    body: 'Hoarding cleanups fail when they are rushed. We move at a pace the client can live with, sort rather than simply discard, and recover valuables, documents and keepsakes as we go. Underneath the clutter there is almost always biohazard and structural work to do, and we handle that too — pest contamination, waste, damaged flooring and blocked exits.',
    points: ['Judgement-free, paced approach', 'Sort, recover & document valuables', 'Biohazard & pest contamination', 'Safe egress restored']
  },
  {
    slug: 'clutter-cleanup', name: 'Clutter Cleanup', icon: 'broom',
    blurb: 'Large-scale clutter and debris removal for homes, estates, rentals and commercial spaces that have gotten away from you.',
    body: 'Not every overwhelmed space is a hoarding case. Estate clear-outs, long-vacant rentals, garages and storage units can simply need a crew, a plan and a truck. We sort what stays from what goes, remove the volume quickly, and leave the space clean and ready for its next use.',
    points: ['Whole-property clear-outs', 'Sorting & donation handling', 'Bulk debris removal', 'Clean, ready-to-use finish']
  },
  {
    slug: 'homeless-encampment-cleanup', name: 'Homeless Encampment Cleanup', icon: 'tent',
    blurb: 'Safe remediation of encampment sites for municipalities, property owners and commercial landholders.',
    body: 'Encampment sites combine bulk debris with genuine biohazard risk: sharps, human waste, spoiled food and accumulated trash. Our crews work the site in protective equipment, remove and dispose of the material under the correct waste streams, disinfect hard surfaces, and leave the property secure and sanitary.',
    points: ['Sharps & needle removal', 'Human waste decontamination', 'Bulk debris & structure removal', 'Site disinfection']
  },
  {
    slug: 'tear-gas-cleanup', name: 'Tear Gas Cleanup', icon: 'wind',
    blurb: 'Removal of CS and OC residue after a law-enforcement deployment, from surfaces, contents and ventilation.',
    body: 'Tear gas does not wash off. CS and OC agents settle as a fine, oily particulate that re-activates with heat and humidity, which is why a property can keep irritating occupants weeks after deployment. We treat the whole envelope — surfaces, soft contents, filters and ventilation — rather than just the room where the canister landed.',
    points: ['CS & OC particulate removal', 'Soft contents treatment', 'HVAC & filter remediation', 'Re-occupancy verification']
  },
  {
    slug: 'odor-treatment-service', name: 'Odor Treatment Service', icon: 'refresh',
    blurb: 'Industrial odor elimination that removes the source rather than covering it with fragrance.',
    body: 'Odor is information: it tells you contamination is still present. We find and remove the source first, then use industrial treatment on the remaining structure and air until the odor is gone rather than masked. Decomposition, smoke, waste, pet and chemical odors are all within scope.',
    points: ['Source identification & removal', 'Industrial air treatment', 'Structural sealing where needed', 'Verified, not masked']
  },
  {
    slug: 'disinfection-sanitization-service', name: 'Disinfection & Sanitization', icon: 'shield',
    blurb: 'Preventive and reactive disinfection for homes, offices, schools, clinics and public-facing facilities.',
    body: 'Whether you are responding to an exposure or protecting a facility ahead of time, the work has to be systematic. We map high-touch surfaces, apply EPA-registered disinfectants with the correct dwell time, and give you a record of what was treated and when — useful for staff, tenants and compliance alike.',
    points: ['High-touch surface mapping', 'EPA-registered products', 'Correct dwell-time application', 'Treatment documentation']
  },
  {
    slug: 'homeless-camp-cleanup', name: 'Homeless Camp Cleanup', icon: 'truck',
    blurb: 'Recurring and one-time camp cleanup programs for Dallas and Fort Worth property owners and agencies.',
    body: 'For properties that see repeat activity, a single cleanup is rarely the end of it. We can work as a one-time remediation or on a recurring schedule, documenting each visit so owners and agencies can show the site is being actively maintained and the biohazard risk is being managed.',
    points: ['One-time or recurring service', 'Documented site visits', 'Biohazard-rated disposal', 'Dallas & Fort Worth coverage']
  }
];

export const ALL_SERVICES = BIO_SERVICES.concat(HOARD_SERVICES);
