<template>
    <nav>
        <v-app-bar fixed app>
            <v-app-bar-nav-icon @click="showDrawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase font-weigth-light">AutoNet</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="indigo">
            <v-btn @click="showDrawer">Close</v-btn>
            <v-btn @click="onLogOut">LogOut</v-btn>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:"Header",
    data(){
        return {
            drawer: false,
        }
    },
    methods: {
        ...mapActions(['logOutAct']),
        showDrawer: function () {
            this.drawer = !this.drawer;
        },
        onLogOut(){
            this.logOutAct();
        }
    }
}
</script>

<style scoped>

</style>