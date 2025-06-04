'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from '@/app/interfces/productInterface';
import { newArrivals } from '@/app/services/productService';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WhatsAppForm from '../components/whatsappForm';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(3);
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const whatsappNumber = '+97433994217';

  useEffect(() => {
    newArrivals()
      .then((data) => setProducts(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const MotionLink = motion(Link);

  if (loading)
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border rounded-lg p-4 bg-white">
                <div className="h-48 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="max-w-5xl mx-auto px-4 py-8 text-center">
        <p className="text-red-500 mb-4">Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Retry
        </button>
      </div>
    );

  const displayedProducts = products.slice(0, displayCount);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      {/* WhatsApp Enquiry Modal */}
      {showWhatsAppForm && selectedProduct && (
        <WhatsAppForm
          productName={selectedProduct.name}
          whatsappNumber={whatsappNumber}
          onClose={() => setShowWhatsAppForm(false)}
        />
      )}

      <div className="mb-12">


      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
    <div>
      <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
      <p className="text-red-600 font-semibold">Select your preferred model</p>
    </div>

    <MotionLink
      href="/products"
      className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl transition-all duration-300 inline-block text-base font-semibold relative overflow-hidden shadow-lg hover:shadow-red-500/50"
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
  </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {displayedProducts.map((product) => (
            <MotionLink
              key={product._id}
              href={`/products/${product._id}`}
              whileHover={{ scale: 1.02 }}
              className="border rounded-xl p-4 cursor-pointer flex flex-col"
            >
              <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4">
                <Image
                  src={product.image || '/images/noimage.png'}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-xl"
                />
              </div>

              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="mb-3 line-clamp-2 text-sm">{product.description}</p>

              <div className="mt-auto flex gap-2 justify-between items-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault(); 
                    setSelectedProduct(product);
                    setShowWhatsAppForm(true);
                  }}
                  className="flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                  </svg>
                  Enquire
                </button>

              </div>
            </MotionLink>
          ))}
        </motion.div>

        {displayCount < products.length && (
          <button
            className="mt-10 mx-auto block px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition"
            onClick={() => setDisplayCount(displayCount + 3)}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
}
