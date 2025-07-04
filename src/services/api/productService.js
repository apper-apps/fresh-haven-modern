import mockProducts from '@/services/mockData/products.json'

export const productService = {
  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300))
    return [...mockProducts]
  },
  
  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200))
    const product = mockProducts.find(p => p.Id === id)
    if (!product) {
      throw new Error('Product not found')
    }
    return { ...product }
  },
  
  async create(productData) {
    await new Promise(resolve => setTimeout(resolve, 400))
    const newProduct = {
      ...productData,
      Id: Math.max(...mockProducts.map(p => p.Id)) + 1,
      createdAt: new Date().toISOString()
    }
    mockProducts.push(newProduct)
    return { ...newProduct }
  },
  
  async update(id, productData) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const index = mockProducts.findIndex(p => p.Id === id)
    if (index === -1) {
      throw new Error('Product not found')
    }
    mockProducts[index] = { ...mockProducts[index], ...productData }
    return { ...mockProducts[index] }
  },
  
  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 250))
    const index = mockProducts.findIndex(p => p.Id === id)
    if (index === -1) {
      throw new Error('Product not found')
    }
    mockProducts.splice(index, 1)
    return { success: true }
  }
}