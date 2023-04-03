import { Box, Button, Image, Link } from "@chakra-ui/react";
import { urls } from "../utils/urls";
import React from "react";
export const Logo = () => {
  return (
    <Box pl={20}>
      <Link href={urls.website.hazenaSvinov} target={"_blank"}>
        <Image
          src={urls.website.logo}
          alt={"Logo oddilu TJ Sokol Svinov"}
          w={"100px"}
          h={"auto"}
        />
      </Link>
    </Box>
  );
};
