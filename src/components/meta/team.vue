<template>
<div class="team">
   <div class="head">
      <h2>Team</h2>
      <p>We’re a fully remote team who lives in London, Istanbul, Milano. Wanna join our team? <a href="/contact" class="">Contact Us.</a></p>
   </div>
   <div class="row team-member">
      <div class="col">
         <a href="https://www.linkedin.com/in/oguzcankose/" target="_blank">
            <div class="img"><img src="/_nuxt/img/e13e0f1.jpg" alt=""></div>
            <div class="desc">
               <h4>Oguzcan Köse</h4>
               <p>Product Designer</p>
            </div>
         </a>
      </div>
      <div class="col">
         <a href="https://www.linkedin.com/in/mertcan-yücel-461a7b3b/" target="_blank">
            <div class="img"><img src="/_nuxt/img/6dddc05.jpg" alt=""></div>
            <div class="desc">
               <h4>Mertcan Yücel</h4>
               <p>Product Manager</p>
            </div>
         </a>
      </div>
      <div class="col">
         <a href="https://www.linkedin.com/in/duruldoktoroglu" target="_blank">
            <div class="img"><img src="/_nuxt/img/e23a043.jpg" alt=""></div>
            <div class="desc">
               <h4>Durul Doktoroglu</h4>
               <p>Technical Lead</p>
            </div>
         </a>
      </div>
      <div class="col">
         <a href="https://www.linkedin.com/in/omerozturkh" target="_blank">
            <div class="img"><img src="/_nuxt/img/1534e0c.jpg" alt=""></div>
            <div class="desc">
               <h4>Ömer Öztürk</h4>
               <p>Full Stack Developer</p>
            </div>
         </a>
      </div>
      <div class="col">
         <a href="https://www.linkedin.com/in/bada55-umurkose/" target="_blank">
            <div class="img"><img src="/_nuxt/img/042c491.jpg" alt=""></div>
            <div class="desc">
               <h4>Umur Köse</h4>
               <p>Front-end Developer</p>
            </div>
         </a>
      </div>
   </div>
</div>
</template>

<script>
export default {
	name: 'teamGrid'
}
</script>

<style scoped>
*,:after,:before{box-sizing:border-box;}
h2,h4{margin-top:0;margin-bottom:.5rem;}
p{margin-top:0;margin-bottom:1rem;}
a{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects;}
a:hover{color:#0056b3;text-decoration:underline;}
img{border-style:none;}
img{vertical-align:middle;}
h2,h4{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit;}
h2{font-size:2rem;}
h4{font-size:1.5rem;}
.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;}
.col{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;}
.col{flex-basis:0;flex-grow:1;max-width:100%;}
@media print{
*,:after,:before{text-shadow:none!important;box-shadow:none!important;}
a:not(.btn){text-decoration:underline;}
img{page-break-inside:avoid;}
h2,p{orphans:3;widows:3;}
h2{page-break-after:avoid;}
}
a:active,a:focus,a:hover{text-decoration:none;color:#6b7ddf;}
p{margin-bottom:0;}
a{text-decoration:none;color:inherit;}
:focus{outline:0;}
.about .team{padding:105px 0 158px;}
.about .team .head{margin-bottom:24px;}
.about .team .head h2{font-size:24px;font-weight:600;}
.about .team .head p{font-size:18px;}
.about .team .head p a{text-decoration:underline;color:#6b7ddf;}
.about .team .img{margin-bottom:16px;}
.about .team .img img{width:100%;max-width:165px;}
.about .team .desc h4{font-size:18px;font-weight:600;margin-bottom:2px;}
.about .team .desc p{color:#9397a5;}
@media (max-width:768px){
.team{padding:32px 0!important;}
.team-member .col{flex-basis:50%;margin-bottom:24px;}
}
</style>