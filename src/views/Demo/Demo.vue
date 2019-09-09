<template>

    <body class="nav-deepblue">
        <sonarNav />
        <landingFeatureRtl :showButton="false" :enableAnimations="false" classNames="bg-deepblue color-white padding-l-left padding-m-top" video="v1" title="Book a demo." body="You're only a few steps away from giving Sonar a try for yourself. We'll walk you through how Sonar will help improve your productivity and day-to-day flow for you and your entire team." />
        <div class="padding-s-bottom container margin-s-top margin-m-bottom">
            <div v-if="step == 1" class="container form width-s padding-s-all">
                <div>
                    <h1 class="size-h4">Pick a demo type</h1>
                    <p>Our demo adapts to your workflow.</p>
                </div>
            </div>
            <div v-if="step == 1" class="demoCard margin-m-top">
                <a @click="leadDemoType = 'Express'" :class="leadDemoType == 'Express' ? 'demoCard--inner' : 'demoCard--inner demoCard--inactive'">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.992 511.992" xml:space="preserve" width="50" height="50">
                        <g id="XMLID_806_">
                            <g id="XMLID_386_">
                                <path fill="white" id="XMLID_389_" d="M511.005,279.646c-4.597-46.238-25.254-89.829-58.168-122.744    c-28.128-28.127-62.556-46.202-98.782-54.239V77.255c14.796-3.681,25.794-17.074,25.794-32.993c0-18.748-15.252-34-34-34h-72    c-18.748,0-34,15.252-34,34c0,15.918,10.998,29.311,25.793,32.993v25.479c-36.115,8.071-70.429,26.121-98.477,54.169    c-6.138,6.138-11.798,12.577-16.979,19.269c-0.251-0.019-0.502-0.038-0.758-0.038H78.167c-5.522,0-10,4.477-10,10s4.478,10,10,10    h58.412c-7.332,12.275-13.244,25.166-17.744,38.436H10c-5.522,0-10,4.477-10,10s4.478,10,10,10h103.184    c-2.882,12.651-4.536,25.526-4.963,38.437H64c-5.522,0-10,4.477-10,10s4.478,10,10,10h44.54    c0.844,12.944,2.925,25.82,6.244,38.437H50c-5.522,0-10,4.477-10,10s4.478,10,10,10h71.166    c9.81,25.951,25.141,50.274,45.999,71.132c32.946,32.946,76.582,53.608,122.868,58.181c6.606,0.652,13.217,0.975,19.819,0.975    c39.022,0,77.548-11.293,110.238-32.581c4.628-3.014,5.937-9.209,2.923-13.837s-9.209-5.937-13.837-2.923    c-71.557,46.597-167.39,36.522-227.869-23.957c-70.962-70.962-70.962-186.425,0-257.388c70.961-70.961,186.424-70.961,257.387,0    c60.399,60.4,70.529,156.151,24.086,227.673c-3.008,4.632-1.691,10.826,2.94,13.833c4.634,3.008,10.826,1.691,13.833-2.941    C504.367,371.396,515.537,325.241,511.005,279.646z M259.849,44.263c0-7.72,6.28-14,14-14h72c7.72,0,14,6.28,14,14s-6.28,14-14,14    h-1.794h-68.413h-1.793C266.129,58.263,259.849,51.982,259.849,44.263z M285.642,99.296V78.263h48.413v20.997    C317.979,97.348,301.715,97.36,285.642,99.296z" />
                                <path fill="white" id="XMLID_391_" d="M445.77,425.5c-2.64,0-5.21,1.07-7.069,2.93c-1.87,1.86-2.931,4.44-2.931,7.07    c0,2.63,1.061,5.21,2.931,7.07c1.859,1.87,4.43,2.93,7.069,2.93c2.63,0,5.2-1.06,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07    c0-2.63-1.069-5.21-2.93-7.07C450.97,426.57,448.399,425.5,445.77,425.5z" />
                                <path fill="white" id="XMLID_394_" d="M310.001,144.609c-85.538,0-155.129,69.59-155.129,155.129s69.591,155.129,155.129,155.129    s155.129-69.59,155.129-155.129S395.539,144.609,310.001,144.609z M310.001,434.867c-74.511,0-135.129-60.619-135.129-135.129    s60.618-135.129,135.129-135.129S445.13,225.228,445.13,299.738S384.512,434.867,310.001,434.867z" />
                                <path fill="white" id="XMLID_397_" d="M373.257,222.34l-49.53,49.529c-4.142-2.048-8.801-3.205-13.726-3.205c-4.926,0-9.584,1.157-13.726,3.205    l-22.167-22.167c-3.906-3.905-10.236-3.905-14.143,0c-3.905,3.905-3.905,10.237,0,14.142l22.167,22.167    c-2.049,4.142-3.205,8.801-3.205,13.726c0,17.134,13.939,31.074,31.074,31.074s31.074-13.94,31.074-31.074    c0-4.925-1.157-9.584-3.205-13.726l48.076-48.076v0l1.453-1.453c3.905-3.905,3.905-10.237,0-14.142    S377.164,218.435,373.257,222.34z M310.001,310.812c-6.106,0-11.074-4.968-11.074-11.074s4.968-11.074,11.074-11.074    s11.074,4.968,11.074,11.074S316.107,310.812,310.001,310.812z" />
                                <path fill="white" id="XMLID_398_" d="M416.92,289.86h-9.265c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.265c5.522,0,10-4.477,10-10    S422.442,289.86,416.92,289.86z" />
                                <path fill="white" id="XMLID_399_" d="M212.346,289.616h-9.264c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.264c5.522,0,10-4.477,10-10    S217.868,289.616,212.346,289.616z" />
                                <path fill="white" id="XMLID_400_" d="M310.123,212.083c5.522,0,10-4.477,10-10v-9.264c0-5.523-4.478-10-10-10s-10,4.477-10,10v9.264    C300.123,207.606,304.601,212.083,310.123,212.083z" />
                                <path fill="white" id="XMLID_424_" d="M309.879,387.393c-5.522,0-10,4.477-10,10v9.264c0,5.523,4.478,10,10,10s10-4.477,10-10v-9.264    C319.879,391.87,315.401,387.393,309.879,387.393z" />
                                <path fill="white" id="XMLID_425_" d="M10,351.44c-2.63,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07c0,2.64,1.069,5.21,2.93,7.07    s4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07s-1.07-5.21-2.931-7.07    C15.21,352.51,12.63,351.44,10,351.44z" />
                            </g>
                        </g>
                    </svg>
                    <div v-if="leadDemoType == 'Express'" class="demoCard--checkmark">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48" style=" fill:#000000;">
                            <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                            <path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
                        </svg>
                    </div>
                    <h6 class="demoCard--inner_header">Express Demo</h6>
                    <p class="demoCard--inner_descr">Automated walkthrough</p>
                </a>
                <a @click="leadDemoType = 'Group'" :class="leadDemoType == 'Group' ? 'demoCard--inner' : 'demoCard--inner demoCard--inactive'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
                        <path d="M 2 25 C 2 12.297 12.297 2 25 2 C 37.703 2 48 12.297 48 25 C 48 37.703 37.703 48 25 48 L 5.286 48 C 3.471 48 2 46.529 2 44.714 Z M 4 43.565 C 4 44.91 5.09 46 6.435 46 L 25 46 C 36.598 46 46 36.598 46 25 C 46 13.402 36.598 4 25 4 C 13.402 4 4 13.402 4 25 Z M 16.5 23 C 17.881 23 19 24.119 19 25.5 C 19 26.881 17.881 28 16.5 28 C 15.119 28 14 26.881 14 25.5 C 14 24.119 15.119 23 16.5 23 Z M 25.5 23 C 26.881 23 28 24.119 28 25.5 C 28 26.881 26.881 28 25.5 28 C 24.119 28 23 26.881 23 25.5 C 23 24.119 24.119 23 25.5 23 Z M 34 23 C 35.381 23 36.5 24.119 36.5 25.5 C 36.5 26.881 35.381 28 34 28 C 32.619 28 31.5 26.881 31.5 25.5 C 31.5 24.119 32.619 23 34 23 Z" fill="hsl(0, 0%, 100%)"></path>
                    </svg>
                    <div v-if="leadDemoType == 'Group'" class="demoCard--checkmark">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48" style=" fill:#000000;">
                            <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                            <path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
                        </svg>
                    </div>
                    <h6 class="demoCard--inner_header">Group Demo</h6>
                    <p class="demoCard--inner_descr">Join a Sonar Expert</p>
                </a>
            </div>
            <div v-if="step == 1" :style="leadDemoType == '' ? 'opacity: .25; transition: all 240 ease;' : 'transition: all 240 ease;'" class="margin-s-top">
                <div class="container form width-s padding-s-all">
                    <div class="margin-s-bottom">
                        <h1 class="size-h4">A bit about you</h1>
                        <p>Please let us know a bit about you & your company.</p>
                    </div>
                    <form class="validate">
                        <div class="margin-xs-bottom">
                            <input v-model="lead.first" v-mask="'AAAAAAAAAAAAAAAAAAAA'" class="input-l demo-input" type="text" name="first" placeholder="First name" required="true">
                            <input v-model="lead.last" v-mask="'AAAAAAAAAAAAAAAAAAAA'" class="input-l demo-input" type="text" name="last" placeholder="Last name" required="true">
                        </div>
                        <div class="margin-xs-bottom">
                            <input v-model="lead.email" class="input-l demo-input" type="text" name="email" placeholder="Email" required="true">
                        </div>
                        <div class="margin-xs-bottom">
                            <input v-model="lead.phone" v-mask="'(###) ###-####'" class="input-l demo-input" type="text" name="phone" placeholder="Phone number" required="true">
                        </div>
                        <div class="margin-xs-bottom">
                            <input v-model="lead.title" id="name" class="input-l demo-input" type="text" name="Name" placeholder="Job title" required="true">
                        </div>
                        <div class="margin-xs-bottom">
                            <vue-single-select v-model="lead.industry" placeholder="Industry type" :options="industries" ref="industry" class="form-control form-control-lg multi-select fluid input-xl"></vue-single-select>
                        </div>
                        <div class="margin-xs-bottom">
                            <vue-single-select v-model="lead.current" placeholder="Current billing platform" :options="otherSystems" class="form-control form-control-lg multi-select input-xl fluid"></vue-single-select>
                        </div>
                        <div class="margin-xs-bottom">
                            <input v-model="lead.subs" @keyup="subs()" class="input-l demo-input" type="text" name="subs" placeholder="Amount of subscribers" required="true">
                        </div>
                    </form>
                    <div v-if="!pass" class="margin-s-top">
                        <button style="opacity: .2" class="button big fluid deepblue" disabled>Continue</button>
                    </div>
                </div>
            </div>
            <div v-if="step == 1 && pass && !oneonone" class="container width-s margin-s-top align-center">
                <h1 class="size-h4">Almost done!</h1>
                <div v-if="leadDemoType == 'Group'">
                    <p>Continue to book a time for your group demo.</p>
                </div>
                <div v-if="leadDemoType == 'Express'">
                    <p>Continue to get a link for your express demo.</p>
                </div>
                <div class="margin-s-top">
                    <button type="submit" name="makeappt" class="button big fluid deepblue" v-on:click="step = 2">Continue</button>
                </div>
            </div>
            <div v-if="step == 1 && oneonone && pass" class="container width-s align-center color-black margin-s-top">
                <h1 class="size-h4">1-on-1 demo</h1>
                <p>Would you prefer a 1-on-1 session instead of a group demo?</p>
                <div class="margin-s-top">
                    <a @click="leadDemoType = '1 on 1'; step = 2"><button type="submit" class="confirm deepblue button big fluid">Sure!</button></a>
                </div>
                <div class="margin-s-top">
                    <button type="submit" class="confirm button bg-silver big fluid" v-on:click="step = 2">No, thanks.</button>
                </div>
            </div>
        </div>
        <div v-if="step == 2">
            <div class="container margin-m-bottom width-l">
                <div>
                    <div class="margin-s-bottom">
                        <h1 class="size-h4">Availability</h1>
                        <p>Hey, {{ lead.first }}! When are you free to check out Sonar?</p>
                    </div>
                </div>
            </div>
            <div class="container-l">
                <div class="container align-center">
                    <div class="grid-2">
                        <VueCtkDateTimePicker id="DatePicker" onlyDate="true" v-model="selectedDate" inline="true" :enabled-dates="enabledDates" :disabled-dates="disabledDates" noKeyboard="true" noButtonNow="true" noWeekendDays="true" format="YYYY-MM-DD" />
                        <div class="timesAvail">
                            <div v-for="appointment in appointments" :key="appointment">
                                <transition name="fade">
                                    <div v-show="selectedDate == appointment.date" :class="[appointment.time == selectedTime ? 'timesAvail-time selected' : 'timesAvail-time']">
                                        <div class="flex flex-space">
                                            <p>{{ appointment.time }}</p>
                                            <button v-if="appointment.time == selectedTime" @click="selectedTime = ''" class="button blue color-white">Remove</button>
                                            <button v-else @click="selectedTime = appointment.time" class="button blue color-white">Pick</button>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div class="timesAvail-time dummy">
                                <div class="flex flex-space">
                                    <p>None</p>
                                    <button class="button blue color-white" style="opacity: 0">Select</button>
                                </div>
                            </div>
                            <div class="timesAvail-time dummy">
                                <div class="flex flex-space">
                                    <p>None</p>
                                    <button class="button blue color-white" style="opacity: 0">Select</button>
                                </div>
                            </div>
                            <div class="timesAvail-time dummy">
                                <div class="flex flex-space">
                                    <p>None</p>
                                    <button class="button blue color-white" style="opacity: 0">Select</button>
                                </div>
                            </div>
                            <div class="timesAvail-time dummy">
                                <div class="flex flex-space">
                                    <p>None</p>
                                    <button class="button blue color-white" style="opacity: 0">Select</button>
                                </div>
                            </div>
                            <div class="timesAvail-time dummy">
                                <div class="flex flex-space">
                                    <p>None</p>
                                    <button class="button blue color-white" style="opacity: 0">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container margin-m-top margin-m-bottom width-l">
                <div class="align-center">
                    <div class="margin-m-top">
                        <h1 class="size-h4">Reserve your spot!</h1>
                        <p>You'll recieve an email to {{ lead.email }} with a reminder.</p>
                    </div>
                    <div class="margin-xs-top">
                        <button type="submit" name="makeappt" class="confirm deepblue button big fluid">Book my demo</button>
                    </div>
                </div>
            </div>
        </div>
        <sonarFooter />
    </body>
</template>
<script>
import sonarNav from '@/components/sonarNav.vue';
import sonarFooter from '@/components/sonarFooter.vue';
import landingFeatureRtl from '@/components/landing/landingFeatureRtl.vue'
import VueSingleSelect from "vue-single-select";


export default {
    name: 'demo',
    components: {
        sonarNav,
        sonarFooter,
        landingFeatureRtl,
        VueSingleSelect
    },
    data() {
        return {
            // ui step int
            step: 1,
            pass: false,

            demoTypes: [{
                    "type": "Group",
                    "description": "Explore Sonar with a group of other newcomers and Sonar Experts.",
                    "phoneCall": false,
                    "videoDemo": true
                },
                {
                    "type": "1 on 1",
                    "description": "Work directly with a Sonar Expert to see if it's right for you.",
                    "phoneCall": true,
                    "videoDemo": false
                },
                {
                    "type": "Express",
                    "description": "Start the demo at your own pace.",
                    "phoneCall": false,
                    "videoDemo": true
                }
            ],

            // lead collection info
            lead: [{
                "first": "",
                "last": "",
                "email": "",
                "phone": "",
                "title": "",
                "industry": "",
                "current": "",
                "subs": ""
            }],

            industries: ['Cable', 'Fiber', 'Municipality', 'Security', 'TV Service', 'Utility Service', 'VOIP', 'WISP',
                'Other...'
            ],
            otherSystems: ['Azotel', 'BS&A', 'BillMax', 'Broadhub', 'Custom', 'Freeside', 'Freshbooks', 'LeadISP',
                'Platypus', 'Powercode', 'Quickbooks', 'Sage', 'Splynx', 'UCRM', 'VISP', 'WHCS', 'Other...'
            ],

            formattedDate: "",

            // validation
            first_name_valid: false,
            last_name_valid: false,
            email_valid: false,
            phone_valid: false,
            job_title_valid: false,
            industry_valid: false,
            current_billing_valid: false,
            subs_valid: false,

            // if they choose one-on-one
            oneonone: false,
            leadDemoType: "",
            // calendar variables

            // to be passed on to api
            // to book appt
            selectedDate: "2019-07-01",
            selectedTime: "",

            // to be collected from api
            // to show availability
            enabledDates: ["2019-07-01", "2019-07-03"],
            disabledDates: [],
            appointments: [{
                    "date": "2019-07-01",
                    "time": "5:15PM EST"
                },
                {
                    "date": "2019-07-01",
                    "time": "2:15PM EST"
                },
                {
                    "date": "2019-07-03",
                    "time": "1:15PM EST"
                }
            ]

        }
    },
    methods: {
        verify() {
            if (this.first_name_valid && this.last_name_valid && this.email_valid && this.phone_valid && this
                .job_title_valid && this.industry_valid && this.current_billing_valid && this.subs_valid) {
                this.pass = true;
            } else {
                this.pass = false;
            }
        },
        subs() {
            this.oneonone = this.lead.subs > 999 ? true : false;
        }
    },
    watch: {
        lead: {
            handler: function(val) {
                this.first_name_valid = this.lead.first ? true : false;
                this.last_name_valid = this.lead.last ? true : false;
                this.email_valid = this.lead.email ? true : false;
                this.phone_valid = this.lead.phone ? true : false;
                this.job_title_valid = this.lead.title ? true : false;
                this.industry_valid = this.lead.industry ? true : false;
                this.current_billing_valid = this.lead.current ? true : false;
                this.subs_valid = this.lead.subs > 1 ? true : false;
                this.oneonone = this.lead.subs > 999 ? true : false;
                this.verify(val);
            }
        },
        deep: true
    }
}
</script>
<style>
.search-input {
    line-height: 2 !important;
    background: #eee !important;
    border: none !important;
}

.single-select-wrapper {
    margin-bottom: 0px !important;
}

.multi-select {
    color: black !important;
    background: #eee !important;

}

input[type=text].demo-input::placeholder {
    color: rgba(0, 0, 0, 0.55) !important;
}

.demo-input {
    background: #eee;
}

.demoCard--inactive {
    opacity: .8;
}

.demoCard--checkmark {
    position: absolute;
    top: -20px;
    right: -20px;
}

.datepicker-container .datepicker-days .datepicker-day-effect,
.datepicker-container .datepicker-days .datepicker-day .datepicker-today {
    position: absolute;
    top: 17px !important;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 30px;
    width: 30px;
    border-radius: 4px;
    -webkit-transition: all .45s cubic-bezier(.23, 1, .32, 1) 0ms;
    transition: all .45s cubic-bezier(.23, 1, .32, 1) 0ms;
}

.custom-button .custom-button-effect,
.custom-button svg {
    transition: opacity 240ms ease !important;
}




.timesAvail {
    width: 100%;
    height: 370px;
    overflow-y: hidden;
}

.timesAvail-time {
    position: relative;
    width: 100%;
    display: inline-block;
    background: dodgerblue;
    border-radius: 4px;
    padding: 5px;
    margin-bottom: 15px;
    transition: background 240ms ease;
}

.timesAvail-time.dummy {
    background: rgba(0, 0, 0, 0.015);
}

.timesAvail-time.dummy p {
    opacity: 0;
}

.timesAvail-time.selected {
    background: #2ad8b1 !important;
    box-shadow: 35px 0 100px #2ad8b1;
}

.timesAvail-time p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 21px;
    font-weight: 500;
    color: white;
}

.timesAvail-time button {
    background: none !important
}

.waiting {
    color: rgba(0, 0, 0, 0.4);
    animation: blink 4s ease-in-out infinite;
}

.waiting-con {
    opacity: 1;
    transform: translateX(0px);
    animation: waitIn 2s ease-out 1;
}

@keyframes blink {
    0% {
        opacity: 1
    }

    50% {
        opacity: 0.4
    }

    100% {
        opacity: 1
    }
}


@keyframes waitIn {
    from {
        transform: translateY(-5px);
        opacity: 0;
    }

    to {
        transform: translateY(0px);
        opacity: 1;
    }
}

li.outline-none {
    color: black !important;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}

label {
    font-family: 'Inter', sans-serif;
    color: rgba(0, 0, 0, 0.6)
}

.confirm {
    padding: 10px;
    width: 90% !important;
}

.demo-input {
    width: 100%;

}

.fluid {
    width: 100%;

}

.form-group {
    padding: 10px;
}


.search-input {
    display: block;
    font-size: 17px !important;
    width: 100%;
    padding: 0.375em 0.75em;

    line-height: 2.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25em;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

@keyframes fadeIn {
    from {
        transform: translate(-50%, -40%);
        opacity: 0;
    }

    to {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
}

@keyframes fadeOut {
    from {
        transform: translate(-50%, -50%);
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(-50%, -80%);
    }
}

.fadeIn {
    animation: fadeIn .5s ease;
}

.fadeOut {
    animation: fadeOut .5s ease;
}

.demoCard--inner_header {
    font-family: 'Inter', sans-serif;
    margin-top: 0px;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: -0.5px;
    line-height: 1.3;
}

.demoCard--inner_descr {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    margin-top: 0px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.7;
}

* {
    box-sizing: inherit;
}

a {
    text-decoration: none;
}

::selection {
    color: rgb(255, 255, 255);
    background: rgba(0, 85, 255, 0.99);
}

.demoCard {
    margin: 0px auto;
    width: 87.5vw;
    overflow: visible;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px 20px;
}

@media screen and (min-width: 768px) {
    .demoCard {
        width: 100%;
    }
}

@media screen and (min-width: 768px) {
    .demoCard {
        max-width: 692px;
    }
}

@media screen and (min-width: 1024px) {
    .demoCard {
        max-width: 980px;
    }
}

@media screen and (min-width: 1024px) {
    .demoCard {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
}

@media screen and (min-width: 1280px) {
    .demoCard {
        gap: 20px 20px;
    }
}

@media screen and (min-width: 768px) {
    .demoCard {

        padding-bottom: 20px;
    }
}

.demoCard--inner {
    position: relative;
    min-width: 50%;
    max-width: 85%;
    text-decoration: none;
    font-weight: inherit;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    background: linear-gradient(45deg, rgb(0, 85, 255), rgb(0, 136, 255));
    border-radius: 12px;
    padding: 40px 20px;
    color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 6px,
        rgba(0, 0, 0, 0.05) 0px 10px 20px;
    text-align: center;
}

.demoCard--inner svg {
    transform: translate3d(0px, 0px, 0px);
}

.demoCard--inner h6 {
    margin: 25px 0px 5px;
}

.demoCard--inner p {
    margin-bottom: 0px;
    opacity: 0.8;
}

.demoCard--inner:last-of-type {
    background: linear-gradient(45deg, rgb(68, 0, 255), rgb(111, 0, 255));
}

.demoCard--inner:hover {
    transform: translateY(-7px);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px, rgba(0, 0, 0, 0.03) 0px 0px 8px,
        rgba(0, 0, 0, 0.1) 0px 20px 30px;
}

.demoCard--inner:active {
    opacity: 0.9;
}

@media screen and (min-width: 768px) {
    .demoCard--inner {
        padding: 40px 80px;
    }
}
</style>