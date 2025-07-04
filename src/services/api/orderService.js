import mockOrders from '@/services/mockData/orders.json'

export const orderService = {
  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300))
    return [...mockOrders]
  },
  
  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200))
    const order = mockOrders.find(o => o.Id === id)
    if (!order) {
      throw new Error('Order not found')
    }
    return { ...order }
  },
  
  async create(orderData) {
    await new Promise(resolve => setTimeout(resolve, 400))
    const newOrder = {
      ...orderData,
      Id: Math.max(...mockOrders.map(o => o.Id)) + 1,
      createdAt: new Date().toISOString(),
      status: 'pending'
    }
    mockOrders.push(newOrder)
    return { ...newOrder }
  },
  
  async update(id, orderData) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const index = mockOrders.findIndex(o => o.Id === id)
    if (index === -1) {
      throw new Error('Order not found')
    }
    mockOrders[index] = { ...mockOrders[index], ...orderData }
    return { ...mockOrders[index] }
  },
  
  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 250))
    const index = mockOrders.findIndex(o => o.Id === id)
    if (index === -1) {
      throw new Error('Order not found')
    }
    mockOrders.splice(index, 1)
    return { success: true }
  }
}