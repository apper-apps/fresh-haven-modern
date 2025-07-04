import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import ApperIcon from '@/components/ApperIcon'
import { toast } from 'react-toastify'

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  })
  
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  
  const cartTotal = 47.95
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success('Order placed successfully!')
    setIsProcessing(false)
    
    // Redirect to success page
    setTimeout(() => {
      window.location.href = '/'
    }, 1500)
  }
  
  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)
  
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-display font-bold text-text-primary mb-8 text-center">
            Checkout
          </h1>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNum ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNum ? 'bg-primary' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Contact Information */}
            {step === 1 && (
              <motion.div
                className="card-organic p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display font-semibold text-text-primary mb-4">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button type="button" onClick={nextStep} variant="primary">
                    Continue to Shipping
                  </Button>
                </div>
              </motion.div>
            )}
            
            {/* Step 2: Shipping Address */}
            {step === 2 && (
              <motion.div
                className="card-organic p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display font-semibold text-text-primary mb-4">
                  Shipping Address
                </h3>
                
                <div className="space-y-4">
                  <Input
                    label="Street Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Input
                    label="ZIP Code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button type="button" onClick={prevStep} variant="ghost">
                    Back
                  </Button>
                  <Button type="button" onClick={nextStep} variant="primary">
                    Continue to Payment
                  </Button>
                </div>
              </motion.div>
            )}
            
            {/* Step 3: Payment */}
            {step === 3 && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-organic p-6">
                  <h3 className="font-display font-semibold text-text-primary mb-4">
                    Payment Information
                  </h3>
                  
                  <div className="space-y-4">
                    <Input
                      label="Card Number"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Expiry Date"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                      />
                      <Input
                        label="CVV"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required
                      />
                    </div>
                    
                    <Input
                      label="Name on Card"
                      name="nameOnCard"
                      value={formData.nameOnCard}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                {/* Order Summary */}
                <div className="card-organic p-6">
                  <h3 className="font-display font-semibold text-text-primary mb-4">
                    Order Summary
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Subtotal:</span>
                      <span className="font-medium">$41.96</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Shipping:</span>
                      <span className="font-medium">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Tax:</span>
                      <span className="font-medium">$5.99</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-gradient">${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button type="button" onClick={prevStep} variant="ghost">
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isProcessing}
                    icon={isProcessing ? "Loader" : "CreditCard"}
                  >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                  </Button>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default CheckoutPage