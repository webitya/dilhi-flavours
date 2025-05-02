"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RestaurantMenu, LocationOn } from "@mui/icons-material";

const HomePageHero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center bg-gradient-to-br from-pink-100 via-yellow-50 to-orange-100 overflow-hidden pt-28 pb-10">
      {/* Background pattern image overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20 mix-blend-overlay z-0" />

      {/* Color overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-300/40 via-pink-200/30 to-yellow-100/30 z-0 backdrop-blur-sm" />

      <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center md:text-left text-gray-800"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-wide mb-4 text-balance">
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 animate-pulse">
              DELHI FLAVOURS
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-rose-600">
            Capital of Taste
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mb-8 leading-relaxed text-balance">
            Dive into the rich taste of Delhi’s street food & royal recipes right here in Ranchi – crafted with love for every foodie.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="/menu"
              className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:brightness-110 transition"
            >
              <RestaurantMenu />
              View Menu
            </Link>
            <Link
              href="/outlets"
              className="border-2 border-orange-400 text-orange-600 font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-400 hover:text-white transition shadow-sm"
            >
              <LocationOn />
              Our Locations
            </Link>
          </div>
        </motion.div>

        {/* Right Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-3xl shadow-xl overflow-hidden bg-white max-w-sm w-full h-[300px] sm:h-[400px] md:h-[500px]"
        >
          <img
            src="/img1.jpg"
            alt="Delicious Dish"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomePageHero;
