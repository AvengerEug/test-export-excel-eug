// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import exportExcelEug from 'export-excel-eug'

Vue.config.productionTip = false

exportExcelEug.forEach(key => {
  Vue.use(key)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
