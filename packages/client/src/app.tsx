import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, NormalizedCacheObject } from '@apollo/client';
import AppLayout from './components/app-layout';
import Routes from './components/router/routes';
import { routes } from './routes';
import { menuItems } from './menu';

export interface AppProps {
  client: ApolloClient<NormalizedCacheObject>;
}

function App(props: AppProps) {
  const { client } = props;

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppLayout menuItems={menuItems}>
          <Routes routes={routes} />
        </AppLayout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
