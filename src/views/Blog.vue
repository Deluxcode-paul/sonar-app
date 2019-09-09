<template>

	<body class="">
		<sonarNav />
		<div class="container-l padding-m-top padding-m-bottom">
<blogLayout />
			<landingCTA class="padding-l-bottom padding-s-top" showButton="true" imageSource="/assets/deviso.png"
				ctaClassNames="container-l bg-gradient color-white grid-2 center-y radius-m shadow-l padding-m-left strip-padding-tablet"
				title="Try Sonar today" subtitle="and discover the difference." button="Schedule a demo"
				buttonPage="demo"
				svgInfo="M13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 C 0 5.82 5.82 0 13 0 Z M 12 16.586 L 9.739 14.325 C 9.349 13.935 8.716 13.935 8.325 14.325 C 7.935 14.716 7.935 15.349 8.325 15.739 L 12.285 19.699 C 12.485 19.9 12.75 19.997 13.012 19.992 C 13.275 19.997 13.539 19.9 13.739 19.699 L 17.699 15.739 C 18.09 15.349 18.09 14.716 17.699 14.325 C 17.309 13.935 16.675 13.935 16.285 14.325 L 14 16.61 L 14 7 C 14 6.448 13.552 6 13 6 C 12.448 6 12 6.448 12 7 Z"
				buttonClass="cta icon color-white download-cta" />
		</div>
		<sonarFooter class="footer-night" />
	</body>
</template>

<script>
	import sonarNav from '@/components/sonarNav';
	import sonarFooter from '@/components/sonarFooter';
	import landingCTA from '@/components/landing/landingCTA';
	import blogCard from '@/components/blog/blogCard';
	import blogVideoCard from '@/components/blog/blogVideoCard';
	import blogNav from '@/components/blog/blogNav.vue';
	import blogLayout from '@/components/blog/blogLayout.vue';

	export default {
		name: 'blog',
		components: {
			sonarNav,
			sonarFooter,
			landingCTA,
			blogCard,
			blogNav,
			blogLayout,
			blogVideoCard
		}
	}
</script>

<style scoped>
	.active {
		background: linear-gradient(to bottom, #0099ff, #2358f8);
		padding: .8rem;
		opacity: 1 !important;
		border-radius: 9px;
	}

	c {
		padding: 1em;
	}

	.super-menu .super-container {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		margin-top: .5em;
		-ms-flex-positive: 1;
		flex-grow: 1;
		max-width: 100%;
		justify-content: space-between;
	}

	.super-menu a,
	img {
		font-size: 1rem;
		color: #fff !important;
		opacity: .5;
		font-weight: 500;
		font-family: 'Inter', sans-serif;
		letter-spacing: -.02em;
		transition: .3s all ease-in-out;
	}

	.super-menu a:hover,
	img:hover {
		cursor: pointer;
		opacity: 1;
	}

	.super-menu img {
		max-height: 1em
	}

	.super-active {
		animation: superFadeInFull .7s ease-in-out;
	}

	.super-1 {
		animation: superFadeIn 1s ease-in-out;
	}

	.super-2 {
		animation: superFadeIn 1.2s ease-in-out;
	}

	.super-3 {
		animation: superFadeIn 1.8s ease-in-out;
	}

	.super-4 {
		animation: superFadeIn 2.2s ease-in-out;
	}

	@keyframes superFadeIn {
		0% {
			opacity: 0;
		}

		100% {
			opacity: .5;
		}
	}

	@keyframes superFadeInFull {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>