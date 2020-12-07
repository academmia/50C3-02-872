
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './layout/Footer';
import Nav from './layout/Nav';

import HomeHeader from './sections/HomeHeader';
import BooksHomeList from './books/books-home-list';
import Login from './pages/Login';

import Books from './user/Books';
import AuthProvider from './state/context/AuthProvider';
import { AuthRoute } from './state/context/AuthEnable';

function App() {
  return (
    <AuthProvider>

      <Nav />

      <Route exact path="/" component={HomeHeader} />
      
      <main className="content">

        <Switch>
          <Route exact path="/" component={BooksHomeList} />

          <Route path="/login/:redirectTo" component={Login} />
          <Route path="/login" component={Login} />

          {/* <Route exact path="/books" component={Books} /> */}
          {/* ruta /books devine private */}
          <AuthRoute path="/books" component={Books} />

        </Switch>
        {/* <Login /> */}
        
      </main>  

      <Footer />

    </AuthProvider>
  );
}

export default App;
