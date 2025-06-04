'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock 
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons'
import Footer from "../components/footer"

export default function ContactPage() {
  const contactInfo = [
    { icon: faMapMarkerAlt, text: "123 Auto Parts Street, Doha, Qatar" },
    { icon: faPhone, text: "+974 1234 5678" },
    { icon: faEnvelope, text: "info@harfatrading.com" },
    { icon: faClock, text: "Sat-Thu: 8:00 AM - 6:00 PM" }
  ]

  const socialIcons = [
    { icon: faFacebook, url: "#" },
    { icon: faTwitter, url: "#" },
    { icon: faInstagram, url: "#" },
    { icon: faLinkedin, url: "#" }
  ]

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-red-500 mb-8 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions about our products or services? Reach out to our team today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-red-600 p-3 rounded-full text-white text-lg">
                    <FontAwesomeIcon icon={info.icon} />
                  </div>
                  <p className="text-gray-300">{info.text}</p>
                </motion.div>
              ))}

              {/* Social Media Links */}
              <div className="pt-4">
                <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {socialIcons.map(({ icon, url }, i) => (
                    <motion.a
                      key={i}
                      href={url}
                      className="bg-gray-700 hover:bg-red-700 text-gray-300 hover:text-white p-3 rounded-full transition-colors duration-300"
                      whileHover={{ y: -3 }}
                    >
                      <FontAwesomeIcon icon={icon} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+974 1234 5678"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg resize-none bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  ></textarea>
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

     <Footer/>
    </>
  )
}
