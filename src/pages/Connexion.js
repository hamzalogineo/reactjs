import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navigation from "../components/Navigation";
import Logo from '../components/Logo' ;
import Inscription from './Inscription';
import Mp_recup from '../components/conexion/Mp_recup';
import { NavLink } from 'react-router-dom';

 


const Connexion = () => {
 
   



    return (

        <div >

   <Logo />
   <Navigation />

        <div className="connexion">
   


            <h1>Connexion page</h1>
           
         <TextField
          label="LOGIN OR EMAIL"
          id="outlined-size-small"
          defaultValue=""       
          size="small"
          sx={{margin: '25px'}}
        />
      
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          size="small"
          sx={{margin: '25px'}}
        />

<div className="connexion_btn">
<Stack direction="row" spacing={2}>

      <Mp_recup />


      <NavLink exact to = "welcome" >
   
      <Button variant="contained" color="success">
                Connexion
      </Button>

      </NavLink>
   
      
    </Stack>
</div>

    <Inscription />
        
        </div>

        </div>
    );
};

export default Connexion;