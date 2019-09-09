<template>
    <div>
        <body class="nav-night frontpage">
            <sonarNav />
            <landingHero video="3D_Hero_6" title="Billing & OSS. Reimagined." desktopBody="Scalable, intuitive, comprehensive and completely redesigned. Learn why hundreds of ISPs trust Sonar." mobileBody="Scalable, intuitive, comprehensive and completely redesigned." ctaBody="Schedule demo" ctaPage="demo" classNames="code bg-black color-white padding-l margin-m-top" />
            <landingLogos />
            <landingFeature video="cloud_paper" classNames="bg-paper-light" title="Built for scalability." body="We make growing your WISP look easy with our modern cloud-based solution. Our all in one dashboard provides fingertip access on the go, while centralizing your customer support to create a frictionless experience, for both you and your customers." ctaPage="/demo" ctaBody="Book a demo" />
            <div class="container-m bg-paper-light feature-quote" style="margin-top: -300px">
                <landingQuote class="feature-quote-inner" bodyClass="quote-text color-black" personClass="strong strip color-black" containerClass="width-l align-center center-block margin-s" body="We had 2 systems and every month it would take 24 hours of employee time to process our billing and now it happens automatically. " person="Glenwood Springs, ISP" :invertLogo="true" logo="consolidated.png" />
            </div>
            <features />
            <lazy-component>
                <landingFeature video="cloud_paper" classNames="bg-paper-light" title="Built for scalability." body="We make growing your WISP look easy with our modern cloud-based solution. Our all in one dashboard provides fingertip access on the go, while centralizing your customer support to create a frictionless experience, for both you and your customers." ctaPage="/demo" ctaBody="Book a demo" />
            </lazy-component>
            <div class="bg-black container-l padding-l-top padding-l-bottom" style="width:100%">
                <div class="container grid-2">
                    <landingCode />
                    <landingCodeForm style="max-width: 100%;" />
                </div>
            </div>
            <solutions />
            <stats />
            <div class="container padding-l-top padding-m-bottom">
                <h3 class="align-center">Schedule a demo today.</h3>
                <p class="lead align-center">Choose a demo option below to get started.</p>
            </div>
            <landingDemoCards />
            <div class="container bg-white feature-quote padding-m-top">
                <landingQuote class="feature-quote-inner" bodyClass="quote-text color-black" personClass="strong strip color-black" containerClass="width-l align-center center-block margin-s" body="We had 2 systems and every month it would take 24 hours of employee time to process our billing and now it happens automatically. " person="Glenwood Springs, ISP" :invertLogo="true" logo="consolidated.png" />
            </div>
            <div class="container bg-white padding-m-bottom" style="width:100%">
                <div class="container align-center padding-m-bottom">
                    <div class="grid-2">
                        <div class="padding-s-left padding-s-right">
                            <award>
                            </award>
                        </div>
                        <div class="padding-s-left padding-s-right">
                            <award>
                            </award>
                        </div>
                    </div>
                </div>
            </div>
            <sonarFooter />
            <cookieAgree />
        </body>
    </div>
</template>
<script>
// components
import sonarNav from '../components/sonarNav.vue'
import sonarFooter from '../components/sonarFooter.vue'
import landingHero from '../components/landing/landingHero.vue'
import landingQuote from '../components/landing/landingQuote.vue'
import landingFeature from '@/components/landing/landingFeature.vue'
import stats from '@/components/home/stats.vue'
import landingDemoCards from '@/components/landing/landingDemoCards.vue'
import features from '@/components/home/features.vue'
import award from '@/components/home/award.vue'
import landingLogos from '@/components/landing/landingLogos.vue'
import solutions from '@/components/home/solutions.vue'
import cookieAgree from '@/components/popup/cookieAgree.vue'
import landingCode from "@/components/landing/landingCode.vue";
import landingCodeForm from "@/components/landing/landingCodeForm.vue";


export default {
    name: 'home',
    components: {
        sonarNav,
        sonarFooter,
        landingHero,
        landingFeature,
        landingQuote,
        landingLogos,
        stats,
        award,
        landingDemoCards,
        solutions,
        cookieAgree,
        features,
        landingCode,
        landingCodeForm
    }
}
</script>
<style scoped>
li.header {
    content: '';
    color: black;
    font-weight: 600;
}

li {
    color: black;
}

li:hover {
    color: black;
}

ul.check-list li.header:before,
li.x:before,
li:before {
    position: absolute;
    top: 16px;
    left: 2px;
    margin-top: -6px;
    width: 15px;
    height: 11px;
    background-image: url();
    background-repeat: no-repeat;
    content: "";
}

.before,
.after {
    color: black !important;
}
</style>
