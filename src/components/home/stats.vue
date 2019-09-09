<template>
    <div class="container-l padding-l-top bg-paper padding-l-bottom" style="width: 100%">
        <div class="container grid-2">
            <div class="width-m">
                <h3 class="color-black align-left">Real companies.<br>Real results.</h3>
                <p class="color-darksilver width-s lead padding-s-top">Here are some real case studies from real companies who've had their workflow improved by switching to Sonar.</p>
            </div>
            <div class='ui center-block padding-s-bottom'>
                <div class='ui_box'>
                    <div class='ui_box__inner'>
                        <h2>
                            Conversion Rate
                        </h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <div class='stat'>
                            <span>58%</span>
                        </div>
                        <div class='progress'>
                            <div class='progress_bar'></div>
                        </div>
                        <p>Lorem ipsum dolor sit amet. Some more super groovy information about this stat.</p>
                    </div>
                    <div class='drop'>
                        <p>Read the case study</p>
                        <div class='arrow'></div>
                    </div>
                </div>
                <div class='ui_box'>
                    <div class='ui_box__inner'>
                        <h2>
                            Total Sales
                        </h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <div class='stat'>
                            <span>$34,403.93</span>
                        </div>
                        <div class='progress'>
                            <div class='progress_bar--two'></div>
                        </div>
                        <p>Lorem ipsum dolor sit amet. Some more super groovy information about this stat.</p>
                    </div>
                    <div class='drop'>
                        <p>Read the case study</p>
                        <div class='arrow'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'stats'
}
</script>
<style scoped>
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
        max-width: 980px;
    }
}

@media screen and (min-width: 1024px) {
    .ui {
        grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr);
    }
}

@media screen and (min-width: 1280px) {
    .ui {
        gap: 20px 20px;
    }
}

@media screen and (min-width: 375px) {
    .ui {
        grid-template-columns: 1fr;
    }
}

@media screen and (min-width: 768px) {
    .ui {
        grid-template-columns: 1fr;
    }
}

@media screen and (min-width: 1024px) {
    .ui {
        grid-template-columns: 1fr 1fr;
    }
}


.ui ul {
    margin: 0px 30px 10px 0px;
    padding: 0;
    list-style-type: none;
    font-size: 11px;
    font-weight: 400;
    line-height: 20px;
}

.ui ul li {
    color: black;
}

.ui .drop {
    z-index: -3;
    opacity: 0;
    width: 100%;
    height: 10px;
    background: rgba(0, 0, 0, 0.09);
    position: absolute;
    color: black;
    bottom: 0;
    padding: 12px 30px 35px 30px;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.ui .drop p {
    color: white;
}

.ui_box {
    width: 100%;
    height: 258px;
    margin: 10px;
    border-radius: 5px;
    position: relative;
    background: rgba(255, 255, 255, 0);
    float: left;
    cursor: pointer;
    -webkit-transform: scale(1);
    transform: scale(1);
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.ui_box__inner {
    padding: 30px;
}

.ui_box__inner span {
    font-size: 36px;
    font-weight: 700;
}

.ui_box__inner .progress {
    width: 100%;
    margin-top: 10px;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 15px;
}

.ui_box__inner .progress_graph {
    float: right;
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);
    width: 85px;
    text-align: center;
    position: relative;
    padding-left: 20px;
    top: 24px;
}

.ui_box__inner .progress_graph__bar--1 {
    width: 10px;
    height: 20px;
    background: #0052f5;
    float: left;
    margin-right: 10px;
    position: relative;
    bottom: -10px;
    -webkit-animation: graph 1s;
}

.ui_box__inner .progress_graph__bar--2 {
    width: 10px;
    -webkit-animation: graph2 1s;
    height: 30px;
    float: left;
    margin-right: 10px;
    background: #0052f5;
}

.ui_box__inner .progress_graph__bar--3 {
    width: 10px;
    height: 24px;
    margin-right: 10px;
    -webkit-animation: graph3 1s;
    background: #0052f5;
    float: left;
    position: relative;
    bottom: -6px;
}

.ui_box__inner .progress_graph__bar--4 {
    width: 10px;
    height: 14px;
    -webkit-animation: graph4 1s;
    bottom: -16px;
    position: relative;
    background: #0052f5;
    float: left;
}

.ui_box__inner .progress_bar {
    height: 6px;
    float: left;
    width: 58%;
    background: #0052f5;
    -webkit-animation: bar 2s;
}

.ui_box__inner .progress_bar--two {
    height: 6px;
    float: left;
    width: 78%;
    background: #0052f5;
    -webkit-animation: bar2 2s;
}

.ui_box h2 {
    font-weight: normal;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.08px;
    font-size: 16px;
    margin: -4px 0px 3px 0px;
    color: black;
}

.ui_box p {
    font-size: 11px;
    color: black;
    clear: left;
    font-weight: 300;
    width: 160px;
    margin: 2px 0px 15px 0px;
}

.ui_box:hover {
    background: #3f6fff;
    color: white;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    transition-property: background, -webkit-transform;
    transition-property: transform, background;
    transition-property: transform, background, -webkit-transform;
    transition-duration: .3s;
    position: relative;
    z-index: 1;
}

.ui_box:hover ul.list li {
    color: white !important;
}


.ui_box:hover>.ui_box__inner p {
    color: white;
}

.ui_box:hover>.ui_box__inner h2 {
    color: white;
}

.ui_box:hover>.drop {
    transition-property: bottom, opacity;
    transition-duration: .3s;
    bottom: -42px;
    opacity: 1;
    background: #3f6fff;
}

.ui_box:hover>.drop .arrow {
    opacity: 1;
    transform: rotate(765deg);
}

.ui_box:hover>.ui_box__inner .progress_graph>div {
    background: white;
}

.ui_box:hover>.ui_box__inner .progress .progress_bar,
.ui_box:hover>.ui_box__inner .progress .progress_bar--two {
    background: white;
}

.stat_left {
    float: left;
}

.stat {
    color: #0052f5;
}

.ui_box:hover .stat {
    color: white;
}

.arrow {
    width: 4px;
    height: 4px;
    transition: opacity 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-top: 1px solid white;
    border-right: 1px solid white;
    float: right;
    position: relative;
    top: -24px;
    right: 0px;
    opacity: 0;
}

@-webkit-keyframes bar {
    from {
        width: 0px;
    }

    to {
        width: 58%;
    }
}

@keyframes bar {
    from {
        width: 0px;
    }

    to {
        width: 58%;
    }
}

@-webkit-keyframes bar2 {
    from {
        width: 0px;
    }

    to {
        width: 78%;
    }
}

@keyframes bar2 {
    from {
        width: 0px;
    }

    to {
        width: 78%;
    }
}

@-webkit-keyframes graph {
    from {
        height: 0px;
    }

    to {
        height: 20px;
    }
}

@keyframes graph {
    from {
        height: 0px;
    }

    to {
        height: 20px;
    }
}

@-webkit-keyframes graph2 {
    from {
        height: 0px;
    }

    to {
        height: 30px;
    }
}

@keyframes graph2 {
    from {
        height: 0px;
    }

    to {
        height: 30px;
    }
}

@-webkit-keyframes graph3 {
    from {
        height: 0px;
    }

    to {
        height: 24px;
    }
}

@keyframes graph3 {
    from {
        height: 0px;
    }

    to {
        height: 24px;
    }
}

@-webkit-keyframes graph4 {
    from {
        height: 0px;
    }

    to {
        height: 13px;
    }
}

@keyframes graph4 {
    from {
        height: 0px;
    }

    to {
        height: 13px;
    }
}
</style>