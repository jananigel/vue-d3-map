import { createWebHistory } from 'vue-router';
import { createRouter } from 'vue-router'

const HomePage = () => import('@pages/Home.page.vue');
const LoginPage = () => import('@pages/LoginPage.vue');

const routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: '/home',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;