import { Flex, Text, Image } from "@chakra-ui/react";
import { Button } from "../../../../components/Button";

import fotoFooter from "../../../../assets/fotoFooter.svg";

export function FooterSession() {
	return (
		<Flex w={"100%"} h={"100%"} alignItems={"center"} px={"335px"} gap={"70px"} mb={"50px"}>
			<Image boxSize={"550px"} draggable={"false"} src={fotoFooter} />
			<Flex h={"350px"} flexDir={"column"} alignItems={"start"} justifyContent={"space-between"}>
				<Text color={"#FFFFFF50"} fontSize={"17px"} letterSpacing={"5px"}>
					SEU MENTOR
				</Text>
				<Text color={"#6F55F2"} fontSize={"32px"}>
					Quem é Marcos Rios
				</Text>
				<Text color={"#FFFFFF"} fontSize={"19px"}>
					Eu sou Rios, um expert em OB com anos de experiência neste mercado. Já estive no seu lugar, frustrado e
					desanimado com as perdas. Foi quando encontrei o Futuryxx que tudo mudou. Hoje, sou capaz de manter a
					consistência em minhas operações e estou aqui para compartilhar isso com você.
				</Text>

				<Button variant={"buttonVariant"} text={"QUERO ME INSCREVER GRATUITAMENTE"} fontWeight={"bold"} />
			</Flex>
		</Flex>
	);
}
