import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/AnasayfaLayout.vue'),
    children: [
      { path: 'anasayfa', component: () => import('pages/AnasayfaPage.vue') },
      { path: '/Urunler', component: () => import('pages/UrunlistePage.vue') },
    ],
  },

  {
    path: '/sepet/',
    component: () => import('layouts/SiparisLayout.vue'),
    children: [{ path: '', component: () => import('pages/SepetPage.vue') },
    { path: 'siparis', component: () => import('pages/SiparisPage.vue') },
  ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
