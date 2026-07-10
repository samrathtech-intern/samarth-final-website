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
  consultants: '24',
  whatsapp: 'https://wa.me/919595888000',
  linkedin: 'https://www.linkedin.com/company/samarth-technoologies'
};

export type Service = {
  title: string;
  slug: string;
  short: string;
  description: string[];
  bullets: string[];
  image: string;
  highlights: string[];
  meta: string;
  category?: string;
  implementationSteps?: string[];
  engagementOutcomes?: { title: string; text: string }[];
};

export const services: Service[] = [
  // ── ISO & COMPLIANCE ──────────────────────────────────────────────────────────
  {
    title: 'ISO 9001 – Quality Management System',
    slug: 'iso-9001-qms',
    short: 'End-to-end ISO 9001:2015 Quality Management System consulting from gap assessment to successful certification.',
    description: [
      'ISO 9001:2015 is the internationally recognised standard for Quality Management Systems. It helps organisations build a disciplined framework around process control, customer focus, risk-based thinking and continual improvement.',
      'Samarth Technoologies provides complete support from initial gap assessment and documentation through to internal auditor training, management review facilitation and certification readiness.'
    ],
    bullets: [
      'Design and implementation of ISO 9001:2015 Quality Management Systems.',
      'End-to-end consulting from gap assessment to certification.',
      'Process mapping, SOP development, and documentation support.',
      'Risk-based thinking and continual improvement implementation.',
      'Internal auditor training and management review facilitation.',
      'Customer satisfaction improvement and operational excellence.',
      'Root cause analysis and corrective action (CAPA) implementation.',
      'Certification readiness with minimal disruption to operations.'
    ],
    image: '/assets/service-logos/iso-9001.webp',
    highlights: ['QMS documentation', 'Internal audit support', 'CAPA implementation', 'Certification readiness'],
    meta: 'ISO 9001:2015 Quality Management System consultancy in Pune – gap assessment, documentation, internal audit training and certification readiness.',
    category: 'ISO & Compliance',
    implementationSteps: [
      'Context analysis and gap assessment',
      'Process mapping and SOP drafting',
      'Implementation and team training',
      'Internal audit and certification readiness'
    ],
    engagementOutcomes: [
      { title: 'Standardized Processes', text: 'Clear SOPs ensuring consistent quality across all departments.' },
      { title: 'Reduced Non-Conformities', text: 'Fewer errors and customer complaints through robust CAPA.' },
      { title: 'First-Time Certification', text: '100% readiness for external audits with zero major NCRs.' }
    ]
  },
  {
    title: 'ISO 22000 – Food Safety Management System',
    slug: 'iso-22000-fsms',
    short: 'Complete ISO 22000:2018 Food Safety Management System implementation for food manufacturers and processors.',
    description: [
      'ISO 22000:2018 combines management-system discipline with food-safety controls to help organisations manage hazards systematically across the food chain.',
      'The service covers food-safety planning, PRPs, OPRP, HACCP-based thinking, food fraud, food defense, documentation, internal audits and full certification preparation.'
    ],
    bullets: [
      'Complete ISO 22000 implementation for food businesses.',
      'Hazard identification and food safety risk assessment.',
      'HACCP integration with ISO 22000 requirements.',
      'PRP, OPRP, and CCP establishment and validation.',
      'Food safety documentation and compliance support.',
      'Internal audits and certification preparation.',
      'Supplier approval and food safety culture development.',
      'Regulatory compliance and continual improvement.'
    ],
    image: '/assets/service-logos/iso-22000.webp',
    highlights: ['FSMS implementation', 'HACCP integration', 'PRP/OPRP/CCP', 'Certification preparation'],
    meta: 'ISO 22000:2018 Food Safety Management System consultancy in Pune – HACCP, PRPs, documentation and certification support.',
    category: 'ISO & Compliance',
    implementationSteps: [
      'Facility evaluation and prerequisite program (PRP) setup',
      'Hazard analysis and HACCP plan development',
      'Food safety team training and documentation',
      'System validation and mock audits'
    ],
    engagementOutcomes: [
      { title: 'Global Compliance', text: 'Meets international food safety requirements for global supply chains.' },
      { title: 'Hazard Mitigation', text: 'Robust controls preventing physical, chemical, and biological hazards.' },
      { title: 'Audit Confidence', text: 'Fully prepared for FSSC 22000, ISO 22000, or customer audits.' }
    ]
  },
  {
    title: 'ISO 14001 – Environmental Management System',
    slug: 'iso-14001-ems',
    short: 'ISO 14001:2015 Environmental Management System design and implementation for sustainable, compliant operations.',
    description: [
      'ISO 14001:2015 provides a framework for organisations to manage their environmental responsibilities, reduce environmental impact and demonstrate sustainability commitments to stakeholders.',
      'Samarth Technoologies supports the complete implementation journey — from identification of environmental aspects and legal compliance evaluation through to internal audits and certification readiness.'
    ],
    bullets: [
      'Environmental management system design and implementation.',
      'Identification of environmental aspects and impacts.',
      'Legal compliance evaluation and environmental risk management.',
      'Sustainability and resource efficiency initiatives.',
      'Waste reduction, pollution prevention, and energy optimization.',
      'Environmental objectives and performance monitoring.',
      'Internal audits and certification support.',
      'ESG and sustainability alignment.'
    ],
    image: '/assets/service-logos/iso-45001.webp',
    highlights: ['EMS implementation', 'Legal compliance', 'Waste reduction', 'ESG alignment'],
    meta: 'ISO 14001:2015 Environmental Management System consultancy in Pune – aspects, legal compliance, sustainability and certification.',
    category: 'ISO & Compliance'
  },
  {
    title: 'ISO 45001 – Occupational Health & Safety',
    slug: 'iso-45001-consultancy',
    short: 'Occupational health and safety management consulting for safer, compliant workplaces.',
    description: [
      'ISO 45001 helps organisations identify, control and reduce risks related to occupational health and safety.',
      'The service supports system documentation, hazard identification, legal alignment, employee participation and audit readiness.'
    ],
    bullets: [
      'OH&S management system design and documentation.',
      'Hazard identification and risk assessment.',
      'Legal compliance review and worker participation framework.',
      'Emergency preparedness and response planning.',
      'Internal auditor training and management review support.',
      'Corrective action (CAPA) and incident investigation.',
      'Internal audits and certification readiness.',
      'Continual improvement of workplace safety performance.'
    ],
    image: '/assets/service-logos/iso-45001.webp',
    highlights: ['OH&S system', 'Risk controls', 'Workplace safety', 'Internal audit'],
    meta: 'ISO 45001 Occupational Health and Safety Management System consultancy in Pune for safer, compliant workplaces.',
    category: 'ISO & Compliance'
  },
  {
    title: 'ISO 17020 – Inspection Bodies',
    slug: 'iso-17020-consulting',
    short: 'ISO/IEC 17020 accreditation support for inspection organisations with process, competence and impartiality focus.',
    description: [
      'ISO/IEC 17020 sets out the requirements for the competence, impartiality and consistent operation of inspection bodies.',
      'Samarth supports the complete implementation journey — from impartiality system development and inspection procedure documentation through to internal audits and accreditation preparedness.'
    ],
    bullets: [
      'ISO/IEC 17020 implementation for inspection organizations.',
      'Development of impartiality and independence systems.',
      'Inspection procedures and reporting protocols.',
      'Competence management for inspection personnel.',
      'Risk management and impartiality assessment.',
      'Document control and quality system implementation.',
      'Internal audits and management reviews.',
      'Accreditation preparation and ongoing compliance.'
    ],
    image: '/assets/service-logos/iso-17020.webp',
    highlights: ['Inspection body systems', 'Impartiality controls', 'Procedure documentation', 'Accreditation readiness'],
    meta: 'ISO/IEC 17020 Inspection Body accreditation consultancy in Pune – impartiality, procedures and accreditation readiness.',
    category: 'ISO & Compliance'
  },
  {
    title: 'ISO/IEC 17025 – Testing & Calibration Laboratories',
    slug: 'iso-17025-consulting',
    short: 'ISO/IEC 17025:2017 Laboratory Quality Management System implementation and NABL accreditation readiness.',
    description: [
      'ISO/IEC 17025 accreditation demonstrates technical competence for testing and calibration laboratories. It is a prerequisite for NABL accreditation in India.',
      'Samarth supports laboratories with QMS implementation, method validation, measurement uncertainty, equipment calibration systems, internal audits and full accreditation preparedness.'
    ],
    bullets: [
      'Laboratory Quality Management System implementation.',
      'Compliance with ISO/IEC 17025:2017 requirements.',
      'Method validation and measurement uncertainty.',
      'Equipment calibration and maintenance systems.',
      'Internal quality control and proficiency testing support.',
      'Technical documentation and record management.',
      'Internal auditor training and laboratory audits.',
      'Accreditation readiness and continual compliance.'
    ],
    image: '/assets/service-logos/iso-17025.webp',
    highlights: ['Laboratory QMS', 'Method validation', 'NABL readiness', 'Accreditation support'],
    meta: 'ISO/IEC 17025 testing and calibration laboratory accreditation consultancy in Pune – NABL readiness and technical competence.',
    category: 'ISO & Compliance'
  },

  // ── FOOD SAFETY ───────────────────────────────────────────────────────────────
  {
    title: 'FSSC 22000 Version 7',
    slug: 'fssc-22000-v7',
    short: 'Complete FSSC 22000 Version 7 implementation and certification readiness for food businesses.',
    description: [
      'FSSC 22000 Version 7 is a globally recognised food safety management system certification that combines ISO 22000, ISO/TS 22002 Prerequisite Programmes and additional FSSC-specific requirements.',
      'Samarth provides end-to-end support including Food Safety & Quality Culture, Food Fraud Vulnerability Assessment, Food Defense planning, supplier management, environmental monitoring and transition from previous FSSC versions.'
    ],
    bullets: [
      'Complete implementation of FSSC 22000 Version 7 requirements.',
      'Compliance with ISO 22000, ISO/TS 22002 PRPs, and additional FSSC requirements.',
      'Food Safety & Quality Culture implementation.',
      'Food Fraud Vulnerability Assessment.',
      'Food Defense and Food Security planning.',
      'Equipment management and environmental monitoring.',
      'Supplier management and outsourced process control.',
      'Comprehensive documentation, internal audits, and certification readiness.',
      'Support for transition from previous FSSC versions.'
    ],
    image: '/assets/service-logos/fssc-22000.webp',
    highlights: ['FSSC V7 implementation', 'Food Fraud assessment', 'Food Defense planning', 'Certification readiness'],
    meta: 'FSSC 22000 Version 7 consultancy in Pune – full implementation, Food Fraud, Food Defense and certification readiness.',
    category: 'Food Safety'
  },
  {
    title: 'HACCP Consulting',
    slug: 'haccp-consulting',
    short: 'HACCP plan development based on Codex Alimentarius principles for comprehensive food safety control.',
    description: [
      'HACCP is a preventive food-safety approach that systematically identifies physical, chemical, biological and allergen hazards and controls them at Critical Control Points.',
      'Samarth helps food businesses define hazards, establish CCPs, set critical limits, build monitoring and verification systems, train HACCP teams and prepare for regulatory compliance and audits.'
    ],
    bullets: [
      'HACCP plan development based on Codex principles.',
      'Hazard analysis for biological, chemical, physical, and allergen risks.',
      'Critical Control Point (CCP) identification and validation.',
      'Critical limits, monitoring, and verification systems.',
      'Corrective action and record management.',
      'HACCP team training and competency development.',
      'Regulatory compliance and audit preparation.',
      'Integration with ISO 22000 and FSSC 22000.'
    ],
    image: '/assets/service-logos/haccp.webp',
    highlights: ['Hazard analysis', 'CCP planning', 'HACCP team training', 'Audit preparation'],
    meta: 'HACCP consultancy in Pune – Codex-based plan development, CCP identification, hazard analysis and food safety compliance.',
    category: 'Food Safety'
  },
  {
    title: 'GMP Consulting',
    slug: 'gmp-consulting',
    short: 'Good Manufacturing Practices implementation for food, pharmaceutical, cosmetic and allied industries.',
    description: [
      'Good Manufacturing Practices provide the foundation for safe, consistent and controlled production, reducing contamination risks and supporting regulatory compliance.',
      'Samarth helps teams implement practical GMP controls covering facility design, personnel hygiene, sanitation programmes, pest management, traceability and continual improvement.'
    ],
    bullets: [
      'GMP implementation for food, pharmaceutical, cosmetic, and allied industries.',
      'Facility layout and hygienic design guidance.',
      'Personnel hygiene and sanitation programs.',
      'Cleaning and sanitation SOP development.',
      'Preventive maintenance systems.',
      'Pest management and housekeeping systems.',
      'Traceability and product recall preparedness.',
      'GMP compliance audits and continuous improvement.'
    ],
    image: '/assets/service-logos/gmp.webp',
    highlights: ['GMP documentation', 'Hygiene controls', 'Sanitation SOPs', 'Compliance audits'],
    meta: 'GMP consultancy in Pune for food, pharmaceutical and cosmetic manufacturing – hygiene, sanitation and compliance support.',
    category: 'Food Safety'
  },
  {
    title: 'GHP Consultancy',
    slug: 'ghp-consultancy',
    short: 'Good Hygiene Practice consulting for sanitation, food handling and food-safety discipline.',
    description: [
      'GHP focuses on hygiene practices that protect products from contamination and support safe food operations.',
      'The consulting process includes hygiene procedures, sanitation records, staff awareness and practical implementation support.'
    ],
    bullets: [
      'Sanitation SOP development and implementation.',
      'Food handling and personal hygiene practices.',
      'Staff awareness and hygiene training programs.',
      'Cleaning and disinfection schedule establishment.',
      'Hygiene audit readiness and gap closure.',
      'Documentation and record-keeping systems.',
      'Regulatory compliance and inspection readiness.',
      'Continual improvement of hygiene standards.'
    ],
    image: '/assets/service-logos/ghp.webp',
    highlights: ['Sanitation SOPs', 'Food handling practices', 'Staff awareness', 'Hygiene audit readiness'],
    meta: 'GHP consultancy in Pune for good hygiene practices, sanitation procedures and food handling systems.',
    category: 'Food Safety'
  },
  {
    title: 'Global G.A.P. Consultancy',
    slug: 'global-gap-good-agricultural-practices-consultancy',
    short: 'Good Agricultural Practices consulting for safe, responsible and market-ready farm produce.',
    description: [
      'Global G.A.P. helps producers demonstrate responsible agriculture, traceability, worker welfare, hygiene and food-safety practices.',
      'The consultancy is designed for producers and agribusinesses preparing for buyer expectations and certification audits.'
    ],
    bullets: [
      'Global G.A.P. standard gap assessment and implementation.',
      'Farm record keeping and traceability systems.',
      'Worker health, safety and hygiene programs.',
      'Integrated crop and pest management documentation.',
      'Environmental and sustainability practice alignment.',
      'Internal audit and certification preparation.',
      'Buyer and retailer compliance support.',
      'Continual improvement and renewal audit readiness.'
    ],
    image: '/assets/service-logos/global-gap.webp',
    highlights: ['Farm compliance', 'Traceability', 'Hygiene practices', 'Audit support'],
    meta: 'Global G.A.P. good agricultural practices consultancy in Pune for food producers and agribusinesses.',
    category: 'Food Safety'
  },
  {
    title: 'BRC Consultancy',
    slug: 'brc-consultancy',
    short: 'BRC food safety standard support for suppliers targeting customer and global market confidence.',
    description: [
      'The BRC Food Safety Standard is used globally by suppliers to demonstrate control over food safety, product quality and operational processes.',
      'Samarth provides practical guidance through gap assessment, documentation, implementation planning and audit preparation.'
    ],
    bullets: [
      'BRC gap assessment and implementation roadmap.',
      'Food safety plan and hazard analysis.',
      'Product control and process environment documentation.',
      'Supplier and raw material approval systems.',
      'Internal audit and corrective action support.',
      'Competency and staff training programs.',
      'Certification body liaison and audit preparation.',
      'Continual improvement and re-certification support.'
    ],
    image: '/assets/service-logos/brc.webp',
    highlights: ['BRC gap assessment', 'Supplier compliance', 'Audit planning', 'Food safety systems'],
    meta: 'BRC Food Safety Standard consultancy in Pune for supplier compliance, documentation and certification readiness.',
    category: 'Food Safety'
  },

  // ── PLANT & LABORATORY ────────────────────────────────────────────────────────
  {
    title: 'Food Testing Laboratory Setup & NABL Accreditation',
    slug: 'food-testing-lab-nabl',
    short: 'End-to-end consulting for food testing laboratory establishment and NABL accreditation (ISO/IEC 17025).',
    description: [
      'Establishing a food testing laboratory requires careful planning across infrastructure, equipment, personnel competence and quality systems. NABL accreditation under ISO/IEC 17025 provides the highest level of credibility for laboratory results.',
      'Samarth provides complete consulting from laboratory planning and layout through QMS development, method validation, internal audits and full NABL accreditation readiness and post-accreditation compliance support.'
    ],
    bullets: [
      'End-to-end consulting for Food Testing Laboratory establishment.',
      'Laboratory planning, workflow optimization, and layout design.',
      'Guidance on infrastructure, utilities, and environmental requirements.',
      'Selection of analytical instruments and laboratory equipment.',
      'Development of Quality Management System (QMS) as per ISO/IEC 17025:2017.',
      'Preparation of quality manual, SOPs, test methods, and technical documentation.',
      'Method validation, measurement uncertainty, and quality control implementation.',
      'Internal audits, management reviews, and corrective action support.',
      'Pre-assessment and final NABL accreditation readiness.',
      'Assistance in maintaining continual compliance after accreditation.'
    ],
    image: '/assets/service-logos/food-testing-lab.webp',
    highlights: ['Lab setup guidance', 'NABL accreditation', 'Method validation', 'QMS development'],
    meta: 'Food testing laboratory setup and NABL accreditation consultancy in Pune – ISO/IEC 17025 implementation and accreditation readiness.',
    category: 'Plant & Laboratory'
  },
  {
    title: 'Food Industry Plant Setup',
    slug: 'food-processing-plant-turnkey-project-consultancy',
    short: 'Complete project consulting for new food manufacturing facilities from concept to commercial production.',
    description: [
      'Setting up a food processing plant requires careful planning for layout, equipment, hygiene, utility systems and regulatory compliance. Getting the design right from the start avoids costly corrections later.',
      'Samarth provides structured consultancy covering plant layout, process flow, hygienic facility design, utility planning, GMP/HACCP/FSSAI compliance, regulatory approvals and support through to commercial production.'
    ],
    bullets: [
      'Complete project consulting for new food manufacturing facilities.',
      'Plant layout and process flow design for maximum efficiency.',
      'Hygienic facility design compliant with GMP, HACCP, and FSSAI requirements.',
      'Utility planning including water, steam, compressed air, refrigeration, and HVAC.',
      'Production capacity planning and process optimization.',
      'Material flow and personnel flow design to minimize contamination risks.',
      'Food safety and quality compliance integrated from the design stage.',
      'Regulatory guidance for licenses and statutory approvals.',
      'Support from concept to commercial production.',
      'Cost-effective solutions for scalable and sustainable manufacturing.'
    ],
    image: '/assets/service-logos/food-processing-plant.webp',
    highlights: ['Plant layout design', 'GMP/HACCP compliance', 'Utility planning', 'Regulatory approvals'],
    meta: 'Food industry plant setup consultancy in Pune – layout, hygienic design, GMP compliance and regulatory guidance.',
    category: 'Plant & Laboratory'
  },
  {
    title: 'Food Processing Equipment Selection',
    slug: 'food-equipment-selection',
    short: 'Expert guidance in selecting food processing machinery aligned with product, capacity and food safety requirements.',
    description: [
      'Choosing the right food processing equipment is critical for product quality, operational efficiency, food safety compliance and long-term cost management.',
      'Samarth provides independent technical advice on equipment selection, vendor evaluation, hygienic design, utility requirements, automation options and commissioning guidance.'
    ],
    bullets: [
      'Expert guidance in selecting food processing machinery.',
      'Equipment recommendations based on product, capacity, and budget.',
      'Vendor evaluation and technical comparison.',
      'Automation and Industry 4.0 integration support.',
      'Hygienic equipment design selection for food safety compliance.',
      'Utility load calculations and process compatibility assessment.',
      'Installation qualification and commissioning guidance.',
      'Productivity improvement through optimized equipment selection.',
      'Energy-efficient and cost-effective equipment recommendations.',
      'Independent technical advice focused on your business objectives.'
    ],
    image: '/assets/service-logos/food-processing-plant.webp',
    highlights: ['Equipment selection', 'Vendor evaluation', 'Hygienic design', 'Commissioning support'],
    meta: 'Food processing equipment selection consultancy in Pune – vendor evaluation, hygienic design and commissioning guidance.',
    category: 'Plant & Laboratory'
  },
  {
    title: 'ISO 17025 Accreditation Consultancy',
    slug: 'iso-17025-accreditation-consultancy',
    short: 'Testing and calibration laboratory accreditation support with technical competence focus.',
    description: [
      'ISO 17025 accreditation demonstrates technical competence for testing and calibration laboratories.',
      'Samarth supports laboratories with framework implementation, procedure documentation, training, internal audits and accreditation preparedness.'
    ],
    bullets: [
      'Laboratory QMS framework implementation.',
      'ISO/IEC 17025:2017 compliance documentation.',
      'Method validation and measurement uncertainty.',
      'Equipment calibration and maintenance systems.',
      'Internal quality control and proficiency testing support.',
      'Technical records and documentation management.',
      'Internal auditor training and laboratory audits.',
      'NABL accreditation readiness and continual compliance.'
    ],
    image: '/assets/service-logos/iso-17025.webp',
    highlights: ['Laboratory QMS', 'Technical records', 'Training programs', 'Accreditation support'],
    meta: 'ISO/IEC 17025 accreditation consultancy in Pune for testing and calibration laboratories and NABL readiness.',
    category: 'Plant & Laboratory'
  },

  // ── TRAINING & AUDITS ─────────────────────────────────────────────────────────
  {
    title: 'FSSAI FoSTaC Training',
    slug: 'fssai-fostac-training',
    short: 'Certified FSSAI FoSTaC food safety supervisor training across all food business categories.',
    description: [
      'FoSTaC (Food Safety Training & Certification) is an FSSAI initiative to ensure trained and certified Food Safety Supervisors in every food business. It is mandatory for licensed food businesses under FSSAI regulations.',
      'Mr. Amrendra Mahamuni is an FSSAI-authorised FoSTaC trainer and assessor, delivering practical food safety knowledge across manufacturing, catering, dairy, bakery, retail, storage and transport sectors.'
    ],
    bullets: [
      'Certified FoSTaC training for Food Safety Supervisors.',
      'FSSAI-approved training programs across food sectors.',
      'Practical food safety knowledge aligned with regulatory requirements.',
      'Industry-specific modules for manufacturing, catering, retail, storage, and transport.',
      'Training on personal hygiene, sanitation, GMP, and HACCP principles.',
      'Food contamination prevention and allergen awareness.',
      'Regulatory compliance and legal responsibilities under FSSAI.',
      'Interactive sessions with practical case studies.',
      'Certificate support for successful participants.',
      'Improve food safety culture across your organization.'
    ],
    image: '/assets/service-logos/food-safety-training.webp',
    highlights: ['FSSAI authorised trainer', 'Multiple food sectors', 'Supervisor certification', 'Practical case studies'],
    meta: 'FSSAI FoSTaC food safety supervisor training in Pune by an authorised FoSTaC trainer – manufacturing, catering and all categories.',
    category: 'Training & Audits'
  },
  {
    title: 'ISO Internal Auditor & Awareness Training',
    slug: 'iso-internal-auditor-training',
    short: 'Professional internal auditor and awareness training for ISO 9001, ISO 22000, ISO 14001, ISO 45001, ISO 17025 and FSSC 22000.',
    description: [
      'Competent internal auditors are critical to maintaining effective management systems and ensuring continual improvement. Internal audit training builds the skills teams need to plan, conduct and report audits effectively.',
      'The programme covers ISO 19011 auditing guidelines, process-based auditing, non-conformity identification, corrective action planning and customised corporate training for specific standards.'
    ],
    bullets: [
      'Professional Internal Auditor Training for ISO Management Systems.',
      'Awareness training for ISO 9001, ISO 22000, ISO 14001, ISO 45001, ISO/IEC 17025, and FSSC 22000.',
      'Practical auditing techniques based on ISO 19011 guidelines.',
      'Process-based audit planning and execution.',
      'Nonconformity identification and effective corrective actions.',
      'Risk-based thinking and continual improvement concepts.',
      'Interactive workshops with real-world industry examples.',
      'Documentation review and audit reporting skills.',
      'Customized corporate training programs.',
      'Enhance organizational competence and audit readiness.'
    ],
    image: '/assets/service-logos/food-safety-training.webp',
    highlights: ['ISO 19011 auditing', 'Multi-standard training', 'CAPA skills', 'Corporate workshops'],
    meta: 'ISO internal auditor and awareness training in Pune for ISO 9001, ISO 22000, FSSC 22000 and related management systems.',
    category: 'Training & Audits'
  },
  {
    title: 'FSSAI Schedule 4 Audit',
    slug: 'fssai-schedule-4-audit',
    short: 'Comprehensive audits based on FSSAI Schedule 4 requirements for GMP and GHP compliance.',
    description: [
      'FSSAI Schedule 4 lays down the standards for Good Manufacturing Practices (GMP) and Good Hygienic Practices (GHP) for licensed food businesses in India.',
      'Mr. Amrendra Mahamuni is an FSSAI-authorised auditor conducting Schedule 4 compliance assessments, providing detailed gap analysis, corrective action plans and inspection readiness support.'
    ],
    bullets: [
      'Comprehensive audits based on FSSAI Schedule 4 requirements.',
      'Evaluation of Good Manufacturing Practices (GMP) compliance.',
      'Assessment of Good Hygienic Practices (GHP).',
      'Facility hygiene and sanitation inspections.',
      'Personnel hygiene and food safety behavior assessment.',
      'Process control and operational compliance verification.',
      'Documentation review and legal compliance assessment.',
      'Gap analysis with prioritized corrective action plans.',
      'Audit reports with practical improvement recommendations.',
      'Support for achieving regulatory compliance and inspection readiness.'
    ],
    image: '/assets/service-logos/food-safety-training.webp',
    highlights: ['FSSAI authorised auditor', 'GMP/GHP assessment', 'Gap analysis', 'Corrective action plans'],
    meta: 'FSSAI Schedule 4 audit in Pune by an authorised FSSAI auditor – GMP, GHP compliance and inspection readiness.',
    category: 'Training & Audits'
  },
  {
    title: 'ISO Management Systems Auditing Services',
    slug: 'iso-management-auditing-services',
    short: 'Professional first-party, second-party and pre-certification audits for all major ISO management system standards.',
    description: [
      'Independent, objective audits are the most powerful tool for identifying gaps, reducing risk and building genuine certification readiness. Samarth provides experienced lead auditor services across all major ISO management system standards.',
      'Audit services include internal audits, supplier qualification audits, compliance audits, mock certification audits and integrated management system audits — all aligned with ISO 19011 guidelines.'
    ],
    bullets: [
      'Professional First-Party (Internal), Second-Party (Supplier), and Pre-Certification Audits.',
      'Experienced Lead Auditor for International ISO Management System Standards.',
      'Comprehensive Gap Assessment and Compliance Audits.',
      'Risk-Based Audit Planning aligned with ISO 19011 Guidelines.',
      'Process-Based Auditing focused on business improvement.',
      'Identification of Nonconformities, Risks, and Improvement Opportunities.',
      'Practical Corrective Action (CAPA) and Root Cause Analysis Support.',
      'Audit Reports with Actionable Business Improvement Recommendations.',
      'Certification Readiness Assessments.',
      'Ongoing Compliance Monitoring and Surveillance Audit Support.'
    ],
    image: '/assets/service-logos/iso-9001.webp',
    highlights: ['ISO 19011 auditing', 'Lead auditor services', 'CAPA support', 'Certification readiness'],
    meta: 'ISO management systems auditing services in Pune – internal audits, supplier audits, gap assessments and certification readiness.',
    category: 'Training & Audits'
  },
  {
    title: 'Food Industry Training Services',
    slug: 'food-industry-training-services',
    short: 'Food industry training for food safety practices, hygiene, process discipline and team awareness.',
    description: [
      'Training helps food workers and supervisors understand food safety, hygiene, process control and compliance expectations.',
      'Programs can be aligned with manufacturing, catering, bakery, dairy, beverages and other food business requirements.'
    ],
    bullets: [
      'Food safety awareness and hygiene training for all levels.',
      'Process discipline and GMP/GHP practical sessions.',
      'HACCP principles and food safety culture development.',
      'Allergen management and contamination prevention.',
      'Sector-specific modules for manufacturing, catering and retail.',
      'Train-the-trainer programs for in-house capability building.',
      'Regulatory awareness – FSSAI, ISO and related standards.',
      'Interactive workshops with practical case studies.'
    ],
    image: '/assets/service-logos/food-safety-training.webp',
    highlights: ['Food safety awareness', 'Hygiene training', 'Process discipline', 'Team readiness'],
    meta: 'Food industry training services in Pune for hygiene, food safety and compliance awareness.',
    category: 'Training & Audits'
  }
];

// ── SERVICE CATEGORIES ────────────────────────────────────────────────────────
export const serviceCategories = [
  {
    label: 'ISO & Compliance',
    description: 'ISO management system implementation and certification readiness.',
    services: services.filter((s) => s.category === 'ISO & Compliance')
  },
  {
    label: 'Food Safety',
    description: 'Practical food safety systems built around your operations.',
    services: services.filter((s) => s.category === 'Food Safety')
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

// ── NAVIGATION ────────────────────────────────────────────────────────────────
export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/iso-auditing-services', label: 'Audit Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' }
];

// ── STATS ─────────────────────────────────────────────────────────────────────
export const stats = [
  { value: site.established, label: 'Established' },
  { value: site.consultants, label: 'Professional consultants' },
  { value: 'QCI', label: `Member ${site.qciMembership}` },
  { value: 'Pune', label: 'Maharashtra, India' }
];

// ── WHY CHOOSE US (10 points – client approved) ────────────────────────────────
export const whyChooseUs = [
  'Industry experts with practical implementation experience.',
  'Customized solutions tailored to your business processes.',
  'End-to-end support from planning to successful certification.',
  'Practical documentation—not just templates.',
  'Internal auditor and employee training programs.',
  'Pre-certification mock audits to ensure readiness.',
  'Regulatory compliance and risk reduction.',
  'Faster implementation with measurable business benefits.',
  'Post-certification support for continual improvement.',
  'Proven methodologies delivering sustainable compliance.'
];

// ── PROCESS STEPS (10 steps – client approved) ────────────────────────────────
export const processSteps = [
  {
    title: 'Initial Discussion',
    text: 'Understanding your business type, certification objective, timeline and current system status.'
  },
  {
    title: 'Site Assessment',
    text: 'On-site or remote review of your current processes, documentation and compliance maturity.'
  },
  {
    title: 'Gap Analysis',
    text: 'Identifying gaps between your current systems and the target standard requirements.'
  },
  {
    title: 'Project Planning',
    text: 'A practical roadmap is prepared with documentation milestones, training schedule and audit dates.'
  },
  {
    title: 'Documentation',
    text: 'Building quality manuals, SOPs, records, checklists and forms aligned to the chosen standard.'
  },
  {
    title: 'Implementation',
    text: 'Supporting your team to adopt the system in day-to-day operations with structured guidance.'
  },
  {
    title: 'Training',
    text: 'Role-wise awareness and competence building so all staff understand their responsibilities.'
  },
  {
    title: 'Internal Audit',
    text: 'Conducting internal audits to verify system effectiveness and close non-conformities before certification.'
  },
  {
    title: 'Certification Support',
    text: 'Coordinating with the certification body, reviewing evidence and providing final readiness support.'
  },
  {
    title: 'Post-Certification Support',
    text: 'Ongoing support for continual improvement, surveillance audits and system maintenance.'
  }
];

// ── TRUST AREAS ───────────────────────────────────────────────────────────────
export const trustAreas = [
  'Food safety management systems',
  'ISO quality & EHS standards',
  'HACCP & hygiene practices',
  'Laboratory & inspection accreditation',
  'FSSAI / FoSTaC training',
  'Documentation and audit readiness'
];

// ── INDUSTRIES SERVED (18 industries – client approved) ───────────────────────
export const industriesServed = [
  { name: 'Food Processing', icon: 'factory' },
  { name: 'Dairy', icon: 'dairy' },
  { name: 'Beverage', icon: 'beverage' },
  { name: 'Bakery & Confectionery', icon: 'bakery' },
  { name: 'Edible Oils', icon: 'oils' },
  { name: 'Spices & Seasonings', icon: 'spices' },
  { name: 'Seafood', icon: 'seafood' },
  { name: 'Meat & Poultry', icon: 'meat' },
  { name: 'Nutraceuticals & Health Supplements', icon: 'nutra' },
  { name: 'Cosmetics', icon: 'cosmetics' },
  { name: 'Packaging Materials', icon: 'packaging' },
  { name: 'Chemical Industries', icon: 'chemical' },
  { name: 'Laboratories', icon: 'lab' },
  { name: 'Inspection Bodies', icon: 'inspection' },
  { name: 'Warehousing & Logistics', icon: 'logistics' },
  { name: 'Agriculture & Primary Production', icon: 'agriculture' },
  { name: 'Hospitality & Catering', icon: 'hospitality' },
  { name: 'Manufacturing Industries', icon: 'manufacturing' }
];

// ── BUSINESS RESULTS (10 results – client approved) ───────────────────────────
export const businessResults = [
  'Successful certification with confidence.',
  'Improved operational efficiency and productivity.',
  'Reduced business and food safety risks.',
  'Enhanced customer confidence and market credibility.',
  'Better regulatory compliance.',
  'Reduced waste and operational costs.',
  'Stronger quality and food safety culture.',
  'Improved supplier performance.',
  'Increased export opportunities.',
  'Sustainable business growth and continual improvement.'
];

// ── VISION & MISSION ──────────────────────────────────────────────────────────
export const vision =
  'To be India\'s most trusted and respected food industry consulting organization, empowering businesses with world-class solutions in food safety, quality, regulatory compliance, and sustainable manufacturing through innovation, integrity, and technical excellence.';

export const mission = [
  'Delivering end-to-end consulting for food processing plant setup, expansion, and modernization.',
  'Helping organizations implement and maintain internationally recognized management systems, including ISO, FSSC, HACCP, GMP, and NABL standards.',
  'Supporting businesses in achieving compliance with FSSAI regulations and global food safety requirements.',
  'Conducting professional audits, gap assessments, and compliance evaluations that drive continual improvement.',
  'Providing high-quality ISO and FSSAI training programs that build competent teams and a strong food safety culture.',
  'Assisting clients in selecting efficient technologies, equipment, and processes to improve productivity and product quality.',
  'Building long-term partnerships through technical expertise, ethical practices, personalized service, and measurable business outcomes.',
  'Promoting innovation, sustainability, food safety, and customer satisfaction in every project we undertake.'
];

export const coreCommitment =
  'Transforming Food Businesses through Excellence in Consulting, Compliance, Quality, Food Safety, and Continuous Improvement.';

// ── AUDIT STANDARDS WE AUDIT ──────────────────────────────────────────────────
export const auditStandardCategories = [
  {
    category: 'Quality Management',
    icon: 'qms',
    standards: [
      {
        name: 'ISO 9001:2015 – Quality Management System (QMS)',
        points: [
          'Process effectiveness and continual improvement audits.',
          'Customer satisfaction and quality performance evaluation.',
          'Risk-based quality management assessment.'
        ]
      }
    ]
  },
  {
    category: 'Food Safety',
    icon: 'food',
    standards: [
      {
        name: 'ISO 22000:2018 – Food Safety Management System (FSMS)',
        points: [
          'HACCP verification and validation audits.',
          'PRP, OPRP, and CCP effectiveness evaluation.',
          'Food safety culture assessment.',
          'Food fraud and food defense verification.'
        ]
      },
      {
        name: 'FSSC 22000 Version 7',
        points: [
          'Complete FSSC 22000 Version 7 compliance audits.',
          'Additional FSSC requirements assessment.',
          'Food Safety & Quality Culture evaluation.',
          'Environmental monitoring verification.',
          'Supplier management and food fraud assessment.',
          'Certification readiness audits.'
        ]
      }
    ]
  },
  {
    category: 'Environmental Management',
    icon: 'env',
    standards: [
      {
        name: 'ISO 14001:2015 – Environmental Management System',
        points: [
          'Environmental legal compliance verification.',
          'Waste, pollution, and sustainability performance assessment.',
          'Environmental risk evaluation.'
        ]
      }
    ]
  },
  {
    category: 'Occupational Health & Safety',
    icon: 'ohs',
    standards: [
      {
        name: 'ISO 45001:2018 – Occupational Health & Safety',
        points: [
          'Hazard identification and risk assessment.',
          'Workplace safety compliance evaluation.',
          'Emergency preparedness assessment.'
        ]
      }
    ]
  },
  {
    category: 'Energy Management',
    icon: 'energy',
    standards: [
      {
        name: 'ISO 50001 – Energy Management System',
        points: [
          'Energy performance evaluation.',
          'Energy-saving opportunity identification.',
          'Sustainability improvement recommendations.'
        ]
      }
    ]
  },
  {
    category: 'Medical Devices',
    icon: 'medical',
    standards: [
      {
        name: 'ISO 13485 – Medical Device Quality Management',
        points: [
          'Medical device regulatory compliance verification.',
          'Risk management assessment.',
          'Process validation audits.'
        ]
      }
    ]
  },
  {
    category: 'Information Security',
    icon: 'infosec',
    standards: [
      {
        name: 'ISO/IEC 27001 – Information Security Management System',
        points: [
          'Information security risk assessment.',
          'Cybersecurity controls verification.',
          'Data protection compliance evaluation.'
        ]
      }
    ]
  },
  {
    category: 'Laboratory Accreditation',
    icon: 'lab',
    standards: [
      {
        name: 'ISO/IEC 17025 – Testing & Calibration Laboratories',
        points: [
          'Technical competence assessment.',
          'Method validation verification.',
          'Measurement uncertainty evaluation.',
          'NABL accreditation readiness audits.'
        ]
      }
    ]
  },
  {
    category: 'Inspection Bodies',
    icon: 'inspection',
    standards: [
      {
        name: 'ISO/IEC 17020 – Inspection Bodies',
        points: [
          'Inspection process verification.',
          'Impartiality and independence assessment.',
          'Accreditation compliance evaluation.'
        ]
      }
    ]
  }
];

// ── AUDIT SERVICE TYPES ────────────────────────────────────────────────────────
export const auditServiceTypes = [
  'Internal Audits',
  'Supplier Audits',
  'Vendor Qualification Audits',
  'Compliance Audits',
  'Mock Certification Audits',
  'Surveillance Audit Preparation',
  'Integrated Management System Audits',
  'Multi-site Audits',
  'Technical Compliance Audits'
];

// ── AUDIT METHODOLOGY ─────────────────────────────────────────────────────────
export const auditMethodology = [
  'Detailed Gap Analysis',
  'Process-Based Auditing',
  'Risk-Based Assessment',
  'Objective Evidence Collection',
  'Employee Interviews',
  'Documentation Review',
  'Site Inspection',
  'Root Cause Analysis',
  'Corrective Action Planning',
  'Verification of Effectiveness'
];

// ── WHY OUR AUDIT SERVICES ────────────────────────────────────────────────────
export const whyAuditServices = [
  'Certified and experienced ISO Lead Auditors.',
  'Extensive cross-industry auditing expertise.',
  'Practical recommendations—not just audit findings.',
  'Independent, objective, and value-added audits.',
  'Focus on operational excellence and continual improvement.',
  'International best practices aligned with ISO standards.',
  'Customized audit programs based on organizational needs.',
  'Comprehensive audit reports with prioritized action plans.',
  'Support for successful certification and accreditation.',
  'Post-audit guidance to ensure sustainable compliance.'
];

// ── GALLERY ───────────────────────────────────────────────────────────────────
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

// ── CERTIFICATES ──────────────────────────────────────────────────────────────
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

// ── TRUST BADGES ──────────────────────────────────────────────────────────────
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

// ── TESTIMONIALS ──────────────────────────────────────────────────────────────
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

// ── FAQ ───────────────────────────────────────────────────────────────────────
export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'Which industries does Samarth Technoologies work with?',
    answer:
      'We support food manufacturing, processing and testing businesses, along with manufacturing, laboratory and service organisations pursuing ISO, FSSAI, HACCP, BRC and related certifications. Our client base spans food processing, dairy, beverage, bakery, seafood, nutraceuticals, cosmetics, packaging, laboratories, inspection bodies, hospitality and more.'
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

// ── HELPER ────────────────────────────────────────────────────────────────────
export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
