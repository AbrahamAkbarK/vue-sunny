<script setup>
import Breadcrumb from './components/breadcrumb.vue'
import NavBarbase from './components/navBarbase.vue'
import SideBarbase from './components/sideBarbase.vue'
import modalComp from './components/modalComp.vue'
import { onMounted, ref } from 'vue'
import Piechart from './components/piechart.vue'
import api from './axios'
const toggleActive = ref(false)

function handleToggle() {
  toggleActive.value = !toggleActive.value
}

const totalSongs = ref(0)
const loading = ref(true)
const error = ref(null)

const fetchSongs = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await api.get('/total-songs', { withCredentials: true })
    const data = response.data // Axios auto-parses JSON, handles types better
    // Axios ensures numbers stay numbers from JSON
    totalSongs.value = data.total_songs || 0
    // If the API returns a number directly
    if (data && typeof data.total_songs !== 'undefined') {
      totalSongs.value =
        typeof data.total_songs === 'number'
          ? data.total_songs
          : parseInt(data.total_songs, 10) || 0 // Convert string to int, fallback 0
    } else {
      throw new Error('Invalid data structure')
    }

    console.log('Processed Total Songs:', totalSongs.value, typeof totalSongs.value)
  } catch (err) {
    console.error('Error:', err)
    totalSongs.value = 0
    error.value = 'Failed to load data'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchSongs()
})
</script>

<template>
  <div class="container">
    <SideBarbase :class="{ hide: toggleActive }"></SideBarbase>
    <div class="main-content">
      <NavBarbase @toggleActive="handleToggle"></NavBarbase>
      <Breadcrumb> Dashboard </Breadcrumb>
      <div class="container-fluid mb-2">
        <div class="card custom-card border-0">
          <div class="card-header bg-white border-0">
            <h1 style="font-weight: 300">Dashboard</h1>
          </div>
          <div class="card-body">
            <ul class="nav nav-underline">
              <li class="nav-item">
                <a class="nav-link active m-2" aria-current="page" href="">Dashboard</a>
              </li>
            </ul>
            <div class="row">
              <div class="col-6">
                <div class="d-flex">
                  <div class="card text-center m-2" style="width: 18rem">
                    <div class="card-body p-5 m-4">
                      <h5 class="card-title p-3">Total Asset</h5>
                      <h5 class="card-text fw-medium">
                        <div v-if="loading" class="loading">Loading...</div>
                        <div v-else class="song-count">
                          {{ totalSongs.toLocaleString() }}
                          <!-- Formats as 1,234 -->
                        </div>
                        <p v-if="error" class="error">{{ error }}</p>
                      </h5>
                    </div>
                  </div>
                  <div class="card m-2" style="width: 18rem">
                    <div class="card-body p-3">
                      <h5 class="card-title">Total Artis</h5>
                      <div class="chart-item">
                        <Piechart />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card m-2">
                  <div class="card-body">
                    <h5>Fresh Launch</h5>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Artist</th>
                          <th scope="col">Track</th>
                          <th scope="col">Label</th>
                          <th scope="col">Composer Publishing</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Agnes</td>
                          <td>Cinta</td>
                          <td>Aquarius</td>
                          <td>TBD</td>
                        </tr>
                        <tr>
                          <td>Agnes</td>
                          <td>Cinta</td>
                          <td>Aquarius</td>
                          <td>TBD</td>
                        </tr>
                        <tr>
                          <td>Agnes</td>
                          <td>Cinta</td>
                          <td>Aquarius</td>
                          <td>TBD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card m-2">
                  <div class="card-body">
                    <h5>Expired Contract</h5>
                    <table class="table">
                      <thead>
                        <tr>
                          <td class="text-muted fw-medium" scope="col">Title</td>
                          <td class="text-muted fw-medium" scope="col">Artist</td>
                          <td class="text-muted fw-medium" scope="col">Composer</td>
                          <td class="text-muted fw-medium" scope="col">Label</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Agnes</td>
                          <td>Cinta</td>
                          <td>Aquarius</td>
                          <td>TBD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="card m-2">
                  <div class="card-body">
                    <h5>What's Special</h5>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Asset</th>
                          <th scope="col">Artist</th>
                          <th scope="col">Composer</th>
                          <th scope="col">Periode Month</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Agnes</td>
                          <td>Cinta</td>
                          <td>Aquarius</td>
                          <td>TBD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer py-3 mt-auto bg-white">Copyright © 2025</footer>
    </div>
  </div>
  <modalComp></modalComp>
</template>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
  max-width: 100%;
  padding: 5px;
}

.sidebar {
  width: 240px;
  background-color: white;
  border-right: 1px solid #dee2e6;
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  flex-direction: column;
  transition: all 0.3s ease-in;
}

.sidebar.hide {
  width: 85px;
  transition: all 0.3s ease-out;
  overflow: hidden;
}

.sidebar.hide:hover {
  width: 240px;
  transition: all 0.3s ease-in;
  overflow: hidden;
}

.sidebar .header .list-item .logo {
  width: 123px;
  height: 32px;
  transition: all 0.3s ease-in;
}

.sidebar.hide .header .list-item .logo {
  content: url('https://dev.sunny.co.id/build/assets/sunny_logo_only_no_bg-Ds9GHun7.png');
  width: 50px;
}

.sidebar.hide:hover .header .list-item .logo {
  content: url('https://dev.sunny.co.id/build/assets/sunny_logo_black_no_bg-CLHsmPE_.png');
  width: 123px;
  height: 32px;
  transition: all 0.3s ease-in;
}

.sidebar .header .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  box-sizing: border-box;
}

.main-content {
  background-color: #f6f6fb;
  flex: 1;
}

.sidebar .main .list-item .description {
  font-size: 14px;
  color: #6c757d;
  margin-left: 10px;
  font-weight: 400;
  text-align: center;
}

.sidebar.hide .main .list-item .description {
  display: none;
}

.sidebar.hide:hover .main .list-item .description {
  display: inline-block;
  transition: all ease-in 0.3s;
}

.sidebar .main .list-item .icon {
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
}

.sidebar .main .list-item a {
  text-decoration: none;
  color: #212529;
  display: flex;
  align-items: center;
}

.sidebar .main .list-item {
  padding: 7px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  transition: all ease-in 0.3s;
}
.sidebar .main .list-item:hover {
  background-color: #ffec70;
  opacity: 0.8;
  transition: all ease-in 0.3s;
}

.sidebar .main .category {
  padding: 0.5rem 1rem;
  font-size: 10px;
  text-transform: uppercase;
  color: #6c757d;
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0.5;
  transition: opacity 0.3s;
  box-sizing: border-box;
}

.sidebar.hide .main .category {
  content: url('/src/assets/circle.svg');
  height: 10px;
  width: 10px;
  margin: 0 auto;
  padding: 0;
}

.sidebar.hide:hover .main .category {
  content: '';
  height: auto;
  width: auto;
  padding: 0.5rem 1rem;
  font-size: 10px;
  text-transform: uppercase;
  color: #6c757d;
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.navbar-brand img {
  width: 25px;
  height: 20px;
  margin: 10px;
}

.sidebar .main .list-item .icon-child {
  width: 7px;
  height: 7px;
  display: inline-block;
  vertical-align: middle;
}

.sidebar .main .list-item .point-icon {
  width: 15px;
  height: 15px;
  display: inline-block;
  vertical-align: middle;
  margin-left: auto;
  content: url('/src/assets/caret-right.svg');
  transition: transform 0.3s ease;
}

.sidebar.hide .main .list-item .point-icon {
  display: none;
}

.sidebar.hide:hover .main .list-item .point-icon {
  display: inline-block;
  content: url('/src/assets/caret-right.svg');
  width: 15px;
  height: 15px;
  margin-left: auto;
  transition: transform 0.3s ease;
}

.sidebar .main .list-item:hover .point-icon {
  transform: rotate(90deg);
}

.breadcrumb-nav {
  margin: 20px 20px;
}
.btn {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  margin: 5px;
  color: white;
}

.border-header {
  padding: 15px;
  border-block-end: 1px solid white;
}

.table {
  padding: 14px 20px;
  margin: 10px;
}
.table thead tr th {
  font-size: 14px;
  font-weight: 500;
}

/* Button Styles */

.dropdown-toggle {
  outline: 0;
}

.btn-toggle {
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  color: var(--bs-emphasis-color);
  background-color: transparent;
}
.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(var(--bs-emphasis-color-rgb), 0.85);
  background-color: var(--bs-tertiary-bg);
}

.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
}

[data-bs-theme='dark'] .btn-toggle::before {
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%28255,255,255,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
}

.btn-toggle[aria-expanded='true'] {
  color: rgba(var(--bs-emphasis-color-rgb), 0.85);
}
.btn-toggle[aria-expanded='true']::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  padding: 0.1875rem 0.5rem;
  margin-top: 0.125rem;
  margin-left: 1.25rem;
}

.scrollarea {
  overflow-y: auto;
}

.menu-btn::before {
  width: 25px;
  height: 20px;
  margin: 10px;
  content: url('/src/assets/house.svg');
}

.card-footer {
  background-color: white;
  padding: 20px;
}

.ms-auto {
  height: 38px;
}

.footer {
  text-align: center;
  color: #6c757d;
  font-size: 14px;
  position: absolute bottom;
  bottom: 0;
  width: 100%;
}

.dropdown {
  height: 37px;
  position: relative;
  width: 34px;
}

.btn.btn-sm {
  padding: 4px 8px;
  border-radius: 4px;
}

.table td {
  padding: 7px 8px;
  vertical-align: middle;
  box-sizing: border-box;
  text-align: start;
}

.table th {
  text-align: start;
  vertical-align: middle;
}

.link {
  width: 100%;
}

.main-header-dropdown {
  width: 350px;
  margin: 0px;
}

.avatar.avatar-xl {
  width: 64px;
  height: 64px;
  content: url(/src/assets/emoji-kiss.svg);
}

.dropdown-item {
  padding: 10px 16px;
}

.chart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}
</style>
