<template>
  <v-container fluid>
    <v-layout wrap>
      <v-flex
        xs12
        sm6
        md4
        v-for="(music, index) in $store.state.music"
        :key="index"
      >
        <v-card
          class="ma-3"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-2">exchain - drum</div>
              <v-list-item-title class="headline mb-1">{{ music.title }}</v-list-item-title>
              <v-list-item-subtitle>Artist: {{ music.artist }}</v-list-item-subtitle>
              <v-list-item-subtitle>BPM: {{ music.bpm }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-img
              max-height="90"
              max-width="160"
              :src="getThumbnailPath(music.imgId)"
            ></v-img>
          </v-list-item>
          <v-card-actions>
            <v-btn
              v-for="(level, name) in music.drum"
              :key="name"
              v-show="level.videoId"
              outlined
              :color="difficultColor[name]"
              @click.stop="open(level.videoId);"
            >
            {{ level.difficult }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn
      icon
      @click="Search()"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="960"
      @input="close()"
    >
      <youtube
        ref="youtube"
        :video-id="videoId"
        :player-vars="{autoplay:1}"
        width="960"
        height="540"
      />
    </v-dialog>
  </v-container>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
  data () {
    return {
      dialog: false,
      videoId: '',
      difficultColor: {
        'bsc': 'blue lighten-3',
        'adv': 'lime lighten-1',
        'ext': 'red lighten-1',
        'mas': 'purple lighten-1'
      }
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  },
  methods: {
    open (data) {
      if (data != null) {
        this.dialog = true
        this.videoId = data
      }
    },
    close () {
      this.videoId = null
      this.player.stopVideo()
    },
    playVideo () {
      this.player.playVideo()
    },
    stopVideo () {
      this.player.stopVideo()
    },
    getThumbnailPath (videoId) {
      return 'https://img.youtube.com/vi/' + videoId + '/mqdefault.jpg'
    }
  }
}
</script>
