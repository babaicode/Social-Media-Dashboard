import { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";
import { variant } from "styled-system";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

type ButtonProps = {
  variant: ButtonVariant;
  size: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonBase = styled.button<ButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${() =>
    variant({
      variants: {
        primary: {
          color: "white",
          backgroundColor: "#1ea7fd",
        },
        secondary: {
          color: "#333",
          backgroundColor: "transparent",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
        },
      },
    })}
  ${() =>
    variant({
      prop: "size",
      variants: {
        small: {
          fontSize: "12px",
          padding: "10px 16px",
        },
        medium: {
          fontSize: "14px",
          padding: "11px 20px",
        },
        large: {
          fontSize: "16px",
          padding: "12px 24px",
        },
      },
    })}
`;

const Button: FC<Partial<ButtonProps>> = ({
  children,
  variant = "primary",
  size = "medium",
  ...rest
}) => {
  return (
    <ButtonBase variant={variant} size={size} {...rest}>
      {children}
    </ButtonBase>
  );
};

export default Button;
