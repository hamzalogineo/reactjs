import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import CardPost from './CardPost';


const PopUpDelete = (props) => {

  const client = props.client ;


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
        <Popper open={open} anchorEl={anchorEl} placement={placement} transition >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper style={{maxHeight: 795, overflow: 'auto'}}>
                <Typography sx={{ p: 2 }}>
                ENVOYER UNE DEMANDE CLIENT.<br /><br />
                ID CLIENT.{client.id} <br /><br />

                

                <CardPost poste = {client.postes} />
                
             
                  

                    <Stack direction="row" spacing={2}>
                    
             

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
        

            <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick('left')}>PUBLICATION</Button>
       
      </Box>

       );
};

export default PopUpDelete;