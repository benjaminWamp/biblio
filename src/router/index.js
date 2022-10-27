import ViewDetailVue from '@/views/ViewDetail.vue';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Actors from '@/views/ActorsDetail.vue'
import  Search  from '@/views/MovieSearched.vue';


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: ViewDetailVue,
    },
  {
    path:"/actors",
    name:"actors",
    component: Actors,
  },
  {
    path:"/search",
    name: "search",
    component: Search,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
