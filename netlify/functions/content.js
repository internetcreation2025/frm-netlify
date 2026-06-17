const fetch = require('node-fetch');
const querystring = require("querystring");

exports.handler = async (event, context) => {
  
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = JSON.parse(event.body);
  const query = params.query;
  const select = params.select;
  let headers = new fetch.Headers();
  headers.set('Authorization', 'Basic ' + Buffer.from(process.env.KIRBY_USERNAME + ":" + process.env.KIRBY_PASSWORD).toString('base64'));
  headers.set('Accept', 'application/json');
  console.log("fetching...!");
    return fetch(process.env.PRODUCTION_BASE_URL + '/api/query', { 


      method: "POST",
      headers: headers,
      body: JSON.stringify({  
        query: query,
        select: select
       })      
    })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify({
        data
      }),
    }))
    .catch((error) => ({ 
      statusCode: 422, 
      body: String(error) 
    })); 
};