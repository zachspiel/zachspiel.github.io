import {
  Container,
  Flex,
  Box,
  Heading,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  useToast,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsPerson } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import InputText from "./components/InputText";
import TextArea from "./components/TextArea";

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
    let response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formData),
    });

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
    <Container
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      id="contact-me"
    >
      <Flex>
        <Box
          bg={useColorModeValue("black", "whiteAlpha.100")}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact Me</Heading>

                  <Stack
                    mt={2}
                    spacing={4}
                    display="flex"
                    justifyContent="flex-start"
                  >
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
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<FaLinkedin size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box
                  bg={colorMode === "light" ? "white" : "none"}
                  borderRadius="lg"
                >
                  <Box
                    m={8}
                    color={colorMode === "light" ? "#0B0E3F" : "white"}
                  >
                    <VStack spacing={5}>
                      <Formik
                        initialValues={initialValues}
                        validationSchema={ContactFormSchema}
                        onSubmit={(values, actions) => {
                          sendFormData(values);
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

                            <TextArea
                              form={props}
                              label="Message"
                              formKey="message"
                            />

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
