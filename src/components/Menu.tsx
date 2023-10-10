import { HashLink as Link } from "react-router-hash-link";
import { Text } from "@chakra-ui/react";
import { getMenuItems } from "../utils/urls";
import React from "react";

export const Menu = () => {
  const menuItems = getMenuItems();

  return (
    <>
      {menuItems.map((menuItem) => {
        return menuItem.isAvailable ? (
          <Link
            key={menuItem.id}
            to={menuItem.url}
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
          >
            <Text fontSize={"3xl"} as={"b"}>
              {menuItem.title}
            </Text>
          </Link>
        ) : null;
      })}
    </>
  );
};
