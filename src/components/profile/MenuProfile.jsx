import React from 'react'
import {List, ListItem} from 'material-ui'
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

export const MenuProfile=()=>(
    <div>
        <List>
            <ListItem primaryText="Perfil" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Mis mascotas" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Mis compras" leftIcon={<ContentSend />} />
            <ListItem primaryText="Consultas" leftIcon={<ContentDrafts />} />
          
        </List>

    </div>
)