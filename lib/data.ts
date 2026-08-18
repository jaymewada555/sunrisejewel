export type Category =
  | "Bracelets"
  | "Rings"
  | "Necklaces"
  | "Earrings"
  | "Bangles"
  | "Nosepins"
  | "Anklets";

export type Metal = "Yellow Gold" | "Rose Gold" | "White Gold" | "Platinum";

export type Occasion = "Bridal" | "Everyday" | "Gifting" | "Statement";

export type Product = {
  id: string;
  name: string;
  category: Category;
  metal: Metal;
  occasion: Occasion;
  image: string;
  blurb: string;
};

export const categories: { name: Category; image: string }[] = [
  { name: "Rings", image: "/images/cat-rings.jpg" },
  { name: "Bracelets", image: "/images/cat-bracelets.jpg" },
  { name: "Necklaces", image: "/images/cat-necklaces.jpg" },
  { name: "Earrings", image: "/images/cat-earrings.jpg" },
  { name: "Bangles", image: "/images/cat-bangles.jpg" },
  { name: "Nosepins", image: "/images/cat-nosepins.jpg" },
  { name: "Anklets", image: "/images/cat-anklets.jpg" },
];

export const products: Product[] = [
  {
    id: "aurora-solitaire-ring",
    name: "Aurora Solitaire Ring",
    category: "Rings",
    metal: "Platinum",
    occasion: "Bridal",
    image: "/images/prod-ring-1.jpg",
    blurb: "A round brilliant solitaire set in a hand-finished platinum band.",
  },
  {
    id: "meridian-halo-ring",
    name: "Meridian Halo Ring",
    category: "Rings",
    metal: "Rose Gold",
    occasion: "Statement",
    image: "/images/prod-ring-2.jpg",
    blurb: "A dense diamond halo that amplifies every angle of light.",
  },
  {
    id: "featherline-tennis-bracelet",
    name: "Featherline Tennis Bracelet",
    category: "Bracelets",
    metal: "White Gold",
    occasion: "Everyday",
    image: "/images/prod-bracelet-1.jpg",
    blurb: "Featherlight enough for daily wear, brilliant enough for evenings.",
  },
  {
    id: "kada-heritage-bracelet",
    name: "Kada Heritage Bracelet",
    category: "Bracelets",
    metal: "Yellow Gold",
    occasion: "Statement",
    image: "/images/prod-bracelet-2.jpg",
    blurb: "A modern kada silhouette pavé-set edge to edge.",
  },
  {
    id: "dewdrop-pendant-necklace",
    name: "Dewdrop Pendant Necklace",
    category: "Necklaces",
    metal: "Rose Gold",
    occasion: "Gifting",
    image: "/images/prod-necklace-1.jpg",
    blurb: "A single drop diamond suspended on a fine rose gold chain.",
  },
  {
    id: "cascade-choker-necklace",
    name: "Cascade Choker",
    category: "Necklaces",
    metal: "White Gold",
    occasion: "Bridal",
    image: "/images/prod-necklace-2.jpg",
    blurb: "Layered diamond cascades designed for the bridal table.",
  },
  {
    id: "lumina-oval-hoops",
    name: "Lumina Oval Hoops",
    category: "Earrings",
    metal: "Yellow Gold",
    occasion: "Everyday",
    image: "/images/prod-earring-1.jpg",
    blurb: "Oval hoops set with a continuous line of round brilliants.",
  },
  {
    id: "veil-drop-earrings",
    name: "Veil Drop Earrings",
    category: "Earrings",
    metal: "Platinum",
    occasion: "Bridal",
    image: "/images/prod-earring-2.jpg",
    blurb: "Movement-designed drops that catch light with every turn.",
  },
  {
    id: "sunray-bangle-set",
    name: "Sunray Bangle Set",
    category: "Bangles",
    metal: "Yellow Gold",
    occasion: "Statement",
    image: "/images/prod-bangle-1.jpg",
    blurb: "A set of three bangles inspired by our own sunburst mark.",
  },
  {
    id: "estelle-nosepin",
    name: "Estelle Nosepin",
    category: "Nosepins",
    metal: "Rose Gold",
    occasion: "Everyday",
    image: "/images/prod-nosepin-1.jpg",
    blurb: "A single brilliant-cut stone set low for everyday comfort.",
  },
  {
    id: "tidal-anklet",
    name: "Tidal Anklet",
    category: "Anklets",
    metal: "White Gold",
    occasion: "Gifting",
    image: "/images/prod-anklet-1.jpg",
    blurb: "A delicate diamond-studded chain with a gentle wave motif.",
  },
  {
    id: "wren-stud-earrings",
    name: "Wren Stud Earrings",
    category: "Earrings",
    metal: "Rose Gold",
    occasion: "Gifting",
    image: "/images/prod-earring-3.jpg",
    blurb: "Everyday studs with a soft floral silhouette.",
  },
];

export const testimonials = [
  {
    quote:
      "The jewellery is beyond beautiful. Excellent quality and amazing service — my solitaire looks even better in person.",
    name: "Priya S.",
    place: "Bengaluru",
  },
  {
    quote:
      "We customised a mangalsutra for our anniversary. The team shared CAD designs at every step and delivered before time.",
    name: "Rahul M.",
    place: "Pune",
  },
  {
    quote:
      "Bought lab-grown earrings — certified, brilliant, and half the price of what I was quoted elsewhere.",
    name: "Aisha K.",
    place: "Delhi",
  },
  {
    quote:
      "Our engagement ring was true to sketch. Transparent pricing and honest guidance through the whole process.",
    name: "Neha & Arjun",
    place: "Mumbai",
  },
];
