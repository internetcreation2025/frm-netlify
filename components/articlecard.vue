<template>

                <Article class="relative flex flex-col hover:opacity-75 justify-between transition-all shadow-lg ">
                    <Kirbyimage :image="article.thumb" CssClass="w-full h-56 object-cover object-top rounded-t-lg" class="shadow-2xl " />
                    
                    <div class="bg-white rounded-b-lg  h-full grid grid-flow-row gap-4 justify-normal px-6 py-6 w-full ">

                    <h3 class="font-bold text-16px text-frmpurple">
                        {{article.blog_type}}
                    </h3>
                    <h2  class="text-25px font-bold italic">
                        {{article.title}}
                    </h2>
                    <p>
                        {{article.card_description}}
                    </p>

                    <nuxt-link  v-if="article.card_link" :to="article.card_link" class="cta bg-frmpurple w-full text-white italic ">{{article.card_linktext}}</nuxt-link>
                    </div>
                    <NuxtLink v-if="article.card_link" class="absolute w-full h-full top-0 left-0" :to="article.card_link"/>
                </Article>
</template>

<script>
import Kirbyimage from './kirbyimage.vue'

export default
{
    name: "articlecard",
    props:{
        article: Object
    },
    components:{
        Kirbyimage
    }
}

</script>