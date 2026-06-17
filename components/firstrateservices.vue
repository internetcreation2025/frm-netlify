<template>



    <main class="bg-frmgrey mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div class="text-center font-Rubik">
        <h1 class="tracking-tight sm:text-5xl md:text-6xl">
          <span v-if="content.heading" class="block xl:inline text-60px font-bold italic text-frmpurple">{{content.heading}}</span>
          <span v-if="content.alternativetext" class="block text-60px font-bold italic text-frmpink xl:inline italic">{{content.alternativetext}}</span>
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
    name: "firstrateservices",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>