import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";
import { Button as StyledButton } from "./Button/Button";

export const Hero = () => {
  return (
    <Container maxW={"3xl"} h={"100vh"}>
      <Flex
        h={"100%"}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Sportovní kemp <br />
            <Text as={"span"} color={"green.400"}>
              házenkářského oddílu <br />
              TJ Sokol Svinov
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Týdenní kemp plný zážitků, nových přátel, sportovních aktivit a
            výletů! Poznej něco nového s naší partou.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <StyledButton>
              <Link
                to={"#pricing"}
                scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
              >
                Přihlas se
              </Link>
            </StyledButton>
            <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
              <Link
                to={"#aboutme"}
                scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
              >
                Chceš se dozvědět více?
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Container>
  );
};
