<template>


  <main class="lg:relative bg-frmpurple" >
    <div class="mx-auto container  w-full pt-16 pb-20 text-center lg:py-48 lg:text-left  bg-contain bg-no-repeat"  :style="'background-image:url(' + require('~/assets/images/purpleVbg.svg') + ')'">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block xl:inline text-30px lg:text-60px font-bold italic text-frmwhite">{{content.heading}}</span>
          <span class="block text-frmpink text-30px lg:text-60px font-bold italic xl:inline">{{content.alternativetext}}</span>
        </h1>
             <p class="mt-3 max-w-md mx-auto text-lg lg:text-24px text-frmwhite sm:text-xl md:mt-5 md:max-w-3xl">
          {{content.text}}
        </p>
      </div>
    </div>
      <div v-if="content.image[0]" :style="'background-image:url(' + content.image[0].url + ');'" class="bg-no-repeat bg-cover relative w-full h-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
       
    </div>
  </main>



</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "firstratevalues2",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>