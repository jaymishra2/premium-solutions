import { CheckCircle, Shield, Clock, Headphones } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "Quality Inspection",
      description: "Purchasing qualified products can only be used after multiple quality inspections. Refuse to use any unqualified products."
    },
    {
      icon: Shield,
      title: "Production Management",
      description: "Efficient and rigorous production management, proficient and professional workers ensure the quality of each link."
    },
    {
      icon: Clock,
      title: "Material Standards",
      description: "Before leaving the factory, it must meet the material standards so that all industries can be used."
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "If you have any questions or purchases, please feel free to contact us. Customer inquiries always receive our careful attention."
    }
  ]

  const processes = [
    "Cutting",
    "Bending", 
    "Surface Grinding",
    "Forming",
    "Welding",
    "Quality Control"
  ]

  return (
    <section className="py-20 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-steel-600 max-w-3xl mx-auto">
            We provide comprehensive manufacturing services with a variety of processes to meet your specific requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-steel-900 mb-3">
                {service.title}
              </h3>
              <p className="text-steel-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Manufacturing Processes */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-steel-900 mb-8 text-center">
            Manufacturing Capabilities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processes.map((process, index) => (
              <div key={index} className="text-center p-4 bg-steel-50 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-steel-900">
                  {process}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Information */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            10,000 Tons Inventory Available
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Factory direct sale! Stock spot! All promotions! Discount offer! Can Be Customized. Wholesale Supplier Stock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm opacity-90">Tons in Stock</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-90">Product Types</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
