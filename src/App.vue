<template>
  <v-app>
    <v-main>
      <verTweets/>
    </v-main>
  </v-app>
</template>

<script>
import verTweets from './components/verTweets';

export default {
  name: 'App',

  components: {
    verTweets,
  },

  data: () => ({
    //
  }),
};
</script>
