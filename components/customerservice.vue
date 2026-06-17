<template>

 <main class="lg:relative bg-frmgrey font-Rubik"> 
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-36 lg:text-left">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 class="tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span v-if="content.heading" class="block xl:inline text-2xl lg:text-60px font-bold text-frmpurple italic">{{content.heading}}</span>
           <span v-if="content.alternativetext" class="block xl:inline text-frmpink text-2xl lg:text-60px font-bold italic">{{content.alternativetext}}</span>
        </h1>
             <p v-if="content.text" class="mt-3 max-w-md mx-auto lg:text-24px font-medium text-frmpurple md:mt-5 md:max-w-3xl">
         {{content.text}}
        </p>
             <p v-if="content.email_intro" class="mt-3 max-w-md mx-auto lg:text-24px font-medium text-frmpurple md:mt-5 md:max-w-3xl">
         {{content.email_intro}}
          <a :href="'mailto:' + content.email" class="block text-frmpink italic underline font-bold lg:text-24px">{{content.email}}</a>
        </p> 
              <p v-if="content.phone" class="mt-3 max-w-md mx-auto lg:text-24px font-medium text-frmpurple md:mt-5 md:max-w-3xl">
            {{content.phone}}
               <a :href="'tel:' + content.phonenumber" class="block italic text-frmpink font-bold lg:text-40px">{{content.phonenumber}}</a>
        </p> 
          <p v-if="content.outro" class="mt-3 max-w-md mx-auto lg:text-24px font-medium text-frmpurple md:mt-5 md:max-w-3xl">
         {{content.outro}}
        </p>
      </div>
       <div class="relative w-full h-64 sm:h-72 md:h-96 hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
       <kirbyimage class="absolute inset-0 w-full h-full object-cover" CssClass="object-cover h-full w-full" :image="content.image[0]" v-if="content.image"/> 
      </div>
    </div>
      
        
  </main>


</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "customerservice",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>