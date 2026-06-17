// Import Libraries
import axios from 'axios'

// Nuxt Config
export default {
	target: process.env.RENDER_MODE, 
	ssr: process.env.SSR,
	env: {

		KIRBY_USERNAME: process.env.KIRBY_USERNAME,
		KIRBY_PASSWORD: process.env.KIRBY_PASSWORD,
		GMAP_API_KEY: process.env.GMAP_API_KEY,
		FRONTEND_PRODUCTION_BASE_URL: process.env.FRONTEND_PRODUCTION_BASE_URL,
		PRODUCTION_BASE_URL: process.env.PRODUCTION_BASE_URL
	  },   
	head: {
	  title: "First Rate Maintenance",
	  meta: [
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ 'http-equiv': 'pragma', content: 'no-cache' },
		{ 'http-equiv': 'cache-control', content: 'no-cache, no-store, must-revalidate' },
		{ 'http-equiv': 'expires', content: '0' },
		{ name: 'google-site-verification', content: 'ECpK9r2XcOUK6cqo3VmThuc5d1Qt1iu0lSLFTTZ-bZY' }
	  ],
	},
	html: {
	  minify: {
		collapseWhitespace: true,
		collapseBooleanAttributes: true,
		decodeEntities: true,
		minifyCSS: true, 
		minifyJS: true, 
		processConditionalComments: true,
		removeEmptyAttributes: true,
		removeRedundantAttributes: true,
		trimCustomFragments: true,
		useShortDoctype: true
	  }
	}, 
	vue: {
		config: { 		  
			productionTip: false,
			devtools: true
		}
	  },
	components: [
		'~/components/',
		'~/components/blocks/',
		'~/components/cards/'
	],
	plugins: [
		'~/plugins/axios',
		'~/plugins/preview.client.js',
  	],
	modules: [
		'@nuxtjs/google-fonts',
		'@nuxtjs/axios',
		'@nuxtjs/markdownit', 
		'@nuxtjs/gtm',
	],
	gtm: {
	  id: 'GTM-P7S5CDB',
	  debug: true,
	  pageTracking: true,
	  enabled: true
	
	},
	buildModules: [
		'@nuxtjs/dotenv',
		'@nuxtjs/tailwindcss',
		"@nuxtjs/svg"
	],markdownit: {
		preset: 'default',
		linkify: true,
		breaks: true, 
	  },
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.js',
	  },
	svg: {
		vueSvgLoader: {
			// vue-svg-loader options
		},
		svgSpriteLoader: {
			// svg-sprite-loader options
		}
	},  
	googleFonts: {
		families: {
		  Rubik: {
			  wght: [400, 700],
			  ital: [400, 700]
			} 
		},
		display: 'swap',
		prefetch: true,
		preconnect: true,
		preload: true
	},
	image: {
		domains: [process.env.IMAGE_BASE_URL]
	},
	axios: {
		baseURL: process.env.PRODUCTION_BASE_URL
	},
	pwa: {
		manifest: {
			lang: 'en'
		}
	},
	router: [
		{trailingSlash: false}
	],
	generate: { 
		/*
		routes() {
			return axios.get(process.env.PRODUCTION_BASE_URL + '/generate')
			.then(result => {
				return result.data.map(url => {
					return url
				})
			})
		}, */
		crawler: true,
		fallback: true,
		trailingSlash: false
	},
	build: {
		extractCSS: true,
		extend(config, { isClient }) {
			// Extend only webpack config for client-bundle
			if (isClient) {
			  config.devtool = 'source-map'
			}
		}
	},
}
