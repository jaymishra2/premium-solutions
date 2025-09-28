'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import { Package, Search, Filter, ChevronRight, ArrowRight, Star } from 'lucide-react'

// Note: In a real app, you would fetch this from an API
const products = [
  {
    id: 1,
    name: 'Stainless Steel Plate 304',
    category: 'stainless-steel',
    description: 'High-quality stainless steel plate with excellent corrosion resistance and durability. Perfect for construction, automotive, and industrial applications.',
    image: '/images/products/stainless-steel-plate.jpg',
    specifications: ['Grade: 304', 'Thickness: 0.5-50mm', 'Width: 1000-2000mm', 'Length: 2000-6000mm'],
    features: ['Corrosion Resistant', 'High Strength', 'Easy to Weld', 'Food Grade'],
    price: 'Contact for Quote',
    inStock: true,
    rating: 4.8
  },
  {
    id: 2,
    name: 'Carbon Steel Tube Q235',
    category: 'carbon-steel',
    description: 'Durable carbon steel tubes for structural applications. Widely used in construction, machinery, and infrastructure projects.',
    image: '/images/products/carbon-steel-tube.jpg',
    specifications: ['Grade: Q235', 'Diameter: 10-500mm', 'Length: 6-12m', 'Wall Thickness: 1-20mm'],
    features: ['High Strength', 'Good Weldability', 'Cost Effective', 'Versatile'],
    price: 'Contact for Quote',
    inStock: true,
    rating: 4.7
  },
  {
    id: 3,
    name: 'Aluminum Sheet 1050',
    category: 'aluminum',
    description: 'Lightweight aluminum sheets with excellent formability and corrosion resistance. Ideal for automotive, aerospace, and packaging industries.',
    image: '/images/products/aluminum-sheet.jpg',
    specifications: ['Grade: 1050', 'Thickness: 0.2-6mm', 'Width: 1000-1500mm', 'Length: 2000-4000mm'],
    features: ['Lightweight', 'Corrosion Resistant', 'Good Formability', 'Recyclable'],
    price: 'Contact for Quote',
    inStock: true,
    rating: 4.9
  },
  {
    id: 4,
    name: 'Copper Pipe C11000',
    category: 'copper',
    description: 'High-conductivity copper pipes for plumbing, HVAC, and electrical applications. Excellent thermal and electrical conductivity.',
    image: '/images/products/copper-pipe.jpg',
    specifications: ['Grade: C11000', 'Diameter: 6-200mm', 'Length: 3-6m', 'Wall Thickness: 0.5-10mm'],
    features: ['High Conductivity', 'Corrosion Resistant', 'Antimicrobial', 'Durable'],
    price: 'Contact for Quote',
    inStock: true,
    rating: 4.8
  },
  {
    id: 5,
    name: 'Galvanized Steel Coil DX51D',
    category: 'galvanized',
    description: 'Corrosion-resistant galvanized steel coils with zinc coating. Perfect for roofing, automotive, and construction applications.',
    image: '/images/products/galvanized-coil.jpg',
    specifications: ['Grade: DX51D', 'Thickness: 0.3-3mm', 'Width: 600-1500mm', 'Coating: 60-275g/m²'],
    features: ['Corrosion Resistant', 'Long Lifespan', 'Cost Effective', 'Easy to Process'],
    price: 'Contact for Quote',
    inStock: true,
    rating: 4.6
  },
  {
    id: 6,
    name: 'Stainless Steel Bar 316L',
    category: 'stainless-steel',
    description: 'Precision stainless steel bars for machining and fabrication. Superior corrosion resistance and excellent mechanical properties.',
    image: '/images/products/stainless-steel-bar.jpg',
    specifications: ['Grade: 316L', 'Diameter: 5-200mm', 'Length: 3-6m', 'Surface: Bright/Polished'],
    features: ['Superior Corrosion Resistance', 'High Precision', 'Easy Machining', 'Medical Grade'],
    price: 'Contact for Quote',
    inStock: true,
    rating: 4.9
  },
  {
    id: 7,
    name: 'Aluminum Extrusion 6061',
    category: 'aluminum',
    description: 'High-strength aluminum extrusions for structural applications. Excellent machinability and weldability.',
    image: '/images/products/aluminum-extrusion.jpg',
    specifications: ['Grade: 6061', 'Profile: Custom', 'Length: 3-6m', 'Temper: T6'],
    features: ['High Strength', 'Good Machinability', 'Weldable', 'Lightweight'],
    price: 'Contact for Quote',
    inStock: true,
    rating: 4.7
  },
  {
    id: 8,
    name: 'Brass Sheet C26000',
    category: 'copper',
    description: 'High-quality brass sheets with excellent formability and corrosion resistance. Perfect for decorative and functional applications.',
    image: '/images/products/brass-sheet.jpg',
    specifications: ['Grade: C26000', 'Thickness: 0.1-10mm', 'Width: 100-1000mm', 'Length: 1000-3000mm'],
    features: ['Excellent Formability', 'Corrosion Resistant', 'Attractive Appearance', 'Good Machinability'],
    price: 'Contact for Quote',
    inStock: true,
    rating: 4.8
  }
]

const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'category-a', name: 'Category A', count: products.filter(p => p.category === 'category-a').length },
  { id: 'category-b', name: 'Category B', count: products.filter(p => p.category === 'category-b').length },
  { id: 'category-c', name: 'Category C', count: products.filter(p => p.category === 'category-c').length },
  { id: 'category-d', name: 'Category D', count: products.filter(p => p.category === 'category-d').length },
  { id: 'category-e', name: 'Category E', count: products.filter(p => p.category === 'category-e').length }
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'rating':
        return b.rating - a.rating
      case 'category':
        return a.category.localeCompare(b.category)
      default:
        return 0
    }
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-steel-800 to-steel-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-steel-200 max-w-4xl mx-auto">
              High-quality products, professional services, and comprehensive solutions with professional service capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Sort and Filter */}
            <div className="flex gap-4 items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="rating">Sort by Rating</option>
                <option value="category">Sort by Category</option>
              </select>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className={`mt-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-steel-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-steel-600">
                  Showing {sortedProducts.length} of {products.length} products
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-steel-500/20 flex items-center justify-center">
                        <Package className="w-16 h-16 text-steel-400" />
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-steel-700">
                        {categories.find(cat => cat.id === product.category)?.name}
                      </div>
                      {product.inStock && (
                        <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          In Stock
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-steel-900 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-steel-600 ml-1">{product.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-steel-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {product.specifications.slice(0, 2).map((spec, index) => (
                          <div key={index} className="text-xs text-steel-500 flex items-center">
                            <ChevronRight className="w-3 h-3 mr-1" />
                            {spec}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-primary-600">
                          {product.price}
                        </span>
                        <a
                          href={`/products/${product.id}`}
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-all duration-300"
                        >
                          Details
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Custom Products?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            We offer custom services with processing, customization, quality control, and delivery capabilities. Contact us for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Request Custom Quote
            </a>
            <a
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn About Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
