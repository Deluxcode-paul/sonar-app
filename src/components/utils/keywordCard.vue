<template>
   <a :href="link">
      <div direction="column" radius="3" color="B100" class="card-content">
         <slot></slot>
         <p class="title"><span :class="headlineStyle">{{ headline }}</span></p>
         <p class="subtitle">{{ subtitle }}</p>
      </div>
   </a>
</template>

<script>
export default {
	name: 'keywordCard',
	props: {
		headline: String,
		headlineStyle: String,
		subtitle: String,
		icon: String,
		link: String
	}
}
</script>

<style scoped>
* {
  box-sizing: inherit;
}
a {
  text-decoration: none;
}
::selection {
  color: rgb(255, 255, 255);
  background: rgba(0, 85, 255, 0.99);
}
.card-light .title {
  color: #000;
  font-size: 18px;
  line-height: 1.7;
  margin-top: 25px;
  margin-bottom: 0px;
  font-weight: 500;
}

.card-dark .title {
  color: #fff;
  font-size: 18px;
  line-height: 1.7;
  margin-top: 25px;
  margin-bottom: 0px;
  font-weight: 500;
}


.subtitle {
  font-weight: 400;
  font-size: 18px;
  line-height: 1.7;
  margin: 0px;
}

svg {
  transform: translate3d(0px, 0px, 0px);
}

.card-light path {
  fill: rgba(0,0,0,0.5);
}

.card-dark path {
  fill: rgba(255,255,255,0.5);
}


.card-light .card-content {
  color: rgb(0, 0, 0);
  border-radius: 12px;
  padding-top: 37px;
  padding-bottom: 30px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 0.25s ease 0s;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.5px 0px,
    rgba(0, 0, 0, 0.03) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 2px 4px;
}

.card-dark .card-content {
  color: rgb(255,255,255);
  border-radius: 12px;
  padding-top: 37px;
  padding-bottom: 30px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 0.25s ease 0s;
  box-shadow: rgba(255, 255, 255, 0) 0px 0.5px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px, rgba(255, 255, 255, 0.03) 0px 2px 4px
}


p {
  line-height: 1.5;
  font-size: 16px !important;
}
.card-light p:nth-of-type(2) {
  color: rgb(170, 170, 170);
  font-size: 14px !important;
}

.card-dark p:nth-of-type(2) {
  color: rgb(255, 255, 255, 0.5);
  font-size: 14px !important;
}


.card-light .card-content:hover {
  transform: translateY(-7px);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 6px,
    rgba(0, 0, 0, 0.05) 0px 10px 20px;
}

.card-dark .card-content:hover {
  transform: translateY(-7px);
  box-shadow: rgba(255,255,255, 0.05) 0px 1px 0px, rgba(255,255,255, 0.05) 0px 2px 6px,
    rgba(255,255,255, 0.05) 0px 10px 20px;
}


.card-content:active {
  opacity: 0.8;
}
</style>