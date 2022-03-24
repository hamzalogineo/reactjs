import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import { NavLink } from 'react-router-dom'

const NavBouton = () => {

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div>

     <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>

     <NavLink exact to = "signin" activeClassName='nav-active'>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
    </NavLink>


    <NavLink exact to = "signin" activeClassName='nav-active'>
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
  </NavLink>


<NavLink exact to = "signin" activeClassName='nav-active'>
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
</NavLink>


<NavLink exact to = "signin" activeClassName='nav-active'>

      <BottomNavigationAction 
      label="Folder" 
      value="folder" 
      icon={<FolderIcon />}
       />
</NavLink>

    </BottomNavigation>


        </div>
    );
};

export default NavBouton;