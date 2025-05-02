"use client"

import { motion } from "framer-motion"

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] bg-about-pattern bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-200 max-w-3xl mx-auto"
        >
          Discover the story behind Dilhi Flavours and our passion for authentic Delhi cuisine
        </motion.p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default AboutHero
