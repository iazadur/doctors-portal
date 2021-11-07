import { TextField, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = (e) => {
        const user = {email}
        axios.put('http://localhost:5000/users/admin', user)
                .then((res) => {
                    if (res.data.modifiedCount) {
                        swal({
                            title: "Good job!",
                            text: "Successfully Make Admin!",
                            icon: "success",
                            buttons: false,
                            timer: 1500,
                        });
                    }
                })
        e.preventDefault()
    }
    return (
        <>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{width:1,m:1}} id="standard-basic" label="Email" variant="standard" type="email" name="email" onBlur={handleOnBlur}></TextField>
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </>
    );
};

export default MakeAdmin;