<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title><h1>Most Used Words</h1></v-toolbar-title>
    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {

  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  }),
};
</script>