<template>
  <div style="width: 250px; height: 250px;">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

// This is a crucial step. Chart.js is modular, so you need to register
// the components you're going to use.
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

// Chart Data: Defines the labels and datasets for the pie chart.
const chartData = {
  labels: ['Vue.js', 'React', 'Angular', 'Svelte'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#61DAFB', '#DD0031', '#FF3E00'],
      data: [40, 20, 15, 25], // The values for each slice
      pointStyle:'circle',
      pointRadius: 3,
    }
  ]
}

// Chart Options: Configures the appearance and behavior.
const chartOptions = {
  responsive: true, // Makes the chart resize with its container
  maintainAspectRatio: false, // Allows custom width/height
  plugins: {
    legend: {
      position: 'bottom', // Position the legend at the top
      labels:{
        usePointStyle:true,
      },
    },
    title: {
      display: true,
      text: '' // Chart title
    }
  }
}
</script>
