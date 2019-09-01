<template>
  <v-card>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-card-title>
        <span class="headline">Music Search</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="MusicTitle" v-model="title"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-select
                v-model="difficult"
                :items="difficults"
                item-value="label"
                label="Difficult"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn
          color="blue darken-1"
          text
          @click="submit"
        >
          Search
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="reset"
        >
          Reset
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      title: '',
      difficult: '',
      difficultVal: '',
      difficults: [
        { 'text': '1.00 ~ 1.99', 'val': '1' },
        { 'text': '2.00 ~ 2.99', 'val': '2' },
        { 'text': '3.00 ~ 3.99', 'val': '3' },
        { 'text': '4.00 ~ 4.99', 'val': '4' },
        { 'text': '5.00 ~ 5.99', 'val': '5' },
        { 'text': '6.00 ~ 6.99', 'val': '6' },
        { 'text': '7.00 ~ 7.99', 'val': '7' },
        { 'text': '8.00 ~ 8.99', 'val': '8' },
        { 'text': '9.00 ~ 9.99', 'val': '9' }
      ],
      formError: ''
    }
  },
  computed: {
  },
  methods: {
    async submit () {
      try {
        for (const index in this.difficults) {
          if (this.difficults[index].text === this.difficult) {
            this.difficultVal = this.difficults[index].val
          }
        }
        await this.$store.dispatch('Search', {
          title: this.title,
          difficultVal: this.difficultVal
          // password: this.password
        })
        this.$router.push('/')
      } catch (e) {
        this.formError = e.message
      }
    },
    async reset () {
      try {
        this.$refs.form.reset()
        await this.$store.dispatch('Search', {
          title: this.title
          // password: this.password
        })
        this.$router.push('/')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
