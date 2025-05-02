"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Restaurant } from "@mui/icons-material"
import Link from "next/link"

const categories = [
  { id: "starters", name: "Starters" },
  { id: "main-course", name: "Main Course" },
  { id: "breads", name: "Breads" },
  { id: "desserts", name: "Desserts" },
]

const menuItems = {
  starters: [
    { name: "Paneer Tikka", price: "₹249", description: "Marinated cottage cheese grilled to perfection" },
    { name: "Dahi Bhalla", price: "₹149", description: "Soft lentil dumplings topped with yogurt and chutneys" },
    { name: "Aloo Tikki Chaat", price: "₹129", description: "Crispy potato patties topped with yogurt and chutneys" },
  ],
  "main-course": [
    { name: "Dal Makhani", price: "₹249", description: "Black lentils cooked overnight with butter and cream" },
    { name: "Shahi Paneer", price: "₹279", description: "Cottage cheese in a rich, creamy tomato gravy" },
    { name: "Chicken Curry", price: "₹299", description: "Tender chicken pieces in a flavorful curry" },
  ],
  breads: [
    { name: "Butter Naan", price: "₹49", description: "Soft leavened bread brushed with butter" },
    { name: "Garlic Roti", price: "₹39", description: "Whole wheat bread with garlic flavor" },
    { name: "Laccha Paratha", price: "₹59", description: "Layered whole wheat bread" },
  ],
  desserts: [
    { name: "Gulab Jamun", price: "₹99", description: "Deep-fried milk solids soaked in sugar syrup" },
    { name: "Rasmalai", price: "₹129", description: "Soft cottage cheese dumplings in sweetened milk" },
    { name: "Kulfi", price: "₹89", description: "Traditional Indian ice cream" },
  ],
}

const HomePageMenu = () => {
  const [activeCategory, setActiveCategory] = useState("starters")

  return (
    <section className="py-16 md:py-24 bg-menu-pattern bg-cover bg-fixed">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-white/20 text-white px-4 py-2 rounded-full mb-4 backdrop-blur-sm"
          >
            <span className="font-medium">Explore Our Menu</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Delicious Offerings
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-200 max-w-3xl mx-auto mb-10"
          >
            From street food favorites to royal delicacies, our menu offers a complete Delhi experience
          </motion.p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-10 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category.id ? "bg-primary text-white" : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {menuItems[activeCategory].map((item, index) => (
              <div key={index} className="flex justify-between items-start border-b border-white/20 pb-4 last:border-0">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                <span className="text-lg font-bold text-secondary ml-4">{item.price}</span>
              </div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link href="/menu" className="btn-secondary inline-flex items-center gap-2">
              <Restaurant />
              <span>View Complete Menu</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePageMenu
