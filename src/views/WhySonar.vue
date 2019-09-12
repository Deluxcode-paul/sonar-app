<template>
    <div>
        <sonarNav />
        <div class="sonarHeader">
            <div class="titleVideo">
                <div class="titleSonar">
                    <h1>The Sonar Way</h1>
                    <p>
                        It isn’t just our product that sets us apart from the competition.
                        At Sonar, we pride ourselves on taking a different approach to customer service – something more personal, and more involved. We do business the Sonar way.
                        <br>
                        <span @click="navigate">Find out more about the Sonar way below, or jump straight into the numbers.</span>
                    </p>
                </div>
                <div class="videoSonar">
                    <intersect @enter="videoPlay" @leave="videoPause">
                        <video height="auto" width="505px" ref="motionGraphic" autoplay muted playsinline>
                            <source src="../../public/assets/video/fiber/HeadMapping.mp4" type="video/mp4" />
                        </video>
                    </intersect>
                </div>
            </div>
        </div>
        <v-parallax
                dark
                class="blockSonar"
                src="https://hightech.fm/wp-content/uploads/2019/03/ns-1560x877.jpg"
        >
            <div class="blockContent">
                <h1>Building partnerships</h1>
                <p>
                    Our customers are our partners. That’s why our pricing is structured in such a way that our success is aligned with yours. Ultimately, our goal is to help you grow.
                    And we believe in good first impressions. That’s why on-boarding is free. We don’t believe in hitting new customers with unwarranted fees for the privilege of coming aboard. We’re happy to have you here.
                    The way we see it, this is the beginning of a beautiful friendship.
                </p>
            </div>
        </v-parallax>
        <div class="blockSonar">
            <div class="blockContent">
                <h1>An opportunity, not an obstacle</h1>
                <p>
                    Many companies have fears about leaving behind their legacy software. They worry about downtime, and the difficulty of moving data.
                    That’s why we make the transition to Sonar earth-shatteringly simple. We’ll be on-hand to help with the heavy lifting of data. We’ll even help identify areas of revenue leakage and missed opportunities.
                    We’ll tidy up your customer data, ensuring you’re in a much better place after the transition to Sonar.
                    Oh, and we’re an efficient bunch. On-boarding with Sonar takes days and weeks, rather than months and years. So you’ll be up and running in no time.
                </p>
            </div>
        </div>
            <v-parallax
                    dark
                    class="blockSonar"
                    src="https://hightech.fm/wp-content/uploads/2019/03/ns-1560x877.jpg"
            >
                <div class="blockContent">
                    <h1>Start as you mean to go on</h1>
                    <p>
                        Our first-rate customer service doesn’t stop at day one. You can get us anytime, anywhere – via phone, email, or through the website.
                        We’re here every step of the way to help you get the most from the Sonar product, and use it to really grow your business.
                        After all, that’s what Sonar was built for.
                        Helpful documentation is always just a click away, and is made contextually available as you navigate the system.
                        For new features, our Sonar Casts provide updates to keep you up to speed.
                    </p>
                </div>
            </v-parallax>
        <sonarFooter />
    </div>
</template>
<script>
    import sonarNav from "../components/sonarNav.vue";
    import sonarFooter from "../components/sonarFooter.vue";
    // vue-intersect polyfill
    require('intersection-observer');

    // vue-intersect
    // import Intersect from 'vue-intersect'

    export default {
        name: "whysonar",
        components: {
            sonarNav,
            sonarFooter,
        },
        methods: {
            navigate() {
                this.$router.push({name:'pricing'})
            },
            videoPlay() {
                this.$refs.motionGraphic.play()
            },
            videoPause() {
                this.$nextTick(function() {
                    this.$refs.motionGraphic.pause();
                    this.$refs.motionGraphic.currentTime = '0'
                })
            }
        }
    };
</script>
<style scoped>
    .sonarHeader {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 160px 0 40px;
        align-items: center;
        min-height: 700px;
    }
    .titleVideo {
        max-width: 1150px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .blockSonar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 40px 0;
        align-items: center;
        min-height: 650px;
    }
    .blockContent {
        max-width: 1150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .titleSonar {
        width: 50%;
    }
    h1 {
        font-size: 3.7em;
        line-height: 1.05em;
    }
    p {
        font-size: 24px;
        line-height: 1.5em;
    }
    .titleSonar span {
        cursor: pointer;
    }
    .titleSonar span:hover {
        cursor: pointer;
        color: rgba(35, 88, 248, 1);
    }
    @media (max-width: 1035px) {
        .titleVideo {
            max-width: 1150px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .titleSonar {
            width: 100%;
        }
        .videoSonar {
            display: none;
        }
    }
</style>
