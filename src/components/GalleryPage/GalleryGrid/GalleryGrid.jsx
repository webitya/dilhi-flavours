"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Close } from "@mui/icons-material"

const categories = [
  { id: "all", name: "All" },
  { id: "food", name: "Food" },
  { id: "restaurant", name: "Restaurant" },
  { id: "events", name: "Events" },
]

const galleryImages = [
  { id: 1, src: "/placeholder.svg?height=600&width=800", alt: "Restaurant Interior", category: "restaurant" },
  { id: 2, src: "/placeholder.svg?height=600&width=800", alt: "Butter Chicken", category: "food" },
  { id: 3, src: "/placeholder.svg?height=600&width=800", alt: "Chef Preparing Food", category: "restaurant" },
  { id: 4, src: "/placeholder.svg?height=600&width=800", alt: "Chaat Platter", category: "food" },
  { id: 5, src: "/placeholder.svg?height=600&width=800", alt: "Outdoor Seating", category: "restaurant" },
  { id: 6, src: "/placeholder.svg?height=600&width=800", alt: "Dessert Platter", category: "food" },
  { id: 7, src: "/placeholder.svg?height=600&width=800", alt: "Food Festival", category: "events" },
  { id: 8, src: "/placeholder.svg?height=600&width=800", alt: "Biryani", category: "food" },
  { id: 9, src: "/placeholder.svg?height=600&width=800", alt: "Restaurant Celebration", category: "events" },
  { id: 10, src: "/placeholder.svg?height=600&width=800", alt: "Tandoori Platter", category: "food" },
  { id: 11, src: "/placeholder.svg?height=600&width=800", alt: "Private Dining Area", category: "restaurant" },
  { id: 12, src: "/placeholder.svg?height=600&width=800", alt: "Anniversary Celebration", category: "events" },
]

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

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
            Photo Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Browse through our collection of photos showcasing our food, restaurant, and events
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

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <motion.div
              layout
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">View</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <Close className="text-3xl" />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
            <p className="absolute bottom-4 left-0 right-0 text-center text-white">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default GalleryGrid
