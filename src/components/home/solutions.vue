<template>
    <div>
        <div class="solutionsDesktop">
            <v-parallax
                    style="height: 700px"
                    src="/assets/flowers.jpg"
            >
                <div class="container solutionsDesktopBlock">
                    <div class="textDesktopBlock">
                        <h3 class="color-white align-left">Let’s talk about you.</h3>
                        <p class="color-white lead padding-s-top"> Every one of our customers is different.
                            <br>
                            Choose your sector from the list and see how Sonar will work to grow your business.</p>
                        <router-link to="demo">
                            <div class="svg-wrapperDemoCards">
                                <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                                    <rect :class="animate ? 'shapeDemo' : 'shapeDemoNoAnimation'" height="60" width="320" />
                                </svg>
                                <div class="text">Schedule a Demo Now!</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </v-parallax>
        </div>
        <div class="mobileSolutions">
            <div class="container solutionblock">
                <div class="textSolutions">
                    <h3 class="color-white align-left">Let’s talk about you.</h3>
                    <p class="color-white width-s lead padding-s-top"> Every one of our customers is different.
                        <br>
                        Choose your sector from the list and see how Sonar will work to grow your business.
                    </p>
                    <router-link to="demo">
                        <div class="svg-wrapperDemoCards">
                            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                                <rect :class="animate ? 'shapeDemo' : 'shapeDemoNoAnimation'" height="60" width="320" />
                            </svg>
                            <div class="text">Schedule a Demo Now!</div>
                        </div>
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'solutions',
    data: () => ({
        animate: false,
    }),
    mounted() {
        setInterval(() => this.animate = !this.animate, 4000);
    }
}
</script>
<style lang="scss">
    v-paralax {
        padding: 100px 0 !important;
    }
    .svg-wrapperDemoCards {
        height: 60px;
        margin: 0 auto;
        position: relative;
        width: 320px;
        transition: 2s;
        .shapeDemo {
            fill: transparent;
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
            stroke: #fff;
            animation: draw 4s ease infinite;
        }
        .shapeDemoNoAnimation {
            fill: transparent;
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
            stroke: #fff;
        }

        .text {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            color: #fff;
            font-size: 22px;
            height: 60px;
            /*letter-spacing: 8px;*/
            /*line-height: 32px;*/
            position: relative;
            top: -60px;
            text-align: center;
        }
    }
    .svg-wrapperDemoCards:hover {
        height: 60px;
        margin: 0 auto;
        position: relative;
        width: 320px;
        background: white;
        .shapeDemo {
            fill: transparent;
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
            stroke: #fff;
            animation: draw 4s ease infinite;
        }
        .shapeDemoNoAnimation {
            fill: transparent;
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
            stroke: #fff;
        }

        .text {
            color: #000;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            font-size: 22px;
            height: 60px;
            /*letter-spacing: 8px;*/
            /*line-height: 32px;*/
            position: relative;
            top: -60px;
            text-align: center;
        }
    }

    @keyframes draw {
        0% {
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
        }
        100% {
            stroke-dasharray: 760;
            stroke-dashoffset: 0;
            stroke-width: 2px;
        }
    }
</style>
<style lang="scss" scoped>
    .solutionsDesktop {
        .solutionsDesktopBlock {
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            .textDesktopBlock {
                min-width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                text-align: center;
                margin: 10px 20px;
                h3 {
                    text-align: center;
                }
                p {
                    line-height: 2;
                }
            }
        }

    }
    .iconSolutions {
        font-size: 48px;
    }
.mobileSolutions {
    display: none;
}

@media (max-width: 1500px) {
  .solutionsDesktop {
     display: none;
  }
  .mobileSolutions {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-image: url("/assets/flowers.jpg");
      background-size: 100%;
      background-position: center;
      min-height: 500px;
      .solutionblock {
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .textSolutions {
              min-height: 500px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              padding: 0 0 20px;
              h3 {
                  color: #fff;
                  text-align: center;
              }
              p {
                  color: #fff;
              }
          }
      }
   }
}
    @media (max-width: 1024px) {
        .mobileSolutions {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-image: url("/assets/flowers.jpg");
            min-height: 500px;
            background-size: 300%;
            background-position: center;
        }
    }
</style>
