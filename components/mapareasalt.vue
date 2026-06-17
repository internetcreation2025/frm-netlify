<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-rose-600 font-Rubik">
  <div class="w-full h-594px lg:h-auto lg:absolute inset-0"> 

      <div ref="gmap" class="w-full h-full">

      </div>
  </div> 
 
   <div class="lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
      <div class="flex flex-col lg:w-383px bg-frmwhite rounded-2xl ">
        <div  class="p-6 lg:rounded-md lg:shadow-lg bg-white  mx-auto lg:my-24 lg:ml-24 lg:w-383px  flex flex-col items-center relative">
          <h3 class="items-center text-24px leading-tight font-bold italic text-frmpink">{{content.heading}}</h3>
          <div class=" grid grid-flow-row gap-4 mt-4 markdown w-full" v-if="content.content" v-html="$md.render(content.content)">
          </div> 

        </div>
        
      </div>

     

    
    </div>
 
</div>

</template>

<script> 
import KirbyLink from './kirbylink.vue'
export default {
    name: "mapareasalt",
    props:{
      content: Object
    },
    mounted(){
        this.onScriptLoaded();
    },
    methods:  {

        onScriptLoaded: function() {  
             
                  
          const $map = this.$refs.gmap;
          const gmap = new google.maps.Map($map, 
          {                    
            center: { lat: 55.016718, lng: -1.447621},
            zoom: 14,
            disableDefaultUI: true,
          });  

          const img = require('@/assets/images/marker.svg');
          
          let marker = new google.maps.Marker({
            position: { lat: 55.016718, lng: -1.447621 },
            $map,
            title: "FRM Offices",
            icon: img
          });

          marker.setMap(gmap);


        
        }
    },
    components:{
      KirbyLink
    },
    data() {
      return {   
      }
    }
}
</script>