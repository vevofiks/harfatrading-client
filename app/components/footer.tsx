
'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const socialLinks = [
    { icon: faFacebook, url: "#", label: "Facebook" },
    { icon: faTwitter, url: "#", label: "Twitter" },
    { icon: faInstagram, url: "#", label: "Instagram" },
    { icon: faLinkedin, url: "#", label: "LinkedIn" },
    { icon: faWhatsapp, url: "https://wa.me/97470403660", label: "WhatsApp" }
  ];

  const contactInfo = {
    email: "info@harfa.com",
    mainPhone: "+974 4472 5867",
    mobilePhone: "+974 7040 3660",
    address: "LOGISTIC PARK BIRAKATUL AWAMIR",
    city: "DOHA, QATAR 🇶🇦",
    poBox: "P.O. Box 80611"
  };

  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate subscription process
    setError('');
    setIsSubscribed(true);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <footer className=" bg-gradient-to-b from-gray-900 to-black text-white pt-12">
      <div className="container mx-auto px-4 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-48 h-24 mb-4 transition-transform hover:scale-105">
              <Image
                src="/assets/logo1.png"
                alt="Harfa Trading Logo"
                fill
                style={{ objectFit: 'contain' }}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed text-center md:text-left">
              Your trusted partner in automotive parts in Qatar, delivering quality and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400 border-b border-red-400 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Products', 'Services', 'Our Partners', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-red-300 transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-red-400 rounded-full mr-2 group-hover:bg-red-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400 border-b border-red-400 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 group">
                <FontAwesomeIcon icon={faEnvelope} className="text-red-400 group-hover:text-red-300 transition-colors" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-red-300 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <FontAwesomeIcon icon={faPhone} className="text-red-400 group-hover:text-red-300 transition-colors" />
                <span className="text-gray-300">Main: {contactInfo.mainPhone}</span>
              </li>
              <li className="flex items-center gap-2 group">
                <FontAwesomeIcon icon={faWhatsapp} className="text-red-400 group-hover:text-red-300 transition-colors" />
                <span className="text-gray-300">Mobile: {contactInfo.mobilePhone}</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-400 mt-1" />
                <div className="text-gray-300">
                  <span className="block">{contactInfo.address}</span>
                  <span className="block">{contactInfo.city}</span>
                  <span className="block">{contactInfo.poBox}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links & CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400 border-b border-red-400 pb-2">Connect With Us</h4>
            
            {/* Social Media Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-500 transition-all duration-300 group hover:shadow-lg hover:shadow-red-500/50"
                >
                  <FontAwesomeIcon 
                    icon={link.icon} 
                    className="text-white group-hover:scale-110 transition-transform" 
                  />
                </a>
              ))}
            </div>
            {/* Newsletter Signup */}
<div className="bg-gray-700 p-6 rounded-xl shadow-lg">
  <h5 className="text-base font-semibold mb-2 text-white">Stay Updated</h5>
  <p className="text-xs text-gray-300 mb-4">Join our newsletter for exclusive offers and updates</p>
  
  {isSubscribed ? (
    <div className="text-green-400 text-sm p-3 bg-gray-600 rounded-lg text-center animate-pulse">
      Success! You're now subscribed!
    </div>
  ) : (
    <form onSubmit={handleSubscribe} className="max-w-full m-4">
    <div className="relative">
      <input 
        type="email" 
        placeholder="Your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-gray-600 text-white text-sm px-4 py-2.5 pr-28 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
      />
      <button 
        type="submit"
        className="absolute right-1 top-1 bottom-1 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-0 font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50"
      >
        Subscribe
      </button>
    </div>
  </form>
  
  )}
  
  {error && (
    <p className="text-red-400 text-xs mt-2 animate-shake">{error}</p>
  )}
</div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Harfa Trading WLL. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}