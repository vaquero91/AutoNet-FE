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
            <v-btn color="blue" :class="{'mdBtn':$vuetify.breakpoint.mdAndUp, 'xsBtn':$vuetify.breakpoint.xsOnlt }">+ Info</v-btn>
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
    margin-bottom: 2cm;
}
.middle {
    display: flex;
    flex-direction: row;
    align-items: stretch;
}
 .mdBtn {
    width:70px;
    margin-top: 20px;
    margin-bottom: 10px;
}
.sxBtn {
    width:20px;
    height: 250px;
    background-color: blue;
    color: blue;
    margin-top: 20px;
    margin-bottom: 10px;
}
</style>