"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowForward } from "@mui/icons-material"

const HomePageAbout = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Bringing the authentic flavors of Delhi to Ranchi since 2015
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/logo.jpg"
              alt="Dilhi Flavours Restaurant"
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">A Taste of Delhi in Ranchi</h3>
            <p className="text-gray-600">
              Dilhi Flavours was born from a passion to bring the authentic street food and culinary delights of Delhi
              to the heart of Ranchi. What started as a small eatery in Katatoli has now grown into three thriving
              locations across the city.
            </p>
            <p className="text-gray-600">
              Our recipes have been passed down through generations, preserving the authentic flavors that make Delhi's
              cuisine so special. We take pride in using fresh, high-quality ingredients and traditional cooking methods
              to create an unforgettable dining experience.
            </p>
            <p className="text-gray-600">
              From our famous chaat to our delectable main courses, every dish tells a story of Delhi's rich culinary
              heritage.
            </p>
            <Link href="/about" className="inline-flex items-center text-primary font-medium hover:underline">
              Learn more about our journey
              <ArrowForward className="ml-2 text-sm" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomePageAbout
