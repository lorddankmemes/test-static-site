
const routes = [
  {
    path: '/', component: () => import('pages/Landing.vue')
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/talent', component: () => import('pages/Talent.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/WebLayout.vue'),
    children: [
      { path: '/business', component: () => import('pages/Client.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
