import { productService } from './productService'
import { orderService } from './orderService'

export const dashboardService = {
  async getMetrics() {
    await new Promise(resolve => setTimeout(resolve, 400))
    
    const products = await productService.getAll()
    const orders = await orderService.getAll()
    
    const totalSales = orders.reduce((sum, order) => sum + order.total, 0)
    const totalOrders = orders.length
    const totalProducts = products.length
    const totalCustomers = new Set(orders.map(order => order.customerId)).size
    
    return {
      totalSales,
      totalOrders,
      totalProducts,
      totalCustomers
    }
  },
  
  async getSalesData() {
    await new Promise(resolve => setTimeout(resolve, 300))
    
    // Generate mock sales data for the last 30 days
    const salesData = []
    const now = new Date()
    
    for (let i = 29; i >= 0; i--) {
      const date = new Date(now)
      date.setDate(date.getDate() - i)
      
      salesData.push({
        date: date.toISOString().split('T')[0],
        sales: Math.floor(Math.random() * 1000) + 500
      })
    }
    
    return salesData
  },
  
  async getTopProducts() {
    await new Promise(resolve => setTimeout(resolve, 250))
    
    return [
      { name: 'Organic Quinoa Bowl', sales: 1200 },
      { name: 'Cold-Pressed Juice', sales: 980 },
      { name: 'Almond Butter', sales: 750 },
      { name: 'Protein Powder', sales: 620 },
      { name: 'Superfood Mix', sales: 580 }
    ]
  }
}