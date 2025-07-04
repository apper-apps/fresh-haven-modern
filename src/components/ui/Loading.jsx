import { motion } from 'framer-motion'

const Loading = ({ type = 'default' }) => {
  if (type === 'products') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="card-organic p-0 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
              <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 animate-pulse"></div>
              <div className="flex justify-between items-center">
                <div className="h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-16 animate-pulse"></div>
                <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-20 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  if (type === 'dashboard') {
    return (
      <div className="space-y-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              className="card-organic p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-4 animate-pulse"></div>
              <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-2 animate-pulse"></div>
              <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-2/3 animate-pulse"></div>
            </motion.div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            className="card-organic p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-4 animate-pulse"></div>
            <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
          </motion.div>
          <motion.div
            className="card-organic p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-4 animate-pulse"></div>
            <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <motion.div
        className="flex flex-col items-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <p className="text-text-secondary font-medium">Loading fresh content...</p>
      </motion.div>
    </div>
  )
}

export default Loading