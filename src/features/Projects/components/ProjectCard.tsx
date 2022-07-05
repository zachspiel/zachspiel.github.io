import React from "react";
import {
  Box,
  Badge,
  Tag,
  ThemeTypings,
  IconButton,
  Link,
  Text,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Language } from "../../common/types/types";
import {
  FaGithub,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiFlask, SiMongodb, SiTypescript } from "react-icons/si";

interface Props {
  title: string;
  githubUrl: string;
  description: string;
  languages: Language[];
  date: string;
  imageUrl?: string;
  websiteUrl?: string;
}

type ColorScheme = ThemeTypings["colorSchemes"];

const ProjectCard = (props: Props): JSX.Element => {
  const createTag = (
    colorScheme: ColorScheme,
    label: string,
    icon: JSX.Element,
    key: number
  ): JSX.Element => {
    return (
      <Badge
        display="flex"
        borderRadius="full"
        px="2"
        mr="2"
        mt={[1]}
        colorScheme={colorScheme}
        textTransform="none"
        key={`${label} - ${key}`}
      >
        {icon}
        {label}
      </Badge>
    );
  };
  const createLanguageChip = (language: Language, key: number): JSX.Element => {
    switch (language) {
      case "TypeScript":
        return createTag("teal", "TypeScript", <SiTypescript />, key);
      case "React":
        return createTag("blue", "React", <FaReact />, key);
      case "Flask":
        return createTag("red", "Flask", <SiFlask />, key);
      case "JavaScript":
        return createTag("orange", "JavaScript", <FaJs />, key);
      case "MongoDB":
        return createTag("green", "MongoDB", <SiMongodb />, key);
      case "Node":
        return createTag("cyan", "Node", <FaNodeJs />, key);
      case "Python":
        return createTag("yellow", "Python", <FaPython />, key);
      default:
        return <Tag>Unkown</Tag>;
    }
  };

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
      <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
        <img src={props.imageUrl} alt={props.title} />
      </Box>
      <Stack>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {props.title}
          <Link href={props.githubUrl} isExternal>
            <IconButton
              aria-label={`${props.title} GitHub`}
              icon={<FaGithub />}
              variant="ghost"
            />
          </Link>

          {props.websiteUrl && (
            <Link href={props.websiteUrl} isExternal>
              <IconButton
                aria-label={`${props.title} URL`}
                icon={<FaExternalLinkAlt />}
                variant="ghost"
              />
            </Link>
          )}
        </Heading>
        <Box display="flex" flexFlow="row wrap" mt={0}>
          {props.languages.map((language, index) =>
            createLanguageChip(language, index)
          )}
        </Box>
        <Text color={"gray.500"}>{props.description}</Text>
      </Stack>
      <Text color={"gray.500"} mt={2}>
        {props.date}
      </Text>
    </Box>
  );
};

export default ProjectCard;
