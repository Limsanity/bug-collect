import Vue from 'vue'
import Router from 'vue-router'
import routes from 'vue-auto-routing'
import { createRouterLayout } from 'vue-router-layout'

Vue.use(Router)

const RouterLayout = createRouterLayout(layout => {
  return import('@/layouts/' + layout + '.vue')
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})

// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       components: () => import('@/pages/index.vue')
//     }
//   ]
// })
