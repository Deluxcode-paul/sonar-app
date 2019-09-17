<template>
    <div>
        <sonarNavDesktop />
        <sonarNavMobile />
    </div>
</template>
<script>
import sonarNavDesktop from './sonarNavDesktop.vue'
import sonarNavMobile from './sonarNavMobile.vue'

export default {
    name: 'sonarNav',
    components: {
        sonarNavDesktop,
        sonarNavMobile,
    },
    methods: {
        snrNav: function() {
            var e = document.querySelector(".nav-desktop"),
                t = e.querySelectorAll(".has-sub"),
                n = e.querySelector(".nav-sub"),
                r = e.querySelectorAll(".nav-sub > div"),
                o = 0,
                i = !0;
            // my eventlisteners bring all the boys to the yard
            t.forEach(function(e, t) {
                e.addEventListener("mouseenter", function() {
                        e.classList.add("hover"),
                            n.classList.add("active"),
                            r[o].classList.remove("from-left"),
                            r[o].classList.remove("from-right"),
                            r[o].classList.remove("active"),
                            o < t && !i ? r[t].classList.add("from-right") : o > t && !i && r[t].classList.add(
                                "from-left"),
                            (i = !1),
                            r[t].classList.add("active"),
                            (o = t);
                    }),
                    e.addEventListener("mouseleave", function(t) {
                        var a = t.toElement || t.relatedTarget;
                        !a || a.classList.contains("has-sub") || a.classList.contains("sub-list") || ((i = !0),
                                n.classList.remove("active"), r[o].classList.remove("active")),
                            a && !a.classList.contains("sub-list") && e.classList.remove("hover");
                    }),
                    n.addEventListener("mouseleave", function(e) {
                        var a = e.toElement || e.relatedTarget;
                        a && !a.classList.contains("has-sub") && ((i = !0), n.classList.remove("active"), r[o]
                            .classList.remove("active"));
                    }),
                    document.addEventListener("mouseout", function(e) {
                        e = e ? e : window.event;
                        var a = e.relatedTarget || e.toElement;
                        (a && "HTML" != a.nodeName) || ((i = !0), r[o].classList.remove("active"), n.classList
                            .remove("active"));
                    });
            });
            var acc = document.querySelector(".nav-cta");
            acc.addEventListener("click", function() {
                document.querySelector(".nav-mobile").classList.toggle("active");
            })
        },
        // but sometimes those bois don't like me very much
        snrNavCatch: async function() {
            try {
                await this.snrNav();
            } catch (error) {
                return;
            }
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            this.snrNavCatch();
        });
    }
}
</script>
<style>
li.has-sub {
    transition: all 240ms ease-in-out
}

li.has-sub:hover {
    text-shadow: 0 0 30px white
}



.nav-mobile li,
.nav-mobile a {}

.nav-desktop li:hover {
    color: rgba(0, 0, 0, 1);
}

.nav-desktop .router-link-active {
    color: #000;
}

.nav-night li {
    color: rgba(255, 255, 255, .75);
}

.nav-night .router-link-active {
    color: #fff;
}

.nav-night li:hover {
    color: rgba(255, 255, 255, 1);
}

.nav-deepblue li {
    color: rgba(255, 255, 255, .75);
}

.nav-deepblue .router-link-active {
    color: #fff;
}

.nav-deepblue li:hover {
    color: rgba(255, 255, 255, 1);
}

nav {
    position: fixed;
    width: 100%;
    height: 100%;
    max-height: 60px;
    /*top: 40px;*/
    z-index: 900 !important;
    color: #000
}

nav a,
nav nav.nav-night a {
    color: inherit;
    display: block;
    transition: opacity 240ms ease-in-out
}

nav a.download-cta {
    color: #0052f5
}

nav .nav-list {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
    max-width: 980px;
    margin: auto
}

nav .nav-sub ul li:hover a {
    color: #0052f5;
}

nav .nav-sub ul li img {
    opacity: .1;
    max-width: 150px;
    transform: translateY(60%);
    transition: all 0.35s cubic-bezier(0.075, 0.82, 0.165, 1);
}

nav .nav-sub ul li:hover img {
    transform: translateY(80%);
    opacity: 0.4;
}

nav .nav-sub ul li:hover a svg * {
    fill: #0052f5
}

.nav-blue nav svg *,
.nav-deepblue nav svg *,
.nav-night nav svg * {
    fill: #fff
}

.nav-blue .nav-list,
.nav-blue .nav-mobile .nav-sub,
.nav-blue nav .nav-sub,
.nav-blue nav a.download-cta,
.nav-deepblue .nav-list,
.nav-deepblue .nav-mobile .nav-sub,
.nav-deepblue nav .nav-mobile .nav-sub,
.nav-deepblue nav .nav-sub,
.nav-deepblue nav a.download-cta,
.nav-night .nav-list,
.nav-night .nav-list a,
.nav-night .nav-mobile .nav-sub,
.nav-night .nav-mobile .nav-sub a,
.nav-night nav .nav-sub {
    color: #fff
}

.nav-blue .nav-mobile .nav-sub li:hover a,
.nav-blue nav .nav-sub ul li:hover p,
.nav-deepblue .nav-mobile .nav-sub li:hover a,
.nav-deepblue nav .nav-sub ul li:hover p {
    color: rgba(255, 255, 255, .7)
}

.nav-blue nav .nav-sub ul li:hover svg *,
.nav-deepblue nav .nav-sub ul li:hover svg * {
    fill: #fff;
    opacity: .6
}

.nav-blue .nav-desktop:after,
.nav-blue .nav-mobile,
.nav-blue .nav-mobile .nav-sub {
    background: #09f
}

.nav-blue .nav-desktop .nav-sub {
    background: #0093f5
}

.nav-deepblue .nav-desktop:after,
.nav-deepblue .nav-mobile,
.nav-deepblue .nav-mobile .nav-sub {
    background: #2358f8
}

.nav-deepblue .nav-desktop .nav-sub {
    background: #0053fa
}

.nav-night .nav-desktop:after,
.nav-night .nav-mobile,
.nav-night .nav-mobile .nav-sub {
    background: #000;
    box-shadow: 0 1px 0 rgba(255, 255, 255, .1)
}

.nav-night .nav-desktop .nav-sub {
    background: #050505;
    box-shadow: inset 0 -1px 0 rgba(255, 255, 255, .1)
}

.nav-night .nav-mobile .nav-sub li:hover a,
.nav-night nav .nav-opacity .nav-sub ul li:hover p,
.nav-night nav a.download-cta {
    color: #09f;
}

.nav-night nav .nav-sub a {
    color: #fff;
    transition: all 240ms ease;
}

.nav-desktop .nav-sub .sub-list {
    transition: all 240ms ease
}

.nav-desktop .nav-sub .sub-list:hover {
    transform: translateY(-1px);
}

.nav-night .nav-desktop .nav-sub ul li:hover p {
    color: #09f
}

.nav-night .nav-desktop .nav-sub ul li:hover svg *,
.nav-night .nav-mobile .nav-sub ul li:hover svg * {
    fill: #09f;
    transition: all 240ms ease
}

.mobile .nav-desktop,
.nav-desktop {
    display: none
}

@media only screen and (min-width:768px) {
    .nav-desktop {
        display: block;
        padding: 0 40px
    }

    .nav-desktop:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: #fff;
        box-shadow: 0 1px 0 rgba(0, 0, 0, .05)
    }

    .nav-desktop,
    .nav-desktop p {
        font-size: 15px;
        font-weight: 500
    }

    .nav-desktop .nav-list>li {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        height: 100%;
        cursor: pointer;
        -ms-flex-positive: 1;
        flex-grow: 1
    }

    .nav-desktop .nav-list>li:not(:first-child):not(:last-child) {
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-positive: 2;
        flex-grow: 2
    }

    .nav-desktop .nav-list>li:last-child {
        -ms-flex-pack: end;
        justify-content: flex-end
    }

    .nav-desktop .nav-list:hover>li:not(:hover):not(:first-child):not(.active):not(.hover) a,
    .nav-desktop .nav-list>li.active:not(:hover):not(.hover) a {
        opacity: .3
    }

    .nav-desktop .nav-list>li:first-child:hover~li:not(.active) a {
        opacity: 1 !important
    }

    .nav-desktop .nav-sub {
        position: absolute;
        display: block;
        left: 0;
        top: 60px;
        width: 100%;
        -ms-transform: translateY(-100%);
        transform: translateY(-100%);
        transition: transform .2s, opacity 0s .3s;
        opacity: 0;
        z-index: -1;
        background: #fbfbfb;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .05)
    }

    .nav-desktop .nav-sub.active {
        -ms-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
        transition: transform .2s
    }

    .nav-desktop .nav-sub>div {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -ms-flex-align: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 150ms ease-in-out;
        pointer-events: none
    }

    .nav-desktop .nav-sub>div:not(:last-child) {
        position: absolute
    }

    .nav-desktop .nav-sub>div.from-left {
        animation: fromLeft .3s ease forwards
    }

    @keyframes fromLeft {
        from {
            transform: translateX(-30px)
        }

        to {
            transform: translateX(0)
        }
    }

    .nav-desktop .nav-sub>div.from-right {
        animation: fromRight .3s ease forwards
    }

    @keyframes fromRight {
        from {
            transform: translateX(30px)
        }

        to {
            transform: translateX(0)
        }
    }

    .nav-desktop .nav-sub>div.active {
        pointer-events: auto;
        transition: all 240ms ease-in-out;
        opacity: 1
    }

    .nav-desktop .nav-sub ul {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        max-width: 980px;
        padding: 25px 0;
        width: 100vw
    }

    .nav-desktop .nav-sub ul+ul {
        padding-top: 0
    }

    .nav-desktop .nav-sub>div.active ul {
        pointer-events: auto
    }

    .nav-desktop .nav-sub ul li {
        text-align: center;
        cursor: pointer;
        width: 16.6%
    }

    .nav-desktop .nav-sub ul li p {
        font-size: 13px;
        letter-spacing: .4
    }

    .nav-desktop .nav-sub svg {
        margin-bottom: 15px
    }

    .nav-desktop .nav-sub img {
        margin-bottom: 15px
    }

    .nav-desktop .nav-sub ul li svg * {
        transition: all 240ms ease;
    }

    .nav-desktop .nav-sub p {
        margin: 0;
        line-height: 1
    }
}

.nav-mobile {
    padding: 0 20px;
    background: #fff;
    box-shadow: 0 1px 0 rgba(0, 0, 0, .05)
}

.nav-mobile,
.nav-mobile p {
    font-size: 18px;
    font-weight: 600
}

.nav-mobile .nav-cta {
    cursor: pointer
}

.nav-mobile .nav-cta svg path {
    transition: all .2s ease;
    -ms-transform-origin: 50%;
    transform-origin: 50%
}

.nav-mobile.active .nav-cta svg path:first-child {
    -ms-transform: rotate(45deg) translateY(5px);
    transform: rotate(45deg) translateY(5px)
}

.nav-mobile.active .nav-cta svg path:nth-child(2) {
    -ms-transform: rotate(-45deg) translateY(-5px);
    transform: rotate(-45deg) translateY(-5px)
}

.mobile-item-b a {
    background: #0052f5 url('/assets/mnav-1.png') 300% 50% no-repeat;
    height: 60px;
    color: #fff !important;
    border-radius: 5px;
    padding-left: 25px;
    padding-top: 15px;
}

.mobile-item-b a svg {
    color: #fff;
    fill: #fff;
}

.mobile-item-b a:hover svg {
    fill: #fff !important;
}

.nav-mobile .nav-sub {
    position: absolute;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    top: 60px;
    left: 0;
    width: 100%;
    background: #fff;
    height: 0;
    transition: all .36s ease-out;
    overflow: scroll;
    box-shadow: 0 1px 0 rgba(0, 0, 0, .05);
    -webkit-overflow-scrolling: touch
}

.nav-mobile.active .nav-sub {
    height: calc(100vh - 60px);
    transition: all .36s ease-in;
    padding-bottom: 120px
}

.nav-mobile .nav-sub ul {
    padding: 20px 20px
}

.nav-mobile .nav-sub ul li {
    width: 100%;
    opacity: 0;
    -ms-transform: translateY(-50px);
    transform: translateY(-50px);
    transition: all .3s ease-in-out .2s
}

.nav-mobile .nav-sub ul li:not(:first-child) {
    padding: 16px 0
}

.nav-mobile .nav-sub ul li:not(:first-child):not(:nth-child(2)) {
    border-top: 1px solid rgba(0, 0, 0, .05)
}

.nav-mobile .nav-sub ul li svg {
    margin-right: 20px;
    transition: all .2s ease
}

.nav-mobile .nav-sub li p.small {
    font-size: 14px;
    color: #aaa;
    margin: 0
}

.nav-blue .nav-mobile .nav-sub li p.small,
.nav-deepblue .nav-mobile .nav-sub p.small,
.nav-night .nav-mobile .nav-sub p.small {
    color: rgba(255, 255, 255, .7)
}

.nav-mobile.active .nav-sub ul li {
    -ms-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
    transition: all .3s ease-in-out
}

.nav-mobile.active .nav-sub ul li:first-child {
    transition-delay: 50ms
}

.nav-mobile.active .nav-sub ul li:nth-child(2) {
    transition-delay: 70ms
}

.nav-mobile.active .nav-sub ul li:nth-child(3) {
    transition-delay: 90ms
}

.nav-mobile.active .nav-sub ul li:nth-child(4) {
    transition-delay: .11s
}

.nav-mobile.active .nav-sub ul:nth-child(2) li:first-child {
    transition-delay: .13s
}

.nav-mobile.active .nav-sub ul:nth-child(2) li:nth-child(2) {
    transition-delay: .15s
}

.nav-mobile.active .nav-sub ul:nth-child(2) li:nth-child(3) {
    transition-delay: .17s
}

.nav-mobile.active .nav-sub ul:nth-child(2) li:nth-child(4) {
    transition-delay: .19s
}

.nav-mobile.active .nav-sub ul:nth-child(2) li:nth-child(5) {
    transition-delay: .21s
}

.nav-mobile.active .nav-sub ul:nth-child(2) li:nth-child(6) {
    transition-delay: .23s
}

.nav-mobile.active .nav-sub ul:nth-child(3) li:first-child {
    transition-delay: .25s
}

.nav-mobile.active .nav-sub ul:nth-child(3) li:nth-child(2) {
    transition-delay: .27s
}

.nav-mobile.active .nav-sub ul:nth-child(3) li:nth-child(3) {
    transition-delay: .29s
}

.nav-mobile.active .nav-sub ul:nth-child(3) li:nth-child(4) {
    transition-delay: .31s
}

@media only screen and (min-width:600px) {
    .nav-mobile {
        padding: 0 40px
    }

    .nav-mobile .nav-sub ul {
        padding-left: 40px;
        padding-right: 40px
    }
}

@media only screen and (min-width:768px) {
    body:not(.mobile) .nav-mobile {
        display: none
    }

    .nav-mobile .nav-sub ul {
        max-width: 980px;
        width: 100%;
        margin: 0 auto
    }
}

.notification {
    position: absolute;
    color: #000;
    border: 1px solid rgba(255, 255, 255, .1);
    width: auto;
    top: initial;
    opacity: 0;
    -ms-transform: translateY(12px);
    transform: translateY(12px);
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 1px rgba(0, 0, 0, .1), 0 3px 6px rgba(0, 0, 0, .05), 0 10px 20px rgba(0, 0, 0, .1);
    background: #fff;
    z-index: 200;
    max-width: 420px;
    padding: 20px;
    margin: auto;
    pointer-events: none
}

.night .notification,
.night-header .notification {
    background: #222;
    color: #fff
}

.night .notification:not(.static) div a,
.night-header .notification:not(.static) div a {
    color: #09f
}

.night .notification:not(.static) .button,
.night-header .notification:not(.static) .button {
    background: #09f
}

.notification.enable {
    animation: slideIn .5s normal forwards ease 2s;
    pointer-events: all
}

.notification.enable.static {
    animation: none;
    opacity: 1;
    pointer-events: all;
    right: 0;
    bottom: 0;
    border-radius: 0;
    max-width: 100%
}

.notification.bottom {
    position: fixed;
    right: 20px;
    top: initial;
    bottom: 0
}

.notification.center-horizontal {
    -ms-transform: translateY(10px);
    transform: translateY(10px);
    opacity: 0;
    left: 0;
    right: 0
}

.notification.enable.static.center-horizontal {
    opacity: 0;
    animation: slideIn .5s normal forwards ease .5s
}

.notification .notification-icon svg {
    display: block;
    min-width: 41px
}

.notification .notification-close {
    display: block;
    position: absolute;
    cursor: pointer;
    top: 12px;
    right: 12px
}

@media screen and (min-width:600px) {
    .notification.enable.static {
        right: 20px;
        box-shadow: 0 0 1px rgba(0, 0, 0, .1), 0 3px 6px rgba(0, 0, 0, .05), 0 10px 20px rgba(0, 0, 0, .1);
        animation: slideIn .5s normal forwards ease;
        bottom: 20px;
        border-radius: 4px;
        max-width: 420px
    }
}

@media screen and (min-width:768px) {

    .notification,
    .notification-bottom {
        width: 100%;
        top: 80px;
        right: 20px;
        -ms-transform: translateX(12px);
        transform: translateX(12px);
        left: auto;
        bottom: auto;
        float: right
    }

    .notification.enable.static {
        right: 20px;
        box-shadow: 0 0 1px rgba(0, 0, 0, .1), 0 3px 6px rgba(0, 0, 0, .05), 0 10px 20px rgba(0, 0, 0, .1);
        animation: slideIn .5s normal forwards ease;
        bottom: 20px;
        border-radius: 4px
    }
}
</style>
