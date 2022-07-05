import {
  Box,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  company: string;
  companyLogo: string;
  date: string;
  bulletPoints: string[];
}

const ExperienceCard = (props: Props): JSX.Element => {
  return (
    <Box
      maxW={"445px"}
      w={"full"}
      bg={useColorModeValue("white", "whiteAlpha.100")}
      boxShadow={"md"}
      rounded={"md"}
      p={6}
      mb={2}
      overflow={"hidden"}
    >
      <Box
        h={"210px"}
        bg={"white"}
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
          src={props.companyLogo}
          alt={props.title}
          style={{ flexShrink: 0, minWidth: "100%", maxWidth: "100%" }}
        />
      </Box>
      <Stack>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {props.title} - {props.company}
        </Heading>

        <UnorderedList>
          {props.bulletPoints.map((bulletPoint, index) => {
            return (
              <ListItem key={index} mb={1}>
                {bulletPoint}
              </ListItem>
            );
          })}
        </UnorderedList>
      </Stack>
      <Text color={"gray.500"} mt={2}>
        {props.date}
      </Text>
    </Box>
  );
};

export default ExperienceCard;
