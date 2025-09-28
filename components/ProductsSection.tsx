'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Package, ArrowRight } from 'lucide-react'

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'category-a', name: 'Category A' },
    { id: 'category-b', name: 'Category B' },
    { id: 'category-c', name: 'Category C' },
    { id: 'category-d', name: 'Category D' },
    { id: 'category-e', name: 'Category E' }
  ]

  const products = [
    {
      id: 1,
      name: 'Premium Product A',
      category: 'category-a',
      description: 'High-quality product with excellent performance characteristics',
      image: '/images/products/product-a.jpg',
      specifications: ['Type: Premium', 'Size: Standard', 'Weight: Light']
    },
    {
      id: 2,
      name: 'Professional Product B',
      category: 'category-b',
      description: 'Durable product for professional applications',
      image: '/images/products/product-b.jpg',
      specifications: ['Type: Professional', 'Size: Medium', 'Weight: Standard']
    },
    {
      id: 3,
      name: 'Advanced Product C',
      category: 'category-c',
      description: 'Advanced product with cutting-edge technology',
      image: '/images/products/product-c.jpg',
      specifications: ['Type: Advanced', 'Size: Large', 'Weight: Heavy']
    },
    {
      id: 4,
      name: 'Specialized Product D',
      category: 'category-d',
      description: 'Specialized product for specific requirements',
      image: '/images/products/product-d.jpg',
      specifications: ['Type: Specialized', 'Size: Custom', 'Weight: Variable']
    },
    {
      id: 5,
      name: 'Standard Product E',
      category: 'category-e',
      description: 'Standard product with reliable performance',
      image: '/images/products/product-e.jpg',
      specifications: ['Type: Standard', 'Size: Regular', 'Weight: Medium']
    },
    {
      id: 6,
      name: 'Elite Product F',
      category: 'category-a',
      description: 'Elite product for premium applications',
      image: '/images/products/product-f.jpg',
      specifications: ['Type: Elite', 'Size: Premium', 'Weight: Optimized']
    }
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-steel-600 max-w-3xl mx-auto">
            We provide high-quality products, professional services, and comprehensive solutions with professional service capabilities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-steel-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-steel-500/20 flex items-center justify-center">
                  <Package className="w-16 h-16 text-steel-400" />
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-steel-700">
                  {categories.find(cat => cat.id === product.category)?.name}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-steel-600 mb-4">
                  {product.description}
                </p>
                <div className="space-y-1 mb-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="text-sm text-steel-500 flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      {spec}
                    </div>
                  ))}
                </div>
                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Products
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
