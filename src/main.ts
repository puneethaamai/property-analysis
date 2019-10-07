import Vue from 'vue';
import App from './App.vue';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueCurrencyFilter from 'vue-currency-filter'
Vue.use(VueCurrencyFilter,
  {
    symbol : '$',
    thousandsSeparator: ',',
    fractionCount: 0,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
