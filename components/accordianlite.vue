<template>
    <div :id="anchor" class="accordian container my-4 group cursor-pointer">
        <div @click="closeAccordians" class="bg-frmgrey_alt rounded-xl shadow-lg  z-50 relative"> 
            <div class="ml-4 lg:ml-10 gap-y-4 lg:gap-y-0 grid grid-cols-12 grid-flow-col items-center ">
                <h2 class="text-lg pointer-events-none text-left leading-tight lg:text-30px my-0 text-frmpurple col-span-11 mr-4 lg:mr-12">
                {{content.heading}} 
                </h2>
                <button class="lg:mr-0 accordian-toggle justify-center origin-center flex transition-all group-hover:rotate-90 my-4 py-2 lg:py-0 lg:my-4 lg:text-65px col-span-1 items-end text-right">
                    <span class="text-frmpink font-Rubik">></span>
                </button>
            </div>
        </div>      
        <div  :class="open()" ref="accordianSlot" class="hide_show bg-white text-frmpurple -mt-4 z-0 pt-4 grid grid-cols-12 rounded-b-lg  shadow-md " >
            <div class="col-span-full mt-6 lg:my-6 mx-4 lg:mx-11">
                <div class="text-sm lg:text-19px grid py-4 grid-flow-row gap-4" v-html="$md.render(content.description)">

                </div>
            </div>
        </div>  
    </div>
</template>

<script>  
import slugify from 'slugify';
export default
{
    name: "accordianlite",
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