import React from 'react';
import {Link} from 'react-router-dom';

const Header =() =>{
  return(
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="favicon.icon">logo</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li><Link to="/">Home</Link></li>
      <li><Link to="/Post">Post</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><span className="glyphicon glyphicon-user"></span> Sign Up</li>
        <li><span className="glyphicon glyphicon-log-in"></span> Login</li>
      </ul>
    </div>
  </div>
</nav>
  )
}
export default Header;
