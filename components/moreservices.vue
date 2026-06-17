<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative py-12 bg-white font-Rubik"  >
  
  <div class=" bg-cover bg-no-repeat bg-blend-darken w-full absolute top-0 h-86 hidden lg:block" :style="'background-image:url(' + (content.image ? content.image[0].url : '') + ')'">

  </div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div class="lg:text-center lg:mb-16 pb-18">
      <h2 class="heading-xl">{{content.heading}}</h2> 
  
    </div> 
      <dl class="lg:-mt-8 space-y-10 grid-flow-row md:space-y-8 grid grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
        <div v-for="(icon, index) in content.icons" v-bind:key="index" class="relative self-baseline">
          <dt class="grid grid-flow-row gap-4 text-center justify-center items-center ">
      
              <!-- Heroicon name: outline/globe-alt -->
             <kirbyimage :image="icon.image[0]" class="justify-center flex" CssClass=" mb-4 lg:w-36 w-20 h-20 lg:h-36" v-if="icon.image"/>
         
            <p v-if="icon.heading" class="lg:text-40px leading-6 font-bold italic text-frmpurple">{{icon.heading}}</p>
          </dt>
          <dd v-if="icon.content" class="text-base text-gray-500">{{icon.content}}
          </dd>
          
        </div>
      </dl>
       <div class="mt-8 flex justify-center">
      <div class="inline-flex">
        <a v-if="content.links" :href="content.links[0].url" class="mt-8 cta purple px-16">
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
    name: "moreservices",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>