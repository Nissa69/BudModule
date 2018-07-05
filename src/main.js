import Vue from 'vue'
import App from './App.vue'

var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: 'main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/',
  components: { App }
})
