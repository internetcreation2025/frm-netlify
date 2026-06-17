<template>
<div >
  <div class="relative font-Rubik bg-white py-16 sm:py-24 lg:py-32 bg-no-repeat bg-cover max-h-594px" v-bind:style="'background-image:url(' + content.image[0].url + ')'">

    <div class="mx-auto container text-center z-0">
      
      <p v-if="content.text" class="lg:mt-5 lg:w-798px mx-auto text-lg lg:text-24px lg:mb-40 font-medium text-white">
      {{content.text}}
      </p>
    </div> 
  </div>
  <div class="bg-frmgrey"  >

      <div class="mt-20 lg:-mt-40 pb-10 container mx-auto  bg-no-repeat" :style="'background-image:url(' + require('~/assets/images/purpleVbg.svg') + ')'">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div class="flow-root w-full relative self-start bg-gray-50 rounded-lg px-6 pb-8"  v-for="(icon, index) in content.iconsleft" v-bind:key="index">
              <div class="lg:-mt-4">
                <div>
                  <span class="inline-flex items-center justify-center p-3 bg-rose-600 lg:rounded-md lg:shadow-lg">
              
                    <div class="absolute left-0 mt-2 ml-8 flex items-center justify-center rounded-md text-white">
                      <kirbyimage :image="icon.image[0]" v-if="icon.image" CssClass="w-20" />
                    </div>
                  </span>
                </div>
                <h3 class="mt-12 lg:mt-8 text-2xl lg:text-40px font-bold italic text-frmpink tracking-tight">{{icon.heading}}</h3>
                <p class="mt-5 text-sm leading-7 lg:text-19px text-frmpurple markdown" v-html="$md.render(icon.content)"> 
                </p>
                <KirbyLink :ctas="icon.links" CssClass="cta purple w-full italic py-4 font-bold text-20px" />
              </div>
            </div>

        
        </div>
      </div>

  </div>
</div>
</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "thefrmstory",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>