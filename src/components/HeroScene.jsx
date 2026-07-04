import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const HERO_IMG =
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=85";

export default function HeroScene() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), {
    stiffness: 150,
    damping: 18,
  });
  const glowX = useTransform(mx, [-0.5, 0.5], ["30%", "70%"]);
  const glowY = useTransform(my, [-0.5, 0.5], ["30%", "70%"]);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ perspective: 1200 }}
      className="relative w-full aspect-square max-w-[560px] mx-auto select-none"
    >
      {/* ambient glow that follows the cursor */}
      <motion.div
        className="absolute -inset-10 rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #29C5F0 0%, transparent 65%)",
          left: glowX,
          top: glowY,
          x: "-50%",
          y: "-50%",
          width: 420,
          height: 420,
        }}
      />

      {/* floating sticker badges echoing the logo's cloud-badge shape */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [-6, -3, -6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -left-4 sm:top-0 sm:left-0 bg-volt text-ink font-tag text-[11px] font-bold px-3 py-2 z-20 shadow-lg"
        style={{ clipPath: "polygon(0% 20%, 8% 0%, 100% 0%, 100% 80%, 92% 100%, 0% 100%)" }}
      >
        NEW DROP
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [4, 7, 4] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute bottom-6 -right-2 sm:right-0 bg-ink border-2 border-cyan text-cyan font-tag text-[11px] font-bold px-3 py-2 z-20"
        style={{ clipPath: "polygon(0% 20%, 8% 0%, 100% 0%, 100% 80%, 92% 100%, 0% 100%)" }}
      >
        FREE SHIP ₹999+
      </motion.div>

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full rounded-[28px] overflow-hidden border border-white/10 bg-surface"
      >
        <img
          src={HERO_IMG}
          alt="Featured sneaker"
          className="w-full h-full object-cover"
          style={{ transform: "translateZ(30px)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      </motion.div>
    </div>
  );
}
