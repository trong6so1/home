// home.js
export const home = [
{
  path: 'home',
  name: 'TheHome',
  component: () => import('@/views/index/index.vue'),
  children: [
    {
      path: 'index',
      name: 'DashBoard',
      component: () => import('@/views/index/dashboard/index.vue'),
    },
    {
      path: 'post',
      name: 'PostList',
      component: () => import('@/views/index/post/postList/index.vue'),
    },
    {
      path: 'postDetail/:id',
      name: 'PostDetail',
      component: () => import('@/views/index/post/postDetail/index.vue'),
    }
  ]
}
];
