export const state = () => ({
  console: null,
  // musicSearchisActive: false,
  opened: false
})

export const mutations = {
  console (state, data) {
    state.console = data
  },
  modalTrigger (state, data) {
    state.opened = data
  }
  // showMusicSearch (state, data) {
  //   state.musicSearchisActive = !state.musicSearchisActive
  //   console.log('p')
  // }
}

export const actions = {
  // showMusicSearch (context) {
  //   context.commit('showMusicSearch')
  // }
}
