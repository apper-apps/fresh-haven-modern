import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    'Shop': [
      { label: 'All Products', path: '/products' },
      { label: 'Superfoods', path: '/products?category=superfoods' },
      { label: 'Vegan Snacks', path: '/products?category=vegan-snacks' },
      { label: 'Cold-Pressed Juices', path: '/products?category=cold-pressed-juices' }
    ],
    'Company': [
      { label: 'About Us', path: '/about' },
      { label: 'Our Story', path: '/story' },
      { label: 'Careers', path: '/careers' },
      { label: 'Press', path: '/press' }
    ],
    'Support': [
      { label: 'Contact Us', path: '/contact' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Shipping', path: '/shipping' },
      { label: 'Returns', path: '/returns' }
    ]
  }
  
  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Youtube', icon: 'Youtube', url: '#' }
  ]
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-organic flex items-center justify-center">
                <ApperIcon name="Leaf" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Fresh Haven</h3>
                <p className="text-sm text-white/80">Healthy Food Marketplace</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted partner for organic, fresh, and healthy foods. 
              We connect you with the best local vendors and sustainable producers.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label={social.name}
                >
                  <ApperIcon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © {currentYear} Fresh Haven. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/80 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/80 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-white/80 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer