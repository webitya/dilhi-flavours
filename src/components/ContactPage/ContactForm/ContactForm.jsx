"use client";

import { useState } from "react";
import { Send } from "@mui/icons-material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Contact Info Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 space-y-6 border-t-4 border-orange-400">
          <h3 className="text-2xl font-bold text-orange-500">Contact Information</h3>
          <div className="text-gray-700 space-y-4 text-sm">
            <div>
              <p className="font-medium text-base">📞 Phone</p>
              <p>+91 9942889933
              </p>
              <p>+91 9905555938</p>
             
            </div>
            <div>
              <p className="font-medium text-base">📧 Email</p>
              <p>contact@delhiflavour.in</p>
            </div>
            <div>
              <p className="font-medium text-base">📍 Address</p>
              <p>Delhi Flavours Restaurant,</p>
              <p>Main Road, Ranchi, Jharkhand 834001</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-extrabold text-orange-500 mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Have a question or want to make a reservation? Send us a message!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-400 focus:border-orange-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-400 focus:border-orange-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-400 focus:border-orange-400"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Reservation Request"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-400 focus:border-orange-400"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all"
              >
                <Send />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
