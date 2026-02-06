import { Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Box minH="100vh">
      <Navbar />

      <Container maxW="6xl" py={10}>
        <Dashboard />
      </Container>
    </Box>
  );
};

export default App;
