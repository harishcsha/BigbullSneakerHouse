import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import site from "../config/site";

export default function ProductCard({ product, index = 0 }) {
  const primary = product.colors[0];
  const secondaryImg = primary.images[1] || primary.images[0];
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative aspect-square bg-surface overflow-hidden">
          <img
            src={primary.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            loading="lazy"
          />
          <img
            src={secondaryImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            loading="lazy"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-volt text-ink text-[11px] font-tag font-bold px-2 py-1">
              NEW
            </span>
          )}
          {discount > 0 && (
            <span className="absolute top-3 right-3 bg-ink/80 text-cyan text-[11px] font-tag font-bold px-2 py-1 border border-cyan/40">
              -{discount}%
            </span>
          )}
        </div>
        <div className="pt-3 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-mute text-[11px] font-tag uppercase tracking-wider">{product.brand}</p>
            <h3 className="font-body font-bold text-sm sm:text-base text-bone truncate group-hover:text-cyan transition-colors">
              {product.name}
            </h3>
          </div>
          <div className="tag-label bg-surface2 text-bone px-2.5 py-1 shrink-0 text-right">
            <p className="font-tag text-sm font-bold leading-none">
              {site.currencySymbol}{product.price.toLocaleString("en-IN")}
            </p>
            {discount > 0 && (
              <p className="font-tag text-[10px] text-mute line-through leading-none mt-1">
                {site.currencySymbol}{product.mrp.toLocaleString("en-IN")}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
