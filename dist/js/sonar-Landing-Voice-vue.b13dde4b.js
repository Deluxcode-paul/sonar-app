(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sonar-Landing-Voice-vue"],{"74d1":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"pivot"}},[o("div",{class:e.ctaClassNames},[o("div",{staticClass:"center-block align-center-laptop padding-s-all"},[o("h3",{staticClass:"margin-xs-bottom"},[e._v(e._s(e.title))]),o("p",{staticClass:"lead color-opaque center-block"},[e._v(e._s(e.subtitle))]),o("router-link",{directives:[{name:"show",rawName:"v-show",value:e.showButton,expression:"showButton"}],class:e.buttonClass,attrs:{to:e.buttonPage}},[o("svg",{attrs:{width:"26",height:"26"}},[o("path",{attrs:{d:e.svgInfo,fill:"#ffffff"}})]),e._t("default"),e._v("\n        "+e._s(e.button)+"\n      ")],2)],1),o("intersect",{on:{enter:function(t){return e.ctaShow()},leave:function(t){return e.ctaHide()}}},[o("div",{class:[e.ctaShowBool?"flex flex-end hide-tablet strip-top-laptop cta-show":"flex flex-end hide-tablet strip-top-laptop"]},[o("img",{class:e.imageClass,attrs:{src:e.imageSource}})])])],1)])},n=[],i=o("760e");o("5abe");var s={name:"landingCTA",components:{Intersect:i["a"]},props:{ctaShowBool:Boolean,title:String,svgInfo:String,imageSource:String,subtitle:String,showButton:Boolean,button:String,buttonClass:String,imageClass:String,buttonPage:String,ctaClassNames:{type:String,required:!0}},methods:{ctaShow:function(){this.ctaShowBool=!0},ctaHide:function(){this.ctaShowBool=!1}}},l=s,r=(o("ea52"),o("2877")),c=Object(r["a"])(l,a,n,!1,null,"b7c86458",null);t["a"]=c.exports},a594:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("body",{staticClass:"nav-night frontpage"},[o("sonarNav"),o("landingHero",{attrs:{video:"v2",title:"Build a smarter, more efficient network.",desktopBody:"The Sonar platform is designed to help WISPs grow and maintain a healthy network. With intelligent automation, we’ll help you solve problems before they even arise.",mobileBody:"The Sonar platform is designed to help WISPs keep their network in good shape. With intelligent automation, we’ll help you solve problems before they even arise.",ctaBody:"Book a demo",ctaPage:"/demo",classNames:"code bg-black color-white padding-xl-top padding-l-bottom",titleStyle:"font-size: 3.7em; line-height: 1.05em"}}),o("landingLogos"),o("landingFeature",{attrs:{video:"cloud_white",classNames:"bg-white",title:"Get the tools to grow",body:"Managing a growing network can be difficult. Sonar is here to help. Our dynamic network mapping provides a clear, real-time visualization of your WISP network. The visualization isn’t just pretty – it provides a wealth of valuable information and key insights, giving you the tools you need to take your business to the next level.",ctaPage:"/demo",ctaBody:"Book a Demo"}}),o("div",{staticClass:"container-m bg-white feature-quote"},[o("landingQuote",{staticClass:"feature-quote-inner",attrs:{bodyClass:"quote-text color-black",personClass:"strong strip color-black",containerClass:"width-l align-center center-block margin-s",body:"We had 2 systems and every month it would take 24 hours of employee time to process our billing and now it happens automatically. ",person:"Glenwood Springs, ISP",invertLogo:!0,logo:"consolidated.png"}})],1),o("landingFeature",{attrs:{video:"cloud_paper",classNames:"bg-paper-light",title:"Billing and provisioning, together",body:"With Sonar, all your data is in one place. So when a problem arises, the single, integrated interface lets you troubleshoot quicker than ever before. No more time wasted hopping around from one software to another. Everything’s right where you need it, giving you more time to focus on the things that matter – like growing your business.",ctaPage:"/demo",ctaBody:"See Sonar in action"}}),o("div",{staticClass:"container-m bg-paper-light feature-quote"},[o("landingQuote",{staticClass:"feature-quote-inner",attrs:{bodyClass:"quote-text color-black",personClass:"strong strip color-black",containerClass:"width-l align-center center-block margin-s",body:"We had 2 systems and every month it would take 24 hours of employee time to process our billing and now it happens automatically. ",person:"Glenwood Springs, ISP",invertLogo:!0,logo:"consolidated.png"}})],1),o("landingFeature",{attrs:{video:"cloud_white",classNames:"bg-white",title:"Wave goodbye to manual provisioning",body:"Manual provisioning can be a slow, error-prone, and laborious process. So let’s automate it. Automated provisioning speeds things up at every level, for everyone from technicians to customers. The Sonar platform assigns IPs automatically, and relays key information to installers in real-time. The result is next-level efficiency.",ctaPage:"/pricing",ctaBody:"See pricing"}}),o("landingFeature",{attrs:{video:"cloud_paper",classNames:"bg-paper-light",title:"Save time with automated billing.",body:"On our platform, billing takes care of itself. Discrepancies are automatically flagged, and sometimes automatically resolved. Where there’s customer error, Sonar’s OSS Customer Portal gives users the power to find their own solutions. So you can sit back and watch problems solve themselves. Or, you know, get on with something more productive. That’s your call.",ctaPage:"/contact",ctaBody:"Schedule a chat"}}),o("div",{staticClass:"container-m bg-paper-light feature-quote"},[o("landingQuote",{staticClass:"feature-quote-inner",attrs:{bodyClass:"quote-text color-black",personClass:"strong strip color-black",containerClass:"width-l align-center center-block margin-s",body:"We had 2 systems and every month it would take 24 hours of employee time to process our billing and now it happens automatically. ",person:"Glenwood Springs, ISP",invertLogo:!0,logo:"consolidated.png"}})],1),o("landingFeature",{attrs:{video:"cloud_white",classNames:"bg-white",title:"Do billing on your terms.",body:"Like every aspect of Sonar, our billing engine allows serious customization, to let you do billing on your terms. Set global parameters such as billing frequency and delinquency periods – all from one place.",ctaPage:"/demo",ctaBody:"Schedule a chat"}}),o("lazy-component",[o("features")],1),o("div",{staticClass:"bg-api container-l padding-l-top padding-l-bottom",staticStyle:{width:"100%"}},[o("div",{staticClass:"container grid-2"},[o("landingCode"),o("landingCodeForm",{staticStyle:{"max-width":"100%"}})],1)]),o("div",{staticClass:"container-l bg-black padding-l-bottom",staticStyle:{width:"100%"}},[e._m(0),o("landingDemoCards")],1),o("landingCTA",{staticClass:"bg-black",attrs:{showButton:"true",imageSource:"/assets/deviso.png",buttonClass:"cta icon color-white download-cta",ctaClassNames:"container-l bg-gradient color-white grid-2 center-y radius-m shadow-l padding-m-left strip-padding-tablet",title:"Try Sonar today",subtitle:"and discover the difference.",button:"Schedule a demo",buttonPage:"demo",svgInfo:"M13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 C 0 5.82 5.82 0 13 0 Z M 12 16.586 L 9.739 14.325 C 9.349 13.935 8.716 13.935 8.325 14.325 C 7.935 14.716 7.935 15.349 8.325 15.739 L 12.285 19.699 C 12.485 19.9 12.75 19.997 13.012 19.992 C 13.275 19.997 13.539 19.9 13.739 19.699 L 17.699 15.739 C 18.09 15.349 18.09 14.716 17.699 14.325 C 17.309 13.935 16.675 13.935 16.285 14.325 L 14 16.61 L 14 7 C 14 6.448 13.552 6 13 6 C 12.448 6 12 6.448 12 7 Z"}}),o("sonarFooter")],1)])},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container padding-l-top padding-l-bottom"},[o("h3",{staticClass:"align-center color-white"},[e._v("Schedule a demo today.")]),o("p",{staticClass:"lead align-center color-silver"},[e._v("Choose a demo option below to get started.")])])}],i=o("80eb"),s=o("0a05"),l=o("2f20"),r=o("366e"),c=o("4106"),d=o("3a48"),g=o("74d1"),u=o("8cee"),p=o("f677"),h=o("a135"),m=o("8e4f"),b={name:"Voice",components:{sonarNav:i["a"],landingDemoCards:u["a"],sonarFooter:s["a"],landingHero:l["a"],landingLogos:r["a"],landingQuote:c["a"],landingCTA:g["a"],landingFeature:d["a"],features:p["a"],landingCode:h["a"],landingCodeForm:m["a"]}},v=b,f=o("2877"),y=Object(f["a"])(v,a,n,!1,null,null,null);t["default"]=y.exports},be31:function(e,t,o){},ea52:function(e,t,o){"use strict";var a=o("be31"),n=o.n(a);n.a}}]);
//# sourceMappingURL=sonar-Landing-Voice-vue.b13dde4b.js.map