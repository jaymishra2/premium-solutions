import Link from 'next/link'
import { Calendar, ArrowRight, Newspaper } from 'lucide-react'

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "New Premium Product Line Now Available",
      description: "We are excited to announce the addition of our new premium product line, offering superior performance for demanding applications.",
      date: "2024-01-15",
      category: "Product Update",
      image: "/images/news/product-update.jpg"
    },
    {
      id: 2,
      title: "Facility Expansion Completed - Increased Service Capacity",
      description: "Our service facility expansion is now complete, increasing our service capacity by 40% to better serve our growing customer base.",
      date: "2024-01-10",
      category: "Company News",
      image: "/images/news/facility-expansion.jpg"
    },
    {
      id: 3,
      title: "Quality Certification Renewed - ISO 9001:2015",
      description: "We are proud to announce the successful renewal of our ISO 9001:2015 quality management system certification, reaffirming our commitment to excellence.",
      date: "2024-01-05",
      category: "Certification",
      image: "/images/news/certification.jpg"
    }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-4">
            News Center
          </h2>
          <p className="text-lg text-steel-600 max-w-3xl mx-auto">
            Stay updated with the latest news, product updates, and company developments from Example Company.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
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
                <h3 className="text-xl font-semibold text-steel-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-steel-600 mb-4 line-clamp-3">
                  {article.description}
                </p>
                <Link
                  href={`/news/${article.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            View All News
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
