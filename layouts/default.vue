<template>


<div class="bg-frmgrey font-Rubik"> 
   
		<transition name="fade">
			<navigationOffscreen
				v-if="offscreenState"
				v-bind:menu="navigationMain">
			</navigationOffscreen>
		</transition>

  <div class="top-nav relative bg-white drop-shadow-nav z-40">
    <div class="container  mx-auto px-4 ">
      <div class="flex justify-between items-center py-6 lg:justify-start lg:space-x-10">
        <div class="flex justify-start items-center">
          <nuxt-link to="/">
            <span class="sr-only">First Rate Maintenance</span>
            <img class="w-auto h-20 p-0 cta" src="@/assets/images/firstratelogo.svg" alt="firstratelogo">
          </nuxt-link>
          
        </div>
        <div class="-mr-2 -my-2 lg:hidden">
          <button  v-on:click="setOffscreenState" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <NavigationDefault/>
        <div class="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
          <nuxt-link to="/get-a-quote" class="cta text-base  xl:text-xl skewed ml-8 purple">
            GET A QUOTE
          </nuxt-link>
        </div>
      </div>
    </div>

          <nuxt-link to="/get-a-quote" class="sm:hidden cta rounded-none py-2 purple">
            GET A QUOTE
          </nuxt-link>
    <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
  </div>

  <main class=" min-h-screen">
		<Nuxt
			keep-alive>
		</Nuxt>
  </main>



  <footer class="relative z-50 pb-4" aria-labelledby="footer-heading">
	  <div class="footer-strip">

	  </div>
	  <div class="footer-main mx-auto container"> 
		<div class="col-span-full lg:col-span-10 ml-4 lg:ml-0">
			<div class="footer-headings lg:border-r border-white">
				<div>
					
					<h2 class=" text-19px  h-12">
						Our contact details
					</h2>
				</div>
			</div>
			<div class="lg:border-r border-white h-full pt-6 grid grid-flow-row lg:grid-flow-col">
				<div class="grid grid-flow-row align-top content-start ">
					<div>
					<h3 class="mb-2">Email us at</h3>

					<a :href="'mailto:' + email" class="text-21px font-bold underline italic">{{email}}</a>
					</div>
					<div>
						<h3 class="mt-6">Phone us on </h3>
						<a class="text-30px font-bold italic" :href="'tel:' + phone">{{phone}}</a>
					</div>
          
			<div class="mt-4 footer-socials ">
				<a v-if="facebook_url" :href="facebook_url" target="_blank">
					<img src="@/assets/images/facebook.svg" alt="Facebook icon">
				</a>
				<a v-if="instagram_url" :href="instagram_url" target="_blank">
					<img src="@/assets/images/instagram.svg" alt="Instagram icon">
				</a>
				<a v-if="twitter_url" :href="twitter_url" target="_blank">
					<img src="@/assets/images/twitter.svg" alt="Twitter icon">
				</a>
			</div>
				</div>
				<div  v-if="footer_address">
					<h3  class="mb-2">Address</h3>
					<span v-html="$md.render(footer_address)">
					</span>
					<p class="mt-4">View on <a :href="map_link" target="_blank" class="underline">Google Maps</a></p>
					
				</div>
			</div>
		</div>
		<div class="col-span-full lg:col-span-2 mt-12 lg:mt-0">
			<div class="footer-headings">

					<h2 class="pl-6 lg:pb-0 pb-2 pt-2 text-19px">
						Services
					</h2>
				
				</div> 
			<div>
				<ul  class="pl-6 pt-6 grid lg:grid-flow-row  grid-cols-2 lg:grid-cols-1">
					<li v-for="item in services_list">
						{{item.service_title}}
					</li>
				 
				</ul>
			</div>
		</div> 
    </div>
	  <div class="container mx-auto w-full bg-frmpurple relative  pt-8">
		  <div class="grid gap-12 lg:gap-0 grid-cols-1 lg:grid-cols-12 grid-flow-row">
			<div class="col-span-full lg:col-span-10 grid-cols-12 grid  gap-y-6 lg:gap-0 grid-flow-row  justify-center items-center ">
				<img class="col-span-6 lg:col-span-2" src="@/assets/images/footer-logo.svg" alt="First Rate Maintenance FRM logo" />

				<div class="col-span-full lg:col-span-5">© {{new Date().getFullYear()}} First Rate Maintenance Ltd. All rights reserved.</div>
				
				<NavigationFooter/>
			</div>
			
		  </div>
	  </div>
	  
  </footer>
  <div id="footer-scripts">

  </div>
</div>
</template>

<script>
import NavigationOffscreen from '../components/nav/navigationOffscreen.vue'

	import { mapState } from 'vuex'
	import { mapMutations } from 'vuex'
import NavigationDefault from '../components/nav/navigationDefault.vue'
import NavigationFooter from '../components/nav/navigationFooter.vue'

const apiKey = process.env.GMAP_API_KEY;

	export default {
    head() {
      return {
        script: [
          {src: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
        ]
      };
    },
    name: "layoutDefault",
    methods: {
        ...mapMutations({
            setOffscreenState: "global/setOffscreenState"
        })
    },  
    mounted() {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://api.feefo.com/api/javascript/first-rate-maintenance-ltd";
      document.getElementById("footer-scripts").appendChild(script);

    
    },
    computed: {
        ...mapState({
            navigationFooter(state) {
                return state.global.content.navigationFooter;
            },
            navigationMain(state) {
                return state.global.content.navigationMain;
            },
            offscreenState(state) {
                return state.global.offscreenState;
            },
            facebook_url(state) {
                return state.global.content.facebook_url;
            },
            twitter_url(state) {
                return state.global.content.twitter_url;
            },
            instagram_url(state) {
                return state.global.content.instagram_url;
            },
            footer_address(state) {
                return state.global.content.footer_address;
            },
            map_link(state) {
                return state.global.content.map_link;
            },
            email(state) {
                return state.global.content.email;
            },
            phone(state) {
                return state.global.content.phone;
            },
            services_list(state) {
                return state.global.content.services_list;
            }
        })
    },
    async fetch() {
        if (process.server) {
            await this.$axios.$post("api/query", {
                query: "site",
                select: {
                    title: "site.title",
                    categories: "site.categories",
				          	footer_address: "site.footer_address",
				          	map_link: "site.map_link",
                    globaltags: "site.globaltags",
                    facebook_url: "site.facebook_url",
                    twitter_url: "site.twitter_url",
                    instagram_url: "site.instagram_url",
                    youtube_url: "site.youtube_url",
                    navigationMain: "site.navigation_main.toNavigationArray",
                    navigationFooter: "site.navigation_footer.toNavigationArray",
                    services_list: "site.footer_services.toStructure",
                    email: "site.email",
                    phone: "site.phone",
                }
            }).then(resp => {
                this.$store.commit("global/setGlobalContent", resp.result);
            }).catch(e => {
                console.log("navigation bar error", e);
            });
        }
    },
    components: { NavigationDefault, NavigationFooter, NavigationOffscreen }
}

</script>


<style>


</style>