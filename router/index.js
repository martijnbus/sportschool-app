import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../components/Profile.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Available lessons',
    name: 'Available lessons',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Available Lessons" */ '../components/Available lessons.vue')
  },
  {
  path: '/My lessons',
  name: 'My lessons',
  component: () => import(/* webpackChunkName: "Available Lessons" */ '../components/My lessons.vue')
  
},
{
  path: '/beschikbare tijden salsa',
  name: 'beschikbare tijden salsa',
  component: () => import(/* webpackChunkName: "Available Lessons" */ '../components/beschikbare tijden salsa.vue')
  
},
{
  path: '/beschikbare tijden HIT-Class.vue',
  name: 'beschikbare tijden HIT-Class.vue',
  component: () => import(/* webpackChunkName: "Available Lessons" */ '../components/beschikbare tijden HIT-Class.vue')
  
},
{
  path: '/beschikbare tijden Bodypump.vue',
  name: 'beschikbare tijden Bodypump',
  component: () => import(/* webpackChunkName: "Available Lessons" */ '../components/beschikbare tijden Bodypump.vue')
  
}

]

const router = new VueRouter({
  routes
})

export default router
