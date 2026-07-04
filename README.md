# BigBull Sneaker House

A full e-commerce storefront for shoes & t-shirts (Puma, Adidas, Nike, and your own brand),
built with React, Tailwind CSS, React Router, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`). It's fully responsive —
resize the browser or open it on your phone to see the mobile layout.

To build for production:

```bash
npm run build
```

This outputs a static site to `dist/` that you can deploy anywhere (Vercel, Netlify,
Cloudflare Pages, your own hosting — it's just static files).

## First things to edit

### 1. Shop details — `src/config/site.js`

This one file drives the WhatsApp button, the footer, and the map:

- `whatsappNumber` — the real WhatsApp number for the shop, country code + number,
  no spaces or `+` (e.g. `"919876543210"`).
- `address` — the shop's real address, shown in the footer and the Visit page.
- `mapEmbedUrl` — go to Google Maps, search your shop, click **Share -> Embed a map**,
  and copy the `src="..."` URL from the iframe code it gives you. Paste it here.
- `mapDirectionsUrl` — the shop's Google Maps share link (used for the "Get Directions" button).
- `razorpayKeyId` — see the payments section below.

### 2. Products — `src/data/products.js`

Every shoe and t-shirt lives in this one file as a plain JS array. Each product has:

- `brand`, `name`, `price`, `mrp` (used to show a strikethrough + discount %)
- `sizes` — an array of numbers (shoes) or letters (tees)
- `colors` — each color has its own `hex` (for the swatch) and its own `images` array

To add a product, copy an existing object and edit it. The images currently point to
Unsplash stock photos so the site works out of the box — swap them for your own product
photography by replacing the URLs with paths to your own images (drop images in
`src/assets/products/` and import them, or host them anywhere and paste the URL).

### 3. Logo — `src/assets/logo.jpg`

Your BigBull Sneaker House logo is already wired into the navbar, footer, and browser tab icon.
Swap the file for a new version any time (keep the same filename, or update the import paths
in `Navbar.jsx` and `Footer.jsx`).

## Payments — UPI & netbanking via Razorpay

The checkout page opens Razorpay's hosted checkout, which natively supports UPI, netbanking,
cards, and wallets. To take real payments:

1. Create an account at dashboard.razorpay.com and complete KYC (needed before you can
   accept live payments).
2. Copy your **Key ID** (starts with `rzp_test_...` or `rzp_live_...`) into
   `razorpayKeyId` in `src/config/site.js`.
3. **Important:** the Key ID is safe to put in frontend code, but the **Key Secret** is not —
   never add it here. For production use, you'll eventually want a tiny backend (even a single
   serverless function) to create orders server-side and verify payment signatures — Razorpay's
   own docs walk through this ("Standard Checkout" integration). The current setup works for
   testing and low-volume use, but a signature-verified backend is the recommended path once
   you're processing real orders at scale.

Until Razorpay is fully set up, customers can still complete orders through the
**"Place Order via WhatsApp"** button on checkout — it sends you their cart, address, and
phone number as a formatted WhatsApp message.

## What's inside

- `src/pages/Home.jsx` — parallax hero (mouse-tilt 3D shoe), brand marquee, category split, new drops
- `src/pages/Shop.jsx` — the full gallery with brand/category filters and sorting
- `src/pages/ProductDetail.jsx` — image gallery, color/size picker, add to cart, WhatsApp inquiry
- `src/pages/Checkout.jsx` — shipping form + Razorpay + WhatsApp order options
- `src/context/CartContext.jsx` — cart state, persisted to the browser's local storage
- `src/components/MapSection.jsx` — embedded Google Map + directions button

## Notes

- Cart contents persist in the browser (localStorage) so a refresh doesn't wipe the bag.
- Colors/fonts/spacing are all controlled through `tailwind.config.js` if you want to
  retheme later — the brand palette (black, cyan, volt yellow) lives there.
