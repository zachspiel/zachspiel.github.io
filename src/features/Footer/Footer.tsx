import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      bg={useColorModeValue("white", "black")}
      color={useColorModeValue("gray.700", "gray.200")}
      m={0}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction="row"
        spacing={4}
        justify={{ base: "center" }}
        align={{ base: "center" }}
      >
        <Text>© {currentYear} Zachary Spielberger. All rights reserved</Text>
      </Container>
    </Box>
  );
};

export default Footer;
