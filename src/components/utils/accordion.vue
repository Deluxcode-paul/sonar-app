<template>
    <main>
        <div v-show="!loading" class="accordion">
            <div v-for="(cat, key) in contents" v-bind:key="cat">
                <h5 class="margin-s-top margin-xs-bottom">{{ key }}</h5>
                <div v-for="(content, key) in cat" v-bind:key="content">
                    <div class="accordion__item" :tabindex="key + 1">
                        <div class="accordion__title">{{ content.question }}</div>
                        <div class="accordion__content">{{ content.answer }}</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import axios from "axios";

export default {
    name: "accordion",
    props: {
        src: {
            type: String,
            default: "/assets/api/faq_pricing.json"
        }
    },
    data() {
        return {
            contents: [],
            loading: true
        }
    },

    methods: {
        async fetch() {
            const json = await axios.get(this.src)
            this.contents = json.data
            this.loading = false;
        }
    },
    mounted() {
        this.fetch();
    }
}
</script>
<style scoped>
main {
    max-width: 100%;
    margin: 0 auto;
    margin-top: 30px;
    font-family: inherit
}

.accordion {
    border-radius: 5px;
    width: 100%;

}

.accordion__item {
    position: relative;
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    overflow: hidden;
}

.accordion__item:before,
.accordion__item:after {
    content: "";
    width: 15px;
    height: 3px;
    top: 30px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    position: absolute;
    transition: all 240ms ease;
}

.accordion__item:before {
    right: 20px;
    transform: rotate(-45deg);
}

.accordion__item:after {
    right: 30px;
    transform: rotate(45deg);
}

.accordion__item:focus:before {
    transform: rotate(45deg);
}

.accordion__item:focus:after {
    transform: rotate(-45deg);
}

.accordion__item:focus {
    outline: 0;
    cursor: default;
    background: rgba(0, 0, 0, 0.01);
}

.accordion__title {
    padding: 24px;
    font-size: 1.25em;
    transition: background 180ms linear;
}

.accordion__title:hover {
    background: rgba(0, 0, 0, 0.016);

}

.accordion__item:focus .accordion__title:hover {
    background: rgba(0, 0, 0, 0);
}

.accordion__item:focus .accordion__title {
    font-weight: 500;
}

.accordion__content {
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    margin: 0px 30px;
    font-size: 18px;
    line-height: 1.5;
    visibility: collapse;
    opacity: 0;
    height: 0;
    transform-origin: center center;
    transform: rotate3d(-1, 0, 0, 90deg);
    transition: all 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.accordion__item:focus .accordion__content {
    height: auto;
    padding: 30px 0px;
    margin: 0px 30px;
    visibility: visible;
    transform: rotate3d(0, 0, 0, 0deg);
    opacity: 1;
}
</style>