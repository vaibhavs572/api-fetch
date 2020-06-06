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
      textDecoration:'black'
    }
    

        return(
          this.state.isLoaded === false ? <div></div>:
      <div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            
            <p style={styleInfo}>Name : {this.state.items.name}</p>
            <p style={styleInfo}>Email : {this.state.items.email}</p>
            <p style={styleInfo}>Username : {this.state.items.username}</p>
             <p style={styleInfo}> Address : {this.state.items.address.street}, {this.state.items.address.suite}, {this.state.items.address.city}, {this.state.items.address.zipcode}</p>
            <p style={styleInfo}> Phone Number : {this.state.items.phone}</p>
            <p style={styleInfo}> Company Name : {this.state.items.company.name}</p>
          </li>
        </ul>
      </div>
      )
    }
  
    
}
export default MoreInfo;
