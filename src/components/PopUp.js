import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import axios from "axios";
import { useState } from "react";


const PopUp = (props) => {

  
  const client = props.client ;

  const [data , setData] = useState({
          
      "nom": client.nom,
      "prenom": client.prenom,
      "login": client.login

  }) ;

  

  
  const setClient = () => {

   
    var nom = document.getElementById('nom').value ;
    var prenom = document.getElementById('prenom').value ;
    var login = document.getElementById('login').value ;
    var mp = document.getElementById("mp").value ;

    const done = {
    
      "nom": nom,
      "prenom": prenom,
      "login": login,
      "mp" : mp 

  } ;

    setData(done) ;

    var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjQ3MDEwNDExLCJleHAiOjE2NDc2MTUyMTF9.E1rtGv5_E7KnCxuh00_nbfNByjsY4frFHy3WQfJuY1IOc9udd8Prs4DSeeDA2bZa3ba9ACTGKoSmIEfYyDdKEA" ;
 
    axios.put(`http://Springbootrestfullmysqlaws-env.eba-pstvcvvj.us-east-1.elasticbeanstalk.com/api/clients/${client.id}` , done ,
    { headers: {"Authorization" : `Bearer ${token}`} })
    .then((res) => console.log(res.data)) ;


     
     document.getElementById('nom').value = '' ;
     document.getElementById('prenom').value = '' ;
     document.getElementById('login').value = '' ;

     console.log(data.nom) ;
     // window.location.reload(false);



            
     
  };

  const deleteClient = () => {
 

    var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjQ3MDEwNDExLCJleHAiOjE2NDc2MTUyMTF9.E1rtGv5_E7KnCxuh00_nbfNByjsY4frFHy3WQfJuY1IOc9udd8Prs4DSeeDA2bZa3ba9ACTGKoSmIEfYyDdKEA" ;
 
    axios.delete(`http://Springbootrestfullmysqlaws-env.eba-pstvcvvj.us-east-1.elasticbeanstalk.com/api/clients/${client.id}` ,
    { headers: {"Authorization" : `Bearer ${token}`} })
    .then((res) => console.log(res.data)) ;


     
     document.getElementById('nom').value = '' ;
     document.getElementById('prenom').value = '' ;
     document.getElementById('login').value = '' ;

     console.log(data.nom) ;
    // window.location.reload(false) ;



            
     
  } ;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
  
    const handleClick = (newPlacement) => (event) => {

      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);

    };


    return (

        <Box sx={{ width: 500 }}>
        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography sx={{ p: 2 }}>
                    CLIENT EDITION. <br /><br />
                    <label id="id" >CLIENT ID : {client.id}</label><br /><br />
                    <TextField id="nom" label="CLIENT NOM" variant="filled" defaultValue = {client.nom} /><br /><br />
                    <TextField id="prenom" label="CLIENT PRENOM" variant="standard" defaultValue = {client.prenom} /><br /><br />
                    <TextField id="login" label="CLIENT LOGIN" variant="outlined" defaultValue = {client.login} /><br /><br />
                    <TextField id="mp" label="MOT DE PASSE" variant="filled" value = {client.mp} /><br /><br />
                    
                    

                    <Stack direction="row" spacing={2}>

                   <Button variant="outlined" startIcon={<DeleteIcon />} onClick = {deleteClient} >
                            Delete
                     </Button>

             <Button variant="contained" endIcon={<SendIcon />} onClick={setClient} >
                       MODIFIER
                 </Button>

       <Button
        color="secondary"
      
        startIcon={<SaveIcon />}
        variant="contained"
        onClick={handleClick('left')}
      >
        FERMER

      </Button>

             </Stack>
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
  
            <Button variant="contained" onClick={handleClick('left')}>EDITE</Button>
 
      </Box>

       );
};

export default PopUp;