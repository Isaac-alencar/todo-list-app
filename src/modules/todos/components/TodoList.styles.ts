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

export const Filters = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const Filter = styled.button`
  font-weight: 700;
  font-size: ${getFromTheme("fontSize", "small")};
  color: ${getFromTheme("colors", "text")};
  margin: 0 ${({ theme }) => theme.spacing[2]};
  padding: 2px ${({ theme }) => theme.spacing[1]};
  border-radius: ${getFromTheme("borderRadius")};
  font-family: ${(getFromTheme("fonts", "default"),
  getFromTheme("fonts", "fallback"))};
  transition: border ease-in 150ms;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border: 2px solid ${getFromTheme("colors", "stroke")};
  }
`;
