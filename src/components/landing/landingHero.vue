<template>
    <div style="overflow: hidden; min-height: 100vh">
        <section class="center-blockHeader padding-l" :class="classNames">
            <div class="center-blockHeader container">
                <div class="titleHeader">
                    <h1 class="mobile-small padding-xs-bottom headline-lead" :style="titleStyle">{{ title }}</h1>
                    <p class="lead color-silver" v-html="desktopBody"></p>
                    <router-link v-if="page !== 'Enterprise'" :to="ctaPage">
                        <div class="svg-wrapper">
                            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                                <rect :class="animate ? 'shape' : 'shapeNoAnimation'" height="60" width="320" />
                            </svg>
                            <div class="text">{{ctaBody}}</div>
                        </div>
                    </router-link>
                </div>
                <div class="videoBlockHeader">
                    <intersect>
                        <video height="auto" width="900px" ref="motionGraphic" autoplay muted playsinline loop>
                            <source src="/assets/video/home/sonarHeader.webm" type="video/webm" />
                        </video>
                    </intersect>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
require('intersection-observer');
import Intersect from 'vue-intersect'

export default {
    name: 'landingHero',
    components: {
        Intersect
    },
    data: () => ({
        webmUrl: "",
        animate: true,
    }),
    props: {
        titleStyle: String,
        classNames: String,
        video: String,
        title: String,
        desktopBody: String,
        ctaBody: String,
        ctaPage: String,
        page: String,
    },
    mounted() {
        setInterval(() => this.animate = !this.animate, 4000);
    }
}
</script>
<style  lang="scss" >
    .homeBkStyle {
        background: linear-gradient(-90deg, #010125, #000246,  #243B77, #01013E, #010125);
        background-size: 400% 400%;
        animation: gradientBG 3s ease infinite;
    }
    @keyframes gradientBG {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    .center-blockHeader {
        p {
            .noBr {
                display: inline-block;
            }
        }
    }
    .svg-wrapper {
        height: 60px;
        margin: 50px auto;
        position: relative;
        width: 320px;
        transition: 1s;
        .shape {
            fill: transparent;
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
            stroke: #07f;
            animation: draw 4s ease infinite;
        }
        .shapeNoAnimation {
            fill: transparent;
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
            stroke: #07f;
        }
        .text {
            color: #fff;
            font-size: 22px;
            top: -45px;
            position: relative;
            text-align: center;
        }
    }
    .svg-wrapper:hover {
        height: 60px;
        margin: 50px auto;
        position: relative;
        width: 320px;
        background: #07f;
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
    .padding-l {
        padding-top: 0 !important;
        padding-bottom:  0 !important;
    }
</style>
<style lang="scss" scoped>
    .center-blockHeader {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        min-height: 100vh;
        .titleHeader {
            width: 50%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 15px;
            h1 {
                margin-bottom: 100px;
                .mobile-small {
                    letter-spacing: -2px;
                }
            }
            p {

            }
            .lead {
                font-size: 24px;
                line-height: 1.5em;
            }
        }
        .videoBlockHeader {
            position: absolute;
            left: 70%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 15px;
            video {
                max-width: 900px !important;
                min-width: 900px !important;
            }
        }
        .padding-l {
            padding-top: 0 !important;
            padding-bottom:  0 !important;
        }
    }
    @media (max-width: 1100px) {
        .videoBlockHeader {
            display: none !important;
        }
        .titleHeader {
            width: 100% !important;
            padding: 0 !important;
        }
    }
    @media (max-width: 475px) {
        .center-blockHeader {
            min-height: 120px !important;
        }
        .mobile-small {
            font-size: 3.5em;
        }
        .container {
            padding: 0 !important;
        }
        .titleHeader {
            min-height: 120vh;
            width: 100%;
            padding: 0 !important;
        }
        .padding-l {
            padding-top: 100px !important;
            padding-bottom: 100px !important;
        }
        .svg-wrapper {
            margin: 40px auto;
        }
    }
    @media (min-width: 568px) and (max-width: 1024px) {
        .center-blockHeader{
            .titleHeader{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
             h1 {
                 margin-bottom: 0px;
             }
            }
            .svg-wrapper {
                margin: 0;
            }
        }
    }
    @media (max-width: 320px) {
        .svg-wrapper {
            position: relative;
            right: 25px;
        }
    }

</style>
