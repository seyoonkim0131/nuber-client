import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from 'react-apollo'
import client from './apollo'

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root') as HTMLElement
);
