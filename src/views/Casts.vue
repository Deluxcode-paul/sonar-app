<template>

    <body>
        <sonarNav />
        <div class="container-l margin-l-top padding-s-top margin-l-bottom">
            <h2>Casts</h2>
            <div class="flex flex-align-top">
                <div class="sidebar">
                    <h3 class="menu-item">My Casts</h3>
                    <a href="#" class="menu-item menu-link">
                        Not Watched
                    </a>
                    <a href="#" class="menu-item menu-link">
                        History
                    </a>
                    <h3 class="menu-item">Browse</h3>
                    <div v-for="category in categories" :key="category">
                        <div @click="fetchCategory(category)">
                            <castsListItem :class="castSection == category ? 'active' : 'inactive'" :quantity="quantity">
                                <a>{{ category }}</a>
                            </castsListItem>
                        </div>
                    </div>
                    <hr>
                    <router-link to="/contact">Need more help?</router-link>
                </div>
                <section class="section starters-content container flex-fit">
                    <div class="section--inner container">
                        <h3 class="breadcrumbs"><span style="opacity: .7">Casts <img style="max-height: 1em; margin-bottom: 5px;" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTguNjI5IDE1Ljk5N2wtNy4wODMtNy4wODFMMTMuNDYyIDdsOC45OTcgOC45OTdMMTMuNDU3IDI1bC0xLjkxNi0xLjkxNnoiLz48L3N2Zz4=' /></span> {{ castSection }}</h3>
                        <div class="grid-cols grid-cols--3">
                            <div v-for="cast in casts" v-bind:key="cast">
                                <div v-if="cast.category == castSection">
                                    <castsCard v-bind="cast" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <sonarFooter />
        <!-- i have to do this because of some strange bug
             with vue's no-unused-components. otherwise
             it'll complain, specifically with axios? -->
        <axios />
        <!-- appears to load nothing into the dom... -->
    </body>
</template>
<script>
import axios from 'axios'
import sonarNav from '@/components/sonarNav.vue'
import sonarFooter from '@/components/sonarFooter.vue'
import castsCard from '@/components/casts/castsCard.vue'
import castsListItem from '@/components/casts/castsListItem.vue'

export default {
    name: 'casts',
    components: {
        sonarNav,
        sonarFooter,
        castsListItem,
        castsCard,
        axios
    },

    data() {
        return {
            categories: ["Getting Started", "Scheduling", "Billing", "Provisioning", "Advanced Provisioning", "Pulse", "Ticketing", "Data Usage / UBB", "Voice Services", "Network Monitoring", "Contracts"],
            castSection: "Getting Started",
            casts: [],
            loading: true
        }
    },
    mounted() {
        this.fetchCategory(this.castSection);
    },
    methods: {
        async fetchCategory(category) {
            this.castSection = category
            this.loading = true
            const json = await axios.get('/assets/api/casts.json')
            this.casts = json.data.casts.filter(x => x.category === this.castSection)
            this.quantity = this.casts.length
            this.loading = false
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>
<style scoped>
root {
    --primary-color: #00a672;
    --primary-color-dark: #00835c;
    --header-height: 58px;
    --light-bg: #fff;
    --light-bg-transparent: hsla(0, 0%, 100%, 0.95);
    --primary-bg: #f7fbfb;
    --primary-bg-transparent: rgba(247, 251, 251, 0.95);
    --dark-bg: #0d2538;
    --code-bg: #0b1d2b;
    --inline-code-bg: rgba(27, 31, 35, 0.05);
    --border-color: #e2ecec;
    --border-color-darker: #cfe6e6;
    --mark-color: #fff8ec;
    --border-radius: 5px;
    --success-bg: rgba(91, 177, 150, 0.25);
    --space: 25px;
    --space-x2: 50px;
    --code-color: #fdf9f3;
    --glow: 2px 2px 10px 0 var(--success-bg)
}

.breadcrumbs {
    font-family: 'Inter', sans-serif;
    letter-spacing: -0.4px;
}

.flex {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.flex>:last-child {
    margin-left: 0;
    margin-right: 0;
}

.flex-fit {
    flex: 1;
}

.grid-cols {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26%, 1fr));
    grid-gap: 15px;
}

@media screen and (max-width:850px) {
    .grid-cols {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width:550px) {
    .grid-cols {
        grid-template-columns: repeat(1, 1fr);
    }
}

*,
:after,
:before {
    box-sizing: inherit;
}

img {
    vertical-align: middle;
    max-width: 100%;
}

a {
    position: relative;
    text-decoration: underline;
    color: var(--primary-color-dark);
    -webkit-text-decoration-color: var(--border-color);
    text-decoration-color: var(--border-color);
}

* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

p {
    letter-spacing: -.15px;
}

.section {
    padding: calc(2% + var(--space)) 0;
    position: relative;
    width: 100%;
    flex: 1;
}

.section--inner {
    position: relative;
    z-index: 2;
}

.card {
    border: 1px solid var(--border-color-darker);
    border-radius: 4px;
    background-color: var(--light-bg);
    position: relative;
    z-index: 1;
    box-shadow: 1px 1px 5px 0 rgba(91, 177, 150, .13);
}

.card__inner {
    padding: var(--space);
    overflow: hidden;
    position: relative;
}

.card h4 {
    margin-bottom: .5rem;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    letter-spacing: 0.2px;
}

.card p:not(:last-child) {
    margin-bottom: 1.2rem;
}


/*! CSS Used from: Embedded */

main,
section {
    display: block;
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
    outline-width: 0;
}

h1 {
    font-size: 2em;
    margin: .67em 0;
}

img {
    border-style: none;
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}

::-webkit-input-placeholder {
    color: inherit;
    opacity: .54;
}

* {
    box-sizing: inherit;
}

*:before {
    box-sizing: inherit;
}

*:after {
    box-sizing: inherit;
}

img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.6rem;
}

h1 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.6rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.9rem;
    line-height: 1.1;
}

h3 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.6rem;
    color: inherit;
    font-weight: 500;
    letter-spacing: 0.3px;
    text-rendering: optimizeLegibility;
    font-size: 1.29271rem;
    line-height: 1.1;
}

h4 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.6rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1rem;
    line-height: 1.1;
}

p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.6rem;
}

noscript {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.6rem;
}

hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.6rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
}


/*! CSS Used from: https://gridsome.org/assets/css/0.styles.2b8db119.css */

.flex {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.flex>:last-child {
    margin-left: 0;
    margin-right: 0;
}

.flex-fit {
    flex: 1;
}

.flex-align-top {
    align-items: flex-start;
}

.grid-cols {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26%, 1fr));
    grid-gap: 15px;
}

@media screen and (max-width:850px) {
    .grid-cols {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width:550px) {
    .grid-cols {
        grid-template-columns: repeat(1, 1fr);
    }
}

*,
:after,
:before {
    box-sizing: inherit;
}

img {
    vertical-align: middle;
    max-width: 100%;
}

hr {
    opacity: .3;
}

::-moz-selection {
    background: var(--border-color);
}

::selection {
    background: var(--border-color);
}

a {
    transition: color .3s, opacity .3s, background .3s, -webkit-text-decoration .5s;
    transition: color .3s, opacity .3s, background .3s, text-decoration .5s;
    transition: color .3s, opacity .3s, background .3s, text-decoration .5s, -webkit-text-decoration .5s;
    position: relative;
    text-decoration: underline;
    color: var(--primary-color-dark);
    -webkit-text-decoration-color: var(--border-color);
    text-decoration-color: var(--border-color);
}


.container {
    max-width: 1300px;
    width: 100%;
    position: relative;
}

.container {
    padding: 0 var(--space);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

@media screen and (max-width:850px) {
    .container .container {
        padding-left: 0;
        padding-right: 0;
    }
}

.sidebar {
    order: 2;
    z-index: 10;
    overflow: auto;
    position: relative;
    -webkit-overflow-scrolling: touch;
    padding: 0 40px 55px 0px
}

@media screen and (min-width:850px) {
    .sidebar {
        position: -webkit-sticky;
        position: sticky;
        border-right: 1px solid var(--border-color);
        top: var(--header-height);
        height: calc(100vh + var(--header-height)*-1 - 5px);
        width: 260px;
        order: 0;
    }
}

.sidebar h3 {
    font-size: .8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 15px 0;
    padding-top: 20px;
    border-top: 1px solid var(--border-color);
}

.sidebar h3:first-of-type {
    border: 0;
}

.sidebar a {
    font-weight: 500;
    display: flex;
    text-decoration: none;
    transition: background padding 240ms ease-in-out;
}

.sidebar .menu-link {
    margin: 0;
    padding: .6rem 0;

}

.sidebar .menu-link.active--exact {
    color: var(--primary-color-dark);
    position: relative;
    padding-left: .8rem;
}

.sidebar .menu-link.active--exact:before {
    content: " ";
    width: 8px;
    height: 8px;
    border-radius: 10px;
    position: absolute;
    left: -1px;
    top: 50%;
    margin-top: -5px;
    background-color: var(--primary-color-dark);
    -webkit-animation: scaleIn .7s forwards;
    animation: scaleIn .7s forwards;
}

@media screen and (max-width:850px) {
    .sidebar {
        width: 100%;
        position: relative;
        margin: 0;
        order: 2;
        padding-bottom: 150px;
    }

    .sidebar+.section {
        margin-left: 0;
        width: 100%;
    }
}

* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

p {
    letter-spacing: -.15px;
}

.menu-item {
    display: block;
    transition: background padding 240ms ease-in-out;
}

h3.menu-item {
    opacity: .7;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
}

.mb {
    margin-bottom: var(--space) !important;
}

.mb-x2 {
    margin-bottom: var(--space-x2) !important;
}

#app main {
    flex: 1;
}

#app main:after {
    content: "";
    width: 100%;
    height: 66.66%;
    bottom: 0;
    position: fixed;
    background: linear-gradient(#fff, var(--primary-bg));
}

.section {
    padding: calc(2% + var(--space)) 0;
    position: relative;
    width: 100%;
    flex: 1;
}

.section--inner {
    position: relative;
    z-index: 2;
}

.card {
    border: 1px solid var(--border-color-darker);
    border-radius: 4px;
    background-color: var(--light-bg);
    transition: color .3s, box-shadow .3s, -webkit-transform .3s;
    transition: color .3s, box-shadow .3s, transform .3s;
    transition: color .3s, box-shadow .3s, transform .3s, -webkit-transform .3s;
    position: relative;
    z-index: 1;
    box-shadow: 1px 1px 5px 0 rgba(91, 177, 150, .13);
}

.card__image {
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    border-bottom: 1px solid var(--border-color);
}

.card__image img {
    margin: 0;
    width: 100%;
}

.card__inner {
    padding: var(--space);
    overflow: hidden;
    position: relative;
}

.card__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 1;
}

.card__link:focus {
    opacity: 1;
    outline: 2px auto -webkit-focus-ring-color;
}

.card--has-link:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    box-shadow: var(--glow);
    color: currentColor;
}

.card h4 {
    margin-bottom: .5rem;
}

.card p:not(:last-child) {
    margin-bottom: 1.2rem;
}

.starters-content {
    padding: var(--space-x2);
}

.platform-link {
    display: flex;
    align-items: center;
    padding: 7px 0;
    background: none;
    transition: background padding 240ms ease-in-out;
}

.platform-link a {
    background: none;
    transition: background padding 240ms ease-in-out;
}

.platform-link img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin: 0 10px 0 0;
}

.platform-count {
    margin-left: auto;
    padding: .15rem .4rem;
    background-color: var(--inline-code-bg);
    border-radius: .3em;
    font-size: .7em;
}

.platform-count--fade-out {
    opacity: .3;
}

.starter .card__inner {
    padding: 1rem;
}

.starter__title {
    font-size: .9rem;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    letter-spacing: 0.15px;
    overflow: hidden;
}

.starter__desc,
.starter__title {
    white-space: nowrap;
    max-width: 220px;
    text-overflow: ellipsis;
}

.starter__desc {
    font-size: .85rem;
    margin-bottom: .5rem !important;
    opacity: .8;
    overflow-x: hidden;
}

.starter__footer {
    display: flex;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    font-size: .85rem;
    position: relative;
}

.starter__actions {
    opacity: .6;
}

.starter__platform img {
    width: 25px;
    max-height: 25px;
    margin: 0;
}

.starter:hover .starter__footer {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}


/*! CSS Used keyframes */

@-webkit-keyframes scaleIn {
    0% {
        -webkit-transform: scale(.5);
        transform: scale(.5);
        opacity: 0;
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes scaleIn {
    0% {
        -webkit-transform: scale(.5);
        transform: scale(.5);
        opacity: 0;
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
}


/*! CSS Used fontfaces */
</style>