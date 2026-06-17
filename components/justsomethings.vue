<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white font-Rubik">
  <!-- Header -->
  <div class="relative pb-32 bg-gray-800">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="">
      <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">{{content.heading}}</h1>
      <p v-if="content.text" class="mt-6 max-w-3xl text-xl text-gray-300">{{content.text}}</p>
    </div>
  </div>

  <!-- Overlapping cards -->
  <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
    <h2 class="sr-only" id="contact-heading"></h2>
    <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
      <div v-for="(icon, index) in content.icons" v-bind:key="index" class="flex flex-col bg-white rounded-2xl shadow-xl">
        <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
          <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
            <!-- Heroicon name: outline/phone -->
             <kirbyimage :image="icon.image[0]" v-if="icon.image"/>
          </div>
          <h3 v-if="icon.heading"  class="text-xl font-medium text-gray-900">{{icon.heading}}</h3>
          <p v-if="icon.content" class="mt-4 text-base text-gray-500">{{icon.content}}</p>
        </div>
      </div>

     

    
    </div>
  </section>
</div>

</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "justsomethings",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>