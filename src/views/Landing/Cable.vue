<template>
    <div>
        <body class="nav-night frontpage">
            <sonarNav />
            <landingHero video="network_2" title="Build a smarter, more efficient network." desktopBody="Sonar makes network management simple, helping cable providers bring their service into the 21st century." mobileBody="Sonar makes network management simple, helping cable providers bring their service into the 21st century." ctaBody="Book a demo" ctaPage="/demo" classNames="code bg-black color-white padding-xl-top padding-l-bottom" titleStyle="font-size: 3.7em; line-height: 1.05em" />
            <landingFeature class="paaddingAllBlock" video="cable/BillingRecovered" animation="animated fadeInRightBig" classNames="bg-white" title="Goodbye legacy. Hello modernity." body="Growing cable companies face a range of challenges that lead to profit erosion. Changing market conditions and increasing customer expectations are making the modernization a nightmare. It’s time to wake up. Sonar’s agile billing engine gives you the flexibility you need to expand your business freely. Say goodbye to outdated legacy systems, and build your own legacy of customer satisfaction and profit." ctaPage="/demo" ctaBody="Book a Demo" />
            <landingFeature class="paaddingAllBlock" video="cable/Provisioning" animation="animated fadeInLeftBig" classNames="bg-paper-light" title="On-the-go provisioning" body="Time is scarce. We get it. And there’s no greater time-waster than manual provisioning. It’s costly, error-prone, and inefficient. Save time and money by eradicating these redundant tasks that are harming your bottom line. Our seamless integration for cable provisioning will empower your technicians, eliminating the need for direct access to your DOCSIS network. Do things the Sonar way ­– reduce human error, keep your network secure, and improve your customer experience." ctaPage="/demo"/>
            <landingFeature class="paaddingAllBlock" video="cable/NetworkLong" animation="animated fadeInRightBig" classNames="bg-white" title="Monitor your network in real time" body="Your tier one support teams are in crisis mode, frantic customers are blowing up your phones, and it’s critical to get to the root cause. What now? When an outage appears or equipment fails, it’s imperative to identify connectivity issues promptly. With Pulse, your support staff can pinpoint affected areas in real time. They can also view the topology and overall health of your network, and reduce escalations. In short, Pulse gives them the power to solve issues in seconds." buttonTrue="true" pageDemoUrl="/demo" pageDemo="Book a Demo" ctaPage="/pricing" ctaBody="See pricing" />
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
import landingFeature from "@/components/landing/landingFeature.vue";
import landingCTA from "@/components/landing/landingCTA.vue";
import landingDemoCards from "@/components/landing/landingDemoCards.vue";
import features from '@/components/home/features.vue';
import landingCode from "@/components/landing/landingCode.vue";
import landingCodeForm from "@/components/landing/landingCodeForm.vue";

export default {
    name: "Cable",
    components: {
        sonarNav,
        landingDemoCards,
        sonarFooter,
        landingHero,
        landingCTA,
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
