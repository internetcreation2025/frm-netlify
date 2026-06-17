<template>
  <div>
    <div v-bind:class="svgclass" v-if="icon == 'Commodities'" v-html="rawCommoditiesIcon" />
    <div v-bind:class="svgclass" v-if="icon == 'Carbon'" v-html="rawCarbonIcon" />
    <div v-bind:class="svgclass" v-if="icon == 'Steel'" v-html="rawSteelIcon" />
    <div v-bind:class="svgclass" v-if="icon == 'Mining'" v-html="rawMiningIcon" />
    <div v-bind:class="svgclass" v-if="icon == 'Shipping'" v-html="rawShippingIcon" />
    <div v-bind:class="svgclass" v-if="icon == 'Renewable'" v-html="rawRenewableIcon" />
    <div v-bind:class="svgclass" v-if="icon == 'RenewableProjects'" v-html="rawRenewableProject" />
   <div v-bind:class="svgclass" v-if="icon == 'Refined'" v-html="rawRefinedIcon" />
    
    <div v-if="icon == 'arrow'" v-html="rawArrowIcon" />
  </div>
</template>

<script>
 

  export default {
    props:['icon', 'svgclass'],
    data() {
    
      
      return {  };


    },
  };
</script>