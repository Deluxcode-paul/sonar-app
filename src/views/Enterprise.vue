<template>
   <body class="nav-night bg-black color-white">
      <sonarNav/>
      <div class="container-l padding-m-top padding-l-bottom">
         <div class="container padding-l-top">
            <grid columns=12>

		<c span=row class="padding-s-bottom">
		<h3>Enterprise</h3>
		</c>

            </grid>
         </div>

             </div>
      <sonarFooter />
   </body>
</template>

<script>
import sonarNav from '@/components/sonarNav.vue'
import sonarFooter from '@/components/sonarFooter.vue'

export default {
    name: 'Enterprise',
    components: { sonarNav, sonarFooter }
}
</script>

<style scoped>
</style>