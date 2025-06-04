'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

function App() {
  const partners = [
    { name: 'qmacx', image: '/assets/qmax-bg.png' },
    { name: 'imacx', image: '/assets/imax-bg.png' },
    { name: 'dumacx', image: '/assets/dumax-bg.png' },
    { name: 'dupond', image: '/assets/dupond-bg.png' },
    { name: 'flash cars', image: '/assets/flashcar-bg.png' },
    { name: 'qmacx', image: '/assets/qmax-bg.png' },
    { name: 'imacx', image: '/assets/imax-bg.png' },
    { name: 'dumax', image: '/assets/dumax-bg.png' },
    { name: 'dupond', image: '/assets/dupond-bg.png' },
    { name: 'flash cars', image: '/assets/flashcar-bg.png' },
  ];

  return (
    <div className="h-auto bg-black py-16">
      <section className="relative overflow-hidden">
        <div className="relative mx-auto px-4 max-w-7xl">
          {/* Enhanced Header with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-red-500">Brand Partners</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We collaborate with industry-leading brands to deliver exceptional quality and innovation
            </p>
          </motion.div>

          {/* Enhanced Slider with Larger Logos */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  className="flex-none w-[300px] mx-4 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                <div className="flex flex-col items-center w-[240px] group">
  <div className="relative w-full h-[120px]">
    <Image
      src={partner.image}
      alt={partner.name}
      fill
      className="object-contain p-4 opacity-90 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
    />
  </div>
  <motion.span
    className="mt-4 px-3 py-1 rounded bg-black bg-opacity-60 text-white text-base font-semibold tracking-wide"
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4 }}
  >
    {partner.name}
  </motion.span>
</div>


                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>


      </section>
    </div>
  );
}

export default App;
