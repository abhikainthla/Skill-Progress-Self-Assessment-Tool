import { Box } from "@chakra-ui/react";

const Card = ({ children }) => {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      boxShadow="md"
    >
      {children}
    </Box>
  );
};

export default Card;
