<template>
  <v-app>
    <Header/>
    <v-main >
    <!--  <verTweets class= "mainBox"/> -->
      <SignPage />
    </v-main>
  </v-app>
</template>

<script>
//import verTweets from './components/verTweets';
import Header from './components/Header';
import SignPage from './components/SingPage';

export default {
  name: 'App',

  components: {
    //verTweets,
    Header,
    SignPage
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.mainBox{
  display:flex;
  align-items: center;
  flex-direction: column;
}
</style>
