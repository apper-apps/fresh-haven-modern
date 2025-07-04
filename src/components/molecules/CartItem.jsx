import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import { toast } from 'react-toastify'

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return
    onUpdateQuantity(item.Id, newQuantity)
  }
  
  const handleRemove = () => {
    onRemove(item.Id)
    toast.success(`${item.name} removed from cart`)
  }
  
  return (
    <motion.div
      className="card-organic p-4 flex items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <img 
        src={item.images[0]} 
        alt={item.name}
        className="w-16 h-16 object-cover rounded-organic"
      />
      
      <div className="flex-1">
        <h4 className="font-display font-semibold text-text-primary">{item.name}</h4>
        <p className="text-text-secondary text-sm">${item.price} each</p>
      </div>
      
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          <ApperIcon name="Minus" size={16} />
        </button>
        
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          <ApperIcon name="Plus" size={16} />
        </button>
      </div>
      
      <div className="text-right">
        <p className="font-bold text-text-primary">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={handleRemove}
          className="text-error hover:text-error/80 transition-colors mt-1"
        >
          <ApperIcon name="Trash2" size={16} />
        </button>
      </div>
    </motion.div>
  )
}

export default CartItem