<template>


    <main class="mt-16 mx-auto max-w-7xl px-4 bg-frmgrey sm:mt-24 font-Rubik">
      <div class="text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-purple-900 sm:text-5xl md:text-6xl">
          <span v-if="content.heading" class="block xl:inline text-60px font-bold italic">{{content.heading}}</span>
          <span v-if="content.alternativetext" class="block text-frmpink text-60px font-bold xl:inline italic">{{content.alternativetext}}</span>
        </h1>
        <p v-if="content.text" class="mt-3 max-w-md mx-auto text-24px font-medium text-frmpurple sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {{content.text}}
        </p>

          <div class="inline-flex rounded-md shadow">
        <a v-if="content.links" :href="content.links[0].url" class="inline-flex items-center justify-center px-5 py-3 border border-frmpink text-16px font-bold rounded-md text-frmpurple bg-frmgrey hover:bg-white">
        {{content.links[0].text}}
        </a>
         <a v-if="content.links" :href="content.links[1].url" class="inline-flex items-center justify-center px-5 py-3 border border-frmpink text-16px font-bold rounded-md text-frmpurple bg-frmgrey hover:bg-white">
        {{content.links[1].text}}
        </a>
          </div>

                 <div class="pt-6">
          <div class="flow-root bg-frmwhite rounded-lg px-6 pb-8">
            <div v-for="(icon, index) in content.icons" v-bind:key="index" class="-mt-6">
              <div>
                <span class="inline-flex items-center justify-center p-3 bg-frmpink rounded-md shadow-lg">
                  <!-- Heroicon name: outline/lock-closed -->
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
              </div>
              <p class="mt-5 text-16px font-bold text-frmpurple">{{icon.articletype}}</p>
              <h3 class="mt-8 text-25px font-bold text-frmpink tracking-tight">{{icon.heading}}</h3>
              <p class="mt-5 text-xl lg:text-19px text-frmpurple">
                {{icon.content}}
              </p>
             <div class="inline-flex rounded-md shadow">
        <a v-if="icon.links &&icon.links[0]" :href="icon.links[0].url" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-20px font-bold rounded-md text-frmwhite bg-frmpurple hover:bg-frmpink">
        {{icon.links[0].text}}
        </a>
      </div>
            </div>
          </div>
        </div>
       
      </div>
    
    </main>

</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "firstrateknowledge",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>