<template>
  <v-app>
    <Header/>
    <v-main>
      <verTweets/>
    </v-main>
  </v-app>
</template>

<script>
import verTweets from './components/verTweets';
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    verTweets,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
