<template>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-frmgrey font-Rubik">
  <div v-for="(icon, index) in content.icons" v-bind:key="index" class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
      <h2 v-if="icon.heading" class="text-center text-31px font-bold text-frmpurple italic sm:text-4xl">
        {{icon.heading}}
      </h2>
        <button type="button" class="text-left w-full flex justify-between items-start text-frmpink" aria-controls="faq-0" aria-expanded="false">
              <span v-if="icon.description" class="text-19px text-purple-900">
                {{icon.description}}
              </span>
              <span class="ml-6 h-7 flex items-center">
                <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                <svg class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
      <dl class="mt-6 space-y-6 divide-y divide-gray-200">
        <div class="pt-6">
          <dt class="text-lg">
            <!-- Expand/collapse question button -->
            <button type="button" class="text-left w-full flex justify-between items-start text-frmpink" aria-controls="faq-0" aria-expanded="false">
              <span v-if="icon.description" class="font-medium text-purple-900">
                {{icon.description}}
              </span>
              <span class="ml-6 h-7 flex items-center">
                <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                <svg class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </dt>
          <dd class="mt-2 pr-12" id="faq-0">
            <p v-if="icon.content" class="text-base text-frmpurple">
              {{icon.content}}
            </p>
             <div class="inline-flex rounded-md shadow">
        <a v-if="icon.links" :href="icon.links[0].url" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-frmwhite bg-frmpink hover:bg-rose-600 italic">
        {{icon.links[0].text}}
        </a>
          </div>
          </dd>
        </div>

        <!-- More questions... -->
      </dl>
    </div>
  </div>
</div>


</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "servicesfaqs",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>