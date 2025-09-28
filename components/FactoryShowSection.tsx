'use client'

import { useState } from 'react'
import { Factory, Package, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react'

const FactoryShowSection = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const factoryImages = [
    {
      id: 1,
      title: "Main Production Floor",
      description: "State-of-the-art manufacturing equipment and production lines",
      image: "/images/factory/production-floor.jpg"
    },
    {
      id: 2,
      title: "Quality Control Lab",
      description: "Advanced testing and quality assurance facilities",
      image: "/images/factory/quality-lab.jpg"
    },
    {
      id: 3,
      title: "Warehouse & Storage",
      description: "10,000 tons of inventory with organized storage systems",
      image: "/images/factory/warehouse.jpg"
    },
    {
      id: 4,
      title: "Shipping & Logistics",
      description: "Efficient packaging and shipping operations",
      image: "/images/factory/shipping.jpg"
    }
  ]

  const facilities = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Advanced production equipment and skilled workforce"
    },
    {
      icon: Package,
      title: "Storage",
      description: "10,000 tons inventory with organized warehouse systems"
    },
    {
      icon: Users,
      title: "Team",
      description: "Professional and experienced manufacturing team"
    },
    {
      icon: Award,
      title: "Certification",
      description: "ISO 9001:2015 certified quality management system"
    }
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % factoryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + factoryImages.length) % factoryImages.length)
  }

  return (
    <section className="py-20 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">
            Factory Show
          </h2>
          <p className="text-lg text-steel-600 max-w-3xl mx-auto">
            Take a virtual tour of our modern manufacturing facility and see our commitment to quality and excellence.
          </p>
        </div>

        {/* Factory Gallery */}
        <div className="mb-16">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96 bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-steel-500/20 flex items-center justify-center">
                <Factory className="w-24 h-24 text-steel-400" />
              </div>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {factoryImages[currentImage].title}
                </h3>
                <p className="text-lg opacity-90">
                  {factoryImages[currentImage].description}
                </p>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
            
            {/* Image Indicators */}
            <div className="flex justify-center space-x-2 p-4">
              {factoryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4">
                <facility.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-steel-900 mb-3">
                {facility.title}
              </h3>
              <p className="text-steel-600 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        {/* Factory Stats */}
        <div className="mt-16 bg-gradient-to-r from-steel-800 to-steel-900 rounded-lg p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-steel-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-steel-300">Tons Inventory</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-steel-300">Product Types</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-steel-300">Global Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FactoryShowSection
