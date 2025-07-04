import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import { productService } from '@/services/api/productService'
import { toast } from 'react-toastify'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  
  const loadProduct = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await productService.getById(parseInt(id))
      setProduct(data)
    } catch (err) {
      setError('Product not found')
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadProduct()
  }, [id])
  
  const handleAddToCart = () => {
    toast.success(`${quantity} ${product.name} added to cart!`)
  }
  
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }
  
  if (loading) return <Loading />
  if (error) return <Error message={error} />
  if (!product) return <Error message="Product not found" />
  
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <div className="aspect-square rounded-organic overflow-hidden">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-organic overflow-hidden border-2 ${
                        selectedImage === index ? 'border-primary' : 'border-gray-200'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex items-center gap-2">
                {product.isOrganic && (
                  <Badge variant="success" icon="Leaf">Organic</Badge>
                )}
                {product.isVegan && (
                  <Badge variant="secondary" icon="Sprout">Vegan</Badge>
                )}
                {product.isGlutenFree && (
                  <Badge variant="warning" icon="Shield">Gluten Free</Badge>
                )}
              </div>
              
              {/* Title & Rating */}
              <div>
                <h1 className="text-3xl font-display font-bold text-text-primary mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <ApperIcon 
                        key={i} 
                        name="Star" 
                        size={20} 
                        className={i < Math.floor(product.rating) ? "text-warning fill-current" : "text-gray-300"}
                      />
                    ))}
                    <span className="text-text-secondary ml-2">({product.rating})</span>
                  </div>
                  <span className="text-text-secondary">•</span>
                  <span className="text-text-secondary">{product.reviewCount} reviews</span>
                </div>
              </div>
              
              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gradient">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-text-secondary line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-text-secondary leading-relaxed">
                {product.description}
              </p>
              
              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <ApperIcon 
                  name={product.stock > 0 ? "CheckCircle" : "XCircle"} 
                  size={20} 
                  className={product.stock > 0 ? "text-success" : "text-error"}
                />
                <span className={product.stock > 0 ? "text-success" : "text-error"}>
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </span>
              </div>
              
              {/* Quantity & Add to Cart */}
              {product.stock > 0 && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-text-primary">
                      Quantity:
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(quantity - 1)}
                        className="w-8 h-8 rounded-organic bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                        disabled={quantity <= 1}
                      >
                        <ApperIcon name="Minus" size={16} />
                      </button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(quantity + 1)}
                        className="w-8 h-8 rounded-organic bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                        disabled={quantity >= product.stock}
                      >
                        <ApperIcon name="Plus" size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <Button
                    variant="primary"
                    size="large"
                    onClick={handleAddToCart}
                    icon="ShoppingCart"
                  >
                    Add to Cart
                  </Button>
                </div>
              )}
              
              {/* Nutrition Facts */}
              {product.nutrition && (
                <div className="card-organic p-6">
                  <h3 className="font-display font-semibold text-text-primary mb-4">
                    Nutrition Facts
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.nutrition).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-text-secondary capitalize">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <ApperIcon name="Truck" size={20} className="text-primary" />
                  <span className="text-sm text-text-secondary">Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-2">
                  <ApperIcon name="RotateCcw" size={20} className="text-primary" />
                  <span className="text-sm text-text-secondary">30-day return policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <ApperIcon name="Shield" size={20} className="text-primary" />
                  <span className="text-sm text-text-secondary">Quality guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <ApperIcon name="Leaf" size={20} className="text-primary" />
                  <span className="text-sm text-text-secondary">Sustainably sourced</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage