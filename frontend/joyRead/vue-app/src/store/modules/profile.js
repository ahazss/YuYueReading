import { User } from '@/utils/model.js'
import api from '@/api/index.js'

const state = {
    user: new User(),
}

const getters = {

}

const actions = {
    async getAuthority({commit, state}, form) {
        const {id, name, phone, avatar,status, authorization: token} = await api.getAuthority(form);
        Object.assign(window.localStorage, {
            token,
            id,
            phone,
            name,
            avatar,
            status
        })
        commit('setUser', {
            token,
            id,
            phone,
            name,
            avatar,
            status
        })
        window.vm.$router.push({name: 'Myaccount'});
    }
}

const mutations = {
    setUser(state, props) {
        state.user = Object.assign({},state.user, props)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}