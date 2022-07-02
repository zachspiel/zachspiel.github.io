import React from "react";
import { Flex, Stack, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import ExperienceCard from "./components/ExperienceCard";
import Microchip from "../../images/microchip.png";
import NAU from "../../images/nau.png";
import Outlier from "../../images/outlier.jpg";
import {
  MICROCHIP_DESCRIPTION,
  NAU_DESCRIPTION,
  OUTLIER_DESCRIPTION,
} from "./components/JobDescriptions";

const ExperienceSection = () => {
  return (
    <Flex px={8} mb={16}>
      <Stack spacing={4} pl={[0, 10]}>
        <Heading>Experience 👨‍💻</Heading>

        <Wrap>
          <WrapItem>
            <ExperienceCard
              title="Sofware Developer 1"
              company="Microchip Technology"
              date="January 2021 - Present"
              companyLogo={Microchip}
              bulletPoints={MICROCHIP_DESCRIPTION}
            />
          </WrapItem>
          <WrapItem>
            <ExperienceCard
              title="Undergraduate Researcher"
              company="Northern Arizona University"
              date="May 2020 - December 2020"
              companyLogo={NAU}
              bulletPoints={NAU_DESCRIPTION}
            />
          </WrapItem>
          <WrapItem>
            <ExperienceCard
              title="Web Developer Intern"
              company="Outlier Companies"
              date="May 2019 - March 2020"
              companyLogo={Outlier}
              bulletPoints={OUTLIER_DESCRIPTION}
            />
          </WrapItem>
        </Wrap>
      </Stack>
    </Flex>
  );
};

export default ExperienceSection;
