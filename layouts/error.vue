<template>
  <div class="container py-20">   
    {{hero.errorText}}
  </div>
</template>

<script>
	import { mapState } from 'vuex' 
  export default {
  components: {  },
    props: ['error'],
    layout: 'error', // you can set a custom layout for the error page
    computed:  
    {
        hero: function()
        {
            let $errorText = "";
            let $HeroText = "";
        if (!this.error || this.error.statusCode === 404){
          return {
            errorText: "404: Page not found",
            HeroText: "Please update your bookmarks"
          }
        }
        else {
            return {
              errorText: "An error has occurred",
              HeroText: "Check back soon"
            }
        }
           
        
    } 
  }
  }
</script>
