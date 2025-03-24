import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Refund Policy", href: "/refund-policy" },
    ],
  },
  {
    title: "Learn More",
    links: [
      { name: "Combo Offer", href: "/combo-offer" },
      { name: "Service Industries", href: "/service-industries" },
      { name: "Envobyte Apps", href: "/apps" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  },
];

const socialLinks = [
  { href: "#", icon: <FaFacebookF />, color: "hover:text-blue-400" },
  { href: "#", icon: <FaLinkedinIn />, color: "hover:text-blue-500" },
  { href: "#", icon: <FaInstagram />, color: "hover:text-pink-400" },
  { href: "#", icon: <FaTwitter />, color: "hover:text-blue-400" },
  { href: "#", icon: <FaPinterestP />, color: "hover:text-red-500" },
];

export default function Footer() {
  return (
    <footer className="bg-background text-white py-8">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="pr-8">
          <Image
            src="/assets/logo.png"
            alt=""
            width={320}
            height={180}
            className="w-32"
          />

          <p className="text-gray-300 mt-2 text-sm">
            We are an IT company. We help businesses bring ideas to life easily
            and affordably.
          </p>
        </div>

        {/* Dynamic Link Lists */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-white">
              {section.title}
            </h3>
            <ul className="mt-2 space-y-2 text-gray-300 text-sm">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
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
          <div className="flex flex-wrap gap-4 mt-4 text-white">
            {socialLinks.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className={`${social.color} border border-gray-300 rounded p-1 transition-all duration-300 hover:bg-gray-200`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-blue-600 text-center text-xs">
        <p>&copy;2025 - ENVOBYTE, All rights reserved.</p>
      </div>
    </footer>
  );
}
