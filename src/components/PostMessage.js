import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
 
import Stack from '@mui/material/Stack';
 
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import axios from "axios";
 
import TextareaAutosize from '@mui/material/TextareaAutosize';

const PostMessage = (props) => {


    const client = props.client ;


const postSms = () =>{

/*
            "ref": 6,
            "message": "ok test\r\nnew ok test",
            "jour": "2021-12-21 13:10:59",
            "clients": 10
 
*/

    
    var sms = document.getElementById('sms').value ;
    var jour = "2022-03-01 13:10:59" ;
    var cl = client.id ;


    const data_a = {

        "message": sms,
        "jour": jour,
        "clients": cl
    }

    var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjQ3MDEwNDExLCJleHAiOjE2NDc2MTUyMTF9.E1rtGv5_E7KnCxuh00_nbfNByjsY4frFHy3WQfJuY1IOc9udd8Prs4DSeeDA2bZa3ba9ACTGKoSmIEfYyDdKEA" ;
 
    axios.post(`http://Springbootrestfullmysqlaws-env.eba-pstvcvvj.us-east-1.elasticbeanstalk.com/api/postes/` , data_a ,
    { headers: {"Authorization" : `Bearer ${token}`} })
    .then((res) => console.log(res.data)) ;


     
     document.getElementById('sms').value = '' ;
    

     console.log(data_a.clients) ;

     // window.location.reload(false);


}

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
                    <label id="id" >CLIENT ID : {client.id}</label><br /><br />
                   
                    <TextareaAutosize

                   aria-label="minimum height"
                   minRows={15}
                   placeholder="SAISIR VOTRE MESSAGE."
                   style={{ width: 400 }}
                   id = "sms"
                   defaultValue = {''}

                 />
                    

                    <Stack direction="row" spacing={2}>
 

             <Button variant="contained" endIcon={<SendIcon />} onClick={postSms} >
                       POSTER.
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
  
            <Button variant="contained" onClick={handleClick('left')}>PUBLIER</Button>
 
      </Box>

    );
};

export default PostMessage;