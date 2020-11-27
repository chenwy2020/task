import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import AdminHome from '../views/adminHome.vue'
import UserInfor from '../views/userInfor.vue'
import TaskTimeInfor from '../views/taskTimeInfor.vue'
import UserInforManage from '../views/userInforManage.vue'
import DeRegistOfTimeWorkInfor from '../views/deRegistOfTimeWorkInfor.vue'
import PersonalInfor from '../views/personalInfor/personalInfor.vue'
import PerTask from '../views/personalInfor/perTask.vue'
import PerRest from '../views/personalInfor/perRest.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/adminHome',
    name: 'AdminHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AdminHome,
    children:[
      {
        path: '/userInfor',
        name: 'UserInfor',
        component:UserInfor
    },
      {
        path: '/taskTimeInfor',
        name: 'TaskTimeInfor',
        component:TaskTimeInfor
    },{
      path: '/userInforManage',
      name: 'UserInforManage',
      component: UserInforManage
    },{
      path: '/deRegistOfTimeWorkInfor',
      name: 'DeRegistOfTimeWorkInfor',
      component: DeRegistOfTimeWorkInfor
    },{
      path: '/personalInfor',
      name: 'PersonalInfor',
      component: PersonalInfor
    }
    ,{
      path: '/perRest',
      name: 'PerRest',
      component: PerRest
    }
    ,{
      path: '/perTask',
      name: 'PerTask',
      component: PerTask
    }
    ]
  }
]

const router = new VueRouter({

  routes
})

export default router
