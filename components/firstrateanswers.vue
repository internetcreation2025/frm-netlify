<template>


    <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 font-Rubik">
      <div class="text-center bg-frmgrey">
        <h1 class="text-60px tracking-tight font-bold italic  sm:text-5xl md:text-6xl">
          <span v-if="content.heading" class="block xl:inline text-frmpurple">{{content.heading}}</span>
          <span v-if="content.alternativetext" class="block xl:inline text-frmpink" >{{content.alternativetext}}</span>
        </h1>
        <p v-if="content.text" class="mt-3 max-w-md mx-auto text-24px font-medium text-frmpurple sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {{content.text}}
        </p>
      </div>
        
    </main>

</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "firstrateanswers",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>