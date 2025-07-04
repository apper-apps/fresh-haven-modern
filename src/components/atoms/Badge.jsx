import ApperIcon from '@/components/ApperIcon'

const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon,
  ...props 
}) => {
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    accent: "bg-accent text-white",
    success: "bg-success text-white",
    warning: "bg-warning text-white",
    error: "bg-error text-white",
    outline: "border border-primary text-primary bg-white",
    light: "bg-gray-100 text-gray-800"
  }
  
  const sizes = {
    small: "px-2 py-1 text-xs",
    medium: "px-3 py-1.5 text-sm",
    large: "px-4 py-2 text-base"
  }
  
  const classes = `inline-flex items-center gap-1 rounded-full font-medium ${variants[variant]} ${sizes[size]}`
  
  return (
    <span className={classes} {...props}>
      {icon && <ApperIcon name={icon} size={14} />}
      {children}
    </span>
  )
}

export default Badge