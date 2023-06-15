import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

import GroupPageBg from "../../assets/groupPageBg.svg";
import PageIcon from "../../assets/logoHeader.svg";
import calendarIcon from "../../assets/calendarIcon.svg"

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
            gap={"2%"}
            pos={"relative"}
		>
			<Image w={"13%"} src={PageIcon} pos={"absolute"} top={"3%"} />

			<Text
                fontSize={"30px"}
                lineHeight={"50px"}
                color={"secondaryColor"}
                fontWeight={"bold"}
            >
                VOCÊ ESTÁ QUASE LÁ!
            </Text>

			<Text fontSize={"20px"} w={"50%"}>
                Só falta mais um passo para concluir a sua inscrição no <span style={{color: "#6F55F2"}}>Evento Futuro Lucrativo</span>, pra ter certeza que você vai receber todas as informações do evento, <span style={{color: "#6F55F2"}}>entre agora no meu grupo fechado do telegram.</span>
            </Text>

            <Flex gap={"5px"}>
                <Image src={calendarIcon} w={"17px"} />
                <Text fontSize={"18px"}>
                    De 10 de junho, às 12h, no Instagram. 
                </Text>
            </Flex>

            <Flex w={"50%"} bgColor={"#FFF2F4"} h={"50px"} borderRadius={"120px"} justifyContent={"space-between"}>
                <Box w={"80%"} h={"100%"} bgColor={"secondaryColor"} borderRadius={"120px"} />
                <Center w={"20%"} fontSize={"30px"} color={"secondaryColor"} fontWeight={"bold"}>
                    80%
                </Center>
            </Flex>

            <Text fontSize={"15px"} w={"50%"}>
                <span style={{fontWeight: "bold"}}>Segredo nosso:</span> nesse grupo, você vai receber conteúdo e informações previlegiadas. 
            </Text>

            <Center w={"40%"} h={"50px"} borderRadius={"74px"} bgImage={"linear-gradient(to right, #8A6AF8, #7A54F6)"} fontWeight={"bold"}>
                ICON
                ENTRAR NO GRUPO VIP AGORA
            </Center>

            <Text fontSize={"17px"} w={"35%"}>
                Não se preocupe, o grupo é silenciado e só minha equipe pode mandar mensagens
            </Text>
		</Flex>
	);
}
