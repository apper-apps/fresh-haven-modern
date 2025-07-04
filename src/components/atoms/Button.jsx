import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  onClick,
  ...props 
}) => {
const baseClasses = "inline-flex items-center justify-center font-medium rounded-organic transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-wellness"
  
  const variants = {
    primary: "bg-primary text-white hover:scale-105 hover:bg-primary/90 focus:ring-primary shadow-organic hover:shadow-organic-hover",
    secondary: "bg-secondary text-white hover:scale-105 hover:bg-secondary/90 focus:ring-secondary shadow-organic hover:shadow-organic-hover",
    accent: "bg-accent text-white hover:scale-105 hover:bg-accent/90 focus:ring-accent shadow-organic hover:shadow-organic-hover",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 focus:ring-primary transition-all duration-300",
    ghost: "text-primary hover:bg-primary/10 hover:scale-105 focus:ring-primary"
  }
  
  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  }
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
  const fullWidthClasses = fullWidth ? "w-full" : ""
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${fullWidthClasses}`
  
  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <ApperIcon name={icon} size={18} className="mr-2" />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <ApperIcon name={icon} size={18} className="ml-2" />
      )}
    </motion.button>
  )
}

export default Button