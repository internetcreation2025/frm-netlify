<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white font-Rubik shadow-lg">
  <div class="mx-auto text-center py-20 px-4 sm:px-6 lg:py-18 lg:px-8">
    <h2 class="tracking-tight text-frmpink w-full justify-center text-center sm:text-4xl">
      <span v-if="content.heading" class="text-2xl  lg:text-64px font-bold italic">{{content.heading}}</span>
      
    </h2>
    <div class="mt-12 lg:flex justify-center">
      <div class="">


        <KirbyLink :ctas="content.links" CssClass="cta purple px-12"></KirbyLink>

      </div>
     
    </div>
  </div>
</div>

</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "getthatjobsorted",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>