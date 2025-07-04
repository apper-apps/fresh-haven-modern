import { forwardRef } from 'react'
import ApperIcon from '@/components/ApperIcon'

const Input = forwardRef(({ 
  label, 
  error, 
  icon, 
  type = 'text', 
  placeholder,
  className = '',
  ...props 
}, ref) => {
  const inputClasses = `
    w-full px-4 py-3 rounded-organic border-2 border-gray-200 
    focus:border-primary focus:outline-none transition-colors duration-200
    ${error ? 'border-error focus:border-error' : ''}
    ${icon ? 'pl-12' : ''}
    ${className}
  `
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary">
            <ApperIcon name={icon} size={20} />
          </div>
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={inputClasses}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input