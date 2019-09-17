<template>
    <div>
        <body class="nav-night frontpage">
            <sonarNav />
            <landingHero  title="Do business the Sonar way" desktopBody="Find out how Sonar is helping ISPs simplify <div class='noBr'> day-to-day </div> processes and focus on growing their business." ctaBody="Schedule demo" ctaPage="demo" classNames="code color-white padding-l margin-m-top homeBkStyle" />
            <landingFeature class="paaddingAllBlock" video="cable/BillingRecovered" animation="animated fadeInRightBig" classNames="bg-paper-light" title="Sonar is an opportunity!" body="Sonar is a modern, cloud-based solution that solves everyday problems for ISPs. We simplify processes like billing, provisioning, and customer service, bringing them together in one place." buttonTrue="true" pageDemoUrl="/demo" pageDemo="Book a Demo"  />
            <features class="paaddingAllBlock"/>
            <lazy-component class="paaddingAllBlock">
                <landingFeature video="home/firstImpressions" typeVideo="webm" animation="animated fadeInLeftBig" classNames="bg-paper-light" title="First impressions are everything" body=" At Sonar, we take great pride in our white glove on-boarding process. It’s <span class='boldText'> personal </span>, it’s <span class='boldText'> fast </span>, and – <span class='boldText'> best </span> of all – it’s <span class='boldText'> 100% </span> included in the price of the software. The Sonar product is at the heart of what we do!" buttonTrueWatch="true" pageDemoUrl="/demo" pageDemo="Book a Demo" />
            </lazy-component>
            <solutions />
            <div class="mobileNone paaddingAllBlock bg-black" style="width:100%">
                <div class="container grid-2">
                    <landingCode />
                    <landingCodeForm style="max-width: 100%;" />
                </div>
            </div>
            <div class="landingDesctop">
                <v-parallax src="/assets/landingParalax.jpg">
                    <landingDemoCards />
                </v-parallax>
            </div>
            <div class="landingMobile mobileNone">
                <landingDemoCards />
            </div>
            <sonarFooter class="paaddingAllBlock" />
            <cookieAgree />
        </body>
    </div>
</template>
<script>
// components
import sonarNav from '../components/sonarNav.vue'
import sonarFooter from '../components/sonarFooter.vue'
import landingHero from '../components/landing/landingHero.vue'
import landingFeature from '@/components/landing/landingFeature.vue'
import landingDemoCards from '@/components/landing/landingDemoCards.vue'
import features from '@/components/home/features.vue'
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
        landingDemoCards,
        solutions,
        cookieAgree,
        features,
        landingCode,
        landingCodeForm
    }
}
</script>
<style lang="scss" scoped>
    .paaddingAllBlock {
        padding: 100px 20px;
    }
    .landingMobile {
        display: none;
    }
    @media (max-width:1500px) {
        .landingDesctop {
            display: none;
        }
        .landingMobile {
            display: block;
            background-image: url("/assets/landingParalax.jpg");
            background-size: 100%;
            background-position: center;
        }
        .paaddingAllBlock {
            padding: 50px 20px;
        }
    }
    @media (max-width:1024px) {
        .mobileNone {
            display: none !important;
        }
    }
</style>
