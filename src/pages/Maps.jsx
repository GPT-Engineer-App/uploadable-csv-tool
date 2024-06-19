import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Maps = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl">Map Page</Text>
      <Box mt={4} height="500px" bg="gray.200">
        {}
        <Text>Map will be displayed here</Text>
      </Box>
    </Box>
  );
};

export default Maps;
