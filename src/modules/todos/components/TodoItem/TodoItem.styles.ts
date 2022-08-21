import styled from "styled-components";
import { getFromTheme } from "helpers/getFromTheme";

export const DeleteTask = styled.span`
  visibility: hidden;
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

export const Container = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 70px;
  padding: 0 ${({ theme }) => theme.spacing[1]};
  list-style-type: none;

  &:hover > ${DeleteTask} {
    visibility: visible;
  }
`;

export const CheckBox = styled.input`
  position: relative;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: transparent;
    &::before {
      content: "✔️";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      height: 60%;
      filter: brightness(0) saturate(100%) invert(53%) sepia(27%)
        saturate(6931%) hue-rotate(124deg) brightness(94%) contrast(89%);
      border-radius: 50%;
    }
  }
`;

export const Description = styled.p<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  filter: ${({ completed }) => (completed ? "brightness(2)" : "brightness(1)")};
  font-size: ${getFromTheme("fontSize", "medium")};
  color: ${getFromTheme("colors", "heading")};
  font-family: ${getFromTheme("fonts", "default")},
    ${getFromTheme("fonts", "fallback")};
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
