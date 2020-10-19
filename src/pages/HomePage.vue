<template>
<div>
    <Header />
    <verTweets />
</div>
</template>

<script>
import  Header  from '../components/Header';
import  verTweets from '../components/verTweets';

export default {
    name: 'HomePage',
    components: {
        Header,
        verTweets,
    },
}
</script>    