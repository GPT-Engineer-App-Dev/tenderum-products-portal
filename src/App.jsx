import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Flex, Box, Link, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function App() {
  const [display, changeDisplay] = React.useState('none');

  return (
    <>
      <Flex
        pos="fixed"
        top="0"
        left="0"
        right="0"
        p="1rem"
        bg="white"
        zIndex="1000"
        align="center"
        justify="space-between"
        boxShadow="md"
      >
        <Box fontSize="2xl" fontWeight="bold">Tenderum Produkter</Box>
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <Link p="2" href="/" fontWeight="bold">Home</Link>
          <Link p="2" href="#produkter" fontWeight="bold">Products</Link>
          <Link p="2" href="#kontakta-oss" fontWeight="bold">Contact</Link>
        </Flex>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr="2"
          icon={<HamburgerIcon />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={() => changeDisplay('flex')}
        />
        <Flex
          w="100vw"
          bgColor="gray.50"
          zIndex="20"
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          display={display}
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Close Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay('none')}
            />
          </Flex>
          <Flex flexDir="column" align="center">
            <Link p="4" href="/" onClick={() => changeDisplay('none')}>Home</Link>
            <Link p="4" href="#produkter" onClick={() => changeDisplay('none')}>Products</Link>
            <Link p="4" href="#kontakta-oss" onClick={() => changeDisplay('none')}>Contact</Link>
          </Flex>
        </Flex>
      </Flex>

      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;