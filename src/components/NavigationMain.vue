<template>
	<aside class="nav">
		<img class="logo" src="@/assets/logo.png" alt="LectorWeb">
		<img class="face" src="@/assets/mini-photo.jpg" alt="LectorWeb">

		<div class="lang">
			<button	@click="changeLang('en')">en</button> /
			<button	@click="$i18n.locale = `ru`">ru</button> /
			<button	@click="$i18n.locale = `ua`">ua</button>
		</div>

		<nav class="menu">
			<router-link to="/">{{ $t("nav.resume") }}</router-link> |
			<router-link to="/portfolio">{{ $t("nav.portfolio") }}</router-link> |
			<router-link to="/services">{{ $t("nav.services") }}</router-link> |
			<router-link to="/reviews">{{ $t("nav.reviews") }}</router-link> |
			<router-link to="/contacts">{{ $t("nav.contacts") }}</router-link>
		</nav>
	</aside>
</template>

<script>
export default {
	setup() {
		const changeLang = lang => {
			console.log(lang);
		}
		return changeLang
	},
}
</script>

<style lang="scss">
	.nav {
		width: 100%;
		height: 100%;
		width: 300px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #000;
		position: fixed;
		z-index: 2;
	}
	.logo {
		width: 100px;
		margin-bottom: 30px;
	}
	.face {
		width: 100px;
		height: 100px;
		margin-bottom: 30px;
	}
	.lang {
		margin-bottom: 30px;
		color: #fff;
		font-size: 20px;
		font-weight: 600;
		button {
			text-transform: uppercase;
			border: none;
			background: none;
			color: #fff;
			font-size: 20px;
			font-weight: 600;
			padding: 0;
		}
	}
	.menu {
		display: flex;
		flex-direction: column;
		a {
			text-decoration: none;
			color: #fff;
			font-size: 18px;
		}
	}
</style>