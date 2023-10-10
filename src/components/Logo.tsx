import { Box, Button, Image, Link } from "@chakra-ui/react";
import { urls } from "../utils/urls";
import React from "react";

export const Logo = () => {
  return (
    <Box p={[2, 2, 4, 4]}>
      <Link href={urls.website.hazenaSvinov} target={"_blank"}>
        <Image
          src={urls.website.logo}
          alt={"Logo oddilu TJ Sokol Svinov"}
          w={["80px", "80px", "100px", "100px"]}
          h={"auto"}
        />
      </Link>
    </Box>
  );
};
