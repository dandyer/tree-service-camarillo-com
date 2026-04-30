export interface Business {
  name: string; niche: string; tagline: string;
  phone: string; phoneRaw: string; email: string; website: string;
  address: { city: string; state: string; stateCode: string; zip: string };
  hours: { weekdays: string; saturday: string; sunday: string };
  owner: { name: string; title: string; photo: string };
  yearEstablished: number; experience: number; jobsCompleted: number; satisfaction: number;
  social: { facebook: string; instagram: string; yelp: string };
  formspreeId: string;
  serviceArea: string;
  licenseNumber: string;
  analyticsId: string;
}

export const business: Business = {
  name: "Camarillo Tree Service",
  niche: "tree service",
  tagline: "Expert tree removal, trimming & care serving Camarillo and Ventura County",
  phone: "(805) 900-3459",
  phoneRaw: "8059003459",
  email: "info@tree-service-camarillo.com",
  website: "https://tree-service-camarillo.com",
  address: { city: "Camarillo", state: "California", stateCode: "CA", zip: "93010" },
  hours: { weekdays: "Mon-Fri 7am-6pm", saturday: "Sat 7am-4pm", sunday: "Closed" },
  owner: { name: "Dan", title: "Owner & Certified Arborist", photo: "/owner.jpg" },
  yearEstablished: 2010,
  experience: 15,
  jobsCompleted: 1840,
  satisfaction: 99,
  social: { facebook: "", instagram: "", yelp: "" },
  formspreeId: "",
  analyticsId: "site_fa7d4621",
  serviceArea: "Camarillo, Oxnard, Ventura, Thousand Oaks, Simi Valley, Moorpark, Newbury Park",
  licenseNumber: "#978214",
};
