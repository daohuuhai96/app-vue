import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const storeData = {
    state: {
        status: true,
        dataProducts: [],
    },
    actions: {
        async getProFile({ commit }) {
            try {
                const res = await axios({
                    method: 'get',
                    url: `https://api.petfinder.com/v2/animals`,
                    headers: {
                        Authorization: localStorage.getItem('jwt')
                    }
                });
                commit('SET_DATAPRODUCTS', res.data.animals)
            } catch (e) {
                console.log(e)
            }
        },
    },
    mutations: {
        SET_DATAPRODUCTS(state, dataProducts) {
            state.dataProducts = dataProducts
            console.log(dataProducts)
        }
    }
}

const store = new Vuex.Store(storeData)

export default store