<template>

<div class="bg-frmpurple">
  <div class="container grid-flow-row grid gap-4 justify-center mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 class="tracking-tight sm:text-4xl w-full justify-center">
      <span v-if="content.heading" class="block pb-6 text-center text-2xl lg:text-64px font-bold italic text-frmpink">{{content.heading}}</span>
      
    </h2>
      <p class="lg:text-24px font-medium text-white max-w-798px flex justify-center mx-auto">
        {{content.text}}
      </p>
      <!-- 
      <a href="#" class="flex justify-center">
            <span class="sr-only"></span>
            <img class="h-130px w-auto " src="@/assets/images/trustpilot.svg" alt="Rated 5 stars on Trustpilot">
      </a>
      -->
        
      
      <KirbyLink :ctas="content.links" CssClass="cta w-full lg:w-min red px-8 -mt-8" />
     
    </div>
  </div> 

 
</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "tellus",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>