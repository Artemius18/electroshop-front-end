/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	black: '#2E3239',
	white: twColors.white,
	primary: '#FF9902',
	secondary: '#161D25',
	'bg-color': '#F2F2F5',
	aqua: '#268697'
}

module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./pages/**.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		colors,
		extend: {
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				x1: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.155rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem',
				'8xl': '6.9rem',
				'9x1': '9.2rem'
			},
			keyFrames: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				},
				animation: {
					opacity: 'animation0pacity .5s ease-in-out',
					scaleIn: 'scaleIn .35s ease-in-out'
				}
			}
		},
		plugins: []
	}
}
