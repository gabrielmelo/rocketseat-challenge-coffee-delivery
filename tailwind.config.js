/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.tsx'],
	theme: {
		fontFamily: {
			sans: '"Baloo 2", sans-serif',
		},
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				md: 0,
			},
			center: true,
		},
		extend: {},
	},
	plugins: [],
}
