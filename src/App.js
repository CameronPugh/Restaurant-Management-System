import React from 'react';
import NewTable from './components/newTable';
import DropTable from './components/dropTable';
import {Button, Container, Grid, Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rests: []};
    }

    async postData(url = '', method = '') {
        // Default options are marked with *
        const response = await fetch(url, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'accept':'*/*',
            },
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    componentDidMount() {

        this.postData('http://localhost:8080/restaurants','GET')
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
                this.setState({rests: data});
            }).catch(function (err) {
            console.log(err)
        });


    }

    render() {
        return (
            <Container maxWidth="xl">

                <Grid container spacing={4} justifyContent="flex-end">
                    <Grid item xs={8} md={9}>
                        <DropTable rests={this.state.rests} />
                    </Grid>
                    <Grid item xs={2} md={2.8} justifyContent="flex-end">
                        <Stack spacing={2}>
                            <Container maxWidth="xl">
                                <Box bgcolor="white"
                                     component="form"
                                     sx={{
                                         '& > :not(style)': { m: 1, width: '25ch' },
                                     }}
                                     noValidate
                                     autoComplete="off"
                                >

                                    <Typography variant="h6" gutterBottom component="div">
                                        Add a dish
                                    </Typography>

                                    <TextField
                                        id="standard-helperText"
                                        helperText="RestaurantID"
                                        label="RestaurantID"
                                        variant="standard"
                                    />
                                    <TextField
                                        id="standard-helperText"
                                        helperText="Dish Name"
                                        label="Dish Name"
                                        variant="standard"
                                    />
                                    <TextField
                                        id="standard-helperText"
                                        helperText="Price"
                                        label="Price"
                                        variant="standard"
                                    />
                                    <Button variant="contained">Add</Button>

                                </Box>

                            </Container>

                            <Container maxWidth="xl">

                                <Box bgcolor="white"
                                     component="form"
                                     sx={{
                                         '& > :not(style)': { m: 1, width: '25ch' },
                                     }}
                                     justify="flex-end"
                                     noValidate
                                     autoComplete="off"
                                >

                                    <Typography variant="h6"  gutterBottom component="div">
                                        Add A Member of Staff
                                    </Typography>

                                    <TextField
                                        id="standard-helperText"
                                        helperText="RestaurantID"
                                        label="RestaurantID"
                                        variant="standard"
                                    />
                                    <TextField
                                        id="standard-helperText"
                                        helperText="First Name"
                                        label="First Name"
                                        variant="standard"
                                    />
                                    <TextField
                                        id="standard-helperText"
                                        helperText="Last Name"
                                        label="Last Name"
                                        variant="standard"
                                    />
                                    <TextField
                                        id="standard-helperText"
                                        helperText="Role"
                                        label="Role"
                                        variant="standard"
                                    />
                                    <TextField
                                        id="standard-helperText"
                                        helperText="Pay"
                                        label="Pay"
                                        variant="standard"
                                    />
                                    <Button variant="contained">Add</Button>

                                </Box>

                            </Container>
                        </Stack>


                    </Grid>
                </Grid>

            </Container>
        )
    }

}


export default App;