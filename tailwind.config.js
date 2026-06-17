// tailwind.config.js
const scale = require('./tailwind.config.scale-generator')
const color = require('./tailwind.config.color-generator')
const colors = require('tailwindcss/colors')
const { callbackify } = require('util')

module.exports = {
	mode: 'jit',
	purge: {
		content: [
		'page-sections/**/*.vue',
		'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js'
		],
		safelist: [
			'nuxt-link-active',
			'text-frmpurple'
		]
	},
	darkMode: false,
	theme: {

		container: {
			center: true,
			screens: {
				small: '100%',
				medium: '100%',
				large: '1288px',
				xlarge: '1288px',
				xxlarge: '1288px',
				xxxlarge: '1288px'
			},
			padding: {
				DEFAULT: '30px',
				small: '76px',
				medium: '76px',
				large: '76px',
				xlarge: '0px',
				xxlarge: '0px',
				xxxlarge: '0px'
	        }
		},
		extend:{
			
			borderColor: theme => ({
				...theme('colors'),
				 DEFAULT: theme('colors.gray.300', 'currentColor'),
				'primary': '#3490dc',
				'secondary': '#ffed4a',
				'danger': '#e3342f',
			   }),
			dropShadow: {
				'nav': '0 9px 3px rgba(0, 0, 0, 0.2)',
			},
			spacing: {
				"130px" : "130px",
				"383px" : "383px",
				"329px" : "329px",
				"392px" : "392px",
				"594px" : "594px",
				"798px" : "798px",
				"50vw" : "50vw",
				"370px" : "370px"
			},
			maxWidth: {
				"798px" : "798px"
			},
			fontSize: {
				"15px" : "15px",
				"16px" : "16px",
				"17px" : "17px",
				"18px" : "18px",
				"19px" : "19px",
				"20px" : "20px",
				"21px" : "21px",
				"24px" : "24px",
				"25px" : "25px",
				"30px" : "30px",
				"31px" : "31px",
				"40px" : "40px",
				"60px" : ["60px", "66px"],
				"64px" : "64px",
				"65px" : "65px"
			},
			padding: {
				"26px" : "26px",
				"120px" : "120px"
			},
			height:{
				"86" : "22rem",
				"footer-strip" : "50px"
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: colors.black,
				white: colors.white,
				gray: colors.gray,
				emerald: colors.emerald,
				indigo: colors.indigo,
				yellow: colors.yellow,
				pink: colors.pink,
				purple: colors.purple,
				frmpink: '#E30249',
				frmpink_alt: '#FF0050',
				frmpurple: '#3E1C47',
				frmwhite: '#FFFFFF',
				frmgrey: '#E0E0E0',
				frmgrey_alt: '#F7F7F7',
				frmgrey_dark: '#E6E6E6'
			  },
			  fontFamily: { 
				  'Rubik': [
					  'Rubik'
				  ],
				}		
		},
	},
	variants: {
		extend: {
			fontSize: {
				"17px" : "17px",
				"18px" : "18px",
				"19px" : "19px",
				"20px" : "20px",
				"24px" : "24px",
				"25px" : "25px",
				"31px" : "31px",
				"60px" : ["60px", "66px"],
				"64px" : "64px"
			}

		},
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
		require('tailwindcss-debug-screens')
	]
}
