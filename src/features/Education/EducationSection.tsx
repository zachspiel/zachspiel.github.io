import React from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Stack, Heading, Text } from "@chakra-ui/layout";
import SectionContainer from "../common/components/SectionContainer";
import MotionContainer from "../common/components/MotionContainer";

const EducationSection = (): JSX.Element => {
  return (
    <SectionContainer header="Education 🎓">
      <MotionContainer>
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "#242526")}
          boxShadow={"md"}
          rounded={"md"}
          p={6}
          mb={2}
          overflow={"hidden"}
        >
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              Bachelor of Science in Computer Science - Northern Arizona
              University
            </Heading>
          </Stack>
          <Text color={"gray.500"} mt={2}>
            May 2021
          </Text>
        </Box>
      </MotionContainer>
    </SectionContainer>
  );
};

export default EducationSection;
