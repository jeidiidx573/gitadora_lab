<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon/>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="showMusicSearch()"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-dialog
        v-model="musicSearchisActive"
        width="960"
      >
        <Musicsearch />
      </v-dialog>
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
import Musicsearch from '~/components/layouts/Musicsearch'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

export default {
  components: {
    Musicsearch
  },
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
      musicSearchisActive: false,
      title: 'GITADORA Lab.'
    }
  },
  methods: {
    showMusicSearch () {
      this.musicSearchisActive = !this.musicSearchisActive
    }
  }
}
</script>
