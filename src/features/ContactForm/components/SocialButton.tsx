import React from "react";
import { Link, IconButton } from "@chakra-ui/react";

interface Props {
  link: string;
  label: string;
  icon: JSX.Element;
}

const SocialButton = (props: Props): JSX.Element => {
  const { link, label, icon } = props;

  return (
    <Link href={link} isExternal>
      <IconButton
        aria-label={label}
        variant="ghost"
        size="lg"
        isRound
        _hover={{ bg: "#0D74FF", color: "#ffffff" }}
        icon={icon}
      />
    </Link>
  );
};

export default SocialButton;
