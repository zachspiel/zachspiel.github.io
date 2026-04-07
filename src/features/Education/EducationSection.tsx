import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Stack, Heading, Text, Wrap } from "@chakra-ui/layout";
import SectionContainer from "../common/components/SectionContainer";

const EducationSection = (): JSX.Element => {
  return (
    <SectionContainer header="Education 🎓">
      <Wrap spacing={4} pb={4}>
        <Box
          className="flex contents-center gap-2 mb-10"
          maxW="445px"
          borderWidth="1px"
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
              Master of Science in Computer Science - Georgia Institute of
              Technology
            </Heading>
          </Stack>
          <Text color={"gray.500"} mt={2}>
            Expected December 2026
          </Text>
        </Box>
        <Box
          maxW="445px"
          className="flex contents-center gap-2 mb-10"
          borderWidth="1px"
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
      </Wrap>
    </SectionContainer>
  );
};

export default EducationSection;
