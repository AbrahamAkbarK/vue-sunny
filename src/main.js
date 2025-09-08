import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from './loginForm.vue'
import Dashboard from './Dashboard.vue'
import ForgotPassword from './forgotPassword.vue'
import SignUpBase from './signUpBase.vue'
import Billing from './Billing.vue'
import Profile from './Profile.vue'
import License from './license.vue'
import SupportLine from './SupportLine.vue'
import LayoutDashboard from './LayoutDashboard.vue'
import User from './User.vue'
import CRM from './CRM.vue'
import Sales from './Sales.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name:'Login', component: LoginForm},
    {path: '/signup', name:'SignUp', component: SignUpBase},
    {path: '/dashboard', name:'Dashboard', component: User},
    {path: '/forgot-password', name:'ForgotPassword', component: ForgotPassword},
    {path: '/billing', name:'Billing', component:Billing},
    {path: '/profile', name:'Profile', component:Profile},
    {path: '/license', name:'License', component:License},
    {path: '/support-line', name:'Support Line', component:SupportLine},
    {path: '/crm', name:'CRM', component:CRM},
    {path: '/sales', name:'Sales', component:Sales}
  ]
})
createApp(App).use(router).mount('#app')
