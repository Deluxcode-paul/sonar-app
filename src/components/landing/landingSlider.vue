<template>
<section class="section-padding big">
  <div class="hero">
    <div class="center">
      <div class="flex-center">
        <div class="full">
		<img src="//images.ctfassets.net/kbkgmx9upatd/5WduLpi7nyKqUyU00UyKm0/09a392df76c98cd39fae545cf6c7e3c4/Use-Cases.png">
	</div>
      </div>
      <ul class="flex-inline">
        <li class="active">Use cases</li>
        <li class="inactive">Technologies</li>
        <li class="inactive">Deployment</li>
        <li class="inactive">Customization</li>
        <li class="inactive">Result</li>
      </ul>
      <p class="description">With our software's unique feature, it'll help you in such a big way that we can't even lorem ipsum! Isn't that neat AF?</p>
    </div>
  </div>
</section>
</template>

<script>
export default {
	name: 'landingSlider'
}
</script>

<style scoped>

@import url('https://rsms.me/inter/inter.css');
html { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}

section {
  display: block;
}
img {
  border: 0;
}
p {
  margin: 0 0 14px;
}
ul {
  margin-top: 0;
  margin-bottom: 14px;
}
*,
:after,
:before {
  box-sizing: border-box;
}
img {
  vertical-align: middle;
}

.full {
  position: relative;
  height: 100%;
}
.full img {
  margin-top: -150px;
  height: 100%;
  max-width: 100%;
}
.active {
  position: relative;
  padding: 1.2rem 2.4rem;
  border-bottom: 0.2rem solid rgb(255, 255, 255);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 1.5;
  text-transform: capitalize;
  color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  transition: all 0.25s ease 0s;
}
.active:hover {
  cursor: pointer;
}
.inactive {
  position: relative;
  padding: 1.2rem 2.4rem;
  border-bottom: 0.2rem solid rgba(255, 255, 255, 0.2);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 1.5;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-left-color: rgba(255, 255, 255, 0.2);
  transition: all 0.25s ease 0s;
}
.inactive:hover {
  cursor: pointer;
}
.flex-inline {
  display: inline-flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px;
  margin: 4rem auto 2rem;
  list-style: none;
}
@media screen and (min-width: 900px) {
  .flex-inline {
    margin: 5rem auto 2.8rem;
  }
}
.big {

  overflow: hidden;
  background-color: rgb(0, 0, 0);
}
@media screen and (min-width: 900px) {
  .big {
    padding: 10rem 0px;
  }
}
.section-padding {
  padding: 0px;
}
@media screen and (min-width: 900px) {
  .section-padding {
    padding: 8rem 0px 10rem;
  }
}
.hero {
  position: relative;
  max-width: 100%;
  padding: 65px;
  margin: 0px auto;
  background-color: rgb(13, 106, 255);
  z-index: 30;
}
.center {
  position: relative;
  text-align: center;
}
.description {
  margin: 0px auto;
  max-width: 80rem;
  font-size: 1rem;
  letter-spacing: 0px;
  text-align: center;
  line-height: 1.8;
  color: rgb(255, 255, 255);
}
@media screen and (min-width: 900px) {
  .description {
    max-width: 65rem;
  }
}
.flex-center {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 28vw;
  max-height: 39rem;
}
</style>