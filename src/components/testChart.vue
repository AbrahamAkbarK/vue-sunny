<template>
  <div class="card sales-card shadow-sm">
    <!-- Card Header -->
    <div class="card-header bg-white border-bottom-0 pt-3 pb-0 d-flex justify-content-between align-items-center">
      <h5 class="card-title fw-semibold mb-0">Sales by Source</h5>
      <a href="#" class="text-secondary" aria-label="Refresh">
        <i class="bi bi-arrow-clockwise"></i>
      </a>
    </div>

    <div class="card-body">
      <!-- Donut Chart Section -->
      <div class="text-center my-4">
        <div class="donut-chart mx-auto">
          <div class="chart-inner-text">
            <p class="text-muted mb-1 small">Total Opportunity</p>
            <h2 class="mb-0 fw-bold">{{ totalOpportunities }}</h2>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="d-flex justify-content-center flex-wrap gap-3 small">
        <div v-for="source in sources" :key="source.name" class="d-flex align-items-center">
          <span class="legend-dot" :style="{ backgroundColor: source.color }"></span>
          <span class="ms-2 text-muted">{{ source.name }}</span>
        </div>
      </div>

      <hr class="my-4">

      <!-- Stats Grid Section -->
      <div class="row text-center">
        <div class="col-6 mb-3" v-for="source in sources" :key="source.name">
          <div class="stat-item">
            <div class="icon-circle mx-auto mb-2" :style="{ backgroundColor: source.bgColor }">
              <i :class="source.icon" :style="{ color: source.color }"></i>
            </div>
            <p class="mb-0 text-muted">{{ source.name }}</p>
            <h5 class="mb-0 fw-semibold">{{ source.value }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// --- Data for the card ---
// This data is reactive and can be updated from an API call or other sources.
const sources = ref([
    {
        name: 'Email',
        value: 0,
        color: '#34c38f',
        icon: 'bi bi-envelope',
        bgColor: 'rgba(52, 195, 143, 0.15)',
    },
    {
        name: 'Call',
        value: 0,
        color: '#f1b44c',
        icon: 'bi bi-telephone',
        bgColor: 'rgba(241, 180, 76, 0.15)',
    },
    {
        name: 'Social Media',
        value: 0,
        color: '#7478f2',
        icon: 'bi bi-chat-dots',
        bgColor: 'rgba(116, 120, 242, 0.15)',
    },
    {
        name: 'Referral',
        value: 0,
        color: '#50a5f1',
        icon: 'bi bi-person',
        bgColor: 'rgba(80, 165, 241, 0.15)',
    },
]);

// --- Computed Property ---
// Automatically calculates the total when the values in 'sources' change.
const totalOpportunities = computed(() => {
  return sources.value.reduce((sum, source) => sum + source.value, 0);
});
</script>

<style scoped>
/* Scoped styles ensure these CSS rules only apply to this component */
.sales-card {
  /* You can use any modern sans-serif font */
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: none;
  border-radius: 0.6rem;
}

.card-title {
    color: #495057;
}

/* A simple CSS representation of the donut chart */
.donut-chart {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 18px solid #f6f6f6; /* Light grey border for the chart circle */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.chart-inner-text {
  line-height: 1.2;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
}

.icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
}

.stat-item:hover .icon-circle {
    transform: translateY(-3px);
}
</style>
