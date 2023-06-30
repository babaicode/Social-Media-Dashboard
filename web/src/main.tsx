import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  createHttpLink,
} from "@apollo/client";

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = localStorage.getItem("accessToken");

  operation.setContext({
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  });

  return forward(operation);
});

const coreApi = import.meta.env.VITE_APP_CORE_API;
const httpLink = createHttpLink({
  uri: coreApi,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
