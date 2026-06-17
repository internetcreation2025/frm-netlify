<template>

    <div class="relative">
    <div class="container mx-auto lg:py-0 mt-12" v-if="filtered_articles">

        <h2 class="text-lg lg:text-40px italic font-bold text-center justify-center">{{content.heading}}</h2>

        
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 my-4 lg:mb-0 lg:mt-12 z-50 relative">


                <Articlecard :article="article" v-for="article in filtered_articles" :key="article.id" />
                  

            </div>



    </div>


            <div class="absolute bottom-0 bg-frmpurple w-full h-full top-370px z-0">

            </div>

    </div>

</template>

<script>
import Articlecard from './articlecard.vue'

export default{
    name: "alsointerested",
    components: {
        Articlecard
    },
    data(){
        return {
            articles: null
        }
    },
    methods:{
        shuffle: function(array) {
            let currentIndex = array.length,  randomIndex;

            // While there remain elements to shuffle...
            while (currentIndex != 0) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }

            return array;
            }
    },
    computed:{
        
            filtered_articles: function()
            { 

                    if (this.articles == null)
                    {
                        return [];
                    }

                        let $base_articles = this.articles.filter((article) => {

                            let match = false;

                            if (this.page.search_tags)
                            {
                                match = article.search_tags.split(',').filter(tag => this.page.search_tags.split(',').includes(tag))
                            }

                            if (this.page.how_to_tags)
                            {
                                match = article.how_to_tags.split(',').filter(tag => this.page.how_to_tags.split(',').includes(tag))
                            }
                            return match.length > 0 && (article.card_link != this.page.key);
                        }).slice(0,3);

                        return this.shuffle($base_articles);
                     
            }
    },
    props:
    {
        content: Object,
        page: Object
    },
    
		async fetch() {
 
            let $endpoint = '/.netlify/functions/content';
            if (process.server){
                $endpoint = process.env.PRODUCTION_BASE_URL + '/api/query'
            }
            
              await this.$axios.$post($endpoint,{
				query: "page('blog-and-guides').children.listed",
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
				limit: 8,
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
                console.log("process" + process.server, response);


                if (process.server)
                {
                     
				this.articles = response.result.data 
                }
                else{
 
				this.articles = response.data.result.data;
                }

 
			}) 
		}

}

</script>