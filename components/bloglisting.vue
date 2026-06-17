<template>

    <header class="py-20 mx-auto bg-frmgrey">
        <div class="container mx-auto grid grid-flow-row gap-14">
            <div class="text-center">
                <h1 class="tracking-tight">
                    <span v-if="content.heading" class="inline text-xl lg:text-60px font-bold text-frmpurple italic lg:mr-3">{{content.heading}}</span>
                    <span v-if="content.alternative_heading" class=" text-frmpink text-xl lg:text-60px font-bold xl:inline italic">{{content.alternative_heading}}</span>
                </h1>
                <p v-if="content.body" class="pt-7 max-w-2xl mx-auto text-sm lg:text-24px lg:leading-8 font-medium text-frmpurple md:mt-5 ">
                {{content.body}}
                </p>


            </div>
            <div class="space-y-4 lg:space-y-0 flex flex-col lg:flex-row justify-center mx-12  items-center">
                
                <div class="frm-dropdown w-full mr-0 lg:mr-6 lg:w-3/12">
                    
                <span v-html="select_category_label"></span> 
                    <select v-model="selected_category">
                        <option>{{category_label}}</option>
                        <option v-for="category in categories">
                            {{category}}
                        </option>
                    </select>
                </div>


                <div class="frm-dropdown w-full lg:w-3/12 ">
                    <span v-html="select_howto_label"></span> 
                    <select  v-model="selected_howto">
                        <option>{{howto_label}}</option>
                        <option v-for="category in search_tags">
                            {{category}}
                        </option>
                    </select>
                </div>
                <a v-if="youtube_url" :href="youtube_url" target="_blank" class="w-full lg:w-5/12 text-center cta col-span-5 bg-frmpurple text-white hover:opacity-80 italic px-8">Watch our latest videos on YouTube</a>

            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 ">


                <Articlecard :article="article" v-for="article in filtered_articles" :key="article.id" />
                  

            </div>


            <div v-if="filtered_articles && filtered_articles.length == 0" class="text-center">
                {{content.no_results}}
            </div>

            <div v-if="!filtered_articles">
                There was an issue loading the articles.
            </div>

        </div>
    </header>
</template>

<script>
import Articlecard from './articlecard.vue'
import Kirbyimage from './kirbyimage.vue'

	import { mapState,mapMutations  } from 'vuex' 
    const category_label = "Categories"
    const howto_label = "Guides"

    export default
    {
        name: "bloglisting",
        components:{ 
            Kirbyimage, Articlecard
        },
        data(){
            return { 
                articles: null,
                selected_category: category_label,
                selected_howto: howto_label
            }
        },
        computed:
        { 
            select_category_label: function() {
                return this.selected_category;
            },
            select_howto_label: function() {
                return this.selected_howto;
            },

            filtered_articles: function()
            {
                if (this.articles)
                {
                
                console.log("filtering");
                let base_articles = this.articles;

                if (this.articles.code == 200){
                    base_articles = this.articles.result;
                }
                console.log("base articles", this.articles);


                    if (this.selected_category != category_label || this.select_howto_label != howto_label)
                    {

                        base_articles = base_articles.filter((article) => {

                            let match = false;

                            if (this.selected_category != category_label && article.search_tags)
                            {
                                match = article.search_tags.split(',').includes(this.selected_category.trim())
                            }

                            if (this.select_howto_label != howto_label && article.how_to_tags)
                            {
                                match = article.how_to_tags.split(',').includes(this.selected_howto.trim());
                            }

                            return match;
                        });
                    }

                return base_articles;
                }
            },

            ...mapState({
                categories: state => state.global.content.categories ? state.global.content.categories.split(',') : [],
                search_tags: state => state.global.content.globaltags ? state.global.content.globaltags.split(',') : [],
                youtube_url: state => state.global.content.youtube_url
            })

        },   
        props:{
            content: Object,
            page: Object
        },
		async fetch() {
            
            console.log("initiating fetch");

            let $endpoint = '/.netlify/functions/content';
            if (process.server){
                $endpoint = process.env.PRODUCTION_BASE_URL + '/api/query'
            } 
            
             await this.$axios.$post($endpoint,{
				query: "page('" + this.$route.path + "').children.listed",
				select: {
					title: "page.content.title",
					thumb: "page.content.thumbnailimage.toFilesHelper",
                    blog_type: "page.content.blog_type",
                    search_tags: "page.content.search_tags",
                    how_to_tags: "page.content.how_to_tags",
                    card_description: "page.content.card_description",
                    card_linktext: "page.content.card_linktext",
                    card_link: "page.id"

				},
				page: 1,
				limit: 50,
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
			)
			.then((response) => { 

                if (process.server)
                {
                    
                console.log("response server", response);
				this.articles = response.result.data 
                }
                else{

                console.log("response client", response);
				this.articles = response.data.result.data;
                }
			}).catch((error) => {
                console.log(error);
            });
            
            console.log("finished fetch");
		}

    }

</script>