<template>
    <div class="grid-1 bg-paper shadow-m">
        <div class="span-1 padding-xs-bottom align-center">
            <p class="mobile-small width-s-mobile">Just a few companies powered by Sonar</p>
        </div>
        <div class="span-1">
            <div class="ui padding-s-bottom">
                <img src="/assets/logos/1.png" class="customer-logo">
                <img src="/assets/logos/2.png" class="customer-logo">
                <img src="/assets/logos/3.png" class="customer-logo">
                <img src="/assets/logos/6.png" class="customer-logo">
                <img src="/assets/logos/8.png" class="customer-logo">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'landingLogos'
}
</script>

<style lang="scss" scoped>

* {
    box-sizing: border-box;
}

.ui {
    margin: 0px auto;
    width: 87.5vw;
    overflow: visible;
    position: relative;
    display: grid;
    gap: 20px 20px;
    grid-template-columns: 1fr;
}

@media screen and (min-width: 768px) {
    .ui {
        width: 100%;
    }
}

@media screen and (min-width: 768px) {
    .ui {
        max-width: 692px;
    }
}

@media screen and (min-width: 1024px) {
    .ui {
        max-width: 1200px;
    }
}

@media screen and (min-width: 1024px) {
    .ui {
        grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr);
    }
}

@media screen and (min-width: 1280px) {
    .ui {
        gap: 20px 20px;
    }
}

@media screen and (min-width: 375px) {
    .ui {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (min-width: 768px) {
    .ui {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (min-width: 1024px) {
    .ui {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
}


.grid-1 {
    /*    background: linear-gradient(to top, #0099ff, #2358f8);*/
    padding-top: 35px;
    padding-bottom: 45px;
}

p {
    color: black;
    opacity: .75;
}

img {
    vertical-align: middle;
    display: inline-block;
    filter: invert(100%);
}



.customer-section.customer-customers {
    padding-bottom: 40px;
}

.customer-logo {
    height: 40px;
    width: auto;
    opacity: .55;
}

.customer-logo-container {
    display: flex;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-around;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
}

@media (max-width: 900px) {
    .customer-section {
        overflow: hidden;
        padding-bottom: 40px;
    }

    .customer-logo {
        margin-top: 6px;
        margin-bottom: 6px;
    }

    .customer-logo-container {
        width: 100%;
        max-width: 100%;
        padding-right: 20px;
        padding-left: 20px;
        -webkit-box-pack: center;
        justify-content: center;
        flex-wrap: wrap;
    }
}

@media (max-width: 767px) {
    .customer-logo {
        height: 8vw;
        max-height: 46px;
    }

    .customer-logo-container {
        width: 100%;
        max-width: 600px;
    }
}

@media (max-width: 479px) {
    .customer-section.customer-customers {
        padding-bottom: 20px;
    }

    .customer-logo {
        height: 13vw;
        max-height: 50px;
        margin-top: 3px;
        margin-bottom: 3px;
    }

    .customer-logo-container {
        padding-right: 0px;
        padding-left: 0px;
    }
}
</style>
