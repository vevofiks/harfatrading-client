'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUser,
  faQuoteLeft,
  faQuoteRight,
  faStar as faStarSolid 
} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import '../styles/reviews.css'

interface Review {
  id: number
  name: string
  role: string
  company: string
  rating: number
  content: string
  date: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Fleet Manager",
    company: "ABC Logistics",
    rating: 5,
    content: "Harfa Trading has been our go-to supplier for car parts for over 3 years. Their quality and reliability are unmatched. The customer service team is always responsive and helpful.",
    date: "2024-02-15"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Garage Owner",
    company: "Quick Fix Auto",
    rating: 5,
    content: "We've significantly reduced our parts sourcing time since partnering with Harfa Trading. Their extensive inventory and quick delivery have helped us serve our customers better.",
    date: "2024-01-28"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Service Manager",
    company: "Premium Motors",
    rating: 4,
    content: "The quality of parts from Harfa Trading is consistently high. Their competitive pricing and genuine parts guarantee make them our preferred supplier.",
    date: "2024-01-15"
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Operations Director",
    company: "City Cab Services",
    rating: 5,
    content: "Managing a large taxi fleet requires reliable parts suppliers. Harfa Trading has never let us down with their quality products and prompt delivery.",
    date: "2024-01-10"
  }
]

export default function Reviews() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id='reviews' className="py-24 bg-gradient-to-b  from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, red 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-red-500">Customers</span> Say
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Don't just take our word for it. See what our valued customers have to say about their experience with Harfa Trading.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative review-slider">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            effect="fade"
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            className="pb-12"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mx-4 border border-red-500/10 hover:border-red-500/30 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    {/* Profile Icon */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-6 shadow-lg shadow-red-500/20">
                      <FontAwesomeIcon icon={faUser} className="text-white text-3xl" />
                    </div>

                    {/* Customer Info */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-1">{review.name}</h3>
                      <p className="text-gray-400">
                        {review.role} at <span className="text-red-500">{review.company}</span>
                      </p>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={index < review.rating ? faStarSolid : faStarRegular}
                          className={index < review.rating ? 'text-red-500' : 'text-gray-600'}
                        />
                      ))}
                    </div>

                    {/* Review Content */}
                    <div className="relative mb-6">
                      <FontAwesomeIcon 
                        icon={faQuoteLeft} 
                        className="absolute -top-4 -left-2 text-red-500/20 text-4xl"
                      />
                      <p className="text-gray-300 text-lg italic leading-relaxed">
                        {review.content}
                      </p>
                      <FontAwesomeIcon 
                        icon={faQuoteRight} 
                        className="absolute -bottom-4 -right-2 text-red-500/20 text-4xl"
                      />
                    </div>

                    {/* Date */}
                    <div className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
} 