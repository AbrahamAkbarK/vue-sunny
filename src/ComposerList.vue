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

const composers = ref([]);
const loading = ref(false);
const error = ref('');
const currentPage = ref(1);



async function fetchComposers(page = 1) {
  try {
    loading.value = true;
    error.value = '';

    // Axios params object (simpler than URLSearchParams)
    const params = {
      page: page,
    };

    const response = await api.get('/composers', {  // BaseURL from main.js if set
      params: params,
      withCredentials: true,  // For auth/cookies (if not global)
    });

    // Axios auto-parses JSON; access response.data
    const data = response.data;

    // Validate: Ensure data is array of objects (handles "not number/array" issues)
    if (!Array.isArray(data.data)) {
      throw new Error('Invalid response: Expected array of composers');
    }
    composers.value = data.data;
    // Initial sort and filter
    console.log('Composers Loaded via Axios:', composers.value.length, 'items');  // Debug
  } catch (err) {
    // Axios error handling: Check if it's an HTTP error or network
    if (err.response) {
      // Server responded with error status
      console.error('Axios HTTP Error:', err.response.status, err.response.data);
      error.value = `API Error: ${err.response.status} - ${err.response.statusText}`;
    } else if (err.request) {
      // Network error (no response)
      console.error('Axios Network Error:', err.request);
      error.value = 'Network error: Unable to reach server';
    } else {
      // Other error (e.g., request setup)
      console.error('Axios Error:', err.message);
      error.value = err.message || 'Failed to fetch composers';
    }

    composers.value = [];
  } finally {
    loading.value = false;
  }
}

onMounted(()=> {
  fetchComposers();
})

</script>

<template>
  <div class="container">
    <SideBarbase :class="{ hide: toggleActive }"></SideBarbase>
    <div class="main-content">
      <NavBarbase @toggleActive="handleToggle"></NavBarbase>
      <Breadcrumb>Composer</Breadcrumb>
      <div class="container-fluid mb-2">
        <div class="row">
          <div class="col-md-12">
            <div class="card custom-card border-0">
              <div class="card-header align-items-center bg-white border-0">
                <div class="card-body d-flex p-0 justify-content-between flex-fill">
                  <div class="d-flex align-items-center flex-wrap gap-2">
                    <div class="card-header bg-white border-0 p-1">
                      <h1 style="font-weight: 300;">Composer</h1>
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
                <div class="container-fluid">
                  <div class="layout-row">
                    <div class="layout-cell">
                      <div class="scroll">
                        <div class="scroll-head" style="position: relative">
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Birth Date</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Address</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="composer in composers" :key="composer.id">
                                <td>
                                  <RouterLink :to="`/composer-detail/${composer.id}`">
                                    {{ composer.name }}
                                  </RouterLink>
                                </td>
                                <td>
                                  {{ composer.birth_date.substring(0,10)}}
                                </td>
                                <td>
                                  {{ composer.email }}
                                </td>
                                <td>
                                  {{ composer.phone }}
                                </td>
                                <td>{{ composer.address }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="d-flex align-items-center">
                  <div id="user_table_info">Showing 1 to 1 of 1 entries</div>
                  <div id="user_table_pagination" class="ms-auto">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                          <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                          <a class="page-link" href="#">Next</a>
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
