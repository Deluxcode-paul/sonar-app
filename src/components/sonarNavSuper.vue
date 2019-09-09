<template>
    <div class="sup-menu">
        <div class="sup-menu-box">
            <div class="sup-menu sup-inner">
                <router-link to="demo"><span class="accent">Demo</span></router-link>
                <router-link to="login">Log in</router-link>
                <router-link to="/contact">Contact Us</router-link>
                <span class="highlight">
                    <router-link to="/contact">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z" /></svg> </router-link>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sonarNavSuper'
}
</script>
<style scoped>
body.nav-night .sup-menu {
    background: #050505 !important;
    border-bottom: solid 1px rgba(255, 255, 255, 0.08) !important;
}

body.nav-night .sup-menu a,
body.nav-night .sup-menu svg {
    color: white !important;
    fill: white !important;
}

body.nav-deepblue .sup-menu {
    background: #2b5fff !important;
    border-bottom: solid 1px rgba(255, 255, 255, 0.08) !important;
}

body.nav-deepblue .sup-menu a,
body.nav-deepblue .sup-menu svg {
    color: white !important;
    fill: white !important;
}

.sup-menu {
    background: #fbfbfb;
}

.sup-menu,
.sup-menu a,
.sup-menu svg {
    color: black;
    fill: black;
}

.accent {
    opacity: 1 !important;
    background: #eee;
    padding: 13px;
}

body.nav-night .sup-menu span.accent {
    opacity: 1 !important;
    background: rgba(255,255,255,0.2);
    padding: 13px;
}

body.nav-deepblue .sup-menu span.accent {
    opacity: 1 !important;
    background: rgba(255,255,255,0.08);
    padding: 13px;
}


@media (min-width: 1024px) {
    .sup-menu {
        position: fixed;
        top: 0;
        height: 40px;
        width: 100%;
        z-index: 1200 !important;
        overflow: hidden;
        box-shadow: 0 -1px 0 0 rgba(0, 0, 0, .05) inset;
        transform: translateZ(5px);
    }

    .sup-menu-box {
        max-width: 980px;
        margin: 0 auto;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        justify-content: center;
    }


    .sup-menu .sup-inner {
        z-index: 1300 !important;
        padding-left: 50px;
        padding-right: 50px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 410px;
        transform: translateX(80%);
        justify-content: space-between;
    }
}

@media (max-width: 1024px) {
    .sup-menu {
        position: fixed;
        top: 0;
        height: 40px;
        width: 100%;
        z-index: 1200 !important;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        overflow: hidden;
        box-shadow: 0 -1px 0 0 rgba(0, 0, 0, .05) inset;
        transform: translateZ(5px);
    }

    .sup-menu .sup-inner {
        z-index: 1300 !important;
        padding-left: 50px;
        padding-right: 50px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
        justify-content: space-between;
    }
}

.sup-menu a,
svg {
    font-size: 12px;
    opacity: .5;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    letter-spacing: .1px;
    transition: 100ms all ease-in-out;
    text-decoration: none;
}

.sup-menu a {
    padding: 13px;
}

.sup-menu svg {
    max-height: 12px;
    margin-top: -5px;
}


.sup-menu a:hover,
.sup-menu svg {
    cursor: pointer;
    opacity: 1;
}

</style>