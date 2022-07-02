import { Link, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

interface Props {
  mailTo: string;
}

const MailToButton = (props: Props): JSX.Element => {
  return (
    <Link
      href="#"
      onClick={(e) => {
        window.location.href = props.mailTo;
        e.preventDefault();
      }}
    >
      <IconButton
        aria-label={props.mailTo}
        icon={<FaEnvelope />}
        variant="ghost"
        size="lg"
      />
    </Link>
  );
};

export default MailToButton;
