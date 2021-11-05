import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';

import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { registerUser, isLoading, user, authError } = useAuth()
    const history = useHistory();
    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }
    console.log(loginData);
    const handleLogin = (e) => {
        if (loginData.password !== loginData.password2) {
            return alert("Your password didn't match")
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Login</Typography>
                        {!isLoading && <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Password"
                                type='password'
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Confirm Password"
                                type='password'
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <Button type="submit" sx={{ width: "50%", m: 1 }} variant="contained">Registration</Button>
                            <NavLink to="/login" style={{ textDecoration: "none" }}>
                                <Button variant="text">Already Register? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress disableShrink />}
                        {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={login} style={{ width: '100%' }} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;