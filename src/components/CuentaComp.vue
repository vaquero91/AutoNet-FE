<template>
    <v-tabs centered>
        <v-tab>Query</v-tab>
        <v-tab>Ver Tweets</v-tab>
        <v-tab>Contadores</v-tab>
        <v-tab-item> <Query /> </v-tab-item>
        <v-tab-item> <verTweets /> </v-tab-item>
        <v-tab-item> <Contadores /> </v-tab-item>
    </v-tabs>
</template>

<script>
import Query from './Query';
import verTweets from './verTweets';
import Contadores from './Contadores';
export default {
    name: "CuentaComp",    
    components: {
        Query,verTweets, Contadores

    }
}
</script>

<style scoped>

</style>