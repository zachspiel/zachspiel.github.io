import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
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
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <img src={props.companyLogo} alt={props.company} className="company-logo " />
      <Box p={[2, 6]}>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {props.title} - {props.company}
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
        <Box as="span" fontSize="sm">
          <UnorderedList>
            {props.bulletPoints.map((bulletPoint, index) => {
              return (
                <ListItem key={index} mb={1}>
                  {bulletPoint}
                </ListItem>
              );
            })}
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default ExperienceCard;
