<template>
    <div id="pricing-cards" class="padding-m-bottom container-l grid-3 width-s-tablet center-y">
        <div class="pricing-card padding-s-all">
            <div class="pricing-card-content">
                <p>Calculcator</p>
                <p class="color-silver">
                    Type in your amount of active customers below to calculate price.
                </p>
                <h3 class="price shadow-xs">
                    <input @keyup="pump()" v-model="users" style="font-size: 40px; width: 100%" ref="usersInput" class="input-xxl" type="text" onkeyup="this.value=this.value.replace(/[^\d]/,'')" maxlength="6" placeholder="Type here" autofocus />
                </h3>
            </div>
        </div>
        <div ref="pricebox" v-show="!isEnterprise" class="pricebox pricing-card shadow-m bg-gradient bg-deepblue color-white">
            <div class="pricing-card-content">
                <div class="padding-s-all">
                    <div class="margin-xs-bottom flex flex-space">
                        <p class="strip">Total per month</p>
                        <span v-if="usd" class="discount-value monthly-hide">USD</span>
                        <span v-else class="discount-value monthly-hide">CAD</span>
                    </div>
                    <div v-if="usd" class="flex margin-xs-bottom">
                        <h1 v-if="!min" class="strip">
                            <span class="personal-price">
                                $<animated-number :value="total" :formatValue="formatToPrice" :duration="350" />
                            </span>
                        </h1>
                        <h1 v-else class="strip">
                            <span class="personal-price">
                                $<animated-number :value="100" :formatValue="formatToPrice" :duration="350" />
                            </span>
                        </h1>
                    </div>
                    <div v-else class="flex margin-xs-bottom">
                        <h1 v-if="!min" class="strip">
                            <span class="personal-price">
                                $<animated-number :value="this.total" :formatValue="formatToPrice" :duration="350" />
                            </span>
                        </h1>
                        <h1 v-else class="strip">
                            <span class="personal-price">
                                $<animated-number :value="135" :formatValue="formatToPrice" :duration="350" />
                            </span>
                        </h1>
                    </div>
                    <ul class="check-list-currency white">
                        <li>Low as $
                            <animated-number :value="this.rate" :formatValue="formatToRate" :duration="100" /> per active customer
                        </li>
                    </ul>
                    <ul class="check-list white">
                        <li>Award winning support</li>
                        <li>No worries</li>
                    </ul>
                    <a href="/register" class="button big" style="background: rgba(0,0,0,0.08); color: white">Get started</a>
                </div>
            </div>
        </div>
        <div v-show="isEnterprise" class="pricing-card bg-oil color-white shadow-m">
            <div class="pricing-card-content">
                <div class="padding-s-all">
                    <div class="margin-xs-bottom flex flex-space">
                        <p class="strip">Get a quote today!</p>
                    </div>
                    <div class="flex margin-xs-bottom">
                        <div>
                            <h1 class="strip"><span class="personal-price">Enterprise</span></h1>
                        </div>
                        <div class="price-meta">
                            <span class="per-month"><span class="asterisk"></span></span>
                        </div>
                    </div>
                    <ul class="check-list white">
                        <li>Award winning support</li>
                        <li>No worries</li>
                    </ul>
                    <a href="/register" class="button white big checkout">Talk to sales</a>
                </div>
            </div>
        </div>
        <div class="pricing-card padding-s-all">
            <transition name="fade">
                <div class="pricing-card-content">
                    <p class="margin-sm-bottom">Breakdown</p>
                    <div class="flex">
                        <div>
                            <h6 :class="[tier == 1 ? 'strip color-black' : 'strip color-silver']">
                                0 - 5,000
                            </h6>
                        </div>
                        <div class="price-meta">
                            <span class="per-month">${{ tier1Rate.toFixed(2) }} / active customer</span>
                        </div>
                    </div>
                    <div class="flex subtotal-container">
                        <div v-if="!min">
                            <h7 :class="[tier == 1 ? 'strip color-black subtotal' : 'strip color-black']">
                                + $<animated-number :value="this.tier1Total" :formatValue="formatToPrice" :duration="100" />
                            </h7>
                        </div>
                        <div v-else>
                            <h7 v-if="usd" :class="[tier == 1 ? 'strip color-black subtotal' : 'strip color-black']">
                                + $<animated-number :value="100" :formatValue="formatToPrice" :duration="100" />
                            </h7>
                            <h7 v-else :class="[tier == 1 ? 'strip color-black subtotal' : 'strip color-black']">
                                + $<animated-number :value="135" :formatValue="formatToPrice" :duration="100" />
                            </h7>
                        </div>
                    </div>
                    <div class="flex">
                        <div>
                            <h6 :class="[tier == 2 ? 'strip color-black' : 'strip color-silver']">
                                5,001 - 10,000
                            </h6>
                        </div>
                        <div class="price-meta">
                            <span class="per-month">${{ tier2Rate.toFixed(2) }} / active customer</span>
                        </div>
                    </div>
                    <div class="flex subtotal-container">
                        <div>
                            <h7 :class="[tier == 2 ? 'strip color-black subtotal' : 'strip color-black']">
                                + $<animated-number :value="this.tier2Total" :formatValue="formatToPrice" :duration="100" />
                            </h7>
                        </div>
                    </div>
                    <div class="flex">
                        <div>
                            <h6 :class="[tier == 3 ? 'strip color-black' : 'strip color-silver']">
                                10,001 - 50,000
                            </h6>
                        </div>
                        <div class="price-meta">
                            <span class="per-month">${{ tier3Rate.toFixed(2) }} / active customer</span>
                        </div>
                    </div>
                    <div class="flex subtotal-container">
                        <div>
                            <h7 :class="[tier == 3 ? 'strip color-black subtotal' : 'strip color-black']">
                                + $<animated-number :value="this.tier3Total" :formatValue="formatToPrice" :duration="100" />
                            </h7>
                        </div>
                    </div>
                    <div class="flex margin-xs-bottom">
                        <div>
                            <h6 :class="[tier == 4 ? 'strip color-black' : 'strip color-silver']">
                                50,001 +
                            </h6>
                        </div>
                        <div class="price-meta">
                            <span class="per-month">Enterprise</span>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
    name: "calculator",
    components: {
        AnimatedNumber
    },

    props: {
        isEnterprise: Boolean
    },
    data() {
        return {
            usd: true,
            min: false,
            users: 150,
            total: 188,
            tier: 1,
            tier1Total: 188,
            tier2Total: 0,
            tier3Total: 0,
            tier1Rate: 1.25,
            tier2Rate: 1.0,
            tier3Rate: 0.4,
            rate: 1.25
        };
    },
    methods: {
        formatToPrice(value) {
            return `${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,").slice(0, -3)}`;
        },
        formatToRate(value) {
            return `${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
        },
        pump() {
            this.$nextTick(function() {
                this.$refs.pricebox.style.transform = "translateY(-10px)"
            });
        }
    },
    watch: {
        users(val) {
            if (val < 109) {
                this.min = true;
                this.rate = this.tier1Rate;
                this.tier1Total = 100;
                this.tier2Total = 0;
                this.tier3Total = 0;
                this.tier = 1;
                this.isEnterprise = false;
            } else {
                if (val <= 5000) {
                    this.min = false;
                    this.tier = 1;
                    this.isEnterprise = false;
                    this.rate = this.tier1Rate;
                    this.tier1Total = Math.round(val * 1.25);
                    this.tier2Total = 0;
                    this.tier3Total = 0;
                    this.total = this.tier1Total;
                }
                if (val >= 5001) {
                    this.min = false;
                    this.isEnterprise = false;
                    this.tier = 2;
                    this.tier1Total = 6250;
                    this.tier2Total = Math.round((val - 5000));
                    this.tier3Total = 0;
                    this.total = Math.round(6250 + ((val - 5000) * 1.00));
                    this.rate = this.tier2Rate;
                }
                if (val >= 10001) {
                    this.min = false;
                    this.isEnterprise = false;
                    this.tier = 3;
                    this.tier1Total = 6250;
                    this.tier2Total = 5000;
                    this.tier3Total = Math.round((val - 10000) * 0.40);
                    this.rate = this.tier3Rate;
                    this.total = Math.round(6250 + 5000 + ((val - 10000) * 0.40));
                }
                if (val >= 50001) {
                    this.min = false;
                    this.isEnterprise = true;
                    this.tier = 4;
                    this.tier1Total = 6250;
                    this.tier2Total = 5000;
                    this.tier3Total = 16000;
                    this.rate = this.tier3Rate;
                }
            }
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            this.$refs.usersInput.focus();
        });
    }
};
</script>
<style scoped>

.pricebox {
    transition: all 240ms ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.subtotal-container {
    margin-top: 0.5em;
    margin-bottom: 1.5em;
}

.subtotal {
    background-color: #f3f3f3;
    width: 100%;
    overflow: show;
    padding: 7px !important;
    border-radius: 7px;
    transition: all 0.2s;
}


.pricing-back {
    position: absolute;
    top: 40px;
    left: 0
}

.pricing-loader {
    height: calc(100vh - 60px);
    width: 100%;
    position: relative;
    display: none
}

.pricing.purchasing .pricing-content {
    display: none
}

.pricing.purchasing .pricing-loader {
    display: block
}

#pricing-cards {
    grid-gap: 40px
}

.pricing-card {
    display: block;
    border-radius: 12px;
    background: #fff;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative
}

.price-value h1 {
    margin-bottom: 0
}

.pricing-card .price-saved {
    text-decoration: line-through;
    margin-bottom: 0
}

.pricing-card .price-meta {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    margin-left: 12px
}

.pricing-card .price-meta h5 {
    margin-bottom: 0;
    -ms-flex-item-align: start;
    -ms-grid-row-align: start;
    align-self: start;
    position: relative;
    font-size: 32px
}

.pricing-card .price-meta h5:after {
    content: "";
    width: calc(100% + 6px);
    height: 2px;
    background: #fff;
    top: calc(50% - 2px);
    box-shadow: 0 1px 0 0 #0052f5;
    left: -3px;
    display: block;
    position: absolute
}

.pricing-card .small {
    left: 0;
    position: absolute;
    top: 100%;
    width: 100%
}

.pricing .quote {
    position: static
}

.pricing-card .checkout-error {
    left: 0;
    position: absolute;
    bottom: -100px;
    width: 100%;
    background: #fff;
    color: #f44;
    text-align: center;
    border: 1px solid #f44;
    border-radius: 4px;
    padding: 10px;
    line-height: 1.5;
    z-index: 100;
    display: none
}

.pricing.error .checkout-error {
    display: block
}

.pricing-card .checkout-error a {
    color: #f44;
    font-weight: 500;
    pointer-events: all
}

.pricing-card-content {
    -ms-flex: 1;
    flex: 1;
    overflow: hidden
}

#pricing-cards .check-list {
    max-width: 300px;
    padding-bottom: 30px
}

#yearly {
    position: relative
}

#pricing-cards .per-month {
    opacity: .75;
    font-size: 12px;
    margin-bottom: 8px;
    font-weight: 400
}

#pricing-cards a {
    width: 100%
}

#pricing-cards .teams {
    margin-top: 0
}

#pricing-cards .pill {
    text-transform: uppercase;
    box-shadow: inset 0 0 0 1px #fff;
    padding: 11px 14px 10px;
    font-size: 9px;
    letter-spacing: 1px;
    line-height: 1;
    font-weight: 600;
    border-radius: 100px
}

#pricing-cards .banner {
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    line-height: 1.4;
    font-size: 14px;
    padding: 16px 20px
}

.discount-asset {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 16px
}

.discount-value {
    background: #fff;
    color: #0052f5;
    font-size: 12px;
    font-weight: 500;
    padding: 2px 12px 0 12px;
    margin-bottom: 2px;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    border-radius: 24px
}

.pricing.discount .pricing-card .banner {
    display: block
}

.pricing.discount .pricing-card .discount-value {
    display: none
}

.pricing.default .pricing-card .banner {
    display: none
}

.pricing.discount .pricing-card .discount-yearly {
    opacity: .7
}

.pricing .pricing-card .discount-yearly {
    opacity: 0
}

.restricted .toggle-container,
.restricted-intro {
    display: none
}

.restricted .restricted-intro {
    display: block
}

.restricted #pricing-cards {
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    max-width: 790px
}

.restricted #pricing-cards>div:nth-child(2) {
    display: none
}

.restricted .teams .pricing-card {
    background: #0052f5;
    color: #fff
}

.restricted .teams ul.check-list li:before {
    background-image: url("data:image/svg+xml;utf8,<svg width='15' height='11' viewBox='0 0 15 11' xmlns='http://www.w3.org/2000/svg'><path id='mask' d='M2 6l3.5 3.5L13 2' stroke-width='2' stroke='%23FFFFFF' fill='none' stroke-linecap='square'/></svg>")
}

.toggle-container {
    width: 250px
}

.toggle-container p {
    margin-bottom: 0
}

.toggle {
    width: 40px;
    margin: 0 auto;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.toggle input {
    display: none
}

.toggle label {
    display: block;
    position: relative;
    font-size: 14px;
    height: 24px;
    border-radius: 100px;
    cursor: pointer
}

.toggle label:before {
    content: "";
    display: block;
    position: absolute;
    height: 18px;
    width: 18px;
    border-radius: 100%;
    top: 3px;
    left: 3px;
    background: #fff;
    transition: left .2s ease;
    will-change: left
}

.toggle input:checked+label:before {
    left: 19px
}

.pricing.monthly .monthly-remove {
    display: none
}

.pricing.yearly .yearly-remove {
    display: none
}

.pricing.monthly .monthly-hide {
    visibility: hidden
}

.pricing.yearly .yearly-hide {
    visibility: hidden
}

.pricing .asterisk,
.pricing .individual,
.toggle label,
.toggle-container p {
    transition: opacity .2s ease, background .2s ease;
    will-change: opacity, background
}

.pricing.monthly .asterisk,
.pricing.monthly .pill {
    opacity: 0
}

.pricing .banner {
    display: none
}

.pricing.monthly .individual,
.pricing.monthly .toggle label {
    background: #09f !important
}

.pricing.monthly .toggle-container p {
    color: #09f !important
}

.pricing.monthly .individual .button:hover {
    color: #09f !important
}

.pricing.monthly .pricing-card .price-meta h5:after {
    box-shadow: 0 1px 0 0 #09f
}

#features header {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 20px
}

#features header h5 {
    margin: 0
}

#features header svg {
    margin-right: 10px
}

.pricing .svg-progress-value {
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -ms-transform-origin: center;
    transform-origin: center;
    stroke-dasharray: 69;
    stroke-dashoffset: 80;
    stroke-linecap: round;
    animation: progress 2.5s cubic-bezier(.65, 0, .45, 1) forwards
}

.pricing .svg-checkmark {
    width: 24px;
    height: 24px
}

.pricing .svg-checkmark-check {
    stroke-dasharray: 48;
    stroke-linecap: round;
    will-change: transform;
    stroke: #fff;
    stroke-dashoffset: 48;
    animation: stroke 6s cubic-bezier(.03, .74, .41, .96) 1s forwards
}

@keyframes progress {
    100% {
        stroke-dashoffset: 41
    }
}

@keyframes stroke {
    100% {
        stroke-dashoffset: 0
    }
}

@media screen and (max-width:1023px) {

    #pricing-cards.personal,
    #pricing-cards.team {
        grid-gap: 80px;
        padding-bottom: 40px
    }

    #pricing-cards .teams {
        margin-top: 40px
    }

    #pricing-cards .card-free {
        display: none
    }

    .pricing-card .price-meta h5 {
        font-size: 24px
    }

    .padding-s-all {
        padding: 28px
    }
}

@media screen and (min-width:1280px) {
    #pricing-cards.personal.grid-3 {
        -ms-grid-columns: 1fr 1.1fr 1fr;
        grid-template-columns: 1fr 1.1fr 1fr
    }

    #pricing-cards .banner {
        padding: 24px 40px
    }
}
</style>