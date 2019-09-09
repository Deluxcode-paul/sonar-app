<template>
<div class="hero padding-l-top padding-s-bottom">
  <div class="crypto-index-header" data-rc="crypto/index/header">
    <div class="crypto-index-header__container s-container s-gridMaxSm22 s-paddingBottom8 s-paddingTop6 u-colorWhite">
      <div class="s-grid">
        <div class="s-grid-colLg11 s-grid-colMd12 s-grid-colSm14">
          <h1 class="c-largeTitle h-mobile crypto-index-header__title s-marginBottom4 color-white">
            Integrate better.
          </h1>
          <figure class="u-hiddenSmUp s-marginBottom2_5 center">
            <img title="Crypto, meet compliance" class="u-imageResponsive" src="/assets/integration/integration-hive.png" alt="Crypto compliance">
          </figure>
          <p class="crypto-index-header__entry s-fontSize25 s-paddingRight1 u-fontWeight300">
            <strong>
Expandable. Robust. Clear.
</strong>
            <br> Sonar integrates seamlessly with a wide variety of third-party solutions, allowing you to control more with less worry.
          </p>
        </div>
        <div class="s-grid--preLg1 s-grid-colMd12 s-grid-colSm10 u-textRight u-hiddenXsOnly">
          <figure>
            <img title="Crypto, meet compliance" class="u-imageResponsive" src="/assets/integration/integration-hive.png" alt="Crypto compliance">
          </figure>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
	name: 'integrationHero'
}
</script>

<style scoped>
.hero {
	background: #000 url(/assets/bg-pattern.svg) no-repeat 50% 0;
}

@media all {
	@media print {
		*,
		*:before,
		*:after {
			color: #000 !important;
		}
		img,
		figure {
			page-break-inside: avoid;
		}
		p {
			orphans: 2;
			widows: 2;
		}
	}
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
	h1 {
		font-family: inherit;
		font-weight: 300;
		color: #222;
		color: inherit;
		margin-top: 0;
		margin-bottom: 0;
	}
	h1 {
		font-size: 37px;
	}
	p {
		margin-bottom: 0;
		margin-top: 0;
	}
	strong {
		font-weight: 600;
	}
	.c-largeTitle {
		font-size: 70px;
		line-height: 0.92;
		font-weight: 500;
		letter-spacing: -0.03em;
		color: #000;
	}
	@media all and (min-width: 0px) and (max-width: 767px) {
		.c-largeTitle {
			font-size: 35px;
			padding-top: 60px;
			padding-bottom: 60px;
			text-align: center;
		}
	}
	.s-paddingRight1 {
		padding-right: 16px;
	}
	.s-marginBottom2_5 {
		margin-bottom: 40px;
	}
	.s-marginBottom4 {
		margin-bottom: 64px;
	}
	.s-paddingTop6 {
		padding-top: 96px;
	}
	.s-paddingBottom8 {
		padding-bottom: 128px;
	}
	.s-paddingRight1 {
		padding-right: 16px;
	}
	.s-marginBottom2_5 {
		margin-bottom: 40px;
	}
	.s-marginBottom4 {
		margin-bottom: 64px;
	}
	.s-paddingTop6 {
		padding-top: 96px;
	}
	.s-paddingBottom8 {
		padding-bottom: 128px;
	}
	.s-container {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		padding-left: 32px;
		padding-right: 32px;
	}
	@media all and (max-width: 767px) {
		.s-container {
			padding-left: 16px;
			padding-right: 16px;
		}
	}
	.s-grid {
		max-width: 100%;
		margin-left: auto;
		margin-right: auto;
		font-size: 0;
	}
	.s-grid:after {
		content: " ";
		display: block;
		clear: both;
	}
	.s-grid {
		margin-left: -16px;
		margin-right: -16px;
		max-width: none;
		max-width: calc(100% + 32px);
	}
	@media all and (min-width: 0px) {
		.s-grid-colSm10,
		.s-grid-colSm14,
		.s-grid-colMd12,
		.s-grid-colLg11 {
			width: 100%;
			display: inline-block;
			padding-left: 16px;
			padding-right: 16px;
			vertical-align: top;
			position: relative;
			font-size: 16px;
		}
	}
	@media all and (min-width: 768px) {
		.s-grid-colSm10,
		.s-grid-colSm14,
		.s-grid-colMd12,
		.s-grid-colLg11 {
			width: 100%;
			display: inline-block;
			padding-left: 16px;
			padding-right: 16px;
			vertical-align: top;
			position: relative;
			font-size: 16px;
		}
	}
	@media all and (min-width: 970px) {
		.s-grid-colSm10,
		.s-grid-colSm14,
		.s-grid-colMd12,
		.s-grid-colLg11 {
			width: 100%;
			display: inline-block;
			padding-left: 16px;
			padding-right: 16px;
			vertical-align: top;
			position: relative;
			font-size: 16px;
		}
	}
	@media all and (min-width: 1170px) {
		.s-grid-colSm10,
		.s-grid-colSm14,
		.s-grid-colMd12,
		.s-grid-colLg11 {
			width: 100%;
			display: inline-block;
			padding-left: 16px;
			padding-right: 16px;
			vertical-align: top;
			position: relative;
			font-size: 16px;
		}
	}
	@media all and (min-width: 768px) {
		.s-grid-colSm10 {
			width: 41.66667%;
		}
		.s-grid-colSm14 {
			width: 58.33333%;
		}
		.s-gridMaxSm22 {
			max-width: 1072.5px;
		}
	}
	@media all and (min-width: 970px) {
		.s-grid-colMd12 {
			width: 50%;
		}
	}
	@media all and (min-width: 1170px) {
		.s-grid-colLg11 {
			width: 45.83333%;
		}
		.s-grid--preLg1 {
			margin-left: 4.16667%;
		}
	}
	.s-fontSize25 {
		font-size: 25px;
	}
	.u-imageResponsive {
		max-width: 100%;
	}
	@media all and (min-width: 0px) and (max-width: 767px) {
		.u-hiddenXsOnly {
			display: none;
		}
	}
	@media all and (min-width: 768px) {
		.u-hiddenSmUp {
			display: none;
		}
	}
	.u-textRight {
		text-align: right;
	}
	.u-textCenter {
		text-align: center;
	}
	.u-fontWeight300 {
		font-weight: 300;
	}
	.u-colorWhite {
		color: #fff;
	}
	@media all and (max-width: 767px) {
		.crypto-index-header__container {
			padding-top: 32px;
			background: black;
			padding-bottom: 56px;
		}
		.crypto-index-header__title {
			margin-bottom: 40px;
		}
		.crypto-index-header__entry {
			padding-left: 0;
			font-size: 18px;
		}
	}
}
</style>