import React from 'react'
import {List, ListItem} from 'material-ui'
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';


export const FiltersList=()=>(
    <div>
        <List >
            <ListItem primaryText="Productos" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Consultorios" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Mascotas" leftIcon={<ContentSend />} />
          
        </List>

    </div>
)