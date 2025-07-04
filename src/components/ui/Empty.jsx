import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ 
  title = "No items found", 
  description = "Try adjusting your search or browse our categories",
  icon = "Package",
  actionText = "Browse Products",
  onAction
}) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[400px] p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-organic p-12 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <ApperIcon name={icon} size={40} className="text-white" />
        </div>
        <h3 className="text-2xl font-display font-semibold text-text-primary mb-3">
          {title}
        </h3>
        <p className="text-text-secondary mb-8 leading-relaxed">
          {description}
        </p>
        {onAction && (
          <button
            onClick={onAction}
            className="btn-primary inline-flex items-center gap-2"
          >
            <ApperIcon name="ArrowRight" size={16} />
            {actionText}
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default Empty