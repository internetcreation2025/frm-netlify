<template>

<div class="bg-frmgrey font-Rubik">
  <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 class="tracking-tight sm:text-4xl">
      <span v-if="content.heading" class="block pb-8 text-40px font-bold italic text-frmpink">{{content.heading}}</span>
      <span v-if="content.text" class="mt-3 max-w-md mx-auto pb-8 text-24px font-medium text-frmpurple sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">{{content.text}} </span>
    </h2>
    <div class="mt-8 flex justify-center">
      <div class="inline-flex rounded-md shadow">
        <a v-if="content.links" :href="content.links[0].url" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-20px italic font-bold rounded-md text-frmwhite bg-frmpink hover:bg-frmpink">
        {{content.links[0].text}}
        </a>
      </div>
     
    </div>
  </div>
</div>
 
</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "cantfindtheanswer",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>