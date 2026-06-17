<template>

    <div class="col-span-full lg:col-span-5  footer-sub-links">
        <NuxtLink :to="menuitem.url" class="underline" v-for="(menuitem, index) in menu" :key="index">
            {{menuitem.text}}
        </NuxtLink>
    </div>
</template>
<script>
export default {
		name: 'navigationFooter',
		computed: { 
			menu() {
				return this.$store.state.global.content.navigationFooter;
			}
		},
	}

</script>
