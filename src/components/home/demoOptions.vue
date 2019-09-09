<template>
    <div class="pivots margin-l-top">
        <div class="container width-s align-center">
            <h2>{{ title }}</h2>
            <p class="lead">{{ subtitle }}</p>
        </div>
        <div class="container-2cards width-xxs-tablet grid-2 center margin-m-top">
            <div style="margin: 0 auto">
                <a class="card-media card-light padding-s-all" href="/demo/express" rel="noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
                    </svg>
                    <h4>Express Demo</h4>
                    <p class="lead padding-s-top width-xxxs padding-s-bottom">
                        Jump right in with our interactive demo
                    </p>
                    <p class="strip">Start now ›</p>
                </a>
            </div>
            <div style="margin: 0 auto">
                <a class="card-media card-dark padding-s-all" href="/demo" rel="noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" />
                    </svg>
                    <h4>Group Demo</h4>
                    <p class="lead padding-s-top width-xxxs padding-s-bottom">
                        Book a virtual meeting with a Sonar specialist
                    </p>
                    <p class="strip">See availability ›</p>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'demoOptions',
    props: {
        title: {
            type: String,
            default: "Discover Sonar"
        },
        subtitle: {
            type: String,
            default: "Choose which option best suits you."
        }
    }
}
</script>
<style scoped>
a.card-dark {
    fill: rgba(255, 255, 255, 0.9);
    color: rgba(255, 255, 255, 0.9);
    background: rgba(35, 158, 248, 0.9);
}

a.card-light {
    fill: rgba(255, 255, 255, 0.9);
    color: rgba(255, 255, 255, 0.9);
    background: rgba(35, 158, 248, 0.9);
}

a.card-dark,
a.card-light {
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1);
}

a.card-dark p,
a.card-dark h4 {
    color: rgba(255, 255, 255, 0.9);
}

a.card-light p,
a.card-light h4 {
    color: rgba(255, 255, 255, 0.9);
}

a.card-light:hover {
    fill: rgba(255, 255, 255, 1);
    background: rgba(35, 158, 248, 1);
    -webkit-box-shadow: rgba(35, 158, 248, 0.05) 0 1px 0, rgba(35, 158, 248, 0.05) 0 2px 6px, rgba(35, 158, 248, 0.05) 0 10px 20px;
    box-shadow: 0 1px 0 rgba(35, 158, 248, 0.05), 0 2px 6px rgba(35, 158, 248, 0.05), 0 10px 20px rgba(35, 158, 248, 0.05);
}

a.card-light:hover,
a.card-light:hover p,
a.card-light:hover h4 {
    color: rgba(255, 255, 255, 1);
}

a.card-dark:hover,
a.card-dark:hover p,
a.card-dark:hover h4 {
    color: rgba(255, 255, 255, 1);
}

a.card-dark:hover {
    fill: rgba(255, 255, 255, 0.9);
    background: rgba(35, 158, 248, 1);
    -webkit-box-shadow: rgba(0, 0, 0, .05) 0 1px 0, rgba(0, 0, 0, .05) 0 2px 6px, rgba(0, 0, 0, .05) 0 10px 20px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, .05), 0 2px 6px rgba(0, 0, 0, .05), 0 10px 20px rgba(0, 0, 0, .05);
}

.container-2cards {
    width: 800px !important;
    margin: 0 auto;
    padding-top: 80px;
}

a svg {
    position: relative;
    opacity: 0.5;
    top: -80px
}

.card-media {
    max-width: 360px;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card-media:hover {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
}

.card-media:hover .strip {
    opacity: 1;
    transform: translateY(0px);
}

.strip {
    padding: 10px !important;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 7px;
    text-align: center;
    opacity: 0;
    transform: translateY(50px);
    transition: all 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>