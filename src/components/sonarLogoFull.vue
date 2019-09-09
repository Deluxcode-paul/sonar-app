<template>
    <div class="flex">
        <svg width="52" height="52" viewBox="0 0 30 30" class="george georgeSVG">
            <circle cx="15" cy="15" r="12" class="outer2"></circle>
            <circle cx="15" cy="15" r="12" class="outer3"></circle>
            <circle cx="15" cy="15" r="12" class="outer"></circle>
            <circle cx="15" cy="15" r="6" class="inner"></circle>
        </svg>
        <img class="dark-logo" :src="require('../../public/assets/brand/logo-text_only_white.png')">
        <img class="light-logo" :src="require('../../public/assets/brand/logo-text_only_black.png')">
    </div>
</template>
<script>
export default {
    name: "sonarLogo",
    props: {
        dark: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style scoped>
img {
    height: 11px;
    width: auto;
    margin-top: 16px;
    margin-left: 0px;
}

svg {
    max-width: 30px;
    margin-top: -5px;
}

.georgeSVG {
    overflow: visible !important;
    text-wrap: nowrap;
    vertical-align: middle;
    transition: all 0.4s;
}

.georgeSVG circle {
    transform-origin: 50% 50%;
    transition: all 0.4s;
}

.georgeSVG circle.outer3 {
    fill: #1d74f52b;
}

.georgeSVG circle.outer {
    fill: #1d74f52b;
    opacity: 0;
    transform: scale(0.1);
    animation: alecBloop 3s ease-in-out infinite;
}

.nav-blue .georgeSVG circle.outer,
.nav-night .georgeSVG circle.outer,
.nav-deepblue .georgeSVG circle.outer {
    fill: #1d74f5c4;
    opacity: 0;
    transform: scale(0.1);
    animation: alecBloop 3s ease-in-out infinite;
}

.georgeSVG circle.outer2 {
    fill: #1d74f52b;
    opacity: 0;
    transform: scale(0.1);
    animation: alecBloop 3.5s ease-in-out infinite;
}

.nav-blue .georgeSVG circle.outer2,
.nav-night .georgeSVG circle.outer2,
.nav-deepblue .georgeSVG circle.outer2 {
    fill: #1d74f5c4;
    opacity: 0;
    transform: scale(0.1);
    animation: alecBloop 3.5s ease-in-out infinite;
}

.georgeSVG circle.inner {
    fill: #1d74f5;
    transition-timing-function: cubic-bezier(0.36, -0.76, 0.31, 1.54);
}

.nav-blue .georgeSVG circle.inner,
.nav-night .georgeSVG circle.inner,
.nav-deepblue .georgeSVG circle.inner {
    fill: #fff;
    transition-timing-function: cubic-bezier(0.36, -0.76, 0.31, 1.54);
}

.dark-logo {
    display: none;
}

.light-logo {
    display: none;
}

.nav-blue .dark-logo,
.nav-night .dark-logo,
.nav-deepblue .dark-logo {
    display: inline-block !important;
}

.nav-blue .light-logo,
.nav-night .light-logo,
.nav-deepblue .light-logo {
    display: none !important;
}

.light-logo {
    display: inline-block;
}

.dark-logo,
.dark-logo,
.dark-logo {
    display: hidden;
}



.georgeSVG:active {
    transition-delay: 0.2s;
    filter: blur(5px);
}

/*! CSS Used keyframes */

@keyframes alecBloop {
    0 {
        transform: scale(0.1);
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}
</style>