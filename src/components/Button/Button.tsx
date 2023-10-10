import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <Button_styled>{props.children}</Button_styled>;
};

const Button_styled = styled.div`
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  padding: 8px 32px;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  font-weight: 600;
  &:hover {
    background: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.primary};
  }
`;
