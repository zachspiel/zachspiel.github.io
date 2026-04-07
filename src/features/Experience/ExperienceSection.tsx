import { Wrap } from "@chakra-ui/react";
import ExperienceCard from "./components/ExperienceCard";
import Microchip from "../../images/microchip.png";
import NAU from "../../images/nau.jpg";
import Outlier from "../../images/outlier.jpeg";
import Paze from "../../images/paze.png";
import {
  MICROCHIP_DESCRIPTION,
  NAU_DESCRIPTION,
  OUTLIER_DESCRIPTION,
} from "./components/JobDescriptions";
import SectionContainer from "../common/components/SectionContainer";

const ExperienceSection = () => {
  return (
    <SectionContainer header="Experience 👨‍💻">
      <Wrap spacing={4} pb={4}>
        <ExperienceCard
          title="Sofware Developer II"
          company="Paze"
          date="March 2025 - Present"
          companyLogo={Paze}
          bulletPoints={[]}
          imageStyles={{
            maxWidth: "200px",
            maxHeight: "100px",
          }}
        />
        <ExperienceCard
          title="Sofware Developer II"
          company="Microchip Technology"
          date="January 2021 - March 2025"
          companyLogo={Microchip}
          bulletPoints={MICROCHIP_DESCRIPTION}
        />
        <ExperienceCard
          title="Undergraduate Researcher"
          company="Northern Arizona University"
          date="May 2020 - December 2020"
          companyLogo={NAU}
          bulletPoints={NAU_DESCRIPTION}
        />
        <ExperienceCard
          title="Web Developer Intern"
          company="Outlier Companies"
          date="May 2019 - March 2020"
          companyLogo={Outlier}
          bulletPoints={OUTLIER_DESCRIPTION}
        />
      </Wrap>
    </SectionContainer>
  );
};

export default ExperienceSection;
