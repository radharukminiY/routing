import React from 'react';
import {Link} from 'react-router-dom';

const Post = () =>{
  return(

    <div className="panel panel-info">
    <div className="panel-heading">
      Post
      </div>
      <div className="panel-body">
    This Post page is one of our absolute favorites. The look and feel of the website is brilliantly designed, and the interactive elements (play around with them for yourself!) take this homepage to a whole new level.

      <div>
      <h2>React</h2>
      <Link to="/post/React">React Details</Link>
      <h2>Angular</h2>
      <Link to="/post/Angular">Angular Details</Link>
      <h2>Node</h2></div>
      <Link to="/post/Node">Node Details</Link>
      </div>
      </div>

  )
}
export default Post;
