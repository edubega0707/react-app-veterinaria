import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import LogUsersPage from './components/users/LogUsersPage'
import Profile from './components/profile/Profile';
import ProductDetail from './components/products/ProductDetail';
//import UserProfilePage from './components/users/UserProfilePage'
class Routes extends React.Component{

    render(){
        let {logged, logIn}=this.props
        return(
            <Switch>
                <Route exact path="/" component={HomePage}/> 
                <Route path="/signin" render={props =>(logged?<Redirect to="/profile" />:<LogUsersPage {...props} logIn={logIn}/>)}/>
                <Route path="/signup" render={props =>(logged?<Redirect to="/profile" />:<LogUsersPage {...props}/>)}/>
                <Route path="/profile" render={()=>(logged?<Profile/>:<Redirect to="signin"/>)}/>
                <Route path="/products/:product_id" render={props =>(<ProductDetail {...props}/>)}/> 
               
            </Switch>
        )
    }
}
export default Routes