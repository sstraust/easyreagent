/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./resources/*.css",
	     "./src/**/*.{html,js,cljs}"],
    theme: {
	
	colors: {
	    "success-color": "hsl(100, 100%, 20%, 100%)",
	    lesser: '#444444',
	},
	extend: {},
    },
    daisyui: {
      themes: [ "winter" ],
    },
    plugins: [require("daisyui")],
}
