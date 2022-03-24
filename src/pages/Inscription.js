import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';




const Inscription = () => {


    return (
    


<PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)} > 
            INSCRIPTION OR SIGN UP
          </Button>
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
                
            Inscription page and have an child<br /><br />

            <TextField
                     label="CLIENT NOM"
                     id="outlined-size-small"
                     name='nom'
                     defaultValue=""       
                     size="small"
                    sx={{margin: '5px'}}
               />   <br /><br />

                    <TextField
                     label="CLIENT PRENOM"
                     id="outlined-size-small"
                     name='prenom'
                     defaultValue=""       
                     size="small"
                    sx={{margin: '5px'}}
               />   <br /><br />
               <TextField
                     label="CLIENT LOGIN OR EMAIL"
                     id="outlined-size-small"
                     name='login'
                     defaultValue=""       
                     size="small"
                    sx={{margin: '5px'}}
               />   <br /><br />
               <TextField
                     label="CLIENT PASSWORD"
                     id="outlined-size-small"
                     name='mp'
                     defaultValue=""       
                     size="small"
                    sx={{margin: '5px'}}
               />   <br /><br />
                    
                    

                    <Stack direction="row" spacing={2}>

                    <Button variant="contained">
                           INSCRIPTION
                    </Button>

                    </Stack>
        
            </Typography>
          </Popover>
        </div>
      )}

    </PopupState>
    
    );
};

export default Inscription;