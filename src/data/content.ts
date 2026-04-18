export interface SiteContent {
  hero: { heading: string; subheading: string; serviceArea: string };
  services: { heading: string; subheading: string };
  howItWorks: { heading: string; subheading: string; steps: { title: string; description: string }[] };
  whyUs: { heading: string; items: { title: string; desc: string }[] };
  serviceAreas: { heading: string; subheading: string };
  faq: { q: string; a: string }[];
  cta: { heading: string; subheading: string; buttonText: string };
  about: { heading: string; body: string[]; ownerQuote: string };
}

export const content: SiteContent = {
  hero: {
    heading: "Camarillo's Most Trusted Tree Service — Licensed Arborists",
    subheading: "Professional tree removal, trimming, and emergency service throughout Camarillo and Ventura County. Free estimates.",
    serviceArea: "Serving Camarillo, Oxnard, Ventura & Surrounding Cities",
  },
  services: {
    heading: "Tree Services",
    subheading: "From routine trimming to emergency storm response, we handle it all safely and professionally.",
  },
  howItWorks: {
    heading: "How It Works",
    subheading: "Simple, professional, and stress-free.",
    steps: [
      { title: "Free Estimate", description: "We come to your property, assess the trees, and give you a clear written quote. No pressure, no surprises." },
      { title: "Scheduled Service", description: "We arrive on time with the right crew and equipment for the job. Safety first on every project." },
      { title: "Clean Completion", description: "All debris is removed, your property is cleaned up, and we walk you through the completed work before leaving." },
    ],
  },
  whyUs: {
    heading: "Why Camarillo Chooses Us",
    items: [
      { title: "Certified Arborist", desc: "Our team includes ISA-certified arborists who understand tree biology and best-practice pruning." },
      { title: "Licensed & Insured", desc: "CA contractor license #978214. Fully insured for your protection." },
      { title: "15 Years in Ventura County", desc: "We know the local trees, conditions, and regulations — no learning curve on your property." },
      { title: "Honest Assessments", desc: "We'll tell you if a tree doesn't need removal. We're here to help, not to sell unnecessary work." },
      { title: "24/7 Emergency Service", desc: "Santa Ana winds and storms don't wait for business hours. Neither do we." },
      { title: "Complete Cleanup", desc: "We leave your property cleaner than we found it, every single time." },
    ],
  },
  serviceAreas: {
    heading: "Serving Ventura County",
    subheading: "From Camarillo to Thousand Oaks, Oxnard to Simi Valley — we come to you.",
  },
  faq: [
    { q: "Do I need a permit to remove a tree in Camarillo?", a: "Camarillo requires permits for removal of certain native and heritage trees. We're familiar with local ordinances and will let you know if a permit is required before starting work. We handle the permit process for you." },
    { q: "How much does tree removal cost in Camarillo?", a: "Small tree removals start around $300–$500. Medium trees run $600–$1,200. Large trees or those in difficult locations (near structures, power lines) typically run $1,200–$3,000+. We provide free written estimates so you know the exact cost before any work begins." },
    { q: "How quickly can you respond to an emergency?", a: "For immediate hazards — a fallen tree on a structure or blocking access — we typically respond within 2–4 hours. For urgent but non-emergency situations, we can usually schedule within 24–48 hours." },
    { q: "Do you work in the rain or wind?", a: "We work in most weather conditions but will delay tree work during active high wind events when it's not safe to operate in tree canopies. We'll communicate any weather delays promptly and reschedule as quickly as possible." },
    { q: "Do you clean up the wood and debris?", a: "Yes — complete cleanup is included in every job. We haul away all branches, trunk sections, and wood chips unless you'd like to keep the wood for firewood or chipping." },
  ],
  cta: {
    heading: "Get Your Free Estimate",
    subheading: "Call or text for a same-week estimate. Most jobs are scheduled within 5–7 business days.",
    buttonText: "Request Free Estimate",
  },
  about: {
    heading: "About Camarillo Tree Service",
    body: [
      "I started doing tree work in Ventura County straight out of school — first as a groundsman, then climbing, then working toward my ISA certification. After fifteen years in the industry I started my own company because I saw too many operations cutting corners on safety, using under-trained crews, and not being straight with customers about what work actually needed to be done.",
      "We operate differently. I'm on-site for every significant job. My crews are trained, experienced, and take pride in their work. When I give you an estimate, it's the number you'll see on the invoice — no hidden fees, no surprises. And if a tree doesn't need to come down, I'll tell you that too.",
      "Camarillo and Ventura County have some incredible mature trees worth preserving. We're not just in the business of removing trees — we're in the business of keeping trees healthy and properties safe. Those goals usually go together, and we're here to help you find the right balance for your property.",
    ],
    ownerQuote: "A tree that's been properly cared for over its lifetime is worth more than a new one — to the property, to the neighborhood, and to the environment.",
  },
};
