import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import './index.css';
import 'rxjs';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

// import { ApolloProvider } from 'react-apollo';

const networkInterface = createNetworkInterface({ uri: 'http://127.0.0.1:8000/graphqlapi' });

const client = new ApolloClient({ networkInterface });

const FullApp = (<ApolloProvider client={client} >
                     <Provider store={store} >
                        <BrowserRouter>
                           <App />
                        </BrowserRouter>
                     </Provider>
                 </ApolloProvider>);


ReactDOM.render(FullApp, document.getElementById('root'));
registerServiceWorker();
