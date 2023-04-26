import {
  Container,
  Flex,
  Box,
  Heading,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  useToast,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsPerson } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import InputText from "./components/InputText";
import TextArea from "./components/TextArea";
import SocialButton from "./components/SocialButton";
import { GITHUB_URL, LINKEDIN_URL } from "../common/Constants";
import ContactInformation from "./components/ContactInformation";

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = (): JSX.Element => {
  const initialValues: ContactFormValues = { name: "", email: "", message: "" };
  const { colorMode } = useColorMode();
  const toast = useToast();

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const sendFormData = async (formData: ContactFormValues) => {
    toast({
      title: "Sending message...",
      status: "info",
      duration: 9000,
      isClosable: true,
    });

    let response = await fetch(
      "https://zachary-spielberger-portfolio-server.vercel.app/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formData),
      }
    );

    let result = await response.json();

    if (result.status === "SUCCESS") {
      toast({
        title: "Message Sent",
        description: "The message has been sent successfully!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Message Not Sent",
        description: "The message has not been sent. Please try again later.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden" id="contact-me">
      <Flex>
        <Box
          bg={useColorModeValue("#f4f4f4", "#242526")}
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 5, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box ms={[5, 0]}>
                  <Heading>Contact Me</Heading>
                  <ContactInformation />
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <SocialButton
                      link={GITHUB_URL}
                      label="Zachary Spielberger GitHub"
                      icon={<BsGithub size="28px" />}
                    />
                    <SocialButton
                      link={LINKEDIN_URL}
                      label="Zachary Spielberger LinkedIn"
                      icon={<FaLinkedin size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg={colorMode === "light" ? "white" : "none"} borderRadius="lg">
                  <Box m={[5, 8]} color={colorMode === "light" ? "#0B0E3F" : "white"}>
                    <VStack spacing={5}>
                      <Formik
                        initialValues={initialValues}
                        validationSchema={ContactFormSchema}
                        onSubmit={(values, actions) => {
                          sendFormData(values);
                          actions.resetForm();
                          actions.setSubmitting(false);
                        }}
                      >
                        {(props: FormikProps<ContactFormValues>) => (
                          <form onSubmit={props.handleSubmit}>
                            <InputText
                              form={props}
                              label="Your name"
                              formKey="name"
                              icon={<BsPerson color="gray.800" />}
                            />

                            <InputText
                              form={props}
                              label="Email"
                              formKey="email"
                              icon={<MdOutlineEmail color="gray.800" />}
                            />

                            <TextArea form={props} label="Message" formKey="message" />

                            <Button
                              variant="solid"
                              bg="#0D74FF"
                              color="white"
                              mt={2}
                              _hover={{}}
                              type="submit"
                            >
                              Send Message
                            </Button>
                          </form>
                        )}
                      </Formik>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default ContactForm;
