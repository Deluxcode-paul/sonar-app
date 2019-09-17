<template>
  <section :class="classNames">
      <div class="feature-block-vertical color-black fade fade-children visible">
          <h2 style="margin-bottom: 0.8em;">{{ title }}</h2>
          <div class="copy">
              <p class="lead" style="margin-bottom: 1.2em;" v-html="body"></p>
          </div>
          <div class="desktopVideo">
              <intersect @enter="videoPlay" @leave="videoPause">
                  <div style="min-height: 500px">
                      <transition
                              v-bind:enter-active-class="animation"
                              v-bind:leave-active-class="animation"
                      >
                          <div class="visual" v-if="show">
                              <video v-if="typeVideo !== 'webm'" height="auto" width="100%" ref="motionGraphic" autoplay muted playsinline loop>
                                  <source :src="mp4Url" type="video/mp4" />
                              </video>
                              <video v-if="typeVideo === 'webm'" height="auto" width="100%" ref="motionGraphic" autoplay muted playsinline loop>
                                  <source :src="mp4Url" type="video/webm" />
                              </video>
                          </div>
                      </transition>
                  </div>
              </intersect>
          </div>
          <div class="mobileVideo">
              <div class="visual">
                  <video v-if="typeVideo !== 'webm'" height="auto" width="100%" ref="motionGraphic" autoplay muted playsinline loop>
                      <source :src="mp4Url" type="video/mp4" />
                  </video>
                  <video v-if="typeVideo === 'webm'" height="auto" width="100%" ref="motionGraphic" autoplay muted playsinline loop>
                      <source :src="mp4Url" type="video/webm" />
                  </video>
              </div>
          </div>
          <div class="demoButton" v-if="buttonTrue">
              <router-link to="demo" class="cta icon">
                  <div class="svg-wrapperDemo">
                      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                          <rect :class="animate ? 'shapeDemo' : 'shapeNoAnimationDemo'" height="60" width="320" />
                      </svg>
                      <div class="textDemo">{{pageDemo}}</div>
                  </div>
              </router-link>
          </div>
      </div>
  </section>
</template>
<script>
  require('intersection-observer');
  require('vue2-animate/dist/vue2-animate.min.css');
  import Intersect from 'vue-intersect'

  export default {
    name: 'landingFeature',
    components: {
      Intersect
    },
    data: () => ({
        show: false,
        cssMagic: false,
        mp4Url: "",
        webmUrl: "",
        animate: false,
    }),
    props: {
      classNames: String,
      title: String,
      body: String,
      video: String,
      typeVideo: String,
      pageDemoUrl: String,
      pageDemo: String,
      buttonTrue: Boolean,
      animation: String,
    },
    methods: {
      videoPlay() {
        setTimeout(() =>
          this.show = true,
          this.cssMagic = true
        , 500)
      },
      videoPause() {
        this.$nextTick(() => {
          setTimeout(() =>
            this.cssMagic = false,
            this.show = false
          , 500)
        })
      }
    },
    mounted() {
        if (this.typeVideo === 'webm') {
            this.mp4Url = "/assets/video/" + this.video + ".webm";
        } else {
            this.mp4Url = "/assets/video/" + this.video + ".mp4";
        }
        this.$nextTick(() => {
            this.cssMagic = false;
        });
        setInterval(() => this.animate = !this.animate, 4000);
    },
  }
</script>
<style>
    .boldText {
        font-weight: 800 !important;
    }
</style>
<style lang="scss" scoped>
    .feature-block-vertical {
        padding: 0px 0 !important;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        h2 {
            text-transform: uppercase;
            font-size: 56px;
            font-weight: 600;
        }

        .lead {
            font-size: 32px;
        }
        .visual {
            display: flex;
            flex-direction: row;
            justify-content: center;
            height: 770px;
            padding: 40px 0 0;
        }
        .mobileVideo {
            display: none;
        }
        .demoButton {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin: 40px 0 !important;
            .cta {
                opacity: .7;
                transform:translateY(3px);
                svg {
                    transform: scale(1);
                    transition: all 240ms ease-in-out;
                }
                .svg-wrapperDemo {
                    transition: 1s;
                    height: 60px;
                    margin: 0 auto;
                    width: 320px;
                    .shapeDemo {
                        fill: transparent;
                        stroke-dasharray: 140 540;
                        stroke-dashoffset: -474;
                        stroke-width: 8px;
                        stroke: #07f;
                        animation: draw 4s ease infinite;
                    }
                    .shapeNoAnimationDemo {
                        fill: transparent;
                        stroke-dasharray: 140 540;
                        stroke-dashoffset: -474;
                        stroke-width: 8px;
                        stroke: #07f;
                    }
                    .textDemo {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        align-items: center;
                        color: #07f;
                        font-size: 22px;
                        position: relative;
                        height: 60px;
                        top: -60px;
                        text-align: center;
                    }
                }
            }
            .cta:hover {
                opacity: 1;
                transform:translateY(0px);
                svg {
                    transform: scale(1.1)
                }
            }

        }
    }
    .feature-block-vertical>* {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }

    @media(max-width: 1024px) {
        .desktopVideo {
            display: none;
        }
        .mobileVideo {
            display: flex !important;
            flex-direction: row;
            justify-content: center;
            .visual {
                margin: 0;
                padding: 0;
                height: 350px !important;
                min-height: 400px;
                video {
                    min-height: 400px;
                }
            }
        }
    }
    @media (max-width:1500px) {
        .paaddingAllBlock {
            padding: 50px 20px;
        }
    }
</style>
