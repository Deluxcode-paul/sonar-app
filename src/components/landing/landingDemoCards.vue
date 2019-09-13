<template>
    <div class="padding-s-bottom">
<!--        <ParticleEffectButton-->
<!--                :visible.sync="btnOps.visible"-->
<!--                :animating.sync="btnOps.animating"-->
<!--                :options="btnOps"-->
<!--                cls="btn-cls"-->
<!--        >-->
<!--            <a href="/demo/express" target="_blank" class="demoCard&#45;&#45;inner">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.992 511.992" xml:space="preserve" width="50" height="50">-->
<!--                    <g id="XMLID_806_">-->
<!--                        <g id="XMLID_386_">-->
<!--                            <path fill="white" id="XMLID_389_" d="M511.005,279.646c-4.597-46.238-25.254-89.829-58.168-122.744    c-28.128-28.127-62.556-46.202-98.782-54.239V77.255c14.796-3.681,25.794-17.074,25.794-32.993c0-18.748-15.252-34-34-34h-72    c-18.748,0-34,15.252-34,34c0,15.918,10.998,29.311,25.793,32.993v25.479c-36.115,8.071-70.429,26.121-98.477,54.169    c-6.138,6.138-11.798,12.577-16.979,19.269c-0.251-0.019-0.502-0.038-0.758-0.038H78.167c-5.522,0-10,4.477-10,10s4.478,10,10,10    h58.412c-7.332,12.275-13.244,25.166-17.744,38.436H10c-5.522,0-10,4.477-10,10s4.478,10,10,10h103.184    c-2.882,12.651-4.536,25.526-4.963,38.437H64c-5.522,0-10,4.477-10,10s4.478,10,10,10h44.54    c0.844,12.944,2.925,25.82,6.244,38.437H50c-5.522,0-10,4.477-10,10s4.478,10,10,10h71.166    c9.81,25.951,25.141,50.274,45.999,71.132c32.946,32.946,76.582,53.608,122.868,58.181c6.606,0.652,13.217,0.975,19.819,0.975    c39.022,0,77.548-11.293,110.238-32.581c4.628-3.014,5.937-9.209,2.923-13.837s-9.209-5.937-13.837-2.923    c-71.557,46.597-167.39,36.522-227.869-23.957c-70.962-70.962-70.962-186.425,0-257.388c70.961-70.961,186.424-70.961,257.387,0    c60.399,60.4,70.529,156.151,24.086,227.673c-3.008,4.632-1.691,10.826,2.94,13.833c4.634,3.008,10.826,1.691,13.833-2.941    C504.367,371.396,515.537,325.241,511.005,279.646z M259.849,44.263c0-7.72,6.28-14,14-14h72c7.72,0,14,6.28,14,14s-6.28,14-14,14    h-1.794h-68.413h-1.793C266.129,58.263,259.849,51.982,259.849,44.263z M285.642,99.296V78.263h48.413v20.997    C317.979,97.348,301.715,97.36,285.642,99.296z" />-->
<!--                            <path fill="white" id="XMLID_391_" d="M445.77,425.5c-2.64,0-5.21,1.07-7.069,2.93c-1.87,1.86-2.931,4.44-2.931,7.07    c0,2.63,1.061,5.21,2.931,7.07c1.859,1.87,4.43,2.93,7.069,2.93c2.63,0,5.2-1.06,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07    c0-2.63-1.069-5.21-2.93-7.07C450.97,426.57,448.399,425.5,445.77,425.5z" />-->
<!--                            <path fill="white" id="XMLID_394_" d="M310.001,144.609c-85.538,0-155.129,69.59-155.129,155.129s69.591,155.129,155.129,155.129    s155.129-69.59,155.129-155.129S395.539,144.609,310.001,144.609z M310.001,434.867c-74.511,0-135.129-60.619-135.129-135.129    s60.618-135.129,135.129-135.129S445.13,225.228,445.13,299.738S384.512,434.867,310.001,434.867z" />-->
<!--                            <path fill="white" id="XMLID_397_" d="M373.257,222.34l-49.53,49.529c-4.142-2.048-8.801-3.205-13.726-3.205c-4.926,0-9.584,1.157-13.726,3.205    l-22.167-22.167c-3.906-3.905-10.236-3.905-14.143,0c-3.905,3.905-3.905,10.237,0,14.142l22.167,22.167    c-2.049,4.142-3.205,8.801-3.205,13.726c0,17.134,13.939,31.074,31.074,31.074s31.074-13.94,31.074-31.074    c0-4.925-1.157-9.584-3.205-13.726l48.076-48.076v0l1.453-1.453c3.905-3.905,3.905-10.237,0-14.142    S377.164,218.435,373.257,222.34z M310.001,310.812c-6.106,0-11.074-4.968-11.074-11.074s4.968-11.074,11.074-11.074    s11.074,4.968,11.074,11.074S316.107,310.812,310.001,310.812z" />-->
<!--                            <path fill="white" id="XMLID_398_" d="M416.92,289.86h-9.265c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.265c5.522,0,10-4.477,10-10    S422.442,289.86,416.92,289.86z" />-->
<!--                            <path fill="white" id="XMLID_399_" d="M212.346,289.616h-9.264c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.264c5.522,0,10-4.477,10-10    S217.868,289.616,212.346,289.616z" />-->
<!--                            <path fill="white" id="XMLID_400_" d="M310.123,212.083c5.522,0,10-4.477,10-10v-9.264c0-5.523-4.478-10-10-10s-10,4.477-10,10v9.264    C300.123,207.606,304.601,212.083,310.123,212.083z" />-->
<!--                            <path fill="white" id="XMLID_424_" d="M309.879,387.393c-5.522,0-10,4.477-10,10v9.264c0,5.523,4.478,10,10,10s10-4.477,10-10v-9.264    C319.879,391.87,315.401,387.393,309.879,387.393z" />-->
<!--                            <path fill="white" id="XMLID_425_" d="M10,351.44c-2.63,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07c0,2.64,1.069,5.21,2.93,7.07    s4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07s-1.07-5.21-2.931-7.07    C15.21,352.51,12.63,351.44,10,351.44z" />-->
<!--                        </g>-->
<!--                    </g>-->
<!--                </svg>-->
<!--                <h6 class="demoCard&#45;&#45;inner_header">Express Demo</h6>-->
<!--                <p class="demoCard&#45;&#45;inner_descr">Automated walkthrough</p>-->
<!--            </a>-->
<!--        </ParticleEffectButton>-->
<!--        <button style="color: white" @click="btnOps.visible=!btnOps.visible">toggle</button>-->
        <div class="demoCard">
            <a href="/demo/express" target="_blank" class="demoCard&#45;&#45;inner">
                <div class="svg-wrapper">
                    <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                        <rect :class="animate ? 'shapeDemo' : 'shapeDemoNoAnimation'" height="60" width="320" />
                    </svg>
                    <div class="text">Schedule a Demo Now! <i class="icon-rocket"></i></div>
                </div>
                <!--                       <v-btn>{{ctaBody}}</v-btn>-->
            </a>
<!--            <a href="/demo/express" target="_blank" class="demoCard&#45;&#45;inner">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.992 511.992" xml:space="preserve" width="50" height="50">-->
<!--                    <g id="XMLID_806_">-->
<!--                        <g id="XMLID_386_">-->
<!--                            <path fill="white" id="XMLID_389_" d="M511.005,279.646c-4.597-46.238-25.254-89.829-58.168-122.744    c-28.128-28.127-62.556-46.202-98.782-54.239V77.255c14.796-3.681,25.794-17.074,25.794-32.993c0-18.748-15.252-34-34-34h-72    c-18.748,0-34,15.252-34,34c0,15.918,10.998,29.311,25.793,32.993v25.479c-36.115,8.071-70.429,26.121-98.477,54.169    c-6.138,6.138-11.798,12.577-16.979,19.269c-0.251-0.019-0.502-0.038-0.758-0.038H78.167c-5.522,0-10,4.477-10,10s4.478,10,10,10    h58.412c-7.332,12.275-13.244,25.166-17.744,38.436H10c-5.522,0-10,4.477-10,10s4.478,10,10,10h103.184    c-2.882,12.651-4.536,25.526-4.963,38.437H64c-5.522,0-10,4.477-10,10s4.478,10,10,10h44.54    c0.844,12.944,2.925,25.82,6.244,38.437H50c-5.522,0-10,4.477-10,10s4.478,10,10,10h71.166    c9.81,25.951,25.141,50.274,45.999,71.132c32.946,32.946,76.582,53.608,122.868,58.181c6.606,0.652,13.217,0.975,19.819,0.975    c39.022,0,77.548-11.293,110.238-32.581c4.628-3.014,5.937-9.209,2.923-13.837s-9.209-5.937-13.837-2.923    c-71.557,46.597-167.39,36.522-227.869-23.957c-70.962-70.962-70.962-186.425,0-257.388c70.961-70.961,186.424-70.961,257.387,0    c60.399,60.4,70.529,156.151,24.086,227.673c-3.008,4.632-1.691,10.826,2.94,13.833c4.634,3.008,10.826,1.691,13.833-2.941    C504.367,371.396,515.537,325.241,511.005,279.646z M259.849,44.263c0-7.72,6.28-14,14-14h72c7.72,0,14,6.28,14,14s-6.28,14-14,14    h-1.794h-68.413h-1.793C266.129,58.263,259.849,51.982,259.849,44.263z M285.642,99.296V78.263h48.413v20.997    C317.979,97.348,301.715,97.36,285.642,99.296z" />-->
<!--                            <path fill="white" id="XMLID_391_" d="M445.77,425.5c-2.64,0-5.21,1.07-7.069,2.93c-1.87,1.86-2.931,4.44-2.931,7.07    c0,2.63,1.061,5.21,2.931,7.07c1.859,1.87,4.43,2.93,7.069,2.93c2.63,0,5.2-1.06,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07    c0-2.63-1.069-5.21-2.93-7.07C450.97,426.57,448.399,425.5,445.77,425.5z" />-->
<!--                            <path fill="white" id="XMLID_394_" d="M310.001,144.609c-85.538,0-155.129,69.59-155.129,155.129s69.591,155.129,155.129,155.129    s155.129-69.59,155.129-155.129S395.539,144.609,310.001,144.609z M310.001,434.867c-74.511,0-135.129-60.619-135.129-135.129    s60.618-135.129,135.129-135.129S445.13,225.228,445.13,299.738S384.512,434.867,310.001,434.867z" />-->
<!--                            <path fill="white" id="XMLID_397_" d="M373.257,222.34l-49.53,49.529c-4.142-2.048-8.801-3.205-13.726-3.205c-4.926,0-9.584,1.157-13.726,3.205    l-22.167-22.167c-3.906-3.905-10.236-3.905-14.143,0c-3.905,3.905-3.905,10.237,0,14.142l22.167,22.167    c-2.049,4.142-3.205,8.801-3.205,13.726c0,17.134,13.939,31.074,31.074,31.074s31.074-13.94,31.074-31.074    c0-4.925-1.157-9.584-3.205-13.726l48.076-48.076v0l1.453-1.453c3.905-3.905,3.905-10.237,0-14.142    S377.164,218.435,373.257,222.34z M310.001,310.812c-6.106,0-11.074-4.968-11.074-11.074s4.968-11.074,11.074-11.074    s11.074,4.968,11.074,11.074S316.107,310.812,310.001,310.812z" />-->
<!--                            <path fill="white" id="XMLID_398_" d="M416.92,289.86h-9.265c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.265c5.522,0,10-4.477,10-10    S422.442,289.86,416.92,289.86z" />-->
<!--                            <path fill="white" id="XMLID_399_" d="M212.346,289.616h-9.264c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.264c5.522,0,10-4.477,10-10    S217.868,289.616,212.346,289.616z" />-->
<!--                            <path fill="white" id="XMLID_400_" d="M310.123,212.083c5.522,0,10-4.477,10-10v-9.264c0-5.523-4.478-10-10-10s-10,4.477-10,10v9.264    C300.123,207.606,304.601,212.083,310.123,212.083z" />-->
<!--                            <path fill="white" id="XMLID_424_" d="M309.879,387.393c-5.522,0-10,4.477-10,10v9.264c0,5.523,4.478,10,10,10s10-4.477,10-10v-9.264    C319.879,391.87,315.401,387.393,309.879,387.393z" />-->
<!--                            <path fill="white" id="XMLID_425_" d="M10,351.44c-2.63,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07c0,2.64,1.069,5.21,2.93,7.07    s4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07s-1.07-5.21-2.931-7.07    C15.21,352.51,12.63,351.44,10,351.44z" />-->
<!--                        </g>-->
<!--                    </g>-->
<!--                </svg>-->
<!--                <h6 class="demoCard&#45;&#45;inner_header">Express Demo</h6>-->
<!--                <p class="demoCard&#45;&#45;inner_descr">Automated walkthrough</p>-->
<!--            </a>-->
<!--            <a href="/demo" class="demoCard&#45;&#45;inner">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">-->
<!--                    <path d="M 2 25 C 2 12.297 12.297 2 25 2 C 37.703 2 48 12.297 48 25 C 48 37.703 37.703 48 25 48 L 5.286 48 C 3.471 48 2 46.529 2 44.714 Z M 4 43.565 C 4 44.91 5.09 46 6.435 46 L 25 46 C 36.598 46 46 36.598 46 25 C 46 13.402 36.598 4 25 4 C 13.402 4 4 13.402 4 25 Z M 16.5 23 C 17.881 23 19 24.119 19 25.5 C 19 26.881 17.881 28 16.5 28 C 15.119 28 14 26.881 14 25.5 C 14 24.119 15.119 23 16.5 23 Z M 25.5 23 C 26.881 23 28 24.119 28 25.5 C 28 26.881 26.881 28 25.5 28 C 24.119 28 23 26.881 23 25.5 C 23 24.119 24.119 23 25.5 23 Z M 34 23 C 35.381 23 36.5 24.119 36.5 25.5 C 36.5 26.881 35.381 28 34 28 C 32.619 28 31.5 26.881 31.5 25.5 C 31.5 24.119 32.619 23 34 23 Z" fill="hsl(0, 0%, 100%)"></path>-->
<!--                </svg>-->
<!--                <h6 class="demoCard&#45;&#45;inner_header">Group Demo</h6>-->
<!--                <p class="demoCard&#45;&#45;inner_descr">Join a Sonar Expert</p>-->
<!--            </a>-->
        </div>
    </div>
</template>
<script>
    import ParticleEffectButton from "vue-particle-effect-buttons"
    export default {
        name: 'landingDemoCards',
        data() {
            return {
                btnOps: {
                    duration: 1300,
                    easing: "easeInExpo",
                    size: 3,
                    speed: 1,
                    particlesAmountCoefficient: 10,
                    oscillationCoefficient: 1,
                    label: "Refresh"
                },
                animate: true,
            }
        } ,
        components: {
            ParticleEffectButton,
        },
        mounted() {
            setInterval(() => this.animate = !this.animate, 4000);
        }
    }
</script>
<style>
    .vue-particle-effect-button .particles-button {
        background:  #fff !important;
    }
    .svg-wrapper {
        height: 60px;
        margin: 0 auto;
        position: relative;
        top: 70px;
        /*transform: translateY(-50%);*/
        width: 320px;
    }

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
        color: #fff;
        font-size: 22px;
        /*letter-spacing: 8px;*/
        /*line-height: 32px;*/
        position: relative;
        top: -48px;
        text-align: center;
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
<style scoped>
    .demoCard {
        min-height: 200px;
    }
/*.demoCard--inner_header {*/
/*    font-family: 'Inter', sans-serif;*/
/*    margin-top: 0px;*/
/*    margin-bottom: 20px;*/
/*    font-weight: 600;*/
/*    font-size: 18px;*/
/*    letter-spacing: -0.5px;*/
/*    line-height: 1.3;*/
/*}*/

/*.demoCard--inner_descr {*/
/*    font-family: 'Inter', sans-serif;*/
/*    font-weight: 400;*/
/*    margin-top: 0px;*/
/*    margin-bottom: 20px;*/
/*    font-size: 18px;*/
/*    line-height: 1.7;*/
/*}*/

/** {*/
/*    box-sizing: inherit;*/
/*}*/

/*a {*/
/*    text-decoration: none;*/
/*}*/

/*::selection {*/
/*    color: rgb(255, 255, 255);*/
/*    background: rgba(0, 85, 255, 0.99);*/
/*}*/

/*.demoCard {*/
/*    width: 50%;*/
/*    margin: 0px auto;*/
/*    width: 67.5vw;*/
/*    overflow: visible;*/
/*    display: flex;*/
/*    flex-direction: row;*/
/*    justify-content: center;*/
/*    !*position: relative;*!*/
/*    !*display: grid;*!*/
/*    !*grid-template-columns: 1fr;*!*/
/*    !*gap: 20px 20px;*!*/
/*}*/

/*@media screen and (min-width: 768px) {*/
/*    .demoCard {*/
/*        width: 100%;*/
/*    }*/
/*}*/

/*@media screen and (min-width: 768px) {*/
/*    .demoCard {*/
/*        max-width: 692px;*/
/*    }*/
/*}*/

/*@media screen and (min-width: 1024px) {*/
/*    .demoCard {*/
/*        max-width: 980px;*/
/*    }*/
/*}*/

/*@media screen and (min-width: 1024px) {*/
/*    .demoCard {*/
/*        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));*/
/*    }*/
/*}*/

/*@media screen and (min-width: 1280px) {*/
/*    .demoCard {*/
/*        gap: 20px 20px;*/
/*    }*/
/*}*/

/*@media screen and (min-width: 768px) {*/
/*    .demoCard {*/
/*        padding-top: 20px;*/
/*        padding-bottom: 20px;*/
/*    }*/
/*}*/

/*.demoCard--inner {*/
/*    text-decoration: none;*/
/*    font-weight: inherit;*/
/*    cursor: pointer;*/
/*    -webkit-transition: all .2s ease 0s;*/
/*    transition: all .2s ease 0s;*/
/*    display: -webkit-box;*/
/*    display: -ms-flexbox;*/
/*    display: flex;*/
/*    -webkit-box-orient: vertical;*/
/*    -webkit-box-direction: normal;*/
/*    -ms-flex-direction: column;*/
/*    flex-direction: column;*/
/*    -webkit-box-align: center;*/
/*    -ms-flex-align: center;*/
/*    align-content: center;*/
/*    align-items: center;*/
/*    background: linear-gradient(45deg, #05f, #08f);*/
/*    border-radius: 12px;*/
/*    padding: 40px 20px;*/
/*    color: #fff;*/
/*    -webkit-box-shadow: rgba(0, 0, 0, .05) 0 1px 0, rgba(0, 0, 0, .05) 0 2px 6px, rgba(0, 0, 0, .05) 0 10px 20px;*/
/*    box-shadow: 0 1px 0 rgba(0, 0, 0, .05), 0 2px 6px rgba(0, 0, 0, .05), 0 10px 20px rgba(0, 0, 0, .05);*/
/*    text-align: center;*/
/*}*/

/*.demoCard--inner svg {*/
/*    transform: translate3d(0px, 0px, 0px);*/
/*}*/

/*.demoCard--inner h6 {*/
/*    margin: 25px 0px 5px;*/
/*}*/

/*.demoCard--inner p {*/
/*    margin-bottom: 0px;*/
/*    opacity: 0.8;*/
/*}*/

/*.demoCard--inner:last-of-type {*/
/*    background: linear-gradient(45deg, rgb(68, 0, 255), rgb(111, 0, 255));*/
/*}*/

/*.demoCard--inner:hover {*/
/*    transform: translateY(-7px);*/
/*    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px, rgba(0, 0, 0, 0.03) 0px 0px 8px,*/
/*        rgba(0, 0, 0, 0.1) 0px 20px 30px;*/
/*}*/

/*.demoCard--inner:active {*/
/*    opacity: 0.9;*/
/*}*/

/*@media screen and (min-width: 768px) {*/
/*    .demoCard--inner {*/
/*        padding: 40px 80px;*/
/*    }*/
/*}*/
</style>
