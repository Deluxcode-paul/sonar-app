<template>
    <div class="container-l bg-gradient-goth" style="width: 100%">
        <div class="container grid-2">
            <div class="padding-xl-top">
                <h3 class="color-white align-left">Let’s talk about you.</h3>
                <p class="color-white width-s lead padding-s-top"> Every one of our customers is different. Choose your sector from the list and see how Sonar will work to grow your business.</p>
                <router-link to="demo" class="margin-s-top button deepblue big input-xl">
                    Schedule a demo
                </router-link>
            </div>
            <div class="landingCards align-center justify-center padding-xl-bottom padding-l-top">
                <a href="/solutions/wisp">
                    <div direction="column" radius="3" color="B100" class="landingCard">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 26 26">
                            <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.29 4.842 11.44 11 11.95v-9.133c-1.162-.414-2-1.513-2-2.817 0-1.657 1.344-3 3-3s3 1.343 3 3c0 1.304-.838 2.403-2 2.816v9.133c6.158-.51 11-5.66 11-11.95 0-6.626-5.373-11.999-12-11.999zm-5.282 12c0 1.791.887 3.397 2.282 4.498l-1.481 1.502c-1.86-1.467-3.04-3.608-3.04-6s1.18-4.533 3.04-6l1.481 1.502c-1.396 1.101-2.282 2.707-2.282 4.498zm9.763 6l-1.481-1.502c1.396-1.101 2.282-2.707 2.282-4.498s-.886-3.397-2.282-4.498l1.481-1.502c1.86 1.467 3.04 3.608 3.04 6s-1.179 4.533-3.04 6z" />
                        </svg>
                        <p class="landingCard-title">WISP</p>
                    </div>
                </a>
                <a href="/solutions/fiber">
                    <div direction="column" radius="3" color="B100" class="landingCard">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 26 26">
                            <path d="M 13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 C 0 5.82 5.82 0 13 0 Z M 10.5 15 C 10.776 15 11 15.224 11 15.5 L 11 18.793 C 11 19.238 11.539 19.461 11.854 19.146 L 19.146 11.854 C 19.461 11.539 19.238 11 18.793 11 L 15.5 11 C 15.224 11 15 10.776 15 10.5 L 15 7.207 C 15 6.762 14.461 6.539 14.146 6.854 L 6.854 14.146 C 6.539 14.461 6.762 15 7.207 15 Z" fill="rgba(51, 51, 51, 1.00)"></path>
                        </svg>
                        <p class="landingCard-title">Fiber</p>
                    </div>
                </a>
                <a href="/solutions/mdu">
                    <div direction="column" radius="3" color="B100" class="landingCard">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 26 26">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 18h-4v-12h4v12z" />
                        </svg>
                        <p class="landingCard-title">MDU</p>
                    </div>
                </a>
                <a href="/solutions/voice">
                    <div direction="column" radius="3" color="B100" class="landingCard">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 26 26">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
                        </svg>
                        <p class="landingCard-title">Voice</p>
                    </div>
                </a>
                <a href="/solutions/cable">
                    <div direction="column" radius="3" color="B100" class="landingCard">
                        <svg width="46" height="46" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.736 11.376l-6.112-6.112c-.177-.176-.408-.264-.638-.264-.231 0-.461.088-.638.264l-1.269 1.27 1.61 1.61c.375-.126.803-.042 1.102.256.299.301.384.733.254 1.109l1.551 1.551c.376-.129.809-.045 1.109.255.419.419.419 1.097 0 1.517-.419.419-1.098.419-1.518 0-.314-.316-.393-.778-.233-1.167l-1.447-1.447v3.808c.102.051.198.118.284.204.418.418.418 1.097 0 1.517-.419.419-1.099.419-1.517 0-.42-.42-.42-1.099 0-1.517.103-.104.223-.183.351-.235v-3.844c-.128-.052-.248-.13-.351-.234-.318-.317-.395-.783-.231-1.173l-1.587-1.587-4.192 4.191c-.176.177-.264.407-.264.638 0 .23.088.461.264.638l6.113 6.112c.176.176.407.263.637.263.231 0 .461-.087.638-.263l6.084-6.083c.176-.177.264-.408.264-.638 0-.231-.088-.462-.264-.638v-.001z" />
                        </svg>
                        <p class="landingCard-title">Cable</p>
                    </div>
                </a>
                <a href="/solutions/enterprise">
                    <div direction="column" radius="3" color="B100" class="landingCard">
                        <svg width="46" height="46" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.736 11.376l-6.112-6.112c-.177-.176-.408-.264-.638-.264-.231 0-.461.088-.638.264l-1.269 1.27 1.61 1.61c.375-.126.803-.042 1.102.256.299.301.384.733.254 1.109l1.551 1.551c.376-.129.809-.045 1.109.255.419.419.419 1.097 0 1.517-.419.419-1.098.419-1.518 0-.314-.316-.393-.778-.233-1.167l-1.447-1.447v3.808c.102.051.198.118.284.204.418.418.418 1.097 0 1.517-.419.419-1.099.419-1.517 0-.42-.42-.42-1.099 0-1.517.103-.104.223-.183.351-.235v-3.844c-.128-.052-.248-.13-.351-.234-.318-.317-.395-.783-.231-1.173l-1.587-1.587-4.192 4.191c-.176.177-.264.407-.264.638 0 .23.088.461.264.638l6.113 6.112c.176.176.407.263.637.263.231 0 .461-.087.638-.263l6.084-6.083c.176-.177.264-.408.264-.638 0-.231-.088-.462-.264-.638v-.001z" />
                        </svg>
                        <p class="landingCard-title">Enterprise</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'solutions'
}
</script>
<style scoped>
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
</style>
