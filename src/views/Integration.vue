<template>

    <body class="nav">
        <sonarNav />
        <div class="margin-m-top bg-black align-center container-l" style="width: 100%; height: 330px">
            <div class="container center-block padding-m">
                <div>
                    <h3 class="color-white">Integrate easily.</h3>
                    <p class="color-silver">Check out our integration possibilities!</p>
                </div>
                <div class="flex" style="position: absolute; left: 50%; top: 85%; transform: translate(-50%,-50%)">
                    <div class="search-box">
                        <img class="search-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAflBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+gLKczAAAAKXRSTlMA9M6BiAwVd4Dy80EUz/FR8LJAg4ILsP1SzVQWP69Cs+99f9B1/g0OecXxotQAAACcSURBVCjPvZLHDsMgEETBxAbce0lc0+f/fzBREAqgnHzInJ72SSMtCyH7cqoSSr06cOdHiU/S3pnfMI1NU7boMqtH4qqII48NUWHSWIAZ4oJRYwTPECF8jXdIQ8iveFgiQalxtqpqtBoXCEMEKbiiJ1Zr+b5DEfn+vACbvXqWqydZN1hdhMRsCOnAAgLX6PC3OfzHnH8fWohd/+MF4q8ONFGLc2UAAAAASUVORK5CYII=">
                    </div>
                    <input v-model="searchTerm" type="text" placeholder="Search integrations..." class="int-search" />
                </div>
            </div>
        </div>
        <div class="container-l margin-m-top margin-m-bottom grid-4">
            <div class="sidebar span-1">
                <div class="sidebar__block cats-block">
                    <a class="header">Sort by</a>
                    <ul class="categories">
                        <li class="cat-item cat-item-2">
                            <ul class="children">
                                <li>
                                    <a @click="list = rawList; filterCat = ''" :class="filterCat != '' ? 'cat-inactive' : 'cat-active-all'">All Integrations</a>
                                </li>
                                <li track-by="$index" v-for="x in categories" :key="x">
                                    <a @click="filterIntegrations(x)" :class="x == filterCat ? 'cat-active' : 'cat-inactive'">{{ x }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="sidebar__block cats-block margin-s-top">
                    <a class="header">Available in</a>
                    <ul class="categories">
                        <li class="cat-item cat-item-2">
                            <ul class="children">
                                <li>
                                    <a @click="list = rawList; filterCat = ''" :class="filterCat != '' ? 'cat-inactive' : 'cat-active-all'">All Integrations</a>
                                </li>
                                <li track-by="$index" v-for="x in categories" :key="x">
                                    <a @click="filterIntegrations(x)" :class="x == filterCat ? 'cat-active' : 'cat-inactive'">{{ x }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="span-3">
                <div v-if="!loading && searchTerm == ''" class="grid-2">
                    <div v-for="integration in list" :key="integration">
                        <integrationCard :name='integration.name' :logo='integration.logo' :url='integration.url' :category='integration.category' />
                    </div>
                </div>
                <div v-if="searchTerm != ''" class="grid-2">
                    <div v-for="integration in filterSearch" :key="integration">
                        <integrationCard :name='integration.name' :logo='integration.logo' :url='integration.url' :category='integration.category' />
                    </div>
                </div>
                <div v-if="filterSearch.length == 0 && searchTerm != ''" class="span-2">
                    <div class="404">
                        <h4>Not finding what you need?</h4>
                        <p>Check out our API, which is capable of integrating with anything!</p>
                        <a href="/api" class="button blue color-white">Check out our API</a>
                    </div>
                </div>
            </div>
        </div>
        <sonarFooter />
        <axios />
    </body>
</template>
<script>
import sonarNav from '@/components/sonarNav.vue'
import sonarFooter from '@/components/sonarFooter.vue'
import integrationCard from '@/components/integration/integrationCard.vue'
import axios from 'axios'

export default {
    name: 'Integration',
    components: {
        sonarNav,
        sonarFooter,
        integrationCard,
        axios
    },
    data() {
        return {
            rawList: [],
            list: [],
            loading: true,
            filterCat: "",
            searchTerm: ""
        }
    },
    mounted() {
        this.loading = true;
        axios
            .get('/assets/api/integrations.json')
            .then(response => (this.rawList = this.list = response.data.integrations));
        this.loading = false;
    },
    methods: {
        filterIntegrations(cat) {
            this.loading = true;
            this.filterCat = cat;
            this.list = this.rawList.filter(x => x.category === cat);
            this.loading = false;
        }
    },
    computed: {
        categories: function() {
            var categories = [];
            for (var i = 0; i < this.rawList.length; i++) {
                if (categories.indexOf(this.rawList[i].category) === -1) {
                    categories.push(this.rawList[i].category)
                }
            }
            return categories;
        },
        filterSearch: function() {
            return this.rawList.filter((integration) => {
                return integration.name.toLowerCase().startsWith(this.searchTerm.toLowerCase());
            })
        }
    }
}
</script>
<style scoped>
.cat-active {
    background: rgb(57, 136, 255);
    color: white !important;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer !important;
    transition: all 240ms ease;
}

.cat-active-all {
    background: rgb(82, 82, 82);
    color: white !important;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer !important;
    transition: all 240ms ease;
}

.cat-inactive {
    font-family: 'Inter', sans-serif;
    color: #000 !important;
    padding: 10px;
    cursor: pointer !important;
    transition: all 240ms ease;
}

.children {
    cursor: pointer;
    font-family: 'Inter', sans-serif !important;
}

.children li a {
    margin-bottom: 15px;
}

.categories {
    margin-top: 15px;
}

.header {
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    width: 100%;
    padding-bottom: 15px;
}

.header:hover {
    text-decoration: none !important
}

ul {
    margin-top: 0;
    margin-bottom: 1rem;
}

ul li {
    margin-bottom: 15px;
}

ul ul {
    margin-bottom: 0;
}

.sidebar .open-cats {
    opacity: 0.7;
    color: #203047;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    display: none;
    margin-bottom: 15px;
}

.sidebar .open-cats:hover {
    text-decoration: none;
}

.sidebar ul {
    list-style: none;

    padding: 0;
}



.search-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: .5;
}

.search-box {
    background: #161616;
    position: relative;
    border-radius: 4px;
    height: 60px;
    width: 60px;
    margin-right: -5px;
}

.int-search {
    font-size: 17px;
    padding-left: 15px;
    background: #426ef9;
    color: white;
    width: 300px;
    padding-right: 15px;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    margin: 0;
    -webkit-transition: all .2s cubic-bezier(0.075, 0.82, 0.165, 1);
    transition: all .2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(255, 255, 255, 0.5) !important;
}

:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, 0.5);
}

::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(255, 255, 255, 0.5);
}
</style>