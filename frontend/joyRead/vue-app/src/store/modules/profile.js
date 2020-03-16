import { User } from '@/utils/model.js'
import api from '@/api/index.js'

const state = {
    user: new User(),
}

const getters = {

}

const actions = {
    async getAuthority({commit, state}, form) {
        const {userId, name, phone, avatar,status, authorization: token} = await api.getAuthority(form);
        Object.assign(window.localStorage, {
            token,
            userId,
            phone,
            name,
            avatar,
            status
        })
        commit('setUser', {
            token,
            userId,
            phone,
            name,
            avatar,
            status
        })
        console.log("id:", userId)
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