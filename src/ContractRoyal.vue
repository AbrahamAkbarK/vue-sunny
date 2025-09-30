<script setup>
import { ref } from 'vue'
import SideBarbase from './components/sideBarbase.vue'
import NavBarbase from './components/navBarbase.vue'
import Breadcrumb from './components/breadcrumb.vue'
import ButtonBase from './components/buttonBase.vue'
import ButtonItems from './components/buttonItems.vue'
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
      <Breadcrumb>Asset</Breadcrumb>
      <div class="container-fluid mb-2">
        <div class="card card-custom">
          <div class="card-header bg-white border-0">
            <h1>201</h1>
            <div class="d-flex justify-content-between mb-2">
              <div class="d-flex">
                <RouterLink to="/asset-contract">
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
        <div class="card">
          <div class="bg-white p-4 p-md-5 rounded-3">
            <div class="row g-4">
              <!-- Left Column -->
              <div class="col-md-6">
                <div class="mb-1 border-bottom pb-1">
                  <div class="row align-items-center">
                    <label for="title" class="col-sm-3 col-form-label text-muted"
                      >Number <span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        id="title"
                        value="Number.Contract"
                        class="form-control-plaintext"
                        readonly
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-1 border-bottom pb-1">
                  <div class="row align-items-center">
                    <label for="artist" class="col-sm-3 col-form-label text-primary">Type</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        id="artist"
                        value="Contract"
                        class="form-control-plaintext"
                        readonly
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-1 border-bottom pb-1">
                  <div class="row align-items-center">
                    <label for="genre" class="col-sm-3 col-form-label text-muted">Start date</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        id="genre"
                        value="10/10/2022"
                        class="form-control-plaintext fw-bold"
                        readonly
                      />
                    </div>
                  </div>
                </div>

              </div>

              <!-- Right Column -->
              <div class="col-md-6">
                <div class="mb-1 border-bottom pb-1">
                  <div class="row align-items-center">
                    <label for="album" class="col-sm-3 col-form-label text-muted">Amount</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        id="album"
                        value="3,123,21"
                        class="form-control-plaintext"
                        readonly
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-1 border-bottom pb-1">
                  <div class="row align-items-center">
                    <label for="composer" class="col-sm-3 col-form-label text-primary"
                      >Status</label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        id="composer"
                        value="songData.composer"
                        class="form-control-plaintext"
                        readonly
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-1 border-bottom pb-1">
                  <div class="row align-items-center">
                    <label for="label" class="col-sm-3 col-form-label text-primary">End date</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        id="label"
                        value="songData.label"
                        class="form-control-plaintext"
                        readonly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <ul class="nav nav-underline p-3">
            <li class="nav-item">
              <RouterLink to="/contract-detail">
                <a class="nav-link" aria-current="page" href="">CONTRACT DETAIL</a>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contract-royalty">
                <a class="nav-link active" aria-current="page">ROYALTY</a>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contract-approval">
                <a class="nav-link" aria-current="page" href="">APPROVALS</a>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contract-attach">
                <a class="nav-link" aria-current="page">ATTACHMENT AND NOTES</a>
              </RouterLink>
            </li>
          </ul>
          <div class="container-fluid">
            <div class="card-body">
              <button type="button" class="btn btn-outline-primary">Document +</button>
              <div class="bg-white p-4 p-md-5 rounded-3">
                <div class="row g-4">
                  <!-- Left Column -->
                  <div class="col-md-6">
                    <div class="mb-2 border-bottom pb-2">
                      <div class="row align-items-center">
                        <label for="title" class="col-sm-3 col-form-label text-muted"
                          >Apple Music</label
                        >
                        <div class="col-sm-9">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-2 border-bottom pb-2">
                      <div class="row align-items-center">
                        <label for="artist" class="col-sm-3 col-form-label text-muted"
                          >Spotify</label
                        >
                        <div class="col-sm-9">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-2 border-bottom pb-2">
                      <div class="row align-items-center">
                        <label for="genre" class="col-sm-3 col-form-label text-muted">Tiktok</label>
                        <div class="col-sm-9">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-2 border-bottom pb-2">
                      <div class="row align-items-center">
                        <label for="date-expired" class="col-sm-3 col-form-label text-muted"
                          >Youtube Music</label
                        >
                        <div class="col-sm-9">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-2 border-bottom pb-2">
                      <div class="row align-items-center">
                        <label for="date-expired" class="col-sm-3 col-form-label text-muted"
                          >IG/FB</label
                        >
                        <div class="col-sm-9">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Right Column -->
                  <div class="col-md-6">
                    <div class="mb-4 border-bottom pb-2">
                      <div class="row align-items-center">
                        <label for="album" class="col-sm-3 col-form-label text-muted"
                          >Langit Musik</label
                        >
                        <div class="col-sm-9">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4 border-bottom pb-2">
                      <div class="row align-items-center">
                        <label for="composer" class="col-sm-3 col-form-label text-muted"
                          >Link Fire</label
                        >
                        <div class="col-sm-9">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4 border-bottom pb-2">
                      <div class="row align-items-center">
                        <label for="label" class="col-sm-3 col-form-label text-muted">Trebel</label>
                        <div class="col-sm-9">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4 border-bottom pb-2">
                      <div class="row align-items-center">
                        <label for="master" class="col-sm-3 col-form-label text-muted"
                          >Youtube Music Video</label
                        >
                        <div class="col-sm-9">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <button type="button" class="btn btn-outline-primary">Document +</button>
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
              <table class="table">
                <thead>
                  <tr>
                    <td scope="col">Number</td>
                    <td scope="col">Type</td>
                    <td scope="col">Date</td>
                    <td scope="col">Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <RouterLink>Apple</RouterLink>
                    </td>
                    <td>Contract</td>
                    <td>12/12/2020</td>
                    <td>Active</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex">
                <button type="button" class="btn btn-outline-primary">Royalty Fee +</button>
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
              <table class="table">
                <thead>
                  <tr>
                    <td scope="col">Month</td>
                    <td scope="col">Year</td>
                    <td scope="col">Amount</td>
                    <td scope="col">Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                        November
                    </td>
                    <td>2024</td>
                    <td>50,000,000</td>
                    <td>Paid</td>
                  </tr>
                  <tr>
                    <td>
                        December
                    </td>
                    <td>2024</td>
                    <td>150,000,000</td>
                    <td>Paid</td>
                  </tr>
                </tbody>
              </table>
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
