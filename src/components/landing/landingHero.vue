<template>
    <div style="overflow: hidden; min-height: 800px">
        <section style=" min-height: 800px" id="header" :class="classNames">
            <div :class="[
          show
            ? 'container grid-2 gap-large center fade visible hero'
            : 'container grid-2 gap-large center fade not-visible hero'
        ]">
                <div style="z-index: 1" class="align-center-laptop width-s-tablet margin-s-top center-block-laptop">
                    <h1 class="mobile-small padding-xs-bottom headline-lead" :style="titleStyle">{{ title }}</h1>
                    <p class="lead color-silver hide-tablet">
                        {{ desktopBody }}
                    </p>
                    <p class="lead color-silver show-tablet">
                        {{ mobileBody }}
                    </p>
                    <router-link v-if="page !== 'Enterprise'" :to="ctaPage" class="margin-s-top button deepblue big input-xl">
                        {{ ctaBody }}
                    </router-link>
                </div>
                <div class="background-video show-desktop">
                    <intersect @enter="videoPlay" @leave="videoPause">
                        <video height="100%" width="auto" ref="motionGraphic" autoplay muted playsinline>
                            <source :src="[this.$isMobile() ? webmUrlSmall : webmUrl]" type="video/webm" />
                            <source :src="[this.$isMobile() ? mp4UrlSmall : mp4Url]" type="video/mp4" />
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
            webmUrlSmall: ""
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
        videoPlay() {
            this.show = true
            this.$refs.motionGraphic.play()
        },
        videoPause() {
            this.$nextTick(function() {
                this.show = false
                this.$refs.motionGraphic.pause()
                this.$refs.motionGraphic.currentTime = '0'
            })
        }
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
    }
}
</script>


<style scoped>

p.lead {
    font-size: 24px;
    line-height: 1.5em;
}

@media (max-width: 475px) {
    .size-h1.mobile-small,
    h1.mobile-small {
		font-size: 3.5em;
    }
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
    width: 1080px;
    top: 0;
    left: -300px;
    overflow: hidden;
}

video {
    max-width: 1080px !important;
    min-width: 800px !important;
}

.hero {
    max-width: 1150px;
    height: 700px
}

</style>
