import React from "react";
import { Badge, ThemeTypings } from "@chakra-ui/react";

const LanguageChip = (
  colorScheme: ThemeTypings["colorSchemes"],
  label: string,
  icon: JSX.Element,
  chipKey: number
): JSX.Element => {
  return (
    <Badge
      display="flex"
      borderRadius="full"
      px="2"
      mr="2"
      mt={[1]}
      colorScheme={colorScheme}
      textTransform="none"
      key={`${label} - ${chipKey}`}
    >
      {icon}
      {label}
    </Badge>
  );
};

export default LanguageChip;
