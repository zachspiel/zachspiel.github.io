import React, { ReactNode } from "react";
import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";

interface Props {
  url: string;
  label: string;
  children: ReactNode;
}
const SocialButton = (props: Props): JSX.Element => {
  const { url, label, children } = props;
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={url}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default SocialButton;
