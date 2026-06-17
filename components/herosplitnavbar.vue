<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-frmpink  font-Rubik">

  <main class="lg:relative bg-frmpink bg-no-repeat  sm:mb-0">
    <div class="mx-auto max-w-7xl w-full pt-10 pb-10 text-center lg:py-24 lg:text-left bg-contain bg-no-repeat"  :style="'background-image:url(' + require('~/assets/images/PinkVbg.svg') + ')'">
      <div class="grid grid-flow-row gap-12 lg:gap-4 px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 class="text-4xl tracking-tight font-extrabold text-frmwhite sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block xl:inline text-60px font-bold italic">{{content.heading}}</span>
          <span class="block text-60px lg:mt-0 mt-6 text-frmpurple xl:inline font-bold italic">{{content.alternativetext}}</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-lg lg:text-24px font-medium text-white  md:mt-5 md:max-w-3xl">
          {{content.text}}
        </p>
        <div class=" grid grid-flow-row lg:grid-flow-col justify-center lg:justify-start items-center gap-4">
          <div class="lg:rounded-md lg:shadow">

            
            <KirbyLink v-if="content.links" :ctas="content.links" class="w-full" CssClass="cta purple px-9 italic py-3"  />
            
          </div> 

          <a href="https://www.feefo.com/reviews/first-rate-maintenance-ltd" target="_blank" class="lg:mt-[30px] flex items-center justify-center lg:inline-block"><img alt="Feefo logo" border="0" src="https://api.feefo.com/api/logo?merchantidentifier=first-rate-maintenance-ltd&1" title="See what our customers say about us"/></a>
        
        </div>
        <!--
          <a href="#" class="flex justify-center lg:justify-start">
            <span class="sr-only"></span>
            <img class="h-32 w-auto -m-4" src="@/assets/images/trustpilot.svg" alt="trustpilot">
          </a>-->
      </div>
    </div>
    <div>
    <div v-if="content.downloads[0]" :style="'background-image:url(' + content.downloads[0].url + ');'" class="bg-no-repeat bg-cover relative w-full h-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <div class="lg:absolute flex justify-center top-0 left-0 w-full h-full items-center">
        <section class="max-w-7xl lg:mt-0 md:-mt-20 mx-auto relative z-10 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
    <h2 class="sr-only" id="contact-heading"></h2>

    <div class="lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8  lg:mt-0 ">
      <div class="flex flex-col lg:w-383px bg-frmwhite lg:rounded-2xl shadow-xl ">
        <div v-for="(icon, index) in content.icons" v-bind:key="index" class="flex flex-col items-center  relative pt-5 px-26px pb-5 md:px-8">
          <h3 v-if="icon.heading"  class="flex items-center text-center  text-20px lg:text-24px font-bold italic text-frmpink">{{icon.heading}}</h3>
          <p v-if="icon.content" class="mt-4 text-center text-18px text-frmpurple">{{icon.content}}</p>
          
            <KirbyLink v-if="icon.links && icon.links[0]" :ctas="icon.links" class="w-full" CssClass="cta text-center purple w-full italic"  />
            
        </div>
        
      </div>

     

    
    </div>
  </section>
      </div>
    </div>

        </div>
  </main>
</div>


</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "herosplitnavbar",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>