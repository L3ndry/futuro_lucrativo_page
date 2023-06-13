import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
	text: string;
}

export function Button({ text }: ButtonProps) {
	return (
		<ChakraButton h={{ base: "80px", md: "60px" }} variant={"buttonVariant"}>
			{text}
		</ChakraButton>
	);
}
