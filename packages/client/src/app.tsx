import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { ThemeProvider } from 'ui-modules';
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
        <ThemeProvider>
          <AppLayout menuItems={menuItems}>
            <Routes routes={routes} />
          </AppLayout>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
