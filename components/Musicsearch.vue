<template>
  <v-dialog
    v-model="musicSearch"
    width="960"
  >
    ok
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      musicSearch: false
    }
  },
  computed: {
  },
  methods: {
    open (data) {
      if (data != null) {
        this.dialog = true
        this.videoId = data
      }
    }
  }
}
</script>
