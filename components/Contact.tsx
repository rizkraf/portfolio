"use client";

import { useRef, useEffect } from "react";
import { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { sendEmail } from "@/app/actions";

export default function Contact() {
  const [state, action, isPending] = useActionState(sendEmail, null);
  const formRef = useRef<HTMLFormElement>(null);

  // Auto-reset form on success
  useEffect(() => {
    if (state?.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state?.success]);

  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto py-20 md:py-32 px-6"
      aria-labelledby="contact-heading"
    >
      <Reveal>
        <h2
          id="contact-heading"
          className="text-[12vw] md:text-[10vw] leading-[0.8] font-bold tracking-tighter mb-12 md:mb-20"
        >
          LET&apos;S <span className="text-accent">TALK</span>
        </h2>
      </Reveal>

      <form
        ref={formRef}
        action={action}
        className="flex flex-col gap-12 max-w-4xl"
        aria-describedby={state?.error ? "form-error" : undefined}
      >
        <Reveal delay={0.2} width="100%">
          <div className="group relative">
            <label
              htmlFor="name"
              className="block text-sm font-mono text-white/60 mb-2"
            >
              NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={isPending}
              placeholder="YOUR NAME"
              autoComplete="name"
              className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-6xl font-bold tracking-tighter placeholder:text-white/10 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors disabled:opacity-50"
            />
          </div>
        </Reveal>

        <Reveal delay={0.3} width="100%">
          <div className="group relative">
            <label
              htmlFor="email"
              className="block text-sm font-mono text-white/60 mb-2"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isPending}
              placeholder="YOUR@EMAIL.COM"
              autoComplete="email"
              className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-6xl font-bold tracking-tighter placeholder:text-white/10 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors disabled:opacity-50"
            />
          </div>
        </Reveal>

        <Reveal delay={0.4} width="100%">
          <div className="group relative">
            <label
              htmlFor="message"
              className="block text-sm font-mono text-white/60 mb-2"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              required
              disabled={isPending}
              rows={4}
              placeholder="TELL ME ABOUT YOUR PROJECT..."
              className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-4xl font-medium placeholder:text-white/10 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors resize-none disabled:opacity-50"
            />
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={isPending}
              aria-busy={isPending}
              className="self-start mt-8 px-12 py-6 bg-white text-black text-xl font-bold tracking-tight hover:bg-accent hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isPending ? (
                <span className="flex items-center gap-3">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  SENDING...
                </span>
              ) : (
                "SEND MESSAGE"
              )}
            </button>

            {/* Status Messages */}
            <AnimatePresence mode="wait">
              {state?.error && (
                <motion.div
                  id="form-error"
                  role="alert"
                  aria-live="polite"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-red-400 font-mono text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {state.error}
                </motion.div>
              )}
              {state?.success && (
                <motion.div
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-green-400 font-mono text-sm bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  MESSAGE SENT SUCCESSFULLY!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </form>
    </section>
  );
}
