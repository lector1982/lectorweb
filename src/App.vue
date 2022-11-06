<template>
	<div class="wrapper">
		<Navigation />
		<router-view v-slot="{Component}">
			<transition name="slide-left" mode="out-in" appear>
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script>
import { reactive } from 'vue'
import Navigation from '@/components/NavigationMain'

export default {
	components: {Navigation},
	setup() {
		const state = reactive({ count: 0 })
		return {
				state
			}
	}
}
</script>

<style lang="scss">
body {
  height: 100vh;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: .3s ease-in-out;
}
.wrapper {
	display: flex;
	height: 100vh;
}
button {
	cursor: pointer;
}
.page {
	width: calc(100% - 300px);
	background: #c1c1c1;
	padding: 15px;
	overflow: hidden;
	margin-left: 300px;
}
.slide-left-enter-from,
.slide-left-leave-to {
	transform: translateX(-100%);
}
.slide-left-enter-active,
.slide-left-leave-active {
	transition: .3s ease-in-out;
}
</style>
