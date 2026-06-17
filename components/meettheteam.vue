<template>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white font-Rubik">
  <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-8 sm:space-y-12">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl lg:text-60px text-frmpurple italic font-bold tracking-tight sm:text-4xl text-center justify-center">{{content.heading}}</h2>
        <p class="lg:text-24px mt-9 font-medium text-frmpurple">{{content.text}}</p>
      </div>
      <ul role="list" class="mx-auto grid grid-flow-row grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-5 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12">
        <li  v-for="(icon, index) in content.icons" v-bind:key="index" class="space-y-4">
      
            <kirbyimage CssClass="mx-auto h-32 w-40 rounded-xl object-cover" :image="icon.image[0]" v-if="icon.image"/>   
            
              <div class="text-14px text-frmpink lg:text-sm">
                <h3 class="font-bold italic">{{icon.name}}</h3>
                <p class="text-frmpink text-14px">{{icon.jobtitle}}</p>
              </div> 
        </li>

        <!-- More people... -->
      </ul>
    </div>
  </div>
</div>


</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "meettheteam",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>