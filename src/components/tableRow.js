import React from 'react';
import {styled} from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

class TableRow_R extends React.Component{
    render() {
        return (
            <StyledTableRow key={this.props.rest.name}>
                <StyledTableCell component="th" scope="row">
                    {this.props.rest.name}
                </StyledTableCell>
                <StyledTableCell align="right">{this.props.rest.location}</StyledTableCell>
                <StyledTableCell align="right">{this.props.rest.max_capacity}</StyledTableCell>
            </StyledTableRow>
        )
    }
}

export default TableRow_R;
