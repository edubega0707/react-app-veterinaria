import React from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

import img4 from './img/user.png'
const style={
    CardTitle:{
        fontSize:'24px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    CardText:{
        fontSize:'20px'
    }
    
}

export const ProfileInfo=()=>(
<div className='info-profile'>
   <Card>
    <CardHeader className='img-profile'>
        <img src={img4} alt="profile"/>      
    </CardHeader>  
    <CardTitle style={style.CardTitle} title="username"  />
    <CardText style={style.CardText} className='user-info'>
        <ul>
             <li><ContentInbox /><p>Nombre</p></li>
             <li><ContentInbox /><p>Direccion</p></li>
             <li><ContentInbox /><p>Telefono</p></li>
             <li><ContentInbox /><p>Correo</p></li>
        </ul>

    </CardText>
    <CardActions>
    
    </CardActions>
  </Card>
    
        
</div>
)