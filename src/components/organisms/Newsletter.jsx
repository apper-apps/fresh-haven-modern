import { useState } from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { toast } from 'react-toastify'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    
    // Simulate subscription
    setTimeout(() => {
      setIsSubscribed(true)
      toast.success('Successfully subscribed to our newsletter!')
      setEmail('')
    }, 1000)
  }
  
  return (
    <section className="py-16 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="Mail" size={32} className="text-white" />
          </div>
          
<h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Join Our Wellness Community
          </h2>
          
          <p className="text-lg text-white/90 mb-8">
            Receive weekly nutrition tips, exclusive wellness recipes, and early access to our 
            newest organic products. Your journey to better health starts here.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-white"
              />
            </div>
            <Button
              type="submit"
              variant="accent"
              size="large"
              disabled={isSubscribed}
            >
              {isSubscribed ? 'Subscribed!' : 'Subscribe'}
            </Button>
          </form>
          
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <ApperIcon name="Shield" size={16} />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <ApperIcon name="Gift" size={16} />
              <span>Exclusive offers</span>
            </div>
            <div className="flex items-center gap-2">
              <ApperIcon name="Heart" size={16} />
              <span>Health tips</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter