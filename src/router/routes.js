import VueRouter from 'vue-router'

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/main',
            component: () => import('@/views/layout')
        },
        {
            path: '/login',
            component: () => import('@/views/login')
        },
        {
            path: '*',
            component: () => import('@/views/error')
        }
    ]
})
