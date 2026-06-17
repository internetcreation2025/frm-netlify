<template>

	<div
		class="w-full relative z-10">


			<component
				v-if="page.blocks && page.blocks.length"
				v-for="block in page.blocks" class="block"
				v-bind:content="block.content"
				v-bind:is="block.type"
				v-bind:page="page"
				v-bind:key="block.id">
			</component>

	</div>

	

</template>

<script>
	import { mapState, mapMutations } from 'vuex';

	export default { 
		scrollToTop: true,
		layout: 'default',
		transition: 'fade',
		components:{
		
		},
		head()
		{
			return this.head
		},
		data()
		{
			return{ 
				head: {}, 
				page: {}
			}
		},  
		async fetch() {
			
			let self = this;

				const path = 'home';

			let page = this.$store.state.directory[path];

			console.log("directory from state", this.$store.state.directory.length);
 

			if (process.server || page != null)
			{

				if (page != null)
				{
				 
					this.$store.commit('page/setPageContent', page);    
					this.head = page.head; 
					this.page = page;
				}
				else
				{
					console.log("server page is null", page == null);
 
					//this.$nuxt.error({ statusCode: 404, message: 'Page not found' });
				}
				
			}
			else if (page == null)
			{
				console.log("Using client api");
				


                await self.$axios.$post('/.netlify/functions/content',
                    {
						query: "page('" + path + "')",
						select: {
							blog_heading: "page.page_heading",
							blog_description: "page.page_description",
							search_tags: "page.search_tags",
							how_to_tags: "page.how_to_tags",
							head: "page.title.toSeoHelper",
							breadcrumb: "page.title.toCrumbs", 
							blocks: "page.blocks.toBlocksHelper",        
					}
				   }, {
                        baseURL: "",
                        auth: "",                                
                        headers: {
                            common: {
                            Authorization: ''
                            }
                        },
                        config: {
                            auth: ""
                        }
                    }
                ).then(resp => {

					 console.log("client response", resp.data);
				 	page = resp.data.result;


					if (page != null)
					{
					
						this.$store.commit('page/setPageContent', page);   
						this.head = page.head;
						this.blocks = page.blocks;
						this.page = page;

						console.log("client page found", this.page);
					}
					else
					{
						console.log("page is null", page == null);
						this.$nuxt.error({ statusCode: 404, message: 'Page not found' });
 
					}

				}).catch(function (error) {
					
					if (error.response) {
					// Request made and server responded
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
					} else if (error.request) {
					// The request was made but no response was received
					console.log(error.request);
					} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
					} 

					
					if (path != 'search')
					{
			 			return self.$nuxt.error({ statusCode: 404, message: error.message })
					}
				});

 
			}

				
		}

		
	}

</script>