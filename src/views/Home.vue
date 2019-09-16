<template>
    <div>
        <body class="nav-night frontpage">
            <sonarNav />
            <landingHero video="3D_Hero_6" title="Do business the Sonar way" desktopBody="Find out how Sonar is helping ISPs simplify day-to-day processes and focus on growing their business." mobileBody="Find out how Sonar is helping ISPs simplify day-to-day processes and focus on growing their business." ctaBody="Schedule demo" ctaPage="demo" classNames="code color-white padding-l margin-m-top homeBkStyle" />
            <landingFeature class="paaddingAllBlock" video="cable/BillingRecovered" animation="animated fadeInRightBig" classNames="bg-paper-light" title="Discover Sonar" body="Sonar is a modern, cloud-based solution that solves everyday problems for ISPs. We simplify processes like billing, provisioning, and customer service, bringing them together in one place. Sonar is intelligent automation for ISPs. We reduce human error, streamline day-to-day processes, and improve your customer experience. Sonar is an opportunity. We help ISPs build a more modern, more flexible, and more streamlined business." buttonTrue="true" pageDemoUrl="/demo" pageDemo="Book a Demo"  />
            <features class="paaddingAllBlock"/>
            <lazy-component class="paaddingAllBlock">
                <landingFeature video="cable/BillingRecovered" animation="animated fadeInLeftBig" classNames="bg-paper-light" title="First impressions are everything" body=" we like to get started on the right foot. At Sonar, we take great pride in our white glove on-boarding process. It’s personal, it’s fast, and – best of all – it’s 100% included in the price of the software. The Sonar product is at the heart of what we do, but the value we provide our clients extends well beyond the software itself, and beyond on-boarding, to ongoing customer support. Find out more about The Sonar Way link to Why Sonar page" buttonTrueWatch="true" pageDemoUrl="/demo" pageDemo="Book a Demo" />
            </lazy-component>
            <solutions  />
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
<style lang="scss" scoped>
    hr {
        background: #cecece;
        height: 1px;
    }
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
