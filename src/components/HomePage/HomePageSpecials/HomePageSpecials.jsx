"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LocalFireDepartment } from "@mui/icons-material"

const specialItems = [
  {
    id: 1,
    name: "Delhi Special Chaat Platter",
    description:
      "A delightful assortment of Delhi's famous street food including gol gappe, papdi chaat, and aloo tikki",
    price: "₹299",
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
  },
  {
    id: 2,
    name: "Butter Chicken",
    description: "Tender chicken pieces cooked in a rich, creamy tomato sauce with a blend of aromatic spices",
    price: "₹349",
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
  },
  {
    id: 3,
    name: "Dilli Wali Biryani",
    description: "Fragrant basmati rice cooked with tender meat, aromatic herbs, and our secret blend of spices",
    price: "₹329",
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
  },
]

const HomePageSpecials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-4"
          >
            <span className="font-medium">Chef's Recommendations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Special Dishes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Discover our most loved dishes that keep our customers coming back for more
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative h-60 w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <LocalFireDepartment className="mr-1 text-sm" />
                    Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-lg font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="btn-primary"
          >
            View Full Menu
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default HomePageSpecials
