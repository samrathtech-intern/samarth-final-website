export const site = {
  name: 'SAMARTH TECHNOOLOGIES',
  legalName: 'Samarth Technoologies',
  tagline: 'ISO, food-safety and audit-readiness consultancy for growing businesses.',
  domain: 'https://www.samarthtechnoologies.com',
  email: 'info.samarthtechnoologies@gmail.com',
  altEmail: 'amrendramahamuni@gmail.com',
  altEmail2: 'amrendramahamuni07@gmail.com',
  owner: 'Mr. Amrendra Mahamuni',
  address:
    'Vijayashree Coop. Housing Society Ltd. SR. No. 129, Flat B-36, Near Global Hospital, Dattawadi, Pune, Maharashtra 411030, India',
  logo: '/brand/samarth-technoologies-logo.png',
  qciMembership: 'ORG/CS/WR/445',
  gst: '27ADCFS4679J1ZI',
  pan: 'ADCFS4679J',
  udyogAadhar: 'MH26D0234096',
  udyam: 'UDYAM–MH–26–0299477',
  established: '2015',
  consultants: '24'
};

export type Service = {
  title: string;
  slug: string;
  short: string;
  description: string[];
  image: string;
  highlights: string[];
  meta: string;
  category?: string;
};

export const services: Service[] = [

  {
    title: 'ISO 9001:2015 Consultancy',
    slug: 'iso-9001-2015-consultancy',
    short: 'Quality management system consulting for documentation, implementation and audit readiness.',
    description: [
      'ISO 9001:2015 helps organisations build a practical quality management system around process control, customer focus, risk-based thinking and continual improvement.',
      'Samarth Technoologies supports clients with gap analysis, documentation, employee awareness, internal audit preparation and certification coordination.'
    ],
    image: '/assets/service-logos/iso-9001.webp',
    highlights: ['QMS documentation', 'Internal audit support', 'Certification readiness', 'Process improvement'],
    meta: 'ISO 9001:2015 consultancy in Pune for QMS implementation, documentation, internal audit and certification readiness.',
    category: 'ISO & Compliance'
  },
  {
    title: 'ISO 22000:2018 Consultancy & Training',
    slug: 'iso-22000-2018-consultancy-training',
    short: 'Food safety management system support for food manufacturers, processors and service providers.',
    description: [
      'ISO 22000:2018 combines management-system discipline with food-safety controls to help organisations manage hazards across the food chain.',
      'The service covers food-safety planning, PRPs, HACCP-based thinking, records, training and audit readiness.'
    ],
    image: '/assets/service-logos/iso-22000.webp',
    highlights: ['FSMS implementation', 'Food safety training', 'Hazard controls', 'Audit preparation'],
    meta: 'ISO 22000:2018 consultancy and food safety training services in Pune, Maharashtra.',
    category: 'ISO & Compliance'
  },
  {
    title: 'ISO 17020 Accreditation Consultancy',
    slug: 'iso-17020-accreditation-consultancy',
    short: 'Accreditation support for inspection bodies with process, records and competence alignment.',
    description: [
      'ISO 17020 focuses on the competence, impartiality and consistent operation of inspection bodies.',
      'Samarth supports documentation, system implementation, internal audit practices and accreditation preparedness.'
    ],
    image: '/assets/service-logos/iso-17020.webp',
    highlights: ['Inspection body systems', 'Impartiality controls', 'Procedure documentation', 'Assessment readiness'],
    meta: 'ISO 17020 accreditation consultancy in Pune for inspection body documentation and assessment readiness.',
    category: 'ISO & Compliance'
  },
  {
    title: 'Global G.A.P. Consultancy',
    slug: 'global-gap-good-agricultural-practices-consultancy',
    short: 'Good Agricultural Practices consulting for safe, responsible and market-ready farm produce.',
    description: [
      'Global G.A.P. helps producers demonstrate responsible agriculture, traceability, worker welfare, hygiene and food-safety practices.',
      'The consultancy is designed for producers and agribusinesses preparing for buyer expectations and certification audits.'
    ],
    image: '/assets/service-logos/global-gap.webp',
    highlights: ['Farm compliance', 'Traceability', 'Hygiene practices', 'Audit support'],
    meta: 'Global G.A.P. good agricultural practices consultancy in Pune for food producers and agribusinesses.',
    category: 'Food Safety'
  },
  {
    title: 'GMP Consultancy',
    slug: 'gmp-consultancy',
    short: 'Good Manufacturing Practice systems for controlled, hygienic and consistent production.',
    description: [
      'Good Manufacturing Practice supports consistent production and control according to quality standards, reducing risks related to contamination, sanitation, records and labelling.',
      'Samarth helps teams implement practical GMP controls for food, nutraceutical and related manufacturing environments.'
    ],
    image: '/assets/service-logos/gmp.webp',
    highlights: ['GMP documentation', 'Hygiene controls', 'Personnel practices', 'Process validation support'],
    meta: 'GMP consultancy in Pune for manufacturing hygiene, quality controls and audit-ready documentation.',
    category: 'Food Safety'
  },
  {
    title: 'GHP Consultancy',
    slug: 'ghp-consultancy',
    short: 'Good Hygiene Practice consulting for sanitation, handling and food-safety discipline.',
    description: [
      'GHP focuses on hygiene practices that protect products from contamination and support safe food operations.',
      'The consulting process includes hygiene procedures, sanitation records, staff awareness and practical implementation support.'
    ],
    image: '/assets/service-logos/ghp.webp',
    highlights: ['Sanitation SOPs', 'Food handling practices', 'Staff awareness', 'Hygiene audit readiness'],
    meta: 'GHP consultancy in Pune for good hygiene practices, sanitation procedures and food handling systems.',
    category: 'Food Safety'
  },
  {
    title: 'FSSC Consultancy',
    slug: 'fssc-consultancy',
    short: 'Food safety system certification support for structured, customer-facing compliance.',
    description: [
      'FSSC 22000 offers a framework for organisations to manage food-safety responsibilities and demonstrate a robust food safety management system.',
      'Samarth supports gap study, implementation roadmap, documentation, training, internal audit and certification coordination.'
    ],
    image: '/assets/service-logos/fssc-22000.webp',
    highlights: ['FSSC roadmap', 'Documentation', 'Training', 'Audit readiness'],
    meta: 'FSSC consultancy in Pune for food safety system certification implementation and audit preparation.',
    category: 'Food Safety'
  },
  {
    title: 'ISO 45001 Consultancy',
    slug: 'iso-45001-consultancy',
    short: 'Occupational health and safety management consulting for safer workplaces.',
    description: [
      'ISO 45001 helps organisations identify, control and reduce risks related to occupational health and safety.',
      'The service supports system documentation, hazard identification, legal alignment, employee participation and audit readiness.'
    ],
    image: '/assets/service-logos/iso-45001.webp',
    highlights: ['OH&S system', 'Risk controls', 'Workplace safety', 'Internal audit'],
    meta: 'ISO 45001 consultancy in Pune for occupational health and safety management systems.',
    category: 'ISO & Compliance'
  },
  {
    title: 'ISO 17025 Accreditation Consultancy',
    slug: 'iso-17025-accreditation-consultancy',
    short: 'Testing and calibration laboratory accreditation support with technical competence focus.',
    description: [
      'ISO 17025 accreditation demonstrates technical competence for testing and calibration laboratories.',
      'Samarth supports laboratories with framework implementation, procedure documentation, training, internal audits and accreditation preparedness.'
    ],
    image: '/assets/service-logos/iso-17025.webp',
    highlights: ['Laboratory QMS', 'Technical records', 'Training programs', 'Accreditation support'],
    meta: 'ISO 17025 accreditation consultancy in Pune for testing and calibration laboratories.',
    category: 'Plant & Laboratory'
  },
  {
    title: 'HACCP Consultancy',
    slug: 'haccp-consultancy',
    short: 'Hazard analysis and critical control point implementation for food safety control.',
    description: [
      'HACCP is a preventive food-safety approach that identifies physical, chemical and biological hazards and controls them at critical points.',
      'The service helps food businesses define hazards, establish controls, build records and train teams for practical implementation.'
    ],
    image: '/assets/service-logos/haccp.webp',
    highlights: ['Hazard analysis', 'CCP planning', 'Records', 'Food safety controls'],
    meta: 'HACCP consultancy in Pune for food safety hazard analysis, CCP planning and implementation.',
    category: 'Food Safety'
  },
  {
    title: 'BRC Consultancy',
    slug: 'brc-consultancy',
    short: 'BRC food safety standard support for suppliers targeting customer and market confidence.',
    description: [
      'The BRC Food Safety Standard is used globally by suppliers to show control over food safety, product quality and operational processes.',
      'Samarth provides practical guidance through gap assessment, documentation, implementation planning and audit preparation.'
    ],
    image: '/assets/service-logos/brc.webp',
    highlights: ['BRC gap assessment', 'Supplier compliance', 'Audit planning', 'Food safety systems'],
    meta: 'BRC consultancy in Pune for food safety standard implementation and audit readiness.',
    category: 'Food Safety'
  },
  {
    title: 'Food Testing Laboratory Setup Consultancy',
    slug: 'food-testing-laboratory-setup-consultancy',
    short: 'Step-by-step consultancy for setting up food testing labs and related compliance systems.',
    description: [
      'Samarth supports organisations with practical guidance for food testing laboratory setup, equipment planning and certification-related readiness.',
      'The approach covers project understanding, compliance requirements, layout inputs, documentation and implementation support.'
    ],
    image: '/assets/service-logos/food-testing-lab.webp',
    highlights: ['Lab setup guidance', 'Equipment planning', 'Documentation', 'Compliance support'],
    meta: 'Food testing laboratory setup consultancy in Pune for food businesses and testing facilities.',
    category: 'Plant & Laboratory'
  },
  {
    title: 'Food Processing Plant Turnkey Project Consultancy',
    slug: 'food-processing-plant-turnkey-project-consultancy',
    short: 'Turnkey project consultancy for food processing plants with technical and compliance support.',
    description: [
      'The consultancy supports food processing plant projects from concept to implementation planning with technical, compliance and operational inputs.',
      'Samarth helps clients align plant setup decisions with food safety, process flow, documentation and ongoing audit needs.'
    ],
    image: '/assets/service-logos/food-processing-plant.webp',
    highlights: ['Turnkey planning', 'Plant setup', 'Process flow', 'Technical support'],
    meta: 'Food processing plant turnkey project consultancy in Pune with compliance and technical guidance.',
    category: 'Plant & Laboratory'
  },
  {
    title: 'Food Industry Training Services',
    slug: 'food-industry-training-services',
    short: 'Food industry training for food safety practices, hygiene, process discipline and awareness.',
    description: [
      'Training helps food workers and supervisors understand food safety, hygiene, process control and compliance expectations.',
      'Programs can be aligned with manufacturing, catering, bakery, dairy, beverages and other food business requirements.'
    ],
    image: '/assets/service-logos/food-safety-training.webp',
    highlights: ['Food safety awareness', 'Hygiene training', 'Process discipline', 'Team readiness'],
    meta: 'Food industry training services in Pune for hygiene, food safety and compliance awareness.',
    category: 'Training & Audits'
  },
  // ── NEW SERVICES ──────────────────────────────────────────────────────────────
  {
    title: 'Food Safety Consultancy',
    slug: '',
    short: 'Comprehensive food safety consulting covering hazard analysis, compliance, documentation and team readiness.',
    description: [
      'End-to-end food safety consultancy aligned with FSSAI, HACCP, GMP and international standards.',
      'Covers gap study, regulatory alignment, practical documentation, staff awareness and audit-readiness support.'
    ],
    image: '/assets/service-logos/haccp.webp',
    highlights: ['FSSAI compliance', 'Hazard controls', 'Documentation', 'Training'],
    meta: 'Food safety consultancy in Pune covering FSSAI, HACCP, GMP and audit-readiness support.',
    category: 'Food Safety'
  },
  {
    title: 'FSSC 22000 Consultancy',
    slug: '',
    short: 'Full-cycle FSSC 22000 implementation and certification readiness for food businesses.',
    description: [
      'FSSC 22000 is a globally recognised food safety management system certification for the food industry.',
      'Samarth provides gap analysis, documentation, training, internal audit and certification coordination support.'
    ],
    image: '/assets/service-logos/fssc-22000.webp',
    highlights: ['FSSC gap study', 'Documentation', 'Internal audit', 'Certification'],
    meta: 'FSSC 22000 consultancy in Pune for food businesses seeking globally recognised food safety certification.',
    category: 'Food Safety'
  },
  {
    title: 'ISO 14001 Internal Auditor Training',
    slug: '',
    short: 'Internal auditor training for ISO 14001 environmental management system compliance.',
    description: [
      'ISO 14001 internal auditor training equips teams with the skills to plan, conduct and report environmental management system audits.',
      'The programme covers standard requirements, audit principles, evidence collection and non-conformance reporting.'
    ],
    image: '/assets/service-logos/iso-45001.webp',
    highlights: ['Audit principles', 'EMS requirements', 'Non-conformance', 'Practical exercises'],
    meta: 'ISO 14001 internal auditor training in Pune for environmental management system compliance.',
    category: 'Training & Audits'
  },
  {
    title: 'FSSAI FoSTaC Training',
    slug: '',
    short: 'Certified FSSAI FoSTaC food safety supervisor training for all food business categories.',
    description: [
      'FoSTaC (Food Safety Training & Certification) is an FSSAI initiative to train food safety supervisors across all food business categories.',
      'Mr. Amrendra Mahamuni is an FSSAI-authorised FoSTaC trainer covering catering, manufacturing, bakery, dairy, beverages and more.'
    ],
    image: '/assets/service-logos/food-safety-training.webp',
    highlights: ['FSSAI authorised', 'Multiple categories', 'Supervisor training', 'Certificate on completion'],
    meta: 'FSSAI FoSTaC food safety training in Pune by an authorised FoSTaC trainer and assessor.',
    category: 'Training & Audits'
  },
  {
    title: 'FSSAI Schedule 4 Audits',
    slug: '',
    short: 'Authorised FSSAI Schedule 4 compliance audits for food manufacturers and processors.',
    description: [
      'FSSAI Schedule 4 lays down GMP, GHP and hygiene standards for licensed food businesses.',
      'Mr. Amrendra Mahamuni is an FSSAI-authorised auditor conducting Schedule 4 compliance assessments.'
    ],
    image: '/assets/service-logos/food-safety-training.webp',
    highlights: ['GMP / GHP review', 'FSSAI compliance', 'Corrective actions', 'Audit report'],
    meta: 'FSSAI Schedule 4 audits in Pune by an FSSAI-authorised auditor for food manufacturers.',
    category: 'Training & Audits'
  },
  {
    title: 'Food Product Label Development',
    slug: '',
    short: 'Food label design and compliance review aligned with FSSAI and regulatory requirements.',
    description: [
      'Food product labels must comply with FSSAI labelling regulations covering nutritional information, allergens, ingredients and claims.',
      'Samarth supports food businesses with label content review, regulatory alignment and practical compliance inputs.'
    ],
    image: '/assets/service-logos/food-testing-lab.webp',
    highlights: ['FSSAI labelling', 'Nutritional info', 'Allergen statements', 'Regulatory review'],
    meta: 'Food product label development and FSSAI compliance review in Pune for food businesses.',
    category: 'Food Safety'
  },
  {
    title: 'Machinery Selection Support',
    slug: '',
    short: 'Expert guidance on food processing machinery selection aligned with product and compliance needs.',
    description: [
      'Choosing the right machinery is critical for food safety, product quality and operational efficiency.',
      'Samarth provides practical inputs on equipment selection, layout planning and compliance considerations for food processing units.'
    ],
    image: '/assets/service-logos/food-processing-plant.webp',
    highlights: ['Equipment guidance', 'Process alignment', 'Layout inputs', 'Compliance review'],
    meta: 'Food processing machinery selection support in Pune for food plant setup and compliance.',
    category: 'Plant & Laboratory'
  },
  {
    title: 'Food Plant Setup Consultancy',
    slug: '',
    short: 'End-to-end food processing plant setup consultancy from concept to compliance-ready operations.',
    description: [
      'Setting up a food processing plant requires careful planning for layout, equipment, hygiene, compliance and certifications.',
      'Samarth provides structured consultancy covering plant design inputs, regulatory requirements, documentation and implementation roadmap.'
    ],
    image: '/assets/service-logos/food-processing-plant.webp',
    highlights: ['Plant layout', 'Regulatory inputs', 'Compliance roadmap', 'Implementation support'],
    meta: 'Food plant setup consultancy in Pune for new food processing projects from idea to compliance-ready production.',
    category: 'Plant & Laboratory'
  }
];

export const serviceCategories = [
  {
    label: 'Food Safety',
    description: 'Practical food safety systems built around your operations.',
    services: services.filter((s) => s.category === 'Food Safety')
  },
  {
    label: 'ISO & Compliance',
    description: 'ISO management system implementation and certification readiness.',
    services: services.filter((s) => s.category === 'ISO & Compliance')
  },
  {
    label: 'Plant & Laboratory',
    description: 'Setup, accreditation and technical support for plants and labs.',
    services: services.filter((s) => s.category === 'Plant & Laboratory')
  },
  {
    label: 'Training & Audits',
    description: 'Authorised training programmes and compliance audit services.',
    services: services.filter((s) => s.category === 'Training & Audits')
  }
];

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' }
];

export const stats = [
  { value: site.established, label: 'Established' },
  { value: site.consultants, label: 'Professional consultants' },
  { value: 'QCI', label: `Member ${site.qciMembership}` },
  { value: 'Pune', label: 'Maharashtra, India' }
];

export const whyChooseUs = [
  'Transparent and ethical consulting approach',
  'Clear gap study before recommending certification steps',
  'Structured documentation, SOPs, records and handover support',
  'Practical coordination that helps teams save time during implementation',
  'Certification planning aligned with regulatory and operational discipline'
];

export const processSteps = [
  {
    title: 'Study your current system',
    text: 'We review your process flow, records, team responsibilities, compliance gaps and certification objective.'
  },
  {
    title: 'Build the readiness roadmap',
    text: 'A practical plan is prepared for documentation, SOPs, training, internal audits and certification milestones.'
  },
  {
    title: 'Implement with the team',
    text: 'Your team receives coordinated support for records, awareness, corrective actions and system adoption.'
  },
  {
    title: 'Review before audit',
    text: 'Final checks, internal audit inputs and improvement actions help the system stay ready for assessment.'
  }
];

export const trustAreas = [
  'Food safety management systems',
  'ISO quality & EHS standards',
  'HACCP & hygiene practices',
  'Laboratory & inspection accreditation',
  'FSSAI / FoSTaC training',
  'Documentation and audit readiness'
];

export const galleryItems = [
  { src: '/assets/gallery/gallery-01.webp', title: 'Food Safety Training Session', tag: 'Training', category: 'Training' },
  { src: '/assets/gallery/gallery-02.webp', title: 'Classroom Awareness Program', tag: 'Training', category: 'Training' },
  { src: '/assets/gallery/gallery-03.webp', title: 'Processing Plant Walkthrough', tag: 'Plant Visit', category: 'Plant Visits' },
  { src: '/assets/gallery/gallery-04.webp', title: 'Factory Hygiene Review', tag: 'Site Review', category: 'Audit Activities' },
  { src: '/assets/gallery/gallery-05.webp', title: 'Utility Area Inspection', tag: 'Compliance Review', category: 'Audit Activities' },
  { src: '/assets/gallery/gallery-06.webp', title: 'Production Floor Discussion', tag: 'Implementation', category: 'Consulting Work' },
  { src: '/assets/gallery/gallery-07.webp', title: 'Equipment & Records Review', tag: 'Audit Support', category: 'Audit Activities' },
  { src: '/assets/gallery/gallery-08.webp', title: 'Team Consultation Visit', tag: 'Client Support', category: 'Consulting Work' },
  { src: '/assets/gallery/gallery-09.webp', title: 'Food Safety Workshop Group', tag: 'Workshop', category: 'Training' },
  { src: '/assets/gallery/gallery-10.webp', title: 'Plant Process Review', tag: 'Process Review', category: 'Plant Visits' },
  { src: '/assets/gallery/gallery-11.webp', title: 'Awareness Program Delivery', tag: 'Training', category: 'Training' },
  // Chitale Industry
  { src: '/assets/chitale/chitale.jpeg', title: 'Chitale Industry', tag: 'Chitale', category: 'Chitale Industry' },
  { src: '/assets/chitale/chitale2.jpeg', title: 'Chitale Industry', tag: 'Chitale', category: 'Chitale Industry' },
  { src: '/assets/chitale/chitale3.jpeg', title: 'Chitale Industry', tag: 'Chitale', category: 'Chitale Industry' },
  // Factory Visits
  { src: '/assets/factory/factory.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory1.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory2.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory3.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory4.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory5.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory6.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory7.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory8.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory9.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory10.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory11.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory14.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory15.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  { src: '/assets/factory/factory16.jpeg', title: 'Factory Visit', tag: 'Factory', category: 'Factory Visits' },
  // FIFA World Cup
  { src: '/assets/fifa/fifa.jpeg', title: 'FIFA World Cup', tag: 'FIFA', category: 'FIFA World Cup' },
  { src: '/assets/fifa/fifa1.jpeg', title: 'FIFA World Cup', tag: 'FIFA', category: 'FIFA World Cup' },
  { src: '/assets/fifa/fifa2.jpeg', title: 'FIFA World Cup', tag: 'FIFA', category: 'FIFA World Cup' },
  { src: '/assets/fifa/fifa3.jpeg', title: 'FIFA World Cup', tag: 'FIFA', category: 'FIFA World Cup' },
  { src: '/assets/fifa/fifa4.jpeg', title: 'FIFA World Cup', tag: 'FIFA', category: 'FIFA World Cup' },
  { src: '/assets/fifa/fifa9.jpeg', title: 'FIFA World Cup', tag: 'FIFA', category: 'FIFA World Cup' },
  { src: '/assets/fifa/fifa10.jpeg', title: 'FIFA World Cup', tag: 'FIFA', category: 'FIFA World Cup' },
  // Presentation
  { src: '/assets/presentation/presentation.jpeg', title: 'Presentation', tag: 'Presentation', category: 'Presentation' },
  { src: '/assets/presentation/presentation1.jpeg', title: 'Presentation', tag: 'Presentation', category: 'Presentation' },
  { src: '/assets/presentation/presentation3.jpeg', title: 'Presentation', tag: 'Presentation', category: 'Presentation' },
  { src: '/assets/presentation/presentation4.jpeg', title: 'Presentation', tag: 'Presentation', category: 'Presentation' },
  { src: '/assets/presentation/presentation5.jpeg', title: 'Presentation', tag: 'Presentation', category: 'Presentation' }
];

export const galleryCategories = ['All', 'Training', 'Audit Activities', 'Plant Visits', 'Factory Visits', 'Chitale Industry', 'FIFA World Cup', 'Presentation', 'Certifications', 'Consulting Work'];

export const certificateItems = [
  { src: '/assets/credentials/qci-membership.webp', title: 'QCI Membership', tag: 'Company Credential', category: 'Certifications' },
  { src: '/assets/credentials/gst-registration.webp', title: 'GST Registration', tag: 'Registration', category: 'Certifications' },
  { src: '/assets/credentials/udyog-aadhar.webp', title: 'Udyog Aadhaar', tag: 'Registration', category: 'Certifications' },
  { src: '/assets/certificates/full/catering-basic.webp', title: 'FoSTaC Catering Basic Certificate', tag: 'FoSTaC Training', category: 'Certifications' },
  { src: '/assets/certificates/full/covid-19-tot.webp', title: 'COVID-19 Training of Trainers Certificate', tag: 'Training Certificate', category: 'Certifications' },
  { src: '/assets/certificates/full/exemplar-global-for-qm-au-tl.webp', title: 'Exemplar Global QM AU TL Training', tag: 'Lead Auditor Training', category: 'Certifications' },
  { src: '/assets/certificates/full/fifa-2022.webp', title: 'FIFA 2022 Food Safety Assignment Certificate', tag: 'Special Assignment', category: 'Certifications' },
  { src: '/assets/certificates/full/fssa-at-fifa-2022.webp', title: 'FSSA at FIFA 2022 Recognition', tag: 'Special Assignment', category: 'Certifications' },
  { src: '/assets/certificates/full/food-allergy.webp', title: 'Food Allergy Training Certificate', tag: 'Food Safety Training', category: 'Certifications' },
  { src: '/assets/certificates/full/food-safety-trainer-certificate-of-competence-advance-catering.webp', title: 'FoSTaC Advanced Catering Trainer Certificate', tag: 'FoSTaC Training', category: 'Certifications' },
  { src: '/assets/certificates/full/food-safety-trainer-certificate-of-competence-advance-manufacturing.webp', title: 'FoSTaC Advanced Manufacturing Trainer Certificate', tag: 'FoSTaC Training', category: 'Certifications' },
  { src: '/assets/certificates/full/food-safety-trainer-certificate-of-competence-catering-advanced-and-covid-tot.webp', title: 'Catering Advanced and COVID ToT Certificate', tag: 'FoSTaC Training', category: 'Certifications' },
  { src: '/assets/certificates/full/food-safety-trainer-certificate-of-competence-catering-milk-and-milk-products-and-covid-tot.webp', title: 'Milk & Milk Products and COVID ToT Certificate', tag: 'FoSTaC Training', category: 'Certifications' },
  { src: '/assets/certificates/full/food-safety-trainer-certificate-of-competence-water-testing-tot.webp', title: 'Water Testing ToT Certificate', tag: 'Training Certificate', category: 'Certifications' },
  { src: '/assets/certificates/full/food-safety-trainer-certificate-of-competence-bakery.webp', title: 'FoSTaC Bakery Trainer Certificate', tag: 'FoSTaC Training', category: 'Certifications' },
  { src: '/assets/certificates/full/food-safety-trainer-certificate-of-competence-hygiene-auditor.webp', title: 'FoSTaC Hygiene Auditor Certificate', tag: 'Food Safety Training', category: 'Certifications' },
  { src: '/assets/certificates/full/fspca-preventive-control.webp', title: 'FSPCA Preventive Controls Certificate', tag: 'Food Safety Training', category: 'Certifications' },
  { src: '/assets/certificates/full/haccp.webp', title: 'HACCP Training Certificate', tag: 'Food Safety Training', category: 'Certifications' },
  { src: '/assets/certificates/full/hygiene-rating-auditor.webp', title: 'Hygiene Rating Auditor Certificate', tag: 'Food Safety Training', category: 'Certifications' },
  { src: '/assets/certificates/full/iqa-on-iso.webp', title: 'Internal Quality Audit on ISO Certificate', tag: 'Internal Audit', category: 'Certifications' },
  { src: '/assets/certificates/full/iso-170202012.webp', title: 'ISO 17020:2012 Training Certificate', tag: 'Accreditation Training', category: 'Certifications' },
  { src: '/assets/certificates/full/iso-22000-2018.webp', title: 'ISO 22000:2018 Certificate', tag: 'Lead Auditor Training', category: 'Certifications' },
  { src: '/assets/certificates/full/iso-90002000-lead-auditor.webp', title: 'ISO 9001 Lead Auditor Certificate', tag: 'Lead Auditor Training', category: 'Certifications' },
  { src: '/assets/certificates/full/lead-auditor-training.webp', title: 'Lead Auditor Training Certificate', tag: 'Lead Auditor Training', category: 'Certifications' },
  { src: '/assets/certificates/full/manufacturing-trainer.webp', title: 'Manufacturing Trainer Certificate', tag: 'FoSTaC Training', category: 'Certifications' },
  { src: '/assets/certificates/full/milk-and-milk.webp', title: 'Milk & Milk Products Training Certificate', tag: 'Food Safety Training', category: 'Certifications' },
  { src: '/assets/certificates/full/packing.webp', title: 'Packaging Training Certificate', tag: 'Food Safety Training', category: 'Certifications' },
  { src: '/assets/certificates/full/safety-haccp.webp', title: 'Food Safety HACCP Certificate', tag: 'Food Safety Training', category: 'Certifications' },
  { src: '/assets/certificates/full/shco.webp', title: 'NABH SHCO Programme Certificate', tag: 'Healthcare Quality', category: 'Certifications' },
  { src: '/assets/certificates/full/street-vendor.webp', title: 'Street Food Vendor Training Certificate', tag: 'Food Safety Training', category: 'Certifications' },
  { src: '/assets/certificates/full/summit-2021.webp', title: 'Global Food Safety Summit 2021 Certificate', tag: 'Industry Recognition', category: 'Certifications' },
  { src: '/assets/certificates/full/udyam.webp', title: 'UDYAM Registration Certificate', tag: 'Registration', category: 'Certifications' },
  { src: '/assets/certificates/full/vacuum-packing.webp', title: 'Vacuum Packing Training Certificate', tag: 'Food Safety Training', category: 'Certifications' },
  { src: '/assets/certificates/full/workshop-internal-audit-for-iso-170202012.webp', title: 'Workshop on Internal Audit for ISO 17020:2012', tag: 'Internal Audit', category: 'Certifications' },
  { src: '/assets/certificates/full/zed-assessor.webp', title: 'ZED Assessor Certificate', tag: 'Assessment', category: 'Certifications' },
  { src: '/assets/certificates/full/gallery-17288-20201024200917.webp', title: 'Food Safety Recognition Certificate', tag: 'Industry Recognition', category: 'Certifications' }
];


export const proofCertificateItems = certificateItems.filter((item) => {
  const searchable = `${item.title} ${item.tag} ${item.src}`.toLowerCase();
  return !searchable.includes('gst') && !searchable.includes('udyog') && !searchable.includes('udyam');
});

export const trustBadges = [
  'QCI Member · ORG/CS/WR/445',
  'FSSAI FoSTaC Certified Trainer',
  'MoFPI Govt. of India Master Trainer',
  'US FDA / PCQI Approved',
  'MSME ZED & LEAN Assessor',
  'GST Registered Entity',
  'Udyog Aadhaar Registered',
  'UDYAM Registered'
];

export type Testimonial = {
  quote: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: 'Thank you for all the genuine support given to our company throughout the engagement.',
    name: 'Sagen Bhuinya'
  },
  {
    quote: 'Every deliverable was handled carefully and arrived exactly as promised — great attention to detail.',
    name: 'Santosh Kumar Soni'
  },
  {
    quote: 'Kudos to the entire team for their dedication and commitment. You have a client for life.',
    name: 'Manjit Vaghela'
  },
  {
    quote: 'A genuine game-changer for us — attentive, responsive and precise at every step.',
    name: 'Dr. Charudutt Patil'
  },
  {
    quote: 'Unparalleled performance that set a new standard for what we expect from a consultant.',
    name: 'Nadeem Shaikh'
  },
  {
    quote: 'Remarkably efficient — the team made a complex certification process completely hassle-free.',
    name: 'Pritam Kumar'
  },
  {
    quote: 'Outstanding service that consistently went above and beyond what we expected.',
    name: 'Vivek Maurya'
  },
  {
    quote: 'Responsive, reliable and easy to work with from the very first enquiry to final sign-off.',
    name: 'M. Bakkiyaraj'
  }
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'Which industries does Samarth Technoologies work with?',
    answer:
      'We primarily support food manufacturing, processing and testing businesses, along with manufacturing, laboratory and service organisations pursuing ISO, FSSAI, HACCP, BRC and related certifications.'
  },
  {
    question: 'Do you only help with documentation, or also with implementation?',
    answer:
      'Both. Engagements typically start with a gap assessment and documentation, then move into hands-on implementation support, employee training and internal audit preparation so the system is genuinely ready before the certification audit.'
  },
  {
    question: 'How long does a typical ISO or FSSAI certification project take?',
    answer:
      'Timelines depend on the standard, the current state of your processes and your team\u2019s availability, but most certification-readiness engagements run a few weeks to a few months. We share a clear roadmap with milestones at the start of every engagement.'
  },
  {
    question: 'Are you affiliated with the certification bodies?',
    answer:
      'We work independently as your consultant and coordinate with accredited certification bodies on your behalf — including liaising on audit scheduling and clarifications — while you choose and contract the certification body directly. We are a member of the Quality Council of India (QCI), membership ORG/CS/WR/445.'
  },
  {
    question: 'Can you train our staff as part of the engagement?',
    answer:
      'Yes. Mr. Amrendra Mahamuni is an FSSAI FoSTaC-certified trainer and assessor and a national-level resource person (Master Trainer) for the Ministry of Food Processing Industries (MoFPI), Government of India, so staff training is built into most food-safety and quality engagements.'
  },
  {
    question: 'Do you support businesses outside Pune?',
    answer:
      'Yes. While our team is based in Pune, Maharashtra, we support clients across India through a mix of on-site visits and remote documentation, training and review sessions, depending on project scope.'
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
