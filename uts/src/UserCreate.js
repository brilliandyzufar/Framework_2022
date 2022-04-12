import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, TextField, Button, Typography, Avatar } from '@mui/material';
import { Email } from '@mui/icons-material';

export default function UserCreate() {
    const [fname, setFname] = useState(' ');
    const [lname, setlname] = useState(' ');
    const [username, setUsername] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [avatar, setAvatar] = useState(' ');
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom component="div">
                    Create Users
                </Typography>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="fname" label="First Name" variant="outlined" fullWidth required
                                onChange={(e) => setFname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="lname" label="Last Name" variant="outlined" fullWidth required
                                onChange={(e) => setlname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="username" label="Username" variant="outlined" fullWidth required
                                onChange={(e) => username(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="email" label="Email" variant="outlined" fullWidth required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="avatar" label="Avatar" variant="outlined" fullWidth required
                                onChange={(e) => setAvatar(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>CREATE</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </React.Fragment >
    );
}