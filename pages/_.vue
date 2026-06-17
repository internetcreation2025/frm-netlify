<template>
	<div
		class="w-full relative z-10">

	<div class="shadow-lg relative z-50" v-if="page">
		<div v-if="page.blog_heading" class="py-20 max-w-798px  mx-auto text-center">
			<h1 class="text-frmpurple text-2xl lg:text-60px italic font-bold">
				{{page.blog_heading}}
			</h1>
			<div class="text-19px mt-12 mx-4  lg:text-24px " v-if="page.blog_description" v-html="$md.render(page.blog_description)">

			</div>
		</div>
	</div>

		<div id="blocks" :class="page && page.blog_heading ? 'blog' : ''">
			<component v-on:closeAccordians="closeAccordians(openAccordian = $event)" ref="blocks"
				v-if="page.blocks && page.blocks.length"
				v-for="block in page.blocks" class="block"
				v-bind:content="block.content"
				v-bind:is="block.type"
				v-bind:page="page"
				v-bind:key="block.id">
			</component>
		</div>
	</div>
</template>


<script> 
	export default {
		scrollToTop: true,
		layout: 'default',
		transition: 'fade', 
		data()
		{
			return{ 
				head: {}, 
				page: {},
				openAccordian: null
			}
		}, 
		head() {

			return this.head;
			
		},
		methods: {
			closeAccordians: function($init) {

				let $accordians = this.$refs.blocks.filter(f => 
				
				f.$options._componentTag == "accordianlite" || f.$options._componentTag == "accordian"
					|| f.$options._componentTag == "accordianblog"
							
				);

				$accordians.forEach(f => {
					
					if (f != this.openAccordian)
					{
						f.toggle_in = false;
					}
				});
				
  				this.openAccordian.toggle_in = !this.openAccordian.toggle_in;
				this.openAccordian.open();

			}
		},
		async fetch() {
			
			let self = this;

				const path = this.$route.path == '/' ? 'home' : this.$route.path.substring(1);

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
