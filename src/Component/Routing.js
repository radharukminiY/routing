import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Routing = () =>{
  return(
  <BrowserRouter>

  <Header/>
  <Route exact path="/" component={Home}/>
  <Route exact path="/Post" component={Post}/>
  <Route exact path="/Profile" component={Profile}/>
<Footer/>
  </BrowserRouter>

)
}
export default Routing;
