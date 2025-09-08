<script setup>
import { ref } from 'vue'
const toggleActive = ref(false)
</script>

<!-- <template>
  <aside>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light" style="width: 280px">
      <div class="sidebar-header">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none"
        >
          <img
            src="https://sunny.co.id/dev/images/sunnnylogo.png"
            alt="logo"
            width="150"
            height="32"
          />
          <span class="fs-4"></span>
        </a>
      </div>

      <hr />
      <div class="sidebar-content">
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="sidebar-category">
          <span>
            Admin
          </span>
        </li>
        <li class="sidebar-item">
          <a href="#" class="nav-link active" aria-current="page">
            <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true">
              <use xlink:href="#home" />
            </svg>
            Users
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-black hover:bg-yellow-100">
            <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true">
              <use xlink:href="#speedometer2" />
            </svg>
            Billing
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-black">
            <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true">
              <use xlink:href="#table" />
            </svg>
            Lincense
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-black">
            <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true">
              <use xlink:href="#grid" />
            </svg>
            Setup
          </a>
        </li>
      </ul>
      </div>
      <hr />
    </div>
  </aside>
</template> -->

<!-- <style scoped>
.sidebar-category{
  padding: 0.5rem 1rem;
  font-size: 11px;
  text-transform: uppercase;
  color: #6c757d;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: opacity 0.3s;
  box-sizing: border-box;
}
.sidebar-conten{
  hover {
    background-color: yellow;
  }
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

<template>
  <div class="container">
    <div :class="['sidebar', { hide: toggleActive }]">
      <div class="header">
        <div class="list-item">
          <a href="">
            <img
              src="https://dev.sunny.co.id/build/assets/sunny_logo_black_no_bg-CLHsmPE_.png"
              alt="logo"
              class="logo"
            />
          </a>
        </div>
      </div>
      <div class="main">
        <hr />
        <div class="category">
          <span> admin </span>
        </div>
        <div class="list-item btn">
          <router-link to="/dashboard" class="link">
            <img src="/src/assets/person.svg" alt="" class="icon" />
            <span class="description">Users</span>
          </router-link>
        </div>
        <div class="list-item btn">
          <router-link to="/billing" class="link">
            <img src="/src/assets/clipboard-data.svg" alt="" class="icon" />
            <span class="description">Billing</span>
          </router-link>
        </div>
        <div class="list-item btn">
          <router-link to="/license" class="link">
            <img src="/src/assets/file-earmark-text.svg" alt="" class="icon" />
            <span class="description">License</span>
          </router-link>
        </div>
        <div class="">
          <div
            class="list-item btn"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="true"
          >
            <img src="/src/assets/nut.svg" alt="" class="icon" />
            <span class="description">Setup</span>
            <i class="point-icon">::before</i>
          </div>
          <!-- <button
            class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="true"
          >
            Setup
          </button> -->
          <div class="collapse" id="home-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <div class="list-item">
                <router-link to="/support-line">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Support line</span>
                </router-link>
              </div>
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Number code</span>
                </a>
              </div>
            </ul>
          </div>
        </div>
        <div class="category">
          <span> Main </span>
        </div>
        <div class="collapsed">
          <div
            class="list-item btn"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse-2"
            aria-expanded="true"
          >
            <img src="/src/assets/house.svg" alt="" class="icon" />
            <span class="description">Dashboard</span>
            <i class="point-icon">::before</i>
          </div>
          <!-- <button
            class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="true"
          >
            Setup
          </button> -->
          <div class="collapse" id="home-collapse-2">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">CRM</span>
                </a>
              </div>
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Sales</span>
                </a>
              </div>
            </ul>
          </div>
        </div>
        <div class="category">
          <span> Master Data </span>
        </div>
        <div class="collapsed">
          <div
            class="list-item btn"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse-3"
            aria-expanded="true"
          >
            <img src="/src/assets/file-lock.svg" alt="" class="icon" />
            <span class="description">Master Data</span>
            <i class="point-icon">::before</i>
          </div>
          <div class="collapse" id="home-collapse-3">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Account</span>
                </a>
              </div>
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Contact</span>
                </a>
              </div>
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Knowledge Base</span>
                </a>
              </div>
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Document</span>
                </a>
              </div>
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Product</span>
                </a>
              </div>
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Activities</span>
                </a>
              </div>
            </ul>
          </div>
        </div>
        <div class="category">
          <span> CRM Module </span>
        </div>
        <div class="collapsed">
          <div
            class="list-item btn"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse-4"
            aria-expanded="true"
          >
            <img src="/src/assets/cart-dash.svg" alt="" class="icon" />
            <span class="description">Sales</span>
            <i class="point-icon">::before</i>
          </div>
          <div class="collapse" id="home-collapse-4">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Leads</span>
                </a>
              </div>
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Opportunity</span>
                </a>
              </div>
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Order</span>
                </a>
              </div>
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Contact</span>
                </a>
              </div>
              <div class="list-item">
                <a href="">
                  <img src="/src/assets/circle.svg" alt="" class="icon-child" />
                  <span class="description">Invoice</span>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content">
      <nav class="navbar bg-white">
        <div class="navbar-left">
          <button class="btn btn-toggle" @click="toggleActive = !toggleActive">
            <span :class="['menu-btn', { hide: toggleActive }]"></span>
          </button>
        </div>
        <div class="navbar-right d-flex gap-2">
          <div class="dropdown">
            <button
              class="btn btn-sm btn-light"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="/src/assets/translate.svg" alt="" />
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-end">
              <li>
                <button class="dropdown-item" type="button">English</button>
              </li>
              <li>
                <button class="dropdown-item" type="button">Bahasa</button>
              </li>
            </ul>
          </div>
          <button class="btn btn-sm btn-light" type="button">
            <img src="/src/assets/brightness-high.svg" alt="" />
          </button>
          <div class="dropdown">
            <button
              class="btn btn-sm btn-light"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="/src/assets/bell.svg" alt="" />
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-end">
              <div class="main-header-dropdown">
                <div class="p-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <p class="fs-14 fw-medium m-0">Notification</p>
                    <div class="d-flex align-items-center gap-1">
                      <span class="badge bg-secondary text-fixed-white">0 Unread</span>
                      <button class="btn">
                        <img src="/src/assets/bootstrap-reboot.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="dropdown-divider"></div>
                <div class="p-5">
                  <div class="text-center">
                    <span class="avatar avatar-xl avatar-rounded"></span>
                    <h5 class="fw-medium mt-3">No New Notification</h5>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <button class="btn btn-sm btn-light" type="button">
            <img src="/src/assets/fullscreen.svg" alt="" />
          </button>
          <div class="dropdown">
            <button
              class="btn btn-sm btn-light"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="/src/assets/emoji-smile-upside-down.svg" alt="" />
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-end">
              <li>
                <div class="dropdown-item text-center border-bottom">
                  <span class="fw-medium">Abraham akbar K</span>
                  <span class="d-block fs-11 text-muted">Admin</span>
                </div>
              </li>
              <li>
                <router-link to="/profile" class="dropdown-item">Profile</router-link>
              </li>
              <li>
                <router-link to="/" class="dropdown-item">Logout</router-link>
              </li>
            </ul>
          </div>
          <button
            class="btn btn-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <img src="/src/assets/sliders.svg" alt="" />
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">...</div>
          </div>
        </div>
      </nav>
      <nav class="breadcrumb-nav">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#" class="text-warning text-decoration-none">Admin</a>
          </li>
          <li class="breadcrumb-item active">User</li>
        </ol>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card custom-card border-0">
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
                                        <button class="dropdown-item" type="button">
                                          Reset password
                                        </button>
                                      </li>
                                      <li>
                                        <button class="dropdown-item" type="button">
                                          Assign License
                                        </button>
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
                                        <button class="dropdown-item" type="button">
                                          Another action
                                        </button>
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
                                        <button class="dropdown-item" type="button">
                                          Another action
                                        </button>
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
