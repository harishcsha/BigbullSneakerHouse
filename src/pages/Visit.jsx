import MapSection from "../components/MapSection";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Visit() {
  return (
    <div className="pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12">
        <p className="font-tag text-cyan text-xs uppercase tracking-widest mb-2">Come Through</p>
        <h1 className="font-display text-4xl sm:text-5xl tracking-wide">FIND THE STORE</h1>
        <p className="font-body text-mute mt-4 max-w-xl">
          Try before you buy. Come feel the suede, check the fit, and walk out in something new —
          or message us first if you'd rather sort sizes over chat.
        </p>
        <div className="mt-6">
          <WhatsAppButton floating={false} label="Message us before you visit" />
        </div>
      </div>
      <MapSection />
    </div>
  );
}
