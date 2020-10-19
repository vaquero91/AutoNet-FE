import Vue from 'vue';
import Router from 'vue-router';

// Components
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
      { path: '/', component: HomePage },
      { path: '/login', component: LandingPage },
  
      // otherwise redirect to home
      { path: '*', redirect: '/login' }
    ]
  });
  
  router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    if (authRequired && !loggedIn) {
      return next('/login');
    }
  
    next();
  })
  