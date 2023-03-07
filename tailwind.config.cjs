/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			boxShadow: {
				'brand-base-dark':
					'inset 0px -1px 2px rgba(255, 255, 255, 0.1), inset 0px 6px 12px rgba(248, 250, 252, 0.05), inset 0px 24px 32px rgba(15, 23, 42, 0.2), inset 0px -24px 24px rgba(15, 23, 42, 0.5)',
				'brand-base-light':
					'0px 2px 8px rgba(203, 213, 225, 0.2), 0px 8px 32px rgba(203, 213, 225, 0.5), inset 0px -1px 2px rgba(255, 255, 255, 0.5), inset 0px 4px 6px rgba(255, 255, 255, 0.4), inset 0px 2px 4px rgba(203, 213, 225, 0.2), inset 0px -8px 12px rgba(203, 213, 225, 0.25)',
				'brand-primary-dark':
					'0px 2px 8px rgba(30, 58, 138, 0.25), 0px 4px 32px rgba(30, 58, 138, 0.25), inset 0px -1px 2px rgba(255, 255, 255, 0.45), inset 0px 4px 6px rgba(239, 246, 255, 0.5), inset 0px 2px 4px rgba(30, 58, 138, 0.5), inset 0px -8px 12px rgba(30, 58, 138, 0.5)',
				'brand-primary-light':
					'0px 2px 8px rgba(59, 130, 246, 0.15), 0px 4px 32px rgba(37, 99, 235, 0.25), inset 0px -1px 2px rgba(255, 255, 255, 0.45), inset 0px 4px 6px rgba(239, 246, 255, 0.5), inset 0px 2px 4px #60A5FA, inset 0px -8px 12px #2563EB',
			},
			borderRadius: {
				'3xl': '1.25rem',
				'4xl': '1.5rem',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
}
