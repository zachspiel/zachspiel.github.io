import { Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
}
const SectionHeader = (props: Props): JSX.Element => {
  return (
    <Heading
      color="primary.800"
      opacity="0.8"
      textAlign={["center", "center", "left", "left"]}
    >
      {props.title}
    </Heading>
  );
};

export default SectionHeader;
