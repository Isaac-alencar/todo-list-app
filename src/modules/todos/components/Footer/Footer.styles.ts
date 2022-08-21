import { ReactNode } from "react";
import styled from "styled-components";
import { getFromTheme } from "helpers/getFromTheme";

type FilterProps = React.ComponentPropsWithoutRef<"button"> & {
  isEnabled: boolean;
  children: ReactNode;
};

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]};
`;

export const RemainingTasks = styled.div`
  font-size: ${getFromTheme("fontSize", "small")};
  color: ${getFromTheme("colors", "text")};
  font-family: ${(getFromTheme("fonts", "default"),
  getFromTheme("fonts", "fallback"))};
`;

export const FiltersContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const Filter = styled.button<FilterProps>`
  padding: ${({ theme }) => theme.spacing[1]};
  font-family: ${(getFromTheme("fonts", "default"),
  getFromTheme("fonts", "fallback"))};
  margin: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${getFromTheme("borderRadius")};
  border: 2px solid
    ${({ theme, isEnabled }) =>
      isEnabled ? getFromTheme("colors", "stroke")({ theme }) : "transparent"};
  color: ${getFromTheme("colors", "heading")};
  font-weight: 700;
  cursor: pointer;

  transition: border ease-in 150ms;
`;
