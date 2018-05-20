import React from 'react'
import { GridList, GridTile } from 'material-ui';
import { ProductCard } from './ProductCard';

export const ProductsList = ({products}) => (
    <GridList cols={4} cellHeight={"auto"}>
       {products.map((p, key)=>(
        <GridTile cols={1} key={key} style={{padding:'2%'}}>
            <ProductCard {...p} product={p}/>
        </GridTile>
       ))}
        
    </GridList>
);