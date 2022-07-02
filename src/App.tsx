import React from "react";
import {
  Box,
  Heading,
  Flex,
  Stack,
  Image,
  Text,
  IconButton,
  Link,
  Container,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./features/common/components/ColorModeSwitcher";
import ExperienceSection from "./features/Experience/ExperienceSection";
import MailToButton from "./features/common/components/MailToButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProjectSection from "./features/Projects/ProjectSection";

export const App = () => (
  <Container maxW="100%">
    <Flex justifyContent="flex-end" mt={2} position="sticky">
      <Link href="https://github.com/zachspiel" isExternal>
        <IconButton
          aria-label="Zach Spiel GitHub"
          icon={<FaGithub />}
          size="lg"
          variant="ghost"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/zachary-spielberger/" isExternal>
        <IconButton
          aria-label="Zach Spiel LinkedIn"
          icon={<FaLinkedin />}
          size="lg"
          variant="ghost"
        />
      </Link>
      <MailToButton mailTo="mailto:zachspielberger@gmail.com" />
      <ColorModeSwitcher mr={2} />
    </Flex>
    <Flex
      align={"center"}
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column", md: "row" }}
      minH="90vh"
      px={8}
    >
      <Stack spacing={4} pl={10} align={["center", "center", "flex-start", "flex-start"]}>
        <Heading size="4xl" color="primary.800">
          Zachary Spielberger
        </Heading>
        <Text fontSize="xl">💻 Sofware Developer at Microchip Technology</Text>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image
          src={"https://avatars.githubusercontent.com/u/20634543?v=4"}
          borderRadius="full"
          boxSize="250px"
          objectFit="cover"
          shadow="2xl"
        />
      </Box>
    </Flex>
    <Flex px={8} mb={16}>
      <Stack spacing={4} pl={[0, 10]}>
        <Heading>Education 🎓</Heading>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p={[2, 6]}>
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
              Bachelor of Science in Computer Science - Northern Arizona University
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              May 2021
            </Box>
          </Box>
        </Box>
      </Stack>
    </Flex>
    <ExperienceSection />
    <ProjectSection />
  </Container>
);
