'use client'

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

const CEO = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-900">
      <div className="container mx-auto px-2">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 overflow-hidden">
            <div className="relative w-full md:w-1/3 aspect-[3/4] rounded-2xl shadow-xl">
              <div className="absolute inset-4">
                <Image
                  src="/assets/rahim.jpeg"
                  alt="CEO of Harfa Trading"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                A Message From Our <span className="text-red-600">CEO</span>
              </h2>
              
              <div className="prose prose-lg text-gray-600 mb-6">
                <p>
                  "At Harfa Trading, we're committed to revolutionizing the automotive industry in Qatar. Our journey began with a vision to provide unparalleled quality and service in automotive parts and accessories. Over the years, we've built strong partnerships with leading manufacturers across Asia, Europe, and the Middle East, ensuring that we deliver only the best to our customers.
                  <br /><br />
                  As we look to the future, our focus remains on innovation and customer satisfaction. We are dedicated to expanding our product offerings and enhancing our services to meet the evolving needs of our clients. Thank you for being a part of our journey, and we look forward to serving you with excellence."
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-gray-900 mt-2">Rahim</h3>
                <p className="text-red-600 font-medium">Founder & CEO</p>
                <p className="text-black mt-1">
                  Harfa Trading Wll, Doha, Qatar
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CEO;
