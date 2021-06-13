import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function () {
      return {
        message: 'Hello Vuex!',
        // message 任意　stateの値は常にfunction
      }
    },
    // mutations: {
    //   updateMessage: function (state) {
    //     state.message = 'Updeted!'
    //   },
    // },
    mutations: {
      updateMessage: function (state, payload) {
        state.message = payload
      },
    },
  })
}

export default createStore
