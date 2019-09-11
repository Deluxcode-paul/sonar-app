<template>
  <section :class="classNames">
      <div class="feature-block-vertical color-black fade fade-children visible">
        <h2 class="width-l" style="margin-bottom: 0.8em;">{{ title }}</h2>
        <div class="copy">
          <p class="lead" style="margin-bottom: 1.2em;">{{ body }}</p>
          <div v-if="buttonTrue">
            <a :href="ctaPage" class="cta icon">
              <svg width="26" height="26" style="margin-right: 3px">
                      <path
                              d="M 13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 C 0 5.82 5.82 0 13 0 Z"
                              fill="#05f"></path>
                      <path
                              d="M 12 7 C 12 6.448 12.448 6 13 6 L 13 6 C 13.552 6 14 6.448 14 7 L 14 17 C 14 17.552 13.552 18 13 18 L 13 18 C 12.448 18 12 17.552 12 17 Z"
                              fill="hsl(0, 0%, 100%)"></path>
                      <path d="M 9 15 L 13 19 L 17 15" fill="transparent" stroke-width="2" stroke="hsl(0, 0%, 100%)"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
              {{ ctaBody }}
            </a>
            <a :href="pageDemoUrl" class="cta icon">
              <svg width="26" height="26" style="margin-right: 3px">
                      <path
                              d="M 13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 C 0 5.82 5.82 0 13 0 Z"
                              fill="#05f"></path>
                      <path
                              d="M 12 7 C 12 6.448 12.448 6 13 6 L 13 6 C 13.552 6 14 6.448 14 7 L 14 17 C 14 17.552 13.552 18 13 18 L 13 18 C 12.448 18 12 17.552 12 17 Z"
                              fill="hsl(0, 0%, 100%)"></path>
                      <path d="M 9 15 L 13 19 L 17 15" fill="transparent" stroke-width="2" stroke="hsl(0, 0%, 100%)"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
              {{ pageDemo }}
            </a>
          </div>
<!--           <a href="#" class="cta icon">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path fill="#05f" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/></svg>-->
<!--              Watch-->
<!--            </a>-->
        </div>

        <intersect @enter="videoPlay" @leave="videoPause">
          <div style="min-height: 700px">
            <transition
                    v-bind:enter-active-class="animation"
                    v-bind:leave-active-class="animation"
            >
              <div class="visual whitned" v-if="show">
                  <video height="690px" width="100%" ref="motionGraphic" autoplay muted playsinline>
                      <source v-if="video === 'BillingRecovered'" src="../../../public/assets/video/cable/BillingLong.mp4" type="video/mp4" />
                      <source v-if="video === 'Provisioning'" src="../../../public/assets/video/cable/Provisioning.mp4" type="video/mp4" />
                      <source v-if="video === 'Network'" src="../../../public/assets/video/cable/NetworkLong.mp4" type="video/mp4" />
                  </video>
              </div>
            </transition>
          </div>
        </intersect>
<!--        <div class="visual">-->
<!--          <div class="video-play-button"><span></span></div>-->
<!--          <video height="auto" width="100%" ref="motionGraphic" autoplay muted playsinline>-->
<!--            <source :src="[this.$isMobile() ? webmUrlSmall : webmUrl]" type="video/webm" />-->
<!--            <source :src="[this.$isMobile() ? mp4UrlSmall : mp4Url]" type="video/mp4" />-->
<!--          </video>-->
<!--        </div>-->
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
      this.mp4Url = "/assets/motion/" + this.video + ".mp4"
      this.webmUrl = "/assets/motion/" + this.video + ".webm"
      this.mp4UrlSmall = "/assets/motion/" + this.video + "_small.mp4"
      this.webmUrlSmall = "/assets/motion/" + this.video + "_small.webm"

      this.$nextTick(() => {
        this.cssMagic = false;
      })
    },
    beforeDestroy: function () {}
  }
</script>

<style scoped>
  /*@import "<PATH_TO_SOURCE>/src/sass/vue2-animate.scss";*/
  .visual {
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 770px;
      padding: 40px 0;
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
      padding: 30px 0 !important;
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

    section {
      padding-bottom: 4em;
    }
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
</style>
