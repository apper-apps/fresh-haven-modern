import { motion } from 'framer-motion'
import Chart from 'react-apexcharts'

const DashboardCharts = ({ salesData, topProducts }) => {
  const salesChartOptions = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      }
    },
    colors: ['#2D5F3F', '#8BC34A'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      type: 'datetime',
      categories: salesData.map(item => item.date)
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  }
  
  const salesChartSeries = [
    {
      name: 'Sales',
      data: salesData.map(item => item.sales)
    }
  ]
  
  const topProductsChartOptions = {
    chart: {
      type: 'donut',
      height: 350
    },
    colors: ['#2D5F3F', '#8BC34A', '#FF6B35', '#4CAF50', '#FFA726'],
    labels: topProducts.map(product => product.name),
    legend: {
      position: 'bottom'
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%'
        }
      }
    }
  }
  
  const topProductsChartSeries = topProducts.map(product => product.sales)
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div
        className="card-organic p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-lg font-display font-semibold text-text-primary mb-4">
          Sales Overview
        </h3>
        <Chart
          options={salesChartOptions}
          series={salesChartSeries}
          type="area"
          height={300}
        />
      </motion.div>
      
      <motion.div
        className="card-organic p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-lg font-display font-semibold text-text-primary mb-4">
          Top Products
        </h3>
        <Chart
          options={topProductsChartOptions}
          series={topProductsChartSeries}
          type="donut"
          height={300}
        />
      </motion.div>
    </div>
  )
}

export default DashboardCharts