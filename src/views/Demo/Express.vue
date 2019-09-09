<template>
    <div class="nav-night bg-darksilver">
        <button v-if="enableDev == true" @click="showDebug == true ? showDebug = false : showDebug = true" style="opacity: .3" class="button small red color-white dev-button">Developer Debug (show: {{ showDebug }})</button>
        <div v-if="enableDev == true && showDebug == true" class="dev">
            <p v-for="dev in chapters" :key="dev">
                {{ dev }}
            </p>
        </div>
        <div ref="container" class="demo">
            <div class="super-menu">
                <div class="super-menu super-container">
                    <div class="center">
                        <sonarLogo />
                    </div>
                    <a class="super-2 express">Express Demo</a>
                </div>
            </div>
            <div ref="container" class="padding-l-top demo-container">
                <div class="container padding-s-top padding-s-bottom">
                    <div v-for="chapter in chapters" :key="chapter">
                        <div class="player-overlay" v-show="chapters[nowPlaying].progressWatched == '100%' && autoplay == false">
                            <h3>Keep going?</h3>
                            <p class="lead">Click on the next chapter below.</p>
                        </div>
                    </div>
                    <div>
                        <d-player id="player" ref="player" v-bind:options="videoOptions" @ended="ended" @timeupdate="updateTime"></d-player>
                    </div>
                </div>
                <div class="container-l">
                    <flickity @hover="flickityOptions.draggable = false" ref="flickity" :options="flickityOptions">
                        <div v-for="chapter in chapters" :key="chapter" @hover="flickityOptions.draggable = false" @click="cueVideo(chapter.index)" :class="nowPlaying == chapter.index ? 'carousel-cell active' : 'carousel-cell inactive'" :style="'cursor: pointer !important; background-image: url(' + chapter.thumbnail + '); background-size: cover'">
                            <span>{{ chapter.name }}</span>
                            <article :style="'width: ' + chapter.progressWatched"></article>
                        </div>
                    </flickity>
                </div>
                <div class="container padding-s-top">
                    <button @click="autoplay == true ? autoplay = false : autoplay = true" :class="autoplay == false ? 'button small opaque color-white' : 'button small bg-black color-white'">
                        Autoplay: <span v-if="autoplay == true">On</span><span v-if="autoplay == false">Off</span>
                    </button>
                    <button class="button small opaque color-white">
                        Need help?
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'
import sonarLogo from '@/components/sonarLogo.vue'
import Flickity from 'vue-flickity'

export default {
    name: 'expressDemo',

    components: {
        sonarLogo,
        'd-player': VueDPlayer,
        Flickity
    },

    data() {
        return {
            // developer mode (debugging ui)
            enableDev: true,
            showDebug: false,


            // dplayer
            videoOptions: {
                autoplay: true,
                theme: '#f40303',
                preload: 'auto',
                video: {
                    url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
                    pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
                    type: 'auto'
                }
            },

            // app data
            nowPlaying: 0,

            chapters: [{
                    name: "Intro to Sonar",
                    url: "http://static.smartisanos.cn/common/video/t1-ui.mp4",
                    thumbnail: "http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg",
                    progressWatched: "",
                    completed: false,
                    watched: false,
                    index: 0
                },
                {
                    name: "Provisioning",
                    url: "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4",
                    thumbnail: "https://thenypost.files.wordpress.com/2018/09/180925-earth-wobbly-more-than-normal-feature.jpg?quality=90&strip=all&w=618&h=410&crop=1",
                    progressWatched: "",
                    completed: false,
                    watched: false,
                    index: 1
                },
                {
                    name: "Messaging",
                    url: "http://static.smartisanos.cn/common/video/t1-ui.mp4",
                    thumbnail: "http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg",
                    progressWatched: "",
                    completed: false,
                    watched: false,
                    index: 2
                },
                {
                    name: "Ticketing",
                    url: "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4",
                    thumbnail: "https://thenypost.files.wordpress.com/2018/09/180925-earth-wobbly-more-than-normal-feature.jpg?quality=90&strip=all&w=618&h=410&crop=1",
                    progressWatched: "",
                    completed: false,
                    watched: false,
                    index: 3
                },
                {
                    name: "Finale",
                    url: "http://static.smartisanos.cn/common/video/t1-ui.mp4",
                    thumbnail: "http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg",
                    progressWatched: "",
                    completed: false,
                    watched: false,
                    index: 4
                }
            ],

            player: null,
            autoplay: true,


            flickityOptions: {
                initialIndex: 0,
                draggable: true,
                selectedAttraction: 0.06,
                friction: 0.4
            }
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.updateTime(0);
            window.addEventListener('resize', this.getWindowHeight);
            this.getWindowHeight()
        });
    },
    destroy() {
        window.removeEventListener('resize', this.getWindowHeight);
    },
    methods: {
        cueVideo(ind) {
            this.nowPlaying = ind
            this.$refs.player.dp.switchVideo({
                url: this.chapters[ind].url,
                pic: this.chapters[ind].thumbnail
            });
            if (this.autoplay == true) {
                this.$refs.player.dp.video.play();
            }
            this.$refs.flickity.select(ind);
        },
        updateTime() {
            var ref = this.$refs.player.dp.video
            var current = this.nowPlaying
            this.chapters[current].progressWatched = Math.round((ref.currentTime / ref.duration) * 100) + "%"
            if (this.chapters[current].watched == false) {
                this.chapters[current].watched = true
            }
        },
        ended() {
            var ind = this.nowPlaying;
            var nextIn = this.nowPlaying + 1;
            if (this.chapters[ind].progressWatched == "100%") {
                this.chapters[ind].completed = true
            } else {
                this.chapters[ind].completed = false
            }
            if (this.autoplay == true) {
                this.cueVideo(nextIn)
                this.$refs.flickity.select(nextIn);
            }
        },
        next() {
            this.$refs.flickity.next()
        },
        previous() {
            this.$refs.flickity.previous()
        },
        getWindowHeight() {
            this.$refs.container.style.height = (document.documentElement.clientHeight * 1.4285) + "px";
        }
    }
}
</script>
<style scoped>
html,
body,

.bg-darksilver {
    background: rgba(0, 0, 0, 0.94) !important;
}


.demo-container {
    min-height: 100%;
    padding-bottom: 10vh;
}

#player {
    max-width: 100%;
    min-height: 50% !important;
    max-height: 50% !important;
}

.player-overlay {
    position: absolute;
    width: 70%;
    height: 70%;
    left: 50%;
    top: 50%;
    border-radius: 12px;
    padding: 90px;
    color: white;
    font-weight: 500;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.45);
    transform: translate(-50%, -50%);
    z-index: 9999;
}

.inactive {
    opacity: .3;
}

.active {
    opacity: 1;
}

.carousel-cell {
    width: 33%;
    height: 200px;
    margin-right: 10px;
    border-radius: 5px;
    counter-increment: carousel-cell;
    transition: 400ms all ease;
}

.carousel-cell:hover {
    opacity: .6;
}

.active:hover {
    opacity: 1;
}

.carousel-cell span {
    font-size: 13px;
    font-weight: 500;
    color: white;
    padding: 8px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.carousel-cell article {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    background: #f40303
}

.walkthrough {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.side {
    padding-top: 28px;
}

.play-menu .play-container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    justify-content: center;
}

.flickity-button {
    position: absolute;
    background: hsla(200, 18%, 46%, 0.85) !important;
    border: none;
    color: #fff !important;
}

.flickity-button-icon {
    fill: white !important;
}

.super-menu {
    position: fixed;
    /*    background: #1e2e3c;*/
    background: black;
    top: 0;
    height: 50px;
    width: 100%;
    z-index: 1200 !important;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    overflow: hidden;
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, .05) inset;
    transform: translateZ(5px);
}

.super-menu .super-container {
    z-index: 1300 !important;
    padding-left: 50px;
    padding-right: 50px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    justify-content: space-between;
}

.right {
    -ms-flex-align: right;
    align-items: right;
}

.center {
    -ms-flex-align: center;
    align-items: center;
    margin-top: 3px;
}

.super-menu a,
img {
    font-size: .8rem;
    color: #fff !important;
    opacity: .8;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    letter-spacing: -.02em;
    transition: .3s all ease-in-out;
}

.super-menu a:hover,
img:hover {
    cursor: default;
}

.super-menu img {
    max-height: 1em
}

.super-1 {
    animation: superFadeIn 1s ease-in-out;
}

.super-2 {
    animation: superFadeInHeader 1.2s ease-in-out;
}

@keyframes superFadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: .8;
    }
}

@keyframes superFadeInHeader {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 0.8;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.dev-button {
    position: absolute;
    bottom: 10px;
    left: 10px;
}

.dev {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: white;
    background: rgba(0, 0, 0, 0.9);
    padding: 15px;
    font-family: 'Courier', monospace;
    font-size: 12px !important;
    z-index: 99999999;
}

.dev p {
    font-family: 'Courier', monospace;
    font-size: 12px !important;
}
</style>