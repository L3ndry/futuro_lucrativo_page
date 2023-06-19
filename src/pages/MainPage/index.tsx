import { Flex } from "@chakra-ui/react";

// Sessions
import { HeaderSession } from "./components/HeaderSession";
import { BodySession } from "./components/BodySession";
import { FooterSession } from "./components/FooterSession";

export function MainPage() {
	return (
		<Flex
			flexDir={"column"}
			bgColor={"bgMainColor"}
			gap={"50px"}
			overflowX={"hidden"}
		>
			{/* Sessions */}
			<HeaderSession />
			<BodySession />
			<FooterSession />
		</Flex>
	);
}
