import { Flex, Image, Text, Input } from "@chakra-ui/react";
import { Button } from "../components/Button";

import logoHeader from "../assets/logoHeader.svg";
import mobileHeaderBackground from "../assets/mobile/headerBackground.svg";
import desktopHeaderBackground from "../assets/desktop/headerBackground.svg";

export function MainPage() {
	return (
		<Flex flexDir={"column"} w={"100vw"} h={"100vh"} bgColor={"bgMainColor"} overflowX={"hidden"}>
			<Flex
				flexDir={"column"}
				bgImage={{ base: mobileHeaderBackground, md: desktopHeaderBackground }}
				bgSize={"cover"}
				bgRepeat={"no-repeat"}
				h={"100%"}
				w={"100%"}
				alignItems={"start"}
			>
				<Flex
					// bgColor={"red"}
					flexDir={"column"}
					justifyContent={"space-between"}
					w={"600px"}
					h={"100%"}
					ml={"195px"}
					pt={"60px"}
				>
					<Image
						// bgColor={"red"}
						src={logoHeader}
						alt={"Logo Header"}
						w={"37%"}
						h={"150px"}
						// mb={"40px"}
					/>

					<Text
						fontSize={"32px"}
						lineHeight={"55px"}
						color={"white"}
						// mb={"40px"}
					>
						Conquiste o mercado de OB com uma ferramenta que combina IA e anos de experiência de mercado para obter
						resultados automaticamente
					</Text>

					<Text color={"text.grey"} lineHeight={"36.58px"} fontSize={"19px"}>
						Você está cansado de tomar decisões difíceis e muitas vezes erradas que resultam em perdas no mercado de OB?
						Já pensou se existisse uma ferramenta que pudesse fazer essas operações por você de forma inteligente e
						acertiva? Não apenas prometendo, mas te auxiliando na jornada até o sucesso?
					</Text>

					<Text color={"white"} lineHeight={"36.58px"} fontSize={"19px"}>
						Apresento a você o Futuryxx 2.0, uma ferramenta revolucionária que vai mudar a maneira como você negocia no
						mercado de OB.
					</Text>

					<Flex>
						Icon
						<Text fontSize={"17px"} color={"white"}>
							De 10 de junho, às 12h, no Instagram.
						</Text>
					</Flex>

					<Input
						variant={"outline"}
						placeholder={"Seu E-Mail"}
						bgColor={"inputColor"}
						border={"1px solid #6F55F2"}
						h={"60px"}
					/>

					<Button text={"QUERO ME INSCREVER GRATUITAMENTE"} />
				</Flex>
			</Flex>
		</Flex>
	);
}
