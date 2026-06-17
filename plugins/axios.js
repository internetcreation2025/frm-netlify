export default function ({ $config, $axios }, inject) {

	$axios.onRequest(config => {

		config.auth = {
			username: process.env.KIRBY_USERNAME,
			password: process.env.KIRBY_PASSWORD
		}
	})
/*
	$axios.interceptors.response.use(
       response => {
         if(response.status === 200) {
			 console.log('success')
         } else {
			 console.log('error')
		 }
       }
   )*/
}
