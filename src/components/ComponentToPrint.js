import * as React from 'react';

export const ComponentToPrint = React.forwardRef((props, ref) => {






    return (
      <div ref={ref}> 
         My cool content here! <br/><br/>
         <table>
   <caption>Passagers du vol 377</caption>

   <tr>
       <th>Nom</th>
       <th>Âge</th>
       <th>Pays</th>
   </tr>
   <tr>
       <td>Carmen</td>
       <td>33 ans</td>
       <td>Espagne</td>
   </tr>
   <tr>
       <td>Michelle</td>
       <td>26 ans</td>
       <td>États-Unis</td>
   </tr>
</table>
      </div>
           ) ;
           });


           

export default ComponentToPrint ;