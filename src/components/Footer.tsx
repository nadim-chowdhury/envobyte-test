import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#04134d] to-[#020b33] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-white">
            <span className="text-blue-500">Envo</span>byte
          </h2>
          <p className="text-gray-300 mt-2 text-sm">
            We are an IT company. We help businesses to bring ideas to life
            easily and affordably.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <ul className="mt-2 space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Learn More */}
        <div>
          <h3 className="text-lg font-semibold text-white">Learn More</h3>
          <ul className="mt-2 space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Combo Offer
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Service Industries
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Envobyte Apps
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white">Support</h3>
          <ul className="mt-2 space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
          <ul className="mt-2 space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <a
                href="mailto:support@envobyte.com"
                className="hover:text-white"
              >
                support@envobyte.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400" />
              <a href="tel:+16677772477" className="hover:text-white">
                +1 (667) 777 2477
              </a>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-4 mt-4 text-white">
            <a href="#" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      <div>
        <p>&copy;2025 - ENVOBYTE, All rights are reserved.</p>
      </div>
    </footer>
  );
}
