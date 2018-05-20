import React from 'react'
import { GridList, GridTile } from 'material-ui';
import { PettsCard } from './PettsCard';

const style={
    GridList:{
     marginTop:'10px'
    }
}
  
export const PettsList = ({pets}) => (
    
    <GridList cols={1} cellHeight={'auto'} style={style.GridList}>
      
        {pets.map((p, key)=>(
        <GridTile cols={1} key={key} style={{padding:'2%'}}>
            <PettsCard {...p}  product={p}/>
        </GridTile>
       ))}  
    </GridList>
);
