<template>
  <v-card>
    <v-dialog v-model="dialog">
        <v-card>
            <v-form >
                <v-text-field v-model="nuevaCuenta.username" label="Usuario" hint="@Luffy_OP" solo />
                <span class="form">
                    <div>
                    Red Social
                    <v-radio-group row>
                        <v-radio label="Twitter" />
                        <v-radio disabled label="Instagram" />
                        <v-radio disabled label="Facebook" />
                        <v-radio disabled label="TikTok" />
                    </v-radio-group>
                    </div>
                    <v-btn @click="this.createAccount" color = "blue"> Crear </v-btn>
                </span>
            </v-form>
        </v-card>
    </v-dialog>
    <!-- -->
    <v-tabs
      background-color="blue lighten-2"
      dark
    >
      <v-tab :key="index" v-for="(cuenta, index) in allCuentas">
        {{ cuenta.username }}
      </v-tab>
      <v-btn  text
        @click="showNewAccount"> + </v-btn>
    </v-tabs>
    <CuentaComp />
  </v-card>
</template>

<script>
import CuentaComp from './CuentaComp';
import { mapGetters, mapActions } from "vuex";

export default {
    computed: mapGetters(['allCuentas']),
    components: {
        CuentaComp
    },
    name: "CuentasMenu",    
    data: () => ({
      // tab: null,
      dialog: false,
      usuario: JSON.parse(localStorage.getItem('user')),
      nuevaCuenta: {
          idUsuario: "",
          username: "",
          red: "twitter",
        },
    }),
    methods:{
        ...mapActions(['callCuentas', 'agregarCuenta']),
        showNewAccount(){

            this.dialog = true;
        },
        createAccount(){ // funcion para cerrar dialogo y mandar rest call para crear cuenta
            this.nuevaCuenta.idUsuario = this.usuario.id;
            this.agregarCuenta(this.nuevaCuenta);
            this.dialog = false;
        },
        setCuentasDeUsuario(){ // nos regresa todas las cuentas del usuario activo
            return this.callCuentas(this.usuario.id);
        },
    },
    mounted(){
        this.setCuentasDeUsuario();
    }
}
</script>

<style scoped>
.form{
    display:flex;
    align-items: center;

}
</style>