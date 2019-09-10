<template>
    <div class="padding-s-bottom container margin-s-top margin-m-bottom">
        <div v-if="step == 1"  class="margin-s-top">
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
</template>
<script>
    // import sonarNav from '@/components/sonarNav.vue';
    // import sonarFooter from '@/components/sonarFooter.vue';
    // import landingFeatureRtl from '@/components/landing/landingFeatureRtl.vue'
    import VueSingleSelect from "vue-single-select";


    export default {
        name: 'bokingForm',
        components: {
            // sonarNav,
            // sonarFooter,
            // landingFeatureRtl,
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
