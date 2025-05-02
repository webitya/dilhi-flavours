"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FormatQuote, Star } from "@mui/icons-material"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Food Blogger",
    quote:
      "Dilhi Flavours truly brings the authentic taste of Delhi to Ranchi. Their chaat is exactly how I remember it from my childhood in Delhi!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Gupta",
    role: "Regular Customer",
    quote:
      "The butter chicken here is to die for! I've been coming here every weekend for the past year and the quality has always been consistent.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Local Resident",
    quote:
      "Finally found a place in Ranchi that serves authentic Delhi-style street food. The gol gappe are exactly like the ones in Delhi!",
    rating: 4,
  },
]

const HomePageTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            What Our Customers Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Don't just take our word for it - hear from our satisfied customers
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 50,
                  zIndex: activeIndex === index ? 10 : 0,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-white rounded-xl shadow-mduration: 0.5}}
                className={\`absolute inset-0 bg-white rounded-xl shadow-md p-8 flex flex-col ${
                  activeIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <FormatQuote className="text-5xl text-primary/20 mb-4" />
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div className="mt-auto">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"} text-xl`}
                      />
                    ))}
                  </div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-primary w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePageTestimonials
