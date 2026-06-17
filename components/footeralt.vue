<template>
    <div class="container footer-alt py-16">
        <div class="">
            <div class="mx-auto max-w-3xl text-center px-4 sm:px-6 lg:py-18 grid grid-flow-row gap-6 lg:px-8">
                <h2 class="text-lg leading-tight lg:text-40px text-frmpink w-full justify-center text-center">
                    <span class=" font-bold italic">{{content.heading}}</span>
                </h2> 
                <div v-html="content.body" class="text-md leading-normal lg:text-24px font-medium">
                </div>
                <Kirbylink :ctas="content.links" CssClass="cta  lg:w-min w-full -mt-6 text-20px red px-6 skewed" />
            </div>
        </div>
    </div>
</template>

<script>
import Kirbylink from "./kirbylink.vue";

 export default
 {
    name: "footeralt",
    props: {
        content: Object
    },
    components: { Kirbylink }
}

</script>