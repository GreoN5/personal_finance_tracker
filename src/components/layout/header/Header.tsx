import React, { JSX } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

const Header = (): JSX.Element => {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">Personal Finance Tracker</Heading>
        <Flex>
          <Link as={RouterLink} to="/" mr={4}>Dashboard</Link>
          <Link as={RouterLink} to="/transactions">Transactions</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
