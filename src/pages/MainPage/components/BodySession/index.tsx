import { Flex, Text, Image, Center } from "@chakra-ui/react";

import notebookImg from "../../../../assets/notebook.svg";
import candlesBackground from "../../../../assets/candlesBackground.svg";

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
			gap={{base: "10vh", md: "13vh"}}
		>
			<Text color={"#FFFFFF"} w={{base: "85%", md: "55%"}} fontSize={{base: "1rem", md: "1.2rem"}} textAlign={"center"} lineHeight={{base: "3.5vh", md: "4.3vh"}}>
				No dia <span style={{ color: "#6F55F2" }}>10 de julho ao meio dia</span>, vou realizar um
				<span style={{ color: "#6F55F2" }}>evento online totalmente gratuito</span> para apresentar a você como o
				Futuryxx 2.0 pode transformar sua experiência de trading. Não importa se você está apenas começando ou se já
				está no mercado há algum tempo, o Futuryxx 2.0 é a ferramenta que pode levar suas operações a um novo patamar.
			</Text>

			<Center
				flexDir={"column"}
				w={{base: "85%", md: "70%"}}
				h={"250px"}
				bgImage={"linear-gradient(to right, #FFFFFF05, #00000000 99%)"}
				border={"1px solid #FFFFFF20"}
				color={"#FFFFFF"}
				textAlign={"center"}
				borderRadius={"20px"}
			>
				<Text w={{base: "80%", md: "70%"}} fontSize={{base: "1.3rem", md: "1.8rem"}}>
					Vou compartilhar como o <span style={{ color: "#6F55F2" }}>Futuryxx 2.0</span> tem me ajudado a manter a
					consistência em minhas operações e como ele pode fazer o mesmo por você.
				</Text>
			</Center>

			<Flex
				w={{base: "85%", md: "75%"}}
				h={"55vh"}
				border={"1px solid #FFFFFF20"}
				justifyContent={"start"}
				alignItems={"center"}
				pos={"relative"}
				borderRadius={"20px"}
				bgImage={"linear-gradient(to right, #FFFFFF05, #00000000 99%)"}
                mt={{base: "8vh", md: "0"}}
                pt={{base: "20%", md: "0"}}
			>
				<Flex flexDir={"column"} ml={"3%"} gap={"10x"} w={"40%"}>
					<Text color={"#6F55F2"} fontSize={{base: "1.1rem", md: "1.8rem"}} whiteSpace={"nowrap"}>
						Esse evento é exatamente para você que:
					</Text>
					<ul
						style={{
							listStyle: "none",
							fontSize: "1.3rem",
							color: "#FFFFFF",
							lineHeight: "7.3vh",
							fontWeight: "normal",
							whiteSpace: "nowrap",
						}}
					>
						<li>Não tem tempo para praticar</li>
						<li>Precisa de retornos rápidos</li>
						<li>Já cansou de estudar e não obter resultados</li>
						<li>Tem medo e receio na hora de operar</li>
						<li>Quer largar seu emprego atual ou começar uma nova vida</li>
					</ul>
				</Flex>

				<Image draggable={"false"} src={notebookImg} w={{base: "80%", md: "45%"}} pos={"absolute"} right={{base: "9%", md: "-7%"}} top={{base: "-70px", md: "23%"}} />
			</Flex>
		</Flex>
	);
}
