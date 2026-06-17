const fetch = require('node-fetch');
const querystring = require("querystring");


exports.handler = async (event, context) => {
  
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
 
    
  return fetch(process.env.PRODUCTION_BASE_URL + "/quote", {
    method: "POST", 
    body: event.body,     
})
    .then((response) => 
      response.json()
    )
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify({
        data
      }),
    }))
    .catch((response, error) => ({ 
      statusCode: 422, 
      body: String(response) + "!!" 
    })); 
};


