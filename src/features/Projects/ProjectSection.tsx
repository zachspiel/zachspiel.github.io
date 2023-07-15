import React from "react";
import { Wrap } from "@chakra-ui/react";
import bobsBurgers from "../../images/bobs-burgers.png";
import secretSanta from "../../images/secretSanta.png";
import visualizingAntarctica from "../../images/visualizingAntarctica.png";
import ResearchPluginDemo from "../../images/researchPlugin.jpg";
import ProjectCard from "./components/ProjectCard";
import {
  BOBS_BURGERS_DESCRIPTION,
  SECRET_SANTA_DESCRIPTION,
  VISUALIZING_ANTARCTICA_DESCRIPTION,
  RESEARCH_PLUGIN_DESCRIPTION,
} from "./components/ProjectDescriptions";
import SectionContainer from "../common/components/SectionContainer";

const ProjectSection = (): JSX.Element => {
  return (
    <SectionContainer header="Projects 🚀">
      <Wrap spacing={4} pb={4}>
        <ProjectCard
          title="Bob's Burgers REST API"
          imageUrl={bobsBurgers}
          githubUrl="https://github.com/zachspiel/bobsburgers-api"
          websiteUrl="https://www.bobsburgersapi.com/"
          description={BOBS_BURGERS_DESCRIPTION}
          languages={["TypeScript", "React", "MongoDB", "Node"]}
          date={"December 2021 - Present"}
        />
        <ProjectCard
          title="Secret Santa Generator"
          imageUrl={secretSanta}
          githubUrl="https://github.com/zachspiel/secret-santa"
          description={SECRET_SANTA_DESCRIPTION}
          languages={["TypeScript", "React", "MongoDB", "Node"]}
          date={"November 2021 - January 2022"}
        />
        <ProjectCard
          title="Visualizing Antarctica"
          imageUrl={visualizingAntarctica}
          githubUrl="https://github.com/hlynch/glacies-indicium"
          description={VISUALIZING_ANTARCTICA_DESCRIPTION}
          languages={["JavaScript", "Python", "Flask"]}
          date={"August 2020 - May 2021"}
        />
        <ProjectCard
          title="Research Plugin"
          imageUrl={ResearchPluginDemo}
          githubUrl="https://github.com/zachspiel/ResearchPlugin"
          description={RESEARCH_PLUGIN_DESCRIPTION}
          languages={["JavaScript"]}
          date={"May 2020 - December 2020"}
        />
      </Wrap>
    </SectionContainer>
  );
};

export default ProjectSection;
