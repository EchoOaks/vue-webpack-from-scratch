![](https://img.shields.io/badge/Code-Vue-informational?style=flat&logo=vue.js&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Webpack-informational?style=flat&logo=webpack&logoColor=white&color=8dd6f9)

# Step by step how to setup a Vue project without VUE-CLI but Webpack

## 1) New project folder 
```
mkdir new-vue-webpack-app
cd new-vue-webpack-app
```

### 2) npm init -y ( it generates an empty package.json )

### 3) Dependencies 
```
npm i vue 
npm install -D vue-loader vue-template-compiler
npm install -D babel-loader
npm install -D vue-style-loader css-loader
npm install html-webpack-plugin --save-dev
npm install --save-dev webpack webpack-cli 
```
or just..
```
npm install -D vue-loader vue-template-compiler babel-loader vue-style-loader css-loader webpack webpack-cli html-webpack-plugin 
```

### 4) Folder Structure

```
new-vue-webpack-app
│   README.md
│   package.json
│   package-lock.json
│   webpack.config.js
│
└───src
    │   App.vue
    │   main.js
    │
    └───assets
    │   |   index.html  // html boilerplate
    │   |   style.css
    │
    └───components
        |   Home.vue
```


### 5) Add 'build' y 'dev' to package.json 
```
"scripts": {                                            
  "build": "webpack --mode=development",                
  "dev": "webpack serve --mode=development",                
  "test": "echo \"Error: no test specified\" && exit 1" 6) main.js
},                                                      
```

## 6) Basic files

#### 6.1) # src/main.js ( webpack entrypoint )

```
import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

#### 6.2) # src/App.vue

```
<template>
  <div id="app">
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
```

#### 6.3) # src/Components/Home.vue
```
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
```


#### 6.4) # webpack.config.js (base folder)

```
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
```

#### 6.5) # src/assets/index.html

```
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
