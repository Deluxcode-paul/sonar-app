<template>
  <div>
    <h2 class="color-white">Make Sonar your own</h2>
    <p class="feature text-landing color-silver margin-m-bottom">
      Our API allows you to sculpt Sonar to fit your needs. <br>
      The GraphQL interface empowers you to integrate external systems at will.
    </p>

    <wideButton text="Check out Sonar's API" />
  </div>
</template>

<script>
  import wideButton from "@/components/utils/wideButton.vue";

  export default {
    name: 'landingCodeForm',
    components: {
      wideButton
    },
  }
</script>
<style scoped>
  h2 {
    text-transform: uppercase;
    font-size: 56px;
    font-weight: 600;
    text-align: center;
  }
  .text-landing {
    font-size: 32px;
    line-height: 1.5;
  }
</style>
