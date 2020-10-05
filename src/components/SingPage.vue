<template>
    <v-card class="container">
        <v-form class="SignBox" v-if="!seen">
            <div class = "titulo">
                <h2>Bienvenido !!</h2>
            </div>
            <v-text-field label="Nombre" solo />
            <v-text-field label="Contraseña" solo />
        </v-form>
        <v-form class="SignBox" v-if="seen">
            <div class = "titulo">
                <h2>Llena estos datos</h2>
            </div>
            <v-text-field label="Nombre" hint="Como te podemos llamar?" solo />
            <v-text-field label="Email" hint="Ejemplo = naruto@gmail.com" solo />
            <v-text-field label="Contraseña" hint="Minimo 8 caracteres" solo />
        </v-form>
        <div class = "btnBox">
            <v-btn class= "btn" color = "blue">Log In</v-btn>
            <v-btn class= "btn" @click="this.showForm">Sign Up</v-btn>
        </div>
    </v-card>
</template>

<script>
export default {
    name:'SingPage',
    data: function () {
        return {
            seen: false,
        }
    },
    methods: {
        showForm: function(){
            this.seen = (this.seen === false) ? true:false;
        }
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