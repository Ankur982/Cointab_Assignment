import { Box, Button } from "@chakra-ui/react";
function Pagination({ total, current, setPage }) {

  let pages = new Array(total).fill(0).map((el, i) => (

    <Button
      onClick={() => setPage(i + 1)}
      disabled={current === i + 1}
      key={i + 1}
      color="black"
      m={"50px 5px"}
    >
      {i + 1}
    </Button>
    
  ));

  return <Box>{pages}</Box>;
}

export default Pagination;
