import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MoreInfo extends Component {
 
  constructor(props) {
    super(props);
  this.state = {
    items: [],
    isLoaded: false,
    person: null,
    search:null
  }
}

async componentDidMount() {
  let id=sessionStorage.getItem("id")-1;
  const url="https://jsonplaceholder.typicode.com/users";
  const response=await fetch(url);
  const data=await response.json();
  
  console.log(id);
  this.setState({
        isLoaded: true,
        items: data[id],
      })
  }

  render() {
    const styleInfo = {
      paddingRight:'10px',
      textDecoration:'black'
    }
        return(
      <div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            {/* <span style={styleInfo}>{this.state.items.id}</span> */}
            <span style={styleInfo}>{this.state.items.name}</span>
            <span style={styleInfo}>{this.state.items.email}</span>
            <span style={styleInfo}>{this.state.items.username}</span>
            {/* <span style={styleInfo}> {this.state.items.address}</span> */}
            <span style={styleInfo}>{this.state.items.phone}</span>
          </li>
        </ul>
      </div>
      )
    }
  
    
}
export default MoreInfo;
