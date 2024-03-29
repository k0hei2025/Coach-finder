import { createRouter, createWebHistory } from 'vue-router'
import CoachDetails from './pages/coaches/CoachDetails.vue'
import CoachList from './pages/coaches/CoachList.vue'
import CoachRegister from './pages/coaches/CoachRegister.vue'
import ContactCoach from './pages/requests/Contact.vue'
import RequestRecived from './pages/requests/RequestRecived.vue'
import NotFound from './pages/NotFound.vue'
import Authentication from './pages/Authentication/index'
import Home from './pages/home/home.vue'
import TeacherProfile from './pages/Profile/MyProfile.vue'
import StudentRegistrationForm from './components/StudentRegistrationForm.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', redirect: '/coaches' },
    { path: '/', component: Home },

    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      props: true,
      children: [
        { path: '/coaches/:id/contact', component: ContactCoach } // /coaches/c1/contact
      ]
    },

    { path: '/requests', component: RequestRecived },
    { path: '/register', component: CoachRegister },
    { path: '/:notFound(.*)', component: NotFound },
    { path: '/auth', component: Authentication },
    { path: '/teacherProfile', component: TeacherProfile },
    { path: '/register_student', component: StudentRegistrationForm }

  ]
})
export default router;