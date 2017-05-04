<template>
  <div id="app">
		<Navi></Navi>
		<router-view></router-view>
		<Foot></Foot>
  </div>
</template>

<script>
import Navi from './components/Navi'
import Foot from './components/Foot'

export default {
	name: 'app',
	components: {
		Navi,
		Foot
	}
}
</script>

<style scoped></style>
