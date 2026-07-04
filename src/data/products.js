// Single source of truth for the product catalog.
// Swap `images` URLs for your own product photography whenever you have it —
// these are placeholder stock images so the site works out of the box.

const shoeImg = (seed) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=900&q=80`;
const teeImg = (seed) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=900&q=80`;

const products = [
  {
    id: "puma-velocity-nitro",
    category: "shoes",
    brand: "Puma",
    name: "Velocity Nitro 2",
    price: 7499,
    mrp: 9999,
    rating: 4.5,
    isNew: true,
    description:
      "Nitrogen-infused foam built for miles, not moments. A responsive daily trainer with a breathable engineered mesh upper and a grippy outsole that holds its own on wet tarmac.",
    sizes: [6, 7, 8, 9, 10, 11],
    colors: [
      { name: "Volt Black", hex: "#111111", images: [shoeImg("photo-1542291026-7eec264c27ff"), shoeImg("photo-1595950653106-6c9ebd614d3a"), shoeImg("photo-1600185365483-26d7a4cc7519")] },
      { name: "Cyan Blast", hex: "#29C5F0", images: [shoeImg("photo-1608231387042-66d1773070a5"), shoeImg("photo-1595950653106-6c9ebd614d3a")] },
    ],
  },
  {
    id: "adidas-ultraboost-light",
    category: "shoes",
    brand: "Adidas",
    name: "Ultraboost Light",
    price: 12999,
    mrp: 15999,
    rating: 4.8,
    isNew: false,
    description:
      "The lightest Ultraboost yet. Light BOOST cushioning returns energy with every stride, wrapped in a Primeknit+ upper that moves with your foot instead of against it.",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: "Core Black", hex: "#0A0A0A", images: [shoeImg("photo-1519744792095-2f2205e87b6f"), shoeImg("photo-1587563871167-1ee9c731aefb"), shoeImg("photo-1608379743498-a6f1e5063e5c")] },
      { name: "Cloud White", hex: "#EDEDED", images: [shoeImg("photo-1600269452121-4f2416e55c28"), shoeImg("photo-1491553895911-0055eca6402d")] },
    ],
  },
  {
    id: "puma-suede-classic",
    category: "shoes",
    brand: "Puma",
    name: "Suede Classic XXI",
    price: 5499,
    mrp: 6999,
    rating: 4.6,
    isNew: false,
    description:
      "The silhouette that's been on courts and streets since 1968. Soft suede upper, low-cut collar, rubber cupsole — timeless, and it stays that way.",
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: "Burnt Rust", hex: "#8A3B12", images: [shoeImg("photo-1600185365926-3a2ce3cdb9eb"), shoeImg("photo-1552346154-21d32810aba3")] },
      { name: "Forest Green", hex: "#22402E", images: [shoeImg("photo-1606107557195-0e29a4b5b4aa"), shoeImg("photo-1520256862855-398228c41684")] },
    ],
  },
  {
    id: "adidas-samba-og",
    category: "shoes",
    brand: "Adidas",
    name: "Samba OG",
    price: 8499,
    mrp: 8499,
    rating: 4.9,
    isNew: true,
    description:
      "Born on the pitch in '72, adopted by every city since. Full-grain leather upper, gum rubber outsole, the three stripes that need no introduction.",
    sizes: [6, 7, 8, 9, 10, 11],
    colors: [
      { name: "White Black Gum", hex: "#F2F2ED", images: [shoeImg("photo-1595341888016-a392ef81b7de"), shoeImg("photo-1465453869711-7e174808ace9")] },
    ],
  },
  {
    id: "puma-rsx-reinvent",
    category: "shoes",
    brand: "Puma",
    name: "RS-X Reinvent",
    price: 6999,
    mrp: 8999,
    rating: 4.3,
    isNew: false,
    description:
      "Chunky, loud, unapologetic. The RS-X remixes Puma's running-system archive into a dad-shoe silhouette built for standing out, not blending in.",
    sizes: [7, 8, 9, 10, 11],
    colors: [
      { name: "Multi Pop", hex: "#E8FF3C", images: [shoeImg("photo-1606813907291-d86efa9b94db"), shoeImg("photo-1543508282-6319a3e2621f")] },
    ],
  },
  {
    id: "nike-air-zoom-pegasus",
    category: "shoes",
    brand: "Nike",
    name: "Air Zoom Pegasus 40",
    price: 10999,
    mrp: 12995,
    rating: 4.7,
    isNew: false,
    description:
      "The workhorse trainer, four decades in. Zoom Air units front and back for a springy toe-off, breathable mesh for the long runs in Bengaluru heat.",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: "Blackout", hex: "#0A0A0A", images: [shoeImg("photo-1600269452121-4f2416e55c28"), shoeImg("photo-1491553895911-0055eca6402d")] },
    ],
  },
  {
    id: "bigbull-graphic-tee",
    category: "tshirts",
    brand: "BigBull",
    name: "Bull Graffiti Tee",
    price: 899,
    mrp: 1299,
    rating: 4.4,
    isNew: true,
    description:
      "180 GSM heavyweight cotton, boxy fit, screen-printed graffiti bull across the chest. Pre-shrunk so it stays true to size wash after wash.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Jet Black", hex: "#111111", images: [teeImg("photo-1521572163474-6864f9cf17ab"), teeImg("photo-1503341504253-dff4815485f1")] },
      { name: "Off White", hex: "#EDEDED", images: [teeImg("photo-1576566588028-4147f3842f27"), teeImg("photo-1562157873-818bc0726f68")] },
    ],
  },
  {
    id: "adidas-essentials-tee",
    category: "tshirts",
    brand: "Adidas",
    name: "Essentials Trefoil Tee",
    price: 1499,
    mrp: 1899,
    rating: 4.5,
    isNew: false,
    description:
      "Regular-fit cotton tee with the trefoil logo front and center. The one you reach for on repeat.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Core Black", hex: "#0A0A0A", images: [teeImg("photo-1503341504253-dff4815485f1"), teeImg("photo-1521572163474-6864f9cf17ab")] },
      { name: "Navy", hex: "#1B2A4A", images: [teeImg("photo-1562157873-818bc0726f68")] },
    ],
  },
  {
    id: "puma-essential-logo-tee",
    category: "tshirts",
    brand: "Puma",
    name: "Essential Logo Tee",
    price: 999,
    mrp: 1399,
    rating: 4.2,
    isNew: false,
    description:
      "Soft-hand cotton jersey, dryCELL finish so it doesn't cling on a workout day, small cat-logo left chest.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Storm Grey", hex: "#5B5B5F", images: [teeImg("photo-1576566588028-4147f3842f27")] },
      { name: "Cyan", hex: "#29C5F0", images: [teeImg("photo-1562157873-818bc0726f68")] },
    ],
  },
];

export const brands = ["All", ...Array.from(new Set(products.map((p) => p.brand)))];
export const categories = [
  { key: "all", label: "Everything" },
  { key: "shoes", label: "Shoes" },
  { key: "tshirts", label: "T-Shirts" },
];

export default products;
