"use client"

import { motion } from "framer-motion"
import { Phone, Email, WhatsApp } from "@mui/icons-material"

const HomePageCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 md:flex items-center justify-between">
            <div className="md:w-7/12 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Taste of Delhi?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl">
                Visit one of our outlets in Ranchi or contact us to make a reservation. We're excited to serve you the
                authentic flavors of Delhi!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-3" />
                  <span>+91 9942889933</span>
                </div>
                <div className="flex items-center">
                  <Email className="mr-3" />
                  <span>thedilhiflavours@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3" />
                  <span>+91 9905555938</span>
                </div>
              </div>
            </div>

            <div className="md:w-4/12">
              <a
                href="https://wa.me/919942889933"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-gray-900 font-bold py-4 px-8 rounded-lg inline-flex items-center hover:bg-secondary/90 transition-colors"
              >
                <WhatsApp className="mr-2" />
                WhatsApp Us
              </a>

              <p className="mt-4 text-white/80">
                Or visit our website:{" "}
                <a
                  href="http://www.dilliflavours.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  www.dilliflavours.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomePageCTA
