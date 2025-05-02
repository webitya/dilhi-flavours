"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "@mui/icons-material"

const chefs = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Head Chef",
    bio: "With over 20 years of experience in Delhi's finest kitchens",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Pastry Chef",
    bio: "Specializes in traditional Indian sweets with a modern twist",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Vikram Sharma",
    role: "Tandoor Expert",
    bio: "Master of the tandoor with expertise in grilled delicacies",
    image: "/placeholder.svg?height=400&width=400",
  },
]

const HomePageChefs = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Meet Our Chefs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            The talented culinary artists behind our delicious creations
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden group"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={chef.image || "/placeholder.svg"}
                  alt={chef.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{chef.name}</h3>
                <p className="text-primary font-medium mb-2">{chef.role}</p>
                <p className="text-gray-600 mb-4">{chef.bio}</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Facebook />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Instagram />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Twitter />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomePageChefs
