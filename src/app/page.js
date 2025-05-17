"use client";
import { Card, CardContent, Button, Typography, Chip } from "@mui/material";
import { WhatsApp, Phone, Language } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-50 via-red-50 to-orange-100 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl"
      >
        <Card className="rounded-3xl shadow-2xl border border-orange-200">
          <CardContent className="p-6 text-center">
            <Chip
              label="Premium Domain for Sale"
              color="error"
              className="mb-4 text-white"
              icon={<Language />}
            />

            <Typography variant="h4" className="font-bold text-orange-600 mb-2">
              TheDilhiFlavours.com
            </Typography>

            <Typography className="text-gray-600 mb-4">
              A perfect domain for food, culture, or local Delhi-based business.
              Secure it today before it’s gone!
            </Typography>

            <Typography variant="h6" className="text-green-600 mb-2 font-semibold">
              Just ₹9999
            </Typography>

            <Typography className="text-gray-500 mb-6">
              Contact us now via WhatsApp or Call.
            </Typography>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="contained"
                color="success"
                startIcon={<WhatsApp />}
                href="https://wa.me/919470352144"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Now
              </Button>

              <Button
                variant="outlined"
                color="error"
                startIcon={<Phone />}
                href="tel:+919470352144"
              >
                Call Us
              </Button>
            </div>

            <div className="mt-6 text-xs text-gray-400">
              Domain Sales | Powered by <span className="font-semibold text-gray-500">SanInnovation E Services PVT LTD</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
