<template>
  <section id="components" :class="classNames">
    <div :class="[
        cssMagic
          ? 'feature-block flipped-nm fade visible'
          : 'feature-block flipped-nm fade'
      ]">
      <div class="width-m">
        <h2>
          {{ title }}
        </h2>
        <p class="margin-xs-bottom lead color-black">{{ body }}</p>
        <a v-show="showButton" v-on:click="lightBoxOpen()" class="cta icon color-deepblue download-cta">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"
            style=" fill:#0052f5;">
            <path
              style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#0052f5;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal;margin-right: -4px;"
              d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 5 C 21 3.9069372 20.093063 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 9 8 L 9 16 L 16 12 L 9 8 z"
              font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"></path>
          </svg> {{ ctaBody }}
        </a>
      </div>
      <intersect @enter="videoPlay" @leave="videoPause">
        <div v-on:click="lightBoxOpen()" width="100%" height="100%" class="visual queue-1">
          <div class="video-play-button">
            <span></span>
          </div>
          <video height="auto" width="100%" ref="motionGraphic" autoplay muted playsinline>
            <source :src="[this.$isMobile() ? webmUrlSmall : webmUrl]" type="video/webm" />
            <source :src="[this.$isMobile() ? mp4UrlSmall : mp4Url]" type="video/mp4" />
          </video>
        </div>
      </intersect>
    </div>

    <div ref="lightBox" class="lightBox" id="lightBox">
      <a class="lightDemoButton" ref="lightDemoButton">
        <router-link style="color: white" to="demo">
          <span class="hide-tablet">Book a demo</span>
          <span class="show-tablet">Demo</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </router-link>
      </a>

      <div id="lightBoxContainer">
        <a id="lightBoxClose" class="lightBoxClose" v-on:click="lightBoxClose()"></a>
        <video ref="lightBoxVideo" id="lightBoxVideo" controls>
          <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script>
  // vue-intersect polyfill
  require('intersection-observer');
  // vue-intersect
  import Intersect from 'vue-intersect'

  export default {
    name: 'landingFeatureLtrVideo',
    components: {
      Intersect
    },
    data() {
      return {
        cssMagic: true,
	mp4Url: "",
	webmUrl: "",
	mp4UrlSmall: "",
	webmUrlSmall: ""
      }
    },
    props: {
      enableAnimations: {
        type: Boolean,
        required: true
      },
      showButton: {
        type: Boolean,
        required: true
      },
      classNames: {
        type: String,
        required: true
      },
      video: String,
      title: {
        type: String,
        required: true
      },
      body: {
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
      }
    },
    methods: {
      videoPlay() {
        this.cssMagic = true
        this.$refs.motionGraphic.play()
      },
      videoPause() {
        this.$nextTick(() => {
          if (this.enableAnimations == false) {
            this.cssMagic = true
          } else {
            this.cssMagic = false
            this.$refs.motionGraphic.currentTime = '0'
            this.$refs.motionGraphic.pause()
          }
        })
      },
      lightBoxOpen() {
        this.hideLightDemoButton()
        this.$refs.lightBox.style.display = 'block'
        this.$refs.lightBoxVideo.play()
      },
      lightBoxClose() {
        this.$refs.lightBox.style.display = 'none'
        this.$refs.lightBoxVideo.pause()
      },
      showLightDemoButton() {
        this.$refs.lightDemoButton.classList.add('show')
      },
      hideLightDemoButton() {
        this.$refs.lightDemoButton.classList.remove('show')
      }
    },
    mounted: function () {
      this.mp4Url = "/assets/motion/" + this.video + ".mp4"
      this.webmUrl = "/assets/motion/" + this.video + ".webm"
      this.mp4UrlSmall = "/assets/motion/" + this.video + "_small.mp4"
      this.webmUrlSmall = "/assets/motion/" + this.video + "_small.webm"

      this.$nextTick(() => {
        if (this.enableAnimations == false) {
          this.cssMagic = true
          this.$refs.motionGraphic.play()
        }
        this.$refs.lightBoxVideo.addEventListener(
          'pause',
          this.showLightDemoButton,
          false
        )
        this.$refs.lightBoxVideo.addEventListener(
          'playing',
          this.hideLightDemoButton,
          false
        )
      })
    },
    beforeDestroy: function () {
      this.$refs.lightBoxVideo.removeEventListener(
        'pause',
        this.showLightDemoButton,
        false
      )
      this.$refs.lightBoxVideo.removeEventListener(
        'playing',
        this.hideLightDemoButton,
        false
      )
    }
  }
</script>

<style scoped>
  .show {
    opacity: 1 !important;
    transform: translate(-50%, -50%) !important;
  }

  #lightBox {
    overflow: visible;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    -webkit-transform: translateZ(50px);
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgba(0, 0, 0, 0.95);
  }

  #lightBoxContainer {
    -webkit-transform: translateZ(0px);
    position: absolute;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #lightBoxContainer video {
    -webkit-transform: translateZ(0px);
    border-radius: 7px;
    min-width: 80vw;
    animation: pushUp 400ms ease-in-out;
  }

  #lightBoxContainer .lightBoxClose {
    float: right;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    background: #222222c7;
    display: inline-block;
    line-height: 0px;
    padding: 15px;
    position: absolute;
    top: -70px;
    left: 0px;
    z-index: 1002;
    opacity: 0.5;
    transition: all 250ms ease-in-out;
  }

  .lightBoxClose:before {
    content: url("data:image/svg+xml; utf8, <svg style='color: white; fill: white; max-height: 1em;' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'/></svg>");
  }

  #lightBoxContainer .lightBoxClose:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  #lightBoxClose.lightBoxClose {
    animation: spinX 700ms ease-in-out;
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
    cursor: pointer;
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

  .video-play-button:after {}

  .video-play-button:hover:after {}

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