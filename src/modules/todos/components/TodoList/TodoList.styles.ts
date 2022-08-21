import styled from "styled-components";
import { getFromTheme } from "helpers/getFromTheme";

export const Container = styled.div`
  width: 500px;
  background-color: ${getFromTheme("colors", "secondary")};
  box-shadow: ${getFromTheme("colors", "stroke")} 0px 0px 0px 2px;
  border-radius: ${getFromTheme("borderRadius")};
`;

export const InputBlock = styled.div`
  width: 100%;
  height: fit-content;
`;

export const Input = styled.input`
  height: 60px;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing[3]};
  border: 0;
  font-size: ${getFromTheme("fontSize", "medium")};
  font-family: ${(getFromTheme("fonts", "default"),
  getFromTheme("fonts", "fallback"))};
  color: ${getFromTheme("colors", "heading")};
  border-radius: ${getFromTheme("borderRadius")};
  outline: 0;

  &::placeholder {
    font-size: ${getFromTheme("fontSize", "medium")};
    color: ${getFromTheme("colors", "text")};
    font-family: ${(getFromTheme("fonts", "default"),
    getFromTheme("fonts", "fallback"))};
  }
`;

export const List = styled.ul`
  li:first-child {
    border-top: 1px solid ${getFromTheme("colors", "stroke")};
  }
  li:not(:first-child),
  li:not(:last-child) {
    border-bottom: 1px solid ${getFromTheme("colors", "stroke")};
  }
  li:last-child {
    border-bottom: 1px solid ${getFromTheme("colors", "stroke")};
  }
`;
