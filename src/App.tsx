import { ChakraProvider } from "@chakra-ui/react";
import { MainPage } from "./pages/MainPage";
import { theme } from "./styles/theme";

function App() {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<MainPage />
		</ChakraProvider>
	);
}

export default App;
