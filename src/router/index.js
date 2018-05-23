import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/MainPage/MainComponent'
import TheCountry from '@/components/TheCountry/TheCountry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: MainComponent
    },
    {
      path: '/countries/:id',
      name: 'TheCountry',
      component: TheCountry
    }
  ]
})
