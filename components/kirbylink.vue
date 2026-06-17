<template>

<div class="cta-container" v-if="ctas">
    <div v-for="(cta, index) in ctas" class="mt-5 flex justify-center md:mt-8" :key="index"> 
            <NuxtLink  :class="CssClass" class="w-full rounded-md shadow lg:flex items-center justify-center border border-transparent text-sm lg:text-base font-bold text-white " v-if="cta.openinnew == 'false'" :to="link(cta)">
                {{cta.text}}
            </NuxtLink>

        
            <a target="_blank" v-if="cta.openinnew == 'true' && link(cta) != ''" :class="CssClass" class="w-full shadow-full flex items-center justify-center border border-transparent text-sm lg:text-base font-bold rounded-md text-white" :href="link(cta)">
                {{cta.text}}
            </a> 
    </div>
</div>
</template>

<script>

  export default {
    props: { ctas: Array, CssClass: String },
    methods:
        {
            link: function(cta)
            {
                if (!cta){
                    return;
                }
                if (cta.internal.value == "true" && cta.scroll_to_id)
                {
                    return '#' + cta.scroll_to_id; 
                }
                return cta.internal == "true" && cta.linkpage.length != 0 ? '/' + cta.linkpage[0] : cta.url;
            }
        }
  };
</script>