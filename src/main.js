import Vue from 'vue'
import ViewUI from 'view-design'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'view-design/dist/styles/iview.css'
import '../node_modules/echarts/theme/macarons'

Vue.component('chart', ECharts)
Vue.use(ViewUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  next();
});

router.afterEach(route => {
  ViewUI.LoadingBar.finish();
});