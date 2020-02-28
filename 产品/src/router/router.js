import Router from 'vue-router'
import routes from './routes.js'
export default () => {
  return new Router({
    routes,
    linkActiveClass: 'activelink',
    linkExactActiveClass: 'exactlink',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    fallback: true
  })
}
