import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Typography from '@mui/material/Typography';


import CardPost from './CardPost';

const ListPoste = (props) => {

    const poste = props.postes ;



    return (


        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            {poste.map((post) => (

<ListItem>
<ListItemAvatar>
  <Avatar>
    <ImageIcon />
  </Avatar>
</ListItemAvatar>
<ListItemText primary="Photos" secondary="Jan 9, 2014" />

<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
     <CardPost poste = {post} />
</Typography>

</ListItem>


        
                

            ))}

      
      </List>        
       
    );
};

export default ListPoste;