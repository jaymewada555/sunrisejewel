import { SunburstRays } from "@/components/JewelIcons";
import { Video, Phone, Mail, MapPin, Clock, PhoneCall } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Find Us | Sunrise Diamond & Jewels",
  description:
    "Find our studio or request a one-on-one consultation with a Sunrise Diamond & Jewels jewellery expert.",
};

const modes = [
  {
    icon: Video,
    title: "Video Consultation",
    text: "Meet a consultant from anywhere and shortlist designs before you visit.",
  },
  {
    icon: PhoneCall,
    title: "1-on-1 Consultation",
    text: "Speak directly with our expert for personalised guidance on style, metal, and fit.",
  },
];

export default function BookUsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-maroon-deep">
        <SunburstRays className="sunburst-mark w-[440px] h-[440px] text-gold-light -right-28 -top-28 animate-slow-spin" />
        <Reveal className="container-lg relative py-16 md:py-24 text-center">
          <span className="eyebrow text-gold-light">Find Us</span>
          <h1 className="font-display text-cream text-3xl md:text-5xl mt-3">
            Visit Our Studio or Talk to an Expert
          </h1>
          <p className="text-cream/65 max-w-lg mx-auto mt-4 text-sm leading-relaxed">
            Share your preferences and we&apos;ll help you find the right piece with confidence.
          </p>
        </Reveal>
      </section>

      <section className="section">
        <div className="container-lg grid grid-cols-1 lg:grid-cols-2 gap-14">
          <Reveal>
            <span className="eyebrow">How It Works</span>
            <h2 className="font-display text-3xl text-maroon-deep mt-3 mb-8">
              Two Ways to Connect
            </h2>
            <div className="space-y-8">
              {modes.map((m) => (
                <div key={m.title} className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center">
                    <m.icon className="w-5 h-5 text-maroon" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-ink">{m.title}</h3>
                    <p className="text-sm text-ink-soft mt-1.5 leading-relaxed max-w-sm">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hairline my-10" />

            <div className="space-y-4 text-sm text-ink-soft">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" strokeWidth={1.6} />
                <a href="tel:+918424000907" className="hover:text-maroon transition-colors">+91 84240 00907</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" strokeWidth={1.6} />
                <a href="mailto:Support@sunrisejewels.co.in" className="hover:text-maroon transition-colors">Support@sunrisejewels.co.in</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold" strokeWidth={1.6} />
                Andheri (west), Mumbai, India
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold" strokeWidth={1.6} />
                Mon – Sat, 10:00 AM – 7:00 PM
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
