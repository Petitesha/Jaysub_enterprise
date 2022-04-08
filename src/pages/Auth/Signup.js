import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Authlayout from '../../Layout/Authlayout/Authlayout';
import { Link } from "react-router-dom";


export default function FormPropsTextFields() {
  return (
      <>
      <Authlayout>
          <div>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '32ch', },
        }}
        noValidate
        autoComplete="off"
        >
            <h3>Create Account</h3>
        <div>
            <TextField
            required
            id="outlined-disabled"
            label="First Name"
            defaultValue=" "
            />
            <TextField
            required
            id="outlined-disabled"
            label="Surname"
            defaultValue=" "
            />
        </div>
        <div>
        <TextField
            required
            id="outlined-disabled"
            label="Email Address"
            defaultValue=" "
            />
            <TextField
            required
            id="outlined-disabled"
            label="Mobile Number"
            defaultValue=" "
            /> 
        </div>
        <Box
        sx={{
            width: 570,
            maxWidth: '100%',
        }}
        >
        </Box>
        <TextField
        fullWidth
        id="outlined-disabled"
        label="Mobile Number"
        defaultValue=" "
        /> 
        <TextField
        fullWidth
        id="outlined-disabled"
        label="Mobile Number"
        defaultValue=" "
        /> 
        </Box>
      
        </div>
        <div>
            <button>Sign Up</button>
            <p>Already have an account?<span><Link to="/LogIn">Log In</Link></span></p>
        </div>
    </Authlayout>
  </>
  );
}
