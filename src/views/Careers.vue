<template>

    <body class="nav-light">
        <sonarNav />
        <div class="container-l margin-xl-top padding-l-top padding-l-bottom margin-l-bottom">
            <div class="width-s align-center center-block">
                <h2>We're hiring!</h2>
                <p class="lead">At Sonar, we're (actually) different. Join a fully remote team with tons of benefits.</p>
            </div>
            <div class="margin-s padding-m-top width-m center-block">
                <ul id="meetup-locations" class="list-avatar">
                    <li class="past first-job">
                        <a href="#" data-date="2019-07-01" target="_blank">
                            <div class="list-avatar-image">
                                <img src="https://d33wubrfki0l68.cloudfront.net/540dbee972e7e0cd8782271bb2ac5333363e7790/43423/assets/static/images/community/logos/ginetta.svg" alt="">
                            </div>
                            <div class="margin-xxs-left flex flex-space center-y">
                                <h5 class="strip">
                                    Senior Backend Developer
                                </h5>
                                <span class="meetup-date strip">Available</span>
                            </div>
                        </a>
                    </li>
                    <li class="past">
                        <a href="#" data-date="2019-07-01" target="_blank">
                            <div class="list-avatar-image">
                                <img src="https://d33wubrfki0l68.cloudfront.net/540dbee972e7e0cd8782271bb2ac5333363e7790/43423/assets/static/images/community/logos/ginetta.svg" alt="">
                            </div>
                            <div class="margin-xxs-left flex flex-space center-y">
                                <h5 class="strip">
                                    Frontend Developer
                                </h5>
                                <span class="meetup-date strip">Available</span>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="width-s margin-xs-top align-center center-block">
                    <p class="small">Need assistance due to disability?
                        <a href="/contact">Get in touch</a>
                    </p>
                </div>
            </div>
        </div>
        <sonarFooter />
    </body>
</template>
<script>
import sonarNav from '@/components/sonarNav.vue'
import sonarFooter from '@/components/sonarFooter.vue'

export default {
    name: 'Careers',
    components: { sonarNav, sonarFooter }
}
</script>
<style scoped>
</style>