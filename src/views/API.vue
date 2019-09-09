<template>
    <div>

        <body class="nav-deepblue frontpage">
            <sonarNav />

            <landingHero video="v1" title="Developers come first." desktopBody="With Sonar's intuitive GraphQL-based API, the only limit is your imagination." mobileBody="Scalable, intuitive, comprehensive and completely redesigned." ctaBody="Schedule a demo" ctaPage="demo" classNames="code bg-deepblue color-white padding-l margin-m-top" />

            <div class="container padding-m-top">
                <apiCards />
            </div>

            <div class="container padding-l-top">
                <h3 class="color-black align-center">GraphQL makes it easy.</h3>
                <p class="padding-m-bottom color-silver center-block width-m align-center lead">Sonar leverages the power of GraphQL to give you a robust, simple and highly-documented API your development team will love.</p>
                <apiShowcase />
            </div>

            <div class="container feature-quote">
                <landingQuote class="feature-quote-inner" bodyClass="quote-text color-black" personClass="strong strip color-black" containerClass="width-l align-center center-block margin-xs" body="We had 2 systems and every month it would take 24 hours of employee time to process our billing and now it happens automatically. " person="Glenwood Springs, ISP" photoUrl="/assets/alec.jpg" />
            </div>

            <div class="container padding-l-top">
                <h3 class="color-black align-center">Integrate with your hardware.</h3>
                <p class="padding-m-bottom color-silver center-block width-m align-center lead">Legacy hardware? No problem! Our API will make it easy to have everything seamlessly work together.</p>
                <apiShowcase />
            </div>

            <div class="container align-center center padding-l-top padding-l-bottom">
                <h5 class="color-black padding-s-bottom align-center">Looking for more?</h5>
                <button class="button deepblue align-center center color-white">Read the documentation</button>
            </div>

                <div class="container padding-l-top padding-l-bottom">
                    <h3 class="align-center">Schedule a demo today.</h3>
                    <p class="lead align-center">Choose a demo option below to get started.</p>
                </div>
            
            <landingDemoCards />


            <div class="container bg-white feature-quote">
                <landingQuote class="feature-quote-inner" bodyClass="quote-text color-black" personClass="strong strip color-black" containerClass="width-l align-center center-block margin-xs" body="We had 2 systems and every month it would take 24 hours of employee time to process our billing and now it happens automatically. " person="Glenwood Springs, ISP" photoUrl="/assets/alec.jpg" />
            </div>
            <sonarFooter />
        </body>
    </div>
</template>
<script>
// components
import sonarNav from '../components/sonarNav.vue'
import sonarFooter from '../components/sonarFooter.vue'
import landingHero from '../components/landing/landingHero.vue'
import landingQuote from '../components/landing/landingQuote.vue'

import landingDemoCards from '@/components/landing/landingDemoCards.vue'

import apiCards from '@/components/api/apiCards.vue'
import apiShowcase from '@/components/api/apiShowcase.vue'

export default {
    name: 'home',
    components: {
        sonarNav,
        sonarFooter,
        landingHero,
        landingQuote,
        landingDemoCards,
        apiCards,
        apiShowcase
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