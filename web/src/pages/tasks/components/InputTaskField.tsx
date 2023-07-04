import { FC, InputHTMLAttributes } from "react";
import { useField } from "react-final-form";
import { FieldValidator } from "final-form";

import {
  Label,
  Error,
  TitleContainer,
  SocialMediaContainer,
  TagContainer,
  DescriptionContainer,
  TitleInput,
  SocialMediaInput,
  TagInput,
  DescriptionInput,
} from "../styles/InputTaskField";

type InputFieldProps = {
  typeOfField: "title" | "socialMedia" | "tag" | "description";
  label: string;
  name: string;
  showLabel?: boolean;
  validate?: FieldValidator<string>;
} & InputHTMLAttributes<HTMLInputElement>;

const InputTaskField: FC<InputFieldProps> = ({
  typeOfField,
  label,
  name,
  showLabel = false,
  ...rest
}) => {
  const { input, meta } = useField(name, {
    type: "input",
    validate: rest.validate,
  });

  const Container = {
    title: TitleContainer,
    socialMedia: SocialMediaContainer,
    tag: TagContainer,
    description: DescriptionContainer,
  }[typeOfField];

  const InputComponent = {
    title: TitleInput,
    socialMedia: SocialMediaInput,
    tag: TagInput,
    description: DescriptionInput,
  }[typeOfField];

  return (
    <Container>
      {showLabel && <Label>{label}</Label>}
      <InputComponent {...input} type="text" placeholder={label} {...rest} />
      {meta && <Error>{meta.error}</Error>}
    </Container>
  );
};

export default InputTaskField;
