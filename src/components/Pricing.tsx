import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PriceSelection } from "./PriceSelection";
import { SelectedCamp } from "../types/types";
import { getCamps } from "../utils/campList";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

export const Pricing = () => {
  const camps = getCamps();

  const getParticipantsCount = (id: number) => {
    const [count, setCount] = useState<SelectedCamp[]>([]);

    const getParticipants = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/participants`,
        {
          params: { selectedCamp: id },
        }
      );
      setCount(data);
      console.log("getParticipants", data);
    };

    useEffect(() => {
      getParticipants();
    }, []);

    return count.length;
  };

  return (
    <Box py={12} id={"pricing"} h={"100vh"}>
      <Container maxW={"3xl"} h={"100vh"}>
        <Flex
          h={"100%"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack>
            <VStack spacing={2} textAlign="center">
              <Heading as="h1" fontSize="4xl">
                Kempy a soustředění
              </Heading>
              <Text fontSize="lg" color={"gray.500"}>
                Svinovský kemp je pořádán pod hlavičkou oddílu TJ Sokol Svinov,
                celostátní soustředění pod komisi mládeže Svazu národní házené.{" "}
                <br />
                Na obou turnusech má vždy oddíl TJ Sokol Svinov své zástupce a
                to jak z řad vedoucích, tak zúčastněných.
              </Text>
            </VStack>
            <Stack
              direction={{ base: "column", md: "row" }}
              textAlign="center"
              justify="center"
              spacing={{ base: 4, lg: 10 }}
              py={10}
            >
              {camps.map((camp) => {
                return (
                  <PriceSelection
                    key={camp.id}
                    id={camp.id}
                    isPopular={camp.isPopular}
                    title={camp.title}
                    description={camp.description}
                    price={camp.price}
                    currency={camp.currency}
                    date={camp.date}
                    place={camp.place}
                    ageFrom={camp.ageFrom}
                    ageTo={camp.ageTo}
                    limitFrom={getParticipantsCount(camp.id)}
                  />
                );
              })}
            </Stack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
