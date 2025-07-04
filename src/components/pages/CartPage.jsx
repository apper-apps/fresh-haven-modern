import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CartItem from '@/components/molecules/CartItem'
import Button from '@/components/atoms/Button'
import Empty from '@/components/ui/Empty'
import ApperIcon from '@/components/ApperIcon'
import { useCart } from '@/hooks/useCart'

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart()
const handleUpdateQuantity = (id, newQuantity) => {
    updateQuantity(id, newQuantity)
  }
  
  const handleRemoveItem = (id) => {
    removeFromCart(id)
  }
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <Empty
            title="Your cart is empty"
            description="Add some fresh, healthy products to get started"
            icon="ShoppingCart"
            actionText="Shop Now"
            onAction={() => window.location.href = '/products'}
          />
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-display font-bold text-text-primary mb-8">
            Shopping Cart
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <CartItem
                  key={item.Id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                />
              ))}
            </div>
            
            {/* Order Summary */}
            <div className="card-organic p-6 h-fit">
              <h3 className="font-display font-semibold text-text-primary mb-4">
                Order Summary
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Subtotal:</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Shipping:</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Tax:</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-gradient">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {shipping > 0 && (
                <div className="bg-secondary/10 p-3 rounded-organic mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <ApperIcon name="Truck" size={16} className="text-secondary" />
                    <span className="text-text-secondary">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping
                    </span>
                  </div>
                </div>
              )}
              
              <Link to="/checkout" className="block">
                <Button variant="primary" size="large" fullWidth icon="CreditCard">
                  Proceed to Checkout
                </Button>
              </Link>
              
              <Link to="/products" className="block mt-4">
                <Button variant="ghost" size="large" fullWidth icon="ArrowLeft">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CartPage