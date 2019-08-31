<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon/>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
      width="100%"
      class="text-center"
    >
    <v-spacer></v-spacer>
      &copy; 2019 @jeidiidx<v-btn icon class="ml-2" color="blue lighten-2" href="https://twitter.com/jeidiidx" target="_blank"><v-icon>fa-twitter</v-icon></v-btn>
    <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'GITADORA Lab.'
    }
  }
}
</script>
