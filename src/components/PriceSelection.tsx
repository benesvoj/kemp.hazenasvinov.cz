import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCalendarDate } from "react-icons/bs";
import { FaCampground, FaCheckCircle, FaSortAmountDown } from "react-icons/fa";
import { GiAges } from "react-icons/gi";
import { ReactNode, useState } from "react";
import { isNotNilOrEmpty } from "ramda-adjunct";

export type PriceSelectionProps = {
  id: number;
  isPopular: boolean;
  title: string;
  description: string;
  price: number;
  currency: string;
  date: string;
  place: string;
  ageFrom: number;
  ageTo: number;
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
export const PriceSelection = (props: PriceSelectionProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({});

  const updateFormData = (e: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e: { preventDefault: () => void }) => {
    console.log("formData", formData);

    fetch("http://localhost:3001/api/participants", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then(function (response) {
      console.log("response", response);
      return response.json();
    });
    e.preventDefault();

    onClose();
  };

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
                {props.currency}
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={BsCalendarDate} color="green.500" />
                Termín: {props.date}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCampground} color="green.500" />
                Místo: {props.place}
              </ListItem>
              <ListItem>
                <ListIcon as={GiAges} color="green.500" />
                Věk: {props.ageFrom} - {props.ageTo} let
              </ListItem>
              {isNotNilOrEmpty(props.theme) ? (
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Téma: {props.theme}
                </ListItem>
              ) : null}
              {isNotNilOrEmpty(props.limitTo) ? (
                <ListItem>
                  <ListIcon as={FaSortAmountDown} color={"green.500"} />
                  Limit: {props.limitFrom} / {props.limitTo}
                </ListItem>
              ) : null}
              <ListItem>{props.description}</ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" onClick={onOpen}>
                Přihlas se
              </Button>
            </Box>
          </VStack>
        </Box>
      </PriceWrapper>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Přihláška</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid>
              <GridItem pb={"4"}>
                <FormControl>
                  <FormLabel>Email:</FormLabel>
                  <Input
                    type={"email"}
                    name={"email"}
                    placeholder={"email@email.cz"}
                    onChange={updateFormData}
                    isRequired
                  />
                </FormControl>
              </GridItem>
              <GridItem pb={"4"}>
                <FormControl>
                  <FormLabel>Telefon:</FormLabel>
                  <Input
                    type={"tel"}
                    name={"phone"}
                    placeholder={"777123456"}
                    onChange={updateFormData}
                  />
                </FormControl>
              </GridItem>
              <GridItem pb={"4"}>
                <FormControl>
                  <FormLabel>Jméno a příjmení dítěte:</FormLabel>
                  <Input
                    type={"text"}
                    name={"name"}
                    placeholder={"Josef Novák"}
                    onChange={updateFormData}
                  />
                </FormControl>
              </GridItem>
              <GridItem pb={"4"}>
                <FormControl>
                  <FormLabel>Datum narození:</FormLabel>
                  <Input
                    type={"date"}
                    name={"birthdate"}
                    onChange={updateFormData}
                  />
                </FormControl>
              </GridItem>
              <GridItem pb={"4"}>
                <FormControl>
                  <FormLabel>Třída ZŠ:</FormLabel>
                  <Input
                    type={"text"}
                    placeholder={"5.třída"}
                    name={"classRoom"}
                    onChange={updateFormData}
                  />
                </FormControl>
              </GridItem>
              <GridItem pb={"4"}>
                <FormControl>
                  <FormLabel>
                    Doplňující informace (alergie, jídlo, ...):
                  </FormLabel>
                  <Input
                    type={"text"}
                    placeholder={"Alergický na lepek, laktózu, jahody."}
                    name={"note"}
                    onChange={updateFormData}
                  />
                </FormControl>
              </GridItem>
              <GridItem pb={"4"}>
                <FormControl>
                  <FormLabel>Soustředění:</FormLabel>
                  <RadioGroup defaultValue="kemp">
                    <HStack spacing="24px">
                      <Radio
                        value="kemp"
                        name={"selectedCamp"}
                        onChange={updateFormData}
                      >
                        Svinovský kemp
                      </Radio>
                      <Radio
                        value="celostatko"
                        name={"selectedCamp"}
                        onChange={updateFormData}
                      >
                        Celostátní soustředení
                      </Radio>
                      <Radio
                        value="oboje"
                        name={"selectedCamp"}
                        onChange={updateFormData}
                      >
                        Oboje
                      </Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Zavrit
            </Button>
            <Button colorScheme="blue" type={"submit"} onClick={submit}>
              Odeslat
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
