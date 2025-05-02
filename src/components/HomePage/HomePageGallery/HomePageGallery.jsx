"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowForward, Close } from "@mui/icons-material"

const galleryImages = [
  { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Restaurant Interior" },
  { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Delicious Food" },
  { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Chef Preparing Food" },
  { id: 4, src: "/placeholder.svg?height=400&width=600", alt: "Special Dish" },
  { id: 5, src: "/placeholder.svg?height=400&width=600", alt: "Outdoor Seating" },
  { id: 6, src: "/placeholder.svg?height=400&width=600", alt: "Dessert Platter" },
]

const HomePageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

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
            Our Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Take a visual tour of our restaurant and delicious food
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-60 md:h-72 rounded-lg overflow-hidden cursor-pointer group"
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
        </div>

        <div className="text-center mt-10">
          <Link href="/gallery" className="inline-flex items-center text-primary font-medium hover:underline">
            View more photos in our gallery
            <ArrowForward className="ml-2 text-sm" />
          </Link>
        </div>
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
          <div className="relative w-full max-w-4xl h-[70vh]">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default HomePageGallery
