import React from 'react'
import {TextField, SelectField, MenuItem} from 'material-ui'
import {indigo500} from 'material-ui/styles/colors';

const styles = {
    textfield: {
        width:'90%',
        fontSize:'20px',    
        color:indigo500
    },
   
  };

export const Filterstext=({handleSearch, handleCategory, search, category, categories})=>(
    <div className="filters-container">
        <SelectField
          floatingLabelFixed={true}
          floatingLabelText="Categorias"
          value={category}
          style={{width:'30%'}}
          onChange={handleCategory}
        >
            <MenuItem 
                value={''} 
                primaryText={'Todos'} />
          {categories.map((c, key)=>(
              <MenuItem 
                key={key}
                value={c.id} 
                primaryText={c.name} />
          ))}
          
        </SelectField>
        <TextField
            hintText="Buscar"
            floatingLabelFixed={true}
            floatingLabelText="Buscar 😀"
            style={styles.textfield}
        />
    </div>
)