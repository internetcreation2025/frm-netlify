<template>

 <main class="lg:relative bg-frmpurple lg:grid lg:grid-cols-2 frm-terms">
    <div class="relative ">
       <kirbyimage CssClass="absolute top-0 right-0 w-full h-full object-cover object-left-top" :image="content.image[0]" v-if="content.image"/> 
    </div>
    <div class="text-center py-8 px-4 lg:px-20 text-white max-w-3xl">
        <h2 class="text-white text-center w-full self-center justify-center mb-12">{{content.heading}}</h2>
        
        <p class="text-sm lg:text-19px" v-html="content.body"></p>
        <div v-for="(icon, index) in content.icons" v-bind:key="index" class="text-center ">
          <div class="flex-col text-center px-4">
            <h3 class="text-frmpink mt-4 text-lg lg:text-40px font-bold italic">{{index + 1}}</h3>
            <p v-if="icon.heading" class=" max-w-md mx-auto text-sm lg:text-19px text-frmwhite font-Rubik sm:text-xl md:max-w-3xl">
            {{icon.heading}}
            </p> 
            
          </div>
        </div>
            <div class="mt-8 text-sm lg:text-19px" v-if="content.footer" v-html="$md.render(content.footer)"></div>
      </div>
        
  </main>

</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "frmterms",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>