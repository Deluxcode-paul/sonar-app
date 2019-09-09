<template>
    <section class="card job-card-content">
        <div class="card-content">
            <div class="level job-card-view">
                <span class="level-item level-right">
                    <a :href="url" target="_blank">Website</a>
                </span>
            </div>
            <p class="title is-4">
                <span class="logo-box" :style="'background-image: url(' + vendorLogo + '); background-size: cover;'"></span> <span style="margin-top: -5px">{{ name }}</span>
            </p>
            <div>
            </div>
            <div class="job-card-info-row">
                <span>
                    {{ category }}
                </span>
            </div>
            <!--             <div class="level job-card-footer">
                <span class="level-item level-right">
                    4 hours ago
                </span>
            </div> -->
        </div>
    </section>
</template>
<script>
export default {
    name: 'integrationCard',
    props: {
        name: {
            type: String,
            default: ""
        },
        logo: {
            type: String,
            default: ""
        },
        url: {
            type: String,
            default: ""
        },
        category: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            vendorLogo: require('@/images/vendor_logos/' + this.logo)
        }
    }
}
</script>
<style scoped>
.logo-box {
	position: relative;
	display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-top: 0px;
    margin-right: 5px;
    padding: 2px
}

.logo {
    position: relative;
    height: 18px;
    width: auto;
    margin-bottom: 3px;
    margin-right: 5px;
    border-radius: 50%;

}

@media screen {
    .mdi:before {
        display: inline-block;
        font-size: inherit;
        text-rendering: auto;
        line-height: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .title:not(:last-child),
    .level:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    p,
    h1 {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 100%;
        font-weight: normal;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    section {
        display: block;
    }

    a {
        color: #0066a1;
        cursor: pointer;
        text-decoration: none;
    }

    a:hover {
        color: #353839;
    }

    span {
        font-style: inherit;
        font-weight: inherit;
    }

    .is-capitalized {
        text-transform: capitalize !important;
    }

    .has-text-weight-semibold {
        font-weight: 600 !important;
    }

    .icon {
        align-items: center;
        display: inline-flex;
        justify-content: center;
        height: 1.5rem;
        width: 1.5rem;
    }

    .title {
        word-break: break-word;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 80%;

    }

    .title {
        color: #353839;
        font-size: 15px;
        font-weight: 500;
        line-height: 1.125;
        margin-top: 15px;
    }



    .card {
        background-color: #fff;
        box-shadow: 0 2px 3px rgba(24, 25, 26, 0.1), 0 0 0 1px rgba(24, 25, 26, 0.1);
        color: #000;
        max-width: 100%;
        min-width: 33%;
        position: relative;
    }

    .card-content {
        background-color: rgba(0, 0, 0, 0);
        padding: 1.5rem;
    }

    .level {
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    @media screen and (min-width: 769px),
    print {
        .level {
            display: flex;
        }

        .level>.level-item:not(.is-narrow) {
            flex-grow: 1;
        }
    }

    .level-item {
        align-items: center;
        display: flex;
        flex-basis: auto;
        flex-grow: 0;
        flex-shrink: 0;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        .level-item:not(:last-child) {
            margin-bottom: .75rem;
        }
    }

    .level-left,
    .level-right {
        flex-basis: auto;
        flex-grow: 0;
        flex-shrink: 0;
    }

    .level-left {
        align-items: center;
        justify-content: flex-start;
    }

    @media screen and (max-width: 768px) {
        .level-left+.level-right {
            margin-top: 1.5rem;
        }
    }

    @media screen and (min-width: 769px),
    print {
        .level-left {
            display: flex;
        }
    }

    .level-right {
        align-items: center;
        justify-content: flex-end;
    }

    @media screen and (min-width: 769px),
    print {
        .level-right {
            display: flex;
        }
    }

    .icon {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: inherit;
    }

    :focus {
        outline: -webkit-focus-ring-color auto 0;
    }

    .job-card-content {
        font-size: 14px;
        margin-bottom: 8px;
    }

    .job-card-content h1 a {
        color: unset;
    }

    .job-card-content h1 a:hover {
        color: unset;
    }

    .job-card-view {
        display: flex;
        align-items: flex-start;
        margin-bottom: 8px !important;
    }

    .job-card-view>span {
        color: #0066a1;
        align-items: normal;
        margin-top: 0 !important;
    }

    .job-card-view>span span {
        font-weight: 600;
        margin-left: 4px;
    }

    .job-card-info-row {
        border-top: 1px solid #eaecef;
        margin: 8px 0;
        padding: 8px 0;
    }

    .job-card-info-row span {
        margin-top: 10px;
        position: relative;
        text-transform: uppercase;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.4);
        font-weight: 500;
        letter-spacing: 0.7px;
        word-break: break-word;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .job-card-info-row span:not(:first-of-type) {
        margin-left: 16px;
    }

    .job-card-info-row span:not(:first-of-type):before {
        content: "";
        height: 3px;
        width: 3px;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: -13px;
        background-color: #3c3f41;
        border-radius: 50%;
    }

    .job-card-description {
        margin-bottom: 36px;
        font-size: 16px;
        overflow-wrap: break-word;
    }

    .job-card-footer>span:last-of-type {
        color: rgba(60, 63, 65, 0.7);
    }

    @media all and (max-width: 767px) {
        .job-card-view .level-right {
            display: none;
        }
    }

    @media all and (min-width: 768px) {
        .job-card-description {
            max-width: 80%;
        }
    }
}
</style>