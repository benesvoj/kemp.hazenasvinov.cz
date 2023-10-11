import { ReactComponent as IconCalendar } from "../../../assets/icons/icon-calendar.svg";
import { ReactComponent as IconCamp } from "../../assets/icons/icon-camp.svg";
import { ReactComponent as IconPeople } from "../../assets/icons/icon-people.svg";
import { ListItem } from "@chakra-ui/react";
import styled from "styled-components";

interface PriceBoxItemProps {
  title: string;
  data: string;
  icon?: string;
}

export const PriceBoxItem = (props: PriceBoxItemProps) => {
  return (
    <ListItem display={"flex"} gap={2} alignItems={"center"}>
      <StyledIcon>
        <IconCalendar />
      </StyledIcon>
      {props.title}: {props.data}
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
