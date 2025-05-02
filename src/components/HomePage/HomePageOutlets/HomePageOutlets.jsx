"use client"

import { motion } from "framer-motion"
import { LocationOn, Phone, AccessTime } from "@mui/icons-material"
import Link from "next/link"

const outlets = [
  {
    id: 1,
    location: "Katatoli",
    address: "Ground Floor, Bhajnath Sundari Bhawan, Katatoli, Ranchi – 834001",
    phone: "+91 9942889933",
    hours: "11:00 AM - 10:00 PM",
  },
  {
    id: 2,
    location: "Lalpur (Circular Road)",
    address: "Shop No. 1, Ground Floor, Deorani Complex, Circular Road, Lalpur, Ranchi – 834001",
    phone: "+91 9905555938",
    hours: "11:00 AM - 10:00 PM",
  },
  {
    id: 3,
    location: "Lalpur (East Jail Road)",
    address: "Shop No. 1, Ground Floor, Maa Parwati Complex, East Jail Road, Lalpur, Ranchi – 834001",
    phone: "+91 9942889933",
    hours: "11:00 AM - 10:00 PM",
  },
]

const HomePageOutlets = () => {
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
            Visit Our Outlets
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            We have three convenient locations across Ranchi to serve you
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outlets.map((outlet, index) => (
            <motion.div
              key={outlet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <LocationOn className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{outlet.location}</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex">
                  <LocationOn className="text-gray-400 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{outlet.address}</p>
                </div>

                <div className="flex items-center">
                  <Phone className="text-gray-400 mr-3" />
                  <p className="text-gray-600">{outlet.phone}</p>
                </div>

                <div className="flex items-center">
                  <AccessTime className="text-gray-400 mr-3" />
                  <p className="text-gray-600">{outlet.hours}</p>
                </div>
              </div>

              <Link
                href={`https://maps.google.com/?q=${encodeURIComponent(outlet.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Get Directions
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/outlets" className="btn-primary">
            Learn More About Our Locations
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomePageOutlets
