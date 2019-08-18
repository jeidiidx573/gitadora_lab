export const state = () => ({
  console: null,
  opened: false
})

export const mutations = {
  console (state, data) {
    state.console = data
  },
  modalTrigger (state, data) {
    state.opened = data
  }
}
