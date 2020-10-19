<template>
  <v-app>
    <v-main >
    <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

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
