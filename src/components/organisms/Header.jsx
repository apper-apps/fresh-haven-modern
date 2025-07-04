import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import SearchBar from '@/components/molecules/SearchBar'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartCount] = useState(3) // Mock cart count
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Shop' },
    { path: '/categories', label: 'Categories' },
    { path: '/about', label: 'About' },
    { path: '/dashboard', label: 'Dashboard' }
  ]
  
  const isActive = (path) => {
    return location.pathname === path
  }
  
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-hero-gradient rounded-organic flex items-center justify-center">
              <ApperIcon name="Leaf" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-gradient">
                Fresh Haven
              </h1>
              <p className="text-xs text-text-secondary">Healthy Food Marketplace</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path) 
                    ? 'text-primary' 
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block">
            <SearchBar />
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="small">
                <ApperIcon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <Badge 
                    variant="accent" 
                    size="small"
                    className="absolute -top-2 -right-2 min-w-[20px] h-5 rounded-full text-xs"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <ApperIcon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <SearchBar />
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-white border-t border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.path) 
                      ? 'text-primary' 
                      : 'text-text-secondary hover:text-primary'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header