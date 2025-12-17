"use client";

interface SkipLinkProps {
  targetId?: string;
  label?: string;
}

export default function SkipLink({
  targetId = "main-content",
  label = "Skip to main content",
}: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-6 focus:py-3 focus:bg-accent focus:text-black focus:font-bold focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white transition-all"
    >
      {label}
    </a>
  );
}
