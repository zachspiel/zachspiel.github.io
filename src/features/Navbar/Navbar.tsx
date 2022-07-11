import React from "react";
import { IconButton } from "@chakra-ui/button";
import { Flex, Link } from "@chakra-ui/layout";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { ColorModeSwitcher } from "../common/components/ColorModeSwitcher";
import { GITHUB_URL, LINKEDIN_URL } from "../common/Constants";
import { Hide } from "@chakra-ui/react";

const Navbar = (): JSX.Element => {
  const createNavButton = (label: string, icon: JSX.Element, link: string) => {
    const isInternal = link.includes("#");

    return (
      <Link href={link} isExternal={!isInternal}>
        <IconButton aria-label={label} icon={icon} size="lg" variant="ghost" />
      </Link>
    );
  };

  return (
    <Flex justifyContent="flex-end" mt={2}>
      <Flex position="fixed">
        <Hide below="md">
          {createNavButton("Zachary Spielberger GitHub", <FaGithub />, GITHUB_URL)}
          {createNavButton("Zachary Spielberger LinkedIn", <FaLinkedin />, LINKEDIN_URL)}
          {createNavButton("Contact me", <FaEnvelope />, "#contact-me")}
        </Hide>
        <ColorModeSwitcher mr={2} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
