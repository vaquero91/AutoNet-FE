import Vuex from 'vuex';
import Vue from 'vue';
import tweets from './modules/tweets';
import usuario from './modules/usuario';
import axios from 'axios';

Vue.use(Vuex, axios);

export default new Vuex.Store({
    modules: {
        tweets,
        usuario,
    }
});