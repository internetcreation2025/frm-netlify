<template>  

	<nav class="pt-32px fixed top-0 left-0 z-50 w-full h-screen overflow-auto mobilenav text-white-default-500 bg-black-default-500">
		 
		 <div class="grid grid-cols-8 grid-flow-col items-center justify-between heading mb-64px text-white-default-500">
		 	 
			<NuxtLink to="/" v-on:click.native="setOffscreenState"  class="col-span-7">

                <img src="@/assets/images/footer-logo.svg" alt="frm"/>
		
			</NuxtLink>
			<a v-on:click="setOffscreenState" class="close-menu cursor-pointer justify-self-center">	
				X
			</a>
		 </div>

		<div class="menu grid">

			<div v-for="(menuitem, index) in menu" :key="index">
				<NuxtLink :to="menuitem.url"  v-on:click.native="setOffscreenState" >{{menuitem.text}}</NuxtLink>
			</div>
            
        <NuxtLink to="/get-a-quote"  v-on:click.native="setOffscreenState" class="cta w-full py-4 bg-frmpink text-white hover:text-white hover:bg-opacity-80">Get a quote</NuxtLink>
		

		</div>

	</nav>
</template>

<script>

	import { mapMutations } from 'vuex'
	export default {
		name: 'navigationOffscreen',
		props: {
			menu: Array
		},
		methods: {
			...mapMutations({
				setOffscreenState: 'global/setOffscreenState'
			})
		},
	}



</script>
