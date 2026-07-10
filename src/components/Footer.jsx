import { Link } from "react-router-dom";
import { FiInstagram, FiMonitor } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import site from "../config/site";
import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt={site.name} className="h-14 w-14 object-contain shrink-0" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg text-bone">BIGBULL</span>
              <span className="font-tag text-[10px] uppercase tracking-[0.25em] text-cyan/80 mt-1">
                Sneaker House
              </span>
            </div>
          </div>
          <p className="text-mute text-sm font-body leading-relaxed max-w-xs">
            Puma, Adidas & more — real shoes, real sizes, no lottery. Based in Davanagere, Karnataka, India. We ship nationwide and internationally —
            shipped everywhere.
          </p>
          <div className="flex gap-4 mt-5">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-mute hover:text-cyan transition-colors">
              <FiInstagram size={20} />
            </a>
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mute hover:text-cyan transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-tag text-xs uppercase tracking-widest text-cyan mb-4">Shop</h4>
          <ul className="space-y-2 font-body text-sm text-mute">
            <li><Link to="/shop?category=shoes" className="hover:text-bone">Shoes</Link></li>
            <li><Link to="/shop?category=tshirts" className="hover:text-bone">T-Shirts</Link></li>
            <li><Link to="/shop" className="hover:text-bone">All Products</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-tag text-xs uppercase tracking-widest text-cyan mb-4">Company</h4>
          <ul className="space-y-2 font-body text-sm text-mute">
            <li><Link to="/about" className="hover:text-bone">About Us</Link></li>
            <li><Link to="/terms" className="hover:text-bone">Terms & Conditions</Link></li>
            <li><Link to="/visit" className="hover:text-bone">Visit the Store</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-tag text-xs uppercase tracking-widest text-cyan mb-4">Find Us</h4>
          <p className="font-body text-sm text-mute leading-relaxed">
            {site.address.line1}<br />
            {site.address.line2}<br />
            {site.address.city}<br />
            {site.address.landmark}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center gap-2 text-mute text-xs font-body">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <FiMonitor size={14} className="text-cyan" />
            Website designed by <a href="https://harishcsha.github.io/HarishPortfolio/" target="_blank" rel="noopener noreferrer" className="text-bone font-semibold hover:text-cyan">Harish C Jingade</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
