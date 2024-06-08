import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import AddRestaurant from '../views/AddRestaurant.vue'
import UpdateRestaurnt from '../views/UpdateRestaurnt.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/addrest',
      name: 'addrest',
      component: AddRestaurant
    },
    {
      path: '/update/:id',
      name: 'update',
      component: UpdateRestaurnt,

    }
  ]
})

export default router
