import Hero from '@/components/organisms/Hero'
import CategoryGrid from '@/components/organisms/CategoryGrid'
import FeaturedProducts from '@/components/organisms/FeaturedProducts'
import Testimonials from '@/components/organisms/Testimonials'
import Newsletter from '@/components/organisms/Newsletter'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

export default HomePage