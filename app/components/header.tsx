'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useState} from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faCar,
  faInfoCircle,
  faStar,
  faPhone,

} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
  )

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  )

  const navItems = [
    { name: 'Home', href: '#home', icon: faHome },
    { name: 'Products', href: '#products', icon: faCar },
    { name: 'About', href: '#about', icon: faInfoCircle },
    { name: 'Reviews', href: '#reviews', icon: faStar },
    { name: 'Contact', href: '/contact', icon: faPhone },
  ]

  return (
    <motion.header
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link
              href="/"
              className="flex items-center space-x-3 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <Image src="/assets/logo1.png"
                  alt='log'
                  className="brightness-0 invert"
                  width={50}
                  height={50}>
                </Image>              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-none">
                  HARFA 
                </div>
                <div className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  TRADING WLL
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex md:items-center md:space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-all duration-300 text-sm uppercase tracking-wider font-medium group"
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                  </span>
                  <span className="relative">
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4 ">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hidden md:flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
            </motion.button>


            {/* Mobile Menu Button */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="md:hidden"
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:from-red-600 hover:to-red-700 transition-colors duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/30"
              >
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  className="w-6 h-6 flex"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="absolute h-0.5 w-6 bg-white transform transition-all duration-300"
                      style={{
                        top: i * 8 + 12,
                        rotate: isOpen ? (i === 1 ? 45 : i === 2 ? -45 : 0) : 0,
                        opacity: isOpen && i === 1 ? 0 : 1,
                      }}
                    />
                  ))}
                </motion.div>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}
          className="md:hidden overflow-hidden bg-gradient-to-r from-red-500 to-red-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 ">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2 text-base font-medium text-gray-300 hover:text-red-500 hover:bg-white/10 rounded-lg transition-all duration-300 group"
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                  </span>
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}


          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
} 