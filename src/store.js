import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        stateDataList: []
        // other states here
    },
    actions: {
        setData(context, payload) {
            context.commit('setData', payload)
        }
        // other actions here
    },
    mutations: {
        setData(state, list) {
            state.stateDataList = list
        }
        // other mutations here
    }
})

export default store