<template>
    <div class="container">
        <div v-show="query" class="grid-2 center">
            <p class="span-2 lead color-black">Are you a current Sonar customer?</p>
            <a class="span-1 button deepblue">Yes</a>
            <a class="span-1 button silver">No</a>
        </div>
        <div v-show="tech">
        </div>
        <div v-show="sales">
        </div>
    </div>
</template>
<script>
export default {
    name: 'contactForm'
}
</script>
<style scoped>
</style>