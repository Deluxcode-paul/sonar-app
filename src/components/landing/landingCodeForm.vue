<template>
  <div class="padding-s-top padding-m-bottom margin-s-top">
    <h2 class="color-white">Developer friendly API</h2>
    <div class="grid-features">
      <div class="grid-feature">
        <div class="grid-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
            <path
              d="M12 0c-6.627 0-12 5.373-12 12 0 6.29 4.842 11.44 11 11.95v-9.133c-1.162-.414-2-1.513-2-2.817 0-1.657 1.344-3 3-3s3 1.343 3 3c0 1.304-.838 2.403-2 2.816v9.133c6.158-.51 11-5.66 11-11.95 0-6.626-5.373-11.999-12-11.999zm-5.282 12c0 1.791.887 3.397 2.282 4.498l-1.481 1.502c-1.86-1.467-3.04-3.608-3.04-6s1.18-4.533 3.04-6l1.481 1.502c-1.396 1.101-2.282 2.707-2.282 4.498zm9.763 6l-1.481-1.502c1.396-1.101 2.282-2.707 2.282-4.498s-.886-3.397-2.282-4.498l1.481-1.502c1.86 1.467 3.04 3.608 3.04 6s-1.179 4.533-3.04 6z">
            </path>
          </svg>
          <p>GraphQL</p>
        </div>
      </div>
      <div class="grid-feature">
        <div class="grid-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
            <path
              d="M12 0c-6.627 0-12 5.373-12 12 0 6.29 4.842 11.44 11 11.95v-9.133c-1.162-.414-2-1.513-2-2.817 0-1.657 1.344-3 3-3s3 1.343 3 3c0 1.304-.838 2.403-2 2.816v9.133c6.158-.51 11-5.66 11-11.95 0-6.626-5.373-11.999-12-11.999zm-5.282 12c0 1.791.887 3.397 2.282 4.498l-1.481 1.502c-1.86-1.467-3.04-3.608-3.04-6s1.18-4.533 3.04-6l1.481 1.502c-1.396 1.101-2.282 2.707-2.282 4.498zm9.763 6l-1.481-1.502c1.396-1.101 2.282-2.707 2.282-4.498s-.886-3.397-2.282-4.498l1.481-1.502c1.86 1.467 3.04 3.608 3.04 6s-1.179 4.533-3.04 6z">
            </path>
          </svg>
          <p>Comprehensive</p>
        </div>
      </div>
      <div class="grid-feature">
        <div class="grid-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
            <path
              d="M12 0c-6.627 0-12 5.373-12 12 0 6.29 4.842 11.44 11 11.95v-9.133c-1.162-.414-2-1.513-2-2.817 0-1.657 1.344-3 3-3s3 1.343 3 3c0 1.304-.838 2.403-2 2.816v9.133c6.158-.51 11-5.66 11-11.95 0-6.626-5.373-11.999-12-11.999zm-5.282 12c0 1.791.887 3.397 2.282 4.498l-1.481 1.502c-1.86-1.467-3.04-3.608-3.04-6s1.18-4.533 3.04-6l1.481 1.502c-1.396 1.101-2.282 2.707-2.282 4.498zm9.763 6l-1.481-1.502c1.396-1.101 2.282-2.707 2.282-4.498s-.886-3.397-2.282-4.498l1.481-1.502c1.86 1.467 3.04 3.608 3.04 6s-1.179 4.533-3.04 6z">
            </path>
          </svg>
          <p>Adaptable</p>
        </div>
      </div>
    </div>
    <p class="feature color-silver margin-m-bottom">The Sonar API is a comprehensive and powerful REST interface that allows you
      to
      integrate any external systems into Sonar that you need. Sonar also offers a selection of webhooks to allow you to
      trigger external systems based on events inside Sonar.</p>

    <wideButton text="Check out Sonar's API" />
  </div>
</template>

<script>
  import wideButton from "@/components/utils/wideButton.vue";

  export default {
    name: 'landingCodeForm',
    components: {
      wideButton
    }
  }
</script>

<style scoped>
  .grid-feature {
    position: relative;
    margin: 10px;
  }

  .grid-features {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    justify-content: space-between;
    margin-top: 3em !important;
    margin-bottom: 2em !important;
  }

  .grid-inner {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    justify-content: flex-start;
  }

  .grid-inner svg {
    margin-left: -15px;
    fill: white;
    margin-right: 7px;
    padding: 2px;
  }

  .grid-inner p {
    color: white;
    size: 22px;
    font-family: 'Biosans', sans-serif;
  }
</style>