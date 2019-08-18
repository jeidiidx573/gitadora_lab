<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          align="alignment"
          justify="center"
        >
          <v-card
            v-for="n in 12"
            :key="n"
            class="ma-3"
            max-width="400"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-2">exchain - drum</div>
                <v-list-item-title class="headline mb-1">Skysclaper</v-list-item-title>
                <v-list-item-subtitle>Artist: hogehoge</v-list-item-subtitle>
                <v-list-item-subtitle>BPM: 200</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar
                tile
                height="80"
                width="140"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
              <v-btn outlined color="blue lighten-3">0.00</v-btn>
              <v-btn outlined color="lime lighten-1">0.00</v-btn>
              <v-btn outlined color="red darken-1">0.00</v-btn>
              <v-btn outlined color="purple lighten-1">0.00</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <div class="parent">
      <button class="parent-button" @click="refToParentOpen">parent button</button>
      <YoutubeModal ref="childDialogue"></YoutubeModal>
    </div>
  </v-container>
</template>

<script>
import YoutubeModal from '~/components/YoutubeModal.vue'

export default {
  components: {
    YoutubeModal
  },
  methods: {
    refToParentOpen () {
      this.$refs.childDialogue.open()
    }
  }
}
</script>
