<template>

    <div class=" pb-12 bg-frmgrey">
      <div class="container mx-auto">
        <div class="grid  w-full grid-cols-1 items-center gap-y-6 grid-flow-row gap-x-8 sm:grid-cols-2">
          <div class="justify-center  lg:mt-0 mt-12" :class="index == 0 ? 'row-span-3' : ''  "  v-for="(icon, index) in content.icons" v-bind:key="index">
            <div class="bg-frmwhite rounded-lg px-6 pb-8" >
              
                <div class="absolute flex items-center justify-center -mt-10  rounded-md text-frmwhite">
                  <!-- Heroicon name: outline/globe-alt -->
                <kirbyimage :image="icon.image[0]" v-if="icon.image" CssClass="h-20 w-20" />
                </div>
                <h3 class="pt-14 mt-8 text-lg lg:text-40px font-bold italic text-frmpink ">{{icon.heading}}</h3>
                <span class="text-3xl leading-normal lg:text-60px block font-bold italic text-frmpurple ">{{icon.alternativeheading}}</span>
                <span v-if="icon.content" v-html="$md.render(icon.content)" class="mt-5 leading-snug  text-sm lg:text-19px text-frmpurple grid grid-flow-row gap-4">
                  
                </span>
              </div> 
          </div>

        


        
        </div>
      </div>
      </div>
    
</template>

<script>
import KirbyLink from './kirbylink.vue' 
export default {
    name: "firstrateprice",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }, 
}
</script>