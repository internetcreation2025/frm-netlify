<template>

<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<div class="bg-frmpink py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 font-Rubik">
  <div v-for="(icon, index) in content.icons" v-bind:key="index" class="relative max-w-xl mx-auto pt-12 pb-12 px-6 rounded bg-frmwhite">
    
    <div class="text-center">
      <h2 class="text-40px font-bold tracking-tight text-frmpink italic sm:text-4xl">{{content.heading}}</h2>
      <p class="mt-4 text-24px font-medium leading-6 text-frmpurple">{{content.text}}</p>
    </div>
    <div class="mt-12">
      <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label for="first-name" class="block text-16px font-bold text-frmpurple">{{icon.firstname}}</label>
          <div class="mt-1">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm border-solid border-2 border-frmpink focus:frmpurple focus:border-frmpurple rounded-md">
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-16px font-bold text-frmpurple">{{icon.lastname}}</label>
          <div class="mt-1">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm border-solid border-2 border-frmpink focus:frmpurple focus:border-frmpurple rounded-md">
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="company" class="block text-16px font-bold text-frmpurple">{{icon.email}}</label>
          <div class="mt-1">
            <input type="text" name="company" id="company" autocomplete="organization" class="py-3 px-4 block w-full shadow-sm border-solid border-2 border-frmpink focus:frmpurple focus:border-frmpurple rounded-md">
          </div>
        </div>
          <div class="sm:col-span-2">
          <label for="email" class="block text-16px font-bold text-frmpurple">{{icon.phone}}</label>
          <div class="mt-1">
            <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm border-solid border-2 border-frmpink focus:frmpurple focus:border-frmpurple rounded-md">
          </div>
        </div>
         <div class="sm:col-span-2">
          <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-20px font-bold text-frmwhite bg-frmpink hover:bg-frmpurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{{icon.links[0].text}}</button>
        </div>
        <div class="sm:col-span-2 bg-frmgrey">
          <div class="flex items-start">
            
            <div class="ml-3">
              <p class="text-base text-gray-500">
                By proceeding, you agree to our
                <a href="#" class="font-medium text-gray-700 underline">Data Policy</a>
                and
                <a href="#" class="font-medium text-gray-700 underline">Cookies Policy</a>.
              </p>
            </div>
          </div>
        </div>
       
      </form>
    </div>
  </div>
</div>

 
</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "letuscontactyou",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>