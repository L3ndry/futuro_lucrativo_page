import { Flex } from "@chakra-ui/react";

// Sessions
import { HeaderSession } from "../components/HeaderSession"; 
import { BodySession } from "../components/BodySession";
import { FooterSession } from "../components/FooterSession";

export function MainPage() {
	return (
		<Flex flexDir={"column"} w={"100vw"} h={"100vh"} bgColor={"bgMainColor"} overflowX={"hidden"}>
            {/* Sessions */}
			<HeaderSession />
            <BodySession />
            <FooterSession />
		</Flex>
	);
}
