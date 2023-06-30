import styled from "styled-components";
import { WidthProps } from "styled-system";

export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  padding-left: 20px;
  display: block;
  font-size: 13px;
`;

export const Input = styled.input<WidthProps>`
  background: #ebf0f1;
  border: none;
  border-radius: 25px;
  height: 39px;
  color: #062443;
  width: calc(100% - 40px);
  padding-left: 20px;
  padding-right: 20px;
  &::placeholder {
    color: #062443;
    font-size: 14px;
  }
`;

export const Error = styled.span``;
