Paso a paso como inicializar un vue sin CLI con Webpack

1) New folder <app-name>

2) npm init -y ( genera package.json )

3) Dependecias 
npm i vue 
npm install -D vue-loader vue-template-compiler babel-loader
npm install -D babel-loader
npm install -D vue-style-loader css-loader
npm install html-webpack-plugin --save-dev
npm install --save-dev webpack webpack-cli 

4) Folder Structure
index.js (webpack entrypoint)
>src
 src/App.vue
 src/main.js
>>assets
  assets/style.css
  assets/index.html (html boilerplate)
>>components
  components/Home.vue

5) Agregar 'build' y 'dev' a package.json 

	"scripts": {                                            
	  "build": "webpack --mode=development",                
	  "dev": "webpack serve --mode=development",                
	  "test": "echo \"Error: no test specified\" && exit 1" 6) main.js
	},                                                      ////////////////



6) Basic files
 
6.1) # src/main.js

////////////////
import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
////////////////

6.2) # src/App.vue

//////////////7
<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style>
#app {
}
</style>
////////////////

6.3) # src/Components/Home.vue
////////////////
<template>
</template>

<script>

export default {
  name: 'Home',
	components: {
	},
	data(){
		return {
		}
	},
	methods: {
    },
	created(){
	},
}
</script> 

<style>
</style>

////////////////

6.4) # webpack.config.js (base folder)

////////////////

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	module: {
		rules: [
		  {
			test: /\.vue$/,
			loader: 'vue-loader'
		  },
		  {
			test: /\.js$/,
			loader: 'babel-loader'
		  },
		  {
			test: /\.css$/,
			use: [
			  'vue-style-loader',
			  'css-loader'
			]
		  }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: 'src/assets/index.html'}),
		new VueLoaderPlugin()
	]
}
/////////////////////


6.5) # src/assets/index.html

/////////////////////
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
  <script defer src="main.js"></script></head>
  <body>
	<div id="app"></div>
  </body>
</html>

////////////////







