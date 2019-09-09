<template>

    <body class="nav-light">
        <sonarNav />


        <eventSignUp/>
        <div class="container-l margin-xl-top padding-l-top padding-l-bottom margin-l-bottom">
            <div class="width-s align-center center-block">
                <h2>Upcoming Events</h2>
                <p class="lead">Meet the people behind Sonar, interact with other Sonar users and get tips & tricks on how to best use Sonar for your business.</p>
            </div>
            <div class="margin-s padding-m-top width-m center-block">
                <ul id="meetup-locations" class="list-avatar">
                    <li class="past first">
                        <a href="#" data-date="2019-07-01" target="_blank">
                            <div class="list-avatar-image">
                                <img src="https://d33wubrfki0l68.cloudfront.net/540dbee972e7e0cd8782271bb2ac5333363e7790/43423/assets/static/images/community/logos/ginetta.svg" alt="">
                            </div>
                            <div class="margin-xxs-left flex flex-space center-y">
                                <h5 class="strip">
                                    Orlando
                                </h5>
                                <span class="meetup-date strip">Jun 30th</span>
                            </div>
                        </a>
                    </li>
                    <li class="past">
                        <a href="#" data-date="2019-07-06" target="_blank">
                            <div class="list-avatar-image">
                                <img src="https://d33wubrfki0l68.cloudfront.net/540dbee972e7e0cd8782271bb2ac5333363e7790/43423/assets/static/images/community/logos/ginetta.svg" alt="">
                            </div>
                            <div class="margin-xxs-left flex flex-space center-y">
                                <h5 class="strip">
                                    Philadelphia
                                </h5>
                                <span class="meetup-date strip">Jul 5th</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-date="2019-07-31" target=" _blank">
                            <div class="list-avatar-image">
                                <img src="https://d33wubrfki0l68.cloudfront.net/540dbee972e7e0cd8782271bb2ac5333363e7790/43423/assets/static/images/community/logos/ginetta.svg" alt="facebook">
                            </div>
                            <div class="margin-xxs-left flex flex-space center-y">
                                <h5 class="strip">
                                    Las Vegas
                                </h5>
                                <span class="meetup-date strip">Sept 30th</span>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="width-s margin-xs-top align-center center-block">
                    <p class="small">Questions about our events?
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
import eventSignUp from '@/views/eventSignUp.vue'

export default {
    name: 'Events',
    components: { sonarNav, sonarFooter, eventSignUp }
}
</script>
<style scoped>
</style>