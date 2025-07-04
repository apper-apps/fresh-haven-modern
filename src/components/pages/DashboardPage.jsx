import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import DashboardSidebar from '@/components/organisms/DashboardSidebar'
import DashboardMetrics from '@/components/organisms/DashboardMetrics'
import DashboardCharts from '@/components/organisms/DashboardCharts'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import { dashboardService } from '@/services/api/dashboardService'
import ApperIcon from '@/components/ApperIcon'

const DashboardPage = () => {
  const [metrics, setMetrics] = useState({})
  const [salesData, setSalesData] = useState([])
  const [topProducts, setTopProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  const loadDashboardData = async () => {
    try {
      setLoading(true)
      setError('')
      
      const [metricsData, salesDataResult, topProductsData] = await Promise.all([
        dashboardService.getMetrics(),
        dashboardService.getSalesData(),
        dashboardService.getTopProducts()
      ])
      
      setMetrics(metricsData)
      setSalesData(salesDataResult)
      setTopProducts(topProductsData)
    } catch (err) {
      setError('Failed to load dashboard data')
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadDashboardData()
  }, [])
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex">
        <DashboardSidebar />
        <div className="flex-1 p-8">
          <Loading type="dashboard" />
        </div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-background flex">
        <DashboardSidebar />
        <div className="flex-1 p-8">
          <Error message={error} onRetry={loadDashboardData} />
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 p-8">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-text-primary">
                Dashboard Overview
              </h1>
              <p className="text-text-secondary mt-1">
                Welcome back! Here's what's happening with your store.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-organic hover:bg-gray-50">
                <ApperIcon name="Download" size={20} />
                <span>Export</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-organic hover:bg-primary/90">
                <ApperIcon name="Plus" size={20} />
                <span>Add Product</span>
              </button>
            </div>
          </div>
          
          {/* Metrics */}
          <DashboardMetrics metrics={metrics} />
          
          {/* Charts */}
          <DashboardCharts salesData={salesData} topProducts={topProducts} />
          
          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              className="card-organic p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-display font-semibold text-text-primary mb-4">
                Recent Orders
              </h3>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map(order => (
                  <div key={order} className="flex items-center justify-between p-3 bg-gray-50 rounded-organic">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                        #{order}
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">Order #{1000 + order}</p>
                        <p className="text-sm text-text-secondary">Customer Name</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-text-primary">$29.99</p>
                      <p className="text-sm text-success">Completed</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="card-organic p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="font-display font-semibold text-text-primary mb-4">
                Low Stock Alerts
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Organic Quinoa', stock: 5 },
                  { name: 'Almond Butter', stock: 3 },
                  { name: 'Green Juice', stock: 8 },
                  { name: 'Protein Powder', stock: 2 }
                ].map(product => (
                  <div key={product.name} className="flex items-center justify-between p-3 bg-warning/10 rounded-organic">
                    <div className="flex items-center gap-3">
                      <ApperIcon name="AlertTriangle" size={20} className="text-warning" />
                      <div>
                        <p className="font-medium text-text-primary">{product.name}</p>
                        <p className="text-sm text-text-secondary">{product.stock} units left</p>
                      </div>
                    </div>
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      Restock
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DashboardPage