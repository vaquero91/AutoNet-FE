import axios from 'axios';
import { handleResponse } from '../../tools';



const state = {
    nombre:"",
    email:"",
    password: "",
    token: ""
};
const getters = {
    getState: (state) => state.token,
};
const actions = { // llamadas al backend 
 // TODO: aprender a usar axios
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
                    console.log(user);
                    commit('setUsuario',user);
                }
            });
    },
    async newUser({ commit }, usuario){
        console.log(usuario);
        const response = await axios.post('http://localhost:8081/nuevoUsuario', { usuario });
        console.log(await response.data);
        if(await response.data === 'Success'){
            commit('setNombre', usuario.nombre);
        } else console.log('Error');
    },
};
const mutations = {
    setUsuario: (state, usuario) => state = usuario,
    setNombre: (state, nombre) => state.nombre = nombre,
};

export default {
    state,
    getters,
    actions,
    mutations,
}