<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-rose-600 font-Rubik">
  <div class="relative w-full lg:h-auto h-370px lg:absolute inset-0"> 

      <div ref="gmap" class="w-full h-full">

      </div>
  </div> 
 
   <div class="lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
      <div class="flex flex-col lg:w-383px bg-frmwhite rounded-2xl ">
        <div v-for="(icon, index) in content.icons" v-bind:key="index" class="p-6 lg:rounded-md lg:shadow-lg bg-white  lg:my-24 lg:ml-24 lg:w-383px  flex flex-col items-center relative">
          <h3 v-if="icon.heading"  class="flex items-center text-24px font-bold italic text-frmpink">{{icon.heading}}</h3>
          <p v-if="icon.content" class="mt-4 pb-5 text-center text-18px text-frmpurple">{{icon.content}}</p>
          <div class="flex justify-center w-full rounded-md">
        <a v-if="icon.links" :href="icon.links[0].url" class="cta w-full bg-frmpurple text-white hover:bg-purple-900">
        {{icon.links[0].text}}
        </a>
      </div>
        </div>
        
      </div>

     

    
    </div>
 
</div>

</template>

<script> 
import KirbyLink from './kirbylink.vue'
export default { 
    name: "mapareas",
    props:{
      content: Object
    },
    mounted(){
      this.onScriptLoaded();
    },
    methods:  {

        onScriptLoaded: function() { 

          /*
            const boundaryCoords = [ 
              ,
              { lat: 55.05493105100873, lng: -1.6756036640341705 },
              { lat: 55.054599148672835, lng: -1.634231267008974 },
              { lat: 55.05068249330032, lng: -1.572462395305359 },
              { lat: 55.045221770833095, lng: -1.5419256272581736 },
              { lat: 55.029994289395425, lng: -1.5186562870681077 },
              { lat: 55.010860322385405, lng: -1.4961738084810323 },
              { lat: 54.99308157604696, lng: -1.5070219801336666 },
              { lat: 54.97702497852725, lng: -1.5457551020553792 },
              { lat: 54.972169506373454, lng: -1.5831872704734522 },
              { lat: 54.963321725892925, lng: -1.6154044311821483 },
              { lat: 54.95892825572861, lng: -1.6635010448950045 },
              { lat: 54.95813975444826, lng: -1.7132828454241098 },
              { lat: 54.964447331445804, lng: -1.7246124965790095 },
              { lat: 54.97883278550485, lng: -1.7101929405636827 },   
              { lat: 55.006013130697056, lng: -1.6986916285294544 },   
              { lat: 55.042520030801995, lng: -1.7469284762101749 },   
              { lat: 55.05132010762826, lng: -1.745237303875796 },
                          
            ];*/

            
          const $map = this.$refs.gmap;

          let $center = { lat: 55.00137789007776, lng: -1.732625109701459 };

          if(matchMedia("(max-width: 700px)")){
            $center = { lat: 55.02, lng: -1.6000 };
          }

/*
          const boundary = new google.maps.Polygon({
            paths: boundaryCoords,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 0,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
          });*/ 

          /*
          const boundary = new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            $map,
            center: { lat: 55.01716254936806, lng: -1.590154890309714 },
            radius: 12000,
          });
          */
                  
          const gmap = new google.maps.Map($map, 
          {                    
            center: $center,  
            zoom: 10.5,
            disableDefaultUI: true,
          });

          
        // boundary.setMap(gmap);
 
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