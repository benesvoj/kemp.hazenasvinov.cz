import { Box, Flex, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { HashLink as Link } from "react-router-hash-link";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { getMenuItems } from "../utils/urls";
import React, { useState } from "react";

export const Header = () => {
  const [display, changeDisplay] = useState("none");

  return (
    <Box
      position={"fixed"}
      top={0}
      overflow={"hidden"}
      w={"100%"}
      bg={"gray.700"}
      zIndex={10}
      borderBottom={"1px solid grey"}
    >
      <HStack
        w={["90%", "60%", "60%", "60%"]}
        justifyContent={"space-between"}
        marginX={"auto"}
        marginY={0}
      >
        <Logo />

        <Stack
          direction={"row"}
          align={"center"}
          gap={"16"}
          display={["none", "none", "flex", "flex"]}
        >
          <Menu />
        </Stack>

        <IconButton
          aria-label={"Menu"}
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
          onClick={() => {
            changeDisplay("flex");
          }}
        />
        <Flex
          w={"100vw"}
          h={"100vh"}
          display={display}
          zIndex={40}
          pos={"fixed"}
          top={0}
          left={0}
          overflowY={"auto"}
          flexDir={"column"}
          bg={"gray.700"}
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>
          <Flex flexDir="column" align="center">
            <Menu />
          </Flex>
        </Flex>
      </HStack>
    </Box>
  );
};
