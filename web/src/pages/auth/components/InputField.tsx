import React, { DOMAttributes, FC, InputHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { useField } from "react-final-form";
import { FieldValidator } from "final-form";
import { Container, Input, Label, Error } from "../styles/InputField";

type InputFieldProps = {
  label: string;
  name: string;
  showLabel?: boolean;
  validate?: FieldValidator<string>;
} & InputHTMLAttributes<HTMLInputElement> &
  Pick<DOMAttributes<HTMLInputElement>, "onBlur" | "onFocus" | "onMouseDown">;

const InputField: FC<InputFieldProps> = ({
  label,
  name,
  showLabel = false,
  type = "text",
  ...rest
}) => {
  const { t } = useTranslation();
  const { input, meta } = useField(name, {
    type: "input",
    validate: rest.validate,
  });

  return (
    <Container>
      {showLabel ? <Label>{label}</Label> : null}
      <Input
        {...input}
        type={type}
        placeholder={label}
        width={rest.width}
        {...rest}
      />
      {meta.touched && meta.error ? <Error>{t(meta.error)}</Error> : null}
    </Container>
  );
};

export default InputField;
