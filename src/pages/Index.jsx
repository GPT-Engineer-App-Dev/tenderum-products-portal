import { Box, Container, Flex, Heading, Image, Stack, Text, VStack, List, ListItem, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="section" pt={10} pb={6}>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" px={8}>
          <VStack align="left" maxW="lg" spacing={4}>
            <Heading as="h1" size="2xl" fontWeight="bold">Tenderum Produkter</Heading>
            <Text fontSize="xl" color="gray.600">Innovativa lösningar designade för framtidens teknik.</Text>
          </VStack>
          <Image src="https://www.jaktbutiken.se/bilder/tenderum_moringstimer_914.jpg" borderRadius="lg" boxShadow="xl" width={{ base: "100%", md: "50%" }} />
        </Flex>
      </Box>

      <Box as="section" py={10} px={8} bg="gray.50">
        <Heading as="h2" size="xl" mb={6}>Produkter</Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={10}>
          <Box flex="1">
            <Heading as="h3" size="lg">Mörningstimer</Heading>
            <Text mt={2}>
              Kött needs to hang to become tender and flavorful, but it can be difficult to know how long. With a Mörningstimer, you always have full control over the tenderization process, and you can confidently hang your kött until it achieves optimal tenderness and flavor. Regardless of temperature variations, the Mörningstimer calculates how far the tenderization has progressed and estimates the number of days remaining. Tested in "Jaktjournalen" with good ratings!
            </Text>
            <Text mt={4}>
              The timers are powered by standard 1.5V AAA (LR03) batteries. With normal use, they last for many years.
            </Text>
            <Heading as="h4" size="md" mt={6}>Facts</Heading>
            <Text mt={2}>
              Tenderization of meat is a chemical process where connective tissue and other proteins in the meat are broken down by natural enzymes. This breakdown makes the meat more tender and develops the flavor. Simplified, a Tenderisation Timer consists of a small computer with a sensor that measures temperature every 21 seconds. The computer continuously calculates the tenderization and the estimated number of remaining days until the tenderization is complete, displaying this information on the displays.
            </Text>
            <Text mt={4}>
              The tenderization calculation is primarily based on the concept of degree days, where degree days are calculated as the average temperature multiplied by the number of days. If the temperature is too low, the Tenderisation Timer warns by displaying a snowflake icon. The Tenderisation Timer can be used for both wild game shot and for livestock that has been slaughtered, and for all types of animals that need to hang.
            </Text>
            <Text mt={4}>
              The calculation of the number of remaining days is based on the average daily temperature since the Tenderisation Timer was started. The Tenderisation Timer continues to calculate the tenderization up to 200% and then automatically shuts off in anticipation of the next tenderization opportunity.
            </Text>
            <Text mt={4}>
              This method can be used both when you are forced to butcher before the meat is fully tenderized, and for meat that is suitable for tenderizing in butchered form. The same Tenderisation Timer can be used to measure the tenderization of several animals as long as they have been shot or slaughtered at the same time and hang in the same space.
            </Text>
            <Heading as="h4" size="md" mt={6}>Store Review</Heading>
            <Text mt={2}>
              After an animal has been shot or slaughtered, it should be dressed to prevent intestinal bacteria from affecting the meat. The body can then be hung with or without skin. The hanging of the animal should take place in a space that meets a number of requirements. No animals or insects should be able to access the meat, which is most easily solved by letting the animal hang in a game bag.
            </Text>
            <Text mt={4}>
              Am I guaranteed a good result if I use a Tenderisation Timer? No, even though the Tenderisation Timer provides very valuable information about how far the tenderization has progressed, you should also use smell and sight to assess the meat quality.
            </Text>
          </Box>
          <Box flex="1">
            <Heading as="h3" size="lg">Spelkylskåpskit</Heading>
            <Text mt={2}>Transform your refrigerator into a gaming hub with our innovative Game Fridge Kits.</Text>
            <List spacing={3} mt={4}>
              <ListItem><Text as="span" fontWeight="bold">Innovative:</Text> First of its kind</ListItem>
              <ListItem><Text as="span" fontWeight="bold">Fun:</Text> Enhances your kitchen experience</ListItem>
              <ListItem><Text as="span" fontWeight="bold">Customizable:</Text> Various themes and games available</ListItem>
            </List>
          </Box>
        </Stack>
      </Box>

      <Box as="section" py={10} px={8}>
        <Heading as="h2" size="xl" mb={6}>Kontakta Oss</Heading>
        <Flex direction={{ base: "column", md: "row" }} spacing={6} p={{ base: 4, md: 8 }}>
          <Box flex="1" as="address">
            <Flex alignItems="center">
              <FaMapMarkerAlt />
              <Text ml={2}>Teknikgatan 1234, Innovationsstaden</Text>
            </Flex>
            <Flex alignItems="center">
              <FaPhone />
              <Text ml={2}>+123 456 7890</Text>
            </Flex>
            <Flex alignItems="center">
              <FaEnvelope />
              <Text ml={2}>kontakt@tenderum.com</Text>
            </Flex>
          </Box>
          <Image src="https://via.placeholder.com/200" borderRadius="lg" boxShadow="xl" />
        </Flex>
      </Box>

      <Box as="footer" bg="gray.800" color="white" py={10} mt={10} w="100vw">
        <Container maxW="100%" px={0}>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <Text fontSize="sm">© 2023 Tenderum Produkter. All rights reserved.</Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Link href="/privacy-policy" color="gray.300" _hover={{ color: "gray.100" }}>Privacy Policy</Link>
              <Link href="/terms-of-service" color="gray.300" _hover={{ color: "gray.100" }}>Terms of Service</Link>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;