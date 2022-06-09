import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state, //这里放全局参数
  mutations,   //这里是set方法
  actions,
  modules: {} //为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里
})
