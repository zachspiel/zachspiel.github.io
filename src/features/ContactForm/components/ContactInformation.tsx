import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import { MdEmail, MdLocationOn } from "react-icons/md";

const ContactInformation = (): JSX.Element => {
  return (
    <Stack mt={2} spacing={4} display="flex" justifyContent="flex-start">
      <Box _hover={{}} display="flex" mt={3}>
        <MdEmail
          color="#1970F1"
          size="20px"
          style={{ marginTop: "0.2rem", marginRight: "0.5rem" }}
        />
        zachspielberger@gmail.com
      </Box>

      <Box _hover={{}} display="flex" mt={3}>
        <MdLocationOn
          color="#1970F1"
          size="20px"
          style={{ marginTop: "0.2rem", marginRight: "0.5rem" }}
        />
        Phoenix, Arizona
      </Box>
    </Stack>
  );
};

export default ContactInformation;
