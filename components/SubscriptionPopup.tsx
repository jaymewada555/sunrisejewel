"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, Sparkles } from "lucide-react";

const DISMISS_KEY = "sunrise_offer_dismissed";

export default function SubscriptionPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(DISMISS_KEY);
    if (dismissed) return;
    const timer = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !agree) return;
    setSubmitted(true);
    setTimeout(close, 2200);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-cream grid grid-cols-1 sm:grid-cols-2 overflow-hidden shadow-2xl"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-cream/90 flex items-center justify-center text-ink hover:bg-cream transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative hidden min-h-[320px] overflow-hidden bg-maroon-deep sm:block">
              <Image
                src="/images/products/dewdrop-pendant-necklace.jpg"
                alt="Diamond pendant necklace"
                fill
                sizes="(max-width: 640px) 0px, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/45 via-transparent to-maroon-deep/10" />
            </div>

            <div className="p-8 sm:p-9 flex flex-col justify-center">
              {!submitted ? (
                <>
                  <span className="inline-flex items-center gap-1.5 text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-3">
                    <Sparkles className="w-3.5 h-3.5" /> Limited Time
                  </span>
                  <h3 className="font-display text-2xl text-maroon-deep leading-tight">
                    Get ₹1,000 Off Your First Order
                  </h3>
                  <p className="text-sm text-ink-soft mt-2.5 leading-relaxed">
                    Sign up for early access to new collections and a welcome
                    coupon at checkout.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Full name"
                      className="w-full border border-line px-4 py-3 text-sm bg-white focus:outline-none focus:border-maroon"
                    />
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="Mobile number"
                      className="w-full border border-line px-4 py-3 text-sm bg-white focus:outline-none focus:border-maroon"
                    />
                    <label className="flex items-start gap-2.5 text-xs text-ink-soft">
                      <input
                        type="checkbox"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        className="mt-0.5 accent-maroon"
                      />
                      I agree to receive updates &amp; offers from Sunrise Diamond &amp; Jewels.
                    </label>
                    <button type="submit" className="btn-primary w-full justify-center !py-3">
                      Claim My Coupon
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-6"
                >
                  <div className="w-12 h-12 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-5 h-5 text-maroon" />
                  </div>
                  <h3 className="font-display text-xl text-maroon-deep">You&apos;re In!</h3>
                  <p className="text-sm text-ink-soft mt-2">
                    Your ₹1,000 coupon is on its way via SMS.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
