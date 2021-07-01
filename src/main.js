import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Loader from "@/components/app/Loader"
import messagePlugin from "@/utils/message.plugin";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import "materialize-css/dist/js/materialize.min";

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

var firebaseConfig = {
  apiKey: "AIzaSyDtxs9PIZQ5hJUJDijbzMcB2frU4wCmq2Y",
  authDomain: "vue-crm-study-cfc78.firebaseapp.com",
  projectId: "vue-crm-study-cfc78",
  storageBucket: "vue-crm-study-cfc78.appspot.com",
  messagingSenderId: "83504597066",
  appId: "1:83504597066:web:5e8cae428e6fca37b57eb3",
  measurementId: "G-623G1NENHM"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");  
  }
})
