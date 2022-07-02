import React from "react";
import { Box, Badge, Tag, ThemeTypings, IconButton, Link, Text } from "@chakra-ui/react";
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
        mt={[1, 0]}
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
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      {props.imageUrl && (
        <img
          src={props.imageUrl}
          alt={`${props.title} screenshot`}
          className="project-image"
        />
      )}
      <Box p={[2, 6]}>
        <Box
          mt="1"
          fontWeight="semibold"
          display="flex"
          justifyContent="space-between"
          lineHeight="tight"
          noOfLines={1}
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
        </Box>

        <Box display="flex" flexFlow="row wrap" alignItems="baseline" mt="1" mb="1">
          {props.languages.map((language, index) => createLanguageChip(language, index))}
        </Box>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
        >
          {props.date}
        </Box>

        <Text fontSize="sm" maxW="400px">
          {props.description}
        </Text>
      </Box>
    </Box>
  );
};

export default ProjectCard;
