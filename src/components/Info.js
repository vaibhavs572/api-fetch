import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MoreInfo from "./MoreInfo.js";
import { createPortal } from 'react-dom';



class Info extends Component {
 
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
    const url="https://jsonplaceholder.typicode.com/users";
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    this.setState({
          isLoaded: true,
          items: data,
        })
    }
  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render() {
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    
    var { isLoaded ,items } = this.state;

    const item = items.filter(item=>{
      if(this.state.search == null)
          return item
      else if(item.name.toLowerCase().includes(this.state.search.toLowerCase())){
          return item
        }
      }).map(item=>{
        return(
      <div >
        <ul>
          <li style={{position:'relative',left:'10vh'}} key={item.id}>
            <a href="./MoreInfo.js" style={{textDecoration:'none'},{padding:'10px'}} onClick={()=>{sessionStorage.setItem("id",item.id)}}  >{item.name}</a>
            <span style={styleInfo}>{item.username}</span>
            <span style={styleInfo}>{item.email}</span>
          </li>
        </ul>
      </div>
      )
    })
    return (
      <div>
      <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {item}
      </div>
    )
    
    
    }

    
    
}

export default Info;
