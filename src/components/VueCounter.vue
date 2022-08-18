<script setup>
import { ref } from 'vue'
const count = ref(0)

const decrement = () => count.value--
const increment = () => count.value++
</script>

<template>
	<h2>Vue Counter</h2>
	<div>
		<button @click="decrement">-</button>
		<span>{{ count }}</span>
		<button @click="increment">+</button>
	</div>
</template>

<style lang="scss" scoped>
h2 {
	margin-top: 4rem;
	font-family: 'Gen Sen Rounded';
	font-weight: bold;
	font-size: 42px;
}
div {
	display: flex;
	align-items: center;
	column-gap: 1rem;
}

button {
	border: none;
	border-radius: 3px;
	padding: 0.4rem 1rem;
	font-size: 18px;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background-color: rgb(188, 196, 212);
	}
	&:active {
		background-color: rgb(152, 159, 172);
	}
}

span {
	font-size: 30px;
	font-family: 'Gen Sen Rounded';
	font-weight: bold;
	display: inline-block;
	min-width: 48px;
	text-align: center;
}
</style>
