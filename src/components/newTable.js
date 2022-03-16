import React from 'react';
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow_R from "./tableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

class NewTable extends React.Component{

    render() {
        const rests = this.props.rests.map(rest =>
            // eslint-disable-next-line react/jsx-pascal-case
            <TableRow_R key={rest.id} rest={rest}/>
        );
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Restaurant Name</StyledTableCell>
                            <StyledTableCell align="right">Location</StyledTableCell>
                            <StyledTableCell align="right">Max Capacity</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rests}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default NewTable;