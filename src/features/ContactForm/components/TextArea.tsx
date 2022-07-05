import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Textarea } from "@chakra-ui/textarea";
import { FormikProps } from "formik";
import { ContactFormValues } from "../ContactForm";

interface Props {
  form: FormikProps<ContactFormValues>;
  label: string;
  formKey: keyof ContactFormValues;
}

const TextArea = (props: Props): JSX.Element => {
  const { form, formKey, label } = props;
  const meta = form.getFieldMeta(formKey);
  const isInvalid = meta.error !== undefined && meta.touched;

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel htmlFor={formKey}>{label}</FormLabel>
      {isInvalid && <FormErrorMessage>{meta.error ?? ""}</FormErrorMessage>}
      <Textarea
        borderColor="gray.300"
        _hover={{
          borderRadius: "gray.300",
        }}
        placeholder={`Enter ${formKey}`}
        onChange={form.handleChange}
        name={formKey}
        value={meta.value as string}
      />
    </FormControl>
  );
};

export default TextArea;
