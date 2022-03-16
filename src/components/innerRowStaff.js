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

class InnerRowStaff extends React.Component{
    render() {
        return (
            <StyledTableRow key={this.props.staff.first_name}>
                <StyledTableCell component="th" scope="row">
                    {this.props.staff.first_name}
                </StyledTableCell>
                <StyledTableCell
                    align="right">{this.props.staff.last_name}</StyledTableCell>
                <StyledTableCell
                    align="right">{this.props.staff.job_role}</StyledTableCell>
                <StyledTableCell
                    align="right">{this.props.staff.hourly_rate}</StyledTableCell>
            </StyledTableRow>
        )
    }
}

export default InnerRowStaff;
