import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, YouTube, LocationOn, Phone, Email } from "@mui/icons-material"

const FooterEl = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="relative w-[180px] h-[60px] mb-6">
              <Image src="/logo.png" alt="Dilhi Flavours Logo" fill className="object-contain" />
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Dilhi Flavours brings the authentic taste of Delhi to Ranchi. Experience the capital of taste with our
              delicious North Indian cuisine.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <YouTube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Outlets", "Menus", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Outlets */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Outlets</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Katatoli</h4>
                <p className="text-gray-400 text-sm">
                  Ground Floor, Bhajnath Sundari Bhawan, Katatoli, Ranchi – 834001
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Lalpur (Circular Road)</h4>
                <p className="text-gray-400 text-sm">
                  Shop No. 1, Ground Floor, Deorani Complex, Circular Road, Lalpur, Ranchi – 834001
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Lalpur (East Jail Road)</h4>
                <p className="text-gray-400 text-sm">
                  Shop No. 1, Ground Floor, Maa Parwati Complex, East Jail Road, Lalpur, Ranchi – 834001
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="text-primary mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-400">+91 9942889933</p>
              </div>
              <div className="flex items-start">
                <Phone className="text-primary mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-400">+91 9905555938</p>
              </div>
              <div className="flex items-start">
                <Email className="text-primary mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-400">thedilhiflavours@gmail.com</p>
              </div>
              <div className="flex items-start">
                <LocationOn className="text-primary mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Ranchi, Jharkhand, India</p>
              </div>
              <a
                href="http://www.dilliflavours.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.dilliflavours.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Dilhi Flavours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterEl
