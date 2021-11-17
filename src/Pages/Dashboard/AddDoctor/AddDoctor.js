import { Button, Input, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [success, setSuccess] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(image);
        if (!image) {
            return
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        //using fetch
        // fetch('https://limitless-forest-77951.herokuapp.com/doctors', {
        //     method: 'POST',
        //     body: formData 
        // })

        axios.post('https://limitless-forest-77951.herokuapp.com/doctors', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess('Doctor Added Successfully!')
                }
            })
    }
    console.log(success)
    return (
        <>
            <h2>Add A Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" sx={{ width: "50%" }} onBlur={e => setName(e.target.value)} required variant="standard" /> <br />
                <TextField label="Email" type="email" onBlur={e => setEmail(e.target.value)} sx={{ width: "50%" }} required variant="standard" /> <br /><br />
                <Input accept="image/*" type="file" onBlur={e => setImage(e.target.files[0])} /><br /><br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
        </>
    );
};

export default AddDoctor;