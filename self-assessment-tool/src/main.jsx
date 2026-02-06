import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { system } from "./theme";
import { RecoilRoot } from "recoil";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
    </RecoilRoot>

  </React.StrictMode>
);