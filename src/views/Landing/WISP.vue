<template>
    <div>
        <body class="nav-night frontpage">
            <sonarNav />
            <landingHero video="v2" title="Build a smarter, more efficient network." desktopBody="The Sonar platform is designed to help WISPs grow and maintain a healthy network. With intelligent automation, we’ll help you solve problems before they even arise." mobileBody="The Sonar platform is designed to help WISPs grow and maintain a healthy network. With intelligent automation, we’ll help you solve problems before they even arise." ctaBody="Book a demo" ctaPage="/demo" classNames="code color-white padding-l margin-m-top homeBkStyle" />
            <landingFeature class="paaddingAllBlock" video="WISP/1-billing" animation="animated fadeInRightBig" classNames="bg-white" title="Decrease workload, increase profits" body="Managing a growing WISP has its complications. User data is scattered all over, ultimately leading to revenue leakage. Meanwhile, patched-together legacy systems make it hard to identify the root cause of dwindling profits. Very quickly, revenue starts to fall through the cracks. Sonar’s razor sharp billing accuracy puts you back in control of your business. By keeping all your data in one place, we’ll eliminate hours of manual labor. You can toss out those tedious spreadsheets and say goodbye to cash-flow chaos. Finally, it’s time to focus on the things that matter, like growing your business."/>
            <landingFeature class="paaddingAllBlock" video="WISP/2-provisioning" animation="animated fadeInLeftBig" classNames="bg-paper-light" title="Provision like a pro" body="Manual provisioning can be a slow, error-prone, and laborious process. Not to mention the hourly cost of field technicians. With Sonar’s automated provisioning, your technicians can get the job done fast. Fingertip access to data in-the-field lets technicians service both new installs and existing problems with unprecedented efficiency. We’ll also lighten the load for technicians. The Sonar platform assigns IPs automatically, and relays key info to installers in real time. With a simple radio scan, provisioning takes place quietly in the background, saving an average of 15 minutes per install. That’s next-level efficiency."/>
            <landingFeature class="paaddingAllBlock" video="WISP/3-mapping" animation="animated fadeInRightBig" classNames="bg-white" title="Build a proactive network" body="Slow or intermittent service brings the wrath of angry customers, piling up support calls and tickets. Every minute of downtime equates to lost revenue and churn. So why wait for problems to mount up? Let’s build a more proactive network. Pulse – our dynamic network mapping tool – gives you a real-time visualization of your entire WISP network. The visualization isn’t just pretty – it provides a wealth of valuable info and key insights, allowing you to identify and diagnose issues before they arise."  buttonTrue="true" pageDemoUrl="/demo" pageDemo="Book a Demo" />
            <lazy-component>
                <features />
            </lazy-component>
            <div class="mobileNone paaddingAllBlock bg-black" style="width:100%">
                <div class="container grid-2">
                    <landingCode />
                    <landingCodeForm style="max-width: 100%;" />
                </div>
            </div>
            <div class="container-l bg-black padding-l-bottom" style="width:100%">
                <landingDemoCards />
            </div>
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
import landingDemoCards from "@/components/landing/landingDemoCards.vue";
import features from '@/components/home/features.vue';
import landingCode from "@/components/landing/landingCode.vue";
import landingCodeForm from "@/components/landing/landingCodeForm.vue";

export default {
    name: "WISP",
    components: {
        sonarNav,
        landingDemoCards,
        sonarFooter,
        landingHero,
        landingFeature,
        features,
        landingCode,
        landingCodeForm
    }
};
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
