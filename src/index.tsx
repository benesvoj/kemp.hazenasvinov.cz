// import "./_index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import GlobalStyle from "./globalStyles";
import React from "react";
import ReactDOM from "react-dom/client";
import Theme from "./theme";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Theme>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </Theme>
    </QueryClientProvider>
  </React.StrictMode>
);
