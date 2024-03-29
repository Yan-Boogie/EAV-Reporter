import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import App from './app';
import './public/main.css';

const client = new ApolloClient({
  uri: GRAPHQL_HOST,
  cache: new InMemoryCache(),
});

function render() {
  const container = document.getElementById('root');

  const root = createRoot(container);

  root.render(<App client={client} />);
}

render();
