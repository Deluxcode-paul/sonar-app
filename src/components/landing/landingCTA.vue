<template>
  <div id="pivot">
    <div :class="ctaClassNames">
      <div class="center-block align-center-laptop padding-s-all">
        <h3 class="margin-xs-bottom">{{ title }}</h3>
        <p class="lead color-opaque center-block">{{ subtitle }}</p>
        <router-link
          v-show="showButton"
          :to="buttonPage"
          :class="buttonClass"
        >
          <svg width="26" height="26">
            <path
              :d="svgInfo"
              fill="#ffffff"
            ></path>
          </svg>
          <slot></slot>
          {{ button }}
        </router-link>
      </div>
      <intersect @enter="ctaShow()" @leave="ctaHide()">
        <div
          :class="[
            ctaShowBool
              ? 'flex flex-end hide-tablet strip-top-laptop cta-show'
              : 'flex flex-end hide-tablet strip-top-laptop'
          ]"
        >
          <img :class="imageClass" :src="imageSource" />
        </div>
      </intersect>
    </div>
  </div>
</template>

<script>
// vue-intersect polyfill
require('intersection-observer');
// vue-intersect
import Intersect from 'vue-intersect'

export default {
  name: 'landingCTA',
  components: {
    Intersect
  },
  props: {
    ctaShowBool: Boolean,
    title: String,
    svgInfo: String,
    imageSource: String,
    subtitle: String,
    showButton: Boolean,
    button: String,
    buttonClass: String,
    imageClass: String,
    buttonPage: String,
    ctaClassNames: {
      type: String,
      required: true
    }
  },
  methods: {
    ctaShow() {
      this.ctaShowBool = true
    },
    ctaHide() {
      this.ctaShowBool = false
    }
  }
}
</script>

<style scoped>

.cta-img {
border-radius: 0px 0px 12px 12px;
height: auto;
}

.flex-end {
  transform: translateY(0px);
  transition: all 1.5s;
}

.cta-show {
  transform: translateY(0px);
}
</style>
