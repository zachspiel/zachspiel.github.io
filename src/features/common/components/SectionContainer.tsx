import React from "react";
import { Flex, Stack, Heading } from "@chakra-ui/react";

interface Props {
  header: string;
  children: JSX.Element;
}

const SectionContainer = (props: Props): JSX.Element => {
  return (
    <Flex px={16} mb={16}>
      <Stack spacing={4}>
        <Heading>{props.header}</Heading>
        {props.children}
      </Stack>
    </Flex>
  );
};

export default SectionContainer;
