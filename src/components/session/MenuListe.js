 
import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';


import { NavLink } from 'react-router-dom';

const MenuListe = () => {






    return (
        <div className='menuListe'>
            
<Paper sx={{ width: 300 , height: window.screen.height }}>
 
      <MenuList>

        <MenuItem>

          <ListItemIcon>

            <SendIcon fontSize="small" />

          </ListItemIcon>

           <NavLink exact to = "news" activeClassName='nav-active'>
             
          <Typography variant="inherit">A short message</Typography>
     
            </NavLink>

        </MenuItem>


        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <NavLink exact to = "news" activeClassName='nav-active'>
             
          <Typography variant="inherit">A short message</Typography>
     
            </NavLink>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            A very long text that overflows
          </Typography>
        </MenuItem>


        <MenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <NavLink exact to = "news" activeClassName='nav-active'>
             
             <Typography variant="inherit">A short message</Typography>
        
               </NavLink>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <NavLink exact to = "news" activeClassName='nav-active'>
             
             <Typography variant="inherit">A short message</Typography>
        
               </NavLink>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            A very long text that overflows
          </Typography>
        </MenuItem>


        <MenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <NavLink exact to = "news" activeClassName='nav-active'>
             
             <Typography variant="inherit">A short message</Typography>
        
               </NavLink>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <NavLink exact to = "news" activeClassName='nav-active'>
             
             <Typography variant="inherit">A short message</Typography>
        
               </NavLink>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            A very long text that overflows
          </Typography>
        </MenuItem>


   


      </MenuList>
       
</Paper>


        </div>
        ) ;
};

export default MenuListe;