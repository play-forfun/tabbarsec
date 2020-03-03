import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../components/tabbar/Home')
const Category = () => import('../components/tabbar/Category')
const Shopcart = () => import('../components/tabbar/Shopcart')
const Profile = () => import('../components/tabbar/Profile')

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/shopcart',
    component:Shopcart
  },
  {
    path: '/profile',
    component:Profile
  },
]

const router = new VueRouter(
    {
      routes
    }
)

export default router