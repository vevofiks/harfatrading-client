'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Footer from "../components/footer";

export function About() {
  const socialIcons = [
    { icon: faFacebook, url: "#" },
    { icon: faTwitter, url: "#" },
    { icon: faInstagram, url: "#" },
    { icon: faLinkedin, url: "#" }
  ];

  return (
    <>
      <section
        id="about"
        className="bg-gradient-to-b from-red-900/40 via-black/90 to-gray-50 py-20 px-4"
      >
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-red-500">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            {/* Image Section */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/company.jpeg"
                alt="Harfa Trading Facility"
                fill
                sizes="100vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-gray-300">
              <h3 className="text-3xl font-semibold text-white">
                A Decade of Trust & Innovation
              </h3>
              <p>
                Since our establishment in 2014, Harfa Trading has revolutionized Qatar's automotive
                wholesale industry by delivering premium products and unmatched service.
              </p>
              <p>
                Our headquarters at the LOGISTIC PARK BIRAKATUL AWAMIR - WUKAIR, Doha, serve as the
                central hub of operations, distribution, and innovation.
              </p>
              <p>
                We’ve grown through strategic partnerships with top manufacturers across Asia, Europe,
                and the Middle East — solidifying our position as a trusted name in the region.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold text-red-500">10+</div>
                  <div className="text-gray-400">Years of Excellence</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold text-red-500">10K+</div>
                  <div className="text-gray-400">Products Available</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Learn More Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-16 text-center"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300"
              >
                Learn More About Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </>
  );
}

export default About;
