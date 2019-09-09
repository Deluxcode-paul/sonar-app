<template>
<span span="1" class="card" :style="style">
   <div class="card-full">
      <span class="card-meta">
      </span>
   </div>

   <h4 class="card-title">{{ title }}</h4>

   <div class="card-inner">
      <p color="opaque" class="card-small-text">Simon Westlake</p>
      <p color="opaque" class="card-small-text">July 19th, 2019</p>
   </div>
</span></template>

<script>
  export default {
    name: 'blogCard',
    props: {
       link: String,
       span: String,
       title: String,
       photo: String
    },
    computed: {
      style () {
        return 'background-image: url(' + this.photo + ')'
      }
    },
  }
</script>

<style scoped>
.card-full {
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	flex-direction: row;
	-webkit-box-pack: center;
	justify-content: center;
}

.card-inner {
	display: flex;
	flex-direction: row;
	-webkit-box-pack: justify;
	justify-content: space-between;
}

.card-title {
	margin-top: 0px;
	margin-bottom: 20px;
	font-weight: 400;
	font-size: 18px;
	letter-spacing: -0.5px;
	line-height: 1.3;
}

.theme-dark .card-title {
	color: rgb(255, 255, 255);
}

@media only screen and (min-width: 768px) {
	.card-title {
		font-weight: 400;
		line-height: 1.1;
		font-size: 26px;
		letter-spacing: -1px;
	}
}

@media only screen and (min-width: 1024px) {
	.card-title {
		font-weight: 400;
		line-height: 1.1;
		font-size: 36px;
		letter-spacing: -1.5px;
	}
}

.card-small-text {
	font-weight: 400;
	font-size: 18px;
	line-height: 1.7;
	color: rgba(255, 255, 255, 0.5);
	margin: 0px;
}

.theme-dark .card-small-text {
	color: rgb(255, 255, 255);
}

.theme-dark .card-small-text {
	color: rgba(255, 255, 255, 0.5);
}

.card-meta {
	transition: opacity 0.2s ease 0s;
	cursor: pointer;
	box-shadow: none;
	border-radius: 0px;
}

.card-meta:hover {
	opacity: 0.75;
}

.card-meta:active {
	opacity: 0.9;
}

.card-meta svg {
	backface-visibility: hidden;
	transform: translate3d(0px, 0px, 0px);
}

.card-visual {
	max-width: 100%;
	vertical-align: middle;
	user-select: none;
}

.card {
	background-position: center center;
	background-size: cover;
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px, rgba(0, 0, 0, 0.05) 0px 5px 15px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	width: 100%;
	-webkit-box-pack: end;
	justify-content: flex-end;
	min-height: 460px;
	overflow: hidden;
	padding: 30px;
	text-decoration: none;
	transition: box-shadow 0.3s ease 0s;
	position: relative;
}

.card h4 {
	color: rgb(255, 255, 255);
	font-size: 26px;
}

.card p {
	color: rgba(255, 255, 255, 0.5);
	transition: color 0.2s ease 0s;
}

.card:hover {
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.1) 0px 20px 30px;
}

.card:hover p {
	color: rgb(255, 255, 255);
}

.theme-dark .card {
	box-shadow: rgba(255, 255, 255, 0.094) 0px 0px 0px 1px;
}

.theme-dark .card:hover p {
	color: rgb(255, 255, 255);
}

.theme-dark .card:hover {
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.1) 0px 20px 30px;
}

@media only screen and (min-width: 768px) {
	.card h4 {
		font-weight: 400;
		font-size: 26px;
		letter-spacing: -1px;
		color: rgb(255, 255, 255);
		line-height: 1.3;
		margin-bottom: 5px;
	}
}

@media only screen and (min-width: 1024px) {
	.card h4 {
		font-size: 32px;
		line-height: 1.2;
	}
}

@media screen and (max-width: 1024px) {
	.card {
		grid-column: auto / span 2;
	}
}

.card>div:first-child {
	-webkit-box-flex: 1;
	flex-grow: 1;
}

.card video {
	display: block;
	position: absolute;
	z-index: 1;
	left: 0px;
	top: 0px;
	object-fit: cover;
	height: 100%;
	width: 100%;
	border-radius: 12px;
}

.card h4,
.card p,
.card>div:first-child {
	z-index: 10;
}

.card::after {
	background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0px, rgba(0, 0, 0, 0.88) 100%);
	content: "";
	height: 100%;
	left: 0px;
	position: absolute;
	top: 0px;
	width: 100%;
	z-index: 2;
	border-radius: 12px;
}

* {
	box-sizing: inherit;
}
</style>