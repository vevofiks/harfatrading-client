'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'



export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const MotionLink = motion(Link);


  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-90 pt-20 md:pt-40 pb-16">
      {/* Enhanced Background Effects with Moving Gradient */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-red-900/40 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(220,38,38,0.2),transparent_70%)]" />
      </motion.div>

      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 z-5"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.1, 0.1, 0],
          scale: [1, 1.1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,0,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />




      {/* Main Content with Enhanced Typography and Animations */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.div
            initial={{ clipPath: 'inset(0 50% 0 50%)' }}
            animate={{ clipPath: 'inset(0 0% 0 0%)' }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Best Car Accessories in Qatar, Doha


            </h1>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-200 font-light"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your trusted partner for genuine automotive components in Qatar , Doha
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <MotionLink
            href="/products"
            className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl transition-all duration-300 inline-block text-lg font-semibold relative overflow-hidden shadow-lg hover:shadow-red-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 group-hover:text-white transition-colors">
              Explore Products
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </MotionLink>

          <MotionLink
            href="/contact"
            className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 inline-block text-lg font-semibold border border-white/30 relative overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </MotionLink>
        </motion.div>

        {/* Enhanced Stats with 3D Hover Effect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "98%", label: "Satisfaction", icon: "⭐" },
            { number: "10K+", label: "Accessories Available", icon: "🚗" },
            { number: "1 Hour", label: "Response Time", icon: "⚡" },
            { number: "24/7", label: "Support", icon: "🛠️" }

          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: 10,
              }}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 transform perspective-1000"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <motion.div
                className="text-3xl font-bold text-red-500 mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 