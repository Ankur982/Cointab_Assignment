import { Box, Select } from "@chakra-ui/react";
import React from "react";

export const Filter = ({ setGender, setCountry }) => {
  return (
    <Box w={"90%"} m={"auto"} mb={"50px"}>
      <Box mt={"40px"}>
        <Select
          bg={"teal"}
          color={"black"}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Filter By Country"
        >
          <option value="India">India</option>
          <option value="France">France</option>
          <option value="Serbia">Serbia</option>
          <option value="Norway">Norway</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Brazil">Brazil</option>
          <option value="Australia">Australia</option>
          <option value="Turkey">Turkey</option>
          <option value="Canada">Canada</option>
          <option value="Denmark">Denmark</option>
          <option value="Ireland">Ireland</option>
          <option value="Turkey">Turkey</option>
          <option value="Finland">Finland</option>
          <option value="Germany">Germany</option>
          <option value="United Kingdom">United Kingdom</option>
        </Select>
      </Box>
      <Box mt={"40px"}>
        <Select
          bg={"teal"}
          color={"black"}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Filter By Gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </Box>
    </Box>
  );
};
