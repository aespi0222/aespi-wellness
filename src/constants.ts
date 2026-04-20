export const BRAND = {
  name: "AESPI",
  tagline: "Igniting Muscles",
  logo: "/images/logo.png",
  address: "2 Venture Drive, #02-22 Vision Exchange, Singapore 608526",
  whatsapp: "+65 8799 7199",
  whatsappUrl: "https://wa.me/6587997199",
  phoneUrl: "tel:+6587997199",
  email: "enquiry@aespi.com.sg",
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
    title: "BIXEPS Pro",
    subtitle: "Igniting Muscles",
    image: "/images/bixeps.jpg",
    description: "Gentle muscle activation using magnetic mitohormesis. Improve balance and strength without physical strain. Perfect for seniors.",
    benefits: ["No Sweat", "No Strain", "Muscle Activation", "Joint Pain Relief"],
    cta: "Learn More",
    link: "/bixeps",
  },
  {
    id: "h2",
    title: "Molecular Hydrogen",
    subtitle: "Recover Faster",
    image: "/images/hydrogen.png",
    description: "A relaxing cellular therapy that reduces inflammation and improves sleep quality. Rejuvenate your body from the inside out.",
    benefits: ["Boosts Energy", "Fights Inflammation", "Improves Sleep", "Supports Gut Health", "Rejuvenate Skin"],
    cta: "Learn More",
    link: "/h2-hydrogen",
  },
  {
    id: "powerplate",
    title: "Power Plate",
    subtitle: "Move Better",
    image: "/images/powerplate.jpg",
    description: "Low-impact vibration technology to improve bone density and circulation. A safe way to stay active and mobile.",
    benefits: ["Move Better", "Feel Better", "Live Better", "Low Impact"],
    cta: "Learn More",
    link: "/powerplate",
  },
  {
    id: "inbody",
    title: "Body Composition",
    subtitle: "Know Your Body",
    image: "/images/body-composition.png",
    description: "Medical-grade analysis to track muscle mass and sarcopenia risk. Understand your health to age with confidence.",
    benefits: ["Body Composition", "Muscle Fat", "Obesity", "Muscle Balance", "Sarcopenia Risk"],
    cta: "Learn More",
    link: "/body-composition",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "James",
    age: "",
    content: "I can walk and can jog on the spot for a few seconds now. My walking is much more stable after starting BIXEPS Pro.",
    service: "BIXEPS Pro"
  },
  {
    id: 2,
    name: "Jenny Sim",
    age: "",
    content: "I can now get up from a squatting position without needing to hold onto someone or something for support. It's a huge improvement.",
    service: "BIXEPS Pro"
  },
  {
    id: 3,
    name: "Josephine Ho",
    age: "",
    content: "I walk faster now and with more power. I don't get tired as easily as I used to. BIXEPS Pro has given me back my energy.",
    service: "BIXEPS Pro"
  },
  {
    id: 4,
    name: "Angela Chan",
    age: "",
    content: "I had meniscus tears in both knees. After BIXEPS Pro, I have no more knee pain and can finally resume my regular exercises.",
    service: "BIXEPS Pro"
  },
  {
    id: 5,
    name: "Ng Ah Siam",
    age: "",
    content: "I have much better stability now and don't wobble when changing clothes. My calf muscles feel stronger and I have more stamina.",
    service: "BIXEPS Pro"
  },
  {
    id: 6,
    name: "Foo Yong Hong",
    age: "53",
    content: "The severe pain at my hips has reduced significantly. The sessions are very comfortable and convenient. It really works!",
    service: "BIXEPS Pro"
  },
  {
    id: 7,
    name: "Alvin Tan",
    age: "59",
    content: "Increased strength and stamina. I'm now running and hiking 7km twice weekly. It has really helped my injury recovery and metabolic rate.",
    service: "BIXEPS Pro"
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
