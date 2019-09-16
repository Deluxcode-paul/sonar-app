<template>
  <section :class="classNames">
      <div class="feature-block-vertical color-black fade fade-children visible">
        <h2 class="width-l" style="margin-bottom: 0.8em;">{{ title }}</h2>
        <div class="copy">
          <p class="lead" style="margin-bottom: 1.2em;">{{ body }}</p>
        </div>
          <div class="desktopVideo">
              <intersect @enter="videoPlay" @leave="videoPause">
                  <div style="min-height: 500px">
                      <transition
                              v-bind:enter-active-class="animation"
                              v-bind:leave-active-class="animation"
                      >
                          <div class="visual" v-if="show">
                              <video height="auto" width="100%" ref="motionGraphic" autoplay muted playsinline>
                                  <source :src="mp4Url" type="video/mp4" />
                              </video>
                          </div>
                      </transition>
                  </div>
              </intersect>
          </div>
          <div class="mobileVideo">
              <div class="visual">
                  <video height="auto" width="100%" ref="motionGraphic" autoplay muted playsinline>
                      <source :src="mp4Url" type="video/mp4" />
                  </video>
              </div>
          </div>
          <div class="demoButton" v-if="buttonTrue">
              <a :href="pageDemoUrl" class="cta icon">
                  <div class="svg-wrapperDemo">
                      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                          <rect :class="animate ? 'shapeDemo' : 'shapeNoAnimationDemo'" height="60" width="320" />
                      </svg>
                      <div class="textDemo">{{pageDemo}}</div>
                  </div>
              </a>
          </div>
      </div>
  </section>
</template>
<script>
  // vue-intersect polyfill
  require('intersection-observer');
  require('vue2-animate/dist/vue2-animate.min.css');
  // vue-intersect
  import Intersect from 'vue-intersect'

  export default {
    name: 'landingFeature',
    components: {
      Intersect
    },
    data() {
      return {
        show: false,
        show2: false,
        cssMagic: false,
        mp4Url: "",
        webmUrl: "",
        mp4UrlSmall: "",
        webmUrlSmall: "",
        animate: false,
      }
    },
    props: {
      classNames: String,
      title: String,
      body: String,
      ctaBody: String,
      ctaPage: String,
      video: String,
      pageDemoUrl: String,
      pageDemo: String,
      buttonTrue: Boolean,
      buttonTrueWatch: Boolean,
      animation: String,
    },
    methods: {
      videoPlay() {
        setTimeout(() =>
          this.show = true,
          this.cssMagic = true
        // this.$refs.motionGraphic.play()
        , 500)
      },
      videoPause() {
        this.$nextTick(() => {
          setTimeout(() =>
            this.cssMagic = false,
            this.show = false
          // this.$refs.motionGraphic.currentTime = '0',
          // this.$refs.motionGraphic.pause()
          , 500)
        })
      }
    },
    mounted: function () {
      this.mp4Url = "/assets/video/" + this.video + ".mp4";

      this.$nextTick(() => {
        this.cssMagic = false;
      });
      setInterval(() => this.animate = !this.animate, 4000);
    },
    beforeDestroy: function () {}
  }
</script>

<style lang="scss" scoped>
  /*@import "<PATH_TO_SOURCE>/src/sass/vue2-animate.scss";*/
  .visual {
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 770px;
      padding: 40px 0 0;
  }
  .whitned {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      height: 770px;
  }

  .whitned::before {
      width: 100%;
      height: 690px;
      content: '';
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
      z-index: 1;
  }

  img {
      min-width: 720px;
      min-height: 760px;
  }
.cta {
    opacity: .7;
    transform:translateY(3px);
}

.cta svg {
    transform: scale(1);
    transition: all 240ms ease-in-out;
}


.cta:hover {
    opacity: 1;
    transform:translateY(0px);
}

.cta:hover svg {
    transform: scale(1.1)
}
  .feature-block-vertical {
      padding: 0px 0 !important;
  }

  .feature-block-vertical>* {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
  }

  @media (max-width: 600px) {
    .visual {
      margin-top: 4em;
    }

    /*section {*/
    /*  padding-bottom: 4em;*/
    /*}*/
  }



  @keyframes spinX {
    0% {
      transform: rotate(-400deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes pushUp {
    0% {
      transform: translateY(-50px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  .lightDemoButton {
    max-width: 100%;
    text-align: center;
    position: fixed;
    font-size: 2em;
    cursor: pointer;
    font-weight: 600;
    border-radius: 10px;
    background: rgba(35, 88, 248, 1);
    display: block;
    line-height: 0;
    padding: 27px 21px;
    z-index: 99999;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    opacity: 0;
    transition: all 240ms ease-in-out;
  }

  .lightDemoButton svg {
    fill: white;
    color: white;
    margin-left: 5px;
    max-height: 0.6em;
  }

  a.lightDemoButton.show:hover {
    padding: 30px 24px !important;
    background: rgb(0, 63, 255) !important
  }

  .video-play-button {
    position: absolute;
    z-index: 11;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    box-sizing: content-box;
    display: block;
    width: 32px;
    height: 44px;
    /* background: #fa183d; */
    border-radius: 50%;
    padding: 18px 20px 18px 28px;
    transition: all 850ms ease-in-out;
  }

  .video-play-button:hover {
    cursor: pointer;
    position: absolute;
    z-index: 11;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%) scale(1.2);
    box-sizing: content-box;
    display: block;
    width: 32px;
    height: 44px;
    background: #0052f5;
    border-radius: 50%;
    padding: 18px 20px 18px 28px;
  }


  .video-play-button:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 11;
    display: block;
    width: 80px;
    height: 80px;
    background: #0052f5;
    border-radius: 50%;
    -webkit-animation: pulse-border 2500ms ease-out infinite;
    animation: pulse-border 2500ms ease-in-out infinite;
  }

  .video-play-button img {
    position: relative;
    z-index: 11;
    max-width: 100%;
    width: auto;
    height: auto;
  }

  .video-play-button span {
    display: block;
    position: relative;
    z-index: 11;
    width: 0;
    height: 0;
    border-left: 32px solid #fff;
    border-top: 22px solid transparent;
    border-bottom: 22px solid transparent;
  }

  @-webkit-keyframes pulse-border {
    0% {
      -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0) scale(0);
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
      opacity: 0;
    }

    50% {
      opacity: 0.8;
    }

    90% {
      opacity: 0;
    }

    100% {
      -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
      opacity: 0;
    }
  }

  @keyframes pulse-border {
    0% {
      -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0) scale(0);
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
      opacity: 0;
    }

    50% {
      opacity: 0.8;
    }

    90% {
      opacity: 0;
    }

    100% {
      -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
      opacity: 0;
    }
  }
  .mobileVideo {
      display: none;
  }
  .svg-wrapperDemo {
      transition: 1s;
      height: 60px;
      margin: 0 auto;
      /*transform: translateY(-50%);*/
      width: 320px;
  }

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
      /*letter-spacing: 8px;*/
      /*line-height: 32px;*/
      position: relative;
      height: 60px;
      top: -60px;
      text-align: center;
  }
  .demoButton {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 40px;
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

    @media(max-width: 1024px) {
        .desktopVideo {
            display: none;
        }
        .mobileVideo {
            display: flex;
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
