<template>
  <div id="pivot">
    <intersect @enter="videoPlay" @leave="videoPause">
      <div>
          <div  class="landingCTA center-block align-center-laptop padding-s-all">
            <transition
                    enter-active-class="fadeInLeftBig"
                    leave-active-class="fadeInRightBig"
            >
            <img v-if="show" class="phone1" src="/assets/banner/Phone1.png" alt="">
            </transition>
            <transition
                    enter-active-class="fadeInDownBig"
                    leave-active-class="fadeInRightBig"
            >
            <img v-if="show" class="phone2" src="/assets/banner/Phone2.png" alt="">
            </transition>
            <h1 class="titleLandingCTA">{{ title }}</h1>
            <p class="color-opaque">{{ subtitle }}</p>
            <h3 class="linkLandingCTA">Schedule a demo</h3>
            <transition
                    enter-active-class="fadeInRightBig"
                    leave-active-class="fadeInRightBig"
            >
              <img v-if="show" class="screen1" src="/assets/banner/Screen-1.png" alt="">
            </transition>
            <transition
                    enter-active-class="fadeInDownBig"
                    leave-active-class="fadeInRightBig"
            >
              <img v-if="show" class="screen2" src="/assets/banner/Screen-2.png" alt="">
            </transition>
          </div>
      </div>
    </intersect>

  </div>
<!--    <div :class="ctaClassNames">-->
<!--      <div class="center-block align-center-laptop padding-s-all">-->
<!--        <h3 class="margin-xs-bottom">{{ title }}</h3>-->
<!--        <p class="lead color-opaque center-block">{{ subtitle }}</p>-->
<!--        <router-link-->
<!--          v-show="showButton"-->
<!--          :to="buttonPage"-->
<!--          :class="buttonClass"-->
<!--        >-->
<!--          <svg width="26" height="26">-->
<!--            <path-->
<!--              :d="svgInfo"-->
<!--              fill="#ffffff"-->
<!--            ></path>-->
<!--          </svg>-->
<!--          <slot></slot>-->
<!--          {{ button }}-->
<!--        </router-link>-->
<!--      </div>-->
<!--      <intersect @enter="ctaShow()" @leave="ctaHide()">-->
<!--        <div-->
<!--          :class="[-->
<!--            ctaShowBool-->
<!--              ? 'flex flex-end hide-tablet strip-top-laptop cta-show'-->
<!--              : 'flex flex-end hide-tablet strip-top-laptop'-->
<!--          ]"-->
<!--        >-->
<!--          <img :class="imageClass" :src="imageSource" />-->
<!--        </div>-->
<!--      </intersect>-->
<!--    </div>-->
</template>

<script>
require('intersection-observer');

import Intersect from 'vue-intersect'
export default {
  name: 'landingCTA',
  components: {
    Intersect
  },
  data: () => ({
    show: false,
    cssMagic: false,
  }),
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
  .landingCTA {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 80px;
    max-width: 980px;
    min-height: 150px;
    background: linear-gradient(0deg, #0052f5, #09f) !important;
    border-radius: 12px;
  }
  .titleLandingCTA {
    color: #fff;
  }
  .linkLandingCTA {
    color: #fff;
  }
  .phone1 {
    position: absolute;
    height: 365px;
    left: 300px;
  }
  .phone2 {
    position: absolute;
    height: 365px;
    left: 400px;
  }
  .screen1 {
    position: absolute;
    width: 554px;
    right: 117px;
    height: 350px;
  }
  .screen2 {
    position: absolute;
    width: 504px;
    right: 69px;
    height: 330px;
  }
</style>
