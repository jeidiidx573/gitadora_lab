import Music from '~/assets/musicdata.json'

export const state = () => ({
  console: null,
  music: Music,
  search: {
    title: '',
    difficultVal: ''
  }
})

export const mutations = {
  console (state, data) {
    state.console = data
  },
  // 曲検索
  Search (state, data) {
    // 検索文字列格納
    state.search.title = data.title // 曲名
    state.search.difficultVal = data.difficultVal // 難易度
    // 曲初期化
    state.music = Music
    // 格納用
    const newdata = []
    // 正規表現
    const searchTitle = new RegExp(state.search.title)
    const searchDifficult = new RegExp('^' + state.search.difficultVal)
    // 絞り込み
    for (const index in state.music) {
      if (state.music[index].title.match(searchTitle) &&
          (
            state.music[index].drum.bsc.difficult.match(searchDifficult) ||
            state.music[index].drum.adv.difficult.match(searchDifficult) ||
            state.music[index].drum.ext.difficult.match(searchDifficult) ||
            state.music[index].drum.mas.difficult.match(searchDifficult)
          )
      ) {
        newdata.push(state.music[index])
      }
    }
    state.music = newdata
    state.musicSearchisActive = false
  },
  Reset (state) {
    console.log(Music)
    state.music = Music
  }
}

export const actions = {
  // 曲検索
  Search (context, value) {
    context.commit('Search', value)
  },
  Reset (context) {
    context.commit('Reset')
  }
}
