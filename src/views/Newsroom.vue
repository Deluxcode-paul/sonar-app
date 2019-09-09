<template>
   <body class="nav-light">
      <sonarNav/>
      <div class="container-l padding-m-top padding-l-bottom">
         <div class="container padding-l-top">
            <grid columns=12>

		<c span=row class="padding-s-bottom">
		<h3>Newsroom</h3>
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
    name: 'Newsroom',
    components: { sonarNav, sonarFooter }
}
</script>

<style scoped>
</style>