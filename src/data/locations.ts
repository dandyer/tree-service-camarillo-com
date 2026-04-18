export interface Location {
  slug: string; name: string; description: string;
  content: string;
}

export const locations: Location[] = [
  {
    slug: "oxnard",
    name: "Oxnard",
    description: "Tree removal, trimming, and emergency service for Oxnard homeowners and businesses.",
    content: "Oxnard's coastal neighborhoods have a diverse mix of mature trees — palms along the boulevards, eucalyptus in older neighborhoods, and ornamental trees throughout newer developments. We serve Oxnard regularly, handling everything from routine palm trimming to emergency storm response.\n\nThe area's marine layer and salt air can stress certain tree species, and we're experienced with the specific challenges of coastal Ventura County trees. Call us for a free estimate anywhere in Oxnard.",
  },
  {
    slug: "ventura",
    name: "Ventura",
    description: "Professional tree care for Ventura's historic neighborhoods and coastal properties.",
    content: "Ventura's older neighborhoods have some of the most beautiful mature trees in Ventura County — large spreading oaks, pepper trees, and mature palms that give the city its distinctive character. We've served Ventura homeowners for many years, helping preserve these trees while keeping properties safe.\n\nWe're especially experienced with heritage tree removal and trimming in Ventura, where tree preservation rules apply to certain species and sizes. We'll navigate the permit process when required.",
  },
  {
    slug: "thousand-oaks",
    name: "Thousand Oaks",
    description: "Tree service for Thousand Oaks' hillside homes and mature oak-covered neighborhoods.",
    content: "Thousand Oaks earned its name from the native valley oaks that dot the landscape, and those oaks are worth protecting. We provide oak tree care, trimming, and when necessary, safe removal for Thousand Oaks homeowners throughout the Conejo Valley.\n\nHillside properties in Thousand Oaks present specific challenges — steep terrain, limited access, and trees that may overhang structures or retaining walls. We have the equipment and experience to work safely in these conditions.",
  },
  {
    slug: "simi-valley",
    name: "Simi Valley",
    description: "Tree removal and trimming for Simi Valley's residential neighborhoods and rural properties.",
    content: "Simi Valley's mix of suburban neighborhoods and rural properties creates a wide range of tree service needs. From backyard tree trimming in Simi Valley's established neighborhoods to clearing overgrown lots and fire-risk properties in the hills, we handle it all.\n\nSimi Valley's proximity to wildland areas makes defensible space clearing particularly important — we can provide firewise clearance that meets CAL FIRE requirements.",
  },
  {
    slug: "moorpark",
    name: "Moorpark",
    description: "Tree care for Moorpark's growing residential developments and agricultural properties.",
    content: "Moorpark has grown significantly in recent years, bringing new neighborhoods alongside its established agricultural community. We serve homeowners throughout Moorpark for tree trimming, removal, and stump grinding.\n\nThe area's walnut groves and citrus orchards represent significant agricultural value — we're experienced working on agricultural properties and understand the importance of minimizing disruption to productive trees and surrounding crops.",
  },
  {
    slug: "newbury-park",
    name: "Newbury Park",
    description: "Professional tree service for Newbury Park and the western Conejo Valley.",
    content: "Newbury Park's neighborhoods at the base of the Santa Monica Mountains have beautiful mature trees that benefit from regular professional care. We provide trimming, removal, and health assessments throughout Newbury Park.\n\nThe wildland-urban interface in this area means fire safety is a real consideration — we can provide defensible space assessments and clearing that meets CAL FIRE guidelines.",
  },
  {
    slug: "port-hueneme",
    name: "Port Hueneme",
    description: "Tree trimming and removal for Port Hueneme's coastal community.",
    content: "Port Hueneme's compact, tightly-knit community has many mature trees in close proximity to homes and streets. We serve residential customers throughout Port Hueneme for trimming, palm care, and tree removal when needed.\n\nCoastal conditions require some special considerations for tree health and treatment — we're experienced with the specific challenges of trees near the ocean.",
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find(l => l.slug === slug);
}
