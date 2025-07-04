import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import { toast } from 'react-toastify'

const ProductCard = ({ product }) => {
  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toast.success(`${product.name} added to cart!`)
  }
  
  const getStockBadge = () => {
    if (product.stock > 10) return { variant: 'success', text: 'In Stock' }
    if (product.stock > 0) return { variant: 'warning', text: 'Low Stock' }
    return { variant: 'error', text: 'Out of Stock' }
  }
  
  const stockBadge = getStockBadge()
  
  return (
    <motion.div
      className="card-organic overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/products/${product.Id}`}>
        <div className="relative">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <Badge variant={stockBadge.variant} size="small">
              {stockBadge.text}
            </Badge>
          </div>
          {product.isOrganic && (
            <div className="absolute top-2 left-2">
              <Badge variant="success" size="small" icon="Leaf">
                Organic
              </Badge>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-display font-semibold text-text-primary mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-text-secondary text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <ApperIcon 
                  key={i} 
                  name="Star" 
                  size={16} 
                  className={i < Math.floor(product.rating) ? "text-warning fill-current" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-text-secondary">({product.rating})</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-text-secondary line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <Button
              variant="primary"
              size="small"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ApperIcon name="Plus" size={16} />
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard