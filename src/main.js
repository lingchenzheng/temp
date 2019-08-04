import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/routes'
import 'nprogress/nprogress.css'
import routerSetting from './router/setting'
routerSetting(router)
Vue.use(VueRouter)
new Vue({
    el: '#root',
    router,
    render: h => h(App)
})
