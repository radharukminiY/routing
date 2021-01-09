import React,{Component} from 'react';

class LifeCycle extends Component {
  // 1.GET initial state
  constructor(props){
    super(props)
    //2. Set initial state
    this.state={
      title:'LifeCycle'
    }
      console.log("inside constructor");
  }
   static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps",props);
    console.log("getDerivedStateFromProps",state);
  }
  //3. Before get created
  UNSAFE_componentWillMount(){
    console.log("in componentwillMount");
  }
  componentDidUpdate(){
    console.log("in componentDidUpdate")
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("in shouldComponentUpdate");
     if(nextState.title=== this.state.title){
       return false
     }else{
       return true
     }
  }

  //4. render
  render(){
    console.log("inside render");
    return(
      <div>
      <h2>{this.state.title}</h2>
      <div className="btn btn-sucess"
      onClick={()=> {this.setState({title:'render is working'})}}>
      click me
      </div>
      </div>
    )
  }
  //5. after get created
  componentDidMount(){
    console.log("in ComponentdidMount ");
  }

  componentWillUnmount(){
    alert("do you want to leave");
  }
}
export default LifeCycle;
