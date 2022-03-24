import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ManagePost from './ManagePost';

const CardPost = (props) => {

   const poste = props.poste ;


 return (

  <div className = 'cardPost' style={{ padding: 30 }} >

    { poste.map((poste_) => (
 
 
  
        <Card sx={{ minWidth: 275 , marginBottom: 2 , padding: 2 , bgcolor: 'background.paper'}} >
        <CardContent>

           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

            ID CLIENT :  {poste_.clients} <br/><br/>
            MESSAGE ID :  {poste_.ref} <br/><br/>
            MESSAGE :  {poste_.message} <br/><br/>
            DATE MESSAGE :  {poste_.jour} <br/><br/>
            
           
            
          </Typography>
          
        </CardContent>

        <CardActions>
           <ManagePost poste = {poste_} />
        </CardActions>

      </Card>
     
 
    ))} 


      
    

      </div>

     ) ;
     } ;

  export default CardPost;