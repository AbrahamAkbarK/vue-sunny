<script setup>
import { ref } from 'vue'
import Breadcrumb from './components/breadcrumb.vue';
import CardFooter from './components/cardFooter.vue';
import modalComp from './components/modalComp.vue';
const toggleActive = ref(false)
</script>

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
            <span class="menu-btn"></span>
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
      <Breadcrumb>
        Users
      </Breadcrumb>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card custom-card border-0">
              <slot></slot>
              <CardFooter></CardFooter>
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
