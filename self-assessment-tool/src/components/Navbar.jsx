import { Box, Flex, Text } from "@chakra-ui/react";
import { UserStar } from "lucide-react";

const Navbar = () => {
  return (
    <Box
      as="header"
      bg="white"
      color="blue.500"
      px={6}
      py={4}
      borderBottom="1px solid"
      borderColor="#dee0e3"
    >
      <Flex align="center" gap={3}>
        <Box
          bg="blue.500"
          p={2}
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <UserStar size={20} color="white" />
        </Box>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="semibold"
          letterSpacing="wide"
        >
          Progress Self-Assessment Tool
        </Text>
      </Flex>
    </Box>
  );
};

export default Navbar;
