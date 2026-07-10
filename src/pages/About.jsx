import { motion } from "framer-motion";
import { FiInstagram, FiTruck, FiTag } from "react-icons/fi";
import site from "../config/site";
import WhatsAppButton from "../components/WhatsAppButton";
import MapSection from "../components/MapSection";

const brands = ["Nike", "Adidas", "Puma", "Skechers", "Crocs"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Section({ eyebrow, title, children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-b border-white/10"
    >
      {eyebrow && (
        <p className="font-tag text-cyan text-xs uppercase tracking-widest mb-2">{eyebrow}</p>
      )}
      {title && (
        <h2 className="font-display text-2xl sm:text-3xl tracking-wide mb-6">{title}</h2>
      )}
      {children}
    </motion.section>
  );
}

export default function About() {
  return (
    <div className="pt-20 sm:pt-24">
      {/* HERO */}
      <div className="bg-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-tag text-cyan text-xs uppercase tracking-widest mb-3"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide"
          >
            ABOUT {site.name.toUpperCase()}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-mute mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Welcome to {site.name}, your ultimate destination for 101% original premium
            footwear. Founded on {site.foundedDate} by visionary entrepreneur{" "}
            <span className="text-bone font-semibold">{site.founder}</span>, our brand was
            born out of a passion to make authentic global streetwear accessible to everyone
            across India.
          </motion.p>
        </div>
      </div>

      <Section eyebrow="👟 Our Story & Mission">
        <p className="font-body text-mute leading-relaxed">
          Frustrated by how difficult it was to find genuine global sneaker brands at fair
          prices, {site.founder} established {site.name} to disrupt the premium footwear
          retail space.
        </p>
        <p className="font-body text-mute leading-relaxed mt-4">
          While mega-showrooms rarely offer deep discounts on fresh stock, our mission is
          different: we source premium, 101% authentic articles and pass massive savings
          directly to you. We believe that premium style should not demand a luxury price tag.
        </p>
        <p className="font-body text-mute leading-relaxed mt-4">
          While our roots are firmly planted in our flagship store in Davangere, Karnataka, we
          operate a robust Pan-India shipping network, delivering hype sneakers and premium
          comfort directly to your doorstep, no matter where you are in the country.
        </p>
      </Section>

      <Section eyebrow="🌟 What Makes Us Different" title="101% Authentic Global Brands">
        <p className="font-body text-mute leading-relaxed mb-6">
          We carry entirely original articles from the world's most sought-after footwear
          giants. Our curated, high-demand inventory includes collections from:
        </p>
        <div className="flex flex-wrap gap-3">
          {brands.map((b) => (
            <span
              key={b}
              className="tag-label bg-surface2 text-bone px-4 py-2 font-tag text-sm border border-white/10"
            >
              {b}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-surface border border-white/10 p-6">
            <FiTag className="text-volt mb-3" size={24} />
            <h3 className="font-display text-lg tracking-wide mb-2">UNBEATABLE VALUE</h3>
            <p className="font-body text-mute text-sm leading-relaxed">
              We're famous for major budget-friendly deals: Buy 1, Get 50% Off on MRP, with
              original premium sneakers starting as low as ₹2,000/-.
            </p>
          </div>
          <div className="bg-surface border border-white/10 p-6">
            <FiTruck className="text-cyan mb-3" size={24} />
            <h3 className="font-display text-lg tracking-wide mb-2">FAST PAN-INDIA SHIPPING</h3>
            <p className="font-body text-mute text-sm leading-relaxed">
              You don't need to live near our store to grab these deals. We safely pack and
              ship your favorite kicks across all states in India, with fast delivery and
              secure tracking.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="🚚 Online Orders & Wholesale">
        <p className="font-body text-mute leading-relaxed mb-6">
          We love expanding our community! Whether you're a retail customer buying a single
          pair or a reseller looking to collaborate, we ship in bulk nationwide.
        </p>
        <WhatsAppButton
          floating={false}
          label={`Call / WhatsApp for Orders — +91 79756 33740`}
          message="Hi! I'd like to place an order / discuss wholesale with Bigbull Sneaker House."
        />
      </Section>

      <Section eyebrow="📱 Join the Sneaker Movement">
        <p className="font-body text-mute leading-relaxed mb-6">
          Stay updated with our weekly stock arrivals, limited-time flash sales, and exclusive
          giveaways! Show us you follow our page when you shop to unlock exclusive coupons.
        </p>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-cyan text-cyan font-body font-bold px-6 py-3 hover:bg-cyan hover:text-ink transition-colors"
        >
          <FiInstagram size={18} /> @bigbullsneakerhouse
        </a>
      </Section>

      <MapSection />
    </div>
  );
}
