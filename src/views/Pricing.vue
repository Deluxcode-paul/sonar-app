<template>
    <div>

        <body class="pricing">
            <sonarNav />
            <div class="container">
                <div>
                    <section id="header" class="code bg-white color-black padding-l-top padding-s-bottom margin-m-top">
                        <div class="container gap-large center">
                            <div class="align-center width-s-tablet margin-s-top center-block-laptop">
                                <h1 class="mobile-small">No hidden fees.<br>No costs up-front.</h1>
                                <p class="padding-xs-top lead width-s-mobile mobile-small color-darksilver">
                                    Try Sonar for only $99 and cancel at any time!
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="pricing-content padding-m-top padding-m-bottom margin-m-bottom">
                <calculator />
                <div class="container-l bg-paper" style="width: 100%">
                    <div class="container margin-m-top padding-l-top padding-m-bottom">
                        <div class="center align-center padding-m-bottom">
                            <h2>Let us do the heavy lifting.</h2>
                        </div>
                        <div class="margin-m-top margin-s-bottom grid-2">
                            <div class="span-1">
                                <div style="margin-top: 15%" class="included-box">
                                    <h5 class="padding-s-bottom">Included in your<br>monthly pricing:</h5>
                                    <ul class="includes-list padding-s-bottom">
                                        <li>Customer Support</li>
                                        <li>High-touch onboarding</li>
                                        <li>Unlimited employee accounts</li>
                                        <li>CDN-accelerated hosting</li>
                                        <li>No server required</li>
                                        <li>No ongoing maintenance</li>
                                        <li>No software updates required</li>
                                        <li>Redundant backups</li>
                                        <li>Access to the Sonar Community</li>
                                    </ul>
                                    <a href="/register" class="button deepblue big" style="color: white">Get started now</a>
                                </div>
                            </div>
                            <div class="span-1">
                                <h5>Hosting</h5>
                                <p class="padding-s-bottom color-darksilver">Eliminate the pain of resource monitoring, scaling, and application optimization. We’ve got it handled.</p>
                                <h5>Backups</h5>
                                <p class="padding-s-bottom color-darksilver">Your data is streamed in real time to redundant locations with military-grade encryption.</p>
                                <h5>Security</h5>
                                <p class="padding-s-bottom color-darksilver">We take security very seriously. Let us handle software patches, updates, and firewalls, so you can rest easy, knowing your data is protected.</p>
                                <h5>Cloud</h5>
                                <p class="padding-s-bottom color-darksilver">The Sonar cloud is secure, offers IPv4 and IPv6 connectivity, and is designed to seamlessly integrate with your existing network.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-l bg-flow" style="width: 100%">
                    <div class="container padding-xl-top padding-m-bottom">
                        <div class="center align-center padding-s-top padding-m-bottom">
                            <h2 class="color-white">We make signing up easier.</h2>
                        </div>
                        <div class="center-block flex-column center-x">
                            <div class="margin-s-top padding-m-bottom">
                                <accountFlowHorizontal />
                            </div>
                        </div>
                        <div class="align-center margin-m-top margin-s-bottom">
                            <a href="/register" class="button opaque big" style="color: white">Get started now</a>
                        </div>
                    </div>
                </div>
                <div class="container-l bg-paper grid-2 padding-m-top padding-m-bottom" style="width: 100%">
                    <div class="flex-column center align-center" style="height: 500px;">
                        <div style="padding: 18%">
                            <h4 class="color-black padding-s-bottom">We're here to help.</h4>
                            <p class="color-black">We’re serious about documentation and training. Each section of Sonar has comprehensive docs, made contextually available as you navigate the system. It’s always up to date - just one click, and you’ve got the information you need.</p>
                            <div class="flex center padding-s-top">
                                <a href="/docs" class="button deepblue big" style="color: white">Documentation</a>
                                <a href="/api" class="button blue big" style="color: white">API</a>
                            </div>
                        </div>
                    </div>
                    <div class="flex-column center align-center" style="height: 500px">
                        <div style="padding: 18%">
                            <h4 class="color-black padding-s-bottom">Learning, made easy.</h4>
                            <p class="color-black">With Sonar Casts, you get a massive set of online videos which are frequently updated to cover new sections of Sonar, as well as technical training on integrated products.</p>
                            <div class="flex center padding-m-top">
                                <a href="/casts" class="button deepblue big" style="color: white">Sonar Casts</a>
                            </div>
                        </div>
                    </div>
                    <landingQuote class="feature-quote-inner span-2" bodyClass="quote-text color-black" personClass="strong strip color-black" containerClass="width-m align-center center-block margin-xs bg-paper" body="We had 2 systems and every month it would take 24 hours of employee time to process our billing and now it happens automatically. " person="Glenwood Springs, ISP" photoUrl="/assets/alec.jpg" />
                </div>
                <div class="container margin-xl-top margin-s-bottom">
                    <h4 class="margin-s-bottom">Frequency asked questions</h4>
                    <accordion src="/assets/api/faq_pricing.json" />
                </div>
                <div class="container included-box margin-m-bottom">
                    <p class="faq-text">For networks larger than 50,000 subscribers, please contact our enterprise group at
                        +1 (702) 447-1247 or sales@sonar.software.</p>
                </div>
            </div>
            <div class="container padding-l-top padding-m-bottom">
                <h3 class="align-center">Schedule a demo today.</h3>
                <p class="lead align-center">Choose a demo option below to get started.</p>
                <landingDemoCards />
            </div>
            <sonarFooter />
        </body>
    </div>
</template>
<script>
import landingDemoCards from '@/components/landing/landingDemoCards.vue'
import sonarNav from "../components/sonarNav.vue";
import sonarFooter from "../components/sonarFooter.vue";
import calculator from "@/components/pricing/calculator.vue";
import accordion from '@/components/utils/accordion.vue';
import accountFlowHorizontal from '@/components/pricing/accountFlowHorizontal.vue';
import landingQuote from '../components/landing/landingQuote.vue';

export default {
    name: "pricing",
    components: {
        sonarNav,
        sonarFooter,
        calculator,
        accordion,
        accountFlowHorizontal,
        landingDemoCards,
        landingQuote
    }
};
</script>
<style scoped>
.bg-flow {
    background: linear-gradient(to right, black, #0c2638)
}

.included-box {
    margin-bottom: 40px;
}

@media screen and (min-width: 992px) {
    .included-box {
        margin-bottom: 0px;
    }

    .included-box.desktop-swap {}
}

.included-box .includes-list {
    padding-left: 0px;
    margin: 0px;
    font-size: 16px;
    line-height: 27.2px;
    list-style: none;
    color: rgba(0, 0, 0, 0.9)
}

.included-box .includes-list li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
}

.included-box .includes-list li::before {
    content: "";
    position: absolute;
    top: 12px;
    left: 0px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(90deg, #0052f5, #09f);
}

.faq-text {
    font-size: 16px;
    line-height: 1.7;
    color: rgba(0, 0, 0, 0.7)
}

@media screen and (min-width: 992px) {
    .faq-text {
        margin-bottom: 24px;
    }
}


.anim-1 {
    animation: fadeUp 1s ease-in;
}

.anim-2 {
    animation: fadeUp 2s ease-in;
}

.anim-3 {
    animation: fadeUp 3s ease-in;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(4px) !important;
    }

    to {
        opacity: 1;
        transform: translateY(0px) !important;
    }
}

.color-darksilver {
    color: rgba(0, 0, 0, 0.6);
}

.container {
    max-width: 1000px
}
</style>