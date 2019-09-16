<template>
    <div style="overflow: hidden; min-height: 100vh">
        <section class="center-blockHeader padding-l" :class="classNames">
            <div class="center-blockHeader container">
                <div class="titleHeader">
                    <h1 class="mobile-small padding-xs-bottom headline-lead" :style="titleStyle">{{ title }}</h1>
                    <p class="lead color-silver hide-tablet">
                        {{ desktopBody }}
                    </p>
                    <p class="lead color-silver show-tablet">
                        {{ mobileBody }}
                    </p>
                    <router-link v-if="page !== 'Enterprise'" :to="ctaPage" class="">
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
                        <video height="auto" width="900px" ref="motionGraphic" autoplay muted playsinline>
                            <source  src="https://braveux.com/assets/videos/work/sonar/sonar-icmp.webm" type="video/webm" />
                        </video>
                    </intersect>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
	
// vue-intersect polyfill
require('intersection-observer');

// vue-intersect
import Intersect from 'vue-intersect'

export default {
    name: 'landingHero',
    components: {
        Intersect
    },
    data() {
        return {
            mp4Url: "",
            webmUrl: "",
            mp4UrlSmall: "",
            webmUrlSmall: "",
            animate: true,
        }
    },
    props: {
        show: Boolean,
        titleStyle: String,
        classNames: {
            type: String,
            required: true
        },
        video: String,
        title: {
            type: String,
            required: true
        },
        desktopBody: {
            type: String,
            required: true
        },
        mobileBody: {
            type: String,
            required: true
        },
        ctaBody: {
            type: String,
            required: true
        },
        ctaPage: {
            type: String,
            required: true
        },
        page: {
            type: String,
            required: true
        }
    },
    methods: {
    },
    mounted: function() {
        this.mp4Url = "/assets/motion/" + this.video + ".mp4"
        this.webmUrl = "/assets/motion/" + this.video + ".webm"
        this.mp4UrlSmall = "/assets/motion/" + this.video + "_small.mp4"
        this.webmUrlSmall = "/assets/motion/" + this.video + "_small.webm"
        this.$nextTick(function() {
            this.show = true;
            this.$refs.motionGraphic.play();
        })
        setInterval(() => this.animate = !this.animate, 4000);
    }
}
</script>

<style  lang="scss" >
    .landingHero .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
        color: #fff;
        background: #07f;
        height: 50px;
        cursor: pointer;
        animation: bookDemoShadow 5s ease infinite;
    }

    @keyframes bookDemoShadow {
        0% {
            box-shadow: 0 0 60px rgba(255, 255, 255, 0.3);
        }
        50% {
            box-shadow: 0 0 80px rgba(255, 255, 255, 0.8);
        }
        100% {
            box-shadow: 0 0 60px rgba(255, 255, 255, 0.3);
        }
    }

    .homeBkStyle {
        background: linear-gradient(-90deg,  #000232, #000219,  #01012d);
        background-size: 400% 400%;
        animation: gradientBG 5s ease infinite;
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

    .svg-wrapper {
        height: 60px;
        margin: 0 auto;
        position: relative;
        top: 70px;
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
            position: relative;
            text-align: center;
        }
    }
    .svg-wrapper:hover {
        height: 60px;
        margin: 0 auto;
        position: relative;
        top: 70px;
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
        }
        .padding-l {
            padding-top: 0 !important;
            padding-bottom:  0 !important;
        }
    }

p.lead {
    font-size: 24px;
    line-height: 1.5em;
}


.size-h1.mobile-small, h1.mobile-small {
    letter-spacing: -2px;
}

.background-video {
    position: relative;
    width: 100%;
    height: 100%;
}

.background-video video {
    position: absolute;
    width: 505px;
    top: 0;
    bottom: 0;
    overflow: hidden;
}

video {
    max-width: 900px !important;
    min-width: 900px !important;
}

.hero {
    max-width: 1150px;
    min-height: 100vh;
}
    .landingHero {
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        .size-h1.mobile-small,
        h1.mobile-small {
            font-size: 3.5em;
        }
        .container {
            padding: 0 !important;
        }
        .titleHeader {
            width: 100%;
            padding: 0 !important;
        }
        .padding-l {
            padding-top: 0 !important;
            padding-bottom:  100px !important;
        }
    }

</style>
