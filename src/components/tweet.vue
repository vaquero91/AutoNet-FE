<template>
    <v-card id="card">
        <span>
            <div> Fecha: {{tweet.fecha}}</div>
        </span>
        <span class="middle">
            <div>{{tweet.body}}</div>
            <span> 
                <div>Rts:{{tweet.rts}} </div> 
                <div> Favs:{{tweet.favs}} </div>
            </span>
        </span>
        <span>
            <v-btn>+ Info</v-btn>
        </span>
    </v-card>
</template>

<script>
export default {
    name:"tweet",
    props:["tweet"],
}
</script>

<style scoped>
#card {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.middle {
    display: flex;
    flex-direction: row;
    align-items: stretch;
}
</style>