<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="py-4 pt-16 lg:py-16 bg-frmwhite">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 v-if="content.heading" class="text-center w-full self-center justify-center px-12 lg:px-0 text-frmpink font-medium text-20px tracking-wide uppercase">{{content.heading}}</h2>
      <p v-if="content.alternativetext" class="text-center   mt-10 text-4xl lg:text-64px leading-tight font-bold text-frmpurple italic ">{{content.alternativetext}}
      </p>
      <p v-if="content.text" v-html="content.text" class="mt-10 text-lg "></p>
  
    </div>

    <div class="mt-10">
      <dl class="grid items-baseline pb-8 space-y-10 md:space-y-8 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div v-for="(icon, index) in content.icons" v-bind:key="index">
          <dt class="relative flex flex-row">
            <div class="flex items-center justify-center mr-8 rounded-md text-white">
              <!-- Heroicon name: outline/globe-alt -->
             <kirbyimage :image="icon.image[0]" v-if="icon.image" CssClass="h-36" class="h-24 w-24 flex items-center justify-center" />
            </div>
            <p v-if="icon.heading" class="text-lg lg:text-25px pr-0 lg:pr-32 leading-9 font-bold italic text-frmpink  flex items-center">{{icon.heading}}</p>
          </dt>
          <dd v-if="icon.content" class="mt-2 text-base text-gray-500">{{icon.content}}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
  
</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "featurecenteredgrid",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>