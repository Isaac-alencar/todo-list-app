import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.p`
  color: ${({ theme }) => theme.colors.stroke};
  font-family: ${({ theme }) => theme.fonts.default},
    ${({ theme }) => theme.fonts.fallback};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: ${({ theme }) => theme.spacing[5]};
`;
