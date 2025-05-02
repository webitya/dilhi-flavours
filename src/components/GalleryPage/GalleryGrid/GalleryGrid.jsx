"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Close } from "@mui/icons-material"

const categories = [
  { id: "all", name: "All" },
  { id: "food", name: "Food" },
  { id: "restaurant", name: "Restaurant" },
  { id: "events", name: "Events" },
]

const galleryImages = [
  { id: 1, src: "https://source.unsplash.com/600x600/?restaurant", alt: "Restaurant Interior", category: "restaurant" },
  { id: 2, src: "https://source.unsplash.com/600x600/?butter-chicken", alt: "Butter Chicken", category: "food" },
  { id: 3, src: "https://source.unsplash.com/600x600/?chef", alt: "Chef Preparing Food", category: "restaurant" },
  { id: 4, src: "https://source.unsplash.com/600x600/?chaat", alt: "Chaat Platter", category: "food" },
  { id: 5, src: "https://source.unsplash.com/600x600/?outdoor-dining", alt: "Outdoor Seating", category: "restaurant" },
  { id: 6, src: "https://source.unsplash.com/600x600/?dessert", alt: "Dessert Platter", category: "food" },
  { id: 7, src: "https://source.unsplash.com/600x600/?festival", alt: "Food Festival", category: "events" },
  { id: 8, src: "https://source.unsplash.com/600x600/?biryani", alt: "Biryani", category: "food" },
  { id: 9, src: "https://source.unsplash.com/600x600/?celebration", alt: "Restaurant Celebration", category: "events" },
  { id: 10, src: "https://source.unsplash.com/600x600/?tandoori", alt: "Tandoori Platter", category: "food" },
  { id: 11, src: "https://source.unsplash.com/600x600/?dining", alt: "Private Dining Area", category: "restaurant" },
  { id: 12, src: "https://source.unsplash.com/600x600/?party", alt: "Anniversary Celebration", category: "events" },
]

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-red-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-red-600 drop-shadow-sm"
          >
            Photo Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mt-2"
          >
            A flavorful glimpse into our food, ambience, and celebrations.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-white text-red-600 border border-red-200 hover:bg-red-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <motion.div
              layout
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-white"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">View</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <Close className="text-3xl" />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="object-contain w-full h-full rounded-md"
            />
            <p className="absolute bottom-4 left-0 right-0 text-center text-white">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default GalleryGrid
