'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '../components/footer'
import Link from 'next/link'

export default function About() {
  const features = [
    {
      icon: "fa-globe",
      title: "Global Network",
      text: "International Sourcing",
      description: "Direct partnerships with  manufacturers in China, Dubai, Germany, Taiwan, and India"
    },
    {
      icon: "fa-box-open",
      title: "Product Range",
      text: "Extensive Inventory",
      description: "Over 10,000  car accessories carefully selected for quality and performance"
    },
    {
      icon: "fa-medal",
      title: "Market Leadership",
      text: "Decade of Excellence",
      description: "Setting industry standards in Qatar's automotive wholesale market since 2014"
    },
    {
      icon: "fa-handshake",
      title: "Customer Success",
      text: "Dedicated Support",
      description: "Personalized service and expert guidance for every business partner"
    }
  ]

  const founders = [
    {
      name: "Abdul Raheem",
      role: "Chief Executive Officer",
      description: "Visionary leader driving Harfa's growth and innovation",
      image: "/assets/rahim.jpeg"
    },
    {
      name: "Hashim",
      role: "Founding Partner",
      description: "Oversees international partnerships and strategic planning",
      image: "/assets/team/hashim.jpg"
    },
    {
      name: "Ali",
      role: "Founding Partner",
      description: "Leads product development and quality assurance",
      image: "/assets/team/ali.jpg"
    },
    {
      name: "Firoz",
      role: "Founding Partner",
      description: "Manages operations and supply chain excellence",
      image: "/assets/team/firoz.jpg"
    },
    {
      name: "Azeez",
      role: "Founding Partner",
      description: "Directs customer relations and market expansion",
      image: "/assets/team/azeez.jpg"
    }
  ]

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">

        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
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
        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-red-500">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/company.jpeg"
                alt="Harfa Trading Facility"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-white">A Decade of Trust & Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Since our establishment in 2014, Harfa Trading has revolutionized Qatar's automotive
                wholesale industry. What began as a vision shared by five passionate entrepreneurs
                has evolved into Qatar's most trusted source for car accessories.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our headquarters in the LOGISTIC PARK BIRAKATUL AWAMIR - WULAIR, Doha, serves as the central hub for our wholesale operations,
                from which we distribute premium automotive products to businesses throughout Qatar.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through strategic partnerships with manufacturers across Asia, Europe, and the Middle East,
                we've built a comprehensive inventory that meets the diverse needs of Qatar's automotive market.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-red-500">10+</div>
                  <div className="text-gray-400">Years of Excellence</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-red-500">10K+</div>
                  <div className="text-gray-400">Products Available</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-red-500">Harfa</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center mb-6">
                  <i className={`fas ${feature.icon} text-2xl text-white`}></i>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{feature.text}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-red-500">Leadership</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              The visionaries shaping the future of automotive excellence in Qatar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {founders.map((founder, index) => (    // Populate category to get the name

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-gradient-to-b from-gray-800/90 to-black/90 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative h-[300px] overflow-hidden">
                    {founder.image ? (
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                        <i className="fas fa-user text-6xl text-white/50"></i>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  </div>

                  <div className="p-6 relative z-10">
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                      {founder.name}
                    </h4>
                    <p className="text-red-400 font-medium mb-3">{founder.role}</p>
                    <p className="text-gray-400 leading-relaxed">{founder.description}</p>

                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <div className="flex gap-3">
                        <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors">
                          <i className="fab fa-linkedin-in text-white text-sm"></i>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors">
                          <i className="fab fa-twitter text-white text-sm"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-black/90 via-red-900/40 to-black/90 rounded-2xl p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with Qatar's Best?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses who trust Harfa Trading for their automotive needs
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 text-lg font-semibold shadow-xl"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
} 