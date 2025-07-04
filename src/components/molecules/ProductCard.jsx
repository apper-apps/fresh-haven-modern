import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import { toast } from 'react-toastify'

function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const maxRetries = 2

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Add to cart logic here
    toast.success(`${product.name} added to cart!`)
  }

  const getStockBadge = () => {
    if (product.stock === 0) return { text: 'Out of Stock', variant: 'error' }
    if (product.stock < 10) return { text: 'Low Stock', variant: 'warning' }
    return { text: 'In Stock', variant: 'success' }
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
    setImageError(false)
  }

  const handleImageError = () => {
    if (retryCount < maxRetries) {
      setRetryCount(prev => prev + 1)
      // Force reload by adding timestamp
      const img = new Image()
      img.onload = handleImageLoad
      img.onerror = () => setImageError(true)
      img.src = `${product.images[0]}?retry=${retryCount + 1}`
    } else {
      setImageError(true)
      setImageLoaded(true)
    }
  }

  const getPlaceholderIcon = () => {
    const categoryIcons = {
      'Superfoods': 'Zap',
      'Cold-Pressed Juices': 'Coffee',
      'Vegan Snacks': 'Cookie',
      'Organic Produce': 'Leaf',
      'Protein & Supplements': 'Dumbbell',
      'Healthy Snacks': 'Apple'
    }
    return categoryIcons[product.category] || 'Package'
  }

  const stockBadge = getStockBadge()

  return (
    <Link to={`/product/${product.Id}`} className="block">
      <motion.div
        className="card-organic p-0 overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
        whileHover={{ y: -5 }}
      >
        <div className="relative overflow-hidden">
          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="w-full h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse flex items-center justify-center">
              <ApperIcon name="Image" size={32} className="text-gray-400" />
            </div>
          )}
          
          {/* Error placeholder */}
          {imageError && imageLoaded && (
            <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col items-center justify-center">
              <ApperIcon name={getPlaceholderIcon()} size={48} className="text-primary mb-2" />
              <span className="text-sm text-text-secondary font-medium">{product.category}</span>
            </div>
          )}
          
          {/* Actual image */}
          {!imageError && (
            <img 
              src={product.images[0]} 
              alt={product.name}
              className={`w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
          )}
          
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <Badge variant={stockBadge.variant} size="small">
              {stockBadge.text}
            </Badge>
            {product.isOrganic && (
              <Badge variant="success" size="small">
                Organic
              </Badge>
            )}
            {product.isVegan && (
              <Badge variant="info" size="small">
                Vegan
              </Badge>
            )}
            {product.isGlutenFree && (
              <Badge variant="warning" size="small">
                Gluten-Free
              </Badge>
            )}
          </div>
          {product.originalPrice && (
            <div className="absolute top-3 right-3">
              <Badge variant="error" size="small">
                Sale
              </Badge>
            </div>
          )}
        </div>
        
<div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-organic">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <ApperIcon name="Star" size={16} className="text-warning fill-warning" />
              <span className="text-sm font-medium text-text-primary">
                {product.rating}
              </span>
              <span className="text-sm text-text-secondary">
                ({product.reviewCount})
              </span>
            </div>
          </div>

          {/* Wellness Indicators */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.isOrganic && (
              <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-organic">
                🌱 Organic
              </span>
            )}
            {product.isVegan && (
              <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-organic">
                🌿 Vegan
              </span>
            )}
            {product.isGlutenFree && (
              <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-organic">
                ✨ Gluten-Free
              </span>
            )}
          </div>
          
          <h3 className="text-lg font-display font-semibold text-text-primary mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-sm text-text-secondary mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-text-secondary line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
          
          <Button
            variant="primary"
            size="small"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="w-full"
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProductCard