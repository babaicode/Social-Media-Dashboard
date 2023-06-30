import styled from "styled-components";
import { MarginProps, margin } from "styled-system";

export const ButtonBox = styled.div<MarginProps>`
  display: flex;
  justify-content: space-between;
  grid-gap: 16px;
  ${margin};
`;
