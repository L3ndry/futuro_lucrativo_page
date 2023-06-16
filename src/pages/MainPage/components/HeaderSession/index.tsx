import { Flex, Image, Text, Input } from "@chakra-ui/react";
import { Button } from "../../../../components/Button";

import logoHeader from "../../../../assets/logoHeader.svg";
import mobileHeaderBackground from "../../../../assets/mobile/headerBackground.svg";
import desktopHeaderBackground from "../../../../assets/desktop/headerBackground.svg";
import calendarIcon from "../../../../assets/calendarIcon.svg";

export function HeaderSession() {
	return (
		<Flex
			// bgColor={"red"}
			flexDir={"column"}
			bgImage={{ base: mobileHeaderBackground, md: desktopHeaderBackground }}
			bgSize={{base: "contain", md: "cover"}}
			bgRepeat={"no-repeat"}
			bgPos={{base: "center 4vw", md: "center"}}
			h={"100%"}
			w={"100%"}
			alignItems={{base: "center", md: "start"}}
            pt={"3%"}
		>
			<Flex
				// bgColor={"red"}
				flexDir={"column"}
				justifyContent={"space-between"}
                alignItems={{base: "center", md: "start"}}
				w={{base: "85%", md: "38%"}}
				h={"100%"}
				ml={{base: "0", md: "7%"}}
				py={"1.5%"}
                gap={"5px"}
			>
				<Image
					// bgColor={"red"}
					src={logoHeader}
					alt={"Logo Header"}
					w={"37%"}
					h={"37%"}
					mb={{base: "0px", md: "10px"}}
					draggable={"false"}
				/>

				<Text mt={{base: "65vh", md: "0"}} fontSize={{base: "1.2rem", md: "1.8rem"}} lineHeight={{base: "4.5vh", md: "5.5vh"}} color={"white"} mb={"25px"}>
					Conquiste o mercado de OB com uma ferramenta que combina IA e anos de experiência de mercado para obter
					resultados automaticamente
				</Text>

				<Text color={"text.grey"} lineHeight={{base: "3vh", md: "3.7vh"}} fontSize={{base: "0.8rem", md: "1rem"}}>
					Você está cansado de tomar decisões difíceis e muitas vezes erradas que resultam em perdas no mercado de OB?
					Já pensou se existisse uma ferramenta que pudesse fazer essas operações por você de forma inteligente e
					acertiva? Não apenas prometendo, mas te auxiliando na jornada até o sucesso?
				</Text>

				<Text color={"white"} lineHeight={{base: "3vh", md: "3.7vh"}} fontSize={{base: "0.8rem", md: "1rem"}} mb={"20px"}>
					Apresento a você o Futuryxx 2.0, uma ferramenta revolucionária que vai mudar a maneira como você negocia no
					mercado de OB.
				</Text>

				<Flex alignItems={"center"} gap={"3%"} mb={"20px"}>
					<Image src={calendarIcon} boxSize={"20px"} />
					<Text fontSize={{base: "0.8rem", md: "1rem"}} color={"white"} whiteSpace={"nowrap"}>
						De 10 de junho, às 12h, no Instagram.
					</Text>
				</Flex>

				<Input
					variant={"outline"}
					placeholder={"Seu E-Mail"}
					bgColor={"inputColor"}
					border={"1px solid #6F55F2"}
					h={{base: "45px", md: "60px"}}
					borderRadius={"75px"}
                    mb={"20px"}
                    _placeholder={{fontSize: {base: "0.8rem", md: "1rem"}}}
				/>

				<Button text={"QUERO ME INSCREVER GRATUITAMENTE"} fontSize={{base: "0.8rem", md: "1rem"}} fontWeight={"bold"} h={{base: "45px", md: "60px"}} />
			</Flex>
		</Flex>
	);
}
