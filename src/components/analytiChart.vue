<template>
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
        aspectRatio: 3,
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
    min-height: 300px;
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
