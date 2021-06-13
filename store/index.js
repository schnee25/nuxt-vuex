import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function () {
      return {
        message: 'Hello Vuex!',
        // message 任意　stateの値は常にfunction
      }
    },
  })
}

export default createStore