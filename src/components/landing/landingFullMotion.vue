<template>
  <section :class="classNames">
    <intersect @enter="videoPlay" @leave="videoPause">
      <div>
        <div style="width: 100%">
          <video height="auto" width="100%" ref="motionGraphic" autoplay muted loop playsinline>
            <source :src="[this.$isMobile() ? webmUrlSmall : webmUrl]" type="video/webm" />
            <source :src="[this.$isMobile() ? mp4UrlSmall : mp4Url]" type="video/mp4" />
          </video>
        </div>
      </div>
    </intersect>
  </section>
</template>


<script>
  // vue-intersect polyfill
  require('intersection-observer');
  // vue-intersect
  import Intersect from 'vue-intersect'

  export default {
    name: 'landingFullMotion',
    components: {
      Intersect
    },
    data() {
      return {
        cssMagic: false,
        mp4Url: "",
        webmUrl: "",
        mp4UrlSmall: "",
        webmUrlSmall: ""
      }
    },
    props: {
      classNames: String,
      title: String,
      body: String,
      ctaBody: String,
      ctaPage: String,
      video: String,
    },
    methods: {
      videoPlay() {
        this.$refs.motionGraphic.play()
      },
      videoPause() {
        this.$nextTick(() => {
          this.$refs.motionGraphic.currentTime = '0'
          this.$refs.motionGraphic.pause()
        })
      }
    },
    mounted: function () {
      this.mp4Url = "/assets/motion/" + this.video + ".mp4"
      this.webmUrl = "/assets/motion/" + this.video + ".webm"
      this.mp4UrlSmall = "/assets/motion/" + this.video + "_small.mp4"
      this.webmUrlSmall = "/assets/motion/" + this.video + "_small.webm"
    },
    beforeDestroy: function () {}
  }
</script>

<style scoped>
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