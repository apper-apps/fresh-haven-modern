import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Wellness Coach',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9dc1659?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Fresh Haven has transformed my meal planning. The quality of organic produce is exceptional, and the delivery is always on time.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Fitness Enthusiast',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The superfood selection is incredible! I love how everything is clearly labeled with nutritional information. Perfect for my training diet.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Busy Mom',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'As a working mother, Fresh Haven saves me so much time while ensuring my family eats healthy. The kids love the organic snacks!',
      rating: 5
    }
  ]
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
<h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
            Wellness Transformation Stories
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover how our community has embraced healthier lifestyles through premium organic nutrition and wellness support
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="card-organic p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <ApperIcon 
                    key={i} 
                    name="Star" 
                    size={20} 
                    className="text-warning fill-current"
                  />
                ))}
              </div>
              
              <blockquote className="text-text-secondary italic mb-4 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div>
                <h4 className="font-display font-semibold text-text-primary">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-text-secondary">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials