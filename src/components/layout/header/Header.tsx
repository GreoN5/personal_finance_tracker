import React, { JSX } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

const Header = (): JSX.Element => {
  return (
    <Box bg="brand.500" color="white" p={4} boxShadow="md">
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <Heading as="h1" size="lg" fontFamily="Poppins">
          Personal Finance Tracker
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" mr={4} _hover={{ textDecoration: "underline" }}>
            Dashboard
          </Link>
          <Link as={RouterLink} to="/transactions" _hover={{ textDecoration: "underline" }}>
            Transactions
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
