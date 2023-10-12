import React from 'react';
import { ListItem } from "@chakra-ui/react";
import { isNotNil, isNotNilOrEmpty } from "ramda-adjunct";
import styled, { useTheme } from "styled-components";

interface PriceBoxItemProps {
  title: string;
  data?: string;
  icon?: string;
}

export const PriceBoxItem = (props: PriceBoxItemProps) => {
  const theme = useTheme();

  if (!props.icon) return null;

  const IconComponent = theme.icons?.[props.icon];

  return (
    <ListItem display={"flex"} gap={2} alignItems={"center"}>
      <StyledIcon>
        {isNotNil(IconComponent) && <IconComponent data-iconkey={props.icon} />}
      </StyledIcon>
      {props.title}: {isNotNilOrEmpty(props.data) ? props.data : "N/A"}
    </ListItem>
  );
};

const StyledIcon = styled.div`
  display: inline-block;
  width: 1.2em;
  height: auto;
  color: ${(props) => props.theme.color.primary};
  filter: invert(84%) sepia(57%) saturate(3604%) hue-rotate(167deg)
    brightness(100%) contrast(101%);
`;
