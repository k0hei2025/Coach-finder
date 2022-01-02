import { createRouter, createWebHistory } from 'vue-router'
import CoachDetails from './pages/coaches/CoachDetails.vue'
import CoachList from './pages/coaches/CoachList.vue'
import CoachRegister from './pages/coaches/CoachRegister.vue'
import Contact from './pages/requests/Contact.vue'
import RequestRecived from './pages/requests/RequestRecived.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
               history: createWebHistory(),
               routes: [
                              { path: '/', redirect: '/coaches' },
                              { path: '/coaches', component: CoachList },
                              { path: '/contact', component: Contact },
                              { path: '/coaches/:id', component: CoachDetails, children: [{ path: '/contact', component: Contact }] },
                              { path: '/requests', component: RequestRecived },
                              { path: '/register', component: CoachRegister },
                              { path: '/:notFound(.*)', component: NotFound }

               ]
})
export default router;