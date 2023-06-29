import { styled } from "styled-components";

interface RowProps {
  gap?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
`;
