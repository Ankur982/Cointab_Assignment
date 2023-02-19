import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
  Image,
  Img,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../components/Filter";
import Pagination from "../../components/Pagination";
import { detailsUsers } from "../../redux/action";

export const UserDetails = () => {
  const dispatch = useDispatch();
  const { loading, error, addedUsers, users } = useSelector((store) => store);

  const [page, setPage] = useState(1)
  const [country,setCountry] = useState()
  const [gender,setGender] = useState()
  
  let total;
  if(users.totalusers){
     total = +users.totalusers/10
  }

  useEffect(() => {
    dispatch(detailsUsers(page, gender, country));
  }, [page,country,gender]);

  return (
    <Box m={"auto"}>
      <Heading m={"30px 0"} textAlign={"center"}>
        All Users List
      </Heading>
      
      <Filter setGender= {setGender} setCountry={setCountry} />

      {
        !loading? <>
        <TableContainer w={"90%"} m={"auto"} border={"4px solid teal"}>
        <Table variant="striped" colorScheme="teal">
          <TableCaption> User List</TableCaption>
          <Thead>
            <Tr>
              <Th>Picture</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Age</Th>
              <Th>Gender</Th>
              <Th>City</Th>
              <Th>Country</Th>
              <Th>Cell No.</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.users?.map((e,i) => (
              <Tr key={i}>
                <Td>
                  <Img src={e.picture.medium} />
                </Td>
                <Td>{`${e.name.title} ${e.name.first} ${e.name.last}`}</Td>
                <Td>{e.email}</Td>
                <Td>{e.dob.age}</Td>
                <Td>{e.gender}</Td>
                <Td>{e.location.city}</Td>
                <Td>{e.location.country}</Td>
                <Td>{e.cell}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
        </> : "Loading....."
      }


      <Pagination total={total} current={page} setPage={setPage}/>
      
    </Box>
  );
};
