// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'
import Profile from '../models/Profile'
import Post from '../models/Post'
import User from '../models/User'

Vue.use(Vuex);
//to handle state
const state = {
    posts: [],
    users: [],
    profile: null
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    getPosts({ commit }) {
        axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
            .then(response => {
                let posts = [];
                for (let i = 0; i < response.data.length; i++){
                    posts.push(new Post(response.data[i].id, response.data[i].author, response.data[i].createTime, response.data[i].text, response.data[i].media, response.data[i].likes))
                }
                commit('SET_POSTS', posts)
            })
    },
    getUsers({ commit }) {
        axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
            .then(response => {
                let users = [];
                for (let i = 0; i < response.data.length; i++){
                    users.push(new User(response.data[i].firstname, response.data[i].lastname, response.data[i].avatar))
                }
                commit('SET_USERS', users)
            })
    },
    getProfile({commit}) {
        axios.get('https://private-517bb-wad20postit.apiary-mock.com/users/1')
            .then(response => {
                let profile = new Profile(response.data.firstname, response.data.lastname, response.data.email, response.data.avatar);
                commit('SET_PROFILE', profile)
            })
    }
}

//to handle mutations
const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    },
    SET_USERS(state, users) {
        state.users = users
    },
    SET_PROFILE(state, profile) {
        state.profile = profile
    }
}

//export store module
export default new Vuex.Store ({
    state,
    getters,
    actions,
    mutations
})
/** we have just created a boiler plate for our vuex store module**/