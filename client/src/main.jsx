import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Suspense } from "react";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </ApolloProvider>
  </StrictMode>
);
