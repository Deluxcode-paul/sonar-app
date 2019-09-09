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
        <router-link v-show="showButton" :to="ctaPage" class="cta icon color-deepblue download-cta">
          <svg width="26" height="26">
            <path
              d="M13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 C 0 5.82 5.82 0 13 0 Z"
              fill="#05f"></path>
            <path
              d="M12 7 C 12 6.448 12.448 6 13 6 L 13 6 C 13.552 6 14 6.448 14 7 L 14 17 C 14 17.552 13.552 18 13 18 L 13 18 C 12.448 18 12 17.552 12 17 Z"
              fill="#fff"></path>
            <path d="M9 15 L 13 19 L 17 15" fill="transparent" stroke-width="2" stroke="#fff" stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
          {{ ctaBody }}
        </router-link>
      </div>
      <intersect @enter="videoPlay" @leave="videoPause">
        <div width="100%" height="100%" class="visual queue-1">
          <video height="auto" width="100%" ref="motionGraphic" autoplay muted playsinline>
            <source :src="[this.$isMobile() ? webmUrlSmall : webmUrl]" type="video/webm" />
            <source :src="[this.$isMobile() ? mp4UrlSmall : mp4Url]" type="video/mp4" />
          </video>
        </div>
      </intersect>
    </div>
  </section>
</template>

<script>
  // vue-intersect polyfill
  require('intersection-observer');
  // vue-intersect
  import Intersect from 'vue-intersect'

  export default {
    name: 'landingFeatureLtr',
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
      innerClassNames: {
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
        if (this.enableAnimations == false) {
          this.cssMagic = true
        } else {
          this.$nextTick(function () {
            this.cssMagic = false
            this.$refs.motionGraphic.currentTime = '0'
            this.$refs.motionGraphic.pause()
          })
        }
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
      })
    }
  }
</script>

<style scoped>
</style>