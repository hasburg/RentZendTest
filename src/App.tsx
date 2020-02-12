import React from 'react';
import './App.sass';
import AgentsPage from './components/AppForm/AgentsPage';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";

const apolloCache = new InMemoryCache();

const uploadLink = createUploadLink({
  uri: 'http://localhost:8000',
  headers: {
    "keep-alive": "true"
  }
});

const client = new ApolloClient({
  cache: apolloCache,
  link: uploadLink
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AgentsPage />
    </ApolloProvider>
  );
};

export default App;
