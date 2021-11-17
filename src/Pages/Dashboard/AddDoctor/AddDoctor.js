import { Button, Input, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name,setName]= useState('')
    const[email,setEmail] = useState('')
    const [image,setImage]= useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!image) {
            return
        }
        const formData = new FormData()
        formData.append('name',name)
        formData.append('email',email)
        formData.append('image',image)
        axios.post('',formData)
        .then(res=>console.log(res.data))
    }
    return (
        <>
            <h2>Add A Doctor</h2>
            <form>
                <TextField label="Name" sx={{ width: "50%" }} onClick={e=>setName(e.target.value)} required variant="standard" /> <br />
                <TextField label="Email" type="email" onClick={e=>setEmail(e.target.value)} sx={{ width: "50%" }} required variant="standard" /> <br /><br />
                <Input accept="image/*" type="file" onClick={e=>setImage(e.target.files[0])} /><br /><br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
        </>
    );
};

export default AddDoctor;