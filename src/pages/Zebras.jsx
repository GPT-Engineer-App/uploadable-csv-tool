import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";

const zebras = [
  {
    title: "Zebra 1",
    description: "Description about Zebra 1",
    imageUrl: "https://example.com/zebra1.jpg",
  },
  {
    title: "Zebra 2",
    description: "Description about Zebra 2",
    imageUrl: "https://example.com/zebra2.jpg",
  },
  {
    title: "Zebra 3",
    description: "Description about Zebra 3",
    imageUrl: "https://example.com/zebra3.jpg",
  },
];

function Zebras() {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {zebras.map((zebra, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={zebra.imageUrl} alt={zebra.title} />
            <Box p={6}>
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                {zebra.title}
              </Text>
              <Text>{zebra.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Zebras;
