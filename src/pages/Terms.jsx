import { motion } from "framer-motion";
import { FiRepeat, FiXCircle, FiAlertTriangle, FiHome, FiPhoneCall } from "react-icons/fi";
import site from "../config/site";
import WhatsAppButton from "../components/WhatsAppButton";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function PolicyBlock({ icon: Icon, number, title, children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      className="border border-white/10 bg-surface p-6 sm:p-8"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="tag-label bg-cyan text-ink font-tag font-bold text-sm w-9 h-9 flex items-center justify-center shrink-0">
          {number}
        </span>
        <Icon className="text-cyan" size={20} />
        <h2 className="font-display text-xl sm:text-2xl tracking-wide">{title}</h2>
      </div>
      <div className="font-body text-mute text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-[3.25rem]">
        {children}
      </div>
    </motion.section>
  );
}

export default function Terms() {
  return (
    <div className="pt-20 sm:pt-24">
      <div className="bg-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 text-center">
          <p className="font-tag text-cyan text-xs uppercase tracking-widest mb-3">
            Return & Exchange Policy
          </p>
          <h1 className="font-display text-4xl sm:text-5xl tracking-wide">
            TERMS &amp; CONDITIONS
          </h1>
          <p className="font-body text-mute mt-6 max-w-2xl mx-auto text-base leading-relaxed">
            At {site.name}, founded by {site.founder}, we're committed to delivering 101%
            authentic premium footwear at unbeatable prices. Because we pass heavy discounts
            (like our Buy 1 Get 50% Off) directly to our customers, our return and exchange
            policy is structured to sustain these massive savings while ensuring you get the
            perfect fit.
          </p>
          <p className="font-tag text-volt text-xs uppercase tracking-widest mt-6">
            Please read our policy guidelines carefully before making a purchase.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 space-y-6">
        <PolicyBlock icon={FiRepeat} number="1" title="Exchange Policy (Size & Fit Issues)">
          <p>
            We want to make sure your sneakers fit perfectly. If your shoes do not fit, we
            offer size exchanges under the following conditions:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="text-bone font-semibold">Timeframe:</span> Exchange requests
              must be raised within 7 days of receiving your delivery.
            </li>
            <li>
              <span className="text-bone font-semibold">Condition:</span> The sneakers must be
              completely unworn, undamaged, unwashed, and in their original condition.
            </li>
            <li>
              <span className="text-bone font-semibold">Packaging:</span> Shoes must be
              returned with their original brand box, price tags, and all inner packaging
              intact.
            </li>
            <li>
              <span className="text-bone font-semibold">Shipping Charges:</span> For size
              exchanges, the customer is responsible for the reverse shipping fee to send the
              item back to our hub.
            </li>
          </ul>
        </PolicyBlock>

        <PolicyBlock icon={FiXCircle} number="2" title="Return & Refund Policy">
          <p>
            Because we offer premium global brands at heavily discounted clearance prices, we
            do not offer monetary refunds or cancellations once an order has been shipped.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="text-bone font-semibold">All Sales Are Final:</span> Returns for
              a cash refund are not accepted if you simply change your mind or do not like the
              style.
            </li>
            <li>
              <span className="text-bone font-semibold">Store Credit:</span> If your requested
              exchange size is out of stock, we will issue a Store Credit Voucher valid for 3
              months, which you can use for any future purchase.
            </li>
          </ul>
        </PolicyBlock>

        <PolicyBlock icon={FiAlertTriangle} number="3" title="Damaged or Wrong Items (Our Guarantee)">
          <p>
            In the rare event that you receive a damaged product, a manufacturing defect, or
            the wrong size/brand entirely, we will take full responsibility.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="text-bone font-semibold">Mandatory Unboxing Video:</span> To
              claim a free replacement for damage or a wrong item, you must provide a
              continuous, unedited unboxing video from the moment you open the courier package.
            </li>
            <li>
              <span className="text-bone font-semibold">Resolution:</span> Once verified via
              the video, we will arrange a free reverse pickup and ship the correct, fresh pair
              to you at zero additional cost.
            </li>
          </ul>
        </PolicyBlock>

        <PolicyBlock icon={FiHome} number="4" title="In-Store Exchanges (Davangere Flagship)">
          <p>If you are located in Karnataka or bought your shoes at our physical storefront:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You can bring your pair directly to our MCC B Block, Davangere store for an instant size swap.</li>
            <li>Bring your original purchase bill or digital invoice.</li>
            <li>The 7-day unworn condition rule still applies.</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock icon={FiPhoneCall} number="5" title="How to Initiate an Exchange">
          <p>Do not send items back without informing us first. To start the process:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>WhatsApp us at: +91 79756 33740</li>
            <li>Share your Order ID, Name, and photos/videos of the shoe condition.</li>
            <li>Our customer care team will share the return shipping address and guide you through the next steps.</li>
          </ol>
          <div className="pt-4">
            <WhatsAppButton
              floating={false}
              label="Start an Exchange on WhatsApp"
              message="Hi! I'd like to start a return/exchange for my order. Order ID: "
            />
          </div>
        </PolicyBlock>
      </div>
    </div>
  );
}
