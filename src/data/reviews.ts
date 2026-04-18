export interface Review {
  name: string;
  text: string;
  time: string;
  featured?: boolean;
}

export const reviews: Review[] = [
  {
    name: "Robert M.",
    text: "Had a 60-foot eucalyptus that was leaning toward my fence after the last Santa Ana. Dan's crew came out the next day, assessed it, and had it down safely in a few hours. They cleaned up everything — didn't leave a single branch. Professional all the way.",
    time: "1 month ago",
    featured: true,
  },
  {
    name: "Christine L.",
    text: "I've used Camarillo Tree Service twice now — once for trimming five palms and once for removing a dead queen palm that was too close to the house. Both times they were on time, worked efficiently, and left the yard spotless. Pricing was very fair.",
    time: "3 months ago",
    featured: true,
  },
  {
    name: "Gary Watkins",
    text: "Called after a windstorm knocked a large branch onto my patio cover. They were there within 3 hours, removed the branch, and cleared everything before dark. Also trimmed back the rest of the tree while they were at it. Couldn't ask for more.",
    time: "4 months ago",
  },
  {
    name: "Maria Delgado",
    text: "I was worried about removing a large tree close to my garage, but Dan walked me through the whole process before starting. They used ropes and rigged the sections down instead of dropping them. No damage to anything. Impressed with the skill level.",
    time: "5 months ago",
    featured: true,
  },
  {
    name: "Steve O.",
    text: "Had five stumps ground out from an old orchard. They scheduled me within a week, knocked out all five in about two hours, and filled the holes back in. The price was exactly what they quoted — no surprises.",
    time: "7 months ago",
  },
  {
    name: "Debra H.",
    text: "Dan gave me an honest assessment — told me one of my trees didn't actually need to come down, just needed proper pruning. I appreciated that he didn't try to upsell me on removal I didn't need. The pruning looks great and the tree is doing much better.",
    time: "9 months ago",
    featured: true,
  },
];

export const featuredReviews = reviews.filter(r => r.featured);
export const totalReviews = reviews.length;
export const averageRating = 5.0;
