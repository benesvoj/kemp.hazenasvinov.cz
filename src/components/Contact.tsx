import {
  Box,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Button as StyledButton } from "./Button/Button";
import { sections } from "../utils/urls";
import styled from "styled-components";

export const Contact = () => {
  return (
    <Box id={sections.contact} bg={"gray.700"} h={"100vh"} display={"flex"}>
      <Container maxW={"7xl"} as={Stack} justifyContent={"center"}>
        <VStack>
          <Heading as={"h1"}>Kontaktujte nás</Heading>
          <Text>
            V pripade nejanostni nas nevahejte kontaktovat pro vice informaci
          </Text>
          <HStack w={350} justifyContent={"center"}>
            <StyledForm>
              <label>Email</label>
              <StyledInput
                id={"email"}
                type={"email"}
                placeholder={"email@email.cz"}
              />
              <label htmlFor={"email"}>Text zprávy</label>
              <StyledTextarea
                placeholder={"Zde nam muzete zanechat zpravu."}
              ></StyledTextarea>
              <StyledButtonWrapper>
                <StyledButton>Odeslat</StyledButton>
              </StyledButtonWrapper>
            </StyledForm>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius.primary};
  border: 1px solid ${(props) => props.theme.color.tertiary};
  background: none;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.color.primary};
  }
`;

const StyledTextarea = styled.textarea`
  padding: 0.5rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius.primary};
  border: 1px solid ${(props) => props.theme.color.tertiary};
  background: none;
  width: 100%;
  height: 10rem;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.color.primary};
  }
`;

const StyledButtonWrapper = styled.div`
  margin: 0 auto;
`;
