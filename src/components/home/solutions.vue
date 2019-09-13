<template>
    <div>
        <div class="solutionsDesktop">
            <v-parallax
                    style="height: 700px"
                    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            >
                <div class="container grid-2">
                    <div class="">
                        <h3 class="color-white align-left">Let’s talk about you.</h3>
                        <p class="color-white width-s lead padding-s-top"> Every one of our customers is different. Choose your sector from the list and see how Sonar will work to grow your business.</p>
                        <router-link to="demo" class="margin-s-top button deepblue big input-xl">
                            Schedule a demo
                        </router-link>
                    </div>
                    <div class="landingCards align-center justify-center">
                        <a href="/solutions/wisp">
                            <div direction="column" radius="3" color="B100" class="landingCard">
                                <i class="icon-wisp iconSolutions"></i>
                                <p class="landingCard-title">WISP</p>
                            </div>
                        </a>
                        <a href="/solutions/fiber">
                            <div direction="column" radius="3" color="B100" class="landingCard">
                                <i class="icon-fiber iconSolutions"></i>
                                <p class="landingCard-title">Fiber</p>
                            </div>
                        </a>
                        <a href="/solutions/mdu">
                            <div direction="column" radius="3" color="B100" class="landingCard">
                                <i class="icon-mdu iconSolutions"></i>
                                <p class="landingCard-title">MDU</p>
                            </div>
                        </a>
                        <a href="/solutions/voice">
                            <div direction="column" radius="3" color="B100" class="landingCard">
                                <i class="icon-voice iconSolutions"></i>
                                <p class="landingCard-title">Voice</p>
                            </div>
                        </a>
                        <a href="/solutions/cable">
                            <div direction="column" radius="3" color="B100" class="landingCard">
                                <i class="icon-cable1 iconSolutions"></i>
                                <!--                        <svg width="46" height="46" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">-->
                                <!--                            <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.736 11.376l-6.112-6.112c-.177-.176-.408-.264-.638-.264-.231 0-.461.088-.638.264l-1.269 1.27 1.61 1.61c.375-.126.803-.042 1.102.256.299.301.384.733.254 1.109l1.551 1.551c.376-.129.809-.045 1.109.255.419.419.419 1.097 0 1.517-.419.419-1.098.419-1.518 0-.314-.316-.393-.778-.233-1.167l-1.447-1.447v3.808c.102.051.198.118.284.204.418.418.418 1.097 0 1.517-.419.419-1.099.419-1.517 0-.42-.42-.42-1.099 0-1.517.103-.104.223-.183.351-.235v-3.844c-.128-.052-.248-.13-.351-.234-.318-.317-.395-.783-.231-1.173l-1.587-1.587-4.192 4.191c-.176.177-.264.407-.264.638 0 .23.088.461.264.638l6.113 6.112c.176.176.407.263.637.263.231 0 .461-.087.638-.263l6.084-6.083c.176-.177.264-.408.264-.638 0-.231-.088-.462-.264-.638v-.001z" />-->
                                <!--                        </svg>-->
                                <p class="landingCard-title">Cable</p>
                            </div>
                        </a>
                        <a href="/solutions/enterprise">
                            <div direction="column" radius="3" color="B100" class="landingCard">
                                <i class="icon-enterprise iconSolutions"></i>
                                <p class="landingCard-title">Enterprise</p>
                            </div>
                        </a>
                    </div>
                </div>
            </v-parallax>
        </div>
        <div class="mobileSolutions">
            <div class="container grid-2" style="70px 10px">
                <div class="">
                    <h3 class="color-white align-left">Let’s talk about you.</h3>
                    <p class="color-white width-s lead padding-s-top"> Every one of our customers is different. Choose your sector from the list and see how Sonar will work to grow your business.</p>
                    <router-link to="demo" class="margin-s-top button deepblue big input-xl">
                        Schedule a demo
                    </router-link>
                </div>
                <div class="landingCards align-center justify-center">
                    <a href="/solutions/wisp">
                        <div direction="column" radius="3" color="B100" class="landingCard">
                            <i class="icon-wisp iconSolutions"></i>
                            <p class="landingCard-title">WISP</p>
                        </div>
                    </a>
                    <a href="/solutions/fiber">
                        <div direction="column" radius="3" color="B100" class="landingCard">
                            <i class="icon-fiber iconSolutions"></i>
                            <p class="landingCard-title">Fiber</p>
                        </div>
                    </a>
                    <a href="/solutions/mdu">
                        <div direction="column" radius="3" color="B100" class="landingCard">
                            <i class="icon-mdu iconSolutions"></i>
                            <p class="landingCard-title">MDU</p>
                        </div>
                    </a>
                    <a href="/solutions/voice">
                        <div direction="column" radius="3" color="B100" class="landingCard">
                            <i class="icon-voice iconSolutions"></i>
                            <p class="landingCard-title">Voice</p>
                        </div>
                    </a>
                    <a href="/solutions/cable">
                        <div direction="column" radius="3" color="B100" class="landingCard">
                            <i class="icon-cable1 iconSolutions"></i>
                            <!--                        <svg width="46" height="46" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">-->
                            <!--                            <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.736 11.376l-6.112-6.112c-.177-.176-.408-.264-.638-.264-.231 0-.461.088-.638.264l-1.269 1.27 1.61 1.61c.375-.126.803-.042 1.102.256.299.301.384.733.254 1.109l1.551 1.551c.376-.129.809-.045 1.109.255.419.419.419 1.097 0 1.517-.419.419-1.098.419-1.518 0-.314-.316-.393-.778-.233-1.167l-1.447-1.447v3.808c.102.051.198.118.284.204.418.418.418 1.097 0 1.517-.419.419-1.099.419-1.517 0-.42-.42-.42-1.099 0-1.517.103-.104.223-.183.351-.235v-3.844c-.128-.052-.248-.13-.351-.234-.318-.317-.395-.783-.231-1.173l-1.587-1.587-4.192 4.191c-.176.177-.264.407-.264.638 0 .23.088.461.264.638l6.113 6.112c.176.176.407.263.637.263.231 0 .461-.087.638-.263l6.084-6.083c.176-.177.264-.408.264-.638 0-.231-.088-.462-.264-.638v-.001z" />-->
                            <!--                        </svg>-->
                            <p class="landingCard-title">Cable</p>
                        </div>
                    </a>
                    <a href="/solutions/enterprise">
                        <div direction="column" radius="3" color="B100" class="landingCard">
                            <i class="icon-enterprise iconSolutions"></i>
                            <p class="landingCard-title">Enterprise</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'solutions'
}
</script>
<style>
    v-paralax {
        padding: 100px 0 !important;
    }
</style>
<style scoped>
    .iconSolutions {
        font-size: 48px;
    }
.landingCard-title {
    font-size: 18px;
    line-height: 1.7;
    margin-top: 25px;
    margin-bottom: 0px;
    font-weight: 500;
}

.landingCard-sub {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.7;
    margin: 0px;
}

* {
    box-sizing: inherit;
}

a {
    text-decoration: none;
}

::selection {
    color: rgb(255, 255, 255);
    background: rgba(0, 85, 255, 0.99);
}

.landingCards {
    margin: 0px auto;
    width: 87.5vw;
    overflow: visible;
    position: relative;
    display: grid;
    gap: 20px 20px;
    grid-template-columns: 1fr;
}

@media screen and (min-width: 768px) {
    .landingCards {
        width: 100%;
    }
}

@media screen and (min-width: 768px) {
    .landingCards {
        max-width: 692px;
    }
}

@media screen and (min-width: 1024px) {
    .landingCards {
        max-width: 980px;
    }
}

@media screen and (min-width: 1024px) {
    .landingCards {
        /*        grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr);*/
    }
}

@media screen and (min-width: 1280px) {
    .landingCards {
        gap: 20px 20px;
    }
}

@media screen and (min-width: 375px) {
    .landingCards {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (min-width: 768px) {
    .landingCards {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (min-width: 1024px) {
    .landingCards {
        grid-template-columns: 1fr 1fr;
    }
}

.landingCard {
    color: rgb(255, 255, 255);
    border-radius: 8px;
    padding-top: 37px;
    padding-bottom: 30px;
    display: flex;
    flex-flow: column nowrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    transition: all 0.25s ease 0s;
    -webkit-box-shadow: rgba(0, 0, 0, 0.09) 0px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.09) 0px 2px 4px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 0.5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.09) 0px 2px 4px;
    border: 1px solid hsla(218, 14%, 85%, 0.31)
}

.landingCard path {
    fill: rgba(255, 255, 255, 0.8);
    transition: all 0.25s ease 0s;
}

.landingCard p {
    line-height: 1.5;
    transition: all 0.25s ease 0s;
    font-size: 19px !important;
}

.landingCard p:nth-of-type(2) {
    color: rgb(170, 170, 170);
    font-size: 14px !important;
}

.landingCard:hover {
    transform: translateY(-7px);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.05) 0px 10px 20px;
}

.landingCard:hover path {
    fill: rgba(255, 255, 255, 1)
}

.landingCard:hover p {
    color: rgba(255, 255, 255, 1)
}

.landingCard:active {
    opacity: 0.8;
}
.mobileSolutions {
    display: none;
}
@media (max-width: 1500px) {
  .solutionsDesktop {
     display: none;
  }
  .mobileSolutions {
    display: block;
    background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg");
   }
}
</style>
