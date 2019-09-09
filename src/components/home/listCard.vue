<template>
	<div class="grid-4 align-center">
		<div class="span-2 box before border-s-right">
			<p class="title">Instead of</p>
			<p class="item i1 shadow-s">Poor service</p>
			<p class="item i2 shadow-s">Old hardware</p>
			<p class="item i3 shadow-s">Outdated tech</p>
			<p class="item i4 shadow-s">Poor service</p>
		</div>
		<div class="span-2 box after">
			<p class="title">You'll get</p>
			<p class="item i1 shadow-s">Poor service</p>
			<p class="item i2 shadow-s">Poor service</p>
			<p class="item i3 shadow-s">Poor service</p>
			<p class="item i4 shadow-s">Poor service</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'listCard'
	}
</script>

<style scoped>
	.box {
		position: relative;
		height: 350px;
	}

	@media (min-width: 900px) {
		.border-s-right {
			border-right: solid 1px rgba(0, 0, 0, 0.05);

		}
	}

	.title {
		font-size: 1.2em;
		color: rgba(0, 0, 0, 0.85);
		margin-top: -20px;
	}

	.item {
		position: absolute;
		padding: 10px;
		font-weight: 500;
		border-radius: 10px;
	}

	.before>p.item {

		color: #929292
	}

	.after>p.item {
		background: linear-gradient(to bottom, hsl(50, 100%, 50%), hsl(40, 100%, 50%));
		color: #fff;
	}

	.i2 {
		left: 59%;
		top: 37%;
		animation: wiggle 4s infinite ease-in-out;
		animation-delay: .5s;
	}

	.i1 {
		left: 15%;
		top: 45%;
		animation: wiggle 4s infinite ease-in-out;
		animation-delay: 1s;

	}

	.i3 {
		left: 27%;
		top: 19%;
		animation: wiggle 4s infinite ease-in-out;
		animation-delay: .2s;

	}

	.i4 {
		left: 0%;
		top: 0%;
		animation: wiggle 4s infinite ease-in-out;
		animation-delay: 2s;

	}

	@keyframes wiggle {
		0% {
			transform: translateY(0px);
		}

		50% {
			transform: translateY(5px);
		}

		100% {
			transform: translateY(0px);
		}
	}
</style>