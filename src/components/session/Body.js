import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Contenu from './Contenu';
import { AutoFixHigh } from '@mui/icons-material';

const Body = () => {

 
  



    return (
        <div className='appBody'>

           xxxx.................



           <Paper style={{maxHeight: 1000, maxWidth: 1500, overflow: 'auto'}}>

           <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
           <Contenu />
           <Contenu />
           <Contenu />
           <Contenu />
           <Contenu />
           <Contenu />
           <Contenu />
           <Contenu />
           <Contenu />
           <Contenu />
           <Contenu />
           <Contenu />
           <Contenu />
           <Contenu />

  </Grid>   
   
</Grid> 
                       
           </Paper>

        </div>
    );
};

export default Body;