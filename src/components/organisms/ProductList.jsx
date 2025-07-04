import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/molecules/ProductCard'
import FilterSidebar from '@/components/molecules/FilterSidebar'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { productService } from '@/services/api/productService'
import ApperIcon from '@/components/ApperIcon'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filters, setFilters] = useState({})
  const [sortBy, setSortBy] = useState('name')
  const [showFilters, setShowFilters] = useState(false)
  
  const loadProducts = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await productService.getAll()
      setProducts(data)
      setFilteredProducts(data)
    } catch (err) {
      setError('Failed to load products')
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadProducts()
  }, [])
  
  useEffect(() => {
    let filtered = [...products]
    
    // Apply filters
    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      )
    }
    
    if (filters.priceRange) {
      filtered = filtered.filter(product => 
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      )
    }
    
    if (filters.dietary && filters.dietary.length > 0) {
      filtered = filtered.filter(product => 
        filters.dietary.some(diet => product.dietary?.includes(diet))
      )
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return new Date(b.createdAt || '2024-01-01') - new Date(a.createdAt || '2024-01-01')
        default:
          return a.name.localeCompare(b.name)
      }
    })
    
    setFilteredProducts(filtered)
  }, [products, filters, sortBy])
  
  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }
  
  const handleClearFilters = () => {
    setFilters({})
  }
  
  if (loading) {
    return <Loading type="products" />
  }
  
  if (error) {
    return <Error message={error} onRetry={loadProducts} />
  }
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-text-primary mb-2">
              All Products
            </h1>
            <p className="text-text-secondary">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-organic focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
            
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden px-4 py-2 bg-primary text-white rounded-organic flex items-center gap-2"
            >
              <ApperIcon name="Filter" size={20} />
              Filters
            </button>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </div>
          
          {/* Products */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <Empty
                title="No products found"
                description="Try adjusting your filters or search criteria"
                icon="Package"
                actionText="Clear Filters"
                onAction={handleClearFilters}
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList