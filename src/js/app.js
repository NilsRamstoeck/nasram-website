import Vue from 'vue/dist/vue.js'; //Import Vue.js
import components from './components'; //Import all Single File Components

//Import JQuery and assign it to $
import jquery from "jquery";
window.$ = window.jQuery = jquery;

let app = new Vue({
   el: '#app',
   components: components,
   data: {

   },
   methods: {

   }
});
