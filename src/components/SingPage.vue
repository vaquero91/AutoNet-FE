<template>
    <v-card class="container">
        <v-form class="SignBox" v-if="!seen">
            <div class = "titulo">
                <h2>Bienvenido !!</h2>
            </div>
            <v-text-field v-model="usuario.email" label="Email" solo />
            <v-text-field v-model="usuario.password" label="Contraseña" solo />
        </v-form>
        <v-form class="SignBox" v-if="seen">
            <div class = "titulo">
                <h2>Llena estos datos</h2>
            </div>
            <v-text-field v-model="usuario.nombre" label="Nombre" hint="Como te podemos llamar?" solo />
            <v-text-field v-model="usuario.email" label="Email" hint="Ejemplo = naruto@gmail.com" solo />
            <v-text-field v-model="usuario.password" label="Contraseña" hint="Minimo 8 caracteres" solo />
        </v-form>
        <div class = "btnBox">
            <v-btn class= "btn" color = "blue" @click="onLogIn" v-if="!seen">Log In</v-btn>
            <v-btn class= "btn" @click="this.showForm" v-if="!seen">Sign Up</v-btn>
            <v-btn class= "btn" @click="this.onSignUp" v-if="seen">Crear</v-btn>
        </div>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name:'SingPage',
    computed: mapGetters(['getState']),
    data: function () {
        return {
            seen: false,
            usuario: {
                "email": "",
                "password": "",
                "nombre": ""
            }
        }
    },
    methods: {
        ...mapActions([ 'newUser', 'login']),
        showForm: function(){
            this.seen = (this.seen === false) ? true:false;
        },
        onLogIn(){
            this.login(this.usuario)
        },
        onSignUp(){ // TODO: agregar validacion que todos los campos esten llenados
            this.newUser(this.usuario);
        },
    }
}
</script>

<style scoped>
.btn{
    width: 30%;
    margin-bottom: 10px;
}
.btnBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.container{
    width: 25%;
    height: 45%;
    align-content: space-around;
}
.SignBox{
    display: flex;
    flex-direction: column;
}
.titulo{
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}
</style>