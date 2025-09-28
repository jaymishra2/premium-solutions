import { Metadata } from 'next'
import { Target, Users, Award, CheckCircle, Factory, Globe, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Example Company | Premium Solutions',
  description: 'Learn about Example Company - a leading provider of customized solutions with comprehensive inventory and professional service capabilities.',
}

export default function AboutPage() {
  const companyValues = [
    {
      icon: Target,
      title: "Quality First",
      description: "We prioritize meeting customer needs with rigorous quality control and multiple inspections. Refuse to use any unqualified products."
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Efficient and rigorous production management, proficient and professional workers ensure the quality of each link."
    },
    {
      icon: Award,
      title: "Material Standards",
      description: "Before leaving the factory, it must meet the material standards so that all industries can be used."
    },
    {
      icon: CheckCircle,
      title: "Customer Service",
      description: "If you have any questions or purchases, please feel free to contact us. Customer inquiries always receive our careful attention."
    }
  ]

  const companyInfo = [
    {
      question: "What exactly does our company do?",
      answer: "Our company mainly provides professional products and services. We have a variety of processes, including customization, processing, quality control, delivery, etc. The company has comprehensive inventory and supports direct delivery to customers."
    },
    {
      question: "What products are our company mainly engaged in?",
      answer: "We are committed to providing high-quality products, professional services, and comprehensive solutions for customers at home and abroad."
    },
    {
      question: "What is the philosophy of our company?",
      answer: "We give priority to the needs to meet the needs of users; To survive on the basis of quality, integrity and people-oriented scientific and technological innovation."
    }
  ]

  const capabilities = [
    {
      icon: Factory,
      title: "Service Operations",
      description: "Advanced service equipment with processing, customization, and quality control capabilities"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide with professional solutions and services"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO 9001:2015 certified quality management system with rigorous testing"
    },
    {
      icon: Clock,
      title: "Reliable Delivery",
      description: "Comprehensive inventory ensures quick delivery and consistent supply"
    }
  ]

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "10,000+", label: "Items in Stock" },
    { value: "500+", label: "Product Types" },
    { value: "1000+", label: "Global Customers" }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-steel-800 to-steel-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Example Company
            </h1>
            <p className="text-xl md:text-2xl text-steel-200 max-w-4xl mx-auto">
              Headquartered in New York, we are committed to providing top-level customized solutions for global customers with a good reputation and credibility in the field of professional services and high-quality products.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-steel-600 mb-6 leading-relaxed">
                Example Company has been at the forefront of the professional services industry for over 15 years. We specialize in providing comprehensive solutions for customers worldwide, combining traditional expertise with modern technology.
              </p>
              <p className="text-lg text-steel-600 mb-8 leading-relaxed">
                Our commitment to quality, integrity, and innovation has made us a trusted partner for businesses across various industries. With comprehensive inventory and state-of-the-art facilities, we ensure reliable supply and exceptional quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-steel-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-steel-100 rounded-lg p-8">
              <div className="space-y-6">
                {companyInfo.map((info, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-6">
                    <h3 className="text-lg font-semibold text-steel-900 mb-2">
                      {info.question}
                    </h3>
                    <p className="text-steel-600 leading-relaxed">
                      {info.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-steel-600 max-w-3xl mx-auto">
              The following four aspects allow you to better understand our company values and commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-steel-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-steel-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">
              Our Capabilities
            </h2>
            <p className="text-lg text-steel-600 max-w-3xl mx-auto">
              We offer comprehensive services with advanced equipment and skilled professionals to meet your specific requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mx-auto mb-6">
                  <capability.icon className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-steel-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-steel-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Processes */}
      <section className="py-20 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">
              Manufacturing Processes
            </h2>
            <p className="text-lg text-steel-600 max-w-3xl mx-auto">
              Our state-of-the-art facility offers a complete range of service processes to meet your specific requirements.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Processing', 'Customization', 'Quality Control', 'Packaging', 'Delivery', 'Support'].map((process, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-steel-900">
                  {process}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your requirements. We're here to provide you with the best solutions and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
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
