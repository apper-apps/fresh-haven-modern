import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'

const CategoryCard = ({ category }) => {
  return (
    <motion.div
      className="card-organic overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/products?category=${category.slug}`}>
        <div className="relative">
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <ApperIcon name={category.icon} size={20} />
              <span className="text-sm font-medium">{category.count} products</span>
            </div>
            <h3 className="font-display font-bold text-lg">{category.name}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default CategoryCard