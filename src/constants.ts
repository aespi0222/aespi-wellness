export const BRAND = {
  name: "AESPI",
  tagline: "Live Stronger. Age Better.",
  logo: "/images/logo.png",
  address: "2 Venture Drive, #01-28/29 Vision Exchange, Singapore 608526",
  whatsapp: "+65 8799 7199",
  whatsappUrl: "https://wa.me/6587997199",
  phoneUrl: "tel:+6587997199",
  email: "hello@aespi.com.sg",
  socials: {
    facebook: "https://www.facebook.com/aespisp",
    instagram: "https://www.instagram.com/aespi_sp",
    linkedin: "https://www.linkedin.com/company/aespi",
  },
  formspreeId: "mqeweoda",
  openingHours: [
    { day: "Mon - Fri", time: "9:00 am – 6:00 pm" },
    { day: "Saturday", time: "9:00 am - 3:00 pm" },
    { day: "Sunday / Public Holidays", time: "Closed" },
  ],
};

export const SERVICES = [
  {
    id: "bixeps",
    title: "Muscle Resilience",
    subtitle: "Pillar 01: Sarcopenia Prevention",
    image: "/images/bixeps.jpg",
    description: "The core of physical independence. Our non-invasive technology activates muscle fibers using gentle magnetic fields, maintaining strength and mobility without traditional physical strain.",
    benefits: ["Sarcopenia Prevention", "Neuromuscular Activation", "Biological Resilience", "Zero Strain Mobility"],
    cta: "Restore Muscle Vitality",
    link: "/bixeps",
  },
  {
    id: "h2",
    title: "Cellular Recovery",
    subtitle: "Pillar 02: Oxidative Stress Management",
    image: "/images/hydrogen.png",
    description: "Rejuvenate your system from the source. High-purity Molecular Hydrogen therapy targets chronic inflammation, accelerating systemic recovery and improving cognitive clarity.",
    benefits: ["Inflammation Reduction", "Enhanced Recovery", "Cognitive Health Span", "Sleep Optimization"],
    cta: "Optimise Cellular Health",
    link: "/h2-hydrogen",
  },
  {
    id: "powerplate",
    title: "Functional Movement",
    subtitle: "Pillar 03: Stability & Bone Density",
    image: "/images/powerplate.jpg",
    description: "Precision-driven stability for active living. Whole-body vibration training enhances motor control and bone mineral density, providing a safe foundation for confident movement.",
    benefits: ["Bone Density Support", "Stability & Proprioception", "Improved Circulation", "Low-Impact Training"],
    cta: "Enhance Movement",
    link: "/powerplate",
  },
  {
    id: "inbody",
    title: "Longevity Biometrics",
    subtitle: "Pillar 04: Data-Driven Calibration",
    image: "/images/body-composition.png",
    description: "Know your biological markers. Medical-grade analysis tracks your health span through muscle-to-fat ratios and sarcopenia risk, allowing for a precise longevity strategy.",
    benefits: ["Precision Biometrics", "Sarcopenia Screening", "Visceral Fat Data", "Health Span Tracking"],
    cta: "Analyse Your Markers",
    link: "/body-composition",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "James",
    age: "",
    content: "I can walk and can jog on the spot for a few seconds now. My walking is much more stable after starting the Longevity Protocol.",
    service: "Mobility & Strength"
  },
  {
    id: 2,
    name: "Jenny Sim",
    age: "",
    content: "I can now get up from a squatting position without needing to hold onto someone or something for support. It's a huge improvement in my daily autonomy.",
    service: "Muscle Resilience"
  },
  {
    id: 3,
    name: "Josephine Ho",
    age: "",
    content: "I walk faster now and with more power. I don't get tired as easily as I used to. The ecosystem approach has given me back my energy.",
    service: "Energy & Vitality"
  },
  {
    id: 4,
    name: "Angela Chan",
    age: "",
    content: "I had meniscus tears in both knees. After the recovery sessions, I have no more knee pain and can finally resume my regular exercises with confidence.",
    service: "Joint Recovery"
  },
  {
    id: 5,
    name: "Ng Ah Siam",
    age: "",
    content: "I have much better stability now and don't wobble when changing clothes. My foundation feels stronger and I have more stamina for my grandkids.",
    service: "Functional Balance"
  },
  {
    id: 6,
    name: "Foo Yong Hong",
    age: "53",
    content: "The severe pain at my hips has reduced significantly. The non-invasive nature of the protocols is what I appreciate most. It really works!",
    service: "Pain Management"
  },
  {
    id: 7,
    name: "Alvin Tan",
    age: "59",
    content: "Increased strength and stamina. I'm now running and hiking 7km twice weekly. It has really helped my biological recovery rate.",
    service: "Longevity Optimization"
  }
];

export const RESEARCH = [
  {
    id: "bixeps-aging-2023",
    serviceId: "bixeps",
    title: "Brief, weekly magnetic muscle therapy improves mobility and lean body mass in older adults: a Southeast Asia community case study",
    source: "Aging (Albany NY)",
    link: "https://www.aging-us.com/article/204597/text",
    type: "paper"
  },
  {
    id: "bixeps-sciencedirect-2022",
    serviceId: "bixeps",
    title: "Magnetic field therapy enhances muscle mitochondrial bioenergetics and attenuates systemic ceramide levels following ACL reconstruction",
    source: "Journal of Orthopaedic Translation",
    link: "https://www.sciencedirect.com/science/article/pii/S2214031X22000961?via%3Dihub",
    type: "paper"
  },
  {
    id: "bixeps-jcm-2024",
    serviceId: "bixeps",
    title: "Clinical Study on Magnetic Muscle Therapy (JCM)",
    source: "Journal of Clinical Medicine",
    link: "https://www.mdpi.com/2077-0383/14/18/6413",
    type: "paper"
  },
  {
    id: "h2-pmc-2017",
    serviceId: "h2",
    title: "Molecular hydrogen: a therapeutic medical gas with innovative potential",
    source: "Heliyon / PMC",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5731988/",
    type: "paper"
  },
  {
    id: "h2-nature-2022",
    serviceId: "h2",
    title: "Long-term and daily use of molecular hydrogen induces reprogramming of liver metabolism",
    source: "Scientific Reports (Nature)",
    link: "https://www.nature.com/articles/s41598-022-07710-6",
    type: "paper"
  },
  {
    id: "h2-medsci-2024",
    serviceId: "h2",
    title: "Using oral molecular hydrogen supplements to combat microinflammation in humans",
    source: "Int. J. Med. Sci.",
    link: "https://www.medsci.org/v21p2390.htm",
    type: "paper"
  },
  {
    id: "powerplate-pmc-2024",
    serviceId: "powerplate",
    title: "Impact of Whole-Body Vibration Therapy in Elderly Populations: A Scoping Review",
    source: "PubMed Central (PMC)",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11927757/",
    type: "paper"
  },
  {
    id: "powerplate-pmc-2018",
    serviceId: "powerplate",
    title: "Metabolic effect of bodyweight whole-body vibration in a 20-min exercise session",
    source: "PubMed Central (PMC)",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5792008/",
    type: "paper"
  }
];

export const PRESS = [
  {
    id: "st-bixeps-1",
    serviceId: "bixeps",
    title: "Magnetic pulses lower blood sugar of diabetic patients with excess belly fat: Study",
    source: "The Straits Times",
    link: "https://www.straitstimes.com/singapore/health/magnetic-pulses-lower-blood-sugar-of-diabetic-patients-with-excess-belly-fat-study",
    date: "2023"
  },
  {
    id: "st-bixeps-2",
    serviceId: "bixeps",
    title: "Magnetic pulses boost breast cancer chemo, potentially reducing side effects: NUS study",
    source: "The Straits Times",
    link: "https://www.straitstimes.com/singapore/magnetic-pulses-boost-breast-cancer-chemo-potentially-reducing-side-effects-nus-study",
    date: "2024"
  },
  {
    id: "st-bixeps-3",
    serviceId: "bixeps",
    title: "Clinical study in HK confirms Singapore's Bixeps machine improves muscle strength",
    source: "The Straits Times",
    link: "https://www.straitstimes.com/singapore/clinical-study-in-hk-confirms-singapores-bixeps-machine-improves-muscle-strength",
    date: "2023"
  },
  {
    id: "st-bixeps-4",
    serviceId: "bixeps",
    title: "Magnetic pulse therapy strengthens muscles and prevents frailty, especially for elderly",
    source: "The Straits Times",
    link: "https://www.straitstimes.com/singapore/magnetic-pulse-therapy-strengthens-muscles-and-prevents-frailty-especially-for-elderly",
    date: "2022"
  },
  {
    id: "st-bixeps-5",
    serviceId: "bixeps",
    title: "NUS scientists develop painless way to shrink breast cancer using magnetic fields",
    source: "The Straits Times",
    link: "https://www.straitstimes.com/singapore/health/nus-scientists-develop-painless-way-to-shrink-breast-cancer-using-magnetic-fields",
    date: "2021"
  },
  {
    id: "st-bixeps-6",
    serviceId: "bixeps",
    title: "Recovering weekend warriors can flex their muscles again thanks to Bixeps",
    source: "The Straits Times",
    link: "https://www.straitstimes.com/sport/sports-science-recovering-weekend-warriors-can-flex-their-muscles-again-thanks-to-bixeps",
    date: "2021"
  },
  {
    id: "st-bixeps-7",
    serviceId: "bixeps",
    title: "It's not just muscles that could get a boost from Bixeps",
    source: "The Straits Times",
    link: "https://www.straitstimes.com/singapore/its-not-just-muscles-that-could-get-a-boost-from-biceps",
    date: "2021"
  }
];
