import React from "react";
import {
  Box,
  Tag,
  IconButton,
  Link,
  Text,
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
import Card from "../../common/components/Card";
import LanguageChip from "./LanguageChip";
import MotionContainer from "../../common/components/MotionContainer";

interface Props {
  title: string;
  githubUrl: string;
  description: string;
  languages: Language[];
  date: string;
  imageUrl: string;
  websiteUrl?: string;
}

const ProjectCard = (props: Props): JSX.Element => {
  const createLanguageChip = (language: Language, key: number): JSX.Element => {
    switch (language) {
      case "TypeScript":
        return LanguageChip("teal", "TypeScript", <SiTypescript />, key);
      case "React":
        return LanguageChip("blue", "React", <FaReact />, key);
      case "Flask":
        return LanguageChip("red", "Flask", <SiFlask />, key);
      case "JavaScript":
        return LanguageChip("orange", "JavaScript", <FaJs />, key);
      case "MongoDB":
        return LanguageChip("green", "MongoDB", <SiMongodb />, key);
      case "Node":
        return LanguageChip("cyan", "Node", <FaNodeJs />, key);
      case "Python":
        return LanguageChip("yellow", "Python", <FaPython />, key);
      default:
        return <Tag>Unkown</Tag>;
    }
  };

  const createCardHeader = (): JSX.Element => {
    return (
      <>
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
      </>
    );
  };

  return (
    <MotionContainer>
      <Card
        image={props.imageUrl}
        title={createCardHeader()}
        body={
          <>
            <Box display="flex" flexFlow="row wrap" mt={0}>
              {props.languages.map((language, index) =>
                createLanguageChip(language, index)
              )}
            </Box>
            <Text color={useColorModeValue("gray.500", "gray.200")}>
              {props.description}
            </Text>
          </>
        }
        imageAlt={props.title}
        date={props.date}
      />
    </MotionContainer>
  );
};

export default ProjectCard;
