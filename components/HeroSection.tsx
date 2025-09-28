'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight, Factory, Package, Users, Award } from 'lucide-react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Premium Solutions & Services",
      subtitle: "Comprehensive Inventory • Direct Sales",
      description: "Example Company provides top-level customized solutions for global customers with professional service capabilities.",
      image: "/images/hero-1.jpg",
      cta: "Get Quote Now"
    },
    {
      title: "Quality Excellence",
      subtitle: "High-Quality Products • Custom Processing",
      description: "Specializing in professional products and services with comprehensive processing, customization, and support services.",
      image: "/images/hero-2.jpg",
      cta: "View Products"
    },
    {
      title: "Global Service Partner",
      subtitle: "Professional Services • Quality Guaranteed",
      description: "Committed to meeting customer needs with quality, integrity, and people-oriented scientific and technological innovation.",
      image: "/images/hero-3.jpg",
      cta: "Learn More"
    }
  ]

  const stats = [
    { icon: Factory, value: "10,000+", label: "Items in Stock" },
    { icon: Package, value: "500+", label: "Product Types" },
    { icon: Users, value: "1000+", label: "Global Customers" },
    { icon: Award, value: "15+", label: "Years Experience" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-full h-full bg-gradient-to-r from-steel-900/80 to-steel-800/60" />
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                filter: 'brightness(0.4)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-steel-200 mb-4 animate-fade-in">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg md:text-xl text-steel-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>{slides[currentSlide].cta}</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-steel-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-steel-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-steel-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
