import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import LoginPage from '../views/LoginPage.vue'
import BrowsePage from '../views/BrowsePage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/loginpage',
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