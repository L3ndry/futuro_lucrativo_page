import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

import GroupPageBg from "../../assets/groupPageBg.svg";
import PageIcon from "../../assets/logoHeader.svg";
import calendarIcon from "../../assets/calendarIcon.svg";
import telegramIcon from "../../assets/telegramIcon.svg"

export function GroupPage() {
	return (
		<Flex
			h={"100vh"}
			w={"100%"}
			bgImage={GroupPageBg}
			bgSize={"cover"}
			bgColor={"bgMainColor"}
			flexDir={"column"}
			alignItems={"center"}
			textAlign={"center"}
			color={"#FFFFFF"}
			justifyContent={"center"}
			pt={"3%"}
			gap={"2%"}
			pos={"relative"}
		>
			<Image w={{base: "30%", md: "13%"}} src={PageIcon} pos={"absolute"} top={"3%"} />

			<Text fontSize={{base: "1rem", md: "2rem"}} lineHeight={{base: "2vh", md: "6vh"}} color={"secondaryColor"} fontWeight={"bold"}>
				VOCÊ ESTÁ QUASE LÁ!
			</Text>

			<Text fontSize={{base: "0.8rem", md: "1.1rem"}} w={{base: "75%", md: "50%"}}>
				Só falta mais um passo para concluir a sua inscrição no{" "}
				<span style={{ color: "#6F55F2" }}>Evento Futuro Lucrativo</span>, pra ter certeza que você vai receber todas as
				informações do evento, <span style={{ color: "#6F55F2" }}>entre agora no meu grupo fechado do telegram.</span>
			</Text>

			<Center gap={"5px"}>
				<Image src={calendarIcon} w={"3%"} />
				<Text fontSize={{base: "0.8rem", md: "1rem"}}>De 10 de junho, às 12h, no Instagram.</Text>
			</Center>

			<Flex w={{base: "80%", md: "50%"}} bgColor={"#FFF2F4"} h={{base: "40px", md: "50px"}} borderRadius={"120px"} justifyContent={"space-between"}>
				<Box w={"80%"} h={"100%"} bgColor={"secondaryColor"} borderRadius={"120px"} />
				<Center w={"20%"} fontSize={{base: "1.4rem", md: "2rem"}} color={"secondaryColor"} fontWeight={"bold"}>
					80%
				</Center>
			</Flex>

			<Text fontSize={{base: "0.7rem", md: "1rem"}} w={{base: "80%", md: "50%"}}>
				<span style={{ fontWeight: "bold" }}>Segredo nosso:</span> nesse grupo, você vai receber conteúdo e informações
				previlegiadas.
			</Text>

			<Center
				w={{base: "80%", md: "40%"}}
				h={{base: "40px", md: "50px"}}
				borderRadius={"74px"}
				bgImage={"linear-gradient(to right, #8A6AF8, #7A54F6)"}
				gap={"2%"}
			>   
                <Image src={telegramIcon} w={{base: "8%", md: "4%"}} />
				<Text
                    fontWeight={"bold"}
                    fontSize={{base: "0.8rem", md: "1rem"}}
                >
                    ENTRAR NO GRUPO VIP AGORA
                </Text>
			</Center>

			<Text fontSize={{base: "0.8rem", md: "1rem"}} w={{base: "50%", md: "35%"}}>
				Não se preocupe, o grupo é silenciado e só minha equipe pode mandar mensagens
			</Text>
		</Flex>
	);
}
