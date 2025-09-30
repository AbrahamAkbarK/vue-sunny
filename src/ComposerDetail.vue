<script setup>
import { onMounted, ref } from 'vue'
import SideBarbase from './components/sideBarbase.vue'
import NavBarbase from './components/navBarbase.vue'
import Breadcrumb from './components/breadcrumb.vue'
import ButtonBase from './components/buttonBase.vue'
import ButtonItems from './components/buttonItems.vue'
import { RouterLink, useRoute } from 'vue-router'
import api from './axios'

const composer = ref([])
const currentPage = ref(1)
const lastPage = ref(1)
const loadingPage = ref(false)
const loading = ref(true)
const error = ref('')
const route = useRoute()
const composerId = route.params.id

// Define the ID of the composer you want to fetch
// const composerId = 1 // You can make this dynamic later (e.g., from route params)

// Function to fetch data from the Laravel API
async function fetchComposer() {
  try {
    // Make the GET request using Axios
    const response = await api.get(`/composers/${composerId}`)

    // Store the data in our reactive variable
    composer.value = response.data.composer
  } catch (err) {
    // If an error occurs, store the error message
    error.value = 'Failed to fetch composer data.'
    console.error('API Error:', err)
  } finally {
    // This will run after the try or catch block is finished
    loading.value = false
  }
}

async function PageSongComposer(page = 1) {
  loading.value = true
  try {
    const response = await api.get(`/composer/${composerId}?page=${page}`, {
      withCredentials: true,
    })
    const resData = response.data.composer
    composer.value = resData.data // paginated songs array
    currentPage.value = resData.current_page
    lastPage.value = resData.last_page
  } catch (error) {
    console.error('Failed to fetch songs:', error)
  } finally {
    loading.value = false
  }
}

// onMounted is a lifecycle hook that runs after the component is added to the DOM.
// It's the perfect place to fetch initial data.
onMounted(() => {
  fetchComposer()
})

const toggleActive = ref(false)
function handleToggle() {
  toggleActive.value = !toggleActive.value
}
</script>

<template>
  <div class="container">
    <SideBarbase :class="{ hide: toggleActive }"></SideBarbase>
    <div class="main-content">
      <NavBarbase @toggleActive="handleToggle"></NavBarbase>
      <Breadcrumb>Composer</Breadcrumb>
      <div class="container-fluid mb-2">
        <div v-if="loading">Loading composer details...</div>

        <div v-else-if="error" class="error">
          {{ error }}
        </div>
        <div v-else-if="composer" class="card card-custom">
          <div class="card-header bg-white border-0">
            <h1>{{ composer.name }}</h1>
            <div class="d-flex justify-content-between mb-2">
              <div class="d-flex">
                <RouterLink to="/composer-list">
                  <button type="button" class="btn btn-warning">close</button>
                </RouterLink>
                <div class="dropdown">
                  <button
                    class="btn btn-outline-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
              <div class="dropdown">
                <button
                  class="btn btn-outline-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  VIEW
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="card">
              <div class="detail-items row">
                <span class="text-muted">Name</span>
                <span>{{ composer.name }}</span>
                <hr />
                <span class="text-muted">Email</span>
                <span>{{ composer.email }}</span>
                <hr />
                <span class="text-muted">Phone Number</span>
                <span>{{ composer.phone }}</span>
                <hr />
                <span class="text-muted">Birth Date</span>
                <span>{{ composer.birth_date }}</span>
                <hr />
                <span class="text-muted">Gender</span>
                <span>Male</span>
                <hr />
                <span class="text-muted">Address</span>
                <span>{{ composer.address }}</span>
                <hr />
              </div>
            </div>
          </div>
          <div class="col-8">
            <div class="card card-custom">
              <div class="card-body">
                <ul class="nav nav-underline p-2">
                  <li class="nav-item">
                    <RouterLink to="/composer-detail">
                      <a class="nav-link active" aria-current="page" href="">SONG</a>
                    </RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/composer-attach">
                      <a class="nav-link" aria-current="page">ATTACHMENT AND NOTES</a>
                    </RouterLink>
                  </li>
                </ul>
                <div class="container-fluid p-0">
                  <div class="card-body p-1">
                    <div class="d-flex">
                      <button type="button" class="btn btn-outline-primary border-0">
                        Asset
                        <img src="/src/assets/x.svg" alt="" />
                      </button>
                      <div class="dropdown">
                        <button
                          class="btn btn-outline-primary dropdown-toggle border-0"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img src="/src/assets/three-dots.svg" alt="" />
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                    </div>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Title</th>
                          <th scope="col">Notes</th>
                          <th scope="col">Label</th>
                          <th scope="col">Artist</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in composer.songs" :key="item.id">
                          <td>{{ item.title }}</td>
                          <td></td>
                          <td>{{ item.label }}</td>
                          <td>{{ item.artist.name }}</td>
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

  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-3 p-lg-4">
          <div class="text-center mb-3">
            <h4 class="modal-title" id="staticBackdropLabel">Register User</h4>
          </div>
          <div class="p-lg-4 p-2">
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" />
              </div>
            </form>
          </div>
          <div class="justify-content-center text-center gap-2">
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Save</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
}

.border-header {
  padding: 15px;
  border-block-end: 1px solid white;
}

.table {
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

a {
  text-decoration: none;
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

.detail-items {
  margin: 15px;
}

.card {
  margin: 10px;
}
</style>
