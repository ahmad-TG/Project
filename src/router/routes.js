
const routes = [
  {
    // default
    path: '/',
    component: () => import('pages/Index.vue'),
    
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
      { path: 'admin', component: () => import('pages/admin/index.vue') }
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
    // login
    path: '/',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: 'login', component: () => import('pages/login/index.vue') }
    ]
  },

  {
    // home
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/home/index.vue') },
      { path: 'apah', component: () => import('pages/latihan/index.vue') }    
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
