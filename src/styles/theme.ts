import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./button";

export const theme = extendTheme({
	fonts: {
		heading: `'Montserrat', 'sans-serif'`,
        body: `'Montserrat', 'sans-serif'`,
        subtitle: `'Montserrat', 'sans-serif'`,
	},

	colors: {
		bgMainColor: "#03010A",
		secondaryColor: "#6F55F2",
		buttonColor: "#8A6AF8",
		inputColor: "#030108",

		text: {
			white: "#FFFFFF",
			grey: "#FFFFFF50",
		},
	},

	components: {
		Button: buttonTheme,
	},
});
