import React,{Component} from "react";
import Fetch from "./Component/Fetch"

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
      <Fetch></Fetch>
    </div>)
  }
}