"use client"
import { motion } from "framer-motion";
import { Phone, Email, WhatsApp } from "@mui/icons-material";

const HomePageCTA = () => {
  return (
    <section
      className="relative py-24 bg-[url('/images/food-bg.jpg')] bg-cover bg-center text-white"
      style={{ backgroundBlendMode: "overlay", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            ❤️ Fall in Love with the Flavours of Delhi
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10">
            Experience rich spices, sizzling aromas, and authentic dishes—now in Ranchi.
            Book your table today or reach out for catering.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
            <div className="flex items-center text-white/90">
              <Phone className="mr-2" />
              <span>+91 9942889933</span>
            </div>
            <div className="flex items-center text-white/90">
              <Phone className="mr-2" />
              <span>+91 9905555938</span>
            </div>
            <div className="flex items-center text-white/90">
              <Email className="mr-2" />
              <span>thedilhiflavours@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="https://wa.me/919942889933"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffe066] text-[#2d3142] font-semibold py-4 px-8 rounded-full inline-flex items-center hover:bg-[#ffcc00] transition-all"
            >
              <WhatsApp className="mr-2" />
              Chat on WhatsApp
            </a>

            <a
              href="http://www.dilhiflavours.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white/80 hover:text-white"
            >
              Visit www.dilliflavours.com →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePageCTA;
