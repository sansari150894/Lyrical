import React from 'react';
import ReactDOM from 'react-dom';
import {Router,hashHistory,IndexRoute, Route} from 'react-router';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import SongList from './Components/SongList';
import App from './Components/App';
import SongCreate from './Components/SongCreate';

const client =new ApolloClient({});
const Root = () => {

  return(
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path='/' component={App}> 
            <IndexRoute component={SongList}/>
            <Route path='song/new' component={SongCreate}/>
        </Route>
      </Router>
    </ApolloProvider>
  ) 
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
