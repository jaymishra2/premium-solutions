import { CheckCircle, Target, Users, Award } from 'lucide-react'

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Quality First",
      description: "We prioritize meeting customer needs with rigorous quality control and multiple inspections."
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Efficient production management with proficient and professional workers ensuring quality at every step."
    },
    {
      icon: Award,
      title: "Material Standards",
      description: "All products meet material standards before leaving the factory, suitable for all industries."
    },
    {
      icon: CheckCircle,
      title: "Customer Service",
      description: "Customer inquiries always receive our careful attention with dedicated support."
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">
            About Us
          </h2>
          <p className="text-lg text-steel-600 max-w-3xl mx-auto">
            Example Company, headquartered in New York, is committed to providing top-level customized solutions for global customers, and has a good reputation and credibility in the field of professional services and high-quality products.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-steel-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-steel-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-steel-900 mb-8 text-center">
            The following three aspects allow you to better understand the company
          </h3>
          <div className="space-y-8">
            {companyInfo.map((info, index) => (
              <div key={index} className="border-l-4 border-primary-600 pl-6">
                <h4 className="text-lg font-semibold text-steel-900 mb-3">
                  {info.question}
                </h4>
                <p className="text-steel-600 leading-relaxed">
                  {info.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
