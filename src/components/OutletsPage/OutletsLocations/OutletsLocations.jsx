"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LocationOn, Phone, AccessTime, DirectionsCar } from "@mui/icons-material"

const outlets = [
  {
    id: 1,
    name: "Katatoli Branch",
    location: "Katatoli",
    address: "Ground Floor, Bhajnath Sundari Bhawan, Katatoli, Ranchi – 834001",
    phone: "+91 9942889933",
    hours: "11:00 AM - 10:00 PM",
    image:"/logo.jpg",
    mapUrl: "https://maps.google.com/?q=Katatoli,Ranchi",
  },
  {
    id: 2,
    name: "Lalpur Circular Road Branch",
    location: "Lalpur (Circular Road)",
    address: "Shop No. 1, Ground Floor, Deorani Complex, Circular Road, Lalpur, Ranchi – 834001",
    phone: "+91 9905555938",
    hours: "11:00 AM - 10:00 PM",
    image: "/logo.jpg",
    mapUrl: "https://maps.google.com/?q=Circular Road,Lalpur,Ranchi",
  },
  {
    id: 3,
    name: "Lalpur East Jail Road Branch",
    location: "Lalpur (East Jail Road)",
    address: "Shop No. 1, Ground Floor, Maa Parwati Complex, East Jail Road, Lalpur, Ranchi – 834001",
    phone: "+91 9942889933",
    hours: "11:00 AM - 10:00 PM",
    image: "/logo.jpg",
    mapUrl: "https://maps.google.com/?q=East Jail Road,Lalpur,Ranchi",
  },
]

const OutletsLocations = () => {
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
            Our Locations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Visit us at any of our three convenient locations across Ranchi
          </motion.p>
        </div>

        <div className="space-y-16">
          {outlets.map((outlet, index) => (
            <motion.div
              key={outlet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
                  <Image src={outlet.image || "/placeholder.svg"} alt={outlet.name} fill className="object-cover" />
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">{outlet.name}</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <LocationOn className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{outlet.address}</p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="text-primary mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{outlet.phone}</p>
                  </div>

                  <div className="flex items-center">
                    <AccessTime className="text-primary mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{outlet.hours}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={outlet.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <DirectionsCar />
                    <span>Get Directions</span>
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

export default OutletsLocations
