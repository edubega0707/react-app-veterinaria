import React from 'react'
//import {Link} from 'react-router-dom'
import {CardActions, CardText, CardTitle, RaisedButton,  Paper} from 'material-ui'


export const PettsCard =({id, name, photo, age, raza}) =>(
   
     <Paper zDepth={2} className='card-mascota' >
    
        <CardTitle className='img-mascota'>
            <img src={photo} alt="mascotas"/>  
        </CardTitle>
        <CardText  className='mascota-info'>
            <div>
                <p>{name}</p>
                <p>{age} años</p>
                <p>{raza}</p>               
            </div>
        </CardText>
        <CardActions className='detail-info'>
            <RaisedButton 
                style={{width:'45%'}} 
                primary={true} label="Info" 
                />
        </CardActions>
    </Paper>
   
);
