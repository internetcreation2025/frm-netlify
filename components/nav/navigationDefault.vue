<template>
  <nav class="hidden lg:flex space-x-4 lg:space-x-6 xl:space-x-10"> 
      <NuxtLink  v-for="(menuitem, index) in menu" :key="index"  :to="menuitem.url" v-html="menuitem.text" class="text-base lg:text-lg xl:text-20px font-bold italic"></NuxtLink>
  </nav>
</template>

<script>

export default {
  name: "navigationDefault",
  computed: {
	  menu() {
		  return this.$store.state.global.content.navigationMain;
	  }
  }
};
</script>
