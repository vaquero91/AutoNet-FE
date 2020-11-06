import { handleResponse,authHeader } from '../../tools';
let user = JSON.parse(localStorage.getItem('user'));

const state = {
    cuentas: [
        
    ]
};
const getters = {
    allCuentas: (state) => state.cuentas
};
const actions = { // Llamadas al backend
    async callCuentas({ commit }, id) {
        const requestOptions = {
            method: 'GET',
            'Access-Control-Allow-Origin':'http://localhost:8081/',
            'Access-Control-Allow-Methods': 'GET',
            // headers: { 'Content-Type': 'application/json', 'Accept':'application/json', authHeader() },
            headers: authHeader(),
            credentials: 'same-origin',
            mode: 'cors',
            dataType:'jsonp',
        };
        fetch('http://localhost:8081/CuentasUsuario?usuario='+id, requestOptions).then(handleResponse)
        .then(cuentas => {
            commit('setCuentas',cuentas);
        });
    },
    async agregarCuenta({commit}, cuenta){
        const nuevaCuenta = cuenta;

        const requestOptions = {
            method: 'POST',
            'Access-Control-Allow-Origin':'http://localhost:8081/',
            'Access-Control-Allow-Methods': 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept':'application/json', 'Authorization': user.token },
            credentials: 'same-origin',
            mode: 'cors',
            dataType:'jsonp',
            body: JSON.stringify(cuenta),

        };
        fetch('http://localhost:8081/nuevaCuenta', requestOptions).then(commit('addCuenta',nuevaCuenta));
    }
    // TODO: agregar llamada Delete Cuenta
};
const mutations = {
    setCuentas: (state, cuentas) =>  state.cuentas = cuentas,
    addCuenta: (state, cuenta) => state.cuentas.push(cuenta),
    
};

export default {
    state,
    getters,
    actions,
    mutations,
}