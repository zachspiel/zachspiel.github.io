import React from "react";
import { Box, Heading, Flex, Stack, Image, Text } from "@chakra-ui/react";
import ExperienceSection from "./features/Experience/ExperienceSection";
import ProjectSection from "./features/Projects/ProjectSection";
import Footer from "./features/Footer/Footer";
import ContactForm from "./features/ContactForm/ContactForm";
import EducationSection from "./features/Education/EducationSection";
import Navbar from "./features/Navbar/Navbar";

export const App = () => (
  <>
    <Navbar />
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
        <Heading size="4xl" color="primary.800">
          Zachary Spielberger
        </Heading>
        <Text fontSize="xl">Sofware Developer at Microchip Technology</Text>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "40%" }} mb={{ base: 12, md: 0 }}>
        <Image
          src={"https://avatars.githubusercontent.com/u/20634543?v=4"}
          borderRadius="full"
          boxSize="250px"
          objectFit="cover"
          shadow="2xl"
        />
      </Box>
    </Flex>
    <EducationSection />
    <ExperienceSection />
    <ProjectSection />
    <ContactForm />
    <Footer />
  </>
);
