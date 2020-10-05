<template>
    <nav>
        <v-toolbar fixed app>
            <v-app-bar-nav-icon @click="showDrawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase font-weigth-light">AutoNet</v-toolbar-title>
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="indigo">
            <v-btn @click="showDrawer">Close</v-btn>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    name:"Header",
    data(){
        return {
            drawer: false,
        }
    },
    methods: {
        showDrawer: function () {
            this.drawer = !this.drawer;
        }
    }
}
</script>

<style scoped>

</style>