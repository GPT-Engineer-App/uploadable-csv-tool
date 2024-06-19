import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box bg="red.500" p={4}>
      <Flex justify="space-between" align="center">
        <Link to="/">
          <Button colorScheme="teal" variant="ghost">
            Home
          </Button>
        </Link>
        <Link to="/about">
          <Button colorScheme="teal" variant="ghost">
            About
          </Button>
        </Link>
        <Link to="/shop">
          <Button colorScheme="teal" variant="ghost">
            Shop
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default Navbar;
