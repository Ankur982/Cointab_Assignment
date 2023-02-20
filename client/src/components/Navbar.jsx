import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box
      bg={"white"}
      color={"#221205"}
      display={"flex"}
      justifyContent="space-around"
      alignItems={"center"}
      fontSize={25}
      boxShadow={"lg"}
      p="5"
    >
      <Link to="/">
        <Image
          src={
            "https://www.cointab.in/wp-content/uploads/2021/06/cointab_green-1.png"
          }
          alt={"img"}
        />
      </Link>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/userDetails">
        <Text>User Details</Text>
      </Link>
    </Box>
  );
};
