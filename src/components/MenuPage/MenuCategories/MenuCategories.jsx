"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"


const categories = [
  { id: "starters", name: "Starters & Chaats" },
  { id: "main-course", name: "Main Course" },
  { id: "breads", name: "Breads & Rice" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
]

const menuItems = {
  starters: [
    {
      name: "Paneer Tikka",
      price: "₹249",
      description: "Marinated cottage cheese grilled to perfection",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Dahi Bhalla",
      price: "₹149",
      description: "Soft lentil dumplings topped with yogurt and chutneys",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Aloo Tikki Chaat",
      price: "₹129",
      description: "Crispy potato patties topped with yogurt and chutneys",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Gol Gappe (6 Pcs)",
      price: "₹99",
      description: "Crispy hollow puris filled with spicy tangy water",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Chicken Tikka",
      price: "₹299",
      description: "Tender chicken pieces marinated and grilled in tandoor",
      isVeg: false,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Papdi Chaat",
      price: "₹129",
      description: "Crispy wafers topped with potatoes, yogurt and chutneys",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  "main-course": [
    {
      name: "Dal Makhani",
      price: "₹249",
      description: "Black lentils cooked overnight with butter and cream",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Shahi Paneer",
      price: "₹279",
      description: "Cottage cheese in a rich, creamy tomato gravy",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Butter Chicken",
      price: "₹349",
      description: "Tender chicken pieces in a rich tomato and butter gravy",
      isVeg: false,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Kadhai Paneer",
      price: "₹269",
      description: "Cottage cheese cooked with bell peppers in a spicy gravy",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Chole Bhature",
      price: "₹199",
      description: "Spicy chickpea curry served with fried bread",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Chicken Curry",
      price: "₹299",
      description: "Tender chicken pieces in a flavorful curry",
      isVeg: false,
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  breads: [
    {
      name: "Butter Naan",
      price: "₹49",
      description: "Soft leavened bread brushed with butter",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Garlic Roti",
      price: "₹39",
      description: "Whole wheat bread with garlic flavor",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Laccha Paratha",
      price: "₹59",
      description: "Layered whole wheat bread",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Jeera Rice",
      price: "₹149",
      description: "Basmati rice cooked with cumin seeds",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Veg Pulao",
      price: "₹179",
      description: "Basmati rice cooked with vegetables and spices",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  desserts: [
    {
      name: "Gulab Jamun",
      price: "₹99",
      description: "Deep-fried milk solids soaked in sugar syrup",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Rasmalai",
      price: "₹129",
      description: "Soft cottage cheese dumplings in sweetened milk",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Kulfi",
      price: "₹89",
      description: "Traditional Indian ice cream",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Jalebi",
      price: "₹79",
      description: "Crispy, syrupy sweet pretzel-shaped dessert",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  beverages: [
    {
      name: "Masala Chai",
      price: "₹49",
      description: "Spiced Indian tea with milk",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Lassi",
      price: "₹79",
      description: "Sweet or salted yogurt-based drink",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Fresh Lime Soda",
      price: "₹69",
      description: "Refreshing lime-based drink with soda",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Cold Coffee",
      price: "₹99",
      description: "Chilled coffee blended with ice cream",
      isVeg: true,
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
}

const MenuCategories = () => {
  const [activeCategory, setActiveCategory] = useState("starters")

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Menu
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Explore our wide range of authentic Delhi cuisine
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
          {menuItems[activeCategory].map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                    {item.isVeg && (
                      <span className="text-green-600">
                        {/* <Vegetarian fontSize="small" /> */}
                      </span>
                    )}
                  </div>
                  <span className="font-bold text-primary">{item.price}</span>
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
