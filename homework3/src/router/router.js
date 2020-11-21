import Vue from 'vue'
import Router from 'vue-router'
import PostItApp from '../views/PostItApp.vue'
import LoginPage from '../views/LoginPage.vue'
import BrowsePage from '../views/BrowsePage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/postitapp',
            name: 'PostItApp',
            component: PostItApp
        },
        {
            path: '/',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/browsepage',
            name: 'BrowsePage',
            component: BrowsePage
        }
    ]
})