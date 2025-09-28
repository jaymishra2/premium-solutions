'use client'

import { useState } from 'react'
import { Calendar, ArrowRight, Newspaper, Search, Filter, Tag } from 'lucide-react'

// Note: In a real app, you would fetch this from an API
const newsArticles = [
  {
    id: 1,
    title: "New Stainless Steel Grade 316L Now Available",
    description: "We are excited to announce the addition of Grade 316L stainless steel to our product line, offering superior corrosion resistance for demanding applications.",
    content: "Fangge Metal Products is proud to introduce Grade 316L stainless steel to our comprehensive product range. This high-quality material offers exceptional corrosion resistance, making it ideal for applications in harsh environments such as marine, chemical processing, and medical equipment manufacturing. Our 316L stainless steel maintains the same excellent mechanical properties as standard 316 grade while providing enhanced resistance to pitting and crevice corrosion. Available in various forms including plates, sheets, bars, and tubes, this addition strengthens our position as a leading supplier of premium stainless steel products.",
    date: "2024-01-15",
    category: "Product Update",
    author: "Technical Team",
    image: "/images/news/stainless-steel-316l.jpg",
    tags: ["Stainless Steel", "316L", "New Product", "Corrosion Resistance"],
    featured: true
  },
  {
    id: 2,
    title: "Factory Expansion Completed - Increased Production Capacity",
    description: "Our manufacturing facility expansion is now complete, increasing our production capacity by 40% to better serve our growing customer base.",
    content: "After months of construction and installation, we are pleased to announce the completion of our factory expansion project. The new facility adds 15,000 square meters of manufacturing space and includes state-of-the-art equipment for cutting, bending, welding, and surface treatment. This expansion increases our production capacity by 40%, allowing us to serve more customers while maintaining our commitment to quality and timely delivery. The new facility also includes an expanded quality control laboratory with advanced testing equipment to ensure all products meet the highest standards.",
    date: "2024-01-10",
    category: "Company News",
    author: "Management Team",
    image: "/images/news/factory-expansion.jpg",
    tags: ["Factory", "Expansion", "Production", "Capacity"],
    featured: true
  },
  {
    id: 3,
    title: "Quality Certification Renewed - ISO 9001:2015",
    description: "We are proud to announce the successful renewal of our ISO 9001:2015 quality management system certification, reaffirming our commitment to excellence.",
    content: "Fangge Metal Products has successfully renewed its ISO 9001:2015 quality management system certification following a comprehensive audit by an independent certification body. This certification demonstrates our ongoing commitment to maintaining the highest standards in quality management, customer satisfaction, and continuous improvement. The audit covered all aspects of our operations, from raw material procurement to final product delivery, and confirmed our adherence to international quality standards. This certification provides our customers with confidence in our ability to consistently deliver high-quality products and services.",
    date: "2024-01-05",
    category: "Certification",
    author: "Quality Assurance Team",
    image: "/images/news/iso-certification.jpg",
    tags: ["ISO 9001", "Certification", "Quality", "Standards"],
    featured: false
  },
  {
    id: 4,
    title: "New Aluminum Processing Line Installed",
    description: "Our new aluminum processing line is now operational, providing enhanced capabilities for aluminum sheet and plate processing.",
    content: "We have successfully installed and commissioned a new aluminum processing line that significantly enhances our capabilities in aluminum sheet and plate processing. The new line includes advanced cutting, bending, and surface treatment equipment specifically designed for aluminum materials. This investment allows us to offer more precise processing services and expand our aluminum product offerings. The line is capable of handling aluminum sheets and plates up to 6mm thick and 2000mm wide, meeting the growing demand for high-quality aluminum products in various industries.",
    date: "2024-01-01",
    category: "Equipment",
    author: "Engineering Team",
    image: "/images/news/aluminum-processing.jpg",
    tags: ["Aluminum", "Processing", "Equipment", "New Line"],
    featured: false
  },
  {
    id: 5,
    title: "Sustainability Initiative - Green Manufacturing Practices",
    description: "We are implementing new green manufacturing practices to reduce our environmental impact and promote sustainable steel production.",
    content: "As part of our commitment to environmental responsibility, Fangge Metal Products is implementing comprehensive green manufacturing practices across all our operations. These initiatives include energy-efficient equipment, waste reduction programs, and recycling systems for metal scraps. We have also invested in solar panels to reduce our reliance on traditional energy sources and implemented water recycling systems in our processing facilities. These efforts not only reduce our environmental footprint but also improve our operational efficiency and cost-effectiveness. We believe that sustainable manufacturing is essential for the future of the steel industry.",
    date: "2023-12-28",
    category: "Sustainability",
    author: "Environmental Team",
    image: "/images/news/sustainability.jpg",
    tags: ["Sustainability", "Green Manufacturing", "Environment", "Recycling"],
    featured: false
  },
  {
    id: 6,
    title: "Partnership with Leading Automotive Manufacturer",
    description: "We are proud to announce a new partnership with a leading automotive manufacturer to supply high-quality steel components.",
    content: "Fangge Metal Products has entered into a strategic partnership with a leading automotive manufacturer to supply high-quality steel components for their production lines. This partnership represents a significant milestone in our company's growth and demonstrates our ability to meet the stringent quality requirements of the automotive industry. We will be supplying various steel products including high-strength steel sheets, precision-cut components, and custom-formed parts. This partnership not only expands our customer base but also provides opportunities for further growth and development in the automotive sector.",
    date: "2023-12-20",
    category: "Partnership",
    author: "Business Development Team",
    image: "/images/news/automotive-partnership.jpg",
    tags: ["Partnership", "Automotive", "Steel Components", "Manufacturing"],
    featured: false
  }
]

const categories = [
  { id: 'all', name: 'All News', count: newsArticles.length },
  { id: 'Product Update', name: 'Product Updates', count: newsArticles.filter(article => article.category === 'Product Update').length },
  { id: 'Company News', name: 'Company News', count: newsArticles.filter(article => article.category === 'Company News').length },
  { id: 'Certification', name: 'Certifications', count: newsArticles.filter(article => article.category === 'Certification').length },
  { id: 'Equipment', name: 'Equipment', count: newsArticles.filter(article => article.category === 'Equipment').length },
  { id: 'Sustainability', name: 'Sustainability', count: newsArticles.filter(article => article.category === 'Sustainability').length },
  { id: 'Partnership', name: 'Partnerships', count: newsArticles.filter(article => article.category === 'Partnership').length }
]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticles = filteredArticles.filter(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-steel-800 to-steel-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              News Center
            </h1>
            <p className="text-xl md:text-2xl text-steel-200 max-w-4xl mx-auto">
              Stay updated with the latest news, product updates, and company developments from Example Company.
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
                placeholder="Search news articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-5 h-5" />
              Categories
            </button>
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

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-steel-900 mb-8">Featured News</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-steel-500/20 flex items-center justify-center">
                      <Newspaper className="w-20 h-20 text-steel-400" />
                    </div>
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-steel-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(article.date)} • {article.author}
                    </div>
                    <h3 className="text-xl font-semibold text-steel-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-steel-600 mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 bg-steel-100 text-steel-600 text-xs rounded-full">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-steel-900 mb-8">Latest News</h2>
          {regularArticles.length === 0 ? (
            <div className="text-center py-12">
              <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200">
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-steel-500/20 flex items-center justify-center">
                      <Newspaper className="w-16 h-16 text-steel-400" />
                    </div>
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-steel-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(article.date)}
                    </div>
                    <h3 className="text-lg font-semibold text-steel-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-steel-600 mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 bg-steel-100 text-steel-600 text-xs rounded-full">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter to receive the latest news, product updates, and industry insights directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
