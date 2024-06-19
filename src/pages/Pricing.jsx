import React from "react";
import { Box, Heading, Text, SimpleGrid, VStack, Button } from "@chakra-ui/react";

const pricingOptions = [
  {
    title: "Basic",
    price: "$10/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Standard",
    price: "$20/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    title: "Premium",
    price: "$30/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

function Pricing() {
  return (
    <Box p={5}>
      <Heading>Pricing</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} mt={5}>
        {pricingOptions.map((option, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <VStack spacing={3}>
              <Heading size="md">{option.title}</Heading>
              <Text fontSize="2xl">{option.price}</Text>
              <VStack spacing={1} align="start">
                {option.features.map((feature, idx) => (
                  <Text key={idx}>{feature}</Text>
                ))}
              </VStack>
              <Button colorScheme="teal">Choose Plan</Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Pricing;
