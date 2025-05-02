"use client"

import { useState } from "react"
import { motion } from "framer-motion"


const categories = [
  { id: "starters", name: "Starters & Chaats" },
  { id: "main-course", name: "Main Course" },
  { id: "breads", name: "Breads & Rice" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
]



const menuItems = {
  starters: [
    { name: "Paneer Tikka", price: "₹249", description: "Marinated cottage cheese grilled to perfection", isVeg: true, image: "/logo.jpg" },
    { name: "Dahi Bhalla", price: "₹149", description: "Lentil dumplings topped with yogurt and chutneys", isVeg: true, image: "/logo.jpg" },
    { name: "Aloo Tikki Chaat", price: "₹129", description: "Crispy potato patties with chutneys", isVeg: true, image: "/logo.jpg" },
    { name: "Gol Gappe", price: "₹99", description: "Puris filled with spicy water", isVeg: true, image: "/logo.jpg" },
    { name: "Chicken Tikka", price: "₹299", description: "Marinated chicken grilled in tandoor", isVeg: false, image: "/logo.jpg" },
    { name: "Papdi Chaat", price: "₹129", description: "Crispy wafers topped with yogurt and chutneys", isVeg: true, image: "/logo.jpg" },
  ],
  "main-course": [
    { name: "Dal Makhani", price: "₹249", description: "Slow-cooked black lentils in butter and cream", isVeg: true, image: "/logo.jpg" },
    { name: "Shahi Paneer", price: "₹279", description: "Cottage cheese in creamy tomato gravy", isVeg: true, image: "/logo.jpg" },
    { name: "Butter Chicken", price: "₹349", description: "Creamy tomato gravy with grilled chicken", isVeg: false, image: "/logo.jpg" },
    { name: "Kadhai Paneer", price: "₹269", description: "Paneer cooked with peppers and spices", isVeg: true, image: "/logo.jpg" },
    { name: "Chole Bhature", price: "₹199", description: "Spicy chickpeas with deep-fried bread", isVeg: true, image: "/logo.jpg" },
    { name: "Chicken Curry", price: "₹299", description: "Juicy chicken in flavorful curry", isVeg: false, image: "/logo.jpg" },
  ],
  breads: [
    { name: "Butter Naan", price: "₹49", description: "Soft naan brushed with butter", isVeg: true, image: "/logo.jpg" },
    { name: "Garlic Roti", price: "₹39", description: "Wheat bread with garlic", isVeg: true, image: "/logo.jpg" },
    { name: "Laccha Paratha", price: "₹59", description: "Layered Indian bread", isVeg: true, image: "/logo.jpg" },
    { name: "Jeera Rice", price: "₹149", description: "Basmati rice with cumin", isVeg: true, image: "/logo.jpg" },
    { name: "Veg Pulao", price: "₹179", description: "Rice with veggies and spices", isVeg: true, image: "/logo.jpg" },
  ],
  desserts: [
    { name: "Gulab Jamun", price: "₹99", description: "Deep-fried dumplings in sugar syrup", isVeg: true, image: "/logo.jpg" },
    { name: "Rasmalai", price: "₹129", description: "Soft paneer balls in milk", isVeg: true, image: "/logo.jpg" },
    { name: "Kulfi", price: "₹89", description: "Traditional Indian ice cream", isVeg: true, image: "/logo.jpg" },
    { name: "Jalebi", price: "₹79", description: "Syrupy spiral dessert", isVeg: true, image: "/logo.jpg" },
  ],
  beverages: [
    { name: "Masala Chai", price: "₹49", description: "Indian tea with spices", isVeg: true, image: "/logo.jpg" },
    { name: "Lassi", price: "₹79", description: "Yogurt-based sweet or salted drink", isVeg: true, image: "/logo.jpg" },
    { name: "Fresh Lime Soda", price: "₹69", description: "Refreshing lime drink", isVeg: true, image: "/logo.jpg" },
    { name: "Cold Coffee", price: "₹99", description: "Blended chilled coffee", isVeg: true, image: "/logo.jpg" },
  ],
}


const MenuCategories = () => {
  const [activeCategory, setActiveCategory] = useState("starters")

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-red-600"
          >
            Our Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mt-2"
          >
            Explore our authentic Delhi flavors
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                activeCategory === category.id
                  ? "bg-red-500 text-white shadow-md"
                  : "bg-white border border-red-300 text-red-600 hover:bg-red-100"
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
          className="grid md:grid-cols-2 gap-6"
        >
          {menuItems[activeCategory].map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-4 rounded-xl border border-red-100 bg-white shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                <img src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    {item.isVeg && (
                      <span className="w-3 h-3 bg-green-600 rounded-full" title="Vegetarian" />
                    )}
                  </div>
                  <span className="text-red-500 font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default MenuCategories
