<template>
    <form>
        <div class="svg-wrapper-button">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect :class="animate ? 'shape' : 'shapeNoAnimation'" height="60" width="320" />
        </svg>
            <button class="textButton" :class="buttonStyle" type="submit">{{ text }}</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'wideButton',
        props: {
            text: {
                default: 'Click here',
                type: String
            },
            buttonStyle: {
                default: 'btn btn-lg btn-primary btn-block mb-2',
                type: String
            }
        },
        data: () => ({
            animate: true
        }),
        mounted() {
            setInterval(() => this.animate = !this.animate, 4000);
        }
    }
</script>
<style lang="scss">
    .svg-wrapper-button {
        height: 60px;
        margin: 0 auto;
        position: relative;
        top: 0px;
        width: 320px;
        transition: 1s;
        .shape {
            fill: transparent;
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
            stroke: #07f;
            animation: draw 4s ease infinite;
        }
        .shapeNoAnimation {
            fill: transparent;
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
            stroke: #07f;
        }

        .textButton {
            color: #fff;
            font-size: 22px;
            position: relative;
            top: -48px;
            left: 45px;
            text-align: center;
        }
    }
    .svg-wrapper-button:hover {
        background: #07f;
    }

    @keyframes draw {
        0% {
            stroke-dasharray: 140 540;
            stroke-dashoffset: -474;
            stroke-width: 8px;
        }
        100% {
            stroke-dasharray: 760;
            stroke-dashoffset: 0;
            stroke-width: 2px;
        }
    }
    button {
        padding: 0;
    }
</style>

