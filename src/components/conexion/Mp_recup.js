import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const Mp_recup = () => {








    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>

          <Button color="secondary" {...bindTrigger(popupState)}> MOT DE PASSE OUBLIE ?</Button>
           
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}>
                
            RECUPERATION <br /><br />

            <TextField
                     label="GIVE LOGIN OR E-MAIL THANKS."
                     id="outlined-size-small"
                     name='email'
                     defaultValue=""       
                     size="small"
                    sx={{margin: '5px'}}
               />   <br /><br />

                   
                    <Stack direction="row" spacing={2}>

                    <Button variant="contained">
                           ENVOYER
                    </Button><br />

                    </Stack>
        
            </Typography>
          </Popover>
        </div>
      )}

    </PopupState>
    );
};

export default Mp_recup;