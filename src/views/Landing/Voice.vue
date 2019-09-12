<template>
    <div>

        <body class="nav-night frontpage">
            <sonarNav />
            <landingHero video="v2" title="Build a smarter, more efficient network." desktopBody="Sonar provides a straightforward solution to the growing complexities of telecoms. Keep things simple, and focus your efforts on growth." mobileBody="Sonar provides a straightforward solution to the growing complexities of telecoms. Keep things simple, and focus your efforts on growth." ctaBody="Book a demo" ctaPage="/demo" classNames="code bg-black color-white padding-xl-top padding-l-bottom" titleStyle="font-size: 3.7em; line-height: 1.05em" />
            <landingLogos />
            <landingFeature video="cable/BillingRecovered" animation="animated fadeInRightBig" classNames="bg-white" title="Reduce the burden of billing" body="Automated billing reduces the burden of revenue leakage, providing more flexible billing and more complex pricing tiers. Ultimately, you can create better value for your customers, with bundled packages of voice, data, TV, and other additional service add-ons. Automate, simplify, and focus your efforts on higher-value work. " ctaPage="/demo" ctaBody="Book a Demo" />
            <landingFeature video="cable/Provisioning"  animation="animated fadeInLeftBig" classNames="bg-paper-light" title="Save time and money while paying taxes" body="As telecom tax grows increasingly complex every day, it’s difficult to stay on top of new rates, rules, and technologies. With outdated systems, the problems can add up quickly, creating compliance bottlenecks and hindering growth. Why put your business at risk? Our seamless tax integration modernizes your entire operation, improving billing transparency with precise jurisdiction identification. And the real bonus? You no longer need to worry about tax calculations and remittance. Because we automate that, too." ctaPage="/demo" ctaBody="See Sonar in action" />
            <landingFeature video="cable/NetworkLong" animation="animated fadeInRightBig" classNames="bg-white" title="Provision on-demand " body="Manual provisioning is time-consuming, and hurts your bottom line. Simplifying your day-to-day provisioning tasks will increase productivity and greatly enhance customer experience. Sonar’s robust API lets you provision on-demand, automatically assigning DIDs and configuring new accounts with ease. Remove the monotony of searching for the next available number. Automate it!" buttonTrue="true" pageDemoUrl="/demo" pageDemo="Book a Demo" ctaPage="/pricing" ctaBody="See pricing" />
            <lazy-component>
                <features />
            </lazy-component>
            <landingQuote class="feature-quote-inner" bodyClass="quote-text line-height color-black" personClass="strong strip color-black" containerClass="width-l align-center center-block margin-s" body="Sonar has an OUTSTANDING support team that you can reach on the phone, or email with fast response times. They are always there to help and find solutions if you need one. The onboarding process was smooth and it made our move to Sonar very easy. The customer support team always listen to the needs of their customers" person="Connie Bailey, Signalnet Broadband" :invertLogo="true" logo="signalnet.png" />
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
import landingQuote from "@/components/landing/landingQuote.vue";
import landingFeature from "@/components/landing/landingFeature.vue";
import landingCTA from "@/components/landing/landingCTA.vue";
import landingDemoCards from "@/components/landing/landingDemoCards.vue";
// import landingCaseForm from "@/components/landing/landingCaseForm.vue";
import features from '@/components/home/features.vue';
import landingCode from "@/components/landing/landingCode.vue";
import landingCodeForm from "@/components/landing/landingCodeForm.vue";

export default {
    name: "Voice",
    components: {
        sonarNav,
        landingDemoCards,
        sonarFooter,
        landingHero,
        landingLogos,
        landingQuote,
        landingCTA,
        // landingCaseForm,
        landingFeature,
        features,
        landingCode,
        landingCodeForm
    }
};
</script>
