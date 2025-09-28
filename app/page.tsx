import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProductsSection from '@/components/ProductsSection'
import ServicesSection from '@/components/ServicesSection'
import NewsSection from '@/components/NewsSection'
import FactoryShowSection from '@/components/FactoryShowSection'
import QuoteSection from '@/components/QuoteSection'

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <NewsSection />
      <FactoryShowSection />
      <QuoteSection />
    </div>
  )
}
