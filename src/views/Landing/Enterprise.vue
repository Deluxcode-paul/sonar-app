<template>
    <div>
        <body class="nav-night frontpage">
        <sonarNav />
        <landingHero page="Enterprise" title="Do more with the power of Sonar" ctaBody="Book a demo" ctaPage="/demo" classNames="code bg-black color-white padding-xl-top padding-l-bottom" titleStyle="font-size: 3.7em; line-height: 1.05em" />
        <landingFeature class="paaddingAllBlock" video="cable/BillingRecovered" animation="animated fadeInRightBig" classNames="bg-white" title="" body="Business simplification is a strategic imperative for today’s enterprise. With heightened customer expectations and rapidly changing technology, meeting the growing demands of enterprise can become burdensome. Just as no two businesses are exactly alike, neither are the solutions needed to solve complex workflows. That’s why we use fully customizable solutions that match the way our customers do business. We automate, and we innovate. The end result is enhanced efficiency and higher profitability. Schedule a live, personalized demo today." />
        <booking-form />
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
    import bookingForm from "@/components/landing/bookingForm.vue";

    export default {
        name: "Enterprise",
        components: {
            sonarNav,
            sonarFooter,
            landingHero,
            bookingForm,
            landingFeature
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
