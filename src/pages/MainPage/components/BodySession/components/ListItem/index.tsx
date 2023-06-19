import { Flex, Image, Text, TextProps } from "@chakra-ui/react";
import CheckIcon from "../../../../../../assets/checkIcon.svg";

interface ListItemProps extends TextProps {
	text: string;
}

export function ListItem({ text, ...props }: ListItemProps) {
	return (
		<Flex gap={"2vw"} w={"100%"} alignItems={"center"}>
			<Image src={CheckIcon} w={{ base: "7%", md: "7%" }} />
			<Text
				whiteSpace={{ base: "normal", md: "nowrap" }}
				fontSize={{ base: "0.8rem", md: "1.2rem" }}
				{...props}
				color={"#FFFFFF"}
			>
				{text}
			</Text>
		</Flex>
	);
}
