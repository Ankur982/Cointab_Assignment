import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Home = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"50px"}
      width={"88%"}
      m={"auto"}
    >
      <Box textAlign={"left"}>
        <Box>
          <Heading as="h2" size="3xl" noOfLines={2}>
            Evolving Technology for evolving times
          </Heading>
          <Text fontSize="2xl" mt={"25px"}>
            Experience the ease of reconciling your data with our reconciliation
            software.
          </Text>
        </Box>
        <Box display={"flex"} gap={"50px"} mt={"50px"}>
          <Button colorScheme="blackAlpha" size="lg">
            Fetch Users
          </Button>
          <Button colorScheme="blackAlpha" size="lg">
            Delete Users
          </Button>
          <Button colorScheme="blackAlpha" size="lg">
            User Details
          </Button>
        </Box>
      </Box>
      <Box display={"block"} m={"auto"}>
        <Image
          src={
            "https://www.cointab.in/wp-content/uploads/2022/09/Untitled-design-31.png"
          }
          alt={"img"}
        />
      </Box>
    </Box>
  );
};
