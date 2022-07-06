import React from "react";
import { Box, useColorModeValue, Stack, Heading, Text } from "@chakra-ui/react";

interface Props {
  image: string;
  title: string | JSX.Element;
  body: JSX.Element;
  date: string;
  imageAlt?: string;
}
const Card = (props: Props): JSX.Element => {
  return (
    <Box
      maxW="445px"
      w="full"
      h="100%"
      bg={useColorModeValue("white", "#242526")}
      boxShadow="md"
      rounded="md"
      p={6}
      mb={2}
      overflow="hidden"
    >
      <Box
        h="210px"
        bg="white"
        mt={-6}
        mx={-6}
        mb={6}
        pos={"relative"}
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        style={{ overflow: "hidden" }}
      >
        <img
          src={props.image}
          alt={props.imageAlt ?? ""}
          style={{ flexShrink: 0, minWidth: "100%", maxWidth: "100%" }}
        />
      </Box>
      <Stack>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {props.title}
        </Heading>

        {props.body}
      </Stack>
      <Text color={"gray.500"} mt={2}>
        {props.date}
      </Text>
    </Box>
  );
};

export default Card;
