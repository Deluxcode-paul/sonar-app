import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'



// parallax
import VueParallaxJs from 'vue-parallax-js'
Vue.use(VueParallaxJs);

// lazy load
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.5,
    attempt: 1,
    lazyComponent: true
});

// if mobile
import VueMobileDetection from "vue-mobile-detection";
Vue.use(VueMobileDetection)

// form masking
import VueMask from 'v-mask'
Vue.use(VueMask)

// calendar
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker)


// base styles and fonts
import '@/style/base.css'
import '../public/assets/fonts/webfonts.css'
import '@/style/media.css'
import '@/style/img.css'
import '@/style/util.css'

// dist settings
Vue.config.productionTip = false
Vue.config.silent = true
Vue.config.devtools = true

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
    if (!nearestWithMeta) return next();
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta')
        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });
        tag.setAttribute('data-vue-router-controlled', '')
        return tag;
    }).forEach(tag => document.head.appendChild(tag))
    next();
});

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
