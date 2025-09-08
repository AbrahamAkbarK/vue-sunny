<template>
  <div>
    <!-- Hamburger toggles entire sidebar -->
    <button
      class="btn btn-outline-primary mb-3"
      @click="isSidebarOpen = !isSidebarOpen"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Sidebar wrapper -->
    <nav :class="['sidebar bg-light p-3', { open: isSidebarOpen }]">
      <ul class="list-unstyled">
        <li>
          <a href="#" @click.prevent="toggleSubmenu('menuA')" class="d-flex justify-content-between align-items-center">
            Menu A
            <i :class="submenu.menuA ? 'bi bi-chevron-down' : 'bi bi-chevron-right'"></i>
          </a>
          <ul v-show="submenu.menuA" class="ps-3">
            <li><a href="#">Sub A1</a></li>
            <li><a href="#">Sub A2</a></li>
          </ul>
        </li>

        <li class="mt-2">
          <a href="#" @click.prevent="toggleSubmenu('menuB')" class="d-flex justify-content-between align-items-center">
            Menu B
            <i :class="submenu.menuB ? 'bi bi-chevron-down' : 'bi bi-chevron-right'"></i>
          </a>
          <ul v-show="submenu.menuB" class="ps-3">
            <li><a href="#">Sub B1</a></li>
            <li><a href="#">Sub B2</a></li>
            <li><a href="#">Sub B3</a></li>
            <img src="https://dev.sunny.co.id/build/assets/sunny_logo_only_no_bg-Ds9GHun7.png" alt="logo" class="toggle-logo">
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
      submenu: {
        menuA: false,
        menuB: false
      }
    }
  },
  methods: {
    toggleSubmenu(key) {
      this.submenu[key] = !this.submenu[key]
    }
  }
}
</script>

<style scoped>
/* Sidebar base state: off-canvas to the left */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  overflow-y: auto;
  transform: translateX(-260px);
  transition: transform 0.3s ease;
  z-index: 1000;
}

/* When open: slide into view */
.sidebar.open {
  transform: translateX(0);
}

/* Optional: style the hamburger icon */
.btn .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' ... %3C/svg%3E");
}
</style>
