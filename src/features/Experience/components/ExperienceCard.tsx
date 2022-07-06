import React from "react";
import { ListItem, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import Card from "../../common/components/Card";
import MotionContainer from "../../common/components/MotionContainer";

interface Props {
  title: string;
  company: string;
  companyLogo: string;
  date: string;
  bulletPoints: string[];
}

const ExperienceCard = (props: Props): JSX.Element => {
  const textColor = useColorModeValue("gray.500", "gray.200");

  const createBulletPoints = (): JSX.Element => {
    return (
      <UnorderedList>
        {props.bulletPoints.map((bulletPoint, index) => {
          return (
            <ListItem key={index} mb={1} color={textColor}>
              {bulletPoint}
            </ListItem>
          );
        })}
      </UnorderedList>
    );
  };
  return (
    <MotionContainer>
      <Card
        title={`${props.title} - ${props.company}`}
        image={props.companyLogo}
        body={createBulletPoints()}
        date={props.date}
      />
    </MotionContainer>
  );
};

export default ExperienceCard;
