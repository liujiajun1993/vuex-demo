import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    bookId: 1,
    selectedQuestionId: -1,
    selectedMaterialId: -1,
    selectedContentType: -1,
    ifShowSolution: false,
    selectedChapterIndex: -1,
    selectedSectionIndex: -1
  },
  getters: {

  },
  mutations: {    // mutations中的函数必须为同步，通过store.commit触发
    setSelectedContext (state, payload) {
      state.selectedQuestionId = payload.selectedQuestionId
      state.selectedMaterialId = payload.selectedMaterialId
      state.selectedContentType = payload.selectedContentType
      state.ifShowSolution = payload.ifShowSolution
      state.selectedChapterIndex = payload.selectedChapterIndex
      state.selectedSectionIndex = payload.selectedSectionIndex
    }
  },
  actions: {  // action中通过store.dispatch触发. 不同的是，这里面的函数可以是异步的
    setSelectedContext ({commit}, payload) {
      console.log(payload)
      commit('setSelectedContext', payload)
    }
  }
})

export default store
