import NProgress from 'nprogress'
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
export default router => {
    router.beforeEach((to, from, next) => {
        NProgress.start()
        next()
    })

    router.afterEach(() => {
        NProgress.done()
    })
}
