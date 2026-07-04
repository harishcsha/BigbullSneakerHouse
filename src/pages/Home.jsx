import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import HeroScene from "../components/HeroScene";
import ProductCard from "../components/ProductCard";
import MapSection from "../components/MapSection";
import products from "../data/products";
import site from "../config/site";

const brandStrip = ["PUMA", "ADIDAS", "NIKE", "BIGBULL", "PUMA", "ADIDAS", "NIKE", "BIGBULL"];

export default function Home() {
  const newDrops = products.filter((p) => p.isNew).slice(0, 4);
  const shoesPreview = products.filter((p) => p.category === "shoes")[0];
  const teesPreview = products.filter((p) => p.category === "tshirts")[0];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-grid pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-6 items-center relative">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-tag text-cyan text-xs sm:text-sm uppercase tracking-[0.2em] mb-4"
            >
              Bengaluru · Puma · Adidas · Nike
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-wide"
            >
              WEAR IT<br />
              <span className="text-outline">LOUD.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-mute mt-6 max-w-md mx-auto lg:mx-0 text-base sm:text-lg"
            >
              Real sneakers, real sizes, dropped from BigBull Sneaker House.
              Puma, Adidas & graphic tees — pick your fit, we handle the rest.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <Link
                to="/shop?category=shoes"
                className="inline-flex items-center justify-center gap-2 bg-cyan text-ink font-display text-lg tracking-wide px-8 py-4 hover:bg-cyan-soft transition-colors"
              >
                SHOP SHOES <FiArrowRight />
              </Link>
              <Link
                to="/shop?category=tshirts"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-bone font-display text-lg tracking-wide px-8 py-4 hover:border-cyan hover:text-cyan transition-colors"
              >
                SHOP TEES
              </Link>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <HeroScene />
          </div>
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <div className="border-y border-white/10 bg-surface overflow-hidden py-4">
        <div className="flex w-max animate-marquee gap-12">
          {[...brandStrip, ...brandStrip].map((b, i) => (
            <span
              key={i}
              className="font-display text-2xl sm:text-3xl text-mute/40 tracking-widest whitespace-nowrap"
            >
              {b} <span className="text-cyan/40 mx-4">✕</span>
            </span>
          ))}
        </div>
      </div>

      {/* CATEGORY SPLIT */}
      <section className="grid grid-cols-1 sm:grid-cols-2">
        {[
          { data: shoesPreview, label: "SHOES", to: "/shop?category=shoes" },
          { data: teesPreview, label: "T-SHIRTS", to: "/shop?category=tshirts" },
        ].map((cat) => (
          <Link
            key={cat.label}
            to={cat.to}
            className="group relative aspect-[4/3] sm:aspect-square overflow-hidden"
          >
            <img
              src={cat.data.colors[0].images[0]}
              alt={cat.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="font-display text-4xl sm:text-5xl text-bone tracking-wide mb-3">
                {cat.label}
              </h3>
              <span className="font-tag text-xs uppercase tracking-widest text-cyan flex items-center gap-2">
                Shop Now <FiArrowRight />
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* NEW DROPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div className="min-w-0 max-w-full">
            <p className="font-tag text-cyan text-xs uppercase tracking-widest mb-2">Fresh Off The Rack</p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-wide break-words">NEW DROPS</h2>
          </div>
          <Link
            to="/shop"
            className="font-body font-bold text-sm text-bone/80 hover:text-cyan flex items-center gap-1"
          >
            View All <FiArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {newDrops.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* WHATSAPP CTA BANNER */}
      <section className="bg-cyan text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="min-w-0 max-w-full">
            <h3 className="font-display text-2xl sm:text-3xl tracking-wide break-words">NOT SURE OF YOUR SIZE?</h3>
            <p className="font-body font-medium mt-1">Message us on WhatsApp — we'll sort it in minutes.</p>
          </div>
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-cyan font-display tracking-wide px-8 py-4 hover:bg-surface transition-colors shrink-0"
          >
            CHAT NOW
          </a>
        </div>
      </section>

      <MapSection />
    </>
  );
}
