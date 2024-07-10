import React, { FC, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

import { Header } from "./header";

type Props = {
  children: ReactNode;
}

const Main: FC<Props> = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box flex="1" p={{ base: 4, md: 8 }} maxW="1200px" mx="auto" width="100%">
        {children}
      </Box>
    </Box>
  );
};

export default Main;
