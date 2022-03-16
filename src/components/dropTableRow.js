import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {styled} from "@mui/material/styles";
import InnerRow from "./innerRow";
import InnerRowStaff from "./innerRowStaff";


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

const StyledTableRowMain = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.info.light,
    },
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.info.light,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const StyledTableCellMain = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.info.light,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 18,
    },
}));





class DropTableRow extends React.Component {
    render() {
        return (
            <React.Fragment>
                <StyledTableRowMain key={this.props.rest.name}>

                    <StyledTableCellMain component="th" scope="row">
                        {this.props.rest.name}
                    </StyledTableCellMain>
                    <StyledTableCellMain align="right">{this.props.rest.location}</StyledTableCellMain>
                    <StyledTableCellMain align="right">{this.props.rest.max_capacity}</StyledTableCellMain>
                </StyledTableRowMain>
                <StyledTableRow>
                    <StyledTableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                        <Collapse in={true} timeout="auto" unmountOnExit>
                            <Box sx={{margin: 1}}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Menu
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <StyledTableRow>
                                            <StyledTableCell>Name</StyledTableCell>
                                            <StyledTableCell align="right">Total price ($)</StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.props.rest.menu.map(menu =>
                                            <InnerRow key={menu.id} menu={menu}/>
                                        )}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCell style={{paddingBottom: 40, paddingTop: 0}} colSpan={6}>
                        <Collapse in={true} timeout="auto" unmountOnExit>
                            <Box sx={{margin: 1}}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Staff
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <StyledTableRow>
                                            <StyledTableCell>First name</StyledTableCell>
                                            <StyledTableCell align="right">Last name</StyledTableCell>
                                            <StyledTableCell align="right">Role</StyledTableCell>
                                            <StyledTableCell align="right">Hourly Rate</StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.props.rest.staff.map(staff =>
                                            <InnerRowStaff key={staff.id} staff={staff}/>
                                        )}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </StyledTableCell>
                </StyledTableRow>
            </React.Fragment>
        )
    }
}
export default DropTableRow;
