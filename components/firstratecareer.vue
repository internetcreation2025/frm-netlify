<template>

 <main class="lg:relative bg-frmpurple grid grid-cols-12">
    <div class="relative col-span-full lg:col-span-3 xl:col-span-5 hidden lg:block overflow-hidden">
       <kirbyimage class="absolute inset-0 w-full h-full" CssClass="w-full h-full object-cover object-right-top" :image="content.image[0]" v-if="content.image"/> 
    </div>
    <div class="xl:col-span-7 col-span-full lg:px-0 px-6 lg:col-span-9">
      <div class="mx-auto max-w-2xl py-12">
        <h1 class="text-3xl lg:text-60px tracking-tight text-center font-bold">
          <span v-if="content.heading" class="block xl:inline text-frmwhite italic">{{content.heading}}</span>
          <span v-if="content.alternativetext" class="block text-frmpink xl:inline italic">{{content.alternativetext}}</span>
        </h1>
             <p v-if="content.text" class="text-center mt-3 max-w-md mx-auto lg:text-24px font-medium text-frmwhite  md:mt-5 md:max-w-3xl">
          {{content.text}}
        </p>
        <img src="@/assets/images/card.svg" alt="name badge icon" class="mx-auto my-8 h-20" />
        <KirbyLink :ctas="content.links" CssClass="cta red lg:w-min text-center px-8" />
      </div>
    </div> 
        
  </main>

</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "firstratecareer",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>