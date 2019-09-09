<template>
<div>
<p>Redirecting you to https://sonar.community</p>
</div>
</template>

<script>
export default {
	name: 'community',
	data() {
		return {
			timer: false
		}
	},
	methods: {
		redirect() {
			window.location.href = "https://sonar.community"
		}
	},
        mounted() {
		this.timer = true;
		if (this.timer == true) {
		this.$nextTick(() => {
			setTimeout(() => {
				this.redirect();
			}, 3001)
		})
	}
	},
	beforeDestroy() {
		this.timer = false;
	}

}
</script>

<style scoped>
p {
  display: grid;
  height: 100vh;
  margin: 0;
  opacity: 0;
  place-items: center center;
  animation: fade 3s ease-in-out;
}

@keyframes fade {
	0% { opacity: 0; }
	20% { opacity: 1; }
	80% { opacity: 1; }
	100% { opacity: 0; }
}
</style>
