import { useState, useCallback } from 'react'

export const useCart = () => {
  const [cartItems, setCartItems] = useState([])
  
  const addToCart = useCallback((product, quantity = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.Id === product.Id)
      
      if (existingItem) {
        return prev.map(item =>
          item.Id === product.Id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      
      return [...prev, { ...product, quantity }]
    })
  }, [])
  
  const removeFromCart = useCallback((productId) => {
    setCartItems(prev => prev.filter(item => item.Id !== productId))
  }, [])
  
  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.Id === productId ? { ...item, quantity } : item
      )
    )
  }, [removeFromCart])
  
  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])
  
  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }, [cartItems])
  
  const getCartCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }, [cartItems])
  
  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount
  }
}