import { Box, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="section" pt={10} pb={6}>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" px={8}>
          <VStack align="left" maxW="lg" spacing={4}>
            <Heading as="h1" size="2xl" fontWeight="bold">Tenderum Products</Heading>
            <Text fontSize="xl" color="gray.600">Innovative solutions designed for the future of technology.</Text>
          </VStack>
          <Image src="https://via.placeholder.com/400" borderRadius="lg" boxShadow="xl" />
        </Flex>
      </Box>

      <Box as="section" py={10} px={8} bg="gray.50">
        <Heading as="h2" size="xl" mb={6}>Features</Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={10}>
          <Box flex="1">
            <Heading as="h3" size="lg">Feature 1</Heading>
            <Text mt={2}>Description of feature 1.</Text>
          </Box>
          <Box flex="1">
            <Heading as="h3" size="lg">Feature 2</Heading>
            <Text mt={2}>Description of feature 2.</Text>
          </Box>
          <Box flex="1">
            <Heading as="h3" size="lg">Feature 3</Heading>
            <Text mt={2}>Description of feature 3.</Text>
          </Box>
        </Stack>
      </Box>

      <Box as="section" py={10} px={8}>
        <Heading as="h2" size="xl" mb={6}>Contact Us</Heading>
        <Flex direction={{ base: "column", md: "row" }} spacing={4}>
          <Box flex="1" as="address">
            <Text><FaMapMarkerAlt /> 1234 Tech Avenue, Innovation City</Text>
            <Text><FaPhone /> +123 456 7890</Text>
            <Text><FaEnvelope /> contact@tenderum.com</Text>
          </Box>
          <Image src="https://via.placeholder.com/200" borderRadius="lg" boxShadow="xl" />
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;