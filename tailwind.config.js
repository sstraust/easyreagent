/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const { light } = require('daisyui/src/theming/themes')


module.exports = {
    content: ["./resources/*.css",
	     "./src/**/*.{html,js,cljs}"],
    theme: {
	extend: {
	},
    },
    daisyui: {
	themes: [ {
            light: {
		...light, // inherit all of DaisyUI's default light theme
		'primary-content': '#000000', // override just this
            },
	} ]
    },
    plugins: [require("daisyui"),
	     plugin(function({ addComponents }) {
		 addComponents({
		     '.btn-native': {
			 all: 'revert',
			 appearance: 'auto',
			 display: 'inline-block',    /* matches native button behavior */
			 margin:     '0',             /* remove any inherited margins */
			 font:       'inherit',       /* inherit your page’s font */
			 textAlign:  'center',        /* like a real button */
			 /* you can add other UA-style fallbacks here if desired */
		     },
      })
	     })],
}
