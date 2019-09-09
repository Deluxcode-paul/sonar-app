<template>
  <div class="margin-l-bottom">
    <section class="bg-white margin-l-top margin-m-bottom">

          <p class="coming-soon margin-s-bottom color-white bg-gradient shadow-l">Real Results</p>
          <h3 class="color-black">Read our case study</h3>
            <div class="container width-l padding-m-bottom">
        <p class="lead color-white">We make growing your WISP look easy with our modern cloud-based solution. Our all in one
          dashboard provides fingertip access on the go, while centralizing your customer support to create a
          frictionless experience, for both you and your customers.</p>

          <form class="newsletter-form validate width-l margin-s-top">
            <input type="email" class="required email input-xl" placeholder="Your name" />
            <input type="email" class="required email input-xl" placeholder="Your company" />
            <input type="email" class="required email input-xl" placeholder="Your phone number" />

            <input type="email" class="required email input-xl" placeholder="Your email" />
            <button type="submit" name="subscribe" class="button big fluid deepblue input-xl">
              Download
            </button>
          </form>

    </section>
  </div>
</template>

<script>

  export default {
    name: 'landingCase',
  }
</script>

<style scoped>
  @media screen and (min-width: 1280px) {
    .desktop-push {
      margin: 0 auto;
    }
  }


  input {
    width: 100%;
    margin-bottom: 10px;
  }

  .bg-black input[type='email'],
  .night input[type='email'] {
    background: linear-gradient(to left, #000000, #000000ad);
    border: none;
    color: #fff;
  }

  .bg-black input[type='email']:focus {}

  .night input[type='checkbox'] {
    background-color: #161616;
  }

  .night input[type='checkbox']:checked {
    background-color: #09f;

  }

  #demo-cheat {
    overflow: hidden;
  }

  #demo-cheat .content {
    z-index: 2;
    perspective: 2px;
  }

  #demo-cheat ::-moz-selection {
    background: #50f;
  }

  #demo-cheat ::selection {
    background: #50f;
  }

  .coming-soon {
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding: 12px 16px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    line-height: 1em;
  }


  /* mobile / other */
  .demo-cheats-bg {
    position: relative;
    z-index: 0;
    width: 100%;
  }

  .cta-1 {
    margin-bottom: -160px;
  }

  .cta-2 {
    margin-bottom: -160px;
  }

  .cta-below {
    margin-top: -100px;
  }

  .demo-cheats-bg img {
    position: absolute;
    left: 55%;
    bottom: 300px;
    max-width: 400px;
    opacity: 0.1;
    z-index: 0;

  }

  #demo-cheat button {
    background: #05f;
  }

  #demo-cheat {
    margin-top: 100px;
  }

  .bg-black input[type='email']:focus {}

  /* desktop */
  @media screen and (min-width: 1024px) {
    .demo-cheats-bg img {
      max-width: 1000px;
      opacity: 0.8;
      top: -740px;
      left: 0;
      margin-left: 202%;
    }

    form {
      margin-left: 50px;
    }

    #demo-cheat {
      margin-left: 0px;

    }

    .caseQuote {
      position: relative;
      margin-left: 0px;
      z-index: 9999;
    }

    #demo-cheat .content {
      margin: 0 auto;
    }

    .demo-cta {
      margin-left: 0px;
    }

  }

  /* tablet */
  @media (min-width: 900px) and (max-width: 1280px) {
    .demo-cheats-bg img {
      max-width: 700px;
      opacity: 0.6;
      top: -900px;
      left: 0;
      margin-left: 150%;
    }

    .caseQuote {
      position: relative;
      margin-left: 0px;
      z-index: 9999;
    }

    #demo-cheat {
      margin-left: 0px;
      margin-top: 0px;
    }

    .demo-cta {
      margin-left: 0px;
    }

    #demo-cheat .content {
      margin: 0 auto;
    }

  }
</style>