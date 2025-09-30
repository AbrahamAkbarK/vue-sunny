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
import ArtistDetail from './ArtistDetail.vue'
import ArtistComm from './ArtistComm.vue'
import ArtistSong from './ArtistSong.vue'
import ArtistAttach from './ArtistAttach.vue'
import ComposerList from './ComposerList.vue'
import ComposerDetail from './ComposerDetail.vue'
import ComposerAttach from './ComposerAttach.vue'
import AssetList from './AssetList.vue'
import AssetDetail from './AssetDetail.vue'
import AssetLink from './AssetLink.vue'
import AssetContract from './AssetContract.vue'
import AssetAttach from './AssetAttach.vue'
import ContractDetail from './ContractDetail.vue'
import ContractRoyal from './ContractRoyal.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name:'Login', component: LoginForm},
    {path: '/signup', name:'SignUp', component: SignUpBase},
    {path: '/dashboard', name:'Dashboard', component: User},
    {path: '/forgot-password', name:'ForgotPassword', component: ForgotPassword},
    {path: '/billing', name:'Billing', component:Billing},
    {path: '/profile', name:'Profile', component:Profile},
    {path: '/artist-list', name:'ArtistList', component:License},
    {path: '/support-line', name:'Support Line', component:SupportLine},
    {path: '/crm', name:'CRM', component:CRM},
    {path: '/sales', name:'Sales', component:Sales},
    {path: '/artist-member/:id', name:'Artist-Member', component: ArtistDetail, props: (route) => ({ id: parseInt(route.params.id, 10) }),},
    {path: '/artist-comm/:id', name:'Artist-Comm', component:ArtistComm},
    {path: '/artist-song/:id', name:'Artist-Song', component:ArtistSong},
    {path: '/artist-attach/:id', name:'Artist-Attach', component:ArtistAttach},
    {path: '/composer-list', name:'Composer-List', component:ComposerList},
    {path: '/composer-detail/:id', name:'Composer-Detail', component:ComposerDetail,props: (route) => ({ id: parseInt(route.params.id, 10) }),},
    {path: '/composer-attach/:id', name:'Composer-Attach', component:ComposerAttach},
    {path: '/asset-list', name:'Asset-List', component:AssetList},
    {path: '/asset-detail/:id', name:'Asset-Detail', component:AssetDetail,props: (route) => ({ id: parseInt(route.params.id, 10) }),},
    {path: '/asset-link/:id', name:'Asset-Link', component:AssetLink},
    {path: '/asset-contract/:id', name:'Asset-Contract', component:AssetContract},
    {path: '/asset-attach/:id', name:'Asset-Attach', component:AssetAttach},
    {path: '/contract-detail', name:'Cotract-Detail', component:ContractDetail},
    {path: '/contract-royalty', name:'Contract-Royalty', component:ContractRoyal}
  ]
})
createApp(App).use(router).mount('#app')
