import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {typography} from 'material-ui/styles';
import {lightBlue50,lightGreen200,lightGreen900} from 'material-ui/styles/colors';
import { MenuProfile } from './MenuProfile';
import { ProfileInfo } from './ProfileInfo';
import { PettsList } from './PettsList';

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginTop: '3%'
    },
    gridList: {
        width: '90%',
        overflowY: 'auto',
        fontWeight: typography.fontWeightLight,
        fontSize: '24px' 
      },
      gridTilemenu:{
        backgroundColor:lightGreen200,
        color:lightGreen900,
   
     },
     gridTilemascotas:{
        backgroundColor:lightBlue50,   
     },
     gridTilesection:{
        backgroundColor:lightBlue50,   
     },
  };

class Profile extends Component {

    state= {
        pets:[],
    }

    componentWillMount(){
        this.getPets()
    }

    getPets=()=>{
        //const userToken = JSON.parse(localStorage.getItem('userRanchoToken'));
        let url = 'http://localhost:8000/pets/';
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
                this.setState({pets:data})
            })
            .catch(e=>{
                console.log(e)
        })
    }
    render() {
        let {pets} = this.state;
        return (
        <div>
           <div style={styles.root}>
               <GridList 
                   cols={4}
                   cellHeight={'auto'}
                   padding={40}
                   style={styles.gridList}
               >               
                   <GridTile  style={styles.gridTilemenu} cols={1} className='menu-profile'> 
                           <MenuProfile/>                                                         
                   </GridTile>

                   <GridTile style={styles.gridTilemascotas} cols={2} className='mascotas-profile'> 
                                                            
                            <PettsList
                                pets={pets}
                                />   
                   </GridTile>

                   <GridTile style={styles.gridTilesection} cols={1} className='section-profile'>   
                       
                            <ProfileInfo/>
                                
                   </GridTile>
                
               </GridList>               
           </div>
       </div>
        );
    }
}

export default Profile;