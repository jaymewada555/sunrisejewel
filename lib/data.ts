export type Category =
  | "Bracelets"
  | "Rings"
  | "Necklaces"
  | "Earrings"
  | "Pendants"
  | "Chain Pendant"
  | "Necklace"
  | "Nosepins"
  | "Bangles"
  | "Anklets";

export type Metal = "Yellow Gold" | "Rose Gold" | "White Gold";

export type Occasion = "Bridal" | "Everyday" | "Gifting" | "Statement";

export type Product = {
  id: string;
  name: string;
  category: Category;
  metal: Metal;
  occasion: Occasion;
  image: string;
  price: string;
  blurb: string;
};

// export const categories: { name: Category; image: string }[] = [
//   { name: "Rings", image: "/images/products/aurora-solitaire-ring.jpg" },
//   {
//     name: "Bracelets",
//     image: "/images/products/featherline-tennis-bracelet.jpg",
//   },
//   { name: "Necklaces", image: "/images/products/cascade-choker-necklace.jpg" },
//   { name: "Earrings", image: "/images/products/veil-drop-earrings.jpg" },
//   { name: "Bangles", image: "/images/products/sunray-bangle-set.jpg" },
//   { name: "Nosepins", image: "/images/products/estelle-nosepin.jpg" },
//   { name: "Anklets", image: "/images/products/tidal-anklet.jpg" },
// ];

export const categories: { name: Category; image: string }[] = [
  {
    name: "Rings",
    image: "/images/products/Creatives/1 (32).jpg",
  },
  {
    name: "Earrings",
    image: "/images/products/Creatives/EER6666 (15).jpg",
  },
  {
    name: "Pendants",
    image: "/images/products/Creatives/PD (53).png",
  },
  {
    name: "Chain Pendant",
    image: "/images/products/Creatives/PD (28).png",
  },
  {
    name: "Necklace",
    image: "/images/products/Creatives/PD (54).png",
  },
  {
    name: "Bracelets",
    image: "/images/products/Creatives/PD (35).png",
  },
  {
    name: "Nosepins",
    image: "/images/products/Creatives/PD (38).png",
  },
];

export const products: Product[] = [
  {
    id: "aurora-solitaire-ring",
    name: "Aurora Solitaire Ring",
    category: "Rings",
    metal: "White Gold",
    occasion: "Bridal",
    image: "/images/products/aurora-solitaire-ring.jpg",
    price: "₹68,500",
    blurb: "A round brilliant solitaire set in a hand-finished platinum band.",
  },
  {
    id: "meridian-halo-ring",
    name: "Meridian Halo Ring",
    category: "Rings",
    metal: "Rose Gold",
    occasion: "Statement",
    image: "/images/products/meridian-halo-ring.jpg",
    price: "₹42,900",
    blurb: "A dense diamond halo that amplifies every angle of light.",
  },
  {
    id: "featherline-tennis-bracelet",
    name: "Featherline Tennis Bracelet",
    category: "Bracelets",
    metal: "White Gold",
    occasion: "Everyday",
    image: "/images/products/featherline-tennis-bracelet.jpg",
    price: "₹57,400",
    blurb: "Featherlight enough for daily wear, brilliant enough for evenings.",
  },
  {
    id: "kada-heritage-bracelet",
    name: "Kada Heritage Bracelet",
    category: "Bracelets",
    metal: "Yellow Gold",
    occasion: "Statement",
    image: "/images/products/kada-heritage-bracelet.jpg",
    price: "₹31,200",
    blurb: "A modern kada silhouette pavé-set edge to edge.",
  },
  {
    id: "dewdrop-pendant-necklace",
    name: "Dewdrop Pendant Necklace",
    category: "Necklaces",
    metal: "Rose Gold",
    occasion: "Gifting",
    image: "/images/products/dewdrop-pendant-necklace.jpg",
    price: "₹18,900",
    blurb: "A single drop diamond suspended on a fine rose gold chain.",
  },
  {
    id: "cascade-choker-necklace",
    name: "Cascade Choker",
    category: "Necklaces",
    metal: "White Gold",
    occasion: "Bridal",
    image: "/images/products/cascade-choker-necklace.jpg",
    price: "₹44,600",
    blurb: "Layered diamond cascades designed for the bridal table.",
  },
  {
    id: "lumina-oval-hoops",
    name: "Lumina Oval Hoops",
    category: "Earrings",
    metal: "Yellow Gold",
    occasion: "Everyday",
    image: "/images/products/lumina-oval-hoops.jpg",
    price: "₹79,500",
    blurb: "Oval hoops set with a continuous line of round brilliants.",
  },
  {
    id: "veil-drop-earrings",
    name: "Veil Drop Earrings",
    category: "Earrings",
    metal: "White Gold",
    occasion: "Bridal",
    image: "/images/products/veil-drop-earrings.jpg",
    price: "₹67,100",
    blurb: "Movement-designed drops that catch light with every turn.",
  },
  {
    id: "sunray-bangle-set",
    name: "Sunray Bangle Set",
    category: "Bangles",
    metal: "Yellow Gold",
    occasion: "Statement",
    image: "/images/products/sunray-bangle-set.jpg",
    price: "₹89,400",
    blurb: "A set of three bangles inspired by our own sunburst mark.",
  },
  {
    id: "estelle-nosepin",
    name: "Estelle Nosepin",
    category: "Nosepins",
    metal: "Rose Gold",
    occasion: "Everyday",
    image: "/images/products/estelle-nosepin.jpg",
    price: "₹14,900",
    blurb: "A single brilliant-cut stone set low for everyday comfort.",
  },
  {
    id: "tidal-anklet",
    name: "Tidal Anklet",
    category: "Anklets",
    metal: "White Gold",
    occasion: "Gifting",
    image: "/images/products/tidal-anklet.jpg",
    price: "₹27,600",
    blurb: "A delicate diamond-studded chain with a gentle wave motif.",
  },
  {
    id: "wren-stud-earrings",
    name: "Wren Stud Earrings",
    category: "Earrings",
    metal: "Rose Gold",
    occasion: "Gifting",
    image: "/images/products/wren-stud-earrings.jpg",
    price: "₹14,200",
    blurb: "Everyday studs with a soft floral silhouette.",
  },
];

export const testimonials: { quote: string; name: string; place: string }[] = [
  {
    quote:
      "I had a wonderful experience with Sunrise Diamond & Jewels. The collection was beautiful. I truly appreciated the excellent service and attention to detail. Highly recommended for anyone looking for quality jewellery and a pleasant shopping experience! ⭐⭐⭐⭐⭐",
    name: "Aditi Godkar",
    place: "Mumbai",
  },
  {
    quote:
      "I bought earrings and a diamond ring from Sunrise Diamond & Jewels. The piece is beautifully crafted and I love the product. I also loved how they interact with clients. I will buy more in the future.",
    name: "Nagesh Shetty",
    place: "Bengaluru",
  },
  {
    quote:
      "My experience with Sunrise Diamond & Jewels was excellent. I like their products; they are newly designed with excellent choices, and their price is right. Affordable and unique.",
    name: "Mrs. Heena Patel",
    place: "Ahmedabad",
  },
  {
    quote:
      "Absolutely loved my experience with Sunrise Diamond & Jewels. The jewellery is elegant, beautifully crafted, and has a luxurious finish. The team was extremely warm and helpful throughout. 😍👍",
    name: "Prisha",
    place: "Pune",
  },
];
