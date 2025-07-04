import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  
  const menuItems = [
    { path: '/dashboard', label: 'Overview', icon: 'BarChart3' },
    { path: '/dashboard/products', label: 'Products', icon: 'Package' },
    { path: '/dashboard/orders', label: 'Orders', icon: 'ShoppingCart' },
    { path: '/dashboard/inventory', label: 'Inventory', icon: 'Warehouse' },
    { path: '/dashboard/customers', label: 'Customers', icon: 'Users' },
    { path: '/dashboard/analytics', label: 'Analytics', icon: 'TrendingUp' },
    { path: '/dashboard/settings', label: 'Settings', icon: 'Settings' }
  ]
  
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              {!isCollapsed && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-hero-gradient rounded-organic flex items-center justify-center">
                    <ApperIcon name="Leaf" size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-gradient">Fresh Haven</h2>
                    <p className="text-xs text-text-secondary">Seller Dashboard</p>
                  </div>
                </div>
              )}
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 hover:bg-gray-100 rounded-organic transition-colors"
              >
                <ApperIcon name={isCollapsed ? "ChevronRight" : "ChevronLeft"} size={20} />
              </button>
            </div>
            
            <nav className="space-y-2">
              {menuItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-organic transition-colors ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-gray-100 hover:text-text-primary'
                    }`
                  }
                >
                  <ApperIcon name={item.icon} size={20} />
                  {!isCollapsed && <span className="font-medium">{item.label}</span>}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar Overlay */}
      <div className="lg:hidden">
        {/* This would be implemented with a mobile menu toggle */}
      </div>
    </>
  )
}

export default DashboardSidebar