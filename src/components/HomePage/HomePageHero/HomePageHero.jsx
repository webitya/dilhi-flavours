"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { RestaurantMenu, LocationOn } from "@mui/icons-material"

const HomePageHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent-blue bg-clip-text text-transparent">
              THE DILHI FLAVOURS
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white">Capital of Taste</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">
            Experience the authentic taste of Delhi in Ranchi. Serving delicious North Indian cuisine with a touch of
            Delhi's street food magic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/menu" className="btn-primary flex items-center justify-center gap-2">
              <RestaurantMenu className="text-xl" />
              <span>View Menu</span>
            </Link>
            <Link href="/outlets" className="btn-outline flex items-center justify-center gap-2">
              <LocationOn className="text-xl" />
              <span>Our Locations</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  )
}

export default HomePageHero
