<template>
  <div class="bg-black color-white padding-m-top">

    <div class="container-l align-left padding-xl-top margin-m-bottom">
      <h2>Grow your WISP with confidence.</h2>
      <p class="lead color-silver">We make growing your WISP look easy with our modern cloud-based
        solution. Our all in one dashboard provides fingertip access on the go, while centralizing your customer support
        to create a frictionless experience, for both you and your customers.
      </p>
    </div>

    <div class="container">

      <div class="blocks">

        <div @click="goToDemo()" id="demo-block-1">
          <div class="block-image shadow-s">
              <img src="/assets/block-dev-seats.png" alt="popover">
          </div>
          <h3>Recorded Demo</h3>
          <p id="description" class="margin-xs-top margin-s-bottom color-silver">Watch our recorded demo to see how Sonar works for you
            and
            your business.</p>
        </div>

        <div @click="goToDemo()" id="demo-block-2" class="right">
            <div class="block-image shadow-s">
                <img src="/assets/block-support.png" alt="popover">
            </div>

            <h3>Live Demo</h3>
            <p id="description" class="margin-xs-top margin-s-bottom color-silver">Book a virtual hands-on demo to experience Sonar for
              your
              team.</p>
          </div>
      </div>

      <div class="quote container width-m width-s-tablet padding-l">
        <figure>
          <img src="/assets/alec.jpg" alt="Meng To" width="50">
        </figure>
        <blockquote>
          <p class="italic color-white">We had 2 systems and every month it would take 24 hours of employee time to
            process our billing and now it happens automatically.</p>
          <cite>Alec Armbruster, Sonar</cite>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'landingDemo',
    methods: {
      goToDemo: function () {
        location.href="/demo"
      }
    }
  }
</script>

<style scoped>

  .bg-black .block, .bg-black .blocks>div {
    background-image: linear-gradient(#1d1d1d, #000);
    color: #fff;
}

  h3 {
  text-decoration: none !important;
  color: white !important;
}

  .block-image {
  transition: all 250ms ease-in-out;
}

  #demo-block-1 {
  position: relative;
  z-index: 10;
}

  #demo-block-2 {
  position: relative;
  z-index: 10;
}

  @media (min-width: 1000px) {
  #demo-block-1 {
  max-height: 400px;
  position: relative;
  z-index: 10;
  transition: all 240ms ease-in-out;
}

  #demo-block-2 {
  max-height: 400px;
  position: relative;
  z-index: 10;
  transition: all 240ms ease-in-out;
}

  #description {
    transform: translateY(30px);
    opacity: 0;
    transition: all 240ms ease-in-out;
  }

  #demo-block-1:hover {
    max-height: 800px;
    z-index: 500;
    background-image: linear-gradient(#2a6dff, #0039b4);
    cursor: pointer;
    opacity: 1;
    -webkit-transform: scale(1.15);
    transform: scale(1.15) translateX(30px);
  }

  #demo-block-2:hover {
    max-height: 800px;
    z-index: 500;
    background-image: linear-gradient(#2a6dff, #0039b4);
    cursor: pointer;
    opacity: 1;
    -webkit-transform: scale(1.15);
    transform: scale(1.15) translateX(-30px);
  }

  #demo-block-1:hover > .block-image {
    transform: translateY(-10px);
  }

  #demo-block-1:hover > #description {
    opacity: 1;
    transform: translateY(0px)
  }

 #demo-block-2:hover > #description {
    opacity: 1;
    transform: translateY(0px)
  }

  #demo-block-2:hover > .block-image {
    transform: translateY(-10px);
  }

  #demo-block-1,
  #demo-block-2 {
    opacity: .7;
    transition: all 250ms ease-in-out;
  }
}

</style>