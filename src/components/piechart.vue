<!-- <template>
  <div class="pie-chart-container">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/axios'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

// Chart Data: Defines the labels and datasets for the pie chart.
const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Artists',
      data: [],
      backgroundColor: [
        '#FF6384', // Red
        '#36A2EB', // Blue
        '#FFCE56', // Yellow
        '#4BC0C0', // Teal
        '#9966FF', // Purple
        '#FF9F40', // Orange
      ],
      borderWidth: 1,
    },
  ],
})

// Chart Options: Configures the appearance and behavior.
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false, // Allow custom sizing
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Artist Distribution' },
  },
  animation: true, // Disable if causing issues
})

const loading = ref(true)

// onMounted(() => {
//   // Skip API, use hardcoded
//   chartData.value = {
//     labels: ['Pop', 'Rock', 'Hip-Hop'],
//     datasets: [{
//       label: 'Artists',
//       data: [15, 10, 8],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//     }],
//   };
//   loading.value = false;
// });

// onMounted(async () => {
//   try {
//     console.log('Fetching artist categories...');  // Debug log
//     const response = await api.get('/artist-categories-count', {
//       withCredentials: true,
//     });
//     const data = response.data;
//     console.log('API Response:', data);  // Log the data
//     if (data && data.length > 0) {
//       chartData.value.labels = data.map(item => item.category);
//       chartData.value.datasets[0].data = data.map(item => item.count);
//       console.log('Chart Data Updated:', chartData.value);  // Log chart data
//     } else {
//       console.warn('No data received from API');
//       chartData.value.labels = ['No Data'];
//       chartData.value.datasets[0].data = [1];
//     }
//   } catch (error) {
//     console.error('Fetch error:', error);  // Catch network errors
//   } finally {
//     loading.value = false;
//   }
// });

onMounted(async () => {
  try {
    const response = await api.get('/artist-categories-count', { withCredentials: true })
    const data = response.data.data

    // CRITICAL: Log raw API data

    if (data && Array.isArray(data) && data.length > 0) {
      // Log processed data
      const labels = data.map((item) => item.category || 'Unknown')
      const counts = data.map((item) => parseInt(item.count) || 0) // Ensure numbers
      console.log('Processed Labels:', labels)
      console.log('Processed Data:', counts)

      // Set chart data
      chartData.value.labels = labels
      chartData.value.datasets[0].data = counts
    }
  } catch (error) {
    console.error('Error:', error)
  }
})
</script>

<style lang="css" scoped>
.pie-chart-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 400px; /* Fixed height */
  margin: 20px auto;
}
:deep(canvas) {
  max-height: 100% !important;
}
</style> -->

<template>
  <div class="pie-chart-container">
    <div v-if="loading" class="loading">Loading chart...</div>
    <div v-else-if="hasValidData" class="chart-wrapper">
      <Pie :key="chartKey" :data="chartData" :options="chartOptions" />
    </div>
    <div v-else class="no-data">No valid data available for chart.</div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, computed } from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement} from 'chart.js';
import api from '@/axios';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Artists',
      data: [],
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF',
      ],
      borderWidth: 2,
      borderColor: '#fff',
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom' },
    title: {
      display: true,
      text: '',
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.label}: ${context.parsed} artists (${((context.parsed / totalArtists.value) * 100).toFixed(1)}%)`,
      },
    },
  },
  animation: { duration: 1000 },
});

const loading = ref(true);
const chartKey = ref(0);
const apiData = ref([]);  // Store raw API data for debugging

// Computed for valid data check
const hasValidData = computed(() => chartData.value.labels.length > 0 && chartData.value.datasets[0].data.length > 0);

// Calculate total for tooltips
const totalArtists = computed(() => chartData.value.datasets[0].data.reduce((sum, val) => sum + val, 0));

// Watcher: Force re-render when data changes
watch([chartData], async () => {
  if (hasValidData.value) {
    chartKey.value = Date.now();  // Unique key based on timestamp
    await nextTick();
    console.log('Data updated, forcing re-render with key:', chartKey.value);
  }
}, { deep: true, immediate: false });

// Function to update chart data (reusable)
const updateChartData = (rawData) => {
  if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
    console.warn('Invalid or empty API data');
    // Fallback
    chartData.value = {
      labels: ['No Data'],
      datasets: [{ ...chartData.value.datasets[0], data: [1] }],
    };
    return;
  }

  // Clean and process data
  const labels = rawData.map(item => (item.category || 'Unknown').toString().trim());
  const dataValues = rawData.map(item => parseInt(item.count) || 0).filter(val => val > 0);  // Ensure numbers, filter zeros

  // Match lengths (in case of filtering)
  const finalLabels = labels.slice(0, dataValues.length);

  // Create NEW object for full reactivity
  chartData.value = {
    labels: finalLabels,
    datasets: [
      {
        label: 'Artists',
        data: dataValues,
        backgroundColor: chartData.value.datasets[0].backgroundColor.slice(0, finalLabels.length),  // Match colors to labels
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  console.log('Chart data set:', chartData.value);
};

onMounted(async () => {
  try {
    console.log('Starting API fetch...');
    const response = await api.get('/artist-categories-count', { withCredentials: true });

    const rawData = response.data && response.data.data ? response.data.data : response.data;
    apiData.value = rawData;  // Store for debug

    console.log('Raw API Data:', rawData);

    updateChartData(rawData);

  } catch (error) {
    console.error('API Fetch Error:', error);
    updateChartData([]);  // Trigger fallback
  } finally {
    loading.value = false;
    await nextTick();  // Ensure template updates
  }
});
</script>

<style scoped>
.pie-chart-container {
  max-width: 200px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
}

.chart-wrapper {
  position: relative;
  width: 100%;
  height: 200px;  /* Fixed height ensures rendering */
}

.loading, .no-data {
  text-align: center;
  padding: 40px;
  color: #666;
  font-style: italic;
}

:deep(canvas) {
  max-width: 100% !important;
  max-height: 100% !important;
  display: block !important;
}
</style>
