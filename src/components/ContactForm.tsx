"use client";

import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "support@envobyte.com",
    phone: "+1 (667) 777 2477",
    company: "Envobyte",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-[#04134d] to-[#020b33] text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg w-full lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-400 rounded-md text-gray-300 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                disabled
                className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-400 rounded-md text-gray-300 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                disabled
                className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-400 rounded-md text-gray-300 cursor-not-allowed"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full py-3 mt-2 bg-blue-500 hover:bg-blue-600 transition text-white rounded-md flex items-center justify-center"
              >
                Send message →
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            Let us know what you think!
          </h2>
          <p className="text-gray-300 mb-6">
            Got something on your mind? Share it with us! Drop a message, and
            we&apos;ll respond quickly to assist you.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-gray-500 pb-2">
              <MdEmail className="text-xl text-blue-400" />
              <a
                href="mailto:support@envobyte.com"
                className="text-gray-300 hover:text-white transition"
              >
                support@envobyte.com
              </a>
            </div>
            <div className="flex items-center gap-3 border-b border-gray-500 pb-2">
              <FaWhatsapp className="text-xl text-green-400" />
              <a
                href="tel:+16677772477"
                className="text-gray-300 hover:text-white transition"
              >
                +1 (667) 777 2477
              </a>
            </div>
            <div className="flex items-center gap-3 border-b border-gray-500 pb-2">
              <FaLinkedin className="text-xl text-blue-600" />
              <a
                href="https://www.linkedin.com/company/envobyte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                www.linkedin.com/company/envobyte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
