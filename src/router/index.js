import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Msg from '../views/Msg.vue'
import News from '../views/News.vue'
import MsgDetail from '../views/MsgDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path:'/home/msg',
          component:Msg,
          children:[
            {
              path:'/home/msg/detail/:id',
              component:MsgDetail
            }
          ]
        },
        {
          path:'news',
          component: News
        },
        {
          path:'',
          redirect:'news'
        }
      ]
    },
    {
      path:'/',
      redirect:'/about'
    }
  ]
})
