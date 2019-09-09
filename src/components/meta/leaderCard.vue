<template>
    <a class="link link-reset display-block radius-3 bio-card">
        <article>
            <div class="read">
                {{ bio }}
            </div>
            <figure class="bio-card_photo-wrapper">
                <img class="bio-card_photo" :src="photo">
            </figure>
            <div class="bio-card_text padding-2 padding-top-4">
                <h4 class="bio-card_title color-white text-condensed font-size-14 bio-card_sub">
                    <img style="max-height: 0.8em; opacity: .5;" src="/assets/star.png">
                </h4>
                <h3 class="bio-card__title font-size-30 color-white font-weight-900 line-height-1">
                    {{ name }}
                </h3>
                <p class="bio-card_position font-size-18 padding-right-1 color-white font-weight-300">
                    {{ position }}
                </p>
            </div>
        </article>
    </a>
</template>
<script>
export default {
    name: 'leaderCard',
    props: {
        name: String,
        position: String,
        photo: String,
        bio: String
    }
}
</script>
<style scoped>
.read {
    position: absolute;
    z-index: 200;
    top: 20px;
    left: 20px;
    padding-right: 20px;
    font-size: 15px;
    opacity: 0;
    color: white;
    transform: translateY(40px);
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.link:hover {
    transform: scale(1.1);
}

.link:hover .read {
    transform: translateY(0px);
}

.link {
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@media all {
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *:before,
    *:after {
        box-sizing: border-box;
    }

    figure {
        margin: 0;
    }

    img {
        vertical-align: middle;
    }

    a img {
        border: none;
    }

    h3,
    h4 {
        font-family: Inter;
        font-weight: 300;
        color: #222;
        color: inherit;
        margin-top: 0;
        margin-bottom: 0;
    }

    h3 {
        font-size: 26px;
    }

    h4 {
        font-size: 22px;
    }

    p {
        margin-bottom: 0;
        margin-top: 0;
    }

    a {
        color: #1560fa;
        text-decoration: none;
        word-wrap: break-word;
    }

    a:hover {
        color: #4782fb;
        text-decoration: underline;
    }

    a:active {
        color: #4782fb;
    }

    a:focus {
        color: #4782fb;
    }

    .link {
        color: #1560fa;
        text-decoration: none;
    }

    .link:hover {
        color: #4782fb;
        text-decoration: underline;
    }

    .link:active {
        color: #4782fb;
    }

    .link:focus {
        color: #4782fb;
    }

    .link-reset {
        color: inherit;
        text-decoration: inherit;
    }

    .link-reset:hover,
    .link-reset:active,
    .link-reset:focus {
        text-decoration: inherit;
        color: inherit;
        outline: none;
    }

    .text-condensed {
        line-height: 0.92;
    }

    .color-white {
        color: #fff;
    }

    .bio-card_title {
        position: relative;
    }

    .padding-right-1 {
        padding-right: 16px;
    }

    .padding-2 {
        padding-top: 32px;
        padding-bottom: 32px;
        padding-left: 32px;
        padding-right: 32px;
    }

    .padding-top-4 {
        padding-top: 64px;
    }

    .padding-right-1 {
        padding-right: 16px;
    }

    .padding-2 {
        padding-top: 32px;
        padding-bottom: 32px;
        padding-left: 32px;
        padding-right: 32px;
    }

    .padding-top-4 {
        padding-top: 64px;
    }

    .font-size-14 {
        font-size: 14px;
    }

    .font-size-18 {
        font-size: 18px;
    }

    .font-size-30 {
        font-size: 30px;
    }

    .display-block {
        display: block;
    }

    .radius-3 {
        border-radius: 3px;
    }

    .line-height-1 {
        line-height: 1;
    }

    .font-weight-300 {
        font-weight: 400;
        opacity: 1;
    }

    .font-weight-900 {
        font-weight: 600;
    }

    .u-colorWhite {
        color: #fff;
    }

    .bio-card {
        height: 360px;
        background: #0099ffcc;
        position: relative;
        overflow: hidden;
    }

    .bio-card:hover .bio-card_photo-wrapper {
        opacity: 0.1 !important;
        transform: scale(1.02);
    }

    .bio-card:hover {
        box-shadow: 0 1px 0 #006eb773, 0 2px 6px #006eb773, 0 10px 20px #006eb773;
    }

    .bio-card:hover .read {
        opacity: 1;
    }


    .bio-card_photo-wrapper {
        transition: all 0.6s ease-in-out;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .bio-card_photo {
        width: inherit;
        height: inherit;
        -o-object-fit: cover;
        object-fit: cover;
        background: black;
    }

    .bio-card_photo img {
        opacity: 0.6;
    }

    .bio-card_text {
        width: 100%;
    }

    .bio-card_sub {
        margin-bottom: 10px;
    }

    .bio-card__title {
        letter-spacing: -0.03em;
    }

    .bio-card_position {
        margin-top: 10px;

    }

    @media all and (max-width: 767px) {
        .bio-card {
            height: 360px;
        }

        .bio-card__title {
            font-size: 25px;
        }

        .bio-card_position {
            padding-right: 8px;
        }
    }

    .bio-card_photo-wrapper {
        height: 100%;
    }

    .bio-card_text {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    @media all and (max-width: 767px) {
        .bio-card_text {
            padding: 32px 16px 16px;
        }

        .bio-card_position {
            font-size: 16px;
        }
    }

    .bio-card {
        height: 360px;
        position: relative;
        overflow: hidden;
    }

    .bio-card:hover .bio-card_photo,
    .bio-card:active .bio-card_photo,
    .bio-card:active:hover .bio-card_photo {
        opacity: 0.5;
        -webkit-transform: scale(1.02);
        -ms-transform: scale(1.02);
        transform: scale(1.02);
    }

    .bio-card_photo-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .bio-card_photo {
        width: inherit;
        height: inherit;
        -o-object-fit: cover;
        object-fit: cover;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .bio-card_text {
        width: 100%;
    }

    .bio-card_sub {
        margin-bottom: 10px;
    }

    .bio-card__title {
        letter-spacing: -0.03em;
    }

    .bio-card_position {
        margin-top: 10px;
    }

    @media all and (max-width: 767px) {
        .bio-card {
            height: 456px;
        }

        .bio-card__title {
            font-size: 25px;
        }

        .bio-card_position {
            padding-right: 8px;
        }
    }

    .bio-card_photo-wrapper {
        height: 100%;
    }

    .bio-card_text {
        position: absolute;
        bottom: 0;
        left: 0;
        background: linear-gradient(to bottom,
            #09f0,
            #7eccff 100%);
    }

    @media all and (max-width: 767px) {
        .bio-card_text {
            padding: 32px 16px 16px;
        }

        .bio-card_position {
            font-size: 16px;
        }
    }
}
</style>