import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { urls } from "../utils/urls";

export const Contact = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} id={"contact"}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12} h={"100vh"}>
        <Flex
          h={"100%"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack>
            <Stack spacing={0} align={"center"}>
              <Heading as={"h1"}>Kontaktujte nás</Heading>
            </Stack>
            <Text>
              V pripade nejanostni nas nevahejte kontaktovat pro vice informaci
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: 10, md: 4, lg: 10 }}
            >
              <Grid w={"100%"}>
                <GridItem pb={4}>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type={"email"} placeholder={"email@email.cz"} />
                  </FormControl>
                </GridItem>
                <GridItem pb={4}>
                  <FormControl>
                    <FormLabel>Text zpravy:</FormLabel>
                    <Textarea placeholder={"Zde nam muzete zanechat zpravu."} />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <Button colorScheme={"blue"}>Odeslat</Button>
                </GridItem>
              </Grid>
            </Stack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
