import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import Navbar from './components/navbar/NavBar';
//import Navbar from './components/navbar/Navbar';


class App extends Component {

  state={
    logged:false,
    user:{},
    cart:{
      items:[],
      total:0
    },   
  }

  componentWillMount(){
    this.checkIfuser()
  }

  checkIfuser=()=>{
    let userToken = JSON.parse(localStorage.getItem('userToken'));
    console.log(userToken)
    if (userToken) {
        this.setState({logged:true})
    }else{
        this.setState({logged:false})
    }
  }

  logIn=(user)=>{
    console.log(user)
    // e.preventDefault()
    //const userToken = JSON.parse(localStorage.getItem('userToken'));
    let url = 'http://127.0.0.1:8000/api-token-auth/';
    var request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
            //'Authorization':'Token '+userToken,
            'Content-Type': 'application/json'
        })
    });
    fetch(request)
        .then(r=>{
          if(r.ok)return r.json()
          console.log(r.json())          
        })
        .then(data=>{
            console.log(data)
            localStorage.setItem('userToken', JSON.stringify(data.token));
            //this.props.history.push('/profile')
            this.setState({logged:true})
        })
        .catch(e=>{
            console.log(e)
            this.setState({logged:false})
    })
  }

  logOut=()=>{
    localStorage.removeItem('userToken');
    this.setState({logged:false})
  }
  

  render() {
    let {logged} = this.state;
    return (
      <div className="App">    
        <Navbar
          logOut={this.logOut}
          logged={logged}
        />
        <div className='routes-container'>
          <Routes
            logIn={this.logIn}
            logged={logged}
          /> 
        </div>
                 
        
      </div>
    );
  }
}

export default App;
