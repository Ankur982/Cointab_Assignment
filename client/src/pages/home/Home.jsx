import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUsers, detailsUsers, fetchUsers } from "../../redux/action";

export const Home = () => {
  const [page, setPage] = useState(1)
  const { loading, error, addedUsers, users } = useSelector((store)=>store)
  console.log(addedUsers, users)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleFetchNewUsers = () => {
    if(loading){
      alert("loading....")
      return
    }
    setPage(page+1)
    dispatch(fetchUsers(page))
    alert(`new 100 user ADDED`)
  }

  const handleDeleteUsers = () => {
    if(users.totalusers==0){
      alert("please fetch user first")
      return 
    }
    setPage(1)
    dispatch(deleteUsers())
    alert(`All users Deleted`)
  }

  const handleNavigatePage = () => {
    navigate("/userDetails")
  }



  useEffect(()=>{
    dispatch(detailsUsers())
  },[page])

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
          <Button colorScheme="blackAlpha" size="lg" onClick={()=>handleFetchNewUsers()}
          >
            Fetch Users
          </Button>
          <Button colorScheme="blackAlpha" size="lg" onClick={()=>handleDeleteUsers()}>
            Delete Users
          </Button>
          <Button colorScheme="blackAlpha" size="lg" onClick={()=>handleNavigatePage()}>
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
