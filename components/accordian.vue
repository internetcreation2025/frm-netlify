<template>
    <div class="accordian px-4 sm:px-12 2xl:px-4 container mt-8 mb-20 group cursor-pointer">
        <div @click="closeAccordians" class="bg-white rounded-md shadow-lg">
            <div v-if="content.image" class="relative">
                <Kirbyimage CssClass=" w-20 h-20 lg:-ml-8 -mt-8 absolute top-0 right-0  lg:left-0" :image="content.image[0]"  />
            </div>
            <div class="ml-4 lg:ml-20 gap-y-4 lg:gap-y-0 grid grid-cols-12 grid-flow-col items-center py-6 lg:py-3 ">
                <h2 class="col-span-full text-left" :class="content.description ? 'lg:col-span-3  mr-12' : 'lg:col-span-11'">
                {{content.heading}} 
                </h2>
                <span class="col-span-full lg:col-span-8 mr-4 lg:mr-24 text-frmpurple text-19px" v-if="content.description">
                    {{content.description}}
                </span>
                <button :class="content.description ? 'row-span-2 text-40px' : 'row-span-1'" class="lg:row-span-1 accordian-toggle justify-center origin-center flex transition-all group-hover:rotate-90 mr-4 lg:mr-0 text-4xl lg:text-65px col-span-1 items-end text-right">
                    <span class="text-frmpink">></span>
                </button>
            </div>
        </div>      
        <div  :class="open()" class="hide_show bg-frmpurple lg:py-6 text-white mx-2 lg:px-12 grid-flow-row py-8 lg:grid-flow-col justify-between rounded-b-lg  shadow-md " >
            <div class="w-full lg:w-3/4 px-4">
                <h3 v-if="content.inner_title" class="text-sm lg:text-25px font-bold italic mb-4">
                    {{content.inner_title}}
                </h3>
                <div class="text-19px grid grid-flow-row gap-4" v-html="$md.render(content.inner_description)">

                </div>
            </div>
            <div class="w-full py-4 lg:py-0 px-4 lg:items-end items-stretch flex flex-col" :class="content.links && content.links.length > 0 ? 'justify-end' : 'justify-between'">
                <kirbylink v-if="content.links && content.links.length > 0" :ctas="content.links" CssClass="cta bg-frmpink w-full lg:w-64" />

                <div v-html="$md.render(content.inner_rightcol)" class="text-19px self-start font-bold" v-if="content.inner_rightcol"></div>

                <NuxtLink :to="{ path: '/careers/apply-now', 'query': { role: content.heading} }" v-if="content.is_vacancy == 'true'" class="cta red w-full mt-8 lg:w-auto self-start">Upload my CV now</NuxtLink>
            </div>
        </div>  
    </div>
</template>

<script>
import Kirbyimage from './kirbyimage.vue'
import Kirbylink from './kirbylink.vue'

export default
{
    components: { Kirbylink, Kirbyimage },
    name: "accordian",
    props:{
        content: Object,
        toggle: Boolean,
    },
    data() {
        return {
            toggle_in: this.toggle
        }
    },
    mounted(){

        if (this.content.is_open){
            this.toggle_in = true;
            this.open();
        }
    },
    methods:{
        
        closeAccordians(){
            this.$emit('closeAccordians', this);
        },
        open(){
            if (this.toggle_in || this.$route.hash == ('#' + this.anchor)){                 
                return "grid";
            }else{
                return "hidden";
            }
            
        }
    }
}

</script>