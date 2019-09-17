<template>
    <div class="">
        <div class="demoCard">
            <i class="icon-rocket"></i>
            <h3>We're here to help</h3>
            <div class="buttonDemoCards">
                <a href="/demo/express" target="_blank" class="demoCard&#45;&#45;inner">
                    <div class="svg-wrapperDemoCards">
                        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                            <rect :class="animate ? 'shapeDemo' : 'shapeDemoNoAnimation'" height="60" width="320" />
                        </svg>
                        <div class="text">Schedule a Demo Now!</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'landingDemoCards',
        data() {
            return {
                btnOps: {
                    duration: 1300,
                    easing: "easeInExpo",
                    size: 3,
                    speed: 1,
                    particlesAmountCoefficient: 10,
                    oscillationCoefficient: 1,
                    label: "Refresh"
                },
                animate: true,
            }
        } ,
        mounted() {
            setInterval(() => this.animate = !this.animate, 4000);
        }
    }
</script>
<style lang="scss">
    /*.vue-particle-effect-button .particles-button {*/
    /*    background:  #fff !important;*/
    /*}*/
    .svg-wrapperDemoCards {
        height: 60px;
        margin: 0 auto;
        position: relative;
        /*transform: translateY(-50%);*/
        width: 320px;
        .shapeDemo {
            fill: transparent;
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
            stroke: #fff;
            animation: draw 4s ease infinite;
        }
        .shapeDemoNoAnimation {
            fill: transparent;
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
            stroke: #fff;
        }
        .text {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            color: #fff;
            font-size: 22px;
            height: 60px;
            /*letter-spacing: 8px;*/
            /*line-height: 32px;*/
            position: relative;
            top: -60px;
            text-align: center;
        }
    }

    @keyframes draw {
        0% {
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
        }
        100% {
            stroke-dasharray: 760;
            stroke-dashoffset: 0;
            stroke-width: 2px;
        }
    }
</style>
<style lang="scss" scoped>
    .demoCard {
        padding: 50px 0;
        min-height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3 {
            text-transform: uppercase;
            font-size: 56px;
            color: #fff;
            margin: 0;
            text-align: center;
            font-weight: 600;
        }
        .buttonDemoCards {
            /*margin: 0 0 50px;*/
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
    .icon-rocket {
        color: #fff;
        /*margin: 50px 0 0;*/
        font-size: 120px;
        text-align: center;
    }
    @media (max-width: 320px) {
        .svg-wrapperDemoCards {
            position: relative;
            right: 30px;
        }
    }
</style>
