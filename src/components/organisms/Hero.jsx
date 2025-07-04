import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const Hero = () => {
  return (
<section className="relative bg-hero-gradient overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-black/15"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-32 h-32 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
<h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Nourish Your Body, 
              <span className="block text-secondary">Fuel Your Wellness</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              From protein-packed soya tikkis to colorful superfood salads, discover premium organic foods 
              that support your healthy lifestyle. Every bite is a step towards better wellness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button variant="accent" size="large" icon="ShoppingBag">
                  Shop Now
                </Button>
              </Link>
              <Button variant="outline" size="large" icon="Play">
                Watch Our Story
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <ApperIcon name="Shield" size={20} className="text-secondary" />
                <span className="text-sm">100% Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <ApperIcon name="Truck" size={20} className="text-secondary" />
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ApperIcon name="Award" size={20} className="text-secondary" />
                <span className="text-sm">Certified Fresh</span>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative z-10">
<img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Healthy superfood bowl with organic vegetables and protein"
                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-wellness transition-shadow duration-300"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <ApperIcon name="Star" size={16} className="text-warning fill-current" />
                  <span className="text-sm font-semibold">4.9/5 Rating</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <ApperIcon name="Users" size={16} className="text-primary" />
                  <span className="text-sm font-semibold">10K+ Customers</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero