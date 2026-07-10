// ────────────────────────────────────────────────────────────────
// SHOP CONFIG — edit these values with your real details.
// Everything on the site (WhatsApp button, map, footer, checkout
// fallback) reads from this single file.
// ────────────────────────────────────────────────────────────────

const site = {
  name: "BigBull Sneaker House",
  tagline: "Davanagere's House of Kicks",
  instagram: "https://www.instagram.com/bigbullsneakerhouse/",
  founder: "Anupama Kenchanagoudra",
  foundedDate: "November 27, 2025",

  // ⚠️ PLACEHOLDER — replace with the real shop WhatsApp number,
  // in international format with no spaces or symbols, e.g. "919876543210"
  whatsappNumber: "+917975633740",

  // Default message pre-filled when someone taps the WhatsApp button
  // from a non-product page.
  whatsappDefaultMessage:
    "Hey BigBull Sneaker House! I'd like to know more about your collection.",

  // ⚠️ PLACEHOLDER — replace with the real shop address / landmark.
  address: {
    line1: "BigBull Sneaker House",
    line2: "1st Floor, 4075, 10th Cross Rd, MCC B Block, Kuvempu Nagar,",
    city: "Davangere, Karnataka 577004",
    landmark: "Near Vasantha Benne Dose Hotel",
  },

  // ⚠️ PLACEHOLDER — swap this for an embed link from Google Maps:
  // open the shop location on Google Maps → Share → Embed a map → copy the src URL.
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4215.767810544881!2d75.90617727547536!3d14.44931628601929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba2568b4090ae7%3A0xcd6290aabc15befe!2sBigBull%20Sneaker%20House!5e1!3m2!1sen!2sin!4v1783146527406!5m2!1sen!2sin&output=embed",

  // Link used on the "Get Directions" button — replace with the shop's actual
  // Google Maps share link.
  mapDirectionsUrl: "https://maps.app.goo.gl/kfmRiEYCEh46V6NM7",

  // ⚠️ PLACEHOLDER — Razorpay test/live key. Get one at dashboard.razorpay.com
  // Never put your Key Secret in frontend code — only the Key ID goes here.
  razorpayKeyId: "rzp_test_XXXXXXXXXXXX",

  currency: "INR",
  currencySymbol: "₹",
};

export default site;
