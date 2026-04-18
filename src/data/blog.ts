export interface BlogPost {
  slug: string; title: string; excerpt: string; publishedDate: string;
  metaTitle: string; metaDescription: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "santa-ana-winds-tree-safety",
    title: "How to Prepare Your Trees for Santa Ana Wind Season",
    excerpt: "Santa Ana winds can topple trees that look perfectly healthy. Here's what Camarillo homeowners should do before wind season to reduce risk.",
    publishedDate: "March 22, 2026",
    metaTitle: "Preparing Trees for Santa Ana Winds Camarillo | Camarillo Tree Service",
    metaDescription: "How to protect your property from Santa Ana wind damage — tree inspection and pruning tips for Camarillo homeowners.",
    content: "Every fall, the Santa Ana winds arrive in Ventura County with the potential to bring down branches and whole trees. Many homeowners don't think about their trees until after a wind event — but there's a lot you can do beforehand to dramatically reduce your risk.\n\nThe most important thing is to have a certified arborist assess your large trees before wind season. We're looking for several specific things: co-dominant stems (two trunks growing at a steep V angle, which creates a weak union that often fails in wind), large dead branches (widow makers), trees that have been topped (which creates weak, fast-growing regrowth), and trees with root problems indicated by soil heaving or fungal growth at the base.\n\nCrown thinning is one of the most effective things you can do for wind resistance. Thinning removes 15–25% of the canopy, allowing wind to pass through the tree rather than push against it like a sail. This reduces the force on the trunk and roots significantly — studies have shown properly thinned trees can withstand substantially higher wind speeds than dense, unpruned trees.\n\nFor eucalyptus trees specifically — very common in older Camarillo neighborhoods — the risk is particularly high. Eucalyptus are notoriously brittle and prone to sudden limb drop even in calm conditions. If you have large eucalyptus near structures, they deserve a professional assessment before every wind season.\n\nThe time to address tree hazards is before a storm, not during or after. A proactive inspection and any recommended work is almost always far less expensive than emergency response, cleanup, and property repairs after a tree comes down.",
  },
  {
    slug: "palm-tree-trimming-camarillo",
    title: "When and Why to Trim Your Palm Trees in Camarillo",
    excerpt: "Palm trees don't need frequent trimming, but when they do, the timing and technique matter. Here's what you need to know as a Southern California homeowner.",
    publishedDate: "February 14, 2026",
    metaTitle: "Palm Tree Trimming Camarillo CA | Camarillo Tree Service",
    metaDescription: "When to trim palm trees in Camarillo — and why over-trimming is one of the most common palm care mistakes.",
    content: "Palm trees are iconic in Southern California, and Camarillo's neighborhoods have plenty of them — queen palms, Mexican fan palms, date palms, and king palms are all common in the area. But they're often either neglected entirely or trimmed too aggressively. Both are problems.\n\nThe most common mistake homeowners make with palms is over-trimming. Removing green fronds — the living leaves — stresses the palm and slows growth. The only fronds that should be removed are brown, dead fronds and seed pods. A palm should have a full, round canopy of green fronds. If you can see a narrow 'pineapple' shape at the top with sparse fronds, it's been over-trimmed.\n\nFor timing, once a year is generally right for most palms in Camarillo. Spring is ideal — after the winter rains and before summer heat. This timing also addresses fire safety, since dry dead fronds are highly flammable and removing them before fire season is smart property management.\n\nFire safety is a real consideration with palms near structures. During a fire, dried fronds can ignite and shed burning material — this is called 'fire brand' activity and it's a documented ignition pathway for structures during wildland fires. Keeping palms trimmed and clean reduces this risk substantially.\n\nFor tall date palms or very large queen palms, trimming is not a DIY job. Working at height with palm fronds requires proper equipment and training. We trim palms of all sizes throughout Camarillo — call for a free estimate.",
  },
  {
    slug: "should-i-remove-or-save-my-tree",
    title: "Should You Remove That Tree or Try to Save It?",
    excerpt: "Not every declining tree needs to come down. Here's how to think through the decision — and what questions to ask a certified arborist.",
    publishedDate: "January 10, 2026",
    metaTitle: "Remove or Save a Tree? Camarillo Arborist Advice | Camarillo Tree Service",
    metaDescription: "How to decide if a declining tree should be removed or can be saved — advice from a Camarillo certified arborist.",
    content: "One of the most common calls we get is from homeowners who think a tree needs to come down but aren't sure. Sometimes they're right. Often, with proper care, the tree can be saved — which is usually better for everyone.\n\nHere are the factors that push toward removal: the tree has significant structural decay (soft wood, hollow sections, large cavities), it has a severe lean toward a structure that developed recently, it's a high-risk species in a high-risk location (like a eucalyptus overhanging a roof), or it's dead with no recovery potential. These situations call for removal.\n\nOn the other hand, thin canopy, some dead branches, or even some bark damage don't necessarily mean the tree is done. Trees are remarkably resilient. A thin canopy might mean the tree is drought-stressed and needs deep root fertilization and water management. Dead branches are normal and their removal (crown cleaning) often helps the tree put energy into healthy growth. Bark damage from a lawnmower or weed-whacker can heal if properly managed.\n\nThe key is getting an honest assessment from someone who isn't primarily in the business of removal. Ask directly: 'Is removal necessary, or do I have other options?' A good arborist will give you a straight answer and explain the reasoning. We always will — and if a tree can be saved with reasonable treatment, we'll tell you that rather than pushing for the more lucrative removal job.",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(p => p.slug === slug);
}
