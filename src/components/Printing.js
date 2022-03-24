 
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import React from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';

class Printing extends React.PureComponent {





  render() {
    return (
      <div>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <Button variant="contained" endIcon={<SendIcon />} onClick={handlePrint}> IMPRIMER </Button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Printing ;