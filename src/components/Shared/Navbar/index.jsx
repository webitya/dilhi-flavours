"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Close } from "@mui/icons-material";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Outlets", path: "/outlets" },
  { name: "Menus", path: "/menu" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const NavbarEl = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-1 text-black" : "bg-white shadow-lg  py-1 text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <div className="relative w-[160px] h-[55px]">
              <Image
                src="/logo.jpg"
                alt="Dilhi Flavours Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.path}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    scrolled
                      ? "text-gray-800 hover:text-[#d0312d]"
                      : "text-gray-800  hover:text-[#facc15]"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <Link
                href="/contact"
                className="ml-3 px-6 py-2 rounded-full bg-[#d0312d] text-white font-semibold hover:bg-[#b42422] transition duration-300 shadow"
              >
                Book a Table
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-3xl p-2 z-50 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <Close className={scrolled ? "text-white" : "text-black"} />
            ) : (
              <Menu className={scrolled ? "text-gray-800" : "text-black"} />
            )}
          </button>

          {/* Mobile Navigation Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-0 bg-[#111] z-40 flex flex-col items-center justify-center space-y-6"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="text-white text-2xl font-medium hover:text-[#facc15] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="mt-4 px-6 py-3 rounded-full bg-[#d0312d] text-white text-lg font-semibold hover:bg-[#b42422] transition"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Table
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default NavbarEl;
