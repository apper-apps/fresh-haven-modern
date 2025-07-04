import { motion } from 'framer-motion'
import CategoryCard from '@/components/molecules/CategoryCard'

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: 'Superfoods',
      slug: 'superfoods',
      image: 'https://images.unsplash.com/photo-1517482371087-707b3a6c4b79?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: 'Zap',
      count: 45
    },
    {
      id: 2,
      name: 'Vegan Snacks',
      slug: 'vegan-snacks',
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: 'Leaf',
      count: 32
    },
    {
      id: 3,
      name: 'Cold-Pressed Juices',
      slug: 'cold-pressed-juices',
      image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: 'Droplet',
      count: 28
    },
    {
      id: 4,
      name: 'Organic Produce',
      slug: 'organic-produce',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: 'Apple',
      count: 67
    },
    {
      id: 5,
      name: 'Protein & Supplements',
      slug: 'protein-supplements',
      image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: 'Dumbbell',
      count: 23
    },
    {
      id: 6,
      name: 'Healthy Snacks',
      slug: 'healthy-snacks',
      image: 'https://images.unsplash.com/photo-1517391043392-9b45cc8b2505?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: 'Cookie',
      count: 41
    }
  ]
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover our carefully curated selection of fresh, organic, and healthy products
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid