
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

class InnerRow extends React.Component{
    render() {
        return (
            <StyledTableRow key={this.props.menu.name}>
                <StyledTableCell component="th" scope="row">
                    {this.props.menu.name}
                </StyledTableCell>
                <StyledTableCell
                    align="right">{this.props.menu.cost}</StyledTableCell>
            </StyledTableRow>
        )
    }
}

export default InnerRow;
