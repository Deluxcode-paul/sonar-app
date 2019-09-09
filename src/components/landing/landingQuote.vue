<template>
    <div class="quote container width-xl width-l-desktop width-m-tablet padding-l">
        <figure v-if="invertLogo == true">
            <img :src="require('@/images/customer_logos/' + logo)" class="inverted" height="auto">
        </figure>
        <figure v-else>
            <img :src="require('@/images/customer_logos/' + logo)" height="auto">
        </figure>
        <blockquote>
            <p :class="bodyClass">{{ body }}</p>
            <cite>{{ person }}</cite>
        </blockquote>
    </div>
</template>
<script>
export default {
    name: 'landingQuote',
    props: {
        person: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        },
        invertLogo: {
            type: Boolean,
            required: false,
            default: false
        },
        bodyStyle: String,
        body: {
            type: String,
            required: true
        },
        containerClass: {
            type: String
        },
        bodyClass: {
            type: String
        },
        personClass: {
            type: String
        }
    }
}
</script>
<style scoped>
.line-height {
    line-height: 2;
}

.landing-quote {
    background-image: -webkit-gradient(linear, left top, left bottom, from(#fbfbfb), to(#fff));
    background-image: linear-gradient(#fbfbfb, #fff);
}

blockquote p {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    line-height: 1.5em;
    font-weight: 400;
    margin-top: 1em;
}

blockquote cite {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1.4px;
    font-size: 1rem;
    margin-top: 2em;
}

.inverted {
    filter: invert(100%);
}

img {
    width: 115px;
    border-radius: 0% !important;
}
</style>