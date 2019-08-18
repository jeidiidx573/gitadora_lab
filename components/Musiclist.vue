<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          justify="center"
        >
          <v-card
            v-for="(music, index) in music"
            :key="index"
            class="ma-3"
            max-width="500"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-2">exchain - drum</div>
                <v-list-item-title class="headline mb-1">{{ music.title }}</v-list-item-title>
                <v-list-item-subtitle>Artist: {{ music.artist }}</v-list-item-subtitle>
                <v-list-item-subtitle>BPM: {{ music.bpm }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar
                tile
                height="80"
                width="140"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
              <v-btn outlined color="blue lighten-3" @click.stop="open(music.d_bas.videoId);">{{ music.d_bsc.difficult }}</v-btn>
              <v-btn outlined color="lime lighten-1" @click.stop="open(music.d_adv.videoId);">{{ music.d_adv.difficult }}</v-btn>
              <v-btn outlined color="red lighten-1" @click.stop="open(music.d_ext.videoId);">{{ music.d_ext.difficult }}</v-btn>
              <v-btn outlined color="purple lighten-1" @click.stop="open(music.d_mas.videoId);">{{ music.d_mas.difficult }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
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
import Music from '~/assets/musicdata.json'

Vue.use(VueYoutube)

export default {
  data () {
    return {
      dialog: false,
      music: Music,
      videoId: ''
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
    }
  }
}
</script>
