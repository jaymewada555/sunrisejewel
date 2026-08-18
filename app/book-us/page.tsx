import { SunburstRays } from "@/components/JewelIcons";
import { Video, Store, Phone, Mail, MapPin, Clock } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Book Us | Sunrise Diamond & Jewels",
  description:
    "Book a video consultation or an in-store visit with a Sunrise Diamond & Jewels diamond consultant.",
};

const modes = [
  {
    icon: Video,
    title: "Video Consultation",
    text: "Meet a diamond consultant one-on-one from anywhere — see stones and settings on screen before you decide.",
  },
  {
    icon: Store,
    title: "In-Store Visit",
    text: "Walk into our Mumbai studio for a hands-on styling session and to view certified stones in person.",
  },
];

export default function BookUsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-maroon-deep">
        <SunburstRays className="sunburst-mark w-[440px] h-[440px] text-gold-light -right-28 -top-28 animate-slow-spin" />
        <Reveal className="container-lg relative py-16 md:py-24 text-center">
          <span className="eyebrow text-gold-light">Book Us</span>
          <h1 className="font-display text-cream text-3xl md:text-5xl mt-3">
            Let&apos;s Plan Your Visit
          </h1>
          <p className="text-cream/65 max-w-lg mx-auto mt-4 text-sm leading-relaxed">
            Tell us what you&apos;re looking for and a diamond consultant will
            reach out within one business day.
          </p>
        </Reveal>
      </section>

      <section className="section">
        <div className="container-lg grid grid-cols-1 lg:grid-cols-2 gap-14">
          <Reveal>
            <span className="eyebrow">How It Works</span>
            <h2 className="font-display text-3xl text-maroon-deep mt-3 mb-8">
              Two Ways to Meet Us
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
                +91 70218 11747
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" strokeWidth={1.6} />
                hello@sunrisediamonds.com
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold" strokeWidth={1.6} />
                123 Diamond Street, Mumbai, India
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
