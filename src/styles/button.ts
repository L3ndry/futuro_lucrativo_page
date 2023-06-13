import { defineStyleConfig, defineStyle } from "@chakra-ui/react";

const buttonVariant = defineStyle({
	background: "buttonColor",
	color: "#FFFFFF",

	fontWeight: "400",
	minHeight: "none",
	textAlign: "center",
	width: "100%",
});

export const buttonTheme = defineStyleConfig({
	variants: {
		buttonVariant,
	},
});
