<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
      </div>
    </v-flex>
    <Musiclist />
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Musiclist from '~/components/Musiclist.vue'

export default {
  components: {
    Logo,
    Musiclist
  },
  data () {
    return {
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
        this.videoId = data
        this.playVideo()
      }
    },
    close () {
      this.videoId = null
      this.stopVideo()
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
