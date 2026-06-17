<template>


  <main class="lg:relative font-Rubik grid lg:grid-cols-2">
    <div class=" bg-frmpink mx-auto flex justify-center lg:justify-end items-center  lg:pr-12 px-12 lg:px-4 w-full py-8 lg:py-20 text-center  lg:text-left">
      <div class=" max-w-xl">
        <h1 class="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block xl:inline text-frmwhite text-3xl lg:text-60px font-bold italic">{{content.leftheading}}</span>
          <span class="block text-frmpurple  text-3xl lg:text-60px font-bold xl:inline italic">{{content.leftaltheading}}</span>
        </h1>
             <p v-if="content.lefttext" class="mt-3 max-w-md mx-auto text-sm lg:text-lg text-frmwhite sm:text-xl md:mt-5 md:max-w-3xl">
          {{content.lefttext}}
        </p> 
        </div>
    </div>
     <div class="bg-frmpurple mx-auto flex justify-center lg:justify-start items-start lg:pl-8 max-w-7xl w-full px-4 lg:px-0 py-16 lg:py-24 text-center lg:text-left">
      <div class="px-4  max-w-xl">
        <h1 class="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block xl:inline text-frmwhite  text-3xl lg:text-60px font-bold italic">{{content.rightheading}}</span>
          <span class="block text-frmpink  text-3xl lg:text-60px font-bold xl:inline italic">{{content.rightaltheading}}</span>
        </h1>
             <p class="mt-3 mx-auto text-sm lg:text-19px text-frmwhite sm:text-xl md:mt-5 md:max-w-3xl">
          {{content.righttext}}
        </p>
      </div>
    </div>
     
  </main>

</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "firstrateskills",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>