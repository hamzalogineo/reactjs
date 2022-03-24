import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import TableFooter from '@mui/material/TableFooter';
 

import Stack from '@mui/material/Stack';
import PopUp from './PopUp';
import PopUpDelete from './PopUpDelete';
import PostMessage from './PostMessage';


 
 


const TableauPagination = (props) => {
 
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

      
    
      const rows = props.donnee ;

      const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const CustomTablePagination = styled(TablePaginationUnstyled)`
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }

  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }

  & .MuiTablePaginationUnstyled-actions {
    display: flex;
    gap: 0.25rem;
  }
`;


 
    return (
        <div className='tableau'>

              <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID CLIENT</StyledTableCell>
            <StyledTableCell align="center">CLIENT</StyledTableCell>
            <StyledTableCell align="center">LOGIN&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="center">MOT DE PASSE&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="center">ACTION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow key={row.id}>
            <StyledTableCell component="th" scope="row">
              {row.id}
            </StyledTableCell>
            <StyledTableCell align="right">{row.prenom}  {row.nom}</StyledTableCell>
            <StyledTableCell align="right">{row.login}</StyledTableCell>
            <StyledTableCell align="right">{row.mp}</StyledTableCell>
            <StyledTableCell align="center">
            <div className='pop-position'>
                  <Stack direction="row" spacing={-45}>

                        <PopUp client = {row} key = {row.id} />
                        
                        <PopUpDelete client = {row} key = {row.id} />

                        <PostMessage client = {row} key = {row.id} />
                         
                  </Stack>

            </div>   
       

                </StyledTableCell>
          </StyledTableRow>
        ))}

        {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={3} />
            </tr>
          )}

        </TableBody>

        <TableFooter>
          <TableRow>
          <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              componentsProps={{
                select: {
                  'aria-label': 'rows per page',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
         </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
 
        </div>

    );
};

export default TableauPagination;