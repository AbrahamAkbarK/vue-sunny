<script setup>
import { onMounted, ref } from 'vue'
import SideBarbase from './components/sideBarbase.vue'
import NavBarbase from './components/navBarbase.vue'
import Breadcrumb from './components/breadcrumb.vue'
import ButtonBase from './components/buttonBase.vue'
import ButtonItems from './components/buttonItems.vue'
import api from './axios'

const toggleActive = ref(false)
function handleToggle() {
  toggleActive.value = !toggleActive.value
}

const songs = ref([])
const currentPage = ref(1)
const lastPage = ref(1)
const loading = ref(false)

const fetchSongs = async () => {
  try {
    const response = await api.get('/songs', { withCredentials: true })
    // Extract songs array from response.data.data
    if (Array.isArray(response.data.data)) {
      songs.value = response.data.data
      console.log('Fetched songs:', songs.value)
    } else {
      songs.value = []
      console.warn('Songs data is not an array:', response.data.data)
    }
  } catch (error) {
    console.error('Failed to fetch songs:', error)
  }
}

async function PageSongs(page = 1) {
  loading.value = true
  try {
    const response = await api.get(`/songs?page=${page}`, { withCredentials: true })
    const resData = response.data
    songs.value = resData.data // paginated songs array
    currentPage.value = resData.current_page
    lastPage.value = resData.last_page
  } catch (error) {
    console.error('Failed to fetch songs:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchSongs()
  PageSongs()
})
</script>

<template>
  <div class="container">
    <SideBarbase :class="{ hide: toggleActive }"></SideBarbase>
    <div class="main-content">
      <NavBarbase @toggleActive="handleToggle"></NavBarbase>
      <Breadcrumb>Asset</Breadcrumb>
      <div class="container-fluid mb-5">
        <div class="row">
          <div class="col-md-12">
            <div class="card custom-card border-0">
              <div class="card-header align-items-center bg-white border-0">
                <div class="card-body d-flex p-0 justify-content-between flex-fill">
                  <div class="d-flex align-items-center flex-wrap gap-2">
                    <div class="card-header bg-white border-0 p-1">
                      <h1 style="font-weight: 300">Asset</h1>
                      <div class="d-flex">
                        <button type="button" class="btn btn-warning">new</button>
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
                    </div>
                  </div>
                  <div class="d-flex align-items-center flex-wrap gap-2">
                    <form class="d-flex" role="search">
                      <div class="input-group input-group-sm">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                        <ButtonItems class="bg-white border">
                          <img src="/src/assets/search.svg" alt="" />
                        </ButtonItems>
                      </div>
                      <ButtonItems class="bg-white border">
                        <img src="/src/assets/arrow-repeat.svg" alt="" />
                      </ButtonItems>
                    </form>
                  </div>
                </div>
              </div>
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-3">
                    <div class="card-body">
                      <div class="collapsed">
                        <div
                          class="list-item btn"
                          data-bs-toggle="collapse"
                          data-bs-target="#home-collapse-2"
                          aria-expanded="true"
                        >
                          <img src="/src/assets/house.svg" alt="" class="icon" />
                          <span class="description">Favorite</span>
                        </div>
                        <div class="collapse" id="home-collapse-2">
                          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <div class="list-item">
                              <router-link to="/crm">
                                <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                                <span class="description">CRM</span>
                              </router-link>
                            </div>
                            <div class="list-item">
                              <router-link to="/sales">
                                <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                                <span class="description">Sales</span>
                              </router-link>
                            </div>
                          </ul>
                        </div>
                      </div>
                      <div class="collapsed">
                        <div
                          class="list-item btn"
                          data-bs-toggle="collapse"
                          data-bs-target="#home-collapse-1"
                          aria-expanded="true"
                        >
                          <img src="/src/assets/house.svg" alt="" class="icon" />
                          <span class="description">All</span>
                        </div>
                        <div class="collapse" id="home-collapse-1">
                          <div class="collapsed">
                            <div
                              class="list-item btn"
                              data-bs-toggle="collapse"
                              data-bs-target="#home-collapse-3"
                              aria-expanded="true"
                            >
                              <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                              <span class="description">Artist</span>
                            </div>
                            <div class="collapse" id="home-collapse-3">
                              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <div class="list-item">
                                  <router-link to="/crm">
                                    <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                                    <span class="description">CRM</span>
                                  </router-link>
                                </div>
                                <div class="list-item">
                                  <router-link to="/sales">
                                    <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                                    <span class="description">Sales</span>
                                  </router-link>
                                </div>
                              </ul>
                            </div>
                          </div>
                          <div class="collapsed">
                            <div
                              class="list-item btn"
                              data-bs-toggle="collapse"
                              data-bs-target="#home-collapse-4"
                              aria-expanded="true"
                            >
                              <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                              <span class="description">Artist</span>
                            </div>
                            <div class="collapse" id="home-collapse-4">
                              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <div class="list-item">
                                  <router-link to="/crm">
                                    <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                                    <span class="description">CRM</span>
                                  </router-link>
                                </div>
                                <div class="list-item">
                                  <router-link to="/sales">
                                    <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                                    <span class="description">Sales</span>
                                  </router-link>
                                </div>
                              </ul>
                            </div>
                          </div>
                          <div class="collapsed">
                            <div
                              class="list-item btn"
                              data-bs-toggle="collapse"
                              data-bs-target="#home-collapse-5"
                              aria-expanded="true"
                            >
                              <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                              <span class="description">Artist</span>
                            </div>
                            <div class="collapse" id="home-collapse-5">
                              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <div class="list-item">
                                  <router-link to="/crm">
                                    <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                                    <span class="description">CRM</span>
                                  </router-link>
                                </div>
                                <div class="list-item">
                                  <router-link to="/sales">
                                    <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                                    <span class="description">Sales</span>
                                  </router-link>
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-9">
                    <div class="card-body">
                      <div class="dropdown">
                        <button
                          class="btn btn-outine-secondary btn-sm dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Composer</th>
                            <th scope="col">Type of Contract</th>
                            <th scope="col">Label</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="song in songs" :key="song.id">
                            <td>
                              <RouterLink :to="`/asset-detail/${song.id}`">
                                {{ song.title }}
                              </RouterLink>
                            </td>
                            <td>
                              <RouterLink :to="`/artist-member/${song.artist.id}`">
                                {{ song.artist.name }}
                              </RouterLink>
                            </td>
                            <td>
                              <RouterLink :to="`/composer-detail/${song.composer.id}`">{{ song.composer.name }}</RouterLink>
                            </td>
                            <td>{{ song.royalty_contract }}</td>
                            <td>
                              <RouterLink to="/label-detail">{{ song.label }}</RouterLink>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div v-if="loading">Loading...</div>
                <div class="d-flex align-items-center">
                  <div id="user_table_info">Page {{ currentPage }} of {{ lastPage }}</div>
                  <div id="user_table_pagination" class="ms-auto">
                    <nav aria-label="Page navigation example">
                      <ul v-if="lastPage > 1" class="pagination justify-content-end">
                        <li :disabled="currentPage === 1" @click="PageSongs(currentPage - 1)" class="page-item">
                          <span  :disabled="currentPage === 1" @click="PageSongs(currentPage - 1)" class="page-link">Previous</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                          <span  :disabled="currentPage === lastPage" @click="PageSongs(currentPage + 1)" class="page-link">Next</span>
                        </li>
                      </ul>
                    </nav>
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

.description {
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
.icon {
  width: 15px;
  height: 15px;
  margin: 3px;
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

.icon-child {
  width: 10px;
  height: 10px;
  margin: 5px;
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
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-inline-end: 245px;
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
</style>
