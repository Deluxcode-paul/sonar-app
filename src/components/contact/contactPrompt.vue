<template>
<div class="contactPrompt">
	<p class="lead">Are you a current Sonar customer?</p>
	<div class="flex-inline">
	<sButton color="deepblue">Yes</sButton>
	<sButton color="white" class="margin-xs-left">No</sButton>
</div>
</div>
</template>

<script>
	import sButton from '@/components/basic/button.vue';

	export default {
		name: 'contactPrompt',
		components: { sButton }
	}
</script>

<style scoped>
.contactPrompt {
	max-width: 90%;
	padding: 3em;
	background: rgba(0,0,0,0.01);
	border-radius: 4px;
}
</style>