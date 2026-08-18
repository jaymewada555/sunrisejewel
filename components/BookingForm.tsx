"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function BookingForm() {
  const [mode, setMode] = useState<"Video Consultation" | "In-Store Visit">("Video Consultation");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi Sunrise Diamond & Jewels, I'd like to book a ${mode}.`,
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      `Interested in: ${interest || "-"}`,
      notes ? `Notes: ${notes}` : "",
    ].filter(Boolean);
    const url = `https://wa.me/917021811747?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="border border-line p-7 md:p-9 bg-white/50">
      <div className="grid grid-cols-2 gap-3 mb-7">
        {(["Video Consultation", "In-Store Visit"] as const).map((m) => (
          <button
            type="button"
            key={m}
            onClick={() => setMode(m)}
            className={`py-2.5 text-xs tracking-wide uppercase border transition-colors ${
              mode === m
                ? "bg-maroon border-maroon text-cream"
                : "border-line text-ink-soft hover:border-maroon hover:text-maroon"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-xs text-ink-soft mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full border border-line px-4 py-3 text-sm bg-white focus:outline-none focus:border-maroon"
          />
        </div>

        <div>
          <label className="block text-xs text-ink-soft mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 00000 00000"
            className="w-full border border-line px-4 py-3 text-sm bg-white focus:outline-none focus:border-maroon"
          />
        </div>

        <div>
          <label className="block text-xs text-ink-soft mb-2" htmlFor="interest">
            Interested In
          </label>
          <input
            id="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="e.g. Engagement rings, Mangalsutra"
            className="w-full border border-line px-4 py-3 text-sm bg-white focus:outline-none focus:border-maroon"
          />
        </div>

        <div>
          <label className="block text-xs text-ink-soft mb-2" htmlFor="notes">
            Notes (optional)
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="Preferred date, budget range, occasion..."
            className="w-full border border-line px-4 py-3 text-sm bg-white focus:outline-none focus:border-maroon resize-none"
          />
        </div>

        <button type="submit" className="btn-primary w-full justify-center mt-2">
          <Send className="w-3.5 h-3.5" /> Send via WhatsApp
        </button>
        <p className="text-xs text-ink-soft text-center">
          We&apos;ll open WhatsApp with your details pre-filled — nothing is sent until you do.
        </p>
      </div>
    </form>
  );
}
