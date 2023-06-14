import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
	text: string;
}

export function Button({ text, ...props }: CustomButtonProps) {
	return (
		<ChakraButton h={{ base: "80px", md: "60px" }} variant={"buttonVariant"} {...props} >
			{text}
		</ChakraButton>
	);
}
