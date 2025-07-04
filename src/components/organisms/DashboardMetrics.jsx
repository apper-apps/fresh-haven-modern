import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const DashboardMetrics = ({ metrics }) => {
  const metricCards = [
    {
      title: 'Total Sales',
      value: `$${metrics.totalSales?.toLocaleString() || '0'}`,
      change: '+12.5%',
      changeType: 'increase',
      icon: 'DollarSign',
      color: 'primary'
    },
    {
      title: 'Orders',
      value: metrics.totalOrders?.toLocaleString() || '0',
      change: '+8.2%',
      changeType: 'increase',
      icon: 'ShoppingCart',
      color: 'secondary'
    },
    {
      title: 'Products',
      value: metrics.totalProducts?.toLocaleString() || '0',
      change: '+3.1%',
      changeType: 'increase',
      icon: 'Package',
      color: 'accent'
    },
    {
      title: 'Customers',
      value: metrics.totalCustomers?.toLocaleString() || '0',
      change: '+15.8%',
      changeType: 'increase',
      icon: 'Users',
      color: 'success'
    }
  ]
  
  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      accent: 'bg-accent text-white',
      success: 'bg-success text-white'
    }
    return colors[color] || colors.primary
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metricCards.map((metric, index) => (
        <motion.div
          key={metric.title}
          className="card-organic p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-organic flex items-center justify-center ${getColorClasses(metric.color)}`}>
              <ApperIcon name={metric.icon} size={24} />
            </div>
            <div className={`flex items-center gap-1 text-sm ${
              metric.changeType === 'increase' ? 'text-success' : 'text-error'
            }`}>
              <ApperIcon 
                name={metric.changeType === 'increase' ? 'TrendingUp' : 'TrendingDown'} 
                size={16} 
              />
              <span className="font-medium">{metric.change}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-1">
              {metric.value}
            </h3>
            <p className="text-text-secondary text-sm">{metric.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default DashboardMetrics