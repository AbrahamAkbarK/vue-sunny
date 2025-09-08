<script setup>
import { ref } from 'vue'
import Breadcrumb from './components/breadcrumb.vue'
import NavBarbase from './components/navBarbase.vue'
import SideBarbase from './components/sideBarbase.vue'
import StatistiChart from './components/statistiChart.vue'
import SalesChart from './components/salesChart.vue'
import DoughnutChart from './components/doughnutChart.vue'
import TestChart from './components/testChart.vue'
const toggleActive = ref(false)

function handleToggle() {
  toggleActive.value = !toggleActive.value
}
</script>

<template>
  <div class="container">
    <SideBarbase :class="{ hide: toggleActive }"></SideBarbase>
    <div class="main-content">
      <NavBarbase @toggleActive="handleToggle"> </NavBarbase>
      <Breadcrumb> CRM </Breadcrumb>
      <div class="container-fluid pb-5">
        <div class="row">
          <div class="col-xl-9">
            <div class="row">
              <div class="col-xl-5 col-md-2">
                <div class="row">
                  <div class="col-xl-6 col-md-6 mb-4">
                    <div
                      class="card card-custom border-0"
                      style="margin-block-end: unset; height: 100%"
                    >
                      <div class="card-body">
                        <span class="avatar avatar-rounded bg-primary-transparent">
                          <img class="" src="/src/assets/coin.svg" alt="" />
                        </span>
                        <div class="d-flex justify-content-between mb-2">
                          <div class="d-flex flex-column">
                            <h4 id="total_revenue_value" class="mb-0 mt-3 fw-semibold">Rp0,00</h4>
                            <span class="fw-12 text-muted fw-medium">Total Revenue</span>
                          </div>
                          <div class="d-flex flex-column justify-content-end">
                            <span id="total_revenue_change_title" class="text-muted fw-12 op-5"
                              >This Year</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-md-6 mb-4">
                    <div class="card card-custom border-0">
                      <div class="card-body">
                        <span class="avatar avatar-rounded bg-success-transparent">
                          <img src="/src/assets/people.svg" alt="" />
                        </span>
                        <div class="d-flex justify-content-between mb-2">
                          <div class="d-flex flex-column">
                            <h4 id="total_revenue_value" class="mb-0 mt-3 fw-semibold">0</h4>
                            <span class="fw-12 text-muted fw-medium">Total Customers</span>
                          </div>
                          <div class="d-flex flex-column justify-content-end">
                            <span id="total_revenue_change_title" class="text-muted fw-12 op-5"
                              >This Year</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-md-6 mb-4">
                    <div class="card card-custom border-0">
                      <div class="card-body">
                        <span class="avatar avatar-rounded bg-info-transparent">
                          <img src="/src/assets/file-text.svg" alt="" />
                        </span>
                        <div class="d-flex justify-content-between mb-2">
                          <div class="d-flex flex-column">
                            <h4 id="total_revenue_value" class="mb-0 mt-3 fw-semibold">0</h4>
                            <span class="fw-12 text-muted fw-medium">Total Opportunity</span>
                          </div>
                          <div class="d-flex flex-column justify-content-end">
                            <span id="total_revenue_change_title" class="text-muted fw-12 op-5"
                              >This Year</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-md-6 mb-4">
                    <div class="card card-custom border-0">
                      <div class="card-body">
                        <span class="avatar avatar-rounded bg-secondary-transparent">
                          <img src="/src/assets/file-text.svg" alt="" />
                        </span>
                        <div class="d-flex justify-content-between mb-2">
                          <div class="d-flex flex-column">
                            <h4 id="total_revenue_value" class="mb-0 mt-3 fw-semibold">0</h4>
                            <span class="fw-12 text-muted fw-medium">Total Leads Project</span>
                          </div>
                          <div class="d-flex flex-column justify-content-end">
                            <span id="total_revenue_change_title" class="text-muted fw-12 op-5"
                              >This Year</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="card custom-card overflow-hidden border-0">
                      <div class="card-header bg-white d-flex justify-content-between">
                        <div class="card-title mt-3">
                          <h6>Opportunity Overview</h6>
                        </div>
                        <button class="btn btn-wave btn-icon">
                          <img src="/src/assets/arrow-repeat.svg" alt="" />
                        </button>
                      </div>
                      <div class="card-body p-0">
                        <div class="px-4 py-3 border-bottom">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-item-center gap-2">
                              <h5 class="mb-0">0</h5>
                              <span class="d-block fs-11 text-muted">Opportunity</span>
                            </div>
                            <span class="fs-9 text-muted">This Year</span>
                          </div>
                        </div>
                        <table class="table text-nowrap">
                          <tbody>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center px-2">
                                  <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                      <span
                                        class="avatar avatar-md border border-primary border-opacity-25 avatar-rounded"
                                      >
                                        <span
                                          class="avatar avatar-md bg-primary-transparent avatar-rounded"
                                        >
                                          <img src="/src/assets/box-fill.svg" alt="" />
                                        </span>
                                      </span>
                                    </div>
                                    <div class="d-flex flex-column">
                                      <span class="fw-medium d-block">Active</span>
                                      <span class="d-block text-muted fs-12">0 Opportunity</span>
                                    </div>
                                  </div>
                                  <span class="d-flex flex-fill justify-content-end fw-medium"
                                    >Rp0,00</span
                                  >
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center px-2">
                                  <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                      <span
                                        class="avatar avatar-md border border-primary border-opacity-25 avatar-rounded"
                                      >
                                        <span
                                          class="avatar avatar-md bg-secondary-transparent avatar-rounded"
                                        >
                                          <img src="/src/assets/clipboard-data.svg" alt="" />
                                        </span>
                                      </span>
                                    </div>
                                    <div class="d-flex flex-column">
                                      <span class="fw-medium d-block">Pending</span>
                                      <span class="d-block text-muted fs-12">0 Opportunity</span>
                                    </div>
                                  </div>
                                  <span class="d-flex flex-fill justify-content-end fw-medium"
                                    >Rp0,00</span
                                  >
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center px-2">
                                  <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                      <span
                                        class="avatar avatar-md border border-primary border-opacity-25 avatar-rounded"
                                      >
                                        <span
                                          class="avatar avatar-md bg-danger-transparent avatar-rounded"
                                        >
                                          <img src="/src/assets/x-circle-fill.svg" alt="" />
                                        </span>
                                      </span>
                                    </div>
                                    <div class="d-flex flex-column">
                                      <span class="fw-medium d-block">Cancelled</span>
                                      <span class="d-block text-muted fs-12">0 Opportunity</span>
                                    </div>
                                  </div>
                                  <span class="d-flex flex-fill justify-content-end fw-medium"
                                    >Rp0,00</span
                                  >
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center px-2">
                                  <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                      <span
                                        class="avatar avatar-md border border-primary border-opacity-25 avatar-rounded"
                                      >
                                        <span
                                          class="avatar avatar-md bg-success-transparent avatar-rounded"
                                        >
                                          <img src="/src/assets/truck.svg" alt="" />
                                        </span>
                                      </span>
                                    </div>
                                    <div class="d-flex flex-column">
                                      <span class="fw-medium d-block">Closed Won</span>
                                      <span class="d-block text-muted fs-12">0 Opportunity</span>
                                    </div>
                                  </div>
                                  <span class="d-flex flex-fill justify-content-end fw-medium"
                                    >Rp0,00</span
                                  >
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-7">
                <div class="row">
                  <div class="col-xl-12 mb-4">
                    <StatistiChart></StatistiChart>
                  </div>
                  <div class="col-xl-6">
                    <div class="card custom-card border-0">
                      <div class="card-header bg-white d-flex justify-content-between">
                        <div class="card-title mt-3"><h5>Top Sales</h5></div>
                        <button class="btn btn-wave btn-icon">
                          <img src="/src/assets/arrow-repeat.svg" alt="" />
                        </button>
                      </div>
                      <div class="card-body p-0">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">No data Available in table</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="card custom-card border-0">
                      <div class="card-header bg-white d-flex justify-content-between">
                        <div class="card-title mt-3"><h5>Top Sales</h5></div>
                        <button class="btn btn-wave btn-icon">
                          <img src="/src/assets/arrow-repeat.svg" alt="" />
                        </button>
                      </div>
                      <div class="card-body p-0">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">No data Available in table</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="row">
              <div class="col-xl-12 mb-4">
                <TestChart></TestChart>
                <!-- <div class="card custom-card">
                  <div class="card-header d-flex justify-content-between bg-white">
                    <h5 class="card-title mt-1">Sales By Source</h5>
                    <button class="btn btn-wave btn-icon">
                      <img src="/src/assets/arrow-repeat.svg" alt="">
                    </button>
                  </div>
                  <div class="card-body justify-content-center align-items-center p-4">
                    <DoughnutChart></DoughnutChart>
                  </div>
                </div> -->
              </div>
              <div class="col-xl-12">
                <div class="card custom-card border-0">
                  <div class="card-header bg-white d-flex justify-content-between">
                    <div class="card-title mt-3"><h5>Recent Activity</h5></div>
                    <button class="btn btn-wave btn-icon">
                      <img src="/src/assets/arrow-repeat.svg" alt="" />
                    </button>
                  </div>
                  <div class="card-body p-0">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">No data Available in table</li>
                    </ul>
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

.bg-primary-transparent {
  color: #f7c143;
  background-color: #f7c1431a;
}

.bg-success-transparent {
  background-color: #85cc411a;
  color: #85cc41;
}

.bg-info-transparent {
  background-color: #28c8eb1a;
  color: #28c8eb;
}

.bg-secondary-transparent {
  background-color: #7961f51a;
  color: #7961f5;
}

.bg-danger-transparent {
  color: #fa4b42;
  background-color: #fa4b421a;
}

.avatar {
  position: relative;
  height: 2.625rem;
  width: 2.625rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  color: #fff;
  font-weight: 500;
}

.avatar.avatar-rounded {
  border-radius: 50%;
}
</style>
