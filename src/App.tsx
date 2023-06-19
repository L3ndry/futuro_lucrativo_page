import { ChakraProvider } from "@chakra-ui/react";
import { MainPage } from "./pages/MainPage";
import { GroupPage } from "./pages/GroupPage";
import { theme } from "./styles/theme";

export default function App() {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<MainPage />
			<GroupPage />
		</ChakraProvider>
	);
}
