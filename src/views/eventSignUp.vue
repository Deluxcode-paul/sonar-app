<template>
    <div class="container-l margin-xl-top padding-s-all">
        <h5 class="color-silver align-center margin-m-top">REGISTER NOW</h5>
        <h3 class="align-center" style="color: rgb(72, 72, 72)">Join us at Wispalooza!</h3>
        <div class="grid-2">

            <div class="margin-s-top padding-xs-all promo">
                <img class="margin-s-bottom" src="/assets/Lanyard3D_Sonar.png">
                <h5 class="margin-xs-bottom">Sonar @ Wispalooza 2019</h5>
                <p class="color-black">Visit us at Wispalooza! We'll be holding a conference where you can get hands-on experience with the all new Sonar.</p>
                <div class="margin-s-top">
                    <a href="#">Visit the event's official website &rarr;</a>
                </div>
                <div class="margin-xs-top">
                    <a href="#">Parking & hotel info &rarr;</a>
                </div>
                <div class="margin-xs-top">
                    <a href="#">Get booking assistance &rarr;</a>
                </div>
            </div>

            <div class="margin-s-top padding-xs-all ">
                <h5 style="color: #7d7d7d" class="margin-s-bottom">Event info</h5>
                <ul id="meetup-locations" class="list-avatar">
                    <li class="">
                        <div class="list-avatar-image">
                        </div>
                        <div class="margin-xxs-left flex flex-space center-y">
                            <h5 class="color-black strip">
                                Wisapalooza
                            </h5>
                            <span class="meetup-date strip color-black">Event</span>
                        </div>
                    </li>
                    <li class="margin-s-top">
                        <div class="list-avatar-image">
                        </div>
                        <div class="margin-xxs-left flex flex-space center-y">
                            <h5 class="color-black strip">
                                Las Vegas, Nevada
                            </h5>
                            <span class="meetup-date strip color-black">Location</span>
                        </div>
                    </li>
                    <li class="margin-s-top">
                        <div class="list-avatar-image">
                        </div>
                        <div class="margin-xxs-left flex flex-space center-y">
                            <h5 class="color-black strip">
                                September 17, 2019
                            </h5>
                            <span class="meetup-date strip color-black">Date</span>
                        </div>
                    </li>
                    <li class="margin-s-top">
                        <div class="list-avatar-image">
                        </div>
                        <div class="margin-xxs-left flex flex-space center-y">
                            <h5 class="color-black strip">
                                Casino Royale
                            </h5>
                            <span class="meetup-date strip color-black">Venue</span>
                        </div>
                    </li>
                </ul>
                <h5 style="color: #7d7d7d" class="margin-s-bottom margin-m-top">Register now</h5>
                <div class="form center-block">
                    <form id="team-store-form" class="validate">
                        <input type="hidden" name="form-name" value="Team Demo">
                        <div class="margin-xs-bottom">
                            <input id="name" class="input-l" type="text" name="Name" placeholder="Name" required="true">
                        </div>
                        <div class="margin-xs-bottom">
                            <input id="email" class="input-l email" type="email" name="Email" placeholder="Email" required="true">
                        </div>
                        <div class="margin-xs-bottom">
                            <input id="phone" class="input-l" type="tel" name="Phone" placeholder="Phone">
                        </div>
                        <div class="margin-xs-bottom">
                            <input id="company" class="input-l" type="text" name="Company" placeholder="Company" required="true">
                        </div>
                        <div class="margin-xs-bottom">
                            <input id="address" class="input-l" type="text" name="Address" placeholder="Address" required="true">
                        </div>
                        <div class="margin-s-bottom">
                            <input id="state" class="input-l" type="text" name="State" placeholder="State" required="true">
                            <input id="country" class="input-l" type="text" name="Country" placeholder="Country" required="true">
                        </div>
                        <div class="margin-xs-bottom">
                            <button type="submit" class="button stretch deepblue big">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'eventSignUp'
}
</script>
<style scoped>
input.input-l::placeholder {
    color: rgba(0, 0, 0, 0.8) !important
}

#meetup-locations li {
    padding: 16px 0;
    border-width: 1px 0;
    border-color: #eee;
    border-style: solid;
}

img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

h3.meta {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600 !important;
    color: #333 !important;
    font-size: 18px !important;
}

p {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
}

h3 {
    font-family: 'Biosans';
    font-weight: 300;
}

h3 {
    line-height: 1.2;
    letter-spacing: 0em;
}

h3 {
    font-size: 26px;
}

h3,
p {
    margin-bottom: 20px;
}

@media only screen and (min-width:768px) {
    h3 {
        font-size: 36px;
    }
}

@media only screen and (min-width:1024px) {
    h3 {
        font-size: 44px;
        letter-spacing: -1.5px;
        line-height: 1.1;
    }

    p {
        line-height: 1.7;
    }
}

nav {
    -webkit-transform: translateZ(10px);
    transform: translateZ(10px);
}

a {
    color: #0052f5;
}

/*! CSS Used from: Embedded */
body {
    zoom: 100% !important;
}

header,
main,
nav {
    display: block;
}

a {
    background-color: transparent;
}

a:active,
a:hover {
    outline: 0;
}

*,
:after,
:before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}

.text-300 {
    font-weight: 300 !important;
}

.text-400 {
    font-weight: 400 !important;
}

.margin-top-1 {
    margin-top: .5rem !important;
}

.margin-top-2 {
    margin-top: 1rem !important;
}

.margin-top-3 {
    margin-top: 1.5rem !important;
}

.margin-top-4 {
    margin-top: 2rem !important;
}

.margin-top-8 {
    margin-top: 4rem !important;
}

.margin-top-0 {
    margin-top: 0 !important;
}

.measure-4 {
    max-width: 68ex !important;
}

.padding-bottom-4 {
    padding-bottom: 2rem !important;
}
</style>