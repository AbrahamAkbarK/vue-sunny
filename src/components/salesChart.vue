<template>
  <div class="card p-3">
    <h5 class="card-title text-center">Sales by Source</h5>

    <div class="position-relative d-flex justify-content-center align-items-center" style="height: 300px;">
      <!-- Chart Canvas -->
      <canvas ref="chartRef" style="max-width: 100%; max-height: 100%;"></canvas>

      <!-- Center Label -->
      <div
        class="position-absolute text-center"
        :style="{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '1.5rem',
          fontWeight: '600'
        }"
      > <h5>Total opportunities</h5>
        {{ totalOpportunities }}
      </div>
    </div>

    <div class="row text-center mt-4">
      <div
        class="col-6 col-md-3 mb-3"
        v-for="source in sources"
        :key="source.label"
      >
        <i :class="source.iconClass" :style="{ fontSize: '1.5rem', color: source.color }"></i>
        <div class="mt-1">{{ source.label }}</div>
        <div class="fw-bold">{{ source.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import Chart from 'chart.js/auto'

// Reactive references
const chartRef = ref(null)
const chartInstance = ref(null)

// Data for each source
const sources = ref([
  { label: 'Email', color: '#28a745', value: 20, iconClass: 'bi bi-envelope-fill' },
  { label: 'Call', color: '#ffc107', value: 40, iconClass: 'bi bi-telephone-fill' },
  { label: 'Social Media', color: '#6f42c1', value: 10, iconClass: 'bi bi-share-fill' },
  { label: 'Referral', color: '#007bff', value: 30, iconClass: 'bi bi-person-check-fill' }
])

// Compute total opportunities
const totalOpportunities = computed(() =>
  sources.value.reduce((sum, s) => sum + s.value, 0)
)

onMounted(() => {
  const ctx = chartRef.value.getContext('2d')
  chartInstance.value = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: sources.value.map(s => s.label),
      datasets: [{
        data: sources.value.map(s => s.value),
        backgroundColor: sources.value.map(s => s.color),
        borderWidth: 0
      }]
    },
    options: {
      cutout: '85%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.label}: ${ctx.parsed} opportunities`
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false
    }
  })
})
</script>

<style scoped>
.card {
  max-width: 500px;
  margin: auto;
}

/* Adjust canvas container if needed */
</style>
