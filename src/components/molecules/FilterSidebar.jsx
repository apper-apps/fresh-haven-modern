import { useState } from 'react'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'

const FilterSidebar = ({ filters, onFilterChange, onClearFilters }) => {
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedDietary, setSelectedDietary] = useState([])
  
  const categories = [
    'Superfoods', 'Vegan Snacks', 'Cold-Pressed Juices', 
    'Organic Produce', 'Protein', 'Supplements'
  ]
  
  const dietaryOptions = [
    'Organic', 'Vegan', 'Gluten-Free', 'Keto', 'Paleo', 'Raw'
  ]
  
  const handleCategoryToggle = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category]
    setSelectedCategories(updated)
    onFilterChange({ categories: updated })
  }
  
  const handleDietaryToggle = (dietary) => {
    const updated = selectedDietary.includes(dietary)
      ? selectedDietary.filter(d => d !== dietary)
      : [...selectedDietary, dietary]
    setSelectedDietary(updated)
    onFilterChange({ dietary: updated })
  }
  
  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value)
    const newRange = [priceRange[0], value]
    setPriceRange(newRange)
    onFilterChange({ priceRange: newRange })
  }
  
  const activeFiltersCount = selectedCategories.length + selectedDietary.length
  
  return (
    <div className="w-full lg:w-80 space-y-6">
      <div className="card-organic p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold text-text-primary">Filters</h3>
          {activeFiltersCount > 0 && (
            <Badge variant="primary" size="small">
              {activeFiltersCount} active
            </Badge>
          )}
        </div>
        
        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="small"
            onClick={onClearFilters}
            className="mb-4"
          >
            Clear All
          </Button>
        )}
        
        {/* Price Range */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-text-primary mb-3">
            Price Range
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[1]}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-text-secondary">
              <span>$0</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-text-primary mb-3">
            Categories
          </label>
          <div className="space-y-2">
            {categories.map(category => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm text-text-secondary">{category}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Dietary Options */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-text-primary mb-3">
            Dietary Options
          </label>
          <div className="space-y-2">
            {dietaryOptions.map(dietary => (
              <label key={dietary} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedDietary.includes(dietary)}
                  onChange={() => handleDietaryToggle(dietary)}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm text-text-secondary">{dietary}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar