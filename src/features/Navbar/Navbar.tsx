import React from "react";
import { IconButton } from "@chakra-ui/button";
import { Flex, Link } from "@chakra-ui/layout";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { ColorModeSwitcher } from "../common/components/ColorModeSwitcher";
import { GITHUB_URL, LINKEDIN_URL } from "../common/Constants";

const Navbar = (): JSX.Element => {
  return (
    <Flex justifyContent="flex-end" mt={2}>
      <Flex position="fixed">
        <Link href={GITHUB_URL} isExternal>
          <IconButton
            aria-label="Zach Spiel GitHub"
            icon={<FaGithub />}
            size="lg"
            variant="ghost"
          />
        </Link>
        <Link href={LINKEDIN_URL} isExternal>
          <IconButton
            aria-label="Zach Spiel LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
            variant="ghost"
          />
        </Link>
        <Link href="#contact-me">
          <IconButton
            aria-label="Contact me"
            icon={<FaEnvelope />}
            variant="ghost"
            size="lg"
          />
        </Link>
        <ColorModeSwitcher mr={2} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
