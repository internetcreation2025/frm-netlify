<template>
    <div class="container px-4 lg:px-0 max-w-798px">   
        
        <h2 class="text-lg lg:text-25px font-bold italic mb-4 mt-4">{{content.heading}}</h2>

        <LazyYoutubeVideo class=" aspect-w-16 aspect-h-9"
        :src="url"
        :thumbnail="thumbnail"
        >

            <template v-slot:button>
              <button aria-label="play video" type="button" class="y-video-button">
                <img src="@/assets/images/play.svg" alt="play video" />
              </button>
            </template> 

        </LazyYoutubeVideo>
    </div>
</template>

<script>
import 'vue-lazy-youtube-video/dist/style.css'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'
export default
{
    name: "standardvideo",
    data(){
        return{
            url: "",
            thumbnail: {
                "webp": this.content.image ? this.content.image[0].url : '',
                "jpeg": this.content.image ? this.content.image[0].url : ''
            },
            valid: false,
            reg: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/i,
            base_url: 'https://www.youtube.com/embed/$5'
        }
    },
    mounted() {
        this.parse();
    },
    methods:{
        parse(){
            if (this.content.src){
                 var m = this.reg.exec(this.content.src); 
                if (m) {     
                    this.url = this.content.src.replace(this.reg, this.base_url);
                    this.valid = true; 
                    return;
                }
            }
        }
    },
    props:{
        content: Object
    },
    components: {
        LazyYoutubeVideo,
    }
}

</script>

<style>


    .y-video__inner
    {
      display:flex;
      align-items:center;
      align-self: center;
      width:100%;
      height:100%;
      padding-bottom: 0 !important; 
      position:absolute !important;
    }


  button.y-video-button
  { 
      z-index:50;
      position:relative;
  }
   
</style>