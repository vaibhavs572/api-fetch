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
  
  this.setState({
        isLoaded: true,
        items: data[id],
      })
  }



  render() {
    const styleInfo = {
      paddingRight:'10px',
      textDecoration:'black',
      backgroundColor: '#dddddd',
      fontFamily: 'arial, sans-serif'
      
    }
    

        return(
          this.state.isLoaded === false ? <div></div>:
      <div>
        <table>
        <tr>
    <td>Name</td>
    <td style={styleInfo}> {this.state.items.name}</td>
  </tr>
  <tr>
  <td>Username</td>
    <td style={styleInfo}>{this.state.items.username}</td>
  </tr>
  <tr>
  <td>Email</td>
    <td style={styleInfo}>{this.state.items.email}</td>
  </tr>
  <tr>
  <td>Address</td>
    <td style={styleInfo}>{this.state.items.address.street}, {this.state.items.address.suite}, {this.state.items.address.city}, {this.state.items.address.zipcode}</td>
  </tr>
  <tr>
  <td>Phone Number</td>
    <td style={styleInfo}>{this.state.items.phone}</td>
  </tr>
  <tr>
  <td>Company Name</td>
    <td style={styleInfo}> {this.state.items.company.name}</td>
  </tr>
        </table>
      </div>
      )
    }
  
    
}
export default MoreInfo;
