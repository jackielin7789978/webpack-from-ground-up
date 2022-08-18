<script setup>
import VueCounter from './components/VueCounter'
</script>

<template>
	<h1>你好，我是 App.vue</h1>
	<VueCounter />
</template>

<style lang="scss">
@import './css/fonts.css';

body,
html {
	height: 100%;
}
#app {
	height: 100%;
}

body {
	background: url('./imgs/camping.jpg') center no-repeat;
	background-size: cover;
	color: white;
}

h1 {
	font-family: 'Taipei Sans TC';
	font-weight: 400;
	font-size: 60px;
}
</style>
