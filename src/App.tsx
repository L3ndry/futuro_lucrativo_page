import { ChakraProvider, Flex } from "@chakra-ui/react";
import { MainPage } from "./page";
import { theme } from "./styles/theme";

function App() {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Flex overflowX={"hidden"} flexDir={"column"}>
				<MainPage />
			</Flex>
		</ChakraProvider>
	);
}

export default App;
