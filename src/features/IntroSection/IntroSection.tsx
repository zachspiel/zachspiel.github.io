import React from "react";
import { Flex, Stack, Heading, Box, Text, Image } from "@chakra-ui/react";
import portraitImage from "../../images/portrait.jpg";
import MotionContainer from "../common/components/MotionContainer";

const IntroSection = (): JSX.Element => {
  return (
    <Flex
      align={"center"}
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column", md: "row" }}
      minH="90vh"
      px={8}
    >
      <Stack
        spacing={4}
        pl={10}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <MotionContainer>
          <Heading size="4xl" color="primary.800">
            Zachary Spielberger
          </Heading>
        </MotionContainer>
        <Text fontSize="xl">Sofware Developer at Microchip Technology</Text>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "40%" }} mb={{ base: 12, md: 0 }}>
        <Image
          src={portraitImage}
          borderRadius="full"
          boxSize="250px"
          objectFit="cover"
          shadow="2xl"
        />
      </Box>
    </Flex>
  );
};

export default IntroSection;
