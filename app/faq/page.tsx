'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react'

  const faqData = [
    {
      id: 1,
      question: "What types of products do you offer?",
      answer: "We offer a comprehensive range of products including Category A, Category B, Category C, Category D, and Category E products. Our products are available in various forms and specifications to meet your specific requirements.",
      category: "Products"
    },
  {
    id: 2,
    question: "What is your minimum order quantity?",
    answer: "Our minimum order quantity varies depending on the product type and specifications. For standard products, the minimum order is typically 10 units. For custom products or special specifications, please contact us for specific requirements. We can accommodate both small and large orders.",
    category: "Orders"
  },
  {
    id: 3,
    question: "Do you provide custom manufacturing services?",
    answer: "Yes, we offer comprehensive custom services including processing, customization, quality control, packaging, and delivery. Our experienced team can work with you to meet your specific requirements and specifications. We have advanced equipment and skilled professionals to handle complex service needs.",
    category: "Services"
  },
  {
    id: 4,
    question: "What are your quality standards and certifications?",
    answer: "We are ISO 9001:2015 certified and maintain strict quality control standards. All our products undergo multiple quality inspections before leaving our facility. We ensure that all materials meet industry standards and are suitable for use in various industries. Our quality management system covers the entire service process from procurement to final delivery.",
    category: "Quality"
  },
  {
    id: 5,
    question: "How long does it take to process an order?",
    answer: "Processing time depends on the product type, quantity, and customization requirements. For standard products in stock, we can typically process orders within 3-5 business days. For custom products or large quantities, processing time may range from 1-3 weeks. We provide detailed timelines when you place your order.",
    category: "Orders"
  },
  {
    id: 6,
    question: "What are your payment terms?",
    answer: "We accept various payment methods including bank transfer, letter of credit (L/C), and other secure payment options. Payment terms are typically 30% advance payment and 70% before shipment, but we can discuss flexible payment arrangements based on your company's creditworthiness and order history.",
    category: "Payment"
  },
  {
    id: 7,
    question: "Do you offer international shipping?",
    answer: "Yes, we provide international shipping to customers worldwide. We have experience in handling export documentation, customs clearance, and logistics. We work with reliable shipping partners to ensure timely and secure delivery of your orders. Shipping costs and delivery times vary depending on the destination and shipping method chosen.",
    category: "Shipping"
  },
  {
    id: 8,
    question: "Can you provide material certificates and test reports?",
    answer: "Yes, we provide material certificates and test reports for all our products. These documents include chemical composition analysis, mechanical properties, and other relevant test results. We can provide both mill certificates and third-party inspection reports as required by your specifications.",
    category: "Quality"
  },
  {
    id: 9,
    question: "What is your inventory capacity?",
    answer: "We maintain an inventory of over 10,000 items of various products. Our warehouse is well-organized and equipped with modern storage facilities to ensure product quality. We keep a wide range of standard products in stock to ensure quick delivery for urgent orders.",
    category: "Inventory"
  },
  {
    id: 10,
    question: "How can I get a quote for my requirements?",
    answer: "You can request a quote by contacting us through our website contact form, email, or phone. Please provide details about your requirements including product type, specifications, quantity, and delivery timeline. We typically respond with a detailed quote within 24 hours during business days.",
    category: "Quotes"
  },
  {
    id: 11,
    question: "Do you offer technical support and consultation?",
    answer: "Yes, our technical team provides expert consultation and support to help you select the right products for your applications. We can assist with product selection, design recommendations, and technical specifications. Our engineers have extensive experience in various industries and can provide valuable insights for your projects.",
    category: "Support"
  },
  {
    id: 12,
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including technology, healthcare, finance, education, retail, manufacturing, and professional services. Our products and services are suitable for various applications and we have experience working with customers in different sectors worldwide.",
    category: "Industries"
  }
]

const categories = [
  { id: 'all', name: 'All Questions', count: faqData.length },
  { id: 'Products', name: 'Products', count: faqData.filter(item => item.category === 'Products').length },
  { id: 'Orders', name: 'Orders', count: faqData.filter(item => item.category === 'Orders').length },
  { id: 'Services', name: 'Services', count: faqData.filter(item => item.category === 'Services').length },
  { id: 'Quality', name: 'Quality', count: faqData.filter(item => item.category === 'Quality').length },
  { id: 'Payment', name: 'Payment', count: faqData.filter(item => item.category === 'Payment').length },
  { id: 'Shipping', name: 'Shipping', count: faqData.filter(item => item.category === 'Shipping').length },
  { id: 'Inventory', name: 'Inventory', count: faqData.filter(item => item.category === 'Inventory').length },
  { id: 'Quotes', name: 'Quotes', count: faqData.filter(item => item.category === 'Quotes').length },
  { id: 'Support', name: 'Support', count: faqData.filter(item => item.category === 'Support').length },
  { id: 'Industries', name: 'Industries', count: faqData.filter(item => item.category === 'Industries').length }
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-steel-800 to-steel-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-steel-200 max-w-4xl mx-auto">
              Find answers to common questions about our products, services, and processes. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQ..."
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
              <HelpCircle className="w-5 h-5" />
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

      {/* FAQ Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No questions found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-steel-900 mb-1">
                        {item.question}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-xs rounded-full">
                        {item.category}
                      </span>
                    </div>
                    {expandedItems.includes(item.id) ? (
                      <ChevronUp className="w-5 h-5 text-steel-500 flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-steel-500 flex-shrink-0 ml-4" />
                    )}
                  </button>
                  {expandedItems.includes(item.id) && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <p className="text-steel-600 leading-relaxed pt-4">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-steel-600 max-w-3xl mx-auto">
              Our team is here to help. Contact us directly for personalized assistance with your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Support */}
            <div className="text-center p-8 bg-steel-50 rounded-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-steel-900 mb-2">
                Call Us
              </h3>
              <p className="text-steel-600 mb-4">
                Speak directly with our sales team
              </p>
              <a
                href="tel:+15551234567"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                +1 (555) 123-4567
              </a>
            </div>

            {/* Email Support */}
            <div className="text-center p-8 bg-steel-50 rounded-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-steel-900 mb-2">
                Email Us
              </h3>
              <p className="text-steel-600 mb-4">
                Get detailed responses to your questions
              </p>
              <a
                href="mailto:info@example-company.com"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                info@example-company.com
              </a>
            </div>

            {/* Live Chat */}
            <div className="text-center p-8 bg-steel-50 rounded-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-steel-900 mb-2">
                Live Chat
              </h3>
              <p className="text-steel-600 mb-4">
                Get instant answers from our support team
              </p>
              <button className="text-primary-600 hover:text-primary-700 font-semibold">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss your requirements. We're here to provide you with the best solutions and service.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
