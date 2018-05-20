import React from 'react'
import {Link} from 'react-router-dom'
import { CardActions, CardMedia, CardTitle, RaisedButton, FlatButton, Paper} from 'material-ui'


export const ProductCard =({id, photo, name, price, description, addItem, product, removeItem}) =>(
   
     <Paper zDepth={2} >
        <CardMedia
            overlay={<CardTitle title={name} subtitle={name} />}
        >
            <img src={photo} alt=""/>
        </CardMedia>
        <CardTitle subtitle={description}/>
        
        <CardActions>
            <Link to={`/products/${id}`}>
                <FlatButton style={{width:'45%'}} primary={true} label="Info"/>
            </Link>
            <RaisedButton 
                style={{width:'45%'}} 
                primary={true} label="Add" 
                onClick={()=>addItem(product)}/>
        </CardActions>
    </Paper>
   
);
