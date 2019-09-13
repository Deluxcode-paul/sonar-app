<template>
    <div>
        <body class="nav-night frontpage">
            <sonarNav />
            <landingHero video="v2" title="Build a smarter, more efficient network." desktopBody="The Sonar platform is designed to help WISPs grow and maintain a healthy network. With intelligent automation, we’ll help you solve problems before they even arise." mobileBody="The Sonar platform is designed to help WISPs keep their network in good shape. With intelligent automation, we’ll help you solve problems before they even arise." ctaBody="Book a demo" ctaPage="/demo" classNames="code bg-black color-white padding-xl-top padding-l-bottom" titleStyle="font-size: 3.7em; line-height: 1.05em" />
            <landingLogos class="paaddingAllBlock" />
            <hr>
            <landingFeature class="paaddingAllBlock" video="cable/BillingRecovered" animation="animated fadeInRightBig" classNames="bg-white" title="Get the tools to grow" body="Managing a growing network can be difficult. Sonar is here to help. Our dynamic network mapping provides a clear, real-time visualization of your WISP network. The visualization isn’t just pretty – it provides a wealth of valuable information and key insights, giving you the tools you need to take your business to the next level." ctaPage="/demo" ctaBody="Book a Demo" />
            <landingFeature class="paaddingAllBlock" video="cable/Provisioning" animation="animated fadeInLeftBig" classNames="bg-paper-light" title="Billing and provisioning, together" body="With Sonar, all your data is in one place. So when a problem arises, the single, integrated interface lets you troubleshoot quicker than ever before. No more time wasted hopping around from one software to another. Everything’s right where you need it, giving you more time to focus on the things that matter – like growing your business." ctaPage="/demo" ctaBody="See Sonar in action" />
            <landingFeature class="paaddingAllBlock" video="cable/NetworkLong" animation="animated fadeInRightBig" classNames="bg-white" title="Wave goodbye to manual provisioning" body="Manual provisioning can be a slow, error-prone, and laborious process. So let’s automate it. Automated provisioning speeds things up at every level, for everyone from technicians to customers. The Sonar platform assigns IPs automatically, and relays key information to installers in real-time. The result is next-level efficiency." ctaPage="/pricing" ctaBody="See pricing" />
            <lazy-component>
                <features />
            </lazy-component>
            <div class="bg-api container-l padding-l-top padding-l-bottom" style="width:100%">
                <div class="container grid-2">
                    <landingCode />
                    <landingCodeForm style="max-width: 100%;" />
                </div>
            </div>
            <div class="container-l bg-black padding-l-bottom" style="width:100%">
                <div class="container padding-l-top padding-l-bottom">
                    <h3 class="align-center color-white">Schedule a demo today.</h3>
                    <p class="lead align-center color-silver">Choose a demo option below to get started.</p>
                </div>
                <landingDemoCards />
            </div>
            <!--             <landingCaseForm style="padding-bottom: 200px" /> -->
            <landingCTA class="bg-black" showButton="true" imageSource="/assets/deviso.png" buttonClass="cta icon color-white download-cta" ctaClassNames="container-l bg-gradient color-white grid-2 center-y radius-m shadow-l padding-m-left strip-padding-tablet" title="Try Sonar today" subtitle="and discover the difference." button="Schedule a demo" buttonPage="demo" svgInfo="M13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 C 0 5.82 5.82 0 13 0 Z M 12 16.586 L 9.739 14.325 C 9.349 13.935 8.716 13.935 8.325 14.325 C 7.935 14.716 7.935 15.349 8.325 15.739 L 12.285 19.699 C 12.485 19.9 12.75 19.997 13.012 19.992 C 13.275 19.997 13.539 19.9 13.739 19.699 L 17.699 15.739 C 18.09 15.349 18.09 14.716 17.699 14.325 C 17.309 13.935 16.675 13.935 16.285 14.325 L 14 16.61 L 14 7 C 14 6.448 13.552 6 13 6 C 12.448 6 12 6.448 12 7 Z" />
            <sonarFooter />
        </body>
    </div>
</template>
<script>
// components
import sonarNav from "@/components/sonarNav.vue";
import sonarFooter from "@/components/sonarFooter.vue";
import landingHero from "@/components/landing/landingHero.vue";
import landingLogos from "@/components/landing/landingLogos.vue";
// import landingQuote from "@/components/landing/landingQuote.vue";
import landingFeature from "@/components/landing/landingFeature.vue";
import landingCTA from "@/components/landing/landingCTA.vue";
import landingDemoCards from "@/components/landing/landingDemoCards.vue";
// import landingCaseForm from "@/components/landing/landingCaseForm.vue";
import features from '@/components/home/features.vue';
import landingCode from "@/components/landing/landingCode.vue";
import landingCodeForm from "@/components/landing/landingCodeForm.vue";

export default {
    name: "MDU",
    components: {
        sonarNav,
        landingDemoCards,
        sonarFooter,
        landingHero,
        landingLogos,
        // landingQuote,
        landingCTA,
        // landingCaseForm,
        landingFeature,
        features,
        landingCode,
        landingCodeForm
    }
};
</script>
<style lang="scss">
    .paaddingAllBlock {
        padding: 100px 20px;
    }
    @media (max-width: 1000px) {
        .paaddingAllBlock {
            padding: 50px 20px 0;
        }
    }
</style>
