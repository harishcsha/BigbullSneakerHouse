import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingBag, FiMenu, FiX, FiInstagram } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import site from "../config/site";
import logo from "../assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=shoes", label: "Shoes" },
  { to: "/shop?category=tshirts", label: "T-Shirts" },
  { to: "/visit", label: "Visit Us" },
];

export default function Navbar() {
  const { count, setIsCartOpen } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-20 sm:h-24 lg:h-28">
        <Link to="/" className="flex items-center gap-3 shrink-0 min-w-0">
          <img
            src={logo}
            alt={site.name}
            className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 object-contain shrink-0"
          />
          <span className="flex flex-col leading-[1.05] min-w-0">
            <span className="font-display text-xl sm:text-2xl lg:text-[28px] tracking-wide text-bone whitespace-nowrap">
              BIGBULL<span className="text-cyan">.</span>
            </span>
            <span className="font-display text-sm sm:text-base lg:text-lg uppercase tracking-[0.15em] text-cyan whitespace-nowrap -mt-0.5">
              Sneaker House
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
                  isActive ? "text-cyan" : "text-bone/80 hover:text-cyan"
                }`
              }
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-bone/70 hover:text-cyan transition-colors"
            aria-label="BigBull Sneaker House on Instagram"
          >
            <FiInstagram size={20} />
          </a>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-bone hover:text-cyan transition-colors"
            aria-label="Open cart"
          >
            <FiShoppingBag size={22} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-volt text-ink text-[10px] font-tag font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </button>
          <button
            className="lg:hidden text-bone"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-body text-base font-semibold uppercase tracking-wide text-bone/85 py-3 border-b border-white/5 hover:text-cyan"
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-bone/70 py-3"
          >
            <FiInstagram size={18} /> Instagram
          </a>
        </div>
      )}
    </header>
  );
}
