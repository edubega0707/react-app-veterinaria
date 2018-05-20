import React from 'react';
import {AppBar, IconButton, IconMenu, MenuItem, FlatButton} from 'material-ui'
import {Link} from 'react-router-dom';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ProductsIcon from 'material-ui/svg-icons/maps/store-mall-directory';
import CartIcon from 'material-ui/svg-icons/action/shopping-cart';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'



const Logged = ({logOut}) => (
   <span>
        <IconButton>
            <CartIcon/>
        </IconButton>
        <IconMenu
        iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        <Link to="/profile">
        <MenuItem primaryText="Profile" />
        </Link>
        <Link to="/">
            <MenuItem primaryText="Cerrar Sesion" onClick={logOut}/>
        </Link>
       
    </IconMenu>
   </span>
);

const Login = ({props}) => (
    <Link to="/signin">
        <FlatButton label="Login" />
    </Link>
);

class Navbar extends React.Component{
    state={
        //logged:false,
        open:false,
        products:[],
        user:{}
    }
    
    render(){

        //let {open, products} = this.state;
        let {logged} = this.props;
        return(
            <div>
                <AppBar
                    iconElementRight={                  
                        <span>
                             
                        {logged ? 
                        <Logged 
                            handleCart={this.handleCart}
                            logOut={this.props.logOut}/> : <Login />}
                        </span>
                       
                    }
                    iconElementLeft={
                    <span>
                        <Link to="/">
                            <IconButton>
                                <HomeIcon/>
                            </IconButton>
                        </Link>
                        <Link to="/products">
                            <IconButton>
                                <ProductsIcon/>
                            </IconButton>
                        </Link>
                    </span>    
                    }
                    />
          
            </div>
        );
    }
}

export default Navbar;