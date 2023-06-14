import { Box, Flex, Text, Image, Center } from "@chakra-ui/react";

import notebookImg from "../../../assets/notebook.svg";
import candlesBackground from "../../../assets/candlesBackground.svg";

export function BodySession() {
	return (
		<Flex
			flexDir={"column"}
			bgImage={candlesBackground}
			bgPos={"center"}
			bgSize={"cover"}
			w={"100%"}
			h={"100%"}
			alignItems={"center"}
		>
			<Text color={"#FFFFFF"} w={"900px"} fontSize={"20px"} textAlign={"center"} lineHeight={"45px"}>
				No dia <span style={{ color: "#6F55F2" }}>10 de julho ao meio dia</span>, vou realizar um{" "}
				<span style={{ color: "#6F55F2" }}>evento online totalmente gratuito</span> para apresentar a você como o
				Futuryxx 2.0 pode transformar sua experiência de trading. Não importa se você está apenas começando ou se já
				está no mercado há algum tempo, o Futuryxx 2.0 é a ferramenta que pode levar suas operações a um novo patamar.
			</Text>

			<Center
				flexDir={"column"}
				w={"1000px"}
				h={"200px"}
				bgImage={"linear-gradient(to right, #FFFFFF05, #00000000 99%)"}
				border={"1px solid #FFFFFF20"}
				color={"#FFFFFF"}
				textAlign={"center"}
				borderRadius={"20px"}
			>
				Vou compartilhar como o <span style={{ color: "#6F55F2" }}>Futuryxx 2.0</span> tem me ajudado a manter a
				consistência em minhas operações e como ele pode fazer o mesmo por você.
			</Center>

			<Flex
				w={"60%"}
				h={"400px"}
				border={"1px solid #FFFFFF20"}
				justifyContent={"start"}
				alignItems={"center"}
				pos={"relative"}
				borderRadius={"20px"}
			>
				<Box ml={"20px"}>
					<Text color={"#6F55F2"}>Esse evento é exatamente para você que:</Text>
					<ul style={{ listStyle: "none" }}>
						<li>Não tem tempo para praticar</li>
						<li>Precisa de retornos rápidos</li>
						<li>Já cansou de estudar e não obter resultados</li>
						<li>Tem medo e receio na hora de operar</li>
						<li>Quer largar seu emprego atual ou começar uma nova vida</li>
					</ul>
				</Box>

				<Image draggable={"false"} src={notebookImg} w={"55%"} pos={"absolute"} right={"-150px"} />
			</Flex>
		</Flex>
	);
}
