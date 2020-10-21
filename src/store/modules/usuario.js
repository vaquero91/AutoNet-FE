import { handleResponse } from '../../tools';
import { router } from '../../router';


const state = {
    usuario: {
    nombre:"",
    email:"",
    password: "",
    token: ""
    },
    logedIn : false,
};
const getters = {
    getState: (state) => state.token,
};
const actions = { // llamadas al backend 
    async login({commit}, usuario){
        const requestOptions = {
            method: 'POST',
            'Access-Control-Allow-Origin':'http://localhost:8081/',
            'Access-Control-Allow-Methods': 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept':'application/json' },
            credentials: 'same-origin',
            mode: 'cors',
            dataType:'jsonp',
            body: JSON.stringify(usuario),
        };
    
        fetch(`http://localhost:8081/login`, requestOptions)
            .then(handleResponse)
                .then(user => {
                // login successful if there's a jwt token in the response
                if (user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    user.email = usuario.email;
                    localStorage.setItem('user', JSON.stringify(user));
                    commit('setUsuario',user);
                    router.push('/');
                }
            });
    },

    async newUser({ commit }, usuario){
        const requestOptions = {
            method: 'POST',
            'Access-Control-Allow-Origin':'http://localhost:8081/',
            'Access-Control-Allow-Methods': 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept':'application/json' },
            credentials: 'same-origin',
            mode: 'cors',
            dataType:'jsonp',
            body: JSON.stringify(usuario),
        };
        fetch('http://localhost:8081/nuevoUsuario', requestOptions).then(handleResponse)
            .then(usuario => {
                localStorage.setItem('user', JSON.stringify(usuario));
                commit('setUsuario',usuario);
                router.push('/');
            });
    },
};
const mutations = {
    setUsuario: (state, usuario) => {
        state.usuario = usuario;
        state.logedIn = true;
    },
    setNombre: (state, nombre) => state.nombre = nombre,
};

export default {
    state,
    getters,
    actions,
    mutations,
}