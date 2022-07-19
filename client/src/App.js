import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import NoMatch from './pages/NoMatch.js';
import SingleThought from './pages/SingleThought.js';
import Profile from './pages/Profile.js';
import Signup from './pages/Signup.js';

const httpLink = createHttpLink({
  uri: '/graphql', // shortened this => http://localhost:3001/graphql; to accommodate different url paths
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={ client }>
      <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header />
          <div className='container'>
            <Routes>
              <Route 
                path='/'
                element={ <Home /> }
              />
              <Route
                path='/login'
                element={ <Login /> }
              />
              <Route
                path='/signup'
                element={ <Signup /> }
              />
              <Route path='/profile'>
                <Route path=':username' element={ <Profile />} />
                <Route path='' element={ <Profile/> } />
              </Route>
              <Route
                path='/thought/:id'
                element={ <SingleThought /> }
              />
              <Route
                path='*'
                element={ <NoMatch /> }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
