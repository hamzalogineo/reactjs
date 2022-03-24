import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import axios from "axios";
import { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const ManagePost = (props) => {

    const poste = props.poste ;

    const [data , setData] = useState(        
        {
        "ref": 5,
        "message": "TEST NEW TEST \r\n\r\nTEST TEST\r\n\r\nNEW TEST\r\nTEW TEST\r\n\r\nNEW TEST AND TEST !!!!!",
        "jour": "2021-12-21 13:04:40",
        "clients": 10
    }
    
    ) ;
  
    
  
    
    const setPoste = () => {
  
     
      var message = document.getElementById('sms').value ;
     
  
      const done = {
    
        "message": message ,
        "jour": poste.jour,
        "clients": poste.clients
    } ;
  
      setData(done) ;
  
      var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjQ3MDEwNDExLCJleHAiOjE2NDc2MTUyMTF9.E1rtGv5_E7KnCxuh00_nbfNByjsY4frFHy3WQfJuY1IOc9udd8Prs4DSeeDA2bZa3ba9ACTGKoSmIEfYyDdKEA" ;
   
      axios.put(`http://Springbootrestfullmysqlaws-env.eba-pstvcvvj.us-east-1.elasticbeanstalk.com/api/postes/${poste.ref}` , done ,
      { headers: {"Authorization" : `Bearer ${token}`} })
      .then((res) => console.log(res.data)) ;
  
  
       
       document.getElementById('sms').value = '' ;
       
  
       console.log(data.nom) ;
       // window.location.reload(false);
  
  
  
              
       
    };
  
    const deletePoste = () => {
   
  
      var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjQ2MzQzMjQ3LCJleHAiOjE2NDY5NDgwNDd9.VdZV8lsM8x2g25LjbhscTUkdwrItBpJl6m92OvxLF5bnE2Org0HM3svd6deZc93qdHq8KnxdDrRn7J9Avj6jZg" ;
   
      axios.delete(`http://Springbootrestfullmysqlaws-env.eba-pstvcvvj.us-east-1.elasticbeanstalk.com/api/postes/${poste.ref}` ,
      { headers: {"Authorization" : `Bearer ${token}`} })
      .then((res) => console.log(res.data)) ;
  
  
       
       document.getElementById('sms').value = '' ;
        
  
       console.log(data.clients) ;
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
                  CLIENT EDITION POST. <br /><br />
                    <label id="id" >CLIENT ID : {poste.clients}</label><br /><br />
                    <label id="ref" >POSTE REF : {poste.ref}</label><br /><br />
                   
                    <TextareaAutosize

                   aria-label="minimum height"
                   minRows={15}
                   placeholder="SAISIR VOTRE MESSAGE."
                   style={{ width: 400 }}
                   id = "sms"
                   defaultValue = {poste.message}

                 />
                      
  
                      <Stack direction="row" spacing={2}>
  
                   

                       <IconButton aria-label="delete" onClick = {deletePoste} >
                          <DeleteIcon />
                       </IconButton>

                       <Fab color="secondary" aria-label="edit" onClick={setPoste} >
                            <EditIcon />
                        </Fab>


  
                
         <Button
          color="secondary"
        
          startIcon={<SaveIcon />}
          variant="contained"
          onClick={handleClick('left')}
        >
          FERMER
  
        </Button>


        <Fab color="primary" aria-label="add">
         <AddIcon />
       </Fab>


  
               </Stack>
                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
    
    

      <Fab color="secondary" aria-label="edit" onClick={handleClick('left')} >
        <EditIcon />
      </Fab>
   
        </Box>
  
         );
  };



export default ManagePost;


