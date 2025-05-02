"use client"

import { motion } from "framer-motion"
import { Restaurant, LocalDining, EmojiFoodBeverage } from "@mui/icons-material"

const features = [
  {
    icon: <Restaurant fontSize="large" className="text-red-500" />,
    title: "Rooted in Delhi",
    desc: "We bring you the authentic street-style taste and rich food heritage straight from the heart of Delhi.",
  },
  {
    icon: <LocalDining fontSize="large" className="text-yellow-500" />,
    title: "Flavours that Speak",
    desc: "Every dish is a tribute to the bold spices, vibrant colors, and unforgettable aromas of North India.",
  },
  {
    icon: <EmojiFoodBeverage fontSize="large" className="text-green-600" />,
    title: "More than a Meal",
    desc: "It's a nostalgic experience—of home, festivals, and that one special dish you can’t forget.",
  },
]

const AboutUsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-100">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-orange-800 mb-6"
        >
          Welcome to Dilhi Flavours 🍴
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-12"
        >
          From the lanes of Chandni Chowk to your plate, we deliver the taste of Delhi in every bite. Our chefs recreate classic recipes using fresh local ingredients and timeless techniques. It’s more than food—it’s a feeling.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
