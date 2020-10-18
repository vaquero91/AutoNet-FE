import Vue from 'vue';
import Router from 'vue-router';
// Components

import verTweets from './components/verTweets';
import SignPage from './components/SingPage';
Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
      { path: '/', component: verTweets },
      { path: '/login', component: SignPage },
  
      // otherwise redirect to home
      { path: '*', redirect: '/' }
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