import axios from 'axios'; 

export const state = () => ({
  directory: []
})

export const mutations = {
  SET_DIRECTORY(state, dir){
    //console.log("COMMITTING", dir);
    state.directory = dir
  }
}

export const actions = {
  async nuxtServerInit ({ commit, state }, { req }) {
    
    
    console.log("build directory");

    await this.$axios.$post(process.env.PRODUCTION_BASE_URL + '/api/query', {
      query: "site.index",
      select: {
        key: "page.id",
        head: "page.title.toSeoHelper",
        breadcrumb: "page.title.toCrumbs", 
        blocks: "page.blocks.toBlocksHelper",   
        blog_heading: "page.content.page_heading",  
        blog_description: "page.content.page_description",  
        search_tags: "page.search_tags",
        how_to_tags: "page.how_to_tags"   
      }
    }).then(resp =>
      {
        //console.log("building...");

        let data = resp.result.data;
 
        let directory = [];
        for (let i = 0; i < data.length; i++)
        {
          let key = data[i].key;
           directory[key] = data[i];

           
        }
        

        commit('SET_DIRECTORY', directory);    		
      }
    ).catch(function (error) {
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
    });

    
  }
}

 