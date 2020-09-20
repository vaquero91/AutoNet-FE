<template>
<div class="tweetsBox">
    <div  :key="index" v-for="(tweet, index) in allTweets">
        <tweet :tweet="tweet" />
    </div>
</div>
</template>

<script>
import tweet from "./tweet";
import { mapGetters } from "vuex";
export default {
    name:"verTweets",
    computed: mapGetters(['allTweets']),
    components: {
        tweet,
    }

}
</script>

<style scoped>
.classBox{
    width: 50%;
    height: 100%;
        
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>