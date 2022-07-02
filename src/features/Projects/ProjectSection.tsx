import React from "react";
import { Flex, Stack, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import BobsBurgersAPI from "../../images/bobsBurgers.png";
import secretSanta from "../../images/secretSanta.png";
import visualizingAntarctica from "../../images/visualizingAntarctica.png";
import ResearchPluginDemo from "../../images/researchPlugin.png";
import ProjectCard from "./components/ProjectCard";
import {
  BOBS_BURGERS_DESCRIPTION,
  SECRET_SANTA_DESCRIPTION,
  VISUALIZING_ANTARCTICA_DESCRIPTION,
  RESEARCH_PLUGIN_DESCRIPTION,
} from "./components/ProjectDescriptions";

const ProjectSection = (): JSX.Element => {
  return (
    <Flex direction="column" px={8} mb={16}>
      <Stack spacing={4} pl={[0, 10]}>
        <Heading>Projects 🚀</Heading>
        <Wrap>
          <WrapItem>
            <ProjectCard
              title="Bob's Burgers REST API"
              imageUrl={BobsBurgersAPI}
              githubUrl="https://github.com/zachspiel/bobsburgers-api"
              websiteUrl="https://www.bobsburgersapi.com/"
              description={BOBS_BURGERS_DESCRIPTION}
              languages={["TypeScript", "React", "MongoDB", "Node"]}
              date={"December 2021 - Present"}
            />
          </WrapItem>
          <WrapItem>
            <ProjectCard
              title="Secret Santa Generator"
              imageUrl={secretSanta}
              githubUrl="https://github.com/zachspiel/ResearchPlugin"
              description={SECRET_SANTA_DESCRIPTION}
              languages={["TypeScript", "React", "MongoDB", "Node"]}
              date={"November 2021 - January 2022"}
            />
          </WrapItem>
          <WrapItem>
            <ProjectCard
              title="Visualizing Antarctica"
              imageUrl={visualizingAntarctica}
              githubUrl="https://github.com/hlynch/glacies-indicium"
              description={VISUALIZING_ANTARCTICA_DESCRIPTION}
              languages={["JavaScript", "Python", "Flask"]}
              date={"August 2020 - May 2021"}
            />
          </WrapItem>
          <WrapItem>
            <ProjectCard
              title="Research Plugin"
              imageUrl={ResearchPluginDemo}
              githubUrl="https://github.com/zachspiel/ResearchPlugin"
              description={RESEARCH_PLUGIN_DESCRIPTION}
              languages={["JavaScript"]}
              date={"May 2020 - December 2020"}
            />
          </WrapItem>
        </Wrap>
      </Stack>
    </Flex>
  );
};

export default ProjectSection;
