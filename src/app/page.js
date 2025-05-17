"use client";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { WhatsApp, Phone } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 via-yellow-50 to-pink-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg w-full"
      >
        <Card className="shadow-2xl rounded-2xl">
          <CardContent className="text-center p-6">
            <Typography variant="h4" className="font-bold text-pink-600 mb-4">
              🚨 DilhiFlavours.com is For Sale!
            </Typography>

            <Typography variant="body1" className="text-gray-700 mb-4">
              Premium Domain for Food, Travel or Delhi-based Business.
            </Typography>

            <Typography variant="h6" className="text-green-600 font-semibold mb-4">
              Only @ ₹9999
            </Typography>

            <Typography variant="body2" className="text-gray-600 mb-6">
              Contact us today and grab this opportunity!
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
                color="primary"
                startIcon={<Phone />}
                href="tel:+919470352144"
              >
                Call Us
              </Button>
            </div>

            <div className="mt-6 text-xs text-gray-400">
              Domain Sales | Powered by SanInnovation E Services PVT LTD
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
