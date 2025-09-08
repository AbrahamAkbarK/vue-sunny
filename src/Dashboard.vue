<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import IconHead from './components/iconHead.vue'
import SideBarbase from './components/sideBarbase.vue'
import NavBarbase from './components/navBarbase.vue'
import SideBarTEST from './components/sideBarTEST.vue'
import LayoutDashboard from './LayoutDashboard.vue'
</script>

<template>
  <LayoutDashboard>
    <div class="card-header align-items-center bg-white">
      <div class="card-body d-flex p-0 justify-content-between flex-fill">
        <div class="d-flex align-items-center flex-wrap gap-2">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            class="btn btn-warning text-white fw-semibold"
          >
            + Register user
          </button>
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
              <button class="btn btn-sm border" type="button" id="button-addon2">
                <img src="/src/assets/search.svg" alt="" />
              </button>
            </div>
            <button class="btn btn-sm btn-light" type="submit">
              <img src="/src/assets/arrow-repeat.svg" alt="" />
            </button>
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
                      <th scope="col">
                        <span> </span>
                      </th>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Verified</th>
                      <th scope="col">License</th>
                      <th scope="col">Uploaded file</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="dropdown">
                          <button
                            class="btn btn-sm btn-light"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img src="/src/assets/three-dots.svg" alt="" />
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <button class="dropdown-item" type="button">Reset password</button>
                            </li>
                            <li>
                              <button class="dropdown-item" type="button">Assign License</button>
                            </li>
                            <li>
                              <button class="dropdown-item" type="button">Delete</button>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>1</td>
                      <td>
                        <div class="d-flex align-items-center gap-2">
                          <div class="lh-1">
                            <span class="avatar avatar-rounded">
                              <img src="/src/assets/emoji-kiss.svg" alt="" />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-1">
                            <span>BadRun</span>
                            <span class="text-muted">abarhamak@gmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="badge bg-success">Confirmed</span>
                      </td>
                      <td>
                        <span class="badge bg-danger">No license</span>
                      </td>
                      <td>
                        <div class="d-flex flex-column gap-1">
                          <span>2 files</span>
                          <span class="text-muted">100 B</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dropdown">
                          <button
                            class="btn btn-sm btn-light"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img src="/src/assets/three-dots.svg" alt="" />
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <button class="dropdown-item" type="button">Action</button>
                            </li>
                            <li>
                              <button class="dropdown-item" type="button">Another action</button>
                            </li>
                            <li>
                              <button class="dropdown-item" type="button">
                                Something else here
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>1</td>
                      <td>Otto</td>
                      <td>Verified</td>
                      <td>no License</td>
                      <td>No file</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="dropdown">
                          <button
                            class="btn btn-sm btn-light"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img src="/src/assets/three-dots.svg" alt="" />
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <button class="dropdown-item" type="button">Action</button>
                            </li>
                            <li>
                              <button class="dropdown-item" type="button">Another action</button>
                            </li>
                            <li>
                              <button class="dropdown-item" type="button">
                                Something else here
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>1</td>
                      <td>Otto</td>
                      <td>Verified</td>
                      <td>no License</td>
                      <td>No file</td>
                    </tr>
                  </tbody>
                </table>
                <!-- <table class="table table-striped table-bordered">
                            <thead>
                              <tr>
                                <th scope="col">
                                  <span> </span>
                                </th>
                                <th scope="col">
                                  <span>No.</span>
                                </th>
                                <th scope="col">
                                  <span>Name</span>
                                </th>
                                <th scope="col">
                                  <span>Verified</span>
                                </th>
                                <th scope="col">
                                  <span>License</span>
                                </th>
                                <th scope="col">
                                  <span>Uploaded file</span>
                                </th>
                              </tr>
                            </thead>
                          </table> -->
              </div>
              <div class="scroll-body">
                <!-- <table class="table table-striped table-bordered">
                            <tbody>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>Yes</td>
                                <td>Active</td>
                                <td>File.pdf</td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td>2</td>
                                <td>Jane Smith</td>
                                <td>No</td>
                                <td>Inactive</td>
                                <td>File.docx</td>
                              </tr>
                            </tbody>
                          </table> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutDashboard>
  <!-- <div class="wrapper">
    <SideBarbase :collapsed="sidebarCollapsed" :menu-items="menuItems" @toggle="toggleSidebar">
    </SideBarbase>
    <div class="main-content">
      <NavBarbase> </NavBarbase>
    </div>
  </div> -->
  <!-- <div class="d-flex">
   <aside class="sidebar" :class="{ collapsed: isCollapsed }">
    <div class="sidebar-header">
      <span class="logo"><i class="bi bi-brightness-high-fill"></i> SUNNY CRM</span>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-category">Admin</div>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#"><i class="bi bi-people-fill"></i> Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-receipt"></i> Billing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-patch-check-fill"></i> License</a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-flex justify-content-between align-items-center" href="#">
            <span><i class="bi bi-gear-fill"></i> Setup</span>
            <i class="bi bi-chevron-right"></i>
          </a>
        </li>
      </ul>
      <div class="nav-category">Main</div>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link d-flex justify-content-between align-items-center" href="#">
            <span><i class="bi bi-grid-1x2-fill"></i> Dashboard</span>
            <i class="bi bi-chevron-right"></i>
          </a>
        </li>
      </ul>
      <div class="nav-category">Master Data</div>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link d-flex justify-content-between align-items-center" href="#">
            <span><i class="bi bi-database-fill"></i> Master Data</span>
            <i class="bi bi-chevron-right"></i>
          </a>
        </li>
      </ul>
      <div class="nav-category">CRM Module</div>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link d-flex justify-content-between align-items-center" href="#">
            <span><i class="bi bi-bar-chart-fill"></i> Sales</span>
            <i class="bi bi-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
  </div> -->
  <!-- <div class="page">
    <div class="container">
       <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32" aria-hidden="true">
            <use xlink:href="#bootstrap" />
          </svg>
          <span class="fs-4">Simple header</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
          <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
          <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        </ul>
      </header> -->
  <!-- <sidebar>
        <div class="flex-shrink-0 p-3" style="width: 280px;margin-left:-30px;">
          <div class="sidebar-section bg-light">
            Admin
          </div>
          <div class="sidebar-title">
            <button class="btn rounded border-0">
              <i class="bi bi-people-fill"></i> Users
            </button>
          </div>
          <ul class="list-unstyled ps-0 bg-light">
            <li class="mb-1">
              <button
                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="true"
              >
                Home
              </button>
              <div class="collapse show" id="home-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >Overview</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >Updates</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >Reports</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button
                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Dashboard
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >Overview</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >Weekly</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >Monthly</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >Annually</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button
                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#orders-collapse"
                aria-expanded="false"
              >
                Orders
              </button>
              <div class="collapse" id="orders-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >New</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >Processed</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >Shipped</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >Returned</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <button
                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#account-collapse"
                aria-expanded="false"
              >
                Account
              </button>
              <div class="collapse" id="account-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >New...</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >Profile</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >Settings</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >Sign out</a
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </sidebar>
    </div>
  </div> -->
</template>
<!-- <style scoped>
.wrapper {
  display: flex;
  min-height: 100vh;
}
.main-content {
  flex: 1;
  background: white;
  min-width: 0;
}
.sidebar-section{
  padding: 0.5rem 1rem;
  font-size: 11px;
  text-transform: uppercase;
  color: #6c757d;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: opacity 0.3s;
  box-sizing: border-box;
}

.sidebar-title{
  padding: 0.5rem 1rem;
  font-size: 15px;
  text-transform: uppercase;
  color: black;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: opacity 0.3s;
  background: #f8f9fa;
}
</style>

<style scoped>
.container {
  max-width: 100%;
  margin: auto;
}
.sidebar {
  width: 250px;
  background-color: #ffffff;
  border-right: 1px solid #dee2e6;
  padding: 1rem;
  transition: transform 0.3s ease;
}

.sidebar.collapsed {
  transform: translateX(-100%);
  width: 0;
  padding: 1rem 0;
}

.sidebar-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.sidebar-header .logo {
  color: #ffc107;
  font-weight: 700;
  font-size: 1.5rem;
}

.sidebar-nav .nav-link {
  color: #495057;
  font-weight: 500;
  margin-bottom: 0.5rem;
  border-radius: 0.375rem;
}

.sidebar-nav .nav-link.active,
.sidebar-nav .nav-link:hover {
  background-color: #fff3cd;
  color: #856404;
}

.sidebar-nav .nav-link .bi {
  margin-right: 10px;
}

.sidebar-nav .nav-category {
  font-size: 0.8rem;
  color: #6c757d;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  margin-top: 1rem;
}

.header {
  background-color: #ffffff;
  border-bottom: 1px solid #dee2e6;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header .header-actions .nav-link {
  color: #6c757d;
}
.header .header-actions .nav-link:hover {
  color: #212529;
}
.header .header-actions .profile-pic {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
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
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
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
.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: var(--bs-tertiary-bg);
}

.scrollarea {
  overflow-y: auto;
}
</style> -->

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

.card-header {
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
