export interface Service {
  slug: string; name: string; description: string;
  metaTitle: string; metaDescription: string;
  heroHeading: string; heroSubheading: string;
  body: string[];
  features: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "tree-removal",
    name: "Tree Removal",
    description: "Safe, efficient removal of hazardous, dead, or unwanted trees of all sizes throughout Camarillo and Ventura County.",
    metaTitle: "Tree Removal Camarillo CA | Camarillo Tree Service",
    metaDescription: "Professional tree removal in Camarillo, CA. Licensed, insured, free estimates. Call (916) 234-0003.",
    heroHeading: "Tree Removal in Camarillo, CA",
    heroSubheading: "Safe, efficient tree removal for hazardous, dead, or unwanted trees — free estimates.",
    body: [
      "Tree removal is serious work that requires training, the right equipment, and a methodical approach — especially in Camarillo's neighborhoods where homes, fences, and utilities are in close proximity to mature trees. We've safely removed trees of every size throughout Ventura County, from small ornamentals to 100-foot eucalyptus.",
      "Our process starts with a thorough assessment — we look at the tree's health, lean, proximity to structures, and the best removal route. For trees near homes or power lines, we use sectional removal: taking the tree down in controlled pieces from the top down rather than felling it whole. This protects your property and gives us full control throughout the job.",
      "We handle all the cleanup — branches, trunk sections, and debris are removed from your property. We can also grind the stump on the same visit if you'd like a clean finish. Call for a free estimate — most residential tree removals can be quoted over the phone with a few photos.",
    ],
    features: [
      "All sizes — small ornamentals to large eucalyptus",
      "Sectional removal near homes and utilities",
      "Crane-assisted removal available",
      "Complete debris cleanup included",
      "Stump grinding available",
      "Licensed & insured — CA license #978214",
    ],
    faq: [
      { q: "How do I know if a tree needs to be removed?", a: "Signs include large dead branches, trunk decay or cavities, significant lean toward structures, roots lifting pavement or damaging foundations, and disease that can't be treated. We offer free assessments and will always tell you honestly if removal is necessary or if pruning can solve the problem." },
      { q: "Do I need a permit to remove a tree in Camarillo?", a: "Camarillo requires a permit to remove certain protected species and heritage trees. We're familiar with local ordinances and will let you know if a permit is needed before we start." },
    ],
  },
  {
    slug: "tree-trimming",
    name: "Tree Trimming & Pruning",
    description: "Professional trimming improves tree health, safety, and appearance — using proper arborist cuts that don't harm your trees.",
    metaTitle: "Tree Trimming Camarillo CA | Camarillo Tree Service",
    metaDescription: "Expert tree trimming and pruning in Camarillo, CA. Proper arborist cuts for health and safety. Call (916) 234-0003.",
    heroHeading: "Tree Trimming & Pruning in Camarillo",
    heroSubheading: "Proper arborist pruning for healthier trees, better views, and safer properties.",
    body: [
      "Tree trimming done wrong can do more harm than the problem you were trying to solve. Topping — cutting branches back to stubs — stresses trees severely and leads to weak, fast-growing regrowth that creates more problems than it solves. Proper pruning removes dead, crossing, or hazardous branches using cuts that help the tree heal naturally.",
      "We provide crown cleaning (removing dead and diseased branches), crown thinning (improving light and air penetration), crown raising (lifting the canopy for clearance), and vista pruning (selective removal to improve views without harming the tree). Every cut has a purpose.",
      "Camarillo's mature neighborhoods have beautiful trees worth preserving. We believe in working with trees, not just cutting them — trimming properly now extends the life of the tree and keeps your property safe for decades.",
    ],
    features: [
      "Proper ISA-standard pruning cuts",
      "Crown cleaning, thinning, and raising",
      "Vista pruning for view properties",
      "No harmful topping",
      "Deadwood removal",
      "Clearance from structures and power lines",
    ],
    faq: [
      { q: "How often should I have my trees trimmed?", a: "Most trees benefit from pruning every 3–5 years. Trees near structures, power lines, or with significant deadwood may need more frequent attention. We'll give you a maintenance schedule recommendation after the first trim." },
    ],
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    description: "Remove unsightly, hazardous stumps quickly with professional stump grinding equipment.",
    metaTitle: "Stump Grinding Camarillo CA | Camarillo Tree Service",
    metaDescription: "Fast stump grinding in Camarillo, CA. Remove stumps of any size. Free estimates — call (916) 234-0003.",
    heroHeading: "Stump Grinding in Camarillo, CA",
    heroSubheading: "Quick, thorough stump removal — we grind below grade so you can replant or sod over it.",
    body: [
      "Old stumps are more than an eyesore — they're tripping hazards, obstacles for lawn mowing, and can attract termites, carpenter ants, and other insects. Stump grinding is the fastest and most effective way to remove them.",
      "We use commercial-grade stump grinders that can remove stumps of any size down to 6–12 inches below grade. After grinding, the hole is filled with wood chips from the grinding process. You can plant new grass or sod over the area within a few weeks as the material breaks down.",
    ],
    features: [
      "Commercial-grade grinders for any size stump",
      "Grinding 6–12 inches below grade",
      "Debris filled back in after grinding",
      "Multiple stumps — discounted pricing",
      "Same-day service often available",
    ],
    faq: [
      { q: "Do you remove the stump completely or just grind it?", a: "We grind it down 6–12 inches below grade. The root system stays in the ground but will decompose naturally. This is sufficient for replanting grass or installing new landscaping over the area." },
    ],
  },
  {
    slug: "emergency-tree-service",
    name: "Emergency Tree Service",
    description: "24/7 emergency response for storm-damaged, fallen, or hazardous trees threatening your property.",
    metaTitle: "Emergency Tree Service Camarillo CA | Camarillo Tree Service",
    metaDescription: "24/7 emergency tree removal in Camarillo, CA. Storm damage, fallen trees, hazardous limbs. Call (916) 234-0003.",
    heroHeading: "Emergency Tree Service in Camarillo",
    heroSubheading: "24/7 response for storm damage, fallen trees, and immediate hazards.",
    body: [
      "Camarillo's Santa Ana wind events and winter storms can bring down branches and whole trees with little warning. When a tree falls on your fence, roof, or driveway, you need help fast. We offer 24/7 emergency response throughout Ventura County.",
      "We prioritize safety first — securing the scene, removing immediate hazards, and protecting your property from further damage. We work with all major homeowner's insurance providers and can help document the damage for your claim.",
    ],
    features: [
      "24/7 emergency response",
      "Storm damage specialists",
      "Insurance documentation assistance",
      "Immediate hazard mitigation",
      "Serving all of Ventura County",
    ],
    faq: [
      { q: "Do you work with insurance companies?", a: "Yes — we can help document damage for your homeowner's insurance claim and work directly with adjusters. We provide detailed written reports for all emergency jobs." },
    ],
  },
  {
    slug: "palm-tree-trimming",
    name: "Palm Tree Trimming",
    description: "Proper palm skinning and frond removal to keep Camarillo's palms healthy, safe, and looking their best.",
    metaTitle: "Palm Tree Trimming Camarillo CA | Camarillo Tree Service",
    metaDescription: "Professional palm tree trimming in Camarillo, CA. Keep palms healthy and fire-safe. Call (916) 234-0003.",
    heroHeading: "Palm Tree Trimming in Camarillo, CA",
    heroSubheading: "Proper frond removal and palm skinning for health, safety, and curb appeal.",
    body: [
      "Palms are a defining feature of Southern California landscaping, but untrimmed palms can become fire hazards — dried fronds are highly flammable and can carry embers during a fire event. Regular trimming also prevents falling fronds, which can damage cars, roofs, and injure people.",
      "Proper palm trimming removes dead and brown fronds, seed pods, and loose bark. We use the right equipment for palms of all heights and never over-trim — removing green fronds stresses the palm and slows its growth. Camarillo's palms deserve proper care.",
    ],
    features: [
      "Dead frond and seed pod removal",
      "Palm skinning (boot removal)",
      "All heights — including tall date palms",
      "Fire hazard reduction",
      "Cleanup included",
    ],
    faq: [
      { q: "How often should palm trees be trimmed?", a: "Most palms in Southern California need trimming once a year. Faster-growing species or palms near structures may need attention more frequently." },
    ],
  },
  {
    slug: "lot-clearing",
    name: "Lot Clearing",
    description: "Full vegetation clearing for residential lots, commercial properties, and development sites throughout Ventura County.",
    metaTitle: "Lot Clearing Camarillo CA | Camarillo Tree Service",
    metaDescription: "Professional lot clearing in Camarillo and Ventura County. Trees, brush, and vegetation removal. Call (916) 234-0003.",
    heroHeading: "Lot Clearing in Camarillo & Ventura County",
    heroSubheading: "Complete lot clearing for new construction, fire breaks, and overgrown properties.",
    body: [
      "Whether you're preparing a lot for new construction, clearing a fire break around your home, or reclaiming an overgrown property, we have the equipment and crew to get it done efficiently. We handle trees, brush, stumps, and debris removal.",
      "Ventura County's fire risk makes defensible space clearing especially important for hillside properties in and around Camarillo. We're familiar with CAL FIRE defensible space requirements and can help ensure your clearing meets current regulations.",
    ],
    features: [
      "Trees, brush, and vegetation removal",
      "Stump grinding included",
      "CAL FIRE defensible space compliance",
      "Debris hauling and disposal",
      "Hillside and difficult access properties",
    ],
    faq: [
      { q: "Do you handle permits for lot clearing?", a: "We can advise on permit requirements in Camarillo and Ventura County. Some clearing projects in wildland-urban interface areas may require permits — we'll help you navigate the process." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug);
}
