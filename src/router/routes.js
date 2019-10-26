
const routes = [
  {
    // Login
    path: '/',
    component: () => import('pages/Index.vue'),
    
  },
  {
    // Login
    path: '/tmp',
    component: () => import('layouts/Auth.vue'),
    
  },

  {
    // Employee
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'employees', component: () => import('pages/employees/index.vue') },
      { path: 'emp_add', component: () => import('pages/employees/add.vue') },
      { path: 'emp_edit', component: () => import('pages/employees/edit.vue') }
    ]
  },

  {
    // admin
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'admin', component: () => import('pages/admin/index.vue') },
      { path: 'admin2', component: () => import('pages/admin/lathan.vue') }
    ]
  },

  {
    // owner
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'owner', component: () => import('pages/owner/index.vue') },
      { path: 'owner_add', component: () => import('pages/owner/add.vue') },
      { path: 'owner_edit', component: () => import('pages/owner/edit.vue') }
    ]
  },

  {
    // projek
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'projek', component: () => import('pages/projek/index.vue') },
      { path: 'projek_add', component: () => import('pages/projek/add.vue') },
      { path: 'projek_edit', component: () => import('pages/projek/edit.vue') }
    ]
  },
  
  {
    // Testing
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/home/index.vue')  },
      { path: 'apah', component: () => import('pages/latihan/index.vue') },
      { path: 'update', component: () => import('pages/latihan/update.vue') } ,
      { path: 'coba', component: () => import('pages/latihan/coba.vue') } ,
      { path: 'coba2', component: () => import('pages/admin/lathan.vue') } 
    ]
  }
]
          

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
