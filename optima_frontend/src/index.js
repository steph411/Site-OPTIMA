import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';


//import ApolloClient, { createNetworkInterface } from 'apollo-client';
//import { ApolloProvider } from 'react-apollo';

/* const client = new ApolloClient({
    networkInterface: createNetworkInterface({ uri: '127.0.0.1:8000/graphql'}),
  })
const FullApp = (<ApolloProvider client={client}>
                    <App/>
                </ApolloProvider>); */


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
