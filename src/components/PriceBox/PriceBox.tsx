import {
  Box,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle, FaSortAmountDown } from "react-icons/fa";
import { ReactComponent as IconCalendar } from "../../assets/icons/icon-calendar.svg";
import { ReactComponent as IconCamp } from "../../assets/icons/icon-camp.svg";
import { ReactComponent as IconPeople } from "../../assets/icons/icon-people.svg";
import { PriceBoxItem } from "./components/PriceBoxItem";
import { ReactNode } from "react";
import { Button as StyledButton } from "../Button/Button";
import { isNotNilOrEmpty } from "ramda-adjunct";
import styled from "styled-components";

export type PriceSelectionProps = {
  id?: number;
  isPopular?: boolean;
  title?: string;
  description?: string;
  price?: number;
  dateFrom?: number;
  dateTo?: string;
  place?: string | null;
  ageFrom?: number;
  ageTo?: number;
  theme?: string | null;
  limitFrom?: number | null;
  limitTo?: number | null;
};

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}
export const PriceBox = (props: PriceSelectionProps) => {
  return (
    <>
      <PriceWrapper>
        <Box position="relative">
          {props.isPopular ? (
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("red.300", "red.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Populární
              </Text>
            </Box>
          ) : null}
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              {props.title}
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="5xl" fontWeight="900">
                {props.price}
              </Text>
              <Text fontSize="3xl" fontWeight="600">
                Kč
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <PriceBoxItem
                title={"Termín"}
                data={`${props.dateFrom} - ${props.dateTo}`}
              />
              {isNotNilOrEmpty(props.place) ? (
                <ListItem>
                  <StyledIcon>
                    <IconCamp />
                  </StyledIcon>
                  Místo: {props.place}
                </ListItem>
              ) : null}
              <ListItem>
                <StyledIcon>
                  <IconPeople />
                </StyledIcon>
                Věk: {props.ageFrom} - {props.ageTo} let
              </ListItem>
              {isNotNilOrEmpty(props.theme) ? (
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Téma: {props.theme}
                </ListItem>
              ) : null}
              {isNotNilOrEmpty(props.limitTo || props.limitFrom) ? (
                <ListItem>
                  <ListIcon as={FaSortAmountDown} color={"green.500"} />
                  Počet přihlášených: {props.limitFrom} z {props.limitTo}
                </ListItem>
              ) : null}
              <ListItem>{props.description}</ListItem>
            </List>
            <Box pt={7}>
              <StyledButton>Přihlas se</StyledButton>
            </Box>
          </VStack>
        </Box>
      </PriceWrapper>
    </>
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
