import { Component } from "react";

class Resume extends Component{
  render(){
    const {name, lastname} = this.props;
    return <h1>This is a class component, {name} {lastname}</h1>;
  }
}

export default Resume;