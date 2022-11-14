import { createRouter, createWebHashHistory } from 'vue-router'

import MainPage from './pages/MainPage/index.vue'
import AllBooksPage from './pages/AllBooksPage/index.vue'
import BookPage from './pages/BookPage/index.vue'
import BooksLayout from './pages/BooksLayout/index.vue'
import NotFound from './pages/NotFound/index.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage  
    },
    {
        path: '/books',
        name: 'booksLayout',
        component: BooksLayout,
        children: [
            {
                path: '',
                name: 'books',
                component: AllBooksPage
            },
            {
                path: 'id',
                name: 'bookPage',
                component: BookPage,
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem('auth')) {
                        next()
                    } 
                    else {
                        next({ name: 'books' })
                    }
                }
            },
            {
                path: '*/*',
                redirect: { name: 'books' }
            },
        ]
    },
    {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  export default router
