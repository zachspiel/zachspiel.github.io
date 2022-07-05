import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/input";
import { FormikProps } from "formik";
import { ContactFormValues } from "../ContactForm";

interface Props {
  form: FormikProps<ContactFormValues>;
  label: string;
  formKey: keyof ContactFormValues;
  icon: JSX.Element;
}

const InputText = (props: Props): JSX.Element => {
  const { form, formKey, label, icon } = props;
  const meta = form.getFieldMeta(formKey);
  const isInvalid = meta.error !== undefined && meta.touched;

  return (
    <FormControl
      isInvalid={(meta.touched ?? false) && meta.error !== undefined}
    >
      <FormLabel htmlFor={formKey}>{label}</FormLabel>
      {isInvalid && <FormErrorMessage>{meta.error ?? ""}</FormErrorMessage>}

      <InputGroup borderColor="#E0E1E7">
        <InputLeftElement pointerEvents="none" children={icon} />
        <Input
          type="text"
          value={meta.value as string}
          size="md"
          name={formKey}
          onChange={form.handleChange}
          placeholder={`Enter ${formKey}`}
        />
      </InputGroup>
    </FormControl>
  );
};

export default InputText;
