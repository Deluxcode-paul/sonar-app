<template>
    <section class="solutions" id="solutions">
        <div class="container">
            <div class="row solution-types grid-2">
                <div v-for="solution in solutions" :key="solution">
                    <a href="#" class="solution-item">
                        <div class="solution-item--image">
                            <div v-html="solution.image" class="solution-img"></div>
                            <div :class="solution.class"></div>
                        </div>
                        <div class="solution-item--content">
                            <span class="subhead">Industry</span>
                            <h3>{{ solution.name }}</h3>
                            <p>{{ solution.description }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Staging',
    data() {
        return {
            solutions: [{
                    "name": "WISP",
                    "description": "We've designed Sonar from the ground up with your industry in mind. Now this is versatile.",
                    "class": "bg-1",
                    "image": `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
<style type="text/css">
	.g-1{fill:#212020;}
	.st1{fill:#FFFFFF;}
</style>
<path class="g-1" d="M2,0h60c1.1,0,2,0.9,2,2v60c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V2C0,0.9,0.9,0,2,0z"/>
<path class="st1" d="M32,10.8c-11.7,0-21.2,9.5-21.2,21.2c0,11.1,8.6,20.2,19.5,21.1V37c-2.1-0.7-3.5-2.7-3.5-5
	c0-2.9,2.4-5.3,5.3-5.3s5.3,2.4,5.3,5.3c0,2.3-1.5,4.3-3.5,5v16.2c10.9-0.9,19.5-10,19.5-21.1C53.2,20.3,43.7,10.8,32,10.8z
	 M22.7,32c0,3.2,1.6,6,4,8l-2.6,2.7c-3.3-2.6-5.4-6.4-5.4-10.6s2.1-8,5.4-10.6l2.6,2.7C24.2,26,22.7,28.9,22.7,32z M39.9,42.7
	L37.3,40c2.5-1.9,4-4.8,4-8s-1.6-6-4-8l2.6-2.7c3.3,2.6,5.4,6.4,5.4,10.6S43.2,40.1,39.9,42.7z"/>
</svg>
`
                },
                {
                    "name": "Fiber",
                    "description": "We've designed Sonar from the ground up with your industry in mind. Now this is versatile.",
                    "class": "bg-2",
                    "image": `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
<style type="text/css">
	.g-2{fill:#719C7D;}
	.st1{fill:#FFFFFF;}
</style>
<path class="g-2" d="M2,0h60c1.1,0,2,0.9,2,2v60c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V2C0,0.9,0.9,0,2,0z"/>
<path class="st1" d="M32,9.5c12.4,0,22.5,10.1,22.5,22.5S44.4,54.5,32,54.5S9.5,44.4,9.5,32S19.6,9.5,32,9.5z M27.7,35.5
	c0.5,0,0.9,0.4,0.9,0.9V42c0,0.8,0.9,1.2,1.5,0.6L42.6,30c0.5-0.5,0.2-1.5-0.6-1.5h-5.7c-0.5,0-0.9-0.4-0.9-0.9V22
	c0-0.8-0.9-1.2-1.5-0.6L21.4,34c-0.5,0.5-0.2,1.5,0.6,1.5H27.7z"/>
</svg>
`
                },
                {
                    "name": "MDU",
                    "description": "We've designed Sonar from the ground up with your industry in mind. Now this is versatile.",
                    "class": "bg-3",
                    "image": `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#BD5353;}
	.st1{fill:#FFFFFF;}
</style>
<path class="st0" d="M2,0h60c1.1,0,2,0.9,2,2v60c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V2C0,0.9,0.9,0,2,0z"/>
<path class="st1" d="M32,9.5c12.4,0,22.5,10.1,22.5,22.5S44.4,54.5,32,54.5S9.5,44.4,9.5,32S19.6,9.5,32,9.5z M27.7,35.5
	c0.5,0,0.9,0.4,0.9,0.9V42c0,0.8,0.9,1.2,1.5,0.6L42.6,30c0.5-0.5,0.2-1.5-0.6-1.5h-5.7c-0.5,0-0.9-0.4-0.9-0.9V22
	c0-0.8-0.9-1.2-1.5-0.6L21.4,34c-0.5,0.5-0.2,1.5,0.6,1.5H27.7z"/>
</svg>
`
                },
                {
                    "name": "Voice",
                    "description": "We've designed Sonar from the ground up with your industry in mind. Now this is versatile.",
                    "class": "bg-4",
                    "image": "https://mattermost.com/wp-content/themes/mattermostv3/img/icons/icon-financial-services.svg"
                },
                {
                    "name": "Cable",
                    "description": "We've designed Sonar from the ground up with your industry in mind. Now this is versatile.",
                    "class": "bg-5",
                    "image": "https://mattermost.com/wp-content/themes/mattermostv3/img/icons/icon-financial-services.svg"
                },
                {
                    "name": "Enterprise",
                    "description": "We've designed Sonar from the ground up with your industry in mind. Now this is versatile.",
                    "class": "bg-6",
                    "image": "https://mattermost.com/wp-content/themes/mattermostv3/img/icons/icon-financial-services.svg"
                }
            ]
        }
    }
}
</script>
<style scoped>
@media (max-width: 767.98px) {
    .solutions .accent-diamond {
        right: -57px;
    }

    .solutions .accent-diamond img {
        max-width: 64px;
    }
}

.solutions .solution-types {
    margin: 4.8rem 0 0 0;
}

@media (max-width: 991.98px) {
    .solutions .solution-types {
        margin: 3.2rem 0 0 0;
    }
}

.solutions .solution-types>.col-md-6 {
    margin-bottom: 1.4rem;
}

.solutions .solution-types .solution-item {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: none;
    max-width: 584px;
    width: 100%;
    padding: 2.4rem 3.2rem 2.8rem 1.4rem;
    border-radius: 4px;
    position: relative;
    z-index: 10;
    overflow: hidden;
}

@media (max-width: 991.98px) {
    .solutions .solution-types .solution-item {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-align: start;
        align-items: flex-start;
        padding: 2.4rem .8rem 2rem 1.4rem;
    }
}

.solutions .solution-types .solution-item--image {
    margin: 0 32px 0 0;
    padding: 0;
    position: relative;
    z-index: 2;
}

.solutions .solution-types .solution-item--image .solution-img {
    position: relative;
    width: 64px;
    height: 64px;
    z-index: 2;
    max-width: inherit;
}

@media (max-width: 991.98px) {
    .solutions .solution-types .solution-item--image {
        margin: 0 0 2rem 0;
    }
}

.solutions .solution-types .solution-item--image .bg-1,
.solutions .solution-types .solution-item--image .bg-2,
.solutions .solution-types .solution-item--image .bg-3,
.solutions .solution-types .solution-item--image .bg-4,
.solutions .solution-types .solution-item--image .bg-5,
.solutions .solution-types .solution-item--image .bg-6,
.solutions .solution-types .solution-item--image .bg-7,
.solutions .solution-types .solution-item--image .bg-8,
.solutions .solution-types .solution-item:hover .solution-item--image .bg-1,
.solutions .solution-types .solution-item:hover .solution-item--image .bg-2,
.solutions .solution-types .solution-item:hover .solution-item--image .bg-3,
.solutions .solution-types .solution-item:hover .solution-item--image .bg-4,
.solutions .solution-types .solution-item:hover .solution-item--image .bg-5,
.solutions .solution-types .solution-item:hover .solution-item--image .bg-6,
.solutions .solution-types .solution-item:hover .solution-item--image .bg-7,
.solutions .solution-types .solution-item:hover .solution-item--image .bg-8 {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 2px;
    position: absolute;
    top: -8px;
    left: -8px;
    z-index: 1;
    -webkit-transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
}

.solutions .solution-types .solution-item--image .bg-1 {
    background: rgba(33, 32, 32, 0.2);
}

.solutions .solution-types .solution-item--image .bg-2 {
    background: rgba(113, 156, 125, 0.2);
}

.solutions .solution-types .solution-item--image .bg-3 {
    background: rgba(189, 83, 83, 0.2);
}

.solutions .solution-types .solution-item--image .bg-4 {
    background: rgba(178, 144, 127, 0.2);
}

.solutions .solution-types .solution-item--image .bg-5 {
    background: rgba(60, 73, 103, 0.2);
}

.solutions .solution-types .solution-item--image .bg-6 {
    background: rgba(63, 140, 149, 0.2);
}

.solutions .solution-types .solution-item--image .bg-7 {
    background: rgba(156, 102, 187, 0.2);
}

.solutions .solution-types .solution-item--image .bg-8 {
    background: rgba(0, 88, 204, 0.2);
}

.solutions .solution-types .solution-item--content {
    position: relative;
    z-index: 3;
}

.solutions .solution-types .solution-item--content .subhead {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2.5px;
    color: rgba(21, 34, 53, 0.6);
}

@media (max-width: 991.98px) {
    .solutions .solution-types .solution-item--content .subhead {
        font-size: 16px;
    }
}

.solutions .solution-types .solution-item--content h3 {
    margin-bottom: 12px;
    margin-top: 12px;
    line-height: 1;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 1px;
    font-family: 'Biosans', sans-serif;
}

.solutions .solution-types .solution-item--content h3 span {
    font-size: 24px;
    font-weight: normal;
    color: rgba(21, 34, 53, 0.15);
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
}

.solutions .solution-types .solution-item--content p {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 0.2px;
    margin: 0;
    color: rgba(21, 34, 53, 0.7);
    font-weight: normal;
}

@media (max-width: 991.98px) {
    .solutions .solution-types .solution-item--content p {
        padding-right: 0;
    }
}



.solutions .solution-types .solution-item:hover .solution-item--image .bg-1 {
    background: #212020;
    -webkit-transform: scale(19);
    transform: scale(19);
}

.solutions .solution-types .solution-item:hover .solution-item--image .bg-2 {
    background: #719c7d;
    -webkit-transform: scale(19);
    transform: scale(19);
}

.solutions .solution-types .solution-item:hover .solution-item--image .bg-3 {
    background: #bd5353;
    -webkit-transform: scale(19);
    transform: scale(19);
}

.solutions .solution-types .solution-item:hover .solution-item--image .bg-4 {
    background: #b2907f;
    -webkit-transform: scale(19);
    transform: scale(19);
}

.solutions .solution-types .solution-item:hover .solution-item--image .bg-5 {
    background: #3c4967;
    -webkit-transform: scale(19);
    transform: scale(19);
}

.solutions .solution-types .solution-item:hover .solution-item--image .bg-6 {
    background: #3f8c95;
    -webkit-transform: scale(19);
    transform: scale(19);
}

.solutions .solution-types .solution-item:hover .solution-item--image .bg-7 {
    background: #9c66bb;
    -webkit-transform: scale(19);
    transform: scale(19);
}

.solutions .solution-types .solution-item:hover .solution-item--image .bg-8 {
    background: #0058cc;
    -webkit-transform: scale(19);
    transform: scale(19);
}

.solutions .solution-types .solution-item:hover .solution-item--content .subhead {
    color: rgba(255, 255, 255, 0.6);
}

.solutions .solution-types .solution-item:hover .solution-item--content h3 {
    color: #fff;
}

.solutions .solution-types .solution-item:hover .solution-item--content h3 span {
    color: #fff;
    left: 8px;
}

.solutions .solution-types .solution-item:hover .solution-item--content p {
    color: rgba(255, 255, 255, 0.7);
}


.home .solutions h2 {
    font-size: 28px;
    font-weight: normal;
    margin-bottom: 1.6rem;
    line-height: 5.2rem;
}
</style>