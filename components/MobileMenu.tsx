"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1] as any,
    },
  },
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1] as any,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3 + i * 0.1,
      ease: [0.76, 0, 0.24, 1] as any,
    },
  }),
};

const links = [
  { href: "#about", label: "ABOUT" },
  { href: "#portfolio", label: "WORK" },
  { href: "#contact", label: "CONTACT" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 bg-background z-50 flex flex-col justify-center items-center"
        >
          <nav className="flex flex-col gap-8 text-center">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                variants={linkVariants}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-[12vw] font-bold tracking-tighter hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
