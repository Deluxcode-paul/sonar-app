import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// lazy load dem routes
function loadView(view) {
    return () => import( /* webpackChunkName: "sonar-[request]" */ `@/views/${view}.vue`)
}


export default new Router({
    mode: 'history',
    linkExactActiveClass: 'is-active',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes: [{
            // index page
            path: '/',
            name: 'home',
            component: loadView('Home'),
            meta: {
                title: 'Sonar Billing & OSS'
            }
        },

        // staging
        {
            path: '/staging',
            name: 'Staging',
            component: loadView('Staging')
        },

        // landing pages

        // wisp landing
        {
            path: '/solutions/wisp',
            name: 'WISP',
            component: loadView('Landing/WISP'),
            meta: {
                title: 'Sonar Billing & OSS + For WISPs',
                // metaTags: [{
                //         name: 'description',
                //         content: 'The home page of our example app.'
                //     },
                //     {
                //         property: 'og:description',
                //         content: 'The home page of our example app.'
                //     }
                // ]
            }
        },

        // mdu landing
        {
            path: '/solutions/mdu',
            name: 'MDU',
            component: loadView('Landing/MDU'),
            meta: {
                title: 'Sonar Billing & OSS + For MDU',
                // metaTags: [{
                //         name: 'description',
                //         content: 'The home page of our example app.'
                //     },
                //     {
                //         property: 'og:description',
                //         content: 'The home page of our example app.'
                //     }
                // ]
            }
        },


        // fiber landing
        {
            path: '/solutions/fiber',
            name: 'Fiber',
            component: loadView('Landing/Fiber'),
            meta: {
                title: 'Sonar Billing & OSS + For Fiber',
                // metaTags: [{
                //         name: 'description',
                //         content: 'The home page of our example app.'
                //     },
                //     {
                //         property: 'og:description',
                //         content: 'The home page of our example app.'
                //     }
                // ]
            }
        },

        // voice landing
        {
            path: '/solutions/voice',
            name: 'Voice',
            component: loadView('Landing/Voice'),
            meta: {
                title: 'Sonar Billing & OSS + For Voice',
                // metaTags: [{
                //         name: 'description',
                //         content: 'The home page of our example app.'
                //     },
                //     {
                //         property: 'og:description',
                //         content: 'The home page of our example app.'
                //     }
                // ]
            }
        },


        // voice landing
        {
            path: '/solutions/cable',
            name: 'Cable',
            component: loadView('Landing/Cable'),
            meta: {
                title: 'Sonar Billing & OSS + For Cable',
                // metaTags: [{
                //         name: 'description',
                //         content: 'The home page of our example app.'
                //     },
                //     {
                //         property: 'og:description',
                //         content: 'The home page of our example app.'
                //     }
                // ]
            }
        },
        {
            path: '/solutions/enterprise',
            name: 'Enterprise',
            component: loadView('Landing/Enterprise'),
            meta: {
                title: 'Do more with the power of Sonar ',
                // metaTags: [{
                //         name: 'description',
                //         content: 'The home page of our example app.'
                //     },
                //     {
                //         property: 'og:description',
                //         content: 'The home page of our example app.'
                //     }
                // ]
            }
        },






        // end landing pages

        // casts
        {
            path: '/casts',
            name: 'casts',
            component: loadView('Casts'),
            meta: {
                title: 'Sonar Billing & OSS + Casts',
                // metaTags: [{
                //         name: 'description',
                //         content: 'The home page of our example app.'
                //     },
                //     {
                //         property: 'og:description',
                //         content: 'The home page of our example app.'
                //     }
                // ]
            }
        },

        // blog
        {
            path: '/blog',
            name: 'blog',
            component: loadView('Blog'),
            meta: {
                title: 'Sonar Billing & OSS + Blog',
                // metaTags: [{
                //         name: 'description',
                //         content: 'The home page of our example app.'
                //     },
                //     {
                //         property: 'og:description',
                //         content: 'The home page of our example app.'
                //     }
                // ]
            }
        },


        // pricing
        {
            path: '/pricing',
            name: 'pricing',
            component: loadView('Pricing'),
            meta: {
                title: 'Sonar Billing & OSS + Pricing',
                // metaTags: [{
                //         name: 'description',
                //         content: 'The home page of our example app.'
                //     },
                //     {
                //         property: 'og:description',
                //         content: 'The home page of our example app.'
                //     }
                // ]
            }
        },

        // casts
        {
            path: '/integration',
            name: 'integration',
            component: loadView('Integration'),
            meta: {
                title: 'Sonar Billing & OSS + Integration',
            }
        },

        // community redirect
        {
            path: '/community',
            name: 'community',
            component: loadView('Community'),

        },


        // contact
        {
            path: '/contact',
            name: 'contact',
            component: loadView('Contact'),
            meta: {
                title: 'Sonar Billing & OSS + Contact',
                // metaTags: [{
                //         name: 'description',
                //         content: 'The home page of our example app.'
                //     },
                //     {
                //         property: 'og:description',
                //         content: 'The home page of our example app.'
                //     }
                // ]
            }
        },

        // demo signup
        {
            path: '/demo',
            name: 'demo',
            component: loadView('Demo/Demo'),
            meta: {
                title: 'Sonar Billing & OSS + Demo',
            }
        },

        // express demo standalone
        {
            path: '/demo/express',
            name: 'expressDemo',
            component: loadView('Demo/Express'),
            meta: {
                title: 'Sonar Billing & OSS + Express Demo',
            }
        },

        // case studies
        {
            path: '/case',
            name: 'case',
            component: loadView('Case'),
            meta: {
                title: 'Sonar Billing & OSS + Case Studies',
            }
        },
        // enterprise
        {
            path: '/enterprise',
            name: 'enterprise',
            component: loadView('Enterprise'),
            meta: {
                title: 'Sonar Billing & OSS + For Enterprise',
            }
        },
        // api
        {
            path: '/api',
            name: 'api',
            component: loadView('API'),
            meta: {
                title: 'Sonar Billing & OSS + API',
            }
        },
        // careers
        {
            path: '/careers',
            name: 'careers',
            component: loadView('Careers'),
            meta: {
                title: 'Sonar Billing & OSS + Careers',
            }
        },
        // events
        {
            path: '/events',
            name: 'events',
            component: loadView('Events'),
            meta: {
                title: 'Sonar Billing & OSS + Events',
            }
        },
        {
            path: '/events/view',
            name: 'investors',
            component: loadView('eventSignUp'),
            meta: {
                title: 'Sonar Billing & OSS + About Us',
            }
        },
        // newsroom
        {
            path: '/newsroom',
            name: 'newsroom',
            component: loadView('Newsroom'),
        },
        // i'm rich bitch
        {
            path: '/investors',
            name: 'investors',
            component: loadView('Investors'),
            meta: {
                title: 'Sonar Billing & OSS + About Us',
            }
        },
        // simon for president
        {
            path: '/leadership',
            name: 'leadership',
            component: loadView('Leadership'),
            meta: {
                title: 'Sonar Billing & OSS + Leadership',
            }
        }
    ]
})
