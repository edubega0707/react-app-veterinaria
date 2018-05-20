import React, { Component } from 'react';
import { Carrousel } from './Carrousel';
import {GridList, GridTile} from 'material-ui/GridList';
import { FiltersList } from './FiltersList';
import {typography} from 'material-ui/styles';
import {blue500, lightBlue50} from 'material-ui/styles/colors';
import { Filterstext } from './Filterstext';
import { ProductsList } from '../products/ProductsList';

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginTop: '3%',
      height: '100vh'
    },
    gridList: {
      width: '90%',
      height: 'auto',
      overflowY: 'auto',
      fontWeight: typography.fontWeightLight,
      color: blue500,
      fontSize: '24px'

    },
    gridTile:{
        backgroundColor:lightBlue50,
    
    }
  };


class HomePage extends Component {
    state ={
        search:'',
        category:'',
        products:[],
        categories:[],
    }

    componentWillMount(){
        this.getProducts()
        this.getCategories()
    }
    getProducts=()=>{
        //const userToken = JSON.parse(localStorage.getItem('userRanchoToken'));
        let url = 'http://localhost:8000/products/';
        var request = new Request(url, {
            method: 'GET',
            //body: data,
            headers: new Headers({
                //'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                console.log(data)
                this.setState({products:data})
            })
            .catch(e=>{
                console.log(e)
        })
    }
    getCategories=()=>{
        //const userToken = JSON.parse(localStorage.getItem('userRanchoToken'));
        let url = 'http://localhost:8000/categories/';
        var request = new Request(url, {
            method: 'GET',
            //body: data,
            headers: new Headers({
                //'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                console.log(data)
                this.setState({categories:data})
            })
            .catch(e=>{
                console.log(e)
        })
    }


    handleSearch=(e)=>{
        this.setState({search:e.target.value})
    }
    handleCategory=(e, i, v)=>{
        
        this.setState({category:v})
        console.log(this.state.category)
    }


    render() {
        let {products, search, category, categories} = this.state;
        //let {addItem, removeItem} = this.props
        const regEx = new RegExp(search, 'i');
        let filteredProducts = products.filter(i=>{
            return regEx.test(i.name)
        })
        if(category){
            filteredProducts = filteredProducts.filter(p=>{
                return p.category === category
            })
        }
        return (
            <div>
                 <div className='container'>
                    <Carrousel/>
                </div>
                <div style={styles.root}>
                    <GridList 
                        cols={4}
                        cellHeight={"auto"}
                        padding={40}
                        style={styles.gridList}
                    >               
                        <GridTile  style={styles.gridTile} cols={1} className='categories'> 
                            <h2>Categorias</h2>                      
                            <FiltersList
                            />                                    
                        </GridTile>

                        <GridTile style={styles.gridTile} cols={3} className='products'>   
                            <h2>Productos</h2>    
                            <Filterstext
                             categories={categories}
                             search={search}
                             category={category}
                             handleCategory={this.handleCategory}
                             handleSearch={this.handleSearch}/>
                            
                            <ProductsList
                             products={filteredProducts}/>
                        

                                     
                        </GridTile>
                     
                    </GridList>               
                </div>
            </div>
        );
    }
}

export default HomePage;