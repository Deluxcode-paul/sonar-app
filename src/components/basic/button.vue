<template>
    <div>
        <router-link v-if="route !== '' && link == ''" tag="a" :to="route" :class="style">
            <slot></slot>
        </router-link>
        <a v-if="link !== '' && route == ''" :href="link" :class="style">
            <slot></slot>
        </a>
        <a v-if="link == '' && route == ''" :class="style" style="cursor: pointer">
            <slot></slot>
        </a>
    </div>
</template>
<script>
export default {
    name: 'sButton',
    data: function() {
        return {
            style: String
        }
    },
    props: {
        color: {
            type: String,
            default: 'blue'
        },
        size: {
            type: String,
            default: ''
        },
        full: {
            type: Boolean,
            default: false
        },
        route: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        }
    },
    created() {
        this.style = 'button ' + this.color + ' ' + this.size + ' ' + (this.full == true ? 'stretch' : '');
    }
}
</script>
<style scoped>
.button {
    font-family: 'Inter', sans-serif;
    background: #fff;
    padding: 15px 20px 13px;
    color: #111;
    border-radius: 4px;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
    border: none;
    text-align: center;
    transform: translateZ(0);
    transition: all .2s;
    -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.button-blue-inset {
    margin-top: 1em;
    font-size: 18px;
    padding: 20px 25px;
    background: hsl(210, 100%, 50%);
    color: hsl(210, 100%, 95%) !important;
    box-shadow: inset 0 1px 0 hsl(224, 84%, 74%), 0 1px 3px hsla(0, 0%, 0%, .2);
}

.button-blue-inset:hover {
    color: black !important;
}



.button.white svg .fill {
    transition: all .5s;
    -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.button.white:hover,
.button:hover {
    box-shadow: 0 1px 7px rgba(0, 0, 0, .1);
    background-color: #fefefe;
    color: #0052f5
}

.button.white:hover svg .fill {
    fill: #0052f5
}

.bg-black .button.white:hover,
.bg-blue .button.white:hover {
    box-shadow: 0 1px 7px rgba(0, 0, 0, .1);
    background-color: #fefefe;
    color: #09f !important
}

.bg-deepblue .button.white:hover {
    color: #0052f5 !important
}

.button+.button {
    margin-left: 5px
}

.button svg {
    display: inline;
    top: -1px;
    margin-right: 10px;
    position: relative
}

.button.small {
    padding: 12px 15px;
    font-size: 14px;
    font-weight: 400;
    transition: box-shadow .3s, background .2s;
    -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.button.big,
.button.huge {
    padding: 18px 18px 15px
}

.button.fluid {
    width: 95%
}

.button.big.icon-fixed,
.button.huge.icon-fixed {
    padding: 14px 24px 15px
}

.button.white {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .03), 0 1px 0 rgba(0, 0, 0, .05), 0 1px 3px rgba(0, 0, 0, .1)
}

.button.opaque {
    color: #fff;
    background: rgba(255, 255, 255, .25)
}

.button.blue {
    background: #09f;
    color: #fff;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 85, 255, .3);
    transition: all .2s;
    -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.bg-black .button.deepblue,
.night .button.deepblue {
    background: #09f;
    transition: all .2s;
    -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.bg-black .button.deepblue:hover {
    background: #1af
}

.bg-black .button.deepblue:hover,
.button.deepblue:hover {
    box-shadow: inset 0 0 0 rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 85, 255, .2);
    background: #07f
}

.bg-white .button.deepblue,
.button.deepblue {
    background: #0052f5;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 85, 255, .3);
    color: #fff;
    transition: box-shadow .3s, background .2s;
    -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.button.blue:hover {
    box-shadow: inset 0 0 0 rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 85, 255, .2);
    background: #1af
}

.button.red {
    background: #f44;
    color: #fff
}

.button.disabled {
    color: #fff;
    background: #ccc;
    box-shadow: none
}

.button.disabled:hover {
    box-shadow: none;
    background: #ccc
}

.button.dim {
    transition: opacity .2s;
    -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    box-shadow: none
}

.button.dim:hover {
    opacity: .75
}

.button.stretch {
    width: 100%
}

@media only screen and (min-width:768px) {
    .button.icon.big {
        padding: 15px 24px
    }

    .button.big {
        padding: 18px 24px 15px
    }

    .button+.button {
        margin-left: 10px
    }

    .button.icon {
        padding: 18px 24px 15px
    }

    .button.icon svg {
        display: inline
    }

    .button.icon.small {
        padding: 5px 10px 6px
    }

    .link.icon svg {
        top: 4px;
        position: relative
    }

    .button.icon.small svg {
        margin-right: 5px;
        top: 1px
    }

    .button.icon.big svg {
        top: 2px;
        margin-right: 8px
    }

    .button.huge {
        font-size: 18px;
        padding: 18px 24px 15px
    }
}

@media only screen and (max-width:424px) {
    .button {
        width: 100%
    }

    .button+.button {
        width: 100%;
        margin: 10px 0 0 0
    }

    .button.inline {
        width: auto
    }

    form div .button,
    form div .button.big {
        width: initial
    }
}
</style>