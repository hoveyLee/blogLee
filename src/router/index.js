import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import("@/views/home/Home");
const Tabs = () => import("@/views/tabs/Tabs");
const Category = () => import("@/views/category/Category");
const Archive = () => import("@/views/archive/Archive");
const Message = () => import("@/views/message/Message");
const Friends = () => import("@/views/friends/Friends");
const About = () => import("@/views/about/About");

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/tabs",
    component: Tabs
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/archive",
    component: Archive
  },
  {
    path: "/message",
    component: Message
  },
  {
    path: "/friends",
    component: Friends
  },
  {
    path: "/about",
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
