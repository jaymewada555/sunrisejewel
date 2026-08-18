import { ShieldCheck, Leaf, Gem, Sparkles, Receipt, Headset } from "lucide-react";
import Reveal from "@/components/Reveal";

const reasons = [
  { icon: ShieldCheck, title: "Certified & Conflict Free", text: "GIA / IGI / SGL graded stones with a documented, ethical supply chain." },
  { icon: Leaf, title: "Ethically Sourced", text: "Traceable sourcing and full disclosure on origin — natural or lab-grown." },
  { icon: Gem, title: "Unmatched Craftsmanship", text: "In-house karigars, CAD-precise settings and hand-finished polish." },
  { icon: Sparkles, title: "Customisation Available", text: "Any design, any stone, any budget — engineered to your story." },
  { icon: Receipt, title: "Transparent Pricing", text: "Rate cards, making charges and stone value shown line by line." },
  { icon: Headset, title: "Dedicated Support", text: "One consultant with you from first message to lifetime after-care." },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-blush/50">
      <div className="container-lg">
        <Reveal className="text-center mb-14">
          <span className="eyebrow">The Promise</span>
          <h2 className="font-display text-3xl md:text-[2.4rem] text-maroon-deep mt-3">
            Why Choose Sunrise
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08} className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full border border-gold/50 flex items-center justify-center">
                <r.icon className="w-5 h-5 text-maroon" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-base text-ink">{r.title}</h3>
                <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
