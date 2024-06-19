import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const quotes = [
  { id: 1, text: "The best way to predict the future is to invent it." },
  { id: 2, text: "Life is 10% what happens to us and 90% how we react to it." },
  { id: 3, text: "The only way to do great work is to love what you do." },
  { id: 4, text: "Success is not the key to happiness. Happiness is the key to success." },
  { id: 5, text: "Your time is limited, don't waste it living someone else's life." },
];

function Quotes() {
  return (
    <Box p={5}>
      <Heading>Quotes</Heading>
      <VStack mt={4} spacing={4} align="start">
        {quotes.map((quote) => (
          <Text key={quote.id}>"{quote.text}"</Text>
        ))}
      </VStack>
    </Box>
  );
}

export default Quotes;
