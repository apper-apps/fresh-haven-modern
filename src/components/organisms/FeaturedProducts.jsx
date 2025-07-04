import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/molecules/ProductCard'
import Button from '@/components/atoms/Button'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { productService } from '@/services/api/productService'

const FeaturedProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  const loadProducts = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await productService.getAll()
      setProducts(data.slice(0, 8)) // Show only first 8 products
    } catch (err) {
      setError('Failed to load featured products')
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadProducts()
  }, [])
  
  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <Loading type="products" />
        </div>
      </section>
    )
  }
  
  if (error) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Error message={error} onRetry={loadProducts} />
        </div>
      </section>
    )
  }
  
  if (products.length === 0) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Empty 
            title="No Featured Products"
            description="Check back soon for our featured products"
            icon="Package"
          />
        </div>
      </section>
    )
  }
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Handpicked selections from our premium collection of organic and healthy foods
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.Id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/products">
            <Button variant="primary" size="large" icon="ArrowRight">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts