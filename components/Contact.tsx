"use client";

import { useActionState } from "react";
import { Reveal } from "@/components/Reveal";
import { sendEmail } from "@/app/actions";

export default function Contact() {
  const [state, action, isPending] = useActionState(sendEmail, null);

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto py-20 md:py-32 px-6">
      <Reveal>
        <h2 className="text-[12vw] md:text-[10vw] leading-[0.8] font-bold tracking-tighter mb-12 md:mb-20">
          LET'S <span className="text-accent">TALK</span>
        </h2>
      </Reveal>

      <form action={action} className="flex flex-col gap-12 max-w-4xl">
        <Reveal delay={0.2} width="100%">
          <div className="group relative">
            <label htmlFor="name" className="block text-sm font-mono text-white/60 mb-2">NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="YOUR NAME"
              className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-6xl font-bold tracking-tighter placeholder:text-white/10 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </Reveal>

        <Reveal delay={0.3} width="100%">
          <div className="group relative">
            <label htmlFor="email" className="block text-sm font-mono text-white/60 mb-2">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="YOUR@EMAIL.COM"
              className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-6xl font-bold tracking-tighter placeholder:text-white/10 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </Reveal>

        <Reveal delay={0.4} width="100%">
          <div className="group relative">
            <label htmlFor="message" className="block text-sm font-mono text-white/60 mb-2">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="TELL ME ABOUT YOUR PROJECT..."
              className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-4xl font-medium placeholder:text-white/10 focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={isPending}
              className="self-start mt-8 px-12 py-6 bg-white text-black text-xl font-bold tracking-tight hover:bg-accent hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "SENDING..." : "SEND MESSAGE"}
            </button>
            {state?.error && (
              <p className="text-red-500 font-mono text-sm">{state.error}</p>
            )}
            {state?.success && (
              <p className="text-green-500 font-mono text-sm">MESSAGE SENT SUCCESSFULLY!</p>
            )}
          </div>
        </Reveal>
      </form>
    </section>
  );
}
