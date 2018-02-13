import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import menus from '@/config/menu'

Vue.use(Router)

var routes = [{
  path: '/',
  name: 'Index',
  component: Index
}]

menus.forEach((item) => {
  if(item.sub){
    item.sub.forEach((sub) => {
      pushRoutes(sub);
    })
  }else{
    pushRoutes(item);
  }
})

function pushRoutes (obj) {
  routes.push({
    path: `${obj.path}`,
    //name: obj.component,
    component: () => import(`@/pages/${obj.component}`)
  })
}

export default new Router({ routes })
/*
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/AssetManage/index',
      name: 'Index',
      component: () => import('@/views/AssetManage/index')
    }
  ]
})*/
