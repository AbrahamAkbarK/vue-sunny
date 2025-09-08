<template>
  <div class="sales-statistics-card card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">Sales Statistics</h5>
      <button class="btn btn-sm btn-outline-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
        </svg>
      </button>
    </div>
    <div class="card-body">
      <canvas ref="salesChart"></canvas>
      <div class="chart-legend d-flex justify-content-center mt-3">
        <div class="legend-item d-flex align-items-center me-4">
          <span class="legend-color-box" style="background-color: #ffc107;"></span>
          <span>Sales</span>
        </div>
        <div class="legend-item d-flex align-items-center me-4">
          <span class="legend-color-box" style="background-color: #0d6efd;"></span>
          <span>Revenue</span>
        </div>
        <div class="legend-item d-flex align-items-center">
          <span class="legend-color-box" style="background-color: #198754;"></span>
          <span>Profit</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

const salesChart = ref(null);

onMounted(() => {
  if (salesChart.value) {
    const ctx = salesChart.value.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan-25', 'Feb-25', 'Mar-25', 'Apr-25', 'May-25', 'Jun-25', 'Jul-25', 'Aug-25', 'Sep-25', 'Oct-25', 'Nov-25', 'Dec-25'],
        datasets: [
          {
            label: 'Sales',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            borderColor: '#ffc107',
            backgroundColor: '#ffc107',
            pointRadius: 3,
            pointBackgroundColor: '#ffc107',
            fill: false,
            tension: 0.1
          },
          {
            label: 'Revenue',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            borderColor: '#0d6efd',
            backgroundColor: '#0d6efd',
            pointRadius: 3,
            pointBackgroundColor: '#0d6efd',
            fill: false,
            tension: 0.1
          },
          {
            label: 'Profit',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            borderColor: '#198754',
            backgroundColor: '#198754',
            pointRadius: 3,
            pointBackgroundColor: '#198754',
            fill: false,
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
        plugins: {
          legend: {
            display: false // Using custom legend below
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#6c757d'
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              borderDash: [5, 5],
              color: '#dee2e6'
            },
            ticks: {
              color: '#6c757d',
              stepSize: 0.5,
              callback: function(value) {
                return 'Rp' + value.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.',',');
              }
            },
            max: 2,
            min: 0
          }
        }
      }
    });
  }
});
</script>

<style scoped>
.sales-statistics-card {
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.card-header {
  background-color: #fff;
  border-bottom: 1px solid #dee2e6;
  padding: 1rem 1.25rem;
}

.card-title {
  font-weight: 500;
  color: #212529;
}

.card-body {
    padding: 1.5rem;
    min-height: 350px;
}

.legend-color-box {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
}

.chart-legend {
    font-size: 0.875rem;
    color: #6c757d;
}
</style>
