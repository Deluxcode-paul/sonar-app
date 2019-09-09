<template>
  <section id="components" :class="classNames">
      <intersect @enter="videoPlay" @leave="videoPause">
        <div
          :class="[
            cssMagic
              ? 'feature-block flipped fade visible'
              : 'feature-block flipped fade'
          ]"
        >
          <div class="visual queue-1">
            <video height="auto" width="100%" ref="motionGraphic" autoplay muted playsinline>
              <source :src="[this.$isMobile() ? webmUrlSmall : webmUrl]" type="video/webm" />
              <source :src="[this.$isMobile() ? mp4UrlSmall : mp4Url]" type="video/mp4" />
            </video>
          </div>
          <div class="width-m">
            <h2>
              {{ title }}
            </h2>
            <p class="margin-xs-bottom lead" style="color: rgba(255,255,255,0.81);">{{ body }}</p>
            <router-link
              v-show="showButton"
              :to="ctaPage"
              class="cta icon color-white download-cta"
            >
              <svg width="26" height="26">
                <path
                  d="M13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 C 0 5.82 5.82 0 13 0 Z"
                  fill="#fff"
                ></path>
                <path
                  d="M12 7 C 12 6.448 12.448 6 13 6 L 13 6 C 13.552 6 14 6.448 14 7 L 14 17 C 14 17.552 13.552 18 13 18 L 13 18 C 12.448 18 12 17.552 12 17 Z"
                  fill="#05f"
                ></path>
                <path
                  d="M9 15 L 13 19 L 17 15"
                  fill="transparent"
                  stroke-width="2"
                  stroke="#05f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              {{ ctaBody }}
            </router-link>
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
  name: 'landingFeatureRtl',
  components: {
    Intersect
  },
  data() {
    return {
      cssMagic: Boolean,
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
        this.cssMagic = false;
        this.$refs.motionGraphic.currentTime = '0';
        this.$refs.motionGraphico.pause()
      }
    })
  }
  },
  mounted: function() {
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

.bg-white .lead {
color:#353535 !important;
}

</style>
