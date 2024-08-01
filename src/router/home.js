export const home = [
    {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/index/index.vue'),
        children: [
            {
                path:'index',
                name:'Dashboard',
                component: () => import('@/views/index/dashboard/index.vue')
            }
        ]
    }
    
]