import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[400px] p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-organic p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-error to-warning rounded-full flex items-center justify-center mx-auto mb-4">
          <ApperIcon name="AlertCircle" size={32} className="text-white" />
        </div>
        <h3 className="text-xl font-display font-semibold text-text-primary mb-2">
          Oops! Something went wrong
        </h3>
        <p className="text-text-secondary mb-6">
          {message}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="btn-primary inline-flex items-center gap-2"
          >
            <ApperIcon name="RefreshCw" size={16} />
            Try Again
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default Error