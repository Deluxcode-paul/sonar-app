<template>

    <body class="nav-light">
        <sonarNav />
        <div class="container-l padding-l-top padding-l-bottom">
            <div class="hero-container">
                <div class="hero-header hero-ecosystems">
                    <h5 class="base-accent padding-s-bottom">About Sonar</h5>
                    <h1 class="t-rex-header">Building the OSS future.</h1>
                    <p class="lead paragraph-large center margin-m-bottom padding-s-top">We're on a mission to create next generation cloud solutions for the modern WISP.</p>
                </div>
                <div class="syncimage about margin-m-bottom">
                    <img src="/assets/plaque.png" width="100%" class="hero-about"></div>
            </div>
            <div class="container-m padding-m-top padding-m-bottom">
                <h3>Leadership</h3>
                <p class="lead">The minds which come together to create excellent cloud software.</p>
            </div>
            <div class="container-m">
                <div class="grid-4 center">
                    <div v-for="leader in leaders" :key="leader">
                        <div class="member-container">
                            <div class="member-popup" :style="'background: url(' + leader.img + '); background-size: cover; background-position: center center'">
                            </div>
                        </div>
                        <h6 class="career-job">{{ leader.name }}</h6>
                        <div class="header-light">{{ leader.title }}</div>
                    </div>
                </div>
            </div>
            <div class="container-m padding-l-top padding-m-bottom">
                <h3>Press</h3>
            </div>
        </div>
        <sonarFooter />
    </body>
</template>
<script>
import sonarNav from '@/components/sonarNav.vue'
import sonarFooter from '@/components/sonarFooter.vue'

export default {
    name: 'Leadership',
    data() {
        return {
            selected: "Simon Westlake",
            leaders: [{
                    "name": "Simon Westlake",
                    "title": "CEO",
                    "bio": "Simon Westlake with 16 years software experience starting with Time Warner has led the development of the product and continues to be the visionary of what is possible if the latest technologies are deployed.",
                    "img": "/assets/headshots/4.png"
                },
                {
                    "name": "Glenn Moore",
                    "title": "COO",
                    "bio": "Glenn Moore brings 35 years of successful business experience to the table. His background spans multiple industries, including 12 years owning and operating an ISP, allowing him to provide insight to the project that only years of experience can bring. His primary responsibility will be to ensure timelines and budgets are being met.",
                    "img": "/assets/headshots/1.jpg"
                },
                {
                    "name": "Alex Moore",
                    "title": "VP of Customer Engagement",
                    "bio": "Alex Moore has been building self-reliant support teams for over 5 years and it will be his job to build out the teams required for all reactive based support, as well as shared responsibility for the proactive customer success team with Jimmy Thomson.",
                    "img": "/assets/headshots/2.jpg"
                },
                {
                    "name": "Shane MacDonald",
                    "title": "VP of Growth & Strategy",
                    "bio": "Previously served as vice president of operations at KP Performance Antennas and was responsible for overseeing all aspects of Sales and Marketing for the organization. During his 9-year tenure the company held a minimum year-over-year growth of 20% with a high mark year of over 55%.",
                    "img": "/assets/headshots/1.jpg"
                },
                {
                    "name": "Jimmy Thomson",
                    "title": "VP of Customer Experience",
                    "bio": "With over 20 years in ISP and networking experience, will be responsible for assembling the onboarding teams required for this project, as well as ongoing development and assembly of the customer success team. Before Sonar, Jimmy lead a team of consultants which generated millions of dollars of revenue for CDW.",
                    "img": "/assets/headshots/3.png"
                },
                {
                    "name": "Taneil Currie",
                    "title": "Director of Marketing",
                    "bio": "With over 20 years in ISP and networking experience, will be responsible for assembling the onboarding teams required for this project, as well as ongoing development and assembly of the customer success team. Before Sonar, Jimmy lead a team of consultants which generated millions of dollars of revenue for CDW.",
                    "img": "/assets/headshots/1.jpg"
                }
            ]
        }
    },

    components: {
        sonarNav,
        sonarFooter
    }
}
</script>
<style scoped>
.hero-container {
    max-width: 100%;
}

.paragraph-large {
    text-decoration: none;
}

.hero-container,
.paragraph-large.center {
    display: block;
    margin-right: auto;
    margin-left: auto;
}

.paragraph-large {
    margin-bottom: 1rem;
    line-height: 1.3em;
}

.lead {
    line-height: 1.3em;
}

.hero-container {
    padding-top: 72px;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
}

.hero-header {
    display: block;
    max-width: 568px;
}

.hero-header.hero-ecosystems {
    display: block;
    max-width: 500px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
}

.hero-about {
    border-radius: 4px;
}

.base-accent {
    color: #1d74f5;
}

.t-rex-header {
    font-size: 6rem;
    line-height: 6rem;
    letter-spacing: -3px !important;
}

.syncimage {
    display: block;
    min-height: 400px;
    margin-right: auto;
    margin-left: auto;
    background-image: url(https://assets-global.website-files.com/5b5fa16907bc3e28f39d17c4/5bc51e141285256bba4870e6_transparent%20bg.png);
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
}

.syncimage.about {
    min-height: 500px;
    margin-top: 96px;
}

html.w-mod-js [data-ix="fade-in-on-load"] {
    opacity: 0;
}

@media (max-width: 991px) {
    .hero-header {
        max-width: 550px;
    }

    .syncimage {
        min-height: 300px;
    }

    .syncimage.about {
        height: 47.8vw;
        min-height: 350px;
        margin-top: 72px;
    }
}

@media (max-width: 479px) {

    h1 {
        margin-bottom: 16px;
    }

    h5 {
        margin-bottom: 12px;
        font-size: 1.32rem;
        line-height: 1.6rem;
    }


    .paragraph-large {
        line-height: 1.825rem;
    }

    .hero-container {
        padding-top: 48px;
    }

    .t-rex-header {
        font-size: 4rem;
        line-height: 4rem;
    }

    .hero-about {
        margin-top: 0;
    }

    .syncimage {
        min-height: 180px;
    }

    .syncimage.about {
        min-height: 47.8px;
        margin-top: 36px;
    }
}

/*! CSS Used from: Embedded */
h1,
h5 {
    font-weight: 400;
}

.member-popup {
    position: relative;
    height: 200px;
    width: 200px;
    border-radius: 6px;
}

a {
    background-color: transparent;
}

a:active,
a:hover {
    outline: 0;
}

img {
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}


a {
    text-decoration: none;
}

p {
    margin-top: 0;
}



h6 {
    margin-bottom: 0.75rem;
}

p {
    color: #393d44;
}

h6 {
    font-family: "Inter", sans-serif;
    margin-top: 0;
}

h6 {
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 500;
}

p {
    font-family: "Inter", sans-serif;
    line-height: 1.5rem;
}

p {
    margin-bottom: 1rem;
}

a {
    -webkit-transition: all 150ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
    transition: all 150ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
    color: #5347c2;
}

a:hover {
    text-decoration: none
}


.team-member {
    padding-right: 12px;
    padding-left: 12px;
}

.team-member {
    width: 25%;
    margin-bottom: 72px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 284px;
    -ms-flex: 0 284px;
    flex: 0 284px;
    text-align: left;
}

.bio-image {
    display: block;
    width: 100%;
    border-radius: 4px;
}

.header-light {
    font-family: "Inter", sans-serif;
    color: #a49dc0;
    font-size: 1rem;
    line-height: 1.5rem;
}

.career-job {
    margin-bottom: 0;
    font-weight: 500;
}


.member-container {
    position: relative;
    margin-bottom: 16px;
    cursor: pointer;
}


h6 {
    font-weight: 400;
}

a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a:hover {
    filter: brightness (0.7);
    -webkit-filter: brightness (0.7);
}
</style>