<template>
    <div class="card starter card--has-link">
        <a href="#" class="card__link">
            Watch
        </a>
        <div class="card__image">
            <img src="https://gridsome.org/assets/static/gridsome-starter-blog.d2ee30e.f5aa460.png" width="840" data-src="https://gridsome.org/assets/static/gridsome-starter-blog.d2ee30e.f5aa460.png" data-srcset="https://gridsome.org/assets/static/gridsome-starter-blog.6c3ed9d.f5aa460.png 480w, https://gridsome.org/assets/static/gridsome-starter-blog.d2ee30e.f5aa460.png 840w" data-sizes="(max-width: 840px) 100vw, 840px" class="g-image g-image--lazy g-image--loaded" sizes="(max-width: 840px) 100vw, 840px" srcset="https://gridsome.org/assets/static/gridsome-starter-blog.6c3ed9d.f5aa460.png 480w, https://gridsome.org/assets/static/gridsome-starter-blog.d2ee30e.f5aa460.png 840w">
        </div>
        <div class="card__inner">
            <h4 class="starter__title">
                {{ title }}
            </h4>
            <p class="starter__desc">{{ description }}</p>
            <div class="starter__footer">
                <div class="starter__actions flex gap-15">
                    V2
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'castsCard',
    data() {
        return {
            watching: false,
            videoSrc: "https://www.youtube.com/embed/" + this.link + "?ecver=1&amp;cc_load_policy=1&amp;disablekb=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=0&amp;color=white"
        }
    },
    props: {
        title: String,
        length: String,
        description: String,
        link: String,
        card: String,
        button: String
    },
    methods: {
        castWatching() {
            if (this.watching == false) {
                this.watching = true;
            } else {
                this.watching = false;
            }
        }
    }
}
</script>
<style scoped>
.card {
    border: 1px solid var(--border-color-darker);
    border-radius: 4px;
    background-color: var(--light-bg);
    transition: color .3s, box-shadow .3s, -webkit-transform .3s;
    transition: color .3s, box-shadow .3s, transform .3s;
    transition: color .3s, box-shadow .3s, transform .3s, -webkit-transform .3s;
    position: relative;
    z-index: 1;
    box-shadow: 1px 1px 5px 0 rgba(91, 177, 150, .13);
}

.card__image {
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    border-bottom: 1px solid var(--border-color);
}

.card__image img {
    margin: 0;
    width: 100%;
}

.card__inner {
    padding: var(--space);
    overflow: hidden;
    position: relative;
}

.card__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 1;
}

.card__link:focus {
    opacity: 1;
    outline: 2px auto -webkit-focus-ring-color;
}

.card--has-link:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    box-shadow: var(--glow);
    color: currentColor;
}

.card h4 {
    font-family: 'Inter', sans-serif;
    margin-bottom: .5rem;
}

.card p:not(:last-child) {
    margin-bottom: 1.2rem;
}


.starters-content {
    padding: var(--space-x2);
}

.platform-link {
    display: flex;
    align-items: center;
    padding: 7px 0;
}

.platform-link img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin: 0 10px 0 0;
}

.platform-count {
    margin-left: auto;
    padding: .15rem .4rem;
    background-color: var(--inline-code-bg);
    border-radius: .3em;
    font-size: .7em;
}

.platform-count--fade-out {
    opacity: .3;
}

.starter .card__inner {
    padding: 1rem;
}

.starter__title {
    font-size: .9rem;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    letter-spacing: 0.15px;
    overflow: hidden;
}

.starter__desc,
.starter__title {
    white-space: nowrap;
    max-width: 220px;
    text-overflow: ellipsis;
}

.starter__desc {
    font-size: .85rem;
    margin-bottom: .5rem !important;
    opacity: .8;
    overflow-x: hidden;
}

.starter__footer {
    display: flex;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    font-size: .85rem;
    position: relative;
}

.starter__actions {
    opacity: .6;
}

.starter__platform img {
    width: 25px;
    max-height: 25px;
    margin: 0;
}

.starter:hover .starter__footer {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}


/*! CSS Used keyframes */

@-webkit-keyframes scaleIn {
    0% {
        -webkit-transform: scale(.5);
        transform: scale(.5);
        opacity: 0;
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes scaleIn {
    0% {
        -webkit-transform: scale(.5);
        transform: scale(.5);
        opacity: 0;
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
}
</style>