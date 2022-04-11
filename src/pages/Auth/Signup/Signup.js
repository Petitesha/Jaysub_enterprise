import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Authlayout from '../../../Layout/Authlayout/Authlayout';
import { Link } from "react-router-dom";
import './Signup.modules.css';

export default function FormPropsTextFields() {
  return (
      <>
      <Authlayout>
          <div>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '29.7ch', },
            }}
            noValidate
            autoComplete="off"
            >
                <h3 className='create'>Create Account</h3>
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
                fullWidth
                /> 
            </div>
            </Box>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-disabled"
          label="Password"
          defaultValue=" "
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-disabled"
          label="Confirm Password"
          defaultValue=" "
        />
      </div>
    </Box> 
            <div className='signdiv'>
                <button>Sign Up</button>
                <p>Already have an account?<span><Link to="/LogIn" className='link'>Log In</Link></span></p>
            </div>
        </div>
    </Authlayout>
  </>
  );
}
