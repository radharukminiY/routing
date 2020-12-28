import React from 'react';


const PostDetails= (props) =>{
  console.log(props);
  return(

    <div className="panel panel-primary">
    <div className="panel-heading">
    {props.match.params.topic} Details
      </div>
      <div className="panel-body">
    {props.match.params.topic} Details page is one of our absolute favorites. The look and feel of the website is brilliantly designed, and the interactive elements (play around with them for yourself!) take this homepage to a whole new level.
      </div>
      </div>

  )
}
export default PostDetails;
