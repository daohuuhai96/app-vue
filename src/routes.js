import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import ProductDetail from './components/pages/ProductDetail.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/ProductDetail',
            component: ProductDetail
        }
    ]
})