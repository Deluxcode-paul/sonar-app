<template>
    <div :class="[show == true ? 'cookies notification bottom static enable' : 'cookies notification bottom static disable']">
        <div id="cookie-popup">
            <h6></h6>
            <div class="cc-message padding-xs-bottom">As shown in our
                <a href="/tos" target="_blank">Terms of Service</a>, Sonar uses cookies to analyze site performance and tailor our content to your&nbsp;interests.</div>
            <div class="add-margin-tablet-s">
                <a @click="show = false" tabindex="0" class="cc-btn cc-allow button deepblue">Allow</a>
                <a @click="show = false" tabindex="0" class="cc-btn cc-deny button white">Decline</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'cookieAgree',
    data() {
        return {
            show: {
                type: Boolean,
                default: true
            }
        }
    },
    mounted() {
        this.show = true;
    }
}
</script>
<style scoped>
.disable {
    transition: all 500ms ease;
    opacity: 0 !important;
}
</style>