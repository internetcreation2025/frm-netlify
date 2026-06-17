<template>

 <main class="lg:relative bg-frmpurple grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
 
  <div class="flex justify-center items-center">
      <kirbyimage class="hidden absolute top-0 w-50vw lg:block inset-y-0 left-0 h-full object-cover" CssClass=" h-full w-full object-cover" :image="content.image[0]" v-if="content.image"/> 
 
    
      <div class="about-box">
        <img src="@/assets/images/rosette.svg" alt="rosette icon" class="w-14 lg:w-130px absolute right-4 top-5 lg:-right-8 lg:-top-5" style="filter: drop-shadow( 0px 4px 2px rgba(0, 0, 0, .3));" />
        <h2 class="pr-8 mt-0 text-left">{{content.heading_left}}</h2>
        <div v-if="content.body_left" v-html="$md.render(content.body_left)" ></div>


        <KirbyLink v-if="content" :ctas="content.left_links" CssClass="cta red large w-full" /> 
      </div>

  </div>
  <div class="w-full flex items-center justify-center">
    <div class="h-full px-4 lg:px-0 grid max-w-md justify-center items-center">
        <div class="grid gap-4 xl:gap-12 grid-col mx-auto py-12">
          <h1 class="text-4xl tracking-tight text-gray-900 font-Rubik sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span v-if="content.heading" class="block xl:inline text-31px text-white font-bold font-Rubik italic">{{content.heading}}</span>
          </h1>
          <div class="mx-auto w-full text-center lg:text-left border-frmpink border-t">
            <div  class="flex py-4 border-frmpink border-b items-center justify-start flex-row" v-for="(icon, index) in content.icons" v-bind:key="index">
              <div class="flex items-start justify-start">
      
                    <img class="h-8 w-auto sm:h-10" src="@/assets/images/whiteticksml.svg" alt="whitetick">
      
              </div>
              <div class="flex-col ml-4">
                    <p v-if="icon.text" class="max-w-md text-left lg:text-center mx-auto text-25px font-bold italic text-white font-Rubik sm:text-xl md:max-w-3xl">
                {{icon.text}}
                </p>
              
              </div>
            </div>
          </div>        
          <section class="bg-frmpurple overflow-hidden">
      <div v-for="(testimonial, index) in content.testimonial" v-bind:key="index" class="relative max-w-7xl mt-4 lg:mt-0 mx-auto">
      
        <div class="relative justify-start lg:flex lg:items-start">
          <div class="hidden lg:block lg:flex-shrink-0">
            <kirbyimage class=" rounded-full " CssClass="rounded-full" :image="testimonial.image[0]" v-if="testimonial.image"/> 
          </div>

          <div class="relative lg:ml-4">
          
            <blockquote class="relative">
              <div class="text-2xl leading-9 text-25px text-frmwhite">
                <p class="leading-8 lg:leading-6">
                  {{testimonial.content}}
                </p>
              </div>
              <footer class="mt-8">
                <div class="flex">
                  <div class="flex-shrink-0 lg:hidden">
                    <kirbyimage v-if="testimonial.image[0]" CssClass="h-12 w-12 rounded-full" :image="testimonial.image && testimonial.image[0]" />
                   </div>
                  <div class="ml-4 lg:ml-0">
                    <div class="text-17px font-bold text-frmwhite">{{testimonial.user}}</div>
                    <div class="text-17px text-frmwhite">{{testimonial.userinfo}}</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
          </section>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "somucheasier",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>