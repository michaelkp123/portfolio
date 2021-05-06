import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ommig from '../views/Ommig.vue'
import Portfolio from '../views/Portfolio.vue'
import Kontakt from '../views/Kontakt.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Ommig',
        name: 'Ommig',
        component: Ommig
    },
    {
        path: "/Portfolio",
        name: "Portfolio",
        component: Portfolio
    },
    {
        path: "/Kontakt",
        name: "Kontakt",
        component: Kontakt
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router