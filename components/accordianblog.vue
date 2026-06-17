<template>
    <div :id="anchor" class="accordian container max-w-798px px-0 my-2 group cursor-pointer">
        <div @click="toggle_in = !toggle_in" class="bg-frmgrey lg:rounded-xl shadow-lg  z-50 relative"> 
            <div class="ml-4 lg:ml-10 gap-y-4 lg:gap-y-0 grid grid-cols-12 grid-flow-col items-center ">
                <h2 class="lg:text-30px my-0 text-frmpurple col-span-11 mr-12">
                {{content.heading}} 
                </h2>
                <button class="lg:mr-0 mr-4 accordian-toggle justify-center origin-center flex transition-all group-hover:rotate-90 text-30px lg:text-65px col-span-1 items-end text-right">
                    <span class="text-frmpink font-Rubik">></span>
                </button>
            </div>
        </div>      
        <div  :class="open()" class="text-white bg-frmpurple mx-2 -mt-4 z-0 pt-4 grid grid-cols-12 rounded-b-lg  shadow-md " >
            <div class="col-span-full mt-6 lg:my-6 mx-6 ">

                <Kirbyimage :image="content.image[0]" v-if="content.image.length > 0" CssClass="w-full" />
                <div class="text-19px grid py-4 grid-flow-row gap-4" v-html="$md.render(content.description)">

                </div>
            </div>
        </div>  
    </div>
</template>


<script>  
import Kirbyimage from './kirbyimage.vue'
import slugify from 'slugify';
export default
{
    name: "accordianblog",
    components:
    {
        Kirbyimage
    },
    props:{
        content: Object,
        toggle: Boolean,
    },
    data() {
        return {
            toggle_in: this.toggle,
            anchor: slugify(this.content.heading).toLowerCase()
        }
    },
    mounted(){
        if (this.content.is_open){
            this.toggle_in = true;
            this.open();
        }
    },
    methods:{
        slugify,
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