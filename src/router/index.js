import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import questions from '../views/questions.vue'
import score from '../views/score.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/questions',
    name: 'questions',
    component: questions
  },
  {
    path: '/score',
    name: 'score',
    component: score
  }
]

const router = new VueRouter({
  routes
})

export default router
