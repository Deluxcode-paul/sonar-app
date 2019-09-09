<template>
    <div class="footer-bg padding-m-top padding-m-bottom" style="width:100%">
        <div class="container flex footer-inner center-block">
            <div class="footer-col">
                <sonarLogoFull class="hide-mobile" />
            </div>
            <div class="footer-col">
                <div class="footer__item">
                    <h6>Product</h6>
                </div>
                <div class="footer__item" v-for="item in product" :key="item">
                    <router-link :to="item.to" tag="a" class="item link">{{ item.page }}</router-link>
                </div>
            </div>
            <div class="footer-col">
                <div class="footer__item">
                    <h6>Solutions</h6>
                </div>
                <div class="footer__item" v-for="item in solutions" :key="item">
                    <router-link :to="item.to" tag="a" class="item link">{{ item.page }}</router-link>
                </div>
            </div>
            <div class="footer-col">
                <div class="footer__item">
                    <h6>Resources</h6>
                </div>
                <div class="footer__item" v-for="item in resources" :key="item">
                    <router-link :to="item.to" tag="a" class="item link">{{ item.page }}</router-link>
                </div>
            </div>
            <div class="footer-col">
                <div class="footer__item">
                    <h6>Developer</h6>
                </div>
                <div class="footer__item" v-for="item in developer" :key="item">
                    <router-link :to="item.to" tag="a" class="item link">{{ item.page }}</router-link>
                </div>
            </div>
            <div class="footer-col">
                <div class="footer__item">
                    <h6 class="footer__title">Company</h6>
                </div>
                <div class="footer__item" v-for="item in company" :key="item">
                    <router-link v-if="item.tag" :to="item.to" tag="a" class="item link">{{ item.page }}<span class="badge bg-black color-white margin-s-left">{{ item.tag }}</span></router-link>
                    <router-link v-if="!item.tag" :to="item.to" tag="a" class="item link">{{ item.page }}</router-link>
                </div>
            </div>
            <div class="footer-col">
                <div class="footer__item">
                    <h6>Get in touch</h6>
                </div>
                <div class="footer__item footer__item--small"><a href="tel:+17024471247" class="item footer__phone">+1 (702) 447-1247</a></div>
                <div class="footer__item footer__item--small"><a href="tel:+17809001180" class="item footer__phone">+1 (780) 900-1180</a></div>
                <div class="footer__item footer__item--small"><a href="mailto:support@sonar.software" class="item footer__phone">support@sonar.software</a></div>
                <div class="footer-icons center-block padding-xxs-top">
                    <a href="https://www.youtube.com/channel/UCWfzms26zfHFO1brjipK9iw" class="dim" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="currentColor" /></svg>
                    </a>
                    <a href="https://twitter.com/sonarsoftware" class="dim" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" fill="currentColor" /></svg>
                    </a>
                    <a href="https://facebook.com/sonarsoftware" class="dim" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" fill="currentColor" />
                        </svg>
                    </a>
                    <a href="https://github.com/SonarSoftware?tab=repositories" class="dim" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor" /></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import sonarLogoFull from '@/components/sonarLogoFull.vue';

export default {
    name: 'sonarFooter',
    components: { sonarLogoFull },
    data() {
        return {
            product: [{
                    "page": "Home",
                    "to": "/"
                },
                {
                    "page": "Pricing",
                    "to": "/pricing"
                },
                {
                    "page": "Demo",
                    "to": "/demo"
                },
                {
                    "page": "Login",
                    "to": "/login"
                },
            ],
            solutions: [{
                    "page": "WISP",
                    "to": "/solutions/wisp"
                },
                {
                    "page": "Fiber",
                    "to": "/solutions/fiber"
                },
                {
                    "page": "MDU",
                    "to": "/solutions/mdu"
                },
                {
                    "page": "Voice",
                    "to": "/solutions/voice"
                },
                {
                    "page": "Cable",
                    "to": "/solutions/cable"
                }
            ],
            resources: [{
                    "page": "Casts",
                    "to": "/casts"
                },
                {
                    "page": "Blog",
                    "to": "/blog"
                },
                {
                    "page": "Case Studies",
                    "to": "/case"
                },
                {
                    "page": "Facebook",
                    "to": "/facebook"
                },
            ],
            developer: [{
                    "page": "Integration",
                    "to": "/integration"
                },
                {
                    "page": "Documentation",
                    "to": "/docs"
                },
                {
                    "page": "API",
                    "to": "/api"
                },
                {
                    "page": "GitHub",
                    "to": "/github"
                },
            ],
            company: [{
                    "page": "About Sonar",
                    "to": "/about"
                },
                {
                    "page": "Newsroom",
                    "to": "/newsroom"
                },
                {
                    "page": "Events",
                    "to": "/events"
                },
                {
                    "page": "Careers",
                    "to": "/careers",
                    "tag": "We're hiring!"
                },
            ]
        }
    },
    mounted: function() {
        var acc = document.getElementsByClassName("footer-list");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
            })
        }
    },
    beforeDestroy: function() {
        var acc = document.getElementsByClassName("footer-list");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].removeEventListener("click", function() {
                this.classList.toggle("active");
            })
        }
    }
}
</script>
<style scoped>
.footer-col {
    width: 250px;
}

.footer-col a {
    margin-top: 5px;
    margin-bottom: 5px;
}

.is-active {
    opacity: .5 !important;
}

a {
    background: transparent;
    transition: all 240ms ease-in-out;
}

a:active,
a:hover {
    outline: 0;
}


h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: rgba(0, 0, 0, 0.86);
    margin-top: 14px;
    margin-bottom: 14px;
    font-weight: 500;
    font-size: 12px;
}

*,
:after,
:before {
    box-sizing: border-box;
}

a {
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a:focus,
a:hover {
    text-decoration: none;
}

a:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

img {
    vertical-align: middle;
}

.footer:after {
    clear: both;
}


@media (max-width: 1024px) {
    img {
        display: none;
    }

    .footer__item {
        display: block;
        padding: 10px 0;
    }

    .flex {
        flex-direction: column;
    }

    .hide-mobile {
        display: none;
    }

    .footer-col {
        margin-bottom: 20px;
    }
}

@media (min-width: 1024px) {
    .footer__logo {
        position: absolute;
        left: -185px;
        text-align: left;
        margin-left: 0px;
    }
}

.footer__grid:after,
.footer__grid:before {
    content: " ";
    display: table;
}

.footer__grid:after {
    clear: both;
}

.footer__grid .footer__column--grid {
    float: left;
    width: 92%;
    padding-right: 0;
    background-clip: content-box;
}

@media (min-width: 1024px) {
    .footer__grid {
        margin-right: -10px;
    }

    .footer__grid:after,
    .footer__grid:before {
        content: " ";
        display: table;
    }

    .footer__grid:after {
        clear: both;
    }

    .footer__grid .footer__column--grid {
        float: left;
        width: 16.666666666666668%;
        padding-right: 10px;
        background-clip: content-box;
    }
}

.footer__column {
    margin-bottom: 10px;
}

@media (min-width: 1024px) {
    .footer__column {
        margin-bottom: 15px;
    }
}

.footer__item {
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 1.8;
}

.footer__item--text {
    opacity: 0.7;
}

.footer__item--small {
    font-size: 12px;
}

.item {
    color: #515557;
}

.item:active {
    text-decoration: underline;
}

.item:focus,
.item:hover {
    color: #7a7f82 !important;
}

@media (min-width: 1024px) {
    .link {
        border: 0;
        line-height: 1.8;
        padding: 0;
    }
}

.footer__column--contact {
    padding-right: 10px;
    padding-top: 10px;
    float: left;
    width: 100%;
}

.footer__column--contact:after,
.footer__column--contact:before {
    content: " ";
    display: table;
}

.footer__column--contact:after {
    clear: both;
}

@media (min-width: 1024px) {
    .footer__column--contact {
        padding-top: 0;
        width: 33.33333%;
    }
}

.footer__contact-column {
    float: left;
}

.footer__contact-column--address {
    width: 45%;
}

.footer__contact-column--phone {
    padding-top: 25px;
    text-align: right;
    width: 55%;
}

@media (min-width: 1024px) {
    .footer__contact-column--phone {
        padding-top: 37px;
    }
}

.footer__phone {
    display: block;
    line-height: 1.8;
    padding-bottom: 5px;
}

.footer__phone:after,
.footer__phone:before {
    content: " ";
    display: table;
}

.footer__phone:after {
    clear: both;
}

@media (min-width: 1024px) {
    .footer__phone {
        padding-bottom: 0;
    }
}



@media (min-width: 1024px) {
    .footer__colophon {
        border-top: 1px solid #eceded;
    }
}

@media (min-width: 568px) {
    .footer__list {
        margin-top: 15px;
    }
}

@media (min-width: 1024px) {
    .footer__list {
        margin-top: 5px;
    }
}

.footer__list-item {
    margin: 5px 0;
    padding: 0 5px;
}

@media (min-width: 1024px) {
    .footer__list-item {
        margin-left: 10px;
    }
}

a:focus {
    outline: none !important;
}


.nav-night>.footer-bg {
    background: rgb(0, 0, 0);
    width: 100%;
}

.footer-bg {
    background: #ffffff;
    width: 100%;
}

.footer-inner {
    max-width: 1280px;
}

.footer-bg h6 {
    color: #000000;
    opacity: 0.8;
    letter-spacing: 0.05em;
    margin: 0;
    padding: 10px 0;
    text-transform: uppercase;
}

.nav-night>.footer-bg h6 {
    color: #ffffff;
    opacity: 0.8;
    letter-spacing: 0.05em;
    margin: 0;
    padding: 10px 0;
    text-transform: uppercase;
}

.footer-bg .footer__item,
.footer-bg .item,
.footer-bg .footer-col {
    color: rgb(0, 0, 0);
    opacity: 0.8 !important;
}

.nav-night>.footer-bg .footer__item,
.nav-night>.footer-bg .item,
.nav-night>.footer-bg .footer-col {
    color: rgb(255, 255, 255);
    opacity: 0.8 !important;
}

body.nav-night>.is-light {
    display: none !important;
}

body:not(.nav-night)>.is-light {
    display: inline-block !important;
}

body.nav-night>.is-dark {
    display: inline-block !important;
}

body:not(.nav-night)>.is-dark {
    display: none !important;
}
</style>