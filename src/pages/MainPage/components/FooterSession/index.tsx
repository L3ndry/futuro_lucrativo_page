import { Flex, Text, Image, Spacer } from "@chakra-ui/react";
import { Button } from "../../../../components/Button";

import fotoFooter from "../../../../assets/fotoFooter.svg";

export function FooterSession() {
	return (
		<Flex w={"100%"} h={"100%"} flexDir={{base: "column", md: "row"}} alignItems={"center"} px={{base: "0", md: "12%"}} gap={{base: "25px", md: "70px"}} mb={"50px"}>
			<Image boxSize={{base: "60%", md: "35%"}} draggable={"false"} src={fotoFooter} />
			<Flex h={{base: "220px", md: "330px"}} flexDir={"column"} alignItems={{base: "center", md: "start"}} justifyContent={"space-between"}>
				<Text color={"#FFFFFF50"} fontSize={{base: "0.7rem", md: "1rem"}} letterSpacing={"5px"}>
					SEU MENTOR
				</Text>
				<Text fontWeight={"bold"} color={"#6F55F2"} fontSize={{base: "1.3rem", md: "2rem"}}>
					Quem é Marcos Rios
				</Text>
                <Spacer />
				<Text w={{base: "85%", md: "auto"}} color={"#FFFFFF"} fontSize={{base: "0.7rem", md: "1.1rem"}} textAlign={{base: "center", md: "start"}}>
					Eu sou Rios, um expert em OB com anos de experiência neste mercado. Já estive no seu lugar, frustrado e
					desanimado com as perdas. Foi quando encontrei o Futuryxx que tudo mudou. Hoje, sou capaz de manter a
					consistência em minhas operações e estou aqui para compartilhar isso com você.
				</Text>
                <Spacer /> <Spacer />
				<Button w={{base: "90%", md: "auto"}} variant={"buttonVariant"} text={"QUERO ME INSCREVER GRATUITAMENTE"} fontSize={"0.7rem"} fontWeight={"bold"} h={{base: "6vh", md: "6vh"}} />
			</Flex>
		</Flex>
	);
}
